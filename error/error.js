class ErrorHandler extends Error {
    constructor(message,statusCode){
        super(message);
        this.statusCode= statusCode;
    }
}

export const errorMiddleware = (err, req, res, next) => {
    const statusCode = err.statusCode || 500; // Default to 500 if statusCode is undefined
    const message = err.message || "Internal Server Error";

    console.error(err.stack); // Log the error stack for debugging

    res.status(statusCode).json({
        success: false,
        message,
    });
};

export default ErrorHandler;