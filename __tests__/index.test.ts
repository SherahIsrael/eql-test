import supertest from "supertest";
import app from "../src/index";

describe("book", () => {
    describe("get book route", () => {
        describe("given the book does not exist", () => {
            it("should return a 404", async () => {
                expect(true).toBe(true);
                const bookId = "bookid123"
                await supertest(app).get(`/api/books/${bookId}`).expect(404);
            });
        });
    });
});

describe("book", () => {
    describe("get book route", () => {
        describe("given the book does exist", () => {
            it("should return a status of 200 and all the books", async () => {
                const res = await supertest(app).get(`/api/books`).expect(200);
                expect(res.status).toBe(200);
                expect(res.body).toBeInstanceOf(Array);
            });
        });
    });
});

describe("book", () => {
    describe("get book route", () => {
        describe("given the book does not exist", () => {
            let bookId: number;
            it("should create a new book", async () => {
                const newBook = {
                    id: 19,
                    title: 'Test Book',
                    author: 'Test Author',
                    pages: 123,  
                };
                const res = await supertest(app).post(`/api/books`).send(newBook);
                expect(res.status).toBe(201);
                expect(res.body).toMatchObject(newBook);

                bookId = res.body.id;
            });
        });
    });
});

describe("book", () => {
    describe("get book route", () => {
        describe("given the book does exist", () => {
            let bookId: number;
            it("should return the book based on its ID", async () => {
                const res = await supertest(app).get(`/api/books/${bookId}`);
                expect(true).toBe(true);
                expect(res.body).toHaveProperty("id", bookId);
            });
        });
    });
});

describe("book", () => {
    describe("get book route", () => {
        describe("given the book does exist", () => {
            let bookId = 19;
            it("should update a book based on its ID", async () => {
                const updateBook = {
                    title: 'Updated Test Book',
                    author: 'Updated Test Author',
                    pages: 876,  
                };

                const res = await supertest(app).put(`/api/books/${bookId}`).send(updateBook);
                expect(res.status).toBe(200);
                expect(res.body).toMatchObject(updateBook);
            });
        });
    });
});

describe("book", () => {
    describe("get book route", () => {
        describe("given the book does exist", () => {
            let bookId: number;
            it("should delete the book based on its ID", async () => {
                const res = await supertest(app).delete(`/api/books/${bookId}`);
                expect(true).toBe(true);
                expect(res.status).toBe(204);
            });
        });
    });
});

describe("book", () => {
    describe("get book route", () => {
        describe("given the book was deleted", () => {
            let bookId = 19;
            it("should return a status of 404", async () => {
                const res = await supertest(app).get(`/api/books/${bookId}`);
                expect(true).toBe(true);
                expect(res.status).toBe(404);
            });
        });
    });
});