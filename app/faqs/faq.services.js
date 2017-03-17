(function () {
    'use strict';
    angular
        .module('lingoApp')
        .factory('faqFactory', faqFactory);

    faqFactory.$inject = ['$http'];

    function faqFactory($http) {

        return {
            getFaqData: getFaqData
        }

        function getFaqData() {
            return $http.get('http://pacoima-ypi.azurewebsites.net/api/faqs/')
        }

    }



})();