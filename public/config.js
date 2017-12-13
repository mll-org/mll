(function () {
    angular
        .module("MLLabApp")
        .config(function Config($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "client/views/login/login.view.html",
                controller: "LoginController as ctrl"
            })
            .when("/register", {
                templateUrl: "client/views/register/register.view.html",
                controller: "RegisterController as ctrl"
            })
            .when("/arhome", {
                templateUrl: "client/views/arhome/arhome.view.html"
            })
            .when("/invite", {
                templateUrl: "client/views/invite/invite.view.html",
                controller: "InviteController as ctrl"
            })
            .when("/track", {
                templateUrl: "client/views/track/track.view.html"
            })
            .when("/anrrequest", {
                templateUrl: "client/views/anrrequest/anrrequest.view.html",
                controller: "AnrRequestController as ctrl"
            })
            .when("/mhome", {
                templateUrl: "client/views/musician/musicianhome.view.html"
            })
            .when("/mprofile", {
                templateUrl: "client/views/musician/mprofile.view.html"
            })
            .when("/what-is-this1", {
                templateUrl: "client/views/musician/whatisthis1.view.html"
            })
            .when("/what-is-this2", {
                templateUrl: "client/views/musician/whatisthis2.view.html"
            })
            .when("/what-is-this3", {
                templateUrl: "client/views/musician/whatisthis3.view.html"
            })
            .when("/what-is-this4", {
                templateUrl: "client/views/musician/whatisthis4.view.html"
            })
            .when("/what-is-this5", {
                templateUrl: "client/views/musician/whatisthis5.view.html"
            })
            .when("/about", {
                templateUrl: "client/views/about/about.view.html"
            });
    });
})();