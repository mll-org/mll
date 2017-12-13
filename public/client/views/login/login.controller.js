(function (angular) {
    'use strict';

    angular
        .module('MLLabApp')
        .controller('LoginController', LoginController);

    function LoginController($location, $rootScope) {
        var vm = this;
        vm.login = login;

        function login(username, password) {
            $rootScope.isLoggedIn = true;
            if (this.username === "anr") {
                $rootScope.roleanr = true;
            } else {
                $rootScope.roleanr = false;
            }
            $location.url("/anrrequest");
        }
    }

})(window.angular);