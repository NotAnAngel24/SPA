window.addEventListener('scroll', highlight);
window.addEventListener('click', highlight);

/* API Asynchronous requests */
const http = require("https://api.ambeedata.com");
const options = {
    method: GET,
    hostname: "api.ambeedata.com",
    port: null,
    path: "/latest/by-lat-lng?lat=12.9889055&lng=77.574044",
    headers: {
        xkey: "ef484e291a94243f336352f07d186ffb41ba2516b8c6fbe244456074b66d7ad2",
        Contenttype: "index.json"
    }
};
const req = http.request(options, function(res) {
    const chunks = [];
    res.on("data", function(chunk) {
        chunks.push(chunk);
    });
    res.on("end", function() {
        const body = Buffer.concat(chunks);
        console.log(body.toString());
    });
});
req.end();