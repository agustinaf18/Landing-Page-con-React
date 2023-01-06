import React from "react"; //Importar libreria de React
//2. Crear el componente
const Footer = function () {
  return (
    <nav className="card-footer container bg-dark text-primary w-100 h-100">
      <div className="container-fluid">
        <a className="navbar-brand container-fluid justify-content-center text-white" href="#">
        Copyright @ your web 2023
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-flex justify-content-end "
          id="navbarNav"
        ></div>
      </div>
    </nav>
    //      <div class=" card-footer container bg-dark mx-5 text-primary">
    //   <nav class="navbar navbar-expand-lg bg-body-tertiary">
    //     <div class="container-fluid">
    //       <a class="navbar-brand" href="#">Navbar</a>
    //     </div>
    //   </nav>
    // </div>
  );
};
export default Footer;
