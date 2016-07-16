angular.module('RepuestosApp',['ui.router','firebase'])

.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/repuestos')

  $stateProvider
  .state('repuestos',{
    url:'/repuestos',
    templateUrl:'templates/repuestos.html',
    resolve:{
      // base: function ($firebaseArray) {
      //   var ref = firebase.database().ref()
      //   var obj = $firebaseArray(ref);
      //   return obj.$loaded().then(function(){
      //     console.log('base cargada',obj);
      //   })
      // }
      base: function ($firebaseArray) {
        return $firebaseArray(firebase.database().ref().child('repuestos'))
        // .$loaded().then(function(obj){
        //   console.log('base cargada',obj);
        // })
      }
    },
    controller: 'Repuestos',
    controllerAs:'ctlrRep'
  })
});
