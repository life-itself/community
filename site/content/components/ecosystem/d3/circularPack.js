import * as d3 from "d3";

export function circularPack(
  data,
  {
    svgRef,
    // data is either tabular (array of objects) or hierarchy (nested objects)
    path, // as an alternative to id and parentId, returns an array identifier, imputing internal nodes
    id = Array.isArray(data) ? (d) => d.id : null, // if tabular data, given a d in data, returns a unique identifier (string)
    parentId = Array.isArray(data) ? (d) => d.parentId : null, // if tabular data, given a node d, returns its parent’s identifier
    children, // if hierarchical data, given a d in data, returns its children
    value, // given a node d, returns a quantitative value (for area encoding; null for count)
    sort = (a, b) => d3.descending(a.value, b.value), // how to sort nodes prior to layout
    label, // given a leaf node d, returns the display name
    title, // given a node d, returns its hover text
    width = 640, // outer width, in pixels
    height = 400, // outer height, in pixels
    padding = 3, // separation between circles
    fillOpacity, // fill opacity for leaf circles
  } = {}
) {
  // If id and parentId options are specified, or the path option, use d3.stratify
  // to convert tabular data to a hierarchy; otherwise we assume that the data is
  // specified as an object {children} with nested objects (a.k.a. the “flare.json”
  // format), and use d3.hierarchy

  const root =
    path != null
      ? d3.stratify().path(path)(data)
      : id != null || parentId != null
      ? d3.stratify().id(id).parentId(parentId)(data)
      : d3.hierarchy(data, children);

  // Compute the values of internal nodes by aggregating from the leaves.
  value == null ? root.count() : root.sum((d) => Math.max(0, value(d)));

  // Compute labels and titles.
  const descendants = root.descendants();
  const leaves = descendants.filter((d) => !d.children);
  leaves.forEach((d, i) => (d.index = i));
  const L = label == null ? null : leaves.map((d) => label(d.data, d));
  const T = title == null ? null : descendants.map((d) => title(d.data, d));

  // Sort the leaves (typically by descending value for a pleasing layout).
  if (sort != null) root.sort(sort);

  // Create color scheme
  const color = d3.scaleSequential(d3.interpolateYlOrBr).domain([-2, 12]);

  // Compute the layout.
  d3
    .pack()
    .size([width, height])
    .padding(padding)(root);

  let focus = root;
  let view;

  const svg = d3
    .select(svgRef.current)
    .attr("viewBox", [-width / 2, -height / 2, width, height])
    .attr("width", width)
    .attr("height", height)
    .attr("style", "max-width: 100%; height: auto; height: intrinsic;")
    .attr("font-family", "Nunito Sans")
    .attr("font-size", 10)
    .attr("text-anchor", "middle")
    .on("click", (event) => zoom(event, root));

  const nodeDefs = svg.selectAll(null).data(descendants).enter().append("defs");

  const node = svg.selectAll(null).data(descendants).enter().append("g");

  const nodeCircle = node
    .append("circle")
    .attr(
      "fill",
      (d) => color(d.depth)
      // d.children ? color(d.depth) : color(color.domain().pop())
    )
    .attr("fill-opacity", (d) => (d.children ? null : fillOpacity))
    .attr("r", (d) => d.r)
    .on("click", (event, d) => {
      const zoomNode = !d.children ? d.parent : d
      return focus !== zoomNode && (zoom(event, zoomNode), event.stopPropagation());
    });

  if (T) node.append("title").text((d, i) => T[i]);

  let nodeList;
  let nodeLogo;
  let nodeCircleClipPath;

  if (L) {
    // A unique identifier for clip paths (to avoid conflicts).
    const uid = `O-${Math.random().toString(16).slice(2)}`;

    const defs = nodeDefs.filter((d) => {
      return !d.children && d.r > 10 && L[d.index] != null;
    });

    nodeCircleClipPath = defs
      .append("clipPath")
      .attr("id", (d) => `${uid}-image-${d.index}`)
      .append("circle")
      .attr("r", (d) => d.r);

    nodeList = node.filter((d) => {
      return !d.children && d.r > 10 && L[d.index] != null;
    });

    nodeLogo = nodeList
      .append("image")
      .attr("xlink:href", (d) => {
        const { data: { data: orgs }} = d
        const logo = orgs && orgs.logo;
        return logo ? (logo.cached_new || logo.url) : "";
      })
      .attr("clip-path", (d) => `url(#${uid}-image-${d.index})`)
      .attr("pointer-events", "none");
  }

  zoomTo([root.x, root.y, root.r * 2]);

  function zoomTo(v) {
    const k = width / v[2];

    view = v;

    node.attr("transform", (d) => {
      return `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`;
    });
    nodeList.attr(
      "transform",
      (d) => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`
    );
    nodeCircle.attr("r", (d) => d.r * k);
    nodeCircleClipPath.attr("r", (d) => d.r * k);
    nodeLogo
      .attr("preserveAspectRatio", "xMidYMid")
      .attr("width", (d) => d.r * 2 * k)
      .attr("height", (d) => d.r * 2 * k)
      .attr("x", (d) => -d.r * k)
      .attr("y", (d) => -d.r * k);
  }

  function zoom(event, d) {
    focus = d;

    const transition = svg
      .transition()
      .duration(event.altKey ? 7500 : 750)
      .tween("zoom", (d) => {
        const i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2]);
        return (t) => zoomTo(i(t))
      });
  }

  return svg.node();
}