import { EndpointInfo, Middleware, HeaderParams, Required, Next } from "@tsed/common";
import { NotFound, Unauthorized } from "ts-httpexceptions";
import { UsersService } from "../services/user-service";
import tokenHelper from "../utils/token-helper";

@Middleware()
export class IsAuthenticated {
    constructor(private usersService: UsersService) {
    }

    async use(@Required() @HeaderParams("token") token: string,
        @EndpointInfo() endpoint: EndpointInfo
    ) {
        const options = endpoint.get(IsAuthenticated) || {};
        if (!token) {
            throw new NotFound("token not found");
        }
        try {
            const decodedToken = tokenHelper.verifyToken(token);
            if (options && options.role && (!decodedToken.role || decodedToken.role !== options.role)) {
                throw new Unauthorized(options.role);
            }
            console.log("hereee.e.e.e.e..e.e.e.e.e.e", decodedToken);

        } catch (error) {
            console.log(["error", error]);
            throw new NotFound(error.message);

        }
    }
}
