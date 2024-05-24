import React, { useState } from "react";
import { mock } from "./mock";

const TreeItem = ({ item, path, setBreadcrumbPath }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // 点击展开收起
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
    setBreadcrumbPath([...path, item.itemName].join("/"));
  };

  // 判断是否有子节点
  const hasChildren =
    item.subCategoryTreeItemList && item.subCategoryTreeItemList.length > 0;

  return (
    <div>
      <div
        onClick={hasChildren && handleToggle}
        style={{
          width: "800px",
          cursor: hasChildren ? "pointer" : "default",
          padding: "2px",
        }}
      >
        <li
          style={{
            width: "100%",
            listStyle: "none",
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid #ccc",
            backgroundColor: "#e8dfee",
            padding: "5px 10px",
          }}
        >
          <span>{item.itemName}</span>
          <span>
            {hasChildren &&
              (isExpanded ? (
                <a href="javascript:;" style={{ textDecoration: "none" }}>
                  收起
                </a>
              ) : (
                <a href="javascript:;" style={{ textDecoration: "none" }}>
                  展开
                </a>
              ))}
          </span>
        </li>
      </div>
      {isExpanded &&
        (item.subCategoryTreeItemList || []).map((childItem) => (
          <div style={{ marginLeft: "20px" }}>
            <TreeItem
              item={childItem}
              path={[...path, item.itemName]}
              setBreadcrumbPath={setBreadcrumbPath}
            />
          </div>
        ))}
    </div>
  );
};

const CategoryTree = ({ data }) => {
  const [breadcrumbPath, setBreadcrumbPath] = useState("");
  return (
    <div>
      <div>{breadcrumbPath}</div>
      <span>全部</span>
      {data.subCategoryTreeItemList.map((item) => (
        <TreeItem
          key={item.catId}
          item={item}
          path={[item.itemName]}
          setBreadcrumbPath={setBreadcrumbPath}
        />
      ))}
    </div>
  );
};

export default function GoodsTree() {
  return (
    <div className="App">
      <CategoryTree data={mock} />
    </div>
  );
}
