class APIManager {
  constructor(api_url) {
    this.api_url = api_url;
  }
  sendGet = async (query, command) => {
    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmxrIiwiaWF0IjoxNjc2OTA2NTcxLCJleHAiOjE2Nzc1MTEzNzF9.BXDSNL2OqYHrSGTVbM2HW9Jt7fhNU2N8YHqF-YGyL9I"
    );
    myHeaders.append("Content-Type", "application/json");

    const graphql = JSON.stringify({
      query: query,
      variables: {},
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
      .catch((error) => console.log("error", error));
    return retVal;
  };
}

module.exports = APIManager;
