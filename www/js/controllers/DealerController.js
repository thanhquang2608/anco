﻿app.controller('DealerController', function ($rootScope, $scope, $stateParams, $http, AuthService,
    AUTH_EVENTS, NETWORK, $ionicLoading, Dealers, $state, SurveyService, $localstorage) {
    //$scope.dealer = Dealers.get($stateParams.dealerId);
    var LIST_DEALERS_KEY = 'AncoListDealersKey';
    $scope.serviceBase = NETWORK.BASE_URL;
    $scope.submited = false;

    $scope.dates = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
    $scope.months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

    $scope.dealers = [];
    $scope.getUser = function () {
        $scope.user = AuthService.user();
    }

    $scope.getUser();

    // -----------------------upload picture--------------------------------------

    $scope.takePhoto = function (id) {
        //console.log(id);
        $scope.id = id;
        var options = {
            quality: 75,
            destinationType: Camera.DestinationType.FILE_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            //allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            popoverOptions: CameraPopoverOptions,
            targetWidth: 500,
            targetHeight: 500,
            saveToPhotoAlbum: false
        };

        navigator.camera.getPicture(onSuccess, onFail, options);
    }

    function onSuccess(imageURI) {
        $scope.$apply(function () {
            switch ($scope.id) {
                case 1:
                    $scope.dealer.CMND_Front_Local = imageURI;
                    $scope.setUpdateImage($scope.id);
                    break;
                case 2:
                    $scope.dealer.CMND_Back_Local = imageURI;
                    $scope.setUpdateImage($scope.id);
                    break;
                case 3:
                    $scope.survey.DealerPhoto_Local = imageURI;
                    $scope.setUpdateImage($scope.id);
                    break;
                case 4:
                    $scope.survey.StorePhoto_Local = imageURI;
                    $scope.setUpdateImage($scope.id);
                    break;
                case 5:
                    $scope.survey.StockPhoto_Local = imageURI;
                    $scope.setUpdateImage($scope.id);
                    break;
            }
        });
    }

    function onFail(message) {
        console.log('Failed because: ' + message);
    }

    function uploadImage(uri, typeId) {
        try {


        //console.log(uri);
        var fileURL = uri;
        //var options = {
        //    fileKey: "uploadFile",
        //    fileName: fileURL.substr(fileURL.lastIndexOf('/') + 1),
        //    chunkedMode: false,
        //    mimeType: "image/jpeg"
        //};

        var params = {
            dealerid: $scope.dealer.DealerId,
            surveyid: $scope.survey.SurveyId,
            type: typeId
        };

        $ionicLoading.hide();
        $ionicLoading.show({ template: 'start upload ! + ' + typeId, noBackdrop: true, duration: 2000 });


        // $scope.showToast('start upload ' + uri, 'short', 'bottom');
        var win = function (r) {
            // $scope.showToast("SUCCESS: " + JSON.stringify(r.response), 'long', 'bottom');
            switch (typeId) {
                case 1: $scope.update1 = false; break;
                case 2: $scope.update2 = false; break;
                case 3:
                    // update dealer photo
                    // $ionicLoading.hide();
                    // $ionicLoading.show({ template: 'typeId = ' + typeId, noBackdrop: true, duration: 2000 });
                    var serverResult = JSON.stringify(r.response);
                    var serverImageUrl = JSON.parse(r.response).file[0].fd;
                    Dealers.updateDealerBySurveyId(Dealers.survey().SurveyId, null, null, null, serverImageUrl);
                    $scope.update3 = false;
                    break;
                case 4: $scope.update4 = false; break;
                case 5: $scope.update5 = false; break;
            }
        }

        var fail = function (error) {
            $ionicLoading.hide();
            $ionicLoading.show({ template: "ERROR: " + JSON.stringify(err), noBackdrop: true, duration: 2000 });
        }

        var options = new FileUploadOptions();
        options.fileKey = "uploadFile";
        options.fileName = fileURL.substr(fileURL.lastIndexOf('/') + 1);
        options.mimeType = "image/jpeg";
        options.params = params;
        try {
            var ft = new FileTransfer();
            ft.onprogress = function (progressEvent) {
                // $scope.showToast("PROGRESS: " + JSON.stringify(err), 'long', 'bottom');
            };
            ft.upload(fileURL, encodeURI($scope.serviceBase + '/images/upload'), win, fail, options);
        }
        catch (err) {
            // $scope.showToast('exception ' + err, 'short', 'bottom');
        }

         }  catch (err) {
             $ionicLoading.hide();
            $ionicLoading.show({ template: 'exception ' + err, noBackdrop: true, duration: 2000 });
        }
    }

    $scope.showToast = function (message, duration, location) {
        window.plugins.toast.show(message, duration, location,
            function (success) {
                //console.log("The toast was shown");
            }, function (error) {
                //console.log("The toast was not shown due to " + error);
            });
    }

    $scope.setUpdate = function (id) {
        switch (id) {
            case 1: $scope.update1 = true; break;
            case 2: $scope.update2 = true; break;
            case 3: $scope.update3 = true; break;
            case 4: $scope.update4 = true; break;
            case 5: $scope.update5 = true; break;
        }
    }

    // ---------------------- dealer--------------
    $scope.loadDistrict = function () {
        var param = {
            token: AuthService.token(),
            province: $scope.dealer.ProvinceId,
            uac_pc: $scope.user.AC_PC
        }
        //console.log("dealer controller - loaddistrict");
        //console.log(param);

        $http.get($scope.serviceBase + '/districts', { params: param })
            .success(function (response) {
                $scope.districts = response;
                //$scope.districts = [];
                //$scope.districts.push.apply($scope.districts, response);
            }).error(function (err, status) {
            });
    }

    $scope.loadProvinces = function () {
        var param = {
            token: AuthService.token(),
            region: $scope.user.RegionId,
            ac_pc: $scope.user.AC_PC
        }

        //console.log(param);

        $http.get($scope.serviceBase + '/provinces', { params: param })
            .success(function (response) {
                $scope.provinces = response;
                $scope.loadDistrict();
            }).error(function (err, status) {

            });
    }

    $rootScope.$on(AUTH_EVENTS.authenticated, function (event) {
        //console.log("DealerController on AUTH_EVENTS");
        $scope.user = AuthService.user();
        //$scope.loadDealers();
    });
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        //console.log("DealerController change state");
        //event.preventDefault();
        //if ("tabs.dealer-detail" == fromState.name)
        //    $scope.initDealer();
        //if ("tabs.dealer-detail" == fromState.name)
        //    $scope.initDealer();
        //console.log(fromstate);
        //console.log(tostate);
        //$scope.update = true;
        ////use to check update image
        //$scope.update1 = false;
        //$scope.update2 = false;
        //$scope.update3 = false;
        //$scope.update4 = false;
        //$scope.update5 = false;
        //$scope.loadDealers();
    });

    $scope.setUpdateImage = function (id) {
        switch (id) {
            case 1: $scope.update1 = true; break;
            case 2: $scope.update2 = true; break;
            case 3: $scope.update3 = true; break;
            case 4: $scope.update4 = true; break;
            case 5: $scope.update5 = true; break;
        }
    }

    $scope.loadDealers = function () {
        var listDealers = $localstorage.getObject(LIST_DEALERS_KEY);
        if (listDealers) {
            Dealers.setDealers(listDealers);
            $scope.dealers = Dealers.all();
            return;
        }

        console.log('Load Dealers');
        var param = {
            token: AuthService.token(),
            saleid: $scope.user.SaleRepId
        }

        //console.log(param);

        $http.get($scope.serviceBase + '/survey/list', { params: param })
            .success(function (response) {
                Dealers.setDealers(response);
                $scope.dealers = Dealers.all();

                $localstorage.setObject(LIST_DEALERS_KEY, $scope.dealers);
                ////console.log($scope.dealers);

            }).error(function (err, status) {
                //console.log("load dealers error "+err);
            });
    }

    $scope.initDealer = function () {
        console.log("Init dealer");
        var param = {
            token: AuthService.token()
        }
        $http.get($scope.serviceBase + '/survey/' + $stateParams.SurveyId, { params: param })
            .success(function (response) {
                //console.log("Init DEALER");
                //console.log(response);


                Dealers.setDealer(response.dealer);
                Dealers.setSurvey(response.survey);
                $scope.dealer = Dealers.dealer();
                $scope.survey = Dealers.survey();

                if (!$scope.provinces) {
                    $scope.loadProvinces()
                } else {
                    $scope.loadDistrict();
                }

                console.log($scope.dealer);

                //console.log("DISTRICTS");
                //console.log($scope.districts);
                ////console.log(Dealers.getDay() + ", " + Dealers.getMonth());
                //$scope.dealer.day = Dealers.getDay();
                //$scope.dealer.month = Dealers.getMonth();
                //provinceId

                //console.log($scope.dealer);
            }).error(function (err, status) {
                //console.log("load dealers error " + err);
            });
    }

    $scope.setUpdate = function () {
        //console.log("SET UPDATE");
        $scope.update = true;
    }

    $scope.checkInput = function () {

        // if ($scope.survey.SL_DL2 != undefined && !isInt($scope.survey.SL_DL2))
        //     return false;
        // if ($scope.survey.SL_HO != undefined && !isInt($scope.survey.SL_HO))
        //     return false;
        // if ($scope.survey.NUOI_TT != undefined && !isInt($scope.survey.NUOI_TT))
        //     return false;
        // if ($scope.survey.SL_NAI != undefined && !isInt($scope.survey.SL_NAI))
        //     return false;
        // if ($scope.survey.SL_THIT != undefined && !isInt($scope.survey.SL_THIT))
        //     return false;
        // if ($scope.survey.SL_NOC != undefined && !isInt($scope.survey.SL_NOC))
        //     return false;

        // if ($scope.dealer.CMND != undefined && !isInt($scope.dealer.CMND))
        //     return false;

        // if ($scope.dealer.PhoneNumber != undefined && !isInt($scope.dealer.PhoneNumber))
        //     return false;

        // if ($scope.dealer.DealerName == undefined || $scope.dealer.DealerName == "")
        //     return false;
        // if ($scope.dealer.FullName == undefined || $scope.dealer.FullName == "")
        //     return false;

        // if ($scope.dealer.year != undefined && !isInt($scope.dealer.year))
        //     return false;

        return true;
    }

    function isInt(value) {
        var x;
        return isNaN(value) ? !1 : (x = parseFloat(value), (0 | x) === x);
    }

    function getProvinceName(provinceId) {
        //console.log($scope.provinces);
        for (var i = 0; i < $scope.provinces.length; i++) {
            if ($scope.provinces[i].ProvinceId == provinceId)
                return $scope.provinces[i].ProvinceName;
        }
        return "";
    }

    $scope.updateDealer = function (isValid) {
        console.log(isValid);
        $scope.submited = true;

        if (!isValid) {
            $ionicLoading.hide();
            $ionicLoading.show({ template: 'Dữ liệu nhập chưa đúng, vui lòng kiểm tra lại!\n', noBackdrop: true, duration: 2000 });
            return;
        }

        if ($scope.update) {
            $ionicLoading.show({ template: 'Đang lưu...' });

            var param = {
                token: AuthService.token(),

                ac_pc: $scope.dealer.Buy,
                dealername: $scope.dealer.DealerName,
                dealercode: $scope.dealer.DealerCode,
                fullname: $scope.dealer.FullName,
                phonenumber: $scope.dealer.PhoneNumber,
                birthday: $scope.dealer.day + "/" + $scope.dealer.month + "/" + $scope.dealer.year,
                districtid: $scope.dealer.DistrictId,
                address: $scope.dealer.Address,
                cmnd: $scope.dealer.CMND,
                // cmndfont : $scope.dealer.cmndFront,
                // cmndback : $scope.dealer.cmndBack,

                long: $scope.survey.Long,
                lat: $scope.survey.Lat,
                // dealerphoto : $scope.survey.dealerPhoto,
                // storephoto : $scope.survey.storePhoto,
                // stockphoto : $scope.survey.stockPhoto,
                sldl2: $scope.survey.SL_DL2,
                slho: $scope.survey.SL_HO,
                nuoitt: $scope.survey.NUOI_TT,
                slnai:  $scope.survey.NUOI_TT == 0 ? 0 : $scope.survey.SL_NAI,
                slthit: $scope.survey.NUOI_TT == 0 ? 0 : $scope.survey.SL_THIT,
                slnoc:  $scope.survey.NUOI_TT == 0 ? 0 : $scope.survey.SL_NOC,
                saleid: $scope.user.SaleRepId
            }

            if ($scope.dealer.DealerId) {
                param.dealerid = $scope.dealer.DealerId;
            }

            //console.log(param);

            $http.post($scope.serviceBase + '/survey/create_or_update', param)
                .success(function (response) {
                    //console.log(response);
                    $ionicLoading.hide();
                    $ionicLoading.show({ template: 'Dữ liệu đã được lưu trên hệ thống!', noBackdrop: true, duration: 2000 });

                    // edit first item in list dealer
                    var provinceName = getProvinceName($scope.dealer.provinceId);
                    Dealers.updateDealerBySurveyId(Dealers.survey().SurveyId, $scope.dealer.dealerName, provinceName, $scope.dealer.address, null);

                    if ($scope.update1)
                        uploadImage($scope.dealer.CMND_Front_Local, 1);
                    if ($scope.update2)
                        uploadImage($scope.dealer.CMND_Back_Local, 2);
                    if ($scope.update3)
                        uploadImage($scope.survey.DealerPhoto_Local, 3);
                    if ($scope.update4)
                        uploadImage($scope.survey.StorePhoto_Local, 4);
                    if ($scope.update5)
                        uploadImage($scope.survey.StockPhoto_Local, 5);

                    $scope.update = false;
                    $scope.submited = true;
                    $state.go('tabs.dealer-detail-sales-heo');
                    //$window.location.href = "#/tab/sales-heo";

                }).error(function (err, status) {
                    $ionicLoading.hide();
                    $ionicLoading.show({ template: 'Lỗi trong quá trình xử lý!\n' + err.toString(), noBackdrop: true, duration: 2000 });
                    //console.log(err);
                });
        }
        else {
            if ($scope.update1)
                uploadImage($scope.dealer.CMND_Front_Local, 1);
            if ($scope.update2)
                uploadImage($scope.dealer.CMND_Back_Local, 2);
            if ($scope.update3)
                uploadImage($scope.survey.DealerPhoto_Local, 3);
            if ($scope.update4)
                uploadImage($scope.survey.StorePhoto_Local, 4);
            if ($scope.update5)
                uploadImage($scope.survey.StockPhoto_Local, 5);

            $scope.submited = true;
            $state.go('tabs.dealer-detail-sales-heo');
        }
    }
    /////// HEO
    //// 
    $scope.heo = {};
    $scope.heo.HEO_ANCO = 0;
    $scope.heo.HEO_ANCO_MUA_TT = 0;
    $scope.heo.HEO_ANCO_SL = 0;
    $scope.heo.HEO_ANCO_HEO = 0;
    $scope.heo.HEO_ANCO_THIT = 0;
    $scope.heo.HEO_ANCO_NAI = 0;
    //// CONCO
    $scope.heo.HEO_CONCO = 0;
    $scope.heo.HEO_CONCO_MUA_TT = 0;
    $scope.heo.HEO_CONCO_SL = 0;
    $scope.heo.HEO_CONCO_HEO = 0;
    $scope.heo.HEO_CONCO_THIT = 0;
    $scope.heo.HEO_CONCO_NAI = 0;
    //// CP
    $scope.heo.HEO_CP = 0;
    $scope.heo.HEO_CP_MUA_TT = 0;
    $scope.heo.HEO_CP_SL = 0;
    $scope.heo.HEO_CP_HEO = 0;
    $scope.heo.HEO_CP_THIT = 0;
    $scope.heo.HEO_CP_NAI = 0;
    //// CG
    $scope.heo.HEO_CG = 0;
    $scope.heo.HEO_CG_MUA_TT = 0;
    $scope.heo.HEO_CG_SL = 0;
    $scope.heo.HEO_CG_HEO = 0;
    $scope.heo.HEO_CG_THIT = 0;
    $scope.heo.HEO_CG_NAI = 0;
    //// GF
    $scope.heo.HEO_GF = 0;
    $scope.heo.HEO_GF_MUA_TT = 0;
    $scope.heo.HEO_GF_SL = 0;
    $scope.heo.HEO_GF_HEO = 0;
    $scope.heo.HEO_GF_THIT = 0;
    $scope.heo.HEO_GF_NAI = 0;
    //// ANOTHER
    $scope.heo.HEO_ANOTHER = 0;
    $scope.heo.HEO_ANOTHER_MUA_TT = 0;
    $scope.heo.HEO_ANOTHER_SL = 0;
    $scope.heo.HEO_ANOTHER_HEO = 0;
    $scope.heo.HEO_ANOTHER_THIT = 0;
    $scope.heo.HEO_ANOTHER_NAI = 0;
    // ------------------- HEO ------------
    $scope.initHeo = function () {
        //console.log("INIT HEO");

        //console.log(Dealers.survey().HEO_ID);
        if (Dealers.survey().HEO_ID != null) {
            var param = {
                token: AuthService.token()
            }
            $http.get($scope.serviceBase + '/survey/heo/' + Dealers.survey().HEO_ID, { params: param })
                .success(function (response) {
                    //console.log("load heo success");
                    //console.log(response);
                    $scope.heo = response;
                    $scope.heo.HEO_ANCO = response.AC_KD;
                    $scope.heo.HEO_ANCO_MUA_TT = response.AC_MUA;
                    $scope.heo.HEO_ANCO_SL = response.AC_SL;
                    $scope.heo.HEO_ANCO_HEO = response.AC_CON;
                    $scope.heo.HEO_ANCO_THIT = response.AC_THIT;
                    $scope.heo.HEO_ANCO_NAI = response.AC_NAI;

                    $scope.heo.HEO_CONCO = response.CC_KD;
                    $scope.heo.HEO_CONCO_MUA_TT = response.CC_MUA;
                    $scope.heo.HEO_CONCO_SL = response.CC_SL;
                    $scope.heo.HEO_CONCO_HEO = response.CC_CON;
                    $scope.heo.HEO_CONCO_THIT = response.CC_THIT;
                    $scope.heo.HEO_CONCO_NAI = response.CC_NAI;

                    $scope.heo.HEO_CP = response.CP_KD;
                    $scope.heo.HEO_CP_MUA_TT = response.CP_MUA;
                    $scope.heo.HEO_CP_SL = response.CP_SL;
                    $scope.heo.HEO_CP_HEO = response.CP_CON;
                    $scope.heo.HEO_CP_THIT = response.CP_THIT;
                    $scope.heo.HEO_CP_NAI = response.CP_NAI;

                    $scope.heo.HEO_CG = response.CG_KD;
                    $scope.heo.HEO_CG_MUA_TT = response.CG_MUA;
                    $scope.heo.HEO_CG_SL = response.CG_SL;
                    $scope.heo.HEO_CG_HEO = response.CG_CON;
                    $scope.heo.HEO_CG_THIT = response.CG_THIT;
                    $scope.heo.HEO_CG_NAI = response.CG_NAI;

                    $scope.heo.HEO_GF = response.GF_KD;
                    $scope.heo.HEO_GF_MUA_TT = response.GF_MUA;
                    $scope.heo.HEO_GF_SL = response.GF_SL;
                    $scope.heo.HEO_GF_HEO = response.GF_CON;
                    $scope.heo.HEO_GF_THIT = response.GF_THIT;
                    $scope.heo.HEO_GF_NAI = response.GF_NAI;

                    $scope.heo.HEO_ANOTHER = response.O_KD;
                    $scope.heo.HEO_ANOTHER_MUA_TT = response.O_MUA;
                    $scope.heo.HEO_ANOTHER_SL = response.O_SL;
                    $scope.heo.HEO_ANOTHER_HEO = response.O_CON;
                    $scope.heo.HEO_ANOTHER_THIT = response.O_THIT;
                    $scope.heo.HEO_ANOTHER_NAI = response.O_NAI;

                }).error(function (err, status) {
                    //console.log("load dealers error " + err);
                });
        }
        else {
            /////// HEO
            //// ANCO
            $scope.heo.HEO_ANCO = 0;
            $scope.heo.HEO_ANCO_MUA_TT = 0;
            $scope.heo.HEO_ANCO_SL = 0;
            $scope.heo.HEO_ANCO_HEO = 0;
            $scope.heo.HEO_ANCO_THIT = 0;
            $scope.heo.HEO_ANCO_NAI = 0;
            //// CONCO
            $scope.heo.HEO_CONCO = 0;
            $scope.heo.HEO_CONCO_MUA_TT = 0;
            $scope.heo.HEO_CONCO_SL = 0;
            $scope.heo.HEO_CONCO_HEO = 0;
            $scope.heo.HEO_CONCO_THIT = 0;
            $scope.heo.HEO_CONCO_NAI = 0;
            //// CP
            $scope.heo.HEO_CP = 0;
            $scope.heo.HEO_CP_MUA_TT = 0;
            $scope.heo.HEO_CP_SL = 0;
            $scope.heo.HEO_CP_HEO = 0;
            $scope.heo.HEO_CP_THIT = 0;
            $scope.heo.HEO_CP_NAI = 0;
            //// CG
            $scope.heo.HEO_CG = 0;
            $scope.heo.HEO_CG_MUA_TT = 0;
            $scope.heo.HEO_CG_SL = 0;
            $scope.heo.HEO_CG_HEO = 0;
            $scope.heo.HEO_CG_THIT = 0;
            $scope.heo.HEO_CG_NAI = 0;
            //// GF
            $scope.heo.HEO_GF = 0;
            $scope.heo.HEO_GF_MUA_TT = 0;
            $scope.heo.HEO_GF_SL = 0;
            $scope.heo.HEO_GF_HEO = 0;
            $scope.heo.HEO_GF_THIT = 0;
            $scope.heo.HEO_GF_NAI = 0;
            //// ANOTHER
            $scope.heo.HEO_ANOTHER = 0;
            $scope.heo.HEO_ANOTHER_MUA_TT = 0;
            $scope.heo.HEO_ANOTHER_SL = 0;
            $scope.heo.HEO_ANOTHER_HEO = 0;
            $scope.heo.HEO_ANOTHER_THIT = 0;
            $scope.heo.HEO_ANOTHER_NAI = 0;
        }
        //console.log("HEO VALUE");
        //console.log($scope.heo);
        //$scope.$apply();
    }

    $scope.updateHeo = function () {
        if ($scope.update) {

            $ionicLoading.show({ template: 'Đang lưu...' });

            var param = {
                token: AuthService.token(),
                surveyid: Dealers.survey().SurveyId,
                ac_kd: $scope.heo.HEO_ANCO,
                ac_mua: $scope.heo.HEO_ANCO_MUA_TT,
                ac_sl: $scope.heo.HEO_ANCO_SL,
                ac_con: $scope.heo.HEO_ANCO_HEO,
                ac_thit: $scope.heo.HEO_ANCO_THIT,
                ac_nai: $scope.heo.HEO_ANCO_NAI,

                cc_kd: $scope.heo.HEO_CONCO,
                cc_mua: $scope.heo.HEO_CONCO_MUA_TT,
                cc_sl: $scope.heo.HEO_CONCO_SL,
                cc_con: $scope.heo.HEO_CONCO_HEO,
                cc_thit: $scope.heo.HEO_CONCO_THIT,
                cc_nai: $scope.heo.HEO_CONCO_NAI,

                cp_kd: $scope.heo.HEO_CP,
                cp_mua: $scope.heo.HEO_CP_MUA_TT,
                cp_sl: $scope.heo.HEO_CP_SL,
                cp_con: $scope.heo.HEO_CP_HEO,
                cp_thit: $scope.heo.HEO_CP_THIT,
                cp_nai: $scope.heo.HEO_CP_NAI,

                cg_kd: $scope.heo.HEO_CG,
                cg_mua: $scope.heo.HEO_CG_MUA_TT,
                cg_sl: $scope.heo.HEO_CG_SL,
                cg_con: $scope.heo.HEO_CG_HEO,
                cg_thit: $scope.heo.HEO_CG_THIT,
                cg_nai: $scope.heo.HEO_CG_NAI,

                gf_kd: $scope.heo.HEO_GF,
                gf_mua: $scope.heo.HEO_GF_MUA_TT,
                gf_sl: $scope.heo.HEO_GF_SL,
                gf_con: $scope.heo.HEO_GF_HEO,
                gf_thit: $scope.heo.HEO_GF_THIT,
                gf_nai: $scope.heo.HEO_GF_NAI,

                o_kd: $scope.heo.HEO_ANOTHER,
                o_mua: $scope.heo.HEO_ANOTHER_MUA_TT,
                o_sl: $scope.heo.HEO_ANOTHER_SL,
                o_con: $scope.heo.HEO_ANOTHER_HEO,
                o_thit: $scope.heo.HEO_ANOTHER_THIT,
                o_nai: $scope.heo.HEO_ANOTHER_NAI
            }
            if (Dealers.survey().HEO_ID != null) {
                param.heoid = Dealers.survey().HEO_ID;
            }
            //console.log("param");
            //console.log(param);

            $http.post($scope.serviceBase + '/survey/create/heo', param)
                .success(function (response) {
                    $ionicLoading.hide();
                    $ionicLoading.show({ template: 'Dữ liệu đã được lưu trên hệ thống!', noBackdrop: true, duration: 2000 });
                    //console.log("AC_PC: " + $scope.user.AC_PC);

                    $scope.update = false;
                    if ($scope.user.AC_PC == 0)
                        $state.go('tabs.dealer-detail-sales-giacam', {});
                    else
                        $state.go('tabs.dealer-detail-sales-ga', {});

                }).error(function (err, status) {
                    $ionicLoading.hide();
                    $ionicLoading.show({ template: 'Lỗi trong quá trình xử lý!\n' + err.toString(), noBackdrop: true, duration: 2000 });
                });
        }
        else {
            //console.log("AC_PC: " + $scope.user.AC_PC);

            $scope.update = false;
            if ($scope.user.AC_PC == 0)
                $state.go('tabs.dealer-detail-sales-giacam', {});
            else
                $state.go('tabs.dealer-detail-sales-ga', {});
        }

    }
})