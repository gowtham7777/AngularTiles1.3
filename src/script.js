

angular.module('app', ['ui.router']);

angular.module('app').controller('mainCtrl', function($scope) {

  $scope.devices = [
{
  promoCode:true,
  deviceManufacturer: 'Windows 10',
  manufacturer:'Windows',
  device:'Nokia - Lumia 1520 4G Cell Phone (Unlocked) - Black',
  inventoryStatus:'In Stock',
  fromDate:'12/12/1979',
  toDate:'12/12/1989',
  jumpEligiblity:true,
  fullRetailPrice:499.88,
  scorePrice:399.22,
  PromoPrice:0.99
},

{
  promoCode:false,
  deviceManufacturer: 'ALCATEL ONETOUCH Evolve 2',
  manufacturer:'ALCATEL',
  device:'ONETOUCH Evolve 2',
  inventoryStatus:'Out of Stock',
  fromDate:'09/12/2016',
  toDate:'12/12/2016',
  jumpEligiblity:false,
  fullRetailPrice:49.88,
  scorePrice:399.22,
  PromoPrice:0.99
},
{
  promoCode:true,
  deviceManufacturer: 'Apple Iphone 5c - Blue - 16GB',
  manufacturer:'Apple',
  device:'Iphone 5c - Blue - 16GB',
  inventoryStatus:'BackOrdered',
  fromDate:'12/12/1979',
  toDate:'12/12/1989',
  jumpEligiblity:true,
  fullRetailPrice:499.88,
  scorePrice:399.22,
  PromoPrice:0.99
},
{
  promoCode:false,
  deviceManufacturer: 'Apple Iphone 6 Plus - Silver - 16GB',
  manufacturer:'Apple',
  device:'Iphone 6 Plus - Silver - 16GB',
  inventoryStatus:'PreOrder',
  fromDate:'12/12/1979',
  toDate:'12/12/1989',
  jumpEligiblity:true,
  fullRetailPrice:499.88,
  scorePrice:399.22,
  PromoPrice:0.99
},
{
  promoCode:true,
  deviceManufacturer: 'Apple Iphone 6 - Space Gray - 16GB',
  manufacturer:'Apple',
  device:'Iphone 6 Plus - Silver - 16GB',
  inventoryStatus:'Out of Stock',
  fromDate:'12/12/1979',
  toDate:'12/12/1989',
  jumpEligiblity:true,
  fullRetailPrice:499.88,
  scorePrice:399.22,
  PromoPrice:0.99
},
{
  promoCode:false,
  deviceManufacturer: 'Apple Iphone 6S - Pink - 128GB',
  manufacturer:'Apple',
  device:'Iphone 6 Plus - Pink - 128GB',
  inventoryStatus:'In Stock',
  fromDate:'12/12/1979',
  toDate:'12/12/1989',
  jumpEligiblity:true,
  fullRetailPrice:499.88,
  scorePrice:399.22,
  PromoPrice:0.99
},
{
  promoCode:false,
  deviceManufacturer: 'Windows 10',
  manufacturer:'Windows',
  device:'Nokia - Lumia 1520 4G Cell',
  inventoryStatus:'In Stock',
  fromDate:'12/12/1979',
  toDate:'12/12/1989',
  jumpEligiblity:true,
  fullRetailPrice:499.88,
  scorePrice:399.22,
  PromoPrice:0.99
},

];

  $scope.users = [
    {
    showToolTip:false,
    name: 'City State',
    address: {
      street: 'PO Box 1234',
      city: 'Mos Eisley',
      planet: 'Earth'
    },
    friends: [
      'Troy',
      'Bahubali',
      'Mind Readers'
    ],
    level: 5},
    {
      showToolTip:false,
      name: 'First Last',
      address: {
        street: '7777 Ezperanza',
        city: 'Irvine',
        planet: 'Mercury'
      },
      friends: [
        'Mother',
        'Father',
        'Brother'
      ],
      level: 1
    },

    {
      showToolTip:false,
      name: 'First Last',
      address: {
        street: '7777 Ezperanza',
        city: 'Irvine',
        planet: 'Mercury'
      },
      friends: [
        'Mother',
        'Father',
        'Brother'
      ]
    },

    {
      showToolTip:false,
      name: 'First Last',
      address: {
        street: '7777 Ezperanza',
        city: 'Irvine',
        planet: 'Mercury'
      },
      friends: [
        'Mother',
        'Father',
        'Brother'
      ]
    },

    {
      showToolTip:false,
      name: 'First Last',
      address: {
        street: '7788 Ezperanza',
        city: 'Irvine',
        planet: 'Mercury'
      },
      friends: [
        'Mother',
        'Father',
        'Brother'
      ]
    },

    {
      showToolTip:false,
      name: 'First Last',
      address: {
        street: '7777 Ezperanza',
        city: 'Irvine',
        planet: 'Mercury'
      },
      friends: [
        'Mother',
        'Father',
        'Brother'
      ]
    }



  ];

 // $scope.breadCrumbList = ["Customer Information", "Device & Rate Plan", "Features", "Service Setup", "Checkout"];
  $scope.breadCrumbList = ["Select Campaign settings", "Create an ad group", "Create an ad"];



});

