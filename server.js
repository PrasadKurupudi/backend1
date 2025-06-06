import app from "./app.js";
// At the top of your main server file (e.g., app.js or server.js)
const PORT = process.env.PORT || 5000; // Change to a different port
app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});