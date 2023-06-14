/**
 * @Author: swipth
 * @Description: axios 下载文件并保存
 */
import { message } from "ant-design-vue";
import axios, { AxiosResponse, Method } from "axios";
import NProgress from "nprogress";
/**
 * 自定义axios下载
 * @param url
 * @param params
 * @param method
 * @param data
 * @param name
 */
export const ajaxDownload = (url: string, params: Record<string, unknown> = {}, method: Method = "GET", data: Record<string, unknown> = {}, name?: string) => {
  return new Promise<void>((resolve, reject) => {
    NProgress.start();
    fileDownload(url, params, method, data)
      .then((response: AxiosResponse) => {
        convertRes2Blob(response, name);
        resolve();
        NProgress.done();
      })
      .catch((error) => {
        NProgress.done();
        if (typeof error === "object") {
          if (error.type) {
            if (error.type === 404) {
              message.error("服务端找不到文件");
            }
            if (error.response) {
              if (error.response.status === 404) {
                message.error("服务端找不到文件");
              } else {
                message.error("文件下载失败了");
              }
            } else {
              message.error("文件内容解析失败");
            }
          }
          reject(error);
        }
      });
  });
};

const fileDownload = (url: string, params: Record<string, unknown>, method: Method, data: Record<string, unknown>) => {
  // tips: 这里直接返回的是response整体!
  return axios.request({
    url,
    method,
    params,
    data,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
    },
    responseType: "blob",
  });
};

// 将响应体转换为文件下载
const convertRes2Blob = (response: AxiosResponse, name?: string) => {
  // 提取文件名
  let fileName = null;
  try {
    fileName = response.headers["content-disposition"].replace(/^attachment;file(N|n)ame=/, "");
  } catch (error) {
    throw new Error("服务端找不到文件");
  }
  fileName = name ? name : fileName;
  // 将二进制流转为blob
  const blob = new Blob([response.data]);
  // @ts-ignore
  if (typeof window.navigator["msSaveBlob"] !== "undefined") {
    // 兼容IE，window.navigator.msSaveBlob：以本地方式保存文件
    // @ts-ignore
    window.navigator.msSaveBlob(blob, decodeURI(fileName));
  } else {
    // 创建新的URL并指向File对象或者Blob对象的地址
    const blobURL = window.URL.createObjectURL(blob);
    // 创建a标签，用于跳转至下载链接
    const tempLink = document.createElement("a");
    tempLink.style.display = "none";
    tempLink.href = blobURL;
    tempLink.setAttribute("download", decodeURI(fileName));
    // 兼容：某些浏览器不支持HTML5的download属性
    if (typeof tempLink.download === "undefined") {
      tempLink.setAttribute("target", "_blank");
    }
    // 挂载a标签
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
    // 释放blob URL地址
    window.URL.revokeObjectURL(blobURL);
  }
};
// 下载请求示例  默认get请求
// ajaxDownload("/stock/excel/total/data",{time: this.selectedTime})
