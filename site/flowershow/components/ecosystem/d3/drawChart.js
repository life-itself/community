// import crypto from 'crypto';
import { Swatches } from './swatches';
import { MD5 } from 'crypto-js';
import * as d3 from 'd3';
import { barycentric, ternaryPlot } from 'd3-ternary';

// import Logo from "public/life-itself-logo.svg";

// A merger of learnings from
// https://observablehq.com/@julesblm/usda-soil-textural-triangle?collection=@julesblm/ternary-plots
// ...
/** Draw a ternary plot in d3
 * @param plot: a result of calling ternaryPlot
 *
 * from https://observablehq.com/@julesblm/d3-ternary?collection=@julesblm/ternary-plots#drawTernaryPlot
 * */
export const drawChart = async (svgRef, orgs) => {
  const labels = ['Systems Change', 'Inner Change', 'Cultural Change'];
  // const labels = ["Inner Change", "Cultural Change", "Systems Change"];

  const width = 600;
  const height = 450;
  const radius = height / 2;

  const dotRadius = 3;

  const dimNames = ['systems', 'inner', 'cultural'];

  // test data
  // const sampleData = [
  //   { title: "a", inner: 1, cultural: 1, systems: 20 },
  //   { title: "b", inner: 20, cultural: 1, systems: 1 },
  // ];
  // const data = sampleData

  const data =
    orgs &&
    orgs.slice(0, 33).map((org) => {
      // let's perturb the values a tiny bit in order to avoid dots overlapping
      for (const dim of dimNames) {
        // org[dim] = parseFloat(org[dim]) + (Math.random() * 2 * dotRadius / height)
        // perturb location based on name (so pseudo-random but repeatable so diagram looks same time after time)
        const randomish =
          0.2 +
          parseInt(MD5(org.title).toString(), 16) /
            // parseInt(crypto.createHash("md5").update(org.title).digest("hex"), 16) /
            2 ** 128;

        org.social_change[dim] =
          parseFloat(org.social_change[dim]) + (randomish * 4 * dotRadius) / height;
      }
      return org;
    });

  if (data) {
    const topics = data
      .map((el) => el.topic)
      .reduce((prev, current) => {
        let array = prev.concat(current);
        return (array = [...new Set([...prev, ...current])]);
      });

    const normalBarycentric = barycentric(data);
    const someTernaryPlot = ternaryPlot(normalBarycentric)
      .radius(radius)
      .labels(labels)
      .domains([
        [1, 0],
        [1, 0],
        [1, 0]
      ])
      .labelAngles([-60, 0, 60])
      .labelOffsets([35, 35, 35])
      .tickAngles([-60, 0, 60])
      .tickTextAnchors(['start', 'end', 'start']);

    const ternaryPlotForArrows = ternaryPlot(normalBarycentric)
      .labelOffsets([25, 25, 25])
      // .labelAngles([-120, 120, 180]);
      .labelAngles([180, 60, -240]);

    const svg = d3.select(svgRef);

    const yOffset = height / 2 + radius / 4;
    // const yOffset = 50;

    // HACK multiply by 1.2 as otherwise part of diagram cut off
    svg.attr('viewBox', [-width / 2, -yOffset, width, height]);
    // .attr("width", width)
    // .attr("height", height)

    const chart = svg
      .append('g')
      // .attr("transform", `translate(${width / 2} ${yOffset})`)
      .attr('font-family', 'Nunito Sans');

    const defs = svg.append('defs');

    const clipPath = defs
      .append('clipPath')
      .attr('id', 'trianglePath')
      .append('path')
      .attr('d', someTernaryPlot.triangle());

    defs
      .append('marker')
      .attr('id', 'arrow')
      .attr('markerWidth', '10')
      .attr('markerHeight', '10')
      .attr('refX', '0')
      .attr('refY', '3')
      .attr('orient', 'auto')
      .attr('markerUnits', 'strokeWidth')
      .append('path')
      .attr('d', 'M0,0 L0,6 L9,3 z')
      .style('fill', '#333');

    // ==========
    // Label dots and their labels
    const fontSize = 6;

    const labelPoints = [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1]
    ].map((d) => {
      const [x, y] = someTernaryPlot(d);
      return { x, y };
    });

    const axisTicksGroups = chart
      .append('g')
      .attr('class', 'ternary-ticks')
      .attr('font-size', fontSize)
      .selectAll('g')
      .data(someTernaryPlot.ticks())
      .join('g')
      .attr('class', 'axis-ticks')
      .call((g) => ticks(g));

    const axisLabelsGroup = chart
      .append('g')
      .attr('class', 'axis-labels')
      .append('g')
      .attr('class', 'labels')
      .attr('font-size', fontSize + 2)
      .attr('font-weight', 900)
      .attr('fill', '#333')
      .call(axisLabels, someTernaryPlot.axisLabels());

    const axisArrowGroup = chart
      .append('g')
      .attr('class', 'axis-arrows')
      .append('g')
      .attr('class', 'arrows')
      .call(axisArrows, ternaryPlotForArrows.axisLabels({ center: true }));

    const labelDots = chart
      .append('g')
      .attr('class', 'label-dots')
      .selectAll('circle')
      .data(labelPoints)
      .join('circle')
      .attr('r', 3)
      .attr('cx', (d) => d.x)
      .attr('cy', (d) => d.y)
      .attr('fill', '#333');

    // initial triangle
    // For now let's hide this ...
    // and instead draw a point for each core item
    const trianglePath = chart
      .append('path')
      .attr('class', 'triangle-path')
      .attr('d', someTernaryPlot.triangle())
      .attr('fill', 'transparent')
      .attr('stroke', 'black')
      .attr('title', 'Initial untransformed triangle')
      .attr('stroke-width', 1)
      .attr('stroke-opacity', 0.1);

    // const logoWidth = 80;
    // const logo = svg
    //   .append("g")
    //   .attr("class", "vis-logo")
    //   .append("svg:image")
    //   .attr("width", logoWidth)
    //   // .attr("height", logoHeight)
    //   .attr("x", () => labelPoints[0].x - logoWidth)
    //   .attr("y", () => labelPoints[1].y)
    //   .attr("xlink:href", Logo.src);

    //  const gridLinesPaths = someTernaryPlot
    //    .gridLines()
    //    .map((axisGrid) => axisGrid.map(d3.line()).join(" "));
    //
    //  const gridGroup = chart
    //    .append("g")
    //    .attr("class", "grid")
    //    .call(grid, gridLinesPaths);
    //

    const ternaryData = data.map((d, i) => {
      const [x, y] = someTernaryPlot([
        d.social_change.systems,
        d.social_change.inner,
        d.social_change.cultural
      ]);
      return {
        x,
        y,
        color: d3.schemeSet3[topics.findIndex((t) => d.topic.includes(t))],
        ...d
      };
    });

    const dotsContainer = chart
      .append('g')
      .attr('class', 'data')
      .selectAll('g')
      .data(ternaryData)
      .enter()
      .append('g')
      .attr('class', 'chart-data');

    const dotsLabel = dotsContainer
      .append('text')
      .attr('font-size', fontSize)
      .attr('font-family', 'Nunito Sans')
      .attr('x', (d) => d.x + dotRadius * 2)
      .attr('dy', (d) => d.y + fontSize / 2)
      .attr('cursor', 'default')
      .style('fill', '#000')
      .style('opacity', 0)
      .text((d) => d.title);

    // data
    const dots = dotsContainer
      // .append("g")
      // cut off dots at edge of triangle
      // actually don't want this as a lot of stuff is on a boundary
      // .attr("clip-path", "url(#trianglePath)")
      .append('circle')
      // .data(ternaryData)
      // .join("circle")
      .attr('r', dotRadius)
      .attr('cx', (d) => d.x)
      .attr('cy', (d) => d.y)
      .attr('fill', (d) => d.color)
      .attr('vector-effect', 'non-scaling-stroke')
      .attr('stroke', '#444');

    // tooltips
    const tooltip = d3.select('#tooltip');

    dots
      .on('mouseover', () => {
        return tooltip.style('display', 'flex').style('opacity', 1);
      })
      .on('mousemove', (event, d) => {
        const { title, regions, color } = d;

        tooltip.style('background', `${color}85`).html(`
          <span>Name: ${title}</span>
          <span>Region: ${regions}</span>
        `);

        /* Chart has relative positioning so need to 
        calculate left and top offset values for mouse position */
        const parentElement = svgRef.parentElement.getBoundingClientRect();

        return tooltip
          .style('left', `${event.clientX - parentElement.left + 10}px`)
          .style('top', `${event.clientY - parentElement.top}px`);
      })
      .on('mouseleave', () => {
        return tooltip.style('opacity', 0).style('display', 'none');
      });

    const colorLegend = Swatches(d3.scaleOrdinal(topics, d3.schemeSet3), {
      columns: '100px'
    });

    d3.select('#color-legend').html(colorLegend);

    d3.select('#labels-checkbox').on('change', (event) => {
      dotsLabel.transition().style('opacity', event.target.checked ? 1 : 0);
    });

    return svg;
  }

  return svgRef;
};

