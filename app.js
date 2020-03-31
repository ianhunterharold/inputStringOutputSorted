  // given an array of strings with name of product, popularity score and price.

  // return an array of sorted most popular items by name

  // if the popularity is the same, place the lower priced item first

function sortByPopularity(arr){
   //break down strings into subarrays 
   let arrayOfArray = []
   for (let i=0; i < arr.length; i++){
      let splitByComma = arr[i].split(',');
      arrayOfArray.push(splitByComma);
   }

  for (let j= 0; j < arrayOfArray.length; j++){
    
    let findPopScore = arrayOfArray[j][1]
    let findCost = arrayOfArray[j][2]
    
    // over writing strings with integers 
    let makeIntoInt = parseInt(findPopScore)
    arrayOfArray[j][1] = makeIntoInt;

    let makeIntoIntCost = parseInt(findCost)
    arrayOfArray[j][2] = makeIntoIntCost;
  }
  // sorting based on highest popularity 
  arrayOfArray.sort(function(a,b) {
    return b[1] - a[1] || a[2] - b[2]
  })
  // returning array of most popular to least popular with only product name 
  let mostToLeastPopularProducts =[];
  for (let k = 0; k <arrayOfArray.length; k++){
    let addToFinalArray = mostToLeastPopularProducts.push(arrayOfArray[k][0])
  }
return mostToLeastPopularProducts;
}

   const productArr=
   [
   "Selfie Stick,98,29",
   "Pizza Machine,70,100",
   "Shopify Hat,98,5",
   "Shopify T-Shirt,100,20",
   "App Creator,98,100"
   ]

sortByPopularity(productArr) 
 