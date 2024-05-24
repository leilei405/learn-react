export function generateListAndPaths(data) {
  const paths = []; // 用于存储所有路径
  const listItems = []; // 用于存储列表项

  function traverse(items, parentPath = "") {
    items.forEach((item) => {
      const currentPath = parentPath
        ? `${parentPath}/${item.itemName}`
        : item.itemName;
      paths.push(currentPath); // 将当前路径添加到路径列表中

      // 构建列表项，包括名称和展开/收起图标（这里用文本表示）
      const listItem = {
        name: item.itemName,
        toggle: "展开/收起图标", // 实际应用中可以替换为图标组件或符号
      };
      listItems.push(listItem); // 将当前列表项添加到列表项列表中

      // 如果有子项，则递归遍历子项
      if (
        item.subCategoryTreeItemList &&
        item.subCategoryTreeItemList.length > 0
      ) {
        traverse(item.subCategoryTreeItemList, currentPath);
      }
    });
  }

  traverse(data.subCategoryTreeItemList); // 从根节点的子项开始遍历

  // 返回构建好的路径和列表项
  return { paths, listItems };
}
