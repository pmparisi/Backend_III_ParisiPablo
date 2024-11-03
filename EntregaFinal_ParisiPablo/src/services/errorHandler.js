export const errorHandler = (err, req, res, next) => {
    const status = err.status || 500;
    let message = err.message || "Internal Server Error";

    if (status === 400) {
        message = "Bad Request: Please check your input.";
    } else if (status === 404) {
        message = "Not Found: The resource you requested does not exist.";
    } else if (status === 409) {
        message = "Conflict: There was a conflict with your request.";
    }

    res.status(status).json({ error: message });
};