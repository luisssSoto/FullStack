import { data } from "../../framework/configs/main.wdio.conf.js";

const myName = String(data.fullName);
console.log(typeof myName);
console.log(myName);
console.log(data);
console.log(typeof data.loginPage.baseUrl)