const grid = (g, gridLines) =>
  g
    .selectAll('path')
    .data(gridLines)
    .join(
      (enter) =>
        enter
          .append('path')
          .attr('d', (d) => d)
          .attr('stroke', '#e3e3e3')
          .attr('stroke-width', (d, i) => (i & 1 ? 1 : 2)),
      (update) => update.attr('d', (d) => d)
      // theres no exit, lines are only drawn upto 'initial' triangle bounds
    );

const epsilon = 0.0001;
const ticks = (g) => {
  return g
    .selectAll('g')
    .data(
      (d) => d,
      (d) => d.tick
    )
    .join(
      (enter) => {
        const tickGroups = enter
          .append('g')
          .attr('class', 'tick')
          .attr('transform', (tick) => `translate(${tick.position})`);

        tickGroups
          .append('text')
          .style('fill', '#333')
          .attr('text-anchor', (tick) => tick.textAnchor)
          .attr('transform', (tick) => `rotate(${tick.angle})`)
          .attr('dx', (tick) => (-tick.size - 5) * (tick.textAnchor === 'start' ? -1 : 1))
          .attr('dy', '.5em')
          .text((tick) => tick.tick);

        tickGroups
          .append('line')
          .attr('transform', (d) => `rotate(${d.angle + 90})`)
          .attr('y2', (tick) => tick.size * (tick.textAnchor === 'start' ? -1 : 1))
          .attr('stroke', 'grey');

        return tickGroups;
      },
      (update) => update.attr('transform', (tick) => `translate(${tick.position})`),
      (exit) => exit.attr('opacity', epsilon).remove()
    );
};