angular.module('app').directive('userInfoCard', function() {
  return {
    templateUrl: '/src/ui-comps/userInfoCard.html',
    restrict: "E",
    scope: {
      user: '=',
      initialCollapsed: '@collapsed'
    },

    controller: function($scope) {
      $scope.collapsed = ($scope.initialCollapsed === 'true');
      $scope.knightMe = function(user) {
        user.rank = "knight";
      }
      $scope.collapse = function(tile) {
      //  $scope.collapsed = !$scope.collapsed;
        this.onTileClick(tile);
      }

      $scope.removeFriend = function(friend) {
        var idx = $scope.user.friends.indexOf(friend);
        if (idx > -1) {
          $scope.user.friends.splice(idx, 1);
        }
      }
      $scope.changeState = function() {
        $scope.user.level = ++$scope.user.level % 5;
      };

      $scope.resetShowToolTip = function resetShowToolTip(tile)
      {
        tile.showToolTip = false;
      }

      $scope.onTileClick = function (tile)
      {
        angular.forEach($scope.users, function(value, key) {
          this.push(key + ': ' + value);
        }, log);
        $scope.users.forEach(resetShowToolTip);
        tile.user.showToolTip = true;
      };
    }
  }
});

angular.module('app').directive('changeColor', function() {
  return {
    restrict: 'A',
    link: function(scope, el, attr) {
      var params = attr['changeColor'].split(' ');
      var newVal = params[0];
      scope.$watch(newVal, function(newVal) {
        el.css('background-color', params[newVal]);
      });

    },
  }

})

angular.module('app').directive('removeFriend', function() {
  return {
    restrict: 'E',
    templateUrl: '/src/ui-comps/removeFriend.html',
    scope: {
      notifyParent: '&method'
    },
    controller: function($scope) {
      $scope.removing = false;
      $scope.startRemove = function() {
        $scope.removing = true;
      }
      $scope.cancelRemove = function() {
        $scope.removing = false;
      }
      $scope.confirmRemove = function() {
        $scope.notifyParent();
      }

    }
  }
})

angular.module('app').directive('address', function() {
  return {
    restrict: 'E',
    scope: true,
    templateUrl: '/src/ui-comps/address.html',
    controller: function($scope) {
      $scope.collapsed = false;
      $scope.collapseAddress = function() {
        $scope.collapsed = true;
      }
      $scope.expandAddress = function() {
        $scope.collapsed = false;
      }
    }
  }
})


angular.module('app').directive('promoTile', function() {
  return {
    restrict: 'E',
    scope: {
      device: '='
    },
    templateUrl: '/src/ui-comps/promoTile.html',
  }
})

