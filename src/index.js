import express from "express"

const app = express();
const PORT = 3000;
const SERVER = "0.0.0.0";

app.get("/", (req, res) => {
    return res.json({
        "message": "OK",
    })
});

app.get("/user", (req, res) => {
    return res.json({
        "message": "OK",
        "data": {
            "name": "Leonel Lopez",
            "age": 27,
        }
    })
});

app.listen(PORT, SERVER, () => {
    console.log("Server listening on port 3000")
})