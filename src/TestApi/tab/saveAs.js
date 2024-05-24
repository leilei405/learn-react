function downloadBlob(data, filename) {
  const blob = new Blob([data], { type: "application/octet-stream" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);
}

// 假设这是后端返回的数据
const responseData = {
  errmsg: "downloadFile:ok",
  statusCode: 200,
  tempFilePath:
    "blob:http://localhost:8080/eda9e99c-bf77-41fb-979a-0008f7b4e9e4",
};

if (responseData.statusCode === 200) {
  downloadBlob(responseData.tempFilePath, "filename.ext");
} else {
  console.error("下载失败:", responseData.errlsg);
}

function downloadBlob(blobUrl, filename) {
  const a = document.createElement("a");
  a.href = blobUrl;
  a.download = filename;
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
