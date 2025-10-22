

// function for add product
// ...existing code...
import productModel from "../models/productModel.js";

const addProduct = async (req, res) => {
  try {
    const { name, description, price, category, subCategory, sizes, bestseller } = req.body;

    // جمع‌آوری امن فایل‌ها (upload.fields => req.files is an object of arrays)
    const images = [];
    if (req.files && typeof req.files === "object") {
      Object.values(req.files).forEach((arr) => {
        if (Array.isArray(arr)) {
          arr.forEach((f) => {
            if (f && f.filename) images.push(`/uploads/${f.filename}`);
          });
        }
      });
    }
    let sizesArr = [];
    if (Array.isArray(sizes)) sizesArr = sizes;
    else if (typeof sizes === "string" && sizes.trim()) {
      try {
        sizesArr = JSON.parse(sizes);
      } catch {
        sizesArr = [sizes];
      }
    }

    // اعتبارسنجی ساده
    if (!name || !description || !price || !category || !subCategory || !sizesArr.length) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields: name, description, price, category, subCategory, sizes",
      });
    }

    // اگر می‌خواهید در DB ذخیره کنید (productModel موجود باشد)
    const product = await productModel.create({
      name,
      description,
      price: Number(price),
      image: images,
      category,
      subCategory,
      sizes: sizesArr,
      bestseller: bestseller === "true" || bestseller === true,
      date: Date.now(),
    });

    return res.status(201).json({ success: true, product });
  } catch (error) {
    console.error("addProduct error:", error);
    return res.status(500).json({ success: false, message: error?.message || "Server error" });
  }
};
// ...existing code...

// function for list product
const listProduct = async (req, res) => {

}
// function for removing product
const removeProduct = async (req, res) => {

}
// function for single product info
const singleProduct = async (req, res) => {

}
export { addProduct, listProduct, removeProduct, singleProduct };