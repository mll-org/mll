(function () {
    "use strict";

    angular
        .module("MLLabApp")
        .factory("InviteService", InviteService);

    function InviteService($http) {
        var api = {
            addUserToDB: addUserToDB,
            getInviteeList: getInviteeList,
            markUserAcceptance: markUserAcceptance
        };
        return api;

        function addUserToDB(user) {
            var url = '/api/user';
            console.log("calling post http");
            return $http.post(url, user);
        }

        function getInviteeList() {
            var url = '/api/invitees';
            return $http.get(url);
        }

        function markUserAcceptance(user) {
            var url = '/api/user/accept';
            console.log("calling post http");
            return $http.put(url, user);
        }
    }
})();