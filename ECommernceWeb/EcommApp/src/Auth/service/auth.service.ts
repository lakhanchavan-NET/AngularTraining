angular.module('ECommApp').service('AuthService', function() {
    return {
        authenticate: function(username: string, password: string): boolean {
            return username === 'admin' && password === 'password';
        }
    };
});
