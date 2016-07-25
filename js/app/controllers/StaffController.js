function StaffController(){
  var vm = this;
  vm.name = "Go";
  vm.email = "gogoblue@fakemail.com";
  vm.phone = "111-111-1111";
}

angular
      .module('app')
      .controller('StaffController', StaffController);