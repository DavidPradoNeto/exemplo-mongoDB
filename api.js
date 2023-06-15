const express = require("express");
const { User, Book } = require("./models");

const path = require("path");
const router = express.Router();

// Rota para buscar todos os usuários
router.get("/users", async (req, res) => {
	try {
		const users = await User.find();
		res.json(users);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

// Rota para buscar todos os livros
router.get("/books", async (req, res) => {
	try {
		const books = await Book.find();
		res.json(books);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

router.get("/books/:genero", async (req, res) => {
	try {
		const genero = req.params;
		const books = await Book.find(genero);
		res.json(books);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

// Define o diretório público para os arquivos estáticos
const publicDirectoryPath = path.join(__dirname, "public");
router.use(express.static(publicDirectoryPath));

module.exports = router;
