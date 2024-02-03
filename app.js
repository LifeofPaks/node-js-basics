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


// const fs = require("fs");
// const replaceHtml = require("./modules/replaceHtml")
// const html = fs.readFileSync("./template/index.html", "utf-8");

// const products = JSON.parse(fs.readFileSync("./data/products.json", "utf-8"));
// const productsListHtml = fs.readFileSync(
//   "./template/product-list.html",
//   "utf-8"
// );

// const productDetailsHtml = fs.readFileSync( "./template/product-details.html", "utf-8");


// const replaceHtml = (template, product) =>{
//   let output = template.replace("{{%IMAGE%}}", product.image);
//   output = output.replace("{{%NAME%}}", product.name);
//   output = output.replace("{{%COLOR%}}", product.color);
//   output = output.replace("{{%PRICE%}}", product.price);
//   output = output.replace("{{%ID%}}", product.id);

//   return output;
// }

// const server = http.createServer((req, res) => {
//   const url = require("url");
//   const { query, pathname: path } = url.parse(req.url, true);

//   // const path = req.url;
//   if (path === "/" || path.toLocaleLowerCase() === "/home") {
//     res.writeHead(200, {
//       "Content-Type": "text",
//     });
//     res.end(html.replace("{{%CONTENT%}}", "This is the home page"));
//   } else if (path.toLocaleLowerCase() === "/about") {
//     res.writeHead(200, {
//       "Content-Type": "text",
//     });
//     res.end(html.replace("{{%CONTENT%}}", "This is the home about"));
//   } else if (path.toLocaleLowerCase() === "/contact") {
//     res.writeHead(200, {
//       "Content-Type": "text",
//     });
//     res.end(html.replace("{{%CONTENT%}}", "This is the contact page"));
//   } 
//   else if (path.toLocaleLowerCase() === "/products") {
//     if(!query.id){
//       const productHtmlArray = products.map((prod) =>{
//        return  replaceHtml(productsListHtml, prod)
//       })
//       const productResponse = html.replace(
//         "{{%CONTENT%}}",
//         productHtmlArray.join("")
//       );
//       res.writeHead(200, {
//         "Content-Type": "text",
//       });
//       res.end(productResponse);
//     } else{
//       const prod = products[query.id]
//       const productDetailsResponseHtml = replaceHtml(productDetailsHtml, prod)
//       res.end(html.replace(
//         "{{%CONTENT%}}",
//         productDetailsResponseHtml))
//     }
   
//   } else {
//     //handle a non-existing route
//     res.writeHead(404, {
//       "Content-Type": "text",
//     });
//     res.end(html.replace("{{%CONTENT%}}", "Error 404: Page not found!"));
//   }
// });



// server.on("request", (req, res) =>{
//   const url = require("url");
//   const { query, pathname: path } = url.parse(req.url, true);

//   // const path = req.url;
//   if (path === "/" || path.toLocaleLowerCase() === "/home") {
//     res.writeHead(200, {
//       "Content-Type": "text",
//     });
//     res.end(html.replace("{{%CONTENT%}}", "This is the home page"));
//   } else if (path.toLocaleLowerCase() === "/about") {
//     res.writeHead(200, {
//       "Content-Type": "text",
//     });
//     res.end(html.replace("{{%CONTENT%}}", "This is the home about"));
//   } else if (path.toLocaleLowerCase() === "/contact") {
//     res.writeHead(200, {
//       "Content-Type": "text",
//     });
//     res.end(html.replace("{{%CONTENT%}}", "This is the contact page"));
//   } 
//   else if (path.toLocaleLowerCase() === "/products") {
//     if(!query.id){
//       const productHtmlArray = products.map((prod) =>{
//        return  replaceHtml(productsListHtml, prod)
//       })
//       const productResponse = html.replace(
//         "{{%CONTENT%}}",
//         productHtmlArray.join("")
//       );
//       res.writeHead(200, {
//         "Content-Type": "text",
//       });
//       res.end(productResponse);
//     } else{
//       const prod = products[query.id]
//       const productDetailsResponseHtml = replaceHtml(productDetailsHtml, prod)
//       res.end(html.replace(
//         "{{%CONTENT%}}",
//         productDetailsResponseHtml))
//     }
   
//   } else {
//     //handle a non-existing route
//     res.writeHead(404, {
//       "Content-Type": "text",
//     });
//     res.end(html.replace("{{%CONTENT%}}", "Error 404: Page not found!"));
//   }
// })
const http = require("http");
const fs = require("fs");
const server = http.createServer()

//Listening to server
server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to server on port 8000...");
});

// // EMITTING AND HANDLING CUSTOM EVENTS============================

// // const events = require("events")
// const user = require("./modules/user")
// const myEmitter = new user()

// myEmitter.on("userCreated", (id, name) =>{
//   console.log(`A new user ${name} with ID:${id} was created`)
// })

// myEmitter.emit("userCreated", 12, "Paks")


//UNDERSTANDING STREAMS IN PRACTICE==========================

// server.on("request", (req, res) =>{
//   fs.readFile("./files/large-file.txt", (err, data) =>{
//     if(err){
//       res.end("Something went wrong!")
//       return
//     }
//     res.end(data)
//   })
// })


// server.on("request", (req, res) =>{
// let rs = fs.createReadStream("./files/large-file.txt")
// rs.on("data", (chunk) =>{
//   res.write(chunk)
// })

// //listening to the end method
// rs.on("end", () =>{
//   res.end()
// })

// //listening to the error events
// rs.on("error", (error) =>{
//   res.end(error.message)
// })
// })

//USING THE PIPE() METHOD
server.on("request", (req, res) =>{
  let rs = fs.createReadStream("./files/large-file.txt")
    rs.pipe(res)
  })

console.log("nodemon is working")