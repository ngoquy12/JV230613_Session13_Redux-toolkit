import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormAdd from "./FormAdd";
import FormEdit from "./FormEdit";
import { deleteById, getAllProduct } from "../services/productService";
import Modal from "./base/modal/Modal";

export default function Product() {
  const [showAdd, setShowAdd] = useState(false);
  const dispatch = useDispatch();
  const listProduct = useSelector((state) => state.product.data);
  console.log(listProduct);
  const [showEdit, setShowEdit] = useState(false);
  const [idEdit, setIdEdit] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [idDelete, setIdDelete] = useState(null);

  console.log("idDelete", idDelete);

  useEffect(() => {
    dispatch(getAllProduct());
  }, []);

  // Hàm xóa thông tin một product theo id
  const handleShow = (id) => {
    // dispatch(deleteById(id));
    setShowModal(true);
    setIdDelete(id);
  };

  // HIển thị form thêm mới
  const handleShowForm = () => {
    setShowAdd(true);
  };

  // Ẩn form thêm mới
  const handleCloseForm = () => {
    setShowAdd(false);
  };

  // Mở form edit
  const handleShowEdit = (id) => {
    setShowEdit(true);
    setIdEdit(id);
  };

  // Mở form edit
  const handleCloseEdit = () => {
    setShowEdit(false);
  };

  // Hàm đóng modal
  const handleCancel = () => {
    setShowModal(false);
  };

  // Hàm xóa thông tin một sản phẩm theo id
  const handleDelete = () => {
    dispatch(deleteById(idDelete));
    setShowModal(false);
  };

  return (
    <>
      {/* Form thêm mới */}
      {showAdd && <FormAdd handleCloseForm={handleCloseForm} />}

      {/* Form edit */}
      {showEdit && (
        <FormEdit handleCloseEdit={handleCloseEdit} idEdit={idEdit} />
      )}

      {/* Modal confirm */}
      {showModal && (
        <Modal
          title="Bạn có chắc chắn muốn xóa sản phẩm này?"
          onOk={handleDelete}
          onCancel={handleCancel}
        />
      )}

      <h1>List Product</h1>
      <button onClick={handleShowForm} className="btn btn-primary m-3">
        Thêm mới sản phẩm
      </button>
      <table border={1} className="table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Product name</th>
            <th>Price</th>
            <th>From</th>
            <th colSpan={2}>Option</th>
          </tr>
        </thead>
        <tbody>
          {listProduct.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.ProductName}</td>
              <td>{product.Price}</td>
              <td>{product.From}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => handleShowEdit(product.id)}
                >
                  Sửa
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleShow(product.id)}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
