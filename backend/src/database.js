import mysql from 'mysql2/promise';
import {connection }from './config';

export const connect = async () => {
    return await mysql.createConnection (connection);
};