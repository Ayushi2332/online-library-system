import { useSelector } from "react-redux";
import { BookCard } from "../components/BookCard";


export const Home = () => {
  const books = useSelector((state) => state.books.books.slice(0, 4)); // top 4 books

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Online Library</h1>
      <h2 className="text-xl font-semibold mb-4">Featured Books</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};


