// 入参
const arr = [
  { id: 1, name: "i1" },
  { id: 2, name: "i2", parentId: 1 },
  { id: 4, name: "i4", parentId: 3 },
  { id: 3, name: "i3", parentId: 2 },
  { id: 8, name: "i8", parentId: 7 },
];

// 出参
// {
//   id: 1,
//   name: "i1",
//   children: [
//     {
//       id: 2,
//       name: "i2",
//       children: [],
//     },
//   ],
// };

function buildTree(arr) {
  let tree;
  const map = {};

  arr.forEach((item) => {
    const node = { ...item, children: [] };
    map[node.id] = node;

    if (node.parentId === undefined) {
      // 用于判断是否为根节点
      tree = node;
    } else {
      const parentNode = map[node.parentId];
      if (parentNode) {
        delete node.parentId; // 删除父节点id
        parentNode.children.push(node);
      }
    }
  });

  return tree;
}
const output = buildTree(arr);
console.log(output);
