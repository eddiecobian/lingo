(function () {
    angular
        .module('lingoApp')
        .controller('faqController', FaqController);

    FaqController.$inject = ['$scope', '$http', 'faqFactory'];

    function FaqController($scope, $http, faqFactory) {

        var vm = this;

        vm.FaqData = FaqData;

        faqFactory.getFaqData().then(FaqData);

        function FaqData(data) {
            vm.data = data.data.items
        }
    };
})();
