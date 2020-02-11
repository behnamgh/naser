import React, { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";
import actions from "./action";
import { IUserActions, IUserVariable } from "./type";

export const AuthContext = createContext<IUserVariable | IUserActions | null>(null);

export const AuthProvider = (props: { children: React.ReactElement }) => {
    const initialState: IUserVariable = {
        token: localStorage.getItem("token") || undefined
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AuthContext.Provider
            value={Object.assign({}, state, actions(state, dispatch))}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export const useAuth: any = () => useContext(AuthContext);