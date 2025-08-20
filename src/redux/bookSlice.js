import { createSlice } from "@reduxjs/toolkit";

// Sample data
const initialState = {

books : [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedDate: "1925",
    description:
      "A novel set in the Jazz Age that tells the tragic story of Jay Gatsby and his unrequited love for Daisy Buchanan.",
    coverUrl: "https://covers.openlibrary.org/b/id/7352161-L.jpg",
    category: "Fiction",
    rating: 4.4,
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publishedDate: "1960",
    description:
      "A story of racial injustice and childhood innocence in the Deep South, seen through the eyes of young Scout Finch.",
    coverUrl: "https://covers.openlibrary.org/b/id/8228691-L.jpg",
    category: "Classic",
    rating: 4.8,
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    publishedDate: "1949",
    description:
      "A dystopian novel depicting a totalitarian regime where Big Brother watches every move of its citizens.",
    coverUrl: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
    category: "Sci-Fi",
    rating: 4.6,
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publishedDate: "1813",
    description:
      "A romantic novel that explores manners, upbringing, morality, and marriage in early 19th century England.",
    coverUrl: "https://covers.openlibrary.org/b/id/8091016-L.jpg",
    category: "Romance",
    rating: 4.5,
  },
  {
    id: 5,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    publishedDate: "1937",
    description:
      "Bilbo Baggins embarks on an unexpected journey filled with dragons, dwarves, and treasure.",
    coverUrl: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
    category: "Fantasy",
    rating: 4.7,
  },
  {
    id: 6,
    title: "Harry Potter",
    author: "J.K. Rowling",
    publishedDate: "1997",
    description:
      "The first book in the Harry Potter series introduces the young wizard and his adventures at Hogwarts.",
    coverUrl: "https://covers.openlibrary.org/b/id/7884866-L.jpg",
    category: "Fantasy",
    rating: 4.9,
  },
  {
    id: 7,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    publishedDate: "1951",
    description:
      "A classic coming-of-age story that follows Holden Caulfield as he navigates teenage angst and alienation.",
    coverUrl: "https://covers.openlibrary.org/b/id/8231994-L.jpg",
    category: "Classic",
    rating: 4.2,
  },
  {
    id: 8,
    title: "The Alchemist",
    author: "Paulo Coelho",
    publishedDate: "1988",
    description:
      "A philosophical novel about a young shepherd's journey to find treasure and discover his personal legend.",
    coverUrl: "https://covers.openlibrary.org/b/id/8128695-L.jpg",
    category: "Philosophy",
    rating: 4.3,
  },
  {
    id: 9,
    title: "Brave New World",
    author: "Aldous Huxley",
    publishedDate: "1932",
    description:
      "A futuristic novel that critiques a society driven by technological advancements and consumerism.",
    coverUrl: "https://covers.openlibrary.org/b/id/8775321-L.jpg",
    category: "Sci-Fi",
    rating: 4.4,
  },
  {
    id: 10,
    title: "The Da Vinci Code",
    author: "Dan Brown",
    publishedDate: "2003",
    description:
      "A fast-paced thriller involving secret societies, codes, and a quest for hidden truths about Christianity.",
    coverUrl: "https://covers.openlibrary.org/b/id/240726-L.jpg",
    category: "Thriller",
    rating: 4.1,
  },
  {
    id: 11,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    publishedDate: "1954",
    description:
      "An epic fantasy tale about the quest to destroy the One Ring and the battle between good and evil.",
    coverUrl: "https://covers.openlibrary.org/b/id/9337223-L.jpg",
    category: "Fantasy",
    rating: 4.9,
  },
  {
    id: 12,
    title: "The Fault in Our Stars",
    author: "John Green",
    publishedDate: "2012",
    description:
      "A moving story about two teenagers who fall in love while dealing with the challenges of cancer.",
    coverUrl: "https://covers.openlibrary.org/b/id/7267983-L.jpg",
    category: "Romance",
    rating: 4.5,
  },
  {
    id: 13,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    publishedDate: "2011",
    description:
      "A groundbreaking book exploring the history and impact of Homo sapiens on the world.",
    coverUrl: "https://covers.openlibrary.org/b/id/8370225-L.jpg",
    category: "History",
    rating: 4.8,
  },
  {
    id: 14,
    title: "Becoming",
    author: "Michelle Obama",
    publishedDate: "2018",
    description:
      "The memoir of former First Lady Michelle Obama, reflecting on her life and journey.",
    coverUrl: "https://covers.openlibrary.org/b/id/9254818-L.jpg",
    category: "Biography",
    rating: 4.7,
  },
  {
    id: 15,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    publishedDate: "1937",
    description:
      "A personal development and self-help book that teaches the principles of success.",
    coverUrl: "https://covers.openlibrary.org/b/id/11153206-L.jpg",
    category: "Self-help",
    rating: 4.6,
  }
]};
// ✅ Create Slice
const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
  },
});

// ✅ Export actions and reducer
export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;

