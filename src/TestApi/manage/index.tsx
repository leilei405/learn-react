import React, { useState } from "react";
import { Button } from "antd";
import FormModal from "./modalForm";
import UserList from "./userList";
import { FormModalProps } from "./types";
const ComponentList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editObj, setEditObj] = useState<FormModalProps>({
    name: "",
    age: 0,
    address: "",
  });
  const [title, setTitle] = useState("");

  const showModal = () => {
    setEditObj({});
    setIsModalOpen(true);
    setTitle("新增用户");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        新增
      </Button>
      {isModalOpen && (
        <FormModal
          title={title}
          open={isModalOpen}
          cancel={handleCancel}
          showModal={showModal}
          editObj={editObj}
          setEditObj={setEditObj}
        />
      )}
      <UserList
        showModal={showModal}
        setTitle={setTitle}
        editObj={editObj}
        setEditObj={setEditObj}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default ComponentList;
