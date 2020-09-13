app.factory('Resturant', ()=>{
  var factory = {};
  var resturant = []
  
  factory.getResturant = ()=> {
    return resturant
  }
  
  factory.addRes = (res)=>{
    alert("Data Received ")
    resturant.push(res)
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
