import angular from 'angular';

export class AuthService {
    authenticate(username: string, password: string): boolean {
        return username === 'admin' && password === 'password';
    }
}
angular.module('ECommApp').service('AuthService', AuthService);