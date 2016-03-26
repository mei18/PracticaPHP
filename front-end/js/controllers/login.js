angular.module('practicaPHP01.controllers')
    /**
     * Inicia la sesión del usuario en el sistema.
     */
    .controller('LoginController', ['$scope', 'UserService', '$location',
        function ($scope, UserService, $location) {
            $scope.init = function() {
                console.debug('Login');
               sessionSuccess = UserService.isLoggedIn(); //para ver si hay un user.

               if (sessionSuccess.success) {
                    $location.path('#/home');
                    console.debug("active session");
               } else {
                    console.debug("sorry, no active session");
               }
                /**
                 * TODO: Implementar
                 * Pasos
                 * - Verifique si el usuario tiene una sesión activa.
                 * - Maneje los siguientes escenarios:
                 *  - El usuario tiene una sesión activa, envie el usuario a la ruta de `home`.
                 *  - No tiene una sesión activa, permita que la pagina de inicio de sesión funcione normalmente.
                 * - En el segundo caso, permítale al usuario iniciar una sesión en el sistema.
                 * - Agregue las validaciones necesarias: contenido vacio, correo en formato de correo.
                 * - Provea mensajes de error descriptivos.
                 */
            };

            $scope.logIn = function () { 
                var email = $scope.user.email;
                var password = $scope.user.password;
                logInResult = UserService.login(email,password);
                console.debug(logInResult);
            };

            $scope.init();
        }]);
