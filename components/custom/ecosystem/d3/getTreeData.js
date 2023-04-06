import * as d3 from "d3"

/**
  * treeData is d3.stratify() data
  * Hierarchal
**/
export function getTreeData(orgs, topics) {
  const example = `
        id,parentId,Xsize,img
        cars,
        owned,cars
        traded,cars
        learned,cars
        pilot,owned,40
        325ci,owned,40
        accord,owned,20
        chevette,traded,10
        odyssey,learned,20
        maxima,learned,10
    `;
  // return d3.stratify()(d3.csvParse(example));

  let preppedData = [{ id: "root", parentId: null, name: "Social Change" }];
  for (const topic of topics) {
    preppedData.push({
      parentId: "root",
      ...topic,
    });
  }
  for (const org of orgs) {
    if (org.topic && org.topic[0]) {
      preppedData.push({
        parentId: org.topic[0],
        ...org,
      });
      if (org.topic[1]) {
        preppedData.push({
          parentId: org.topic[1],
          ...org,
        });
      }
    }
  }

  const treeData = d3
    .stratify()
    .id((d) => d["id"])
    .parentId((d) => d["parentId"])(preppedData);
  return treeData;
}