var firebaseConfig = {
  apiKey: "AIzaSyA1e6LU4mCAMtwQzvNh7DlAuX42fB3oee4",
  authDomain: "basirhat-2019.firebaseapp.com",
  databaseURL: "https://basirhat-2019.firebaseio.com",
  projectId: "basirhat-2019",
  storageBucket: "basirhat-2019.appspot.com",
  messagingSenderId: "1034436096140",
  appId: "1:1034436096140:web:d1566e89b5809718e9cba9",
  measurementId: "G-WRY3G5XFFR"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: 'views/home.html'
    })
    .when("/search", {
      templateUrl: "views/search.html"
    })
    .when("/cart", {
      templateUrl: "views/cart.html"
    })
    .when("/account", {
      templateUrl: "views/account.html"
    })
    .when("/product", {
      templateUrl: "views/product.html"
    });
});

app.controller('HomeCtrl', ($scope, Resturant, Product, $location)=>{
  $scope.resturants = data()
  $scope.FilterBy = [{
    name: "Rating", 
    value: "-Rating"
  }, {
    name: "Delivery Time",
    value: "DeliveryTime"
  }]
  $scope.setResturant = (res)=>{
    Resturant.addRes({
      ResturantName: "Rajesh Mondal",
      Rating: "4.8",
      DeliveryTime: "30 Mins"
    })
  }
  $scope.display=true
})

app.controller('ProductCtrl', ($scope, Product)=>{
  $scope.products = Product.getProduct()
  $scope.alerts = ()=> {
    alert("Hello World")
  }
})

var data = ()=>{
  var rest = []
  firebase.database().ref('resturant/users').on('value', (snapshot) => {
  snapshot.forEach((child) => {
    if (child.val().status === 'In Service') {
      alert("Data Loading....")
      rest.push(child.val())
    }
  })
})
return rest
}