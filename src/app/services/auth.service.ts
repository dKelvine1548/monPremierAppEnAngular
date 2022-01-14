
export class AuthService{
    isAuth = false;

    signIn(){
        return setTimeout(
            () => {
                this.isAuth = true;
            }
        );  
    }

    signOut(){
        this.isAuth = false;
    }
}