const express = require("express");
const apiRouter = require("./api");

const app = express();
const port = 3000;
const path = require("path");

const publicDirectoryPath = path.join(__dirname, "public");
app.use(express.static(publicDirectoryPath));

app.get("/", (req, res) => {
	res.sendFile(path.join(publicDirectoryPath, "index.html"));
});

app.use("/api", apiRouter);

app.listen(port, () => {
	console.log(`Servidor iniciado na porta ${port}`);
});
