import { APIManager } from "./apiManager.js";

const api_url = "http://127.0.0.1/graph";
const jw_token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmxrIiwiaWF0IjoxNjc2OTA2NTcxLCJleHAiOjE2Nzc1MTEzNzF9.BXDSNL2OqYHrSGTVbM2HW9Jt7fhNU2N8YHqF-YGyL9I";

const apiManage = new APIManager(api_url, jw_token);

const postComment = (content, auth, slug) => {
  const commentDate = new Date();
  if (content && auth && slug) {
  }
};
