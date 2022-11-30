const item = [ 
	{name: 'Bike', price:100}, 
	{name: 'TV', price:200}, 
	{name: 'Album', price:10}, 
	{name: 'Book', price:5}, 
	{name: 'Phone', price:500}, 
	{name: 'Computer', price:1000} 
	];


function Cheap(elements){
	var price=elements[0]["price"];
	var CheapestProduct = "";

	for (var i = 0; i < elements.length; i++){
		if (elements[i]["price"] < price){
			price = elements[i]["price"];
			CheapestProduct = elements[i]["name"];
		}
	}

	return CheapestProduct;
}


function Expensive(elements){
	var price = 0;
	var ExpensiveProduct = "";

	for (var i = 0; i < elements.length; i++) {
		if (elements[i]["price"] > price) {
			price = elements[i]["price"];
			ExpensiveProduct = elements[i]["name"];
		}
	}

	return ExpensiveProduct;
}

function TotalPrice(elements){
	var total = 0;
	for (var i=0; i < elements.length; i++) {
		total += elements[i]["price"];
	}

	return total;
}

function TotalPriceExcept(elements){
	var total = 0;
	for (var i=0; i < elements.length; i++) {
		if (elements[i]["price"] < 10) {
			continue;
		}else{
			total += elements[i]["price"];
		}
	}

	return total;
}


console.log(`Cheap product is: ${Cheap(item)}`);
console.log(`Expensuve product is: ${Expensive(item)}`);
console.log(`full price of all product combined is: ${TotalPrice(item)}`);
console.log(`full price of all product combined and remove product that are under the 10 dollar is: ${TotalPriceExcept(item)}`);
