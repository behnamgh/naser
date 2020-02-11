import { sign, verify } from "jsonwebtoken";
import { User } from "../models/User";

const tokenHelper = {
    generateToken: (user: User, extraData: any = null) => sign(
        {
            ...user,
            tokenCreationDate: new Date()
        },
        "XeTDv&%j3qC_jKM"
    ),
    verifyToken: (token: string) => verify(token, "XeTDv&%j3qC_jKM"),
    secretOrPrivateKey: "XeTDv&%j3qC_jKM"
};

export default tokenHelper;
