// const readline = require("readline")
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// //read and write file method
// rl.question("Please enter your name:" , (name) =>{
//     console.log("Your name is:", name)
//     rl.close()
// })

// //close event method
// rl.on("close", () =>{
//     console.log("Interface Closed!")
// })

// const fs = require("fs")

//Reading a file
// const readText = fs.readFileSync("./files/input.txt", "utf-8")
// // console.log(readText)

//Writing into a file
// const content = "This is a sample text file for Node JS tutorial"
// fs.writeFileSync("./files/output.txt", content)

//Reading a file asynchronously
const fs = require("fs")
const readText = fs.readFile("./files/input.txt", "utf-8", (err, data) =>{
    console.log(data)
})
console.log("Reading file...")