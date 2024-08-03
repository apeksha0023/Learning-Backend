const sum = require("./sum")
const fs = require('fs')
const os = require('os')

// fs.readFile()

// fs.readFile("./lecture.txt" , "utf8" , (error,data)=>{
//     if(error){
//        console.log(err)
//     }
//     else{
//         console.log(data)
//     }
// // })

// console.log(os.cpus())
// console.log(os.totalmem())

// let data = fs.readFileSync("./sum.js","utf-8")
// console.log(data)
// console.log("hiiiiiiiii")

//buffer data ==> understand the data in binary format


//syn ans async

// let res = sum (1,2)


// console.log(res)


fs.writeFileSync("./dummy.txt","Hello from index.js")
//not want to overwrit data you can use  appendFileSync