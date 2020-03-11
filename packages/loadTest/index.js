const ipv4gen = require("ipv4-gen");
const axios = require("axios");
let ip = ipv4gen.genIP();
axios.get("http://localhost:8081/page").then((res) => res.data).then(res => console.log(res))
console.log(ip);
