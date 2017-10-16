let envConfig = function() {
    let envMode = process.env.NODE_ENV === "production";
    let productionAPI = "http://github/com/users/";  //dummy github URL
    let developmentAPI = "http://127.0.0.1:3004/";  // localhost mock server

    let apiURL = envMode ? productionAPI : developmentAPI;

    return apiURL;
}

export default envConfig;