import ErrorHandler from "../error/error.js";
import { Detail } from "../models/detailSchema.js";


export const sendDetail = async (req, res, next) => {
    try {
        const { name, email, phone , description} = req.body;

        if (!name || !email || !phone || !description) {
            return res.status(400).json({ message: "All fields are required"});
        }

        const detail = await Detail.create({ name, email, phone , description });
        res.status(201).json({ success: true, detail });
    } catch (error) {
        next(error); 
    }
};