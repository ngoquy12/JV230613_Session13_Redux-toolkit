import React, { useEffect, useState } from "react";
import "./product.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct, updateProduct } from "../services/productService";

export default function FormEdit({ handleCloseEdit, idEdit }) {
  const dispatch = useDispatch();
  const listProduct = useSelector((state) => state.product.data);

  const [product, setProduct] = useState({
    ProductName: "",
    Price: 0,
    From: "",
  });

  // Hàm lấy giá trị từ các ô input
  const handleChange = (e) => {
    const { value, name } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  // Lấy thông một sản phẩm theo id được truyền từ cha xuống thông qua props
  const getProductById = () => {
    const product = listProduct.find((pro) => pro.id === idEdit);
    setProduct(product);
  };

  useEffect(() => {
    getProductById();
  }, []);

  // Hàm thêm mới product
  const handleSubmit = (e) => {
    e.preventDefault();
    // Gọi API thêm mới
    dispatch(updateProduct(product)); // Bắn action kèm thông tin lên reducer để xử lý
    dispatch(getAllProduct()); // Load lại dữ liệu
    handleCloseEdit(); // Đóng form
  };

  return (
    <>
      <div className="product-container">
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="d-flex justify-content-between align-items-center">
            <h3>Cập nhật sản phẩm</h3>
            <div onClick={handleCloseEdit} className="btn btn-close"></div>
          </div>
          <div className="mb-3 text-start">
            <label htmlFor="productName" className="form-label">
              Tên sản phẩm
            </label>
            <input
              onChange={handleChange}
              type="text"
              value={product.ProductName}
              className="form-control"
              id="productName"
              name="ProductName"
            />
          </div>
          <div className="mb-3 text-start">
            <label htmlFor="price" className="form-label">
              Giá
            </label>
            <input
              value={product.Price}
              onChange={handleChange}
              type="number"
              className="form-control"
              id="price"
              name="Price"
            />
          </div>
          <div className="mb-3 text-start">
            <label htmlFor="from" className="form-label">
              Xuất xứ
            </label>
            <input
              onChange={handleChange}
              type="text"
              value={product.From}
              className="form-control"
              id="from"
              name="From"
            />
          </div>
          <div className="d-flex gap-3 justify-content-center">
            <button type="submit" className="btn btn-primary">
              Cập nhật
            </button>
            <button
              onClick={handleCloseEdit}
              type="button"
              className="btn btn-danger"
            >
              Hủy
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