const axisLabels = (g, labels) =>
  g
    .selectAll('text')
    .data(labels, (d) => d.label)
    .join(
      (enter) => {
        enter
          .append('text')
          .attr('text-anchor', 'middle')
          .attr('stroke', 'white')
          .attr('stroke-width', 7)
          .attr('paint-order', 'stroke')
          .attr('alignment-baseline', 'middle')
          .attr('transform', (label, i) => `translate(${label.position})rotate(${label.angle})`)
          .text((d) => d.label);
      },
      (update) =>
        update.attr('transform', (label, i) => `translate(${label.position})rotate(${label.angle})`)
    );

const axisArrows = (g, arrows) =>
  g
    .selectAll('text')
    .data(arrows, (d) => d.label)
    .join(
      (enter) => {
        enter
          .append('line')
          .attr('stroke', '#333')
          .attr('x1', (d, i) => (i === 2 ? 40 : -40))
          .attr('x2', (d, i) => (i === 2 ? -40 : 40))
          .attr('transform', (arrow, i) => `translate(${arrow.position})rotate(${arrow.angle})`)
          .attr('marker-end', 'url(#arrow)');
      },
      (update) =>
        update.attr('transform', (arrow, i) => `translate(${arrow.position})rotate(${arrow.angle})`)
    );
