(function () {
    'use strict';
    angular
        .module('lingoApp')
        .factory('loginFactory', LoginFactory);

    LoginFactory.$inject = ['$http'];

    //////////////////////////////////////////////////////
    function LoginFactory($http) {

        var urlPrefix = 'https://pacoima-ypi.azurewebsites.net/';

        return {

            postUserLogin: postUserLogin
        }

        //my post call setup/////////////////////////////////////////////////
        function postUserLogin(data) {
            var config = {
                method: "POST",
                data: data,
                url: urlPrefix + 'api/users/login/force',
                withCredentials: true
               
            }

            return $http(config)
        }
        ////////////////////////////////////////////////////////////////////
    }

})();