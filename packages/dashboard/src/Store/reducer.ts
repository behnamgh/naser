import { IUserVariable, UserActionType } from "./type";

export default (
    state: IUserVariable,
    action: {
        type: UserActionType;
        [key: string]: any;
    }
): IUserVariable => {
    const { type, ...payload } = action as any;

    switch (type) {
        case UserActionType.SET_ROLE:
            const { role } = payload;
            return Object.assign({}, state, { role });
        case UserActionType.SIGN_IN:
            const { user } = payload;
            return Object.assign({}, state, { user });
        case UserActionType.SIGN_OUT:
            return Object.assign({}, state, {
                role: "",
                user: null,
            });
        default:
            return state;
    }
};