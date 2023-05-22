import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import * as userRepository from "../data/user/user.js";
import {config} from "../config.js";
import * as adminRepository from "../data/admin/admin.js"

export async function getAll(req, res) {
    const users = userRepository.getAll();

    res.status(200).json(users);
}

export async function get(req, res) {
    const user_idx = req.params.user_idx;
    const user = userRepository.searchByIdx(user_idx);

    res.status(200).json(users);
}

export async function login(req, res) {
    console.log("들어옴");
    const {admin_id, admin_pw} = req.body;
    const admin = await(adminRepository.login(admin_id, admin_pw));

    if (!admin) {
        return res.status(400).json({message:"로그인 실팼ㅃㅉㅆㅃㅆ"})
    }
    res.status(200).json({token, admin_id});
}


export async function me(req, res, next) {
    const user = await(userRepository.searchByIdx(req.user_idx));
    if(!user){
        return res.status(404).json({message: "사용자가 존재하지 않습니다."})
    }
    res.status(200).json({token:req.token, user_id: user.user_id});
}



function createJwtToken(idx) {
    return jwt.sign({idx}, config.jwt.secretKey, { expiresIn: config.jwt.expiresInSec});
}