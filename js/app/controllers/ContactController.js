function ContactController(){
  var vm = this;
  vm.name = "Vin";
  vm.email = "vinvasir@fakemail.com";
  vm.phone = "555-555-5555";
  
  this.changeName = function(){
    vm.name = "NotVin";
  }
}

angular
      .module('app')
      .controller('ContactController', ContactController);