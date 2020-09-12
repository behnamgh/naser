import { BodyParams, Controller, Get, Post, HeaderParams, Required, Put, Authenticated, Req, Res, UseBefore, UseAfter, UseAuth, Next, QueryParams } from "@tsed/common";
import { User } from "../models/User";
import { UsersService } from "../services/user-service";
// import { compareSync, hashSync } from "bcryptjs";
import * as Passport from "passport";
import * as Express from "express";
// import AuthHelper from "../../utils/auth-helper";
import { NotFound } from "ts-httpexceptions";
import { IsAuthenticated } from "../middlewares/auth-middleware";
import tokenHelper from "../utils/token-helper";

@Controller("/user")
export class UserController {
    constructor(
        private userService: UsersService
    ) {
    }
    @Get("/user")
    @UseBefore(IsAuthenticated)
    async get(@HeaderParams("token") token: string) {
        return tokenHelper.verifyToken(token);
    }
    @Get("/admin")
    @UseAuth(IsAuthenticated, { role: "admin" })
    async get2(@HeaderParams("token") token: string) {
        return tokenHelper.verifyToken(token);
    }

    @Post("/addSubscriber")
    async addSubscriber(@BodyParams("email") email: string) {
        if (!email) return { error: true, msg: "username is required!" }
        return this.userService.save({ username: email, role: "subscriber", createdAt: new Date() });
    }
    @Get("/readSubscriber")
    async readSubscriber(
        @QueryParams("page") page: number,
        @QueryParams("pageSize") pageSize: number,
    ) {
        return this.userService.readSubscriber(page, pageSize);
    }

    @Post("/addUser")
    @UseAuth(IsAuthenticated, { role: "admin" })
    async addUser(@HeaderParams("token") token: string) {
        return this.userService.save({ username: "user", password: "1234", role: "user" });
    }

    @Post("/login")
    public async login(
        @Req() request: Express.Request,
        @Res() response: Express.Response,
        @Next() next: Express.NextFunction,
        @Required() @BodyParams("username") username: string,
        @BodyParams("password") password: string) {

        try {
            const dbUser = await this.userService.findByUsername(username);
            if (dbUser && dbUser.password && password === dbUser.password) {
                return (request: Express.Request, response: Express.Response, next: Express.NextFunction) => {
                    Passport
                        .authenticate("login", (err, user: User) => {
                            if (err) return next(err);
                            if (!user) {
                                return { operationResult: "UNAUTHORIZED" };
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
