import { useEffect, useRef } from 'react';
import { drawChart } from './d3';

export default function TernaryPlot({ profiles }) {
  let svg = useRef(null);

  useEffect(async () => {
    drawChart(svg, profiles);
  }, [svg]);

  return (
    <div id="chart" className="relative fixed left-1/2 -translate-x-1/2 mb-8 lg:w-[80vw] max-w-5xl">
      <svg ref={(el) => (svg = el)} />
      <div
        id="tooltip"
        className="absolute flex flex-col w-[fit-content] max-w-[200px] font-bold p-2.5 opacity-0 rounded hidden text-sm"
      />
      <div
        id="legend-container"
        className="grid gap-4 pt-8 pb-0 lg:pb-4 text-xs font-bold mx-auto max-w-2xl sm:px-6 lg:px-0">
        <div className="grid gap-2 lg:grid-flow-col lg:auto-cols-max">
          <span className="min-w-[100px]">Labels:</span>
          <label className="flex items-center text-[12px]">
            <input
              id="labels-checkbox"
              type="checkbox"
              className="text-[#f0ca5e] focus:ring-[#f0ca5e] transition duration-200 mr-2"
            />
            Show all labels
          </label>
        </div>
        <div className="grid gap-2 lg:grid-cols-[auto,1fr]">
          <span className="min-w-[100px]">Legend:</span>
          <div id="color-legend" className="w-full" />
        </div>
      </div>
    </div>
  );
}
