export class AuthController {
    static $inject = ['$scope'];

    isAuthenticated: boolean;
    user: { email: string, password: string };

    constructor(private $scope: any) {
        this.isAuthenticated = false;
        this.user = { email: '', password: '' };
    }

    login() {
        if (this.user.email === 'admin@example.com' && this.user.password === 'password') {
            this.isAuthenticated = true;
            alert('Login Successful');
        } else {
            alert('Invalid Credentials');
        }
    }

    logout() {
        this.isAuthenticated = false;
        alert('Logged out');
    }
}
