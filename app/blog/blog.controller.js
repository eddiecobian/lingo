(function () {
    angular
        .module('lingoApp')
        .controller('blogController', BlogController);

    BlogController.$inject = ['$scope', 'blogFactory'];

    function BlogController($scope, BlogFactory) {

        var vm = this;

        vm.blogData = blogData;
        vm.PostForm = PostForm;
        vm.form = false;

        activate();

        function activate() {

            BlogFactory.getBlogData().then(blogData);

        }

        ///// Post User Input Values ////////////////////
        function PostForm() {

            var users = {
                title: vm.name,
                author: vm.email,
                content: vm.comment

            }

            BlogFactory.postUserBlog(users).then(blogData);
            //vm.data = data.data.items
        }

        //////////////////////////////////////////////
        
        function blogData(data) {
            vm.data = data.data.items
        }
    }
})();
