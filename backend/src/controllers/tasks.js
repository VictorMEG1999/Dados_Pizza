import { json } from 'express';
import {connect} from '../database';

export const getMenu = async (req , res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM pizza');
    res.json(rows);
}

export const getMenuId = async (req , res) => {
    const connection = await connect();
    const [rows] = await connection.query("SELECT * FROM tablaEjemplo1 WHERE id = ? ", [req.params.id]); 
    res.json(rows[0]);
};
export const login = async (req , res) => {


 

    const connection = await connect();
    const [rows] = await connection.query("SELECT * FROM tablaEjemplo1 WHERE user = ? and  pass = ? ", [
        req.boby.user,
        req.boby.pass
    ]); 
    res.json(rows[0]);
};

