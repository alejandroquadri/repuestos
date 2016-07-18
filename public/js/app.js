angular.module('RepuestosApp',['ui.router','firebase'])

.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/repuestos')

  $stateProvider
  .state('repuestos',{
    url:'/repuestos',
    templateUrl:'templates/repuestos.html',
    resolve:{
      base: function ($firebaseArray) {
        return $firebaseArray(firebase.database().ref().child('repuestos'))
      }
    },
    controller: 'Repuestos',
    controllerAs:'ctlrRep'
  })
});
