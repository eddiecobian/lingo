(function () {
     "use: strict"
    angular
        .module('lingoApp')
        .controller('loginController', LoginController);

    LoginController.$inject = ['$scope', '$state', 'loginFactory', '$location'];

    function LoginController($scope, $state, loginFactory, $location ) {

        var vm = this;

        vm.login = login;
        vm.updateLogin = updateLogin;
        vm.validateUser = validateUser;
        //vm.form = false;

        ///// Post Login Input Values ////////////////////////////////
         function login() {

           vm.users= data.item;
           console.log(data.item);

            //vm.data = data.data.items
    
}   
        function updateLogin(){

            var loginInfo = {

                email: vm.email,
                password: vm.password
            }
          loginFactory.postUserLogin(loginInfo).then(validateUser);
        }
    
    
    function validateUser(data){
        
       if (data.data.isSuccessful == true) {
              sessionStorage.setItem('user', data.data.item);
                 $state.transitionTo('user-profile',{
                     location:  false
                 });
             //window.location.replace = ('user-profile');


                console.log(data);

            } else {
                console.log("Unsuccessful call");
            };
        }
    }
})();