import Redis from "ioredis";

export const redis = new Redis(6379, process.env.REDISCLOUD_URL || "127.0.0.1"); // 192.168.1.1:6379
