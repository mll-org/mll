(function () {
    'use strict';

    angular
        .module('MLLabApp')
        .controller('AnrRequestController', AnrRequestController);

    function AnrRequestController($scope, InviteService) {
        function init() {
            InviteService
                .getInviteeList()
                .then(function successCallback(response) {
                    // this callback will be called asynchronously
                    // when the response is available
                    $scope.musicians = response.data;
                    console.log(response);
                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
        }
        init();
    }
})();