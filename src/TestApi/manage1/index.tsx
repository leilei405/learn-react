// import React, { useRef } from "react";
// import { Button, message as Message } from "antd";
// import EditModal, { ModalRef } from "./modalForm";
// import UserList from "./userList";

// const ComponentList = () => {
//   const eleRef = useRef<ModalRef>(null);

//   const handleOpenModal = () => {
//     eleRef?.current?.open();
//     eleRef?.current?.setTitle("新增用户");
//   };

//   const getFormValue = (val: any) => {
//     Message.success("新增成功");
//     eleRef?.current?.close();
//   };

//   return (
//     <>
//       <Button type="primary" onClick={handleOpenModal}>
//         新增
//       </Button>
//       <EditModal ref={eleRef} getFormValue={getFormValue} />
//       <UserList eleRef={eleRef} />
//     </>
//   );
// };

// export default ComponentList;
export {};