//$parsers is an array (meaning, standard javascript type, not specific to Angular). unshift is a method
// native to the Javascript Array prototype, thus the comment in this answer of "Array.unshift() put it in
// the beginning of the list..."
angular.module('app').directive('emailAddressMatch', function () {
      return {
        require: 'ngModel',
        restrict: 'A',
        link: function (scope, elem, attrs, ctrl) {
          var emailAddressElement = angular.element(document.querySelector('#'+attrs['emailAddressMatch']));

          var validate = function (value) {
            if(value != null && value.length == 0) {
              ctrl.$setValidity('emailAddressMatch', true);
              return value;
            }

            if(emailAddressElement != null) {
              var emailAddress = emailAddressElement.val();
              var matchResult = (value.toLowerCase() === emailAddress.toLowerCase());
              ctrl.$setValidity('emailAddressMatch', matchResult);
            }
            return value;
          };

          ctrl.$parsers.unshift(validate);
          ctrl.$formatters.push(validate);
          attrs.$observe('emailAddressMatch', function () {
            return validate(ctrl.$viewValue);
          });

         // var emailAddressElement = angular.element(document.querySelector('#'+attrs['emailAddressMatch']));
          emailAddressElement.on('change', function() {
            validate(ctrl.$viewValue);
          });

        }
      }
    })

angular.module('app').directive('maskForDigits', function () {
      return {
        restrict: 'A',
        require:'ngModel',
        link: function (scope, elm, attr, ctrl) {
          ctrl.$parsers.unshift(function(viewValue) {
            elm.text.replace(/[^0-9]/g, "");
            return viewValue.replace(/[^0-9]/g, "");
          });

          scope.$watch(newVal, function(newVal) {
            parseInt(newVal).replace(/[^0-9]/g, "");
            parseInt(elm.text).replace(/[^0-9]/g, "");
            console.log('scope is ' + ele.text);
          });
          //elm.on('keypress', onlyDigits);
          //elm.on('keydown', onlyDigits);
        }
      };
    })

angular.module('app').directive('evenNumber', function(){
  return{
    require:'ngModel',
    link: function(scope, elem, attrs, ctrl){
      ctrl.$parsers.unshift(checkForEven);
      ctrl.$formatters.unshift(checkForEven);

      function checkForEven(viewValue){
        if (parseInt(viewValue)%2 === 0) {
          ctrl.$setValidity('evenNumber',true);
        }
        else{
          ctrl.$setValidity('evenNumber', false);
        }
        return parseInt(viewValue) -1;
      }
    }
  };

});

angular.module('app').config(function($stateProvider, $urlRouterProvider) {

 //  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/accountReview');

  $stateProvider
      .state('accountReview', {
        url: '/accountReview',
        templateUrl: '../src/ui-tabs/accountReview.html'
      })

      .state('applications', {
        url: '/applications',
        templateUrl: '/src/ui-tabs/applicationHome.html'
      })

      .state('manageAccount', {
        url: '/manageAccount',
        templateUrl: '/src/ui-tabs/manageAccount.html'
      })
      .state('usageBilling', {
        url: '/usageBilling',
        templateUrl: '/src/ui-tabs/usageBilling.html'
      })
      .state('deviceSupport', {
        url: '/deviceSupport',
        templateUrl: '/src/ui-tabs/deviceSupport.html'
      })
      .state('order', {
        url: '/order',
        templateUrl: '/src/ui-tabs/order.html'
      })

      .state('order.1', {
        url: '/order1',
        template: 'Orders1'
      })

      .state('offers', {
        url: '/offers',
        templateUrl: '/src/ui-tabs/offers.html'
      })
      .state('offers.list', {
        url: '/list',
        templateUrl: '/src/ui-comps/listItems.html',
        controller: function($scope) {
          $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
        }
      })
      .state('offers.paragraph', {
        url: '/paragraph',
        template: 'I could sure use a drink right now.'
      })
      
      .state('memos', {
        url: '/memos',
        templateUrl: '/src/ui-tabs/memos.html'
      })

      .state('login', {
        url: '/login',
        templateUrl: '/src/ui-comps/login.html',

      })
      .state('register', {
        url: '/register',
        templateUrl: '/src/ui-comps/register.html',

      })
      .state('success', {
        url: '/success',
        templateUrl: '/src/ui-comps/success.html',

      });
});

