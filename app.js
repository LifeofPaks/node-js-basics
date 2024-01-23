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

//Reading a file
// const readText = fs.readFileSync("./files/input.txt", "utf-8")
// // console.log(readText)

//Writing into a file
// const content = "This is a sample text file for Node JS tutorial"
// fs.writeFileSync("./files/output.txt", content)

//Reading a file asynchronously
// const readText = fs.readFile("./files/input.txt", "utf-8", (err, data) =>{
//     console.log(data)
// })
// console.log("Reading file...")

const http = require("http");
const fs = require("fs");
const html = fs.readFileSync("./template/index.html", "utf-8")

const products = JSON.parse(fs.readFileSync("./data/products.json", "utf-8"));



const server = http.createServer((req, res) => {
  const path = req.url;
  if (path === "/" || path.toLocaleLowerCase() === "/home") {
    res.writeHead(200, {
      "Content-Type": "text",
    });
    res.end(html);
  } else if (path.toLocaleLowerCase() === "/about") {
    res.writeHead(200, {
      "Content-Type": "text",
    });
    res.end("This is the about page");
  } else if (path.toLocaleLowerCase() === "/contact") {
    res.writeHead(200, {
      "Content-Type": "text",
    });
    res.end("This is the contact page");
  } else if (path.toLocaleLowerCase() === "/products") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end("This is the products page")
    console.log(products)
  } else {
    //handle a non-existing route
    res.writeHead(404, {
      "Content-Type": "text",
    });
    res.end("Error 404: Page not found!");
  }
});

//Listening to server
server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to server on port 8000...");
});
