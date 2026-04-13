import ItemList from "./ItemList";

const ProductCategory = ({ category, onClick, isOpen, products }) => {
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 hover:cursor-pointer">
        <div
          className="flex justify-between"
          onClick={onClick}
        >
          <span className="font-bold">{category.name}</span>
          <span>{isOpen ? "⬆️" : "⬇️"}</span>
        </div>
        {isOpen && <ItemList items={products} />}
      </div>
    </div>
  );
};

export default ProductCategory;
