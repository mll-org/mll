(function () {
    "use strict";

    angular
        .module("MLLabApp")
        .factory("UserService", UserService);

    function UserService($http) {
        var api = {
            login: login,
            checkLogin: checkLogin,
            logout: logout
        };
        return api;

        function login(username, password) {
            var user = {
                username: username,
                password: password
            };
            var url = '/api/login';
            return $http.post(url, user);
        }

        function checkLogin() {
            var url = '/api/checkLogin';
            return $http.post(url);
        }

        function logout() {
            var url = '/api/logout';
            return $http.post(url);
        }
    }
})();