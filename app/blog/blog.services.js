///IFFE
(function () {
    'use strict';
    angular
        .module('lingoApp')
        .factory('blogFactory', BlogFactory);

    BlogFactory.$inject = ['$http'];

    //////////////////////////////////////////////////////
    function BlogFactory($http) {

        var urlPrefix = 'https://pacoima-ypi.azurewebsites.net/';

        return {
            getBlogData: getBlogData,
            postUserBlog: postUserBlog
        }

        ////////////////////////////////////////////////////

        function getBlogData() {
            return $http.get(urlPrefix + 'api/Articles/', {
                withCredentials: true
            });
        }

        //my post call setup////////////////////////////////
        function postUserBlog(data) {
            var config = {
                method: "Post",
                url: urlPrefix + 'api/Articles',
                withCredentials: true,
                data: data
            }
            return $http(config)
        }
    }
})();
