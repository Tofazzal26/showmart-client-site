import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoIosSearch } from "react-icons/io";
import useAxiosSecure from "./../../Hook/useAxiosSecure";
import ShowCaseCard from "./ShowCaseCard";
const ShowCase = () => {
  const [startDate, setStartDate] = useState(new Date());
  const axiosSecure = useAxiosSecure();

  const {
    refetch,
    isLoading,
    data: allProduct = [],
  } = useQuery({
    queryKey: ["allProduct"],
    queryFn: async () => {
      const result = await axiosSecure.get(`/allProducts`, {
        withCredentials: true,
      });
      return result.data;
    },
  });

  // pagination here

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 15;

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;

  const currentUsers = allProduct.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(allProduct.length / usersPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // search data state

  const [allSearchData, setAllSearchData] = useState(currentUsers);

  // search product

  const [searchProduct, setSearchProduct] = useState("");
  const [filterProduct, setFilterProduct] = useState(allProduct);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchProduct(value);
    const filterData = currentUsers.filter(
      (product) =>
        product.category_name.toLowerCase().includes(value.toLowerCase()) ||
        product.brand_name.toLowerCase().includes(value.toLowerCase())
    );
    setFilterProduct(filterData);
  };

  const [filterCategory, setFilterCategory] = useState(currentUsers);

  const handleCategories = (e) => {
    e.preventDefault();
    const brand = e.target.brand_name.value;
    const UserPrice = e.target.price_range.value;
    const category = e.target.category_name.value;
    const filterData = currentUsers.filter(
      (product) =>
        product.category_name.toLowerCase().includes(category.toLowerCase()) &&
        product.brand_name.toLowerCase().includes(brand.toLowerCase()) &&
        product.price <= parseInt(UserPrice)
    );
    setFilterCategory(filterData);
  };

  const [sorting, setSorting] = useState(currentUsers);

  const handleSorting = (e) => {
    e.preventDefault();
    const price = e.target.low_price.value;
    const userDate = startDate;
    const formattedDate = userDate.toISOString().split("T")[0];

    const ascendingData = [...currentUsers].sort((a, b) => a.price - b.price);
    const descendingData = [...currentUsers].sort((a, b) => b.price - a.price);

    if (price === "low") {
      const ascendingOrder = ascendingData.filter(
        (item) => item.date >= formattedDate
      );
      setSorting(ascendingOrder);
    }
    if (price === "high") {
      const descendingOrder = descendingData.filter(
        (item) => item.date >= formattedDate
      );
      setSorting(descendingOrder);
    }
  };

  const showProducts = () => {
    if (searchProduct) {
      return filterProduct.map((product, idx) => (
        <ShowCaseCard product={product} key={idx} />
      ));
    } else if (filterCategory.length > 0) {
      return filterCategory.map((product, idx) => (
        <ShowCaseCard product={product} key={idx} />
      ));
    } else if (sorting.length > 0) {
      return sorting.map((product, idx) => (
        <ShowCaseCard product={product} key={idx} />
      ));
    } else {
      return currentUsers.map((product, idx) => (
        <ShowCaseCard product={product} key={idx} />
      ));
    }
  };

  const dataCount = () => {
    if (searchProduct.trim() !== "") {
      return (
        <h2 className="text-[14px] font-interFont font-medium">
          Showing all {filterProduct?.length} results
        </h2>
      );
    } else if (filterCategory.length > 0) {
      return (
        <h2 className="text-[14px] font-interFont font-medium">
          Showing all {filterCategory.length} results
        </h2>
      );
    } else if (sorting.length > 0) {
      return (
        <h2 className="text-[14px] font-interFont font-medium">
          Showing all {sorting.length} results
        </h2>
      );
    } else {
      return (
        <h2 className="text-[14px] font-interFont font-medium">
          Showing all {currentUsers.length} results
        </h2>
      );
    }
  };

  return (
    <div className="mt-[100px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
          <div className="col-span-1">
            <div className="mt-[10px]">
              <h1 className="text-[16px] font-bold font-interFont">
                Product Categories
              </h1>
              {/* product categories here */}
              <div>
                <form onSubmit={handleCategories}>
                  <div className="mt-4">
                    <select
                      id="brand-name"
                      name="brand_name"
                      className="border-2 px-4 py-2 font-semibold text-[14px] rounded-lg"
                    >
                      <option value="">Select Brand</option>
                      <option value="Samsung">Samsung</option>
                      <option value="Apple">Apple</option>
                      <option value="Sony">Sony</option>
                      <option value="LG">LG</option>
                      <option value="OnePlus">OnePlus</option>
                      <option value="Google">Google</option>
                      <option value="Xiaomi">Xiaomi</option>
                      <option value="Huawei">Huawei</option>
                      <option value="Nokia">Nokia</option>
                      <option value="Motorola">Motorola</option>
                      <option value="Panasonic">Panasonic</option>
                      <option value="Toshiba">Toshiba</option>
                      <option value="Philips">Philips</option>
                      <option value="Sharp">Sharp</option>
                      <option value="Vizio">Vizio</option>
                      <option value="Hisense">Hisense</option>
                      <option value="Roku">Roku</option>
                      <option value="Dell">Dell</option>
                      <option value="HP">HP</option>
                      <option value="Lenovo">Lenovo</option>
                      <option value="Asus">Asus</option>
                      <option value="Microsoft">Microsoft</option>
                      <option value="Canon">Canon</option>
                      <option value="Nikon">Nikon</option>
                      <option value="Fujifilm">Fujifilm</option>
                      <option value="Olympus">Olympus</option>
                      <option value="Leica">Leica</option>
                      <option value="Pentax">Pentax</option>
                      <option value="GoPro">GoPro</option>
                      <option value="Kodak">Kodak</option>
                    </select>

                    <select
                      id="price-range"
                      className="border-2 px-4 ml-4 py-2 font-semibold text-[14px] rounded-lg"
                      name="price_range"
                    >
                      <option value="">Price Range</option>
                      <option value="1400">800$ - 1400$</option>
                      <option value="800">400$ - 800$</option>
                      <option value="400">100$ - 400$</option>
                    </select>
                    <select
                      id="category-name"
                      className="border-2 px-4 py-2 font-semibold text-[14px] rounded-lg"
                      name="category_name"
                    >
                      <option value="">Select Category</option>
                      <option value="Smartphone">Smartphone</option>
                      <option value="Television">Television</option>
                      <option value="Laptop">Laptop</option>
                      <option value="Camera">Camera</option>
                    </select>
                    <button
                      type="submit"
                      className="bg-[#2d4d95] text-white mt-4 ml-4 font-semibold text-[14px] py-2 px-4 rounded-lg"
                    >
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <hr className="mt-[40px]" />
            <div>
              <h1 className="text-[16px] mt-[30px] font-bold font-interFont">
                Product Sorting
              </h1>
              <form onSubmit={handleSorting}>
                <div className="flex gap-4 items-center">
                  <select
                    id="log-price"
                    className="border-2 px-4 py-2 mt-4 font-semibold text-[14px] rounded-lg"
                    name="low_price"
                  >
                    <option value="">Price Sorting</option>
                    <option value="low">Low Price</option>
                    <option value="high">High Price</option>
                  </select>
                  <span className="border-2 rounded-lg font-semibold text-[14px]  mt-4 py-2 px-4">
                    <DatePicker
                      className="w-[100px]"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </span>
                </div>

                <button
                  type="submit"
                  className="bg-[#2d4d95] text-white mt-4 font-semibold text-[14px] py-2 px-4 rounded-lg"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
          <div className="col-span-4">
            <div className="flex justify-between items-center">
              <div>{dataCount()}</div>

              <div className="relative">
                <input
                  value={searchProduct}
                  onChange={handleSearch}
                  type="text"
                  className="border-2  rounded-md outline-none text-[14px] font-interFont px-4 py-2 relative font-medium"
                  placeholder="Search"
                />
                <div className="absolute right-3 top-[12px] cursor-pointer">
                  <IoIosSearch size={20} />
                </div>
              </div>
            </div>
            {isLoading && (
              <div className="my-[100px] flex justify-center items-center">
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-blue-600"></div>
              </div>
            )}

            {/* product here section */}

            <div className="my-8">
              <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
                {/* {searchProduct
                  ? filterProduct.map((product, idx) => (
                      <ShowCaseCard product={product} key={idx} />
                    ))
                  : currentUsers.map((product, idx) => (
                      <ShowCaseCard product={product} key={idx} />
                    ))} */}
                {showProducts()}
              </div>
              <div>
                <div className="flex justify-center mt-4">
                  <div className="flex">
                    <button
                      onClick={() => paginate(currentPage - 1)}
                      className={`flex items-center justify-center px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md cursor-pointer rtl:-scale-x-100 dark:bg-orange-300 dark:text-gray-900 hover:bg-blue-500 transform ${
                        currentPage === 1 && "cursor-not-allowed"
                      }`}
                      disabled={currentPage === 1}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    {Array.from({ length: totalPages }, (_, index) => (
                      <button
                        key={index + 1}
                        onClick={() => paginate(index + 1)}
                        className={`hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-blue-400 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200 ${
                          currentPage === index + 1 && "bg-blue-500 text-white"
                        }`}
                      >
                        {index + 1}
                      </button>
                    ))}

                    <button
                      onClick={() => paginate(currentPage + 1)}
                      className={`flex items-center justify-center px-4 py-2 mx-1 text-blue-500 transition-colors duration-300 transform bg-white rounded-md rtl:-scale-x-100 dark:bg-orange-300 dark:text-gray-900 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200 ${
                        currentPage === totalPages && "cursor-not-allowed"
                      }`}
                      disabled={currentPage === totalPages}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 011.414-1.414l4 4a1 1 010 1.414l-4 4a1 1 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
