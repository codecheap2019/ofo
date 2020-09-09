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
  $scope.resturants = Resturant.getResturant();
  $scope.FilterBy = [{
    name: "Rating", 
    value: "-rating"
  }, {
    name: "Delivery Time",
    value: "adt"
  }]
  $scope.setResturant = (res)=>{
    alert(res)
    Product.setFilterResturant(res)
    $location.path('/product')
  }
})

app.controller('ProductCtrl', ($scope, Product)=>{
  $scope.products = Product.getProduct()
})