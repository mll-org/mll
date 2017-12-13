/**
 * Created by sneha_000 on 11/21/2017.
 */
(function(){
    "use strict";
    angular
        .module("MLLabApp")
        .controller("SidebarController", SidebarController);

    function SidebarController($scope, $location) {

        $scope.getClass = function (path) {
            console.log($location.path());
            console.log(path);

            if ($location.path().substr(0, path.length) === path) {
                return 'active';
            } else {
                return '';
            }
        }
    }
})();