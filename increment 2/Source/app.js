var csv = require("fast-csv");

csv
    .fromPath("1.csv")
    .on("data", function(data) {
        console.log(data[1]);
        /*var a1 = [];
        for (var i = 0; i < data.length; i++) {

            a1.push(data[i]);
        }
        console.log(a1);*/

    })
    .on("end", function(){
        console.log("done");
    });