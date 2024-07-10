import React, { useEffect, useState } from "react";

//1. 组件初始为 loading 状态
//2. 组件加载完3秒后状态置为success状态，并且渲染出一个button按钮
//3. 点击button后组件状态置为loading按钮消失，3秒钟后组件状态再变为success按钮再次出现
//要求用 hooks 方式模拟生命周期写，不使用antd等组件
const Com = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timerId = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timerId);
  }, [loading]);

  const handleClick = () => {
    setLoading(true);
  };

  return (
    <div>
      <button onClick={handleClick}>{loading ? "loading" : "success"}</button>
    </div>
  );
};

export default Com;

// import java.io.BufferedReader;
// import java.io.IOException;
// import java.io.InputStreamReader;
// import java.io.OutputStreamWriter;
// import java.net.ServerSocket;
// import java.net.Socket;

// public class Server {
//     public static void main(String[] args) {
//         int port = 5000;  // 监听的端口

//         try (ServerSocket serverSocket = new ServerSocket(port)) {
//             System.out.println("服务器启动，监听端口: " + port);

//             while (true) {
//                 Socket socket = serverSocket.accept();  // 等待客户端连接
//                 System.out.println("客户端连接成功: " + socket.getInetAddress());

//                 // 接收客户端发送的消息
//                 BufferedReader reader = new BufferedReader(new InputStreamReader(socket.getInputStream()));
//                 String message = reader.readLine();
//                 System.out.println("收到客户端消息: " + message);

//                 // 向客户端发送响应
//                 OutputStreamWriter writer = new OutputStreamWriter(socket.getOutputStream());
//                 writer.write("服务器已收到你的消息\n");
//                 writer.flush();
//             }
//         } catch (IOException e) {
//             e.printStackTrace();
//         }
//     }
// }
