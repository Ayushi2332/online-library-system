import { useSelector } from "react-redux";
import {BookCard} from "../components/BookCard";

export const BrowseBooks = () => {
  const books = useSelector((state) => state.books.books);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Browse All Books</h1>

      {books.length === 0 ? (
        <p className="text-gray-600">No books available</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};


