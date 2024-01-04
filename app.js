//the variable exported from index.js is received by require("file_name_from_which_we_are_importing")
const a=require("./index")
// console.log(a)


a.average(10,20);
a.percent(20,50);