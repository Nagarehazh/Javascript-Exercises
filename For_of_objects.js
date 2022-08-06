//For of Objects. We need a Key to access to the value and then use For Iteration
var clothingItem = {   //clothingItem Object
    price: 50,          //property(It's the key) : Value
    color: 'beige',     //property(It's the key) : Value
    material: 'cotton', //property(It's the key) : Value
    season: 'autumn'    //property(It's the key) : Value
}

for( key of Object.keys(clothingItem) ) {
    console.log(keys, ":", clothingItem[key])    
}

/*Result:
price: 50          
color: 'beige'
material: 'cotton'
season: 'autumn' 
*/