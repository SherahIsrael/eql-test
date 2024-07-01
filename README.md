# Library API

Returns json data about books

## GET request. URL: /api/books

```
app.get("/api/books", async (req: Request, res: Response) => {
  const books = await readBooksFromFile();
  res.json(books);
});
```

Sample Response 
```
![image](https://github.com/SherahIsrael/eql-test/assets/125824475/79df326b-ce53-4a8b-8d0a-8c49965cb889)

```

