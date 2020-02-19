export default class Auth {
    public static storageTokenKey = "token";

    public static signIn = (token: string) => {
        localStorage.setItem(Auth.storageTokenKey, token);
    }

    public static getToken = () => {
        return localStorage.getItem(Auth.storageTokenKey);
    }


    public static isLogged = () => {
        return !!localStorage.getItem(Auth.storageTokenKey);
    }

    public static signOut = () => {
        localStorage.removeItem(Auth.storageTokenKey);
    }
}