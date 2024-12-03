const StoreNav = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <nav id="store" className="w-full z-30 top-0 px-6 py-1">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
        <a
          className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
          href="#"
        >
          Store
        </a>

        <div className="flex items-center" id="store-nav-content">
          <div className="flex items-center gap-1 pl-3 hover:text-black">
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
            </svg>
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="p-2 border rounded-md cursor-pointer"
            >
              <option value="">Всі категорії</option>
              <option value="favorites">Улюблені</option>
              <option value="cakes">Cakes</option>
              <option value="pastries">Pastries</option>
              <option value="cookies">Cookies</option>
            </select>
          </div>

          <div className="pl-3 flex items-center gap-1">
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
            >
              <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
            </svg>
            <input
              type="text"
              placeholder="Я шукаю..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="p-2 border rounded-md cursor-pointer"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default StoreNav;
