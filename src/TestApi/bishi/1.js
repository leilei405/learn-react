/**
 * @param {INode[]} list
 */
function printTree(list) {
  const nodeMap = {}; // 创建节点映射

  // 第一步：将节点添加到映射中
  list.forEach((node) => {
    nodeMap[node.id] = node;
  });

  // 第二步：定义递归函数来打印树
  function printNode(nodeId, indent) {
    const node = nodeMap[nodeId]; // 从映射中获取节点
    if (!node) return; // 如果节点不存在，返回

    console.log(indent + node.name); // 打印当前节点

    // 查找当前节点的所有子节点并递归打印它们
    const childrenIds = list
      .filter((child) => child.parentId === nodeId)
      .map((child) => child.id);
    childrenIds.forEach((childId) => printNode(childId, indent + "  ")); // 增加缩进并递归打印子节点
  }

  // 第三步：从根节点开始打印（parentId 为 null）
  const rootNodes = list.filter((node) => node.parentId === null);
  rootNodes.forEach((rootNode) => printNode(rootNode.id, "")); // 根节点的缩进为空
}

function printTree1(list) {
  // 第一步：使用 Map 创建节点映射
  const nodeMap = new Map(list.map((node) => [node.id, node]));

  // 第二步：定义递归函数来打印树
  function printNode(nodeId, indent = "") {
    const node = nodeMap.get(nodeId);
    if (!node) return; // 如果节点不存在，返回

    console.log(indent + node.name); // 打印当前节点

    // 第三步：查找并打印子节点
    const children = list.filter((child) => child.parentId === nodeId);
    children.forEach((child) => printNode(child.id, indent + "  ")); // 递归打印子节点，并增加缩进
  }

  // 第四步：从根节点开始打印（parentId 为 null）
  list
    .filter((node) => node.parentId === null)
    .forEach((rootNode) => printNode(rootNode.id));
}

// ---------- 以下是测试 demo ----------
const list = [
  { id: 1001, parentId: null, name: "AA" },
  { id: 1002, parentId: 1001, name: "BB" },
  { id: 1003, parentId: 1001, name: "CC" },
  { id: 1004, parentId: 1003, name: "DD" },
  { id: 1005, parentId: 1003, name: "EE" },
  { id: 1006, parentId: 1002, name: "FF" },
  { id: 1007, parentId: 1002, name: "GG" },
  { id: 1008, parentId: 1004, name: "HH" },
  { id: 1009, parentId: 1005, name: "II" },
];

printTree(list); // 调用 printTree 函数
