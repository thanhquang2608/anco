﻿app.controller('UpdateBoController', function ($rootScope, $scope, $stateParams, $http, AuthService,
    AUTH_EVENTS, NETWORK, $ionicLoading, Dealers, $state, $ionicHistory, $ionicViewService) {

    var serviceBase = NETWORK.BASE_URL;

    $scope.getUser = function () {
        $scope.user = AuthService.user();
    }

    $scope.getUser();
    $scope.submited = false;

    $rootScope.$on('$stateChangeStart', function (event, next, current) {
        //console.log("UpdateBoController change state");
        $scope.update = false;
        //$scope.initBo();
    });

    $scope.setUpdate = function () {
        $scope.update = true;
    }

    //////// BO
    //// CON CO
    $scope.survey.BO_CC = 0;
    $scope.survey.BO_CC_MUA_TT = 0;
    $scope.survey.BO_CC_SL = 0;
    //// DH
    $scope.survey.BO_DH = 0;
    $scope.survey.BO_DH_MUA_TT = 0
    $scope.survey.BO_DH_SL = 0;
    //// CP
    $scope.survey.BO_CP = 0;
    $scope.survey.BO_CP_MUA_TT = 0;
    $scope.survey.BO_CP_SL = 0;
    //// UP
    $scope.survey.BO_UP = 0;
    $scope.survey.BO_UP_MUA_TT = 0;
    $scope.survey.BO_UP_SL = 0;
    //// ANOTHER
    $scope.survey.BO_ANOTHER = 0;
    $scope.survey.BO_ANOTHER_MUA_TT = 0;
    $scope.survey.BO_ANOTHER_SL = 0;

    // ------------------- Ga ------------
    $scope.initBo = function () {
        //console.log("INIT Bo");


        if (Dealers.survey().BO_ID != null) {
            var param = {
                token: AuthService.token()
            }
            $http.get(serviceBase + '/survey/bo/' + Dealers.survey().BO_ID, { params: param })
                .success(function (response) {
                    //console.log("load gia cam success");
                    //////// BO
                    //// CON CO
                    $scope.survey.BO_CC = response.CC_KD;
                    $scope.survey.BO_CC_MUA_TT = response.CC_MUA;
                    $scope.survey.BO_CC_SL = response.CC_SL;
                    //// DH
                    $scope.survey.BO_DH = response.DH_KD;
                    $scope.survey.BO_DH_MUA_TT = response.DH_MUA
                    $scope.survey.BO_DH_SL = response.DH_SL;
                    //// CP
                    $scope.survey.BO_CP = response.CP_KD;
                    $scope.survey.BO_CP_MUA_TT = response.CP_MUA;
                    $scope.survey.BO_CP_SL = response.CP_SL;
                    //// UP
                    $scope.survey.BO_UP = response.UP_KD;
                    $scope.survey.BO_UP_MUA_TT = response.UP_MUA;
                    $scope.survey.BO_UP_SL = response.UP_SL;
                    //// ANOTHER
                    $scope.survey.BO_ANOTHER = response.O_KD;
                    $scope.survey.BO_ANOTHER_MUA_TT = response.O_MUA;
                    $scope.survey.BO_ANOTHER_SL = response.O_SL;
                }).error(function (err, status) {
                    //console.log("load dealers error " + err);
                });
        }
        else {
            //////// BO
            //// CON CO
            $scope.survey.BO_CC = 0;
            $scope.survey.BO_CC_MUA_TT = 0;
            $scope.survey.BO_CC_SL = 0;
            //// DH
            $scope.survey.BO_DH = 0;
            $scope.survey.BO_DH_MUA_TT = 0
            $scope.survey.BO_DH_SL = 0;
            //// CP
            $scope.survey.BO_CP = 0;
            $scope.survey.BO_CP_MUA_TT = 0;
            $scope.survey.BO_CP_SL = 0;
            //// UP
            $scope.survey.BO_UP = 0;
            $scope.survey.BO_UP_MUA_TT = 0;
            $scope.survey.BO_UP_SL = 0;
            //// ANOTHER
            $scope.survey.BO_ANOTHER = 0;
            $scope.survey.BO_ANOTHER_MUA_TT = 0;
            $scope.survey.BO_ANOTHER_SL = 0;
        }
        //console.log($scope.giacam);
    }

    $scope.updateBo = function (isValid) {
        $scope.submited = true;

        if (!isValid) {
            $ionicLoading.hide();
            $ionicLoading.show({ template: 'Dữ liệu nhập chưa đúng, vui lòng kiểm tra lại!\n', noBackdrop: true, duration: 2000 });
            return;
        }


        if ($scope.update) {
            $ionicLoading.show({ template: 'Đang lưu...' });

            //console.log(Dealers.survey());
            var param = {
                token: AuthService.token(),
                surveyid: Dealers.survey().SurveyId,

                cc_kd: $scope.survey.BO_CC,
                cc_mua: $scope.survey.BO_CC == 0 ? 0 : $scope.survey.BO_CC_MUA_TT,
                cc_sl:  $scope.survey.BO_CC == 0 ? 0 : parseInt($scope.survey.BO_CC_SL),

                dh_kd: $scope.survey.BO_DH,
                dh_mua: $scope.survey.BO_DH == 0 ? 0 : $scope.survey.BO_DH_MUA_TT,
                dh_sl:  $scope.survey.BO_DH == 0 ? 0 : parseInt($scope.survey.BO_DH_SL),

                cp_kd: $scope.survey.BO_CP,
                cp_mua: $scope.survey.BO_CP == 0 ? 0 : $scope.survey.BO_CP_MUA_TT,
                cp_sl:  $scope.survey.BO_CP == 0 ? 0 : parseInt($scope.survey.BO_CP_SL),

                up_kd: $scope.survey.BO_UP,
                up_mua: $scope.survey.BO_UP == 0 ? 0 : $scope.survey.BO_UP_MUA_TT,
                up_sl:  $scope.survey.BO_UP == 0 ? 0 : parseInt($scope.survey.BO_UP_SL),

                o_kd: $scope.survey.BO_ANOTHER,
                o_mua: $scope.survey.BO_ANOTHER == 0 ? 0 : $scope.survey.BO_ANOTHER_MUA_TT,
                o_sl:  $scope.survey.BO_ANOTHER == 0 ? 0 : parseInt($scope.survey.BO_ANOTHER_SL)
            }
            if (Dealers.survey().BO_ID) {
                param.boid = Dealers.survey().BO_ID;
            }
            //console.log(param);

            $http.post(serviceBase + '/survey/create/bo', param)
                .success(function (response) {
                    $ionicLoading.hide();
                    $ionicLoading.show({ template: 'Dữ liệu đã được lưu trên hệ thống!', noBackdrop: true, duration: 2000 });
                    $scope.BO_ID = response.BoId;
                    $scope.update = false;

                    $state.go('tabs.dealers', {}, { reload: true });

                }).error(function (err, status) {
                    $ionicLoading.hide();
                    $ionicLoading.show({ template: 'Lỗi trong quá trình xử lý!\n', noBackdrop: true, duration: 2000 });
                });
        }
        else {
            $state.go('tabs.dealers', {}, { reload: true });
        }
    }
})