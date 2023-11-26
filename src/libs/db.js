import { createPool } from "mysql2/promise";

export const conn = createPool({
    host:'localhost',
    user:'root',
    password:'LuMITY_BV1',
    port:3306,
    database:'clickluch'
})