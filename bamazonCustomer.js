//npm packages required ///////////////////////////////////////////////
var mysql = require("mysql");
var inquirer = require('inquirer');

//database credentials ///////////////////////////////////////////////
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon_db"
});

//connection to database /////////////////////////////////////////////////
connection.connect(function(err) {
  if (err) throw err;
});


//query from database table and display //////////////////////////////////
connection.query("SELECT * FROM products", function(err, res) {
    console.log( "Id | Product | Price")
    console.log("----------------------")
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].item_id + " | " + res[i].product_name + " | $" + res[i].price );
    }
    console.log("-----------------------------------");
    userSelection(res);

  });

// Ask user what which productID /////////////////////////////////////////////
function userSelection(res){
   inquirer.prompt([
{
  name: "userChoice",
  type: "list",
  choices: ["10", "20", "30", "40", "50", "60", "70", "80", "90", "100"],
  message: "What auction would you like to place a bid in?"
 }
      ]).then(function(inquirerResponse) {
          var productID = inquirerResponse.userChoice
          inquirer.prompt([
                  {
                  type: "input",
                  message: "How many units of the product they would like to buy.?",
                  name: "userChoice"
                  },
              ]).then(function(inquirerResponse) {
                  var quantityNum = inquirerResponse.userChoice
                  checkQuantity(productID, quantityNum);
              })  //end inquirer
      })  //end inquirer
}

// checking for sufficient inventory ///////////////////////////////////////
function checkQuantity(productID, quantityNum){

  var query = "SELECT * FROM products";

  connection.query(query, function(err, res) {
    for (var i = 0; i < res.length; i++) {
        if (res[i].item_id == productID){
          if (res[i].stock_quantity >= quantityNum){
            var prodCost = quantityNum * res[i].price;
            var quantityNew = res[i].stock_quantity - quantityNum;
            updateFinalize(productID, quantityNew, prodCost);
          }
          else {
            console.log("Insufficient quantity!")
          }

        }

    }

  });


}

// updating inventory and display order total ///////////////////////////////////
function updateFinalize(productID, quantityNew, prodCost){
  connection.query(
      "UPDATE products SET ? WHERE ?",
      [
        {
          stock_quantity: quantityNew
        },
        {
          item_id: productID
        }
      ],
      function(err) {
        if (err) throw err;
      }
    );
    console.log("The total cost of your purchase is $" + prodCost)

}
