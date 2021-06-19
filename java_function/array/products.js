var items=[
    {id:100,name:"sugar",price:35,aval_qty:10},
    {id:101,name:"tea powder",price:105,aval_qty:100},
    {id:102,name:"boost",price:150,aval_qty:10},
    {id:103,name:"sugar",price:110,aval_qty:5},
    {id:104,name:"oreo",price:35,aval_qty:0},
    {id:105,name:"rusk",price:110,aval_qty:0}
]

// // print the item name which have low aval_qty
var low_aval_qty=items.reduce((item1,item2)=>item1.aval_qty>item2.aval_qty?item1.aval_qty:item2.aval_qty)
var low_aval_items=items.filter(item=>item.aval_qty==low_aval_qty)
console.log("item name which have low aval_qty",low_aval_qty);

// print product details which have highest price
var costly_item=items.reduce((item1,item2)=>item1.price>item2.price?item1:item2)
console.log("costly item:",costly_item);


// product name only
var item_names=items.map(product=>product.name)
console.log(item_names);

// no of products
var count=items.length
console.log("no of products",count);

//uppercase names
var upp_name=items.map(product=>product.name.toUpperCase())
console.log(upp_name);

// price abv 100
var costly_items=items.filter(item=>item.price>100)
console.log(costly_items);

// low cost items find price <100
var low_cost=items.filter(item=>item.price<100)
console.log("find price <100",low_cost);

// fetch products whose aval qty greater than 5
var low_stock=items.filter(item=>item.aval_qty>5)
console.log("aval qty greater than 5",low_stock);

// items available in stock
var stock=items.filter(item=>item.aval_qty>0)
console.log("items in stock",stock);

// to sort price descending order
var price=items.sort((item1,item2)=>item2.price-item1.price)
console.log("descending order of price",price);


// aval qty ascending

var avl_qty=items.sort((item1,item2)=>item1.aval_qty-item2.aval_qty)
console.log("ascending order of avl qty",avl_qty);

// to find only one item
// find information about boost
var boost_data=items.find(item=>item.name=="boost")
console.log("boost:",boost_data);


// some
var is_available=items.some(item=>item.name=="hideandseek")
console.log(is_available);

// items with lesser than 50 rs

// oop look
