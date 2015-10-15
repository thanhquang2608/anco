var app = angular.module('starter.controllers', []);

app.controller('AppCtrl', function ($rootScope, $scope, $state, $ionicPopup, AuthService, AUTH_EVENTS, NETWORK_EVENTS) {
    $scope.$on(AUTH_EVENTS.notAuthorized, function (event) {
        var alertPopup = $ionicPopup.alert({
            title: 'Unauthorized!',
            template: 'You are not allowed to access this resource.'
        });
    });

    $scope.$on(AUTH_EVENTS.notAuthenticated, function (event) {
        AuthService.logout();
        $state.go('login');
        var alertPopup = $ionicPopup.alert({
            title: 'Session Lost!',
            template: 'Sorry, You have to login again.'
        });
    });

    $scope.$on(NETWORK_EVENTS.nointernet, function (event) {
        var alertPopup = $ionicPopup.alert({
            template: 'Không kết nối mạng được'
        });
    });

    $scope.setCurrentUsername = function (name) {
        $scope.username = name;
    };

    $scope.$on('$ionicView.beforeEnter', function () {
        console.log('enter');
        var stateName = $state.current.name;
        if (stateName === 'tabs.survey' || stateName === 'tabs.dealers' || stateName === 'tabs.account') {
            $rootScope.hideTabs = false;
        } else {
            $rootScope.hideTabs = true;
        }
    });
})

.controller('HomeCtrl', function ($scope) {

});