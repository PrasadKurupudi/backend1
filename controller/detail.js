import ErrorHandler from "../error/error.js";
import { Detail } from "../models/detailSchema.js";


export const sendDetail = async (req, res, next) => {
    try {
        const { name, email, phone , discription} = req.body;

        if (!name || !email || !phone || !discription) {
            return res.status(400).json({ message: "All fields are required"});
        }

        const detail = await Detail.create({ name, email, phone , discription });
        res.status(201).json({ success: true, detail });
    } catch (error) {
        next(error); 
    }
};