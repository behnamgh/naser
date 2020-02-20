import * as Passport from "passport";
import * as Express from "express";

export default abstract class AuthHelper {
    public static session: any = {
        userId: (null as number)
    };

    public static Authorization(allowedRoles?: string[]) {
        return (request: Express.Request, response: Express.Response, next: Express.NextFunction) => {
            Passport
                .authenticate("verify", { session: false }, (status, data: any, error) => {

                    if (data && (allowedRoles == null || allowedRoles.find(element => element === data.user.role.roleId))) {
                        this.session.userId = data.user.userId;
                        this.session.extraData = data.extraData;
                        this.session.roleId = data.user.role.roleId;

                        return next()
                    } else {
                        response.status(400).json({ operationResult: "operationResult" })
                    }
                })(request, response, next);
        };
    }
}
