import { sign, verify } from "jsonwebtoken";
import { User } from "../models/User";

const tokenHelper = {
    generateToken: (user: any) => sign(
        {
            ...user,
            tokenCreationDate: new Date()
        },
        process.env.SECRET || "XeTDv&%j3qC_jKM"
    ),
    verifyToken: (token: string) => verify(token, process.env.SECRET || "XeTDv&%j3qC_jKM"),
    secretOrPrivateKey: process.env.SECRET || "XeTDv&%j3qC_jKM"
};

export default tokenHelper;
