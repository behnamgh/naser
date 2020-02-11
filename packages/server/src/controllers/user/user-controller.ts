import { BodyParams, Controller, Get, Post, HeaderParams, Required, Put, Authenticated, Req, Res, UseBefore, UseAfter, UseAuth, Next } from "@tsed/common";
import { User } from "../../models/User";
import { UsersService } from "../../services/user/user-service";
import { compareSync, hashSync } from "bcryptjs";
import * as Passport from "passport";
import * as Express from "express";
import AuthHelper from "../../utils/auth-helper";
import { NotFound } from "ts-httpexceptions";
import { IsAuthenticated } from "../../middlewares/auth-middleware";
import tokenHelper from "../../utils/token-helper";

@Controller("/user")
export class UserController {
    constructor(
        private userService: UsersService
    ) {
    }
    @Get("/verify")
    @UseBefore(IsAuthenticated)
    async get(@HeaderParams("token") token: string) {
        return tokenHelper.verifyToken(token);
    }
    @Get("/admin")
    @UseAuth(IsAuthenticated, { role: "admin" })
    async get2(@HeaderParams("token") token: string) {
        return tokenHelper.verifyToken(token);
    }

    @Post("/login")
    public async login(
        @Req() request: Express.Request,
        @Res() response: Express.Response,
        @Next() next: Express.NextFunction,
        @Required() @BodyParams("username") username: string,
        @BodyParams("password") password: string) {

        try {
            const dbUser = await this.userService.getUserById(username);
            if (dbUser && password === dbUser.password) {
                return (request: Express.Request, response: Express.Response, next: Express.NextFunction) => {
                    Passport
                        .authenticate("login", (err, user: User) => {
                            if (err) return next(err);
                            if (!user) {
                                return { operationResult: "UNAUTHORIZED" }
                            }
                            response.json(user);
                        })(request, response, next);
                };
            } else {
                throw new NotFound("UNAUTHORIZED");
            }
        } catch (error) {
            console.error(error);
            throw new NotFound("UNAUTHORIZED");
        }
    }
}
