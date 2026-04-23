const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("PollutedHub backend is running");
});

app.post("/send", (req, res) => {
    console.log("Data:", req.body);
    res.json({ success: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server running on", PORT);
});
