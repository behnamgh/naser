import React from "react";
import { AuthProvider } from "./state";

export default (props: any) => {
    return (
        <AuthProvider>
            {props.children}
        </AuthProvider>
    );
};
