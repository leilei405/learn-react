import React, { useState, useRef } from "react";
import { Button, Card, Input, Space, Toast, Dialog, List } from "antd-mobile";
import { ExclamationCircleOutline } from "antd-mobile-icons";
import dayjs from "dayjs";
import KeywordBoard from "./keywordBoard";
import "./index.css";

const Withdrawal = () => {
  const keywordBoardRef = useRef();
  const [visible, setVisible] = useState(false);
  const [amount, setAmount] = useState();
  const [history, setHistory] = useState([]);
  const [freeWithdraw, setFreeWithdraw] = useState(1000);
  const [totalAmount, setTotalAmount] = useState(3000);

  const getUnit = (amount) => {
    const units = [
      { threshold: 10000000, name: "千万" },
      { threshold: 1000000, name: "百万" },
      { threshold: 100000, name: "十万" },
      { threshold: 10000, name: "万" },
      { threshold: 1000, name: "千" },
    ];
    const selectedUnit = units.find((unit) => amount >= unit.threshold);
    return selectedUnit ? selectedUnit?.name : "";
  };

  const handleOpen = () => {
    setVisible(true);
  };

  // 输入金额
  const handleChangeAmount = (monkey) => {
    let newVal = (amount || 0) + (monkey || 0);
    const moneyRegex = /^\d+(\.\d{1,2})?$/;

    if (moneyRegex.test(Number(newVal))) {
      setAmount(newVal.toString());
    } else {
      Toast.show({ icon: "fail", content: "最多输入俩位小数" });
    }
  };

  // 全部提现
  const allWithdrawals = () => {
    setAmount(totalAmount.toString());
    handleOpen();
  };

  // 提现记录
  const handleWithdrawalHistory = () => {
    return (
      <List header="提现记录">
        {history.slice(0, 3).map((item, index) => {
          return (
            <List.Item
              prefix={dayjs(item.date).format("YYYY-MM-DD")}
              key={index}
              extra={`${item.amount}元`}
            />
          );
        })}
      </List>
    );
  };

  return (
    <div className="container">
      <Card>
        <p>提现金额</p>
        <p>{getUnit(amount)}</p>
        <div className="placeInput">
          <span style={{ fontSize: "1.0667rem" }}>￥</span>
          <Input
            value={amount}
            onFocus={handleOpen}
            placeholder="请输入提现金额"
            clearable
          />
          {!amount && (
            <div className="actionInput">
              <Button onClick={allWithdrawals} color="primary" fill="none">
                全部提现
              </Button>
              <span>{`￥${totalAmount}`}</span>
            </div>
          )}
        </div>
        <div>
          {/* 没有输入金额的时候提示 */}
          {!amount && (
            <div className="noAmount">
              <Space align="baseline">
                <span>{`免费额度还剩${freeWithdraw}元，超出部分收取0.1%服务费`}</span>
                <ExclamationCircleOutline />
              </Space>
            </div>
          )}

          {/* 金额正确&&小于可用余额 */}
          {amount && Number(amount) < totalAmount && (
            <div className="yesAmount">
              <Space align="baseline">
                <span>{`预计收取服务费￥${10}`}</span>
                <ExclamationCircleOutline />
              </Space>
            </div>
          )}

          {/* 如果 输入金额大于可用金额 */}
          {Number(amount) > totalAmount && (
            <div className="outAmount">{`超出可用余额(${totalAmount})`}</div>
          )}
        </div>
      </Card>

      {Array.isArray(history) &&
        history.length > 0 &&
        handleWithdrawalHistory()}

      {visible && (
        <KeywordBoard
          amount={amount}
          visible={visible}
          setAmount={setAmount}
          setVisible={setVisible}
          totalAmount={totalAmount}
          handleChangeAmount={handleChangeAmount}
          setHistory={setHistory}
          setFreeWithdraw={setFreeWithdraw}
        />
      )}
    </div>
  );
};

export default Withdrawal;
// 1   2   3   X
// 4   5   6  提
// 7   8   9  提
//   0     .  提
