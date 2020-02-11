import { IUserVariable, IUserActions, UserActionType } from "./type";

export default (
    state: IUserVariable,
    dispatch: any
): IUserActions => ({
    setRole: (role: string = ""): void => {
        if (role !== state.role) {
            dispatch({
                type: UserActionType.SET_ROLE,
                role
            });
        }
    },
    setSignedIn: (user: any): void => {
        dispatch({
            type: UserActionType.SIGN_IN,
            user
        });
    },
    setSignedOut: (): void => {
        localStorage.removeItem("token");
        dispatch({
            type: UserActionType.SIGN_OUT,
        });
    }
});