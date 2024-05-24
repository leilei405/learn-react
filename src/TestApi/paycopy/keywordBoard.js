import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Button, Popup } from "antd-mobile";
import { CloseOutline } from "antd-mobile-icons";
import "./keywordBoard.css";

const keywordArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."];

const KeyWord = (props, ref) => {
  const [visible, setVisible] = useState(false);
  const [disable, setDisable] = useState(false);

  useImperativeHandle(
    ref,
    () => ({
      open: () => setVisible(true),
      close: () => setDisable(true),
      isDeleteButtonDisabled: (bool) => setDisable(bool),
    }),
    []
  );

  return (
    <Popup visible={visible} mask={false} bodyStyle={{ height: "30vh" }}>
      <div className="board">
        <div className="keywordNum">
          {keywordArr.map((item, index) => (
            <Button
              onClick={() => props.handleItems(item)}
              style={item === 0 ? { width: "66.66%" } : {}}
              key={index}
            >
              {item}
            </Button>
          ))}
        </div>
        {/* 提现 & 删除金额 */}
        <div className="action">
          <Button onClick={() => props.handleItems("del")}>
            <CloseOutline />
          </Button>
          <Button
            onClick={() => props.handleItems("pay")}
            disabled={disable}
            color={"primary"}
          >
            提现
          </Button>
        </div>
      </div>
    </Popup>
  );
};

export default forwardRef(KeyWord);
