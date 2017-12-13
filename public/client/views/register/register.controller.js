(function (angular) {
    'use strict';

    angular
        .module('MLLabApp')
        .controller('RegisterController', RegisterController);

    function RegisterController($scope, $location, $rootScope, InviteService) {
        this.register = () => {
            var user = {
                name : $scope.ctrl.fullname,
                email : $scope.ctrl.email,
                password: $scope.ctrl.password
            };

            InviteService
                .markUserAcceptance(user);
            $rootScope.registerSuccess = true;
            $location.url("/");
        }
    }

})(window.angular);