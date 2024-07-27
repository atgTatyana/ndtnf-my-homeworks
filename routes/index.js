const express = require('express')
const router = express.Router()

const container = require('../container')
const { BooksRepository } = require('../src/BooksRepository')

const repo = container.get(BooksRepository)

router.get('/', async (req, res) => {     // получить все записи
  try {
    const books = await repo.getBooks()
    res.json(books)
  } catch (e) {
    res.status(500).json(e)
  }
})
  
router.get('/:id', async (req, res) => {    // получение единственной записи по id
  const {id} = req.params
  try {
    const book = await repo.getBook(id)
    
    if (book === null) {    // если нет такого id
      res.status(404)
      res.json('404 | книга не найдена')
      
    } else {
      res.json(book)
    }

  } catch (e) {
    res.status(500).json(e)
  }
})

router.post('/', async (req, res) => {    // создание новой записи
  const {title, description, authors, favorite, fileCover, fileName} = req.body
  try {
    const newBook = await repo.createBook({
      title,
      description,
      authors,
      favorite,
      fileCover,
      fileName
    })
    res.json(newBook)

  } catch (e) {
    res.status(500).json(e)
  }
})

router.put('/:id', async (req, res) => {    // обновление записи
  const {title, description, authors, favorite, fileCover, fileName} = req.body
  const {id} = req.params
  try {
    await repo.updateBook(id, {title, description, authors, favorite, fileCover, fileName})
    res.redirect(`/api/books/${id}`)

  } catch (e) {
    res.status(500).json(e)
  }  
})
  
router.delete('/:id', async (req, res) => {   // удаление записи
  const {id} = req.params
  try {
    await repo.deleteBook(id)
    res.json('ok')

  } catch (e) {
    res.status(500).json(e)
  }
})

module.exports = router