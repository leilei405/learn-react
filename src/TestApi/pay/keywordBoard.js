import React, { useImperativeHandle, forwardRef } from "react";
import { Button, Popup, Dialog, Toast } from "antd-mobile";
import { CloseOutline } from "antd-mobile-icons";
import "./keywordBoard.css";

const KeywordBoard = forwardRef((props, ref) => {
  const { visible, handleChangeAmount, totalAmount = 0 } = props;
  const [amount, setAmount] = useState("");
  const [history, setHistory] = useState([]);

  // 键盘数据
  const keywordArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."];

  useImperativeHandle(
    ref,
    () => ({
      setAmount,
      amount,
      history,
    }),
    []
  );

  // 输入金额
  const handleInput = (amountValue) => {
    handleChangeAmount(amountValue);
  };

  // 删除金额
  const handleDeleteAmount = () => {
    if (amount && amount.toString().length > 0) {
      setAmount(amount.toString().slice(0, -1));
    }
  };

  // 延迟执行
  function sleep(delay) {
    return new Promise((resolve) => setTimeout(resolve, delay));
  }

  // 提现
  const handleWithdrawal = () => {
    Dialog.confirm({
      content: (
        <div style={{ textAlign: "center" }}>
          <div>确认提现吗？</div>
          <div>提现金额：{amount}</div>
        </div>
      ),
      onConfirm: async () => {
        await sleep(1500);
        setHistory((state) => [{ date: new Date(), amount }, ...state]);
        Toast.show({
          icon: "success",
          content: "提现成功",
          position: "center",
        });
      },
      onCancel: async () => {
        await sleep(1500);
        Toast.show({
          icon: "fail",
          content: "提现失败",
          position: "center",
        });
        setAmount("");
      },
    });
  };

  // 提现按钮是否可用
  const isDeleteButtonDisabled = Number(amount) > totalAmount || !amount;

  return (
    <Popup visible={visible} mask={false} bodyStyle={{ height: "30vh" }}>
      <div className="board">
        <div className="keywordNum">
          {keywordArr.map((item, index) => (
            <Button
              onClick={() => handleInput(item)}
              style={item === 0 ? { width: "66.66%" } : {}}
              key={index}
            >
              {item}
            </Button>
          ))}
        </div>
        {/* 提现 & 删除金额 */}
        <div className="action">
          <Button onClick={handleDeleteAmount}>
            <CloseOutline />
          </Button>
          <Button
            onClick={props}
            disabled={isDeleteButtonDisabled}
            color={"primary"}
          >
            提现
          </Button>
        </div>
      </div>
    </Popup>
  );
});

export default KeywordBoard;
