angular.module('starter.controllers', [])


.controller('AppCtrl', function($scope, $ionicModal) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/medmodal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.open = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  // $scope.doLogin = function() {
  //   console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
  //   $timeout(function() {
  //     $scope.closeLogin();
  //   }, 1000);
  // };
})

.controller('LoginCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

  //scope.description = function(){

  //}
})

.controller('MedCtrl', function($scope) {
  $scope.medicines = [
    { title: 'Alaxan Fr', description: 'this is alazan', id: 1 },
    { title: 'Ascorbic Acid', description: 'this is whatever', id: 2 },
    { title: 'Bisolvan', description: 'this is amazing', id: 3 },
    { title: 'Biogesic', id: 4 },
    { title: 'Buscopan', id: 5 },
    { title: 'Centrum', id: 6 },
    { title: 'Cherrifer', id: 7  },
    { title: 'Clusivol', id: 8 },
    { title: 'Constant', id: 9 },
    { title: 'Decolgen', id: 10 },
    { title: 'Dolfenal', id: 11 },
    { title: 'Dimecron', id: 12 },
    { title: 'Ferlin', id: 13 },
    { title: 'Growee', id: 14 },
    { title: 'Loperamide', id: 15 },
    { title: 'Neozep', id: 16 },
    { title: 'Pharmaton', id: 17 },
    { title: 'Propan TLC', id: 18 },
    { title: 'Stresstabs', id: 19 },
    { title: 'Tuseran', id: 20}
  ];
})

.controller('PostCtrl', function($scope, $http, $state) {
    $scope.posts = [];
  $scope.formData = {};
  
  $http.get('http://localhost/codeigniter/Posts').
    then(function(response) {
      console.log(response);
      $scope.posts = response.data;
    }, function(response) {
      console.log(response);
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
  
  $scope.addPost = function(){
    if($scope.formData.id){
      $scope.formData = {};
    }
    else{
      $http.post('http://localhost/codeigniter/Posts', $scope.formData).
        then(function(response) {
          console.log(response);
          $scope.formData.id = response.data.id;
          $scope.posts.push($scope.formData);
          $scope.formData = {};
        }, function(response) {
          console.log(response);
        });
      
    }
  }


  $scope.delete = function(idx, id){
    console.log(idx);
    //delete($scope.todos[idx])
    $http.delete('http://localhost/codeigniter/Posts/'+id).
        then(function(response) {
          console.log(response);
          $scope.posts.splice(idx,1);
        }, function(response) {
          console.log(response);
        });
  }
  $scope.edit = function(idx){
    $scope.formData = $scope.postcontent[idx];
  }

  $scope.editPosts = function(){
    console.log($scope.formData);
    if($scope.formData.id){
      console.log($scope.formData);
      $scope.formData = {};
    }
    else{
      $http.put('http://localhost/codeigniter/Posts', $scope.formData);
      console.log($scope.formData);
      $scope.formData = {};
      $state.go('app.profile');
    }
  }


})

.controller('MedsCtrl', function($scope, $stateParams) {
})


.controller('MapCtrl', function($scope, $ionicLoading, $compile) {
      
function initialize() {

        var locations = [
      ['Rose Pharmacy', 8.486287, 124.655836, 4],
      ['Rose Pharmacy 1', 8.484292, 124.656094, 5],
      ['Rose Pharmacy 2', 8.484929, 124.650601, 3],
      ['Rose Pharmacy 3', 8.486669, 124.650043, 2],
      ['Rose Pharmacy 4', 8.477671, 124.649528, 1]
    ];

      //  var myLatlng = new google.maps.LatLng(43.07493,-89.381388);
        
        // var mapOptions = {
        // //  center: myLatlng,
        //   zoom: 16,
        //   mapTypeId: google.maps.MapTypeId.ROADMAP
        // };
        var map = new google.maps.Map(document.getElementById("map"), {
             zoom: 16,
      center: new google.maps.LatLng(8.486839, 124.655879),
      mapTypeId: google.maps.MapTypeId.ROADMAP

        });
          
        
        //Marker + infowindow + angularjs compiled ng-click
        var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
        var compiled = $compile(contentString)($scope);

        var infowindow = new google.maps.InfoWindow();

        var marker, i;

         for (i = 0; i < locations.length; i++) { 
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[i][1], locations[i][2]),
          map: map,
         // title: 'Uluru (Ayers Rock)'
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map,marker);
        }
        })(marker, i));
        }

        $scope.map = map;
      }
      google.maps.event.addDomListener(window, 'load', initialize);
      
      $scope.centerOnMe = function() {
        if(!$scope.map) {
          return;
        }

        $scope.loading = $ionicLoading.show({
          content: 'Getting current location...',
          showBackdrop: false
        });

        navigator.geolocation.getCurrentPosition(function(pos) {
          $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          $scope.loading.hide();
        }, function(error) {
          alert('Unable to get location: ' + error.message);
        });
      };
      
      $scope.clickTest = function() {
        alert('Example of infowindow with ng-click')
      };
      

    });



