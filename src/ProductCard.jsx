import React from "react";

function ProductCard() {
  return (
    <div className="col mb-5">
      <div className="card h-100">
        {/* Hình ảnh sản phẩm */}
        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
        {/* Chi tiết sản phẩm */}
        <div className="card-body p-4">
          <div className="text-center">
            {/* Tên sản phẩm */}
            <h5 className="fw-bolder">Fancy Product</h5>
            {/* Giá sản phẩm */}
            $40.00 - $80.00
          </div>
        </div>
        {/* Hành động sản phẩm */}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <a className="btn btn-outline-dark mt-auto" href="#">Xem chi tiết</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
