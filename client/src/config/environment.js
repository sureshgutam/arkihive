let envConfig = function() {
    let envMode = process.env.NODE_ENV === "production";
    let productionAPI = "/";  //temporary localhost URL
    // let developmentAPI = "http://127.0.0.1:3004/";  // localhost mock server
    let developmentAPI = "http://127.0.0.1:4000/";  // API server
    let apiURL = envMode ? productionAPI : developmentAPI;

    return apiURL;
}

export default envConfig;