angular.module('app').run([
  '$rootScope',
  function($rootScope) {
    // see what's going on when the route tries to change
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
      // next is an object that is the route that we are starting to go to
      // current is an object that is the route where we are currently
      var currentPath = current.originalPath;
      var nextPath = next.originalPath;

      console.log('Starting to leave %s to go to %s', currentPath, nextPath);
    });
  }
]);

angular.module('app').controller('registrationController', ['$scope', 'Authentication', function($scope, Authentication) {

        $scope.login = function() {
          Authentication.login($scope.user);
        }; //login

        $scope.logout = function() {
          Authentication.logout();
        }; //logout

        $scope.register = function() {
          Authentication.register($scope.user);
        }; // register

      }]); // Controller


https://firebase.google.com/docs/admin/setup
angular.module('app').controller('SuccessController', ['$scope', function($scope) {
  $scope.message = "Success!!!";
}]);

angular.module('app').factory('Authentication', ['$rootScope', '$firebaseAuth', '$firebaseObject', '$location', 'FIREBASE_URL', function($rootScope, $firebaseAuth, $firebaseObject, $location, FIREBASE_URL) {
        var ref = new Firebase(FIREBASE_URL);
        var auth = $firebaseAuth(ref);

        auth.$onAuth(function(authUser) {
          if (authUser) {
            var userRef = new Firebase(FIREBASE_URL + 'users/' + authUser.uid );
            var userObj = $firebaseObject(userRef);
            $rootScope.currentUser = userObj;
          } else {
            $rootScope.currentUser = '';
          }
        });


        return {
          login: function(user) {
            auth.$authWithPassword({
              email: user.email,
              password: user.password
            }).then(function(regUser) {
              $location.path('/success');
            }).catch(function(error) {
              $rootScope.message = error.message;
            });
          }, //login

          logout: function() {
            return auth.$unauth();
          }, //logout

          requireAuth: function() {
            return auth.$requireAuth();
          }, //require Authentication

          register: function(user) {
            auth.$createUser({
              email: user.email,
              password: user.password
            }).then(function(regUser) {

              var regRef = new Firebase(FIREBASE_URL + 'users')
                  .child(regUser.uid).set({
                    date: Firebase.ServerValue.TIMESTAMP,
                    regUser: regUser.uid,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email:  user.email
                  }); //user info

              $rootScope.message = "Hi " + user.firstname +
                  ", Thanks for registering";
            }).catch(function(error) {
              $rootScope.message = error.message;
            }); // //createUser
          } // register
        };

      }]); //factory


 angular.module('app').constant('FIREBASE_URL', 'https://angreg77.firebaseIO.com/');




angular.module('app').directive("spaBreadCrumb", function () {
      return {
        restrict: "EA",
        scope: {
          breadcrumbs: '=',
          selectedcrumbposition: '='
        },
        template: '<div class="breadcrumbs-v1">'
        + '    <ul>'
        + '        <li ng-repeat="crumb in breadcrumbs" ng-class="getCssClass({{$index+1}})"><a href="#/{{$index+1}}">{{crumb}}</a></li>'
        + '    </ul>'
        + '</div>',
        controller: function ($scope) {
          $scope.getCssClass = function (crumbindex) {
            return (crumbindex < $scope.selectedcrumbposition ? 'visited' : (crumbindex == $scope.selectedcrumbposition ? 'current' : ''));
          };
        }

      };
    })
