import { circularPack, getTreeData } from './d3';
import { clone } from 'itemsjs/lib/helpers';
import { useEffect, useRef } from 'react';

export default function CircularVis({ profiles, topics, size = 700 }) {
  const svg = useRef(null);

  useEffect(async () => {
    // TODO refactor this code
    // clone the orgs array to avoid conflicts
    const primaryTopic = clone(profiles);
    // Show orgs based on primary topic
    primaryTopic.filter((el) => el.topic.pop() && el.topic.length);
    // generate the data for the visualization
    const treeData = getTreeData(primaryTopic, topics);

    circularPack(treeData, {
      svgRef: svg,
      label: (d, n) => [...d.data.title.split(/(?=[A-Z][a-z])/g)].join('\n'),
      title: (d) => d.data.title,
      width: size,
      height: size
    });
  }, [svg]);

  return (
    <div id="chart" className="flex justify-center my-4">
      <svg ref={svg} />
    </div>
  );
}
