import React from "react";

const Header = () => {
  return (
    <div>
      <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
        <div class="col-md-6 p-lg-5 mx-auto my-5">
          <h1 class="display-3 fw-bold">Shoes </h1>
          <h3 class="fw-normal text-muted mb-3">
            Build anything you want with Aperture
          </h3>
          <div class="d-flex gap-3 justify-content-center lead fw-normal">
            <img src="src\assets\pexels-web-donut-19090.jpg" alt="Shoes Collection" width={"50%"} />
          </div>
        </div>
        <div class="product-device shadow-sm d-none d-md-block"></div>
        <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>
    </div>
  );
};

export default Header;
