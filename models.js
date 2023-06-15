const mongoose = require("./db");

const userSchema = new mongoose.Schema({
	nome: String,
	foto: String,
	idade: Number,
	interesses: [String],
});

const User = mongoose.model("usuarios", userSchema);

const bookSchema = new mongoose.Schema({
	titulo: String,
	autor: String,
	ano: Number,
	ISBN: String,
	genero: String,
});

const Book = mongoose.model("livros", bookSchema);

module.exports = { User, Book };
