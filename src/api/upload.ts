/**
 * @Author: swipth
 * @Description: 自定义文件上传
 */
import { message } from "ant-design-vue";
import axios, { AxiosError, AxiosResponse } from "axios";
/**
 * 自动以上传
 * @param url
 * @param file
 */
export const ajaxUpload = (url: string, file: File) => {
  //单个图片上传
  const formData = new FormData();
  formData.append("file", file);
  return new Promise((resolve, reject) => {
    axios
      .put(url, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response: AxiosResponse) => {
        resolve(response.data);
      })
      .catch((err: AxiosError) => {
        reject(err);
        message.error("文件上传失败");
      });
  });
};
