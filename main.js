// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  let sum = 0;
  let avg = 0;
  // Answer:
  for (let i = 0; i < data.length; i++){
    sum += data[i].price;
    avg = (sum/data.length).toFixed(2);
  }
  console.log("The average price is "+avg);
}

// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  let costBetween = [];
  let message2 = "";
  // Answer:
  for (let i = 0; i < data.length; i++){
    if (data[i].price >= 14 && data[i].price <= 18) {
      costBetween.push(data[i].title);
    }
  }
  for (let j = 0; j < costBetween.length; j++){
    message2 += costBetween[j] + "\n";
  }
  console.log(message2);
}


// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  let currency_GBP = [];
  // Answer:
  for (let i = 0; i < data.length; i++) {
    if (data[i].currency_code === "GBP") {
      currency_GBP.push(data[i].title, data[i].price);
    }
  }
  console.log(currency_GBP[0] + "costs " + currency_GBP[1] + " pounds");
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  let materials_wood = [];
  let message4 = "";
  // Answer:
  for (let i = 0; i < data.length; i++) { //loop 1 -- looking at each item in data array
    for (let j = 0; j < data[i].materials.length; j++) {//loop 2 -- looking at each item in materials array
      if (data[i].materials[j] === "wood") {
        materials_wood.push(data[i].title);
      }
    }
  }
  for (k = 0; k < materials_wood.length; k++) {
    message4 += materials_wood[k] + "\n";
  }
  console.log(message4);
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  let materials_8 = [];
  // Answer:
  for (let i = 0; i < data.length; i++) {
    if (data[i].materials.length >= 8) {
      materials_8.push(data[i].title, data[i].materials.length, data[i].materials);
    }
  }
  console.log(materials_8);
  // need an object with (name:title, materialsNum:materials.length, materialsList:materials)
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  let seller_made = [];
  // Answer:
  for (let i = 0; i < data.length; i++) {
    if (data[i].who_made === "i_did"){
      seller_made.push(data[i].title);
    }
  }
  console.log(seller_made.length + " items were made by their sellers.");
}
