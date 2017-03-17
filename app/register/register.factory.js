///IFFE
(function () {
    'use strict';
    angular
        .module('lingoApp')
        .factory('RegisterFactory', RegisterFactory);

    RegisterFactory.$inject = ['$http'];

    //////////////////////////////////////////////////////
    function RegisterFactory($http) {

        var urlPrefix = 'https://pacoima-ypi.azurewebsites.net/';

        return {

            createUserAccount: createUserAccount
        }

        //my post call setup/////////////////////////////////////////////////
        function createUserAccount(data) {
            var config = {
                method: "POST",
                data: data,
                url: urlPrefix + 'api/users/register',
                withCredentials: true
               
            }

            return $http(config)
        }
        ////////////////////////////////////////////////////////////////////
    }

})();