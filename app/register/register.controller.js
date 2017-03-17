(function () {
     "use: strict"
    angular
        .module('lingoApp')
        .controller('registerController', RegisterController);

    RegisterController.$inject = ['$scope', '$state', 'RegisterFactory'];

    function RegisterController($scope, $state, RegisterFactory) {

        var vm = this;

        vm.create = create;
        vm.createUser = createUser;
        vm.validateUser = validateUser;
        //vm.form = false;

        ///// Post Login Input Values ////////////////////////////////
         function create() {

           vm.newUsers= data.data.item;
           console.log(data.data.item);

            //vm.data = data.data.items
    
        }   
        function createUser(){

            var registration = {

                firstName: vm.firstName,
                lastName: vm.lastName,
                email: vm.email,
                password: vm.password
            }
          RegisterFactory.createUserAccount(registration).then(validateUser);
        }
    
    
    function validateUser(data){
        
      // if (data.data.isSuccessful == true) {

              console.log(data);
              vm.newUsers = data.data.item;
              sessionStorage.setItem('user', data.data.item);
                 $state.go('confirmation');
             //window.location.replace = ('user-profile');
    }

    
    //         } else {
    //             console.log("Unsuccessful call");
    //         };
    //     }
    // }
}

})();