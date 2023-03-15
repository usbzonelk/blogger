//import { APIManager } from "./apiManager.js";
class APIManager {
  constructor(api_url, token) {
    this.api_url = api_url;
    this.token = token;
  }
  sendGet = async (query, command) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${this.token}`);
    myHeaders.append("Content-Type", "application/json");

    const graphql = JSON.stringify({
      query: query,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: graphql,
      redirect: "follow",
    };
    let retVal;
    await fetch(this.api_url, requestOptions)
      .then((response) => response.json())

      .then((result) => (retVal = result["data"][command]))
      .catch((error) => (retVal = "db_error"));
    return retVal;
  };
}




const api_url = "http://127.0.0.1/graph";
const jw_token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmxrIiwiaWF0IjoxNjc2OTA2NTcxLCJleHAiOjE2Nzc1MTEzNzF9.BXDSNL2OqYHrSGTVbM2HW9Jt7fhNU2N8YHqF-YGyL9I";

const apiManage = new APIManager(api_url, jw_token);
console.log(apiManage.sendGet("{getAllFullPosts{title}}", "getAllFullPosts"))

fetch("http://127.0.0.1/auth")


const postComment = (content, auth, slug) => {
  const commentDate = new Date();
  if (content && auth && slug) {
  }
};
