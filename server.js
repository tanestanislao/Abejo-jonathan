
const mockData = [
    { id: 1, name: "Product A", price: 10 },
    { id: 2, name: "Product B", price: 20 },
    { id: 3, name: "Product C", price: 30 },
  ];
  app.get("/items", (req, res) => {
    res.json(mockData); 
  });
  app.get("/items", (req, res) => {
    const book = books.find((b) => b.id === parseInt(req.params.id)); 
    if (!book) return res.status(404).json({ message: "Book not found" }); 
    res.json(book);
  });

// to update a book
app.put("/items", (req, res) => {
    const book = books.find((b) => b.id === parseInt(req.params.id));
    if (items) return res.status(404).json({ message: "Book not found" }); 
 
    app.post("/items", (req, res) => {
        const { title, author } = req.body; 
        const newBook = { id: books.length + 1, title, author }; 
        books.push(newBook); 
        res.status(201).json(newBook); 
      });

      app.delete("/items", (req, res) => {
        const index = books.findIndex((b) => b.id === parseInt(req.params.id)); 
        if (index === -1) return res.status(404).json({ message: "Book not found" });

        items.splice(index, 1); // to delete the book from the books array
        res.status(204).send(); // to send a 204 status code
      });
