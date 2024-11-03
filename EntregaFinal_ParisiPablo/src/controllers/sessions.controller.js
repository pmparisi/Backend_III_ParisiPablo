import { usersService } from "../services/index.js";
import { createHash, passwordValidation } from "../utils/index.js";
import jwt from 'jsonwebtoken';
import UserDTO from '../dto/User.dto.js';
import config from '../config/config.js';

const register = async (req, res) => {
    try {
        const { first_name, last_name, email, password } = req.body;
        if (!first_name || !last_name || !email || !password) return res.status(400).send({ status: "error", error: "Incomplete values" });
        const exists = await usersService.getUserByEmail(email);
        if (exists) return res.status(400).send({ status: "error", error: "User already exists" });
        const hashedPassword = await createHash(password);
        const user = {
            first_name,
            last_name,
            email,
            password: hashedPassword
        };
        let result = await usersService.create(user);
        res.send({ status: "success", payload: result._id });
    } catch (error) {
        res.status(500).send({ status: "error", error: "Internal Server Error" });
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).send({ status: "error", error: "Incomplete values" });
    const user = await usersService.getUserByEmail(email);
    if (!user) return res.status(404).send({ status: "error", error: "User doesn't exist" });
    const isValidPassword = await passwordValidation(user, password);
    if (!isValidPassword) return res.status(400).send({ status: "error", error: "Incorrect password" });
    const userDto = UserDTO.getUserTokenFrom(user);
    const token = jwt.sign(userDto, config.jwtSecret, { expiresIn: config.jwtExpiresIn });
    res.cookie(config.cookieName, token, { maxAge: config.cookieExpiration }).send({ status: "success", message: "Logged in" });
}

const current = async (req, res) => {
    const cookie = req.cookies[config.cookieName];
    if (!cookie) return res.status(401).send({ status: "error", error: "Unauthorized" });
    const user = jwt.verify(cookie, config.jwtSecret);
    return res.send({ status: "success", payload: user });
}

const unprotectedLogin = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).send({ status: "error", error: "Incomplete values" });
    const user = await usersService.getUserByEmail(email);
    if (!user) return res.status(404).send({ status: "error", error: "User doesn't exist" });
    const isValidPassword = await passwordValidation(user, password);
    if (!isValidPassword) return res.status(400).send({ status: "error", error: "Incorrect password" });
    const token = jwt.sign(user, config.jwtSecret, { expiresIn: config.jwtExpiresIn });
    res.cookie('unprotectedCookie', token, { maxAge: config.cookieExpiration }).send({ status: "success", message: "Unprotected Logged in" });
}

const unprotectedCurrent = async (req, res) => {
    const cookie = req.cookies['unprotectedCookie'];
    if (!cookie) return res.status(401).send({ status: "error", error: "Unauthorized" });
    const user = jwt.verify(cookie, config.jwtSecret);
    return res.send({ status: "success", payload: user });
}

export default {
    current,
    login,
    register,
    unprotectedLogin,
    unprotectedCurrent
}