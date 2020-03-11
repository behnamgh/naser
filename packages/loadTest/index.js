const ipv4gen = require("ipv4-gen");
const axios = require("axios");

setInterval(()=>{
    let ip = ipv4gen.genIP();
    axios.get("http://localhost:8081/page", { headers: { "x-forwarded-for": ip } });
})