app.factory('Resturant', ()=>{
  var factory = {};
  var resturant = [{
    name: "Domino's Pizza",
    category: "Pizza", 
    rating: 4.6,
    adt: 27, 
    image: 'image/dominos_social_logo.jpg'
  }, {
    name: "McDonald's", 
    category: "Snacks & Beverages", 
    rating: 4.7,
    adt: 34, 
    image: 'image/m-logo_108x108.jpg'
  }, {
    name: "Pizza Hut", 
    category: "Pizza", 
    rating: 3.9,
    adt: 40, 
    image: 'image/pizzahut-logo_freelogovectors.net_.png'
  }, {
    name: "Burger King",
    category: "Burger", 
    rating: 4.2,
    adt: 25, 
    image: 'image/593px-Burger_King_logo.svg.png'
  }]
  
  factory.getResturant = ()=> {
    return resturant
  }
  
  return factory;
})

app.factory('Product', function(){
  var factory = {};
  var FilterResturant = "Dominos Pizza";
  var product = [{
    name: "Pizza",
    owner: "Dominos Pizza", 
    price: 300,
    count: 0,
    category: "Pizza"
  }, {
    name: "Coke",
    owner: "Dominos Pizza",
    price: 200,
    count: 0,
    category: "Cold Drinks"
  }]
  
  factory.setFilterResturant = (res)=>{
    FilterResturant = res;
  }
  
  factory.getProduct = ()=>{
    var newProduct = product.filter((item)=>{
      return item.owner === FilterResturant
    })
    return newProduct
  }
  
  return factory;
})