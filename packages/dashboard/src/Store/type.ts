export interface IUserVariable {
    role?: string;
    token?: string;
    user?: any;
}

export interface IUserActions {
    setRole: (role: string) => void;
    setSignedIn: (user: any) => void;
    setSignedOut: () => void;
}

export interface IUser extends IUserVariable, IUserActions { }

export enum UserActionType {
    SET_ROLE,
    SIGN_IN,
    SIGN_OUT
}