import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context";
import { Title, ProductItem } from "../components";
import type { productType } from "../type";

function Collection(): React.ReactElement | null {
  const shop = useContext(ShopContext) as any;
  if (!shop) return null;
  const { products, search, showSearch } = shop;
  // این استیت برای  محصولات فیلتر شده و تغییر ان هاست
  const [filterProducts, setFilterProducts] = useState<productType[]>([]);
  //    و این استیت برای  کتگوری  و ست ان وقتی تاگل وارد عمل میشه
  const [category, setCategory] = useState<string[]>([]);
  const [subCategory, setSubCategory] = useState<string[]>([]);
  const [sortType, setSortType] = useState<string>("relavent");

  // handle category change
  // اگر مقدار تگی که تاگل میشه توی این متغیر کتگوری موجود  بود یعنی انتخاب شده بود
  //بیا ست کتگوری را اجرا کن ومقدار های قبلی رابگیر و فیلتر کن
  // محصولاتی که با مقدار تگ تاگل شده یکسان  نیست را نشون بده
  //این یعنی اگر دوباره تاگل شده بیاد غیر فعال بشه
  const toggleCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (category.includes(val)) {
      setCategory((prev) => prev.filter((item) => item !== val));
      //در غیر این صورت بیا قبلی ها را  بگیر ونشون بده
      //  و مقدار کتگوری که تاگل شده را هم  تو ارایه نشون بده
    } else {
      setCategory((prev) => [...prev, val]);
    }
  };
  //handle subcategory change
  const toggleSubCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (subCategory.includes(val)) {
      setSubCategory((prev) => prev.filter((item) => item !== val));
    } else {
      setSubCategory((prev) => [...prev, val]);
    }
  };
  //filter products by category property
  const applyfilter = () => {
    let productsCopy = products.slice();
    //اگر سرچشو ترو بود و متغیر سرچ هم پر شده بود بیا کپی محصولات را فیلتر کن
    // و انهایی را نشون بده که اسم محصول انها شامل کلمات این سرچ باشد
    if (showSearch && search) {
      //filter products when showSearch and search  are true
      productsCopy = productsCopy.filter((item: productType) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    //اگر متغییر کتگوری  طولش بیش از صفر بود یعنی تغییراتی توی تگ  کتگوری رخ داده بود
    // و کتگوری هایی را نمایش بده که شامل کتگوری این محصولات باشند
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item: productType) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item: productType) =>
        subCategory.includes(item.subCategory)
      );
    }
    //نتیجه این شرط ها را میدیم به فانکشن ست فیلتر تا بیاد بزاره توی متغییر فیلر محصولات
    setFilterProducts(productsCopy);
  };

  const sortProducts = () => {
    //فیتر پروداکت را که متغییر اولیه ما را کپی میکنیم
    let fbCpy = filterProducts.slice();
    //میگیم اگر مقدار سورت تایپ یعنی متغییر اولیه برابر لاو به هایگ  بود بیا
    //فانکشن ست فیلترپروداکت را ذوباره اجراکن و محصولات درون ان را از کوچیک به بزرگ سورت کن
    //و بریز توی متغییر فیلترپروداکت
    switch (sortType) {
      case "low-high":
        setFilterProducts(fbCpy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(fbCpy.sort((a, b) => b.price - a.price));
        break;
      default:
        //و در غیر اینصورت به صورت دیفالت همون اپلای فیلتر را اجرا کن
        applyfilter();
        break;
    }
  };
  //فانکشن اپلای فیلتر وقتی اجرا بشه که هر کدوم
  // از متغییر های کتگوری یا ساب کتگوری یا سرچ یا شو سرچ  اپدیت شد
  useEffect(() => {
    applyfilter();
  }, [category, subCategory, search, showSearch]);
  // فانکشن سورت پروداکت وقتی اجرا بشه که سورت تایپ  که اون پایین بوسیله
  // ست سورت تایپ تغییر میکنه و مقدار ولیو ان تگ اپشن را میگیره واپدیت بشه
  useEffect(() => {
    sortProducts();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-5 pt-10  mt-10 md:mt-20">
      {/* Filter Options */}
      <div className=" min-w-60  ">
        {/*wrote onClick for open and close filter  */}
       <Title text1="Collection"/>
   
        {/* Category Filter */}
        <div className="flex flex-row gap-2  lg:flex-col  md:flex-col">
          <div
            className={`border border-gray-300 pr-7 px-4   rounded-xl py-3 mt-6 sm:block`}
          >
            <p className="mb-3 w-[135px] text-sm font-medium"> CATEGORIES</p>
            <div className="flex flex-col gap-2    text-sm font-light text-gray-700 ">
              <p className="flex   checkbox   itemsfilter gap-2">
                <input
                  className="w-3  "
                  type="checkbox"
                  value={"Men"}
                  onChange={toggleCategory}
                />
                Men
              </p>
              <p className="flex  itemsfilter gap-2">
                <input
                  className="w-3 "
                  type="checkbox"
                  value={"Women"}
                  onChange={toggleCategory}
                />{" "}
                Women{" "}
              </p>
              <p className="flex    itemsfilter gap-2">
                {" "}
                <input
                  className="w-3  "
                  type="checkbox"
                  value={"Kids"}
                  onChange={toggleCategory}
                />{" "}
                Kids
              </p>
            </div>
          </div>

          {/* subcategory Filter */}
          <div
            className={`border border-gray-300 mt-6  lg:mt-0 rounded-xl pl-5 py-3  sm:block`}
          >
            <p className="mb-3  text-sm font-medium"> TYPE</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700 ">
              <p className="flex mr-7 itemsfilter gap-2">
                <input
                  className="w-3 "
                  type="checkbox"
                  value={"Topwear"}
                  onChange={toggleSubCategory}
                />
                Topwear
              </p>
              <p className="flex mr-7 itemsfilter gap-2">
                <input
                  className="w-3 "
                  type="checkbox"
                  value={"Bottomwear"}
                  onChange={toggleSubCategory}
                />
                Bottomwear
              </p>
              <p className="flex mr-7  itemsfilter gap-2">
                <input
                  className="w-3 "
                  type="checkbox"
                  value={"Winterwear"}
                  onChange={toggleSubCategory}
                />
                Winterwear
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* right side  */}
      <div>
        <div className="flex mt-5 justify-between ml-2 lg:ml-0  sm:text-md mb-4">
          <div className="text-gray-800   ">
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="  border-none  p-[0.6rem] pr-20 mb-2  outline-none rounded-xl shadow-lg  "
            >
              <option value="relavent">sort by:Relavent</option>
              <option value="low-high">sort by: Low to High</option>
              <option value="high-low">sort by: High to Low</option>
            </select>
          </div>
        </div>
        {/* map Product */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-5">
          {filterProducts.map((item) => (
            <ProductItem
              key={item._id}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collection;
