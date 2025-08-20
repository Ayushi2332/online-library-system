export const BookCard = ({ book }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <img
        src={book.coverUrl || "https://via.placeholder.com/150"}
        alt={book.title}
        className="w-300 h-30 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-300">{book.title}</h2>
        <p className="text-gray-600">{book.author}</p>
        <p className="text-gray-600">{book.description}</p>
        <p className="text-gray-600">{book.rating}</p>
        <p className="text-gray-600">{book.category}</p>
        
      </div>
    </div>
  );
};

