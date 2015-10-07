angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

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
})

.controller('MedCtrl', function($scope) {
  $scope.medicines = [
    { title: 'Alaxan Fr', id: 1 },
    { title: 'Ascorbic Acid', id: 2 },
    { title: 'Bisolvan', id: 3 },
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



.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})



.controller('PlaylistCtrl', function($scope, $stateParams) {
});

