import { config } from "dotenv";

config({
    path: process.env.NODE_ENV!.trim() === 'dev' ? '.env.test' : '.env'
});

const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;
const MONGODB_DATABASE = process.env.MONGODB_DATABASE;

export { MONGODB_PASSWORD, MONGODB_DATABASE };