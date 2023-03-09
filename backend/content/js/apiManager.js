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

exports.APIManager = APIManager;
