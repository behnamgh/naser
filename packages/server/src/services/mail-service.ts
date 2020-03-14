import { Inject, Service } from "@tsed/common";
import { MongooseModel } from "@tsed/mongoose";
import { User } from "../models/User";
import { Mail } from "../models/Mail";
import { createTestAccount, createTransport, getTestMessageUrl } from "nodemailer";

@Service()
export class MailService {
    @Inject(User)
    private userModel: MongooseModel<User>;
    @Inject(Mail)
    private mailModel: MongooseModel<Mail>;

    async sendMail(subject: string, html: string): Promise<Mail> {
        const transporter = createTransport({
            host: process.env.mailHost,
            port: 465,

            secure: true, // use TLS
            auth: {
                user: process.env.mailUsername,
                pass: process.env.mailPass
            },
            tls: {
                // do not fail on invalid certs
                rejectUnauthorized: true
            }
        });
        const subscribers = await this.userModel.find({ role: "subscriber" }, "username");
        const recivers = subscribers.map(i => i.username).join(",");


        const info = await transporter.sendMail({
            to: recivers,
            subject,
            html
        });
        const doc = new this.mailModel({ html, subject, accepted: info.accepted, rejected: info.rejected,createdAt:new Date() });
        await doc.save();

        return doc;
    }
    async readMail(page = 0, pageSize = 20): Promise<any> {
        const data = await this.mailModel.find({});
        const totalCount = await this.mailModel.count({});

        return { totalCount, pageSize, data, page };

    }
}