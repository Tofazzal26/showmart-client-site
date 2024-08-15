import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const ShowCase = () => {
  const [startDate, setStartDate] = useState(new Date());

  const handleCategories = (e) => {
    e.preventDefault();
    const brand = e.target.brand_name.value;
    const price = e.target.price_range.value;
    const category = e.target.category_name.value;
    console.log({ brand, price, category });
  };

  const handleSorting = (e) => {
    e.preventDefault();
    const price = e.target.low_price.value;
    const date = startDate;
    console.log({ price, date });
  };

  return (
    <div className="mt-[100px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5">
          <div className="col-span-1">
            <div>
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
                      className="w-[120px]"
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
            <h1>Product</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
