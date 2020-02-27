export default class AuthHelper {
    public static storageTokenKey = "token";

    public static signIn = (token: string) => {
        localStorage.setItem(AuthHelper.storageTokenKey, token);
    }

    public static getToken = () => {
        return localStorage.getItem(AuthHelper.storageTokenKey);
    }


    public static isLogged = () => {
        return !!localStorage.getItem(AuthHelper.storageTokenKey);
    }

    public static signOut = () => {
        localStorage.removeItem(AuthHelper.storageTokenKey);
    }
}