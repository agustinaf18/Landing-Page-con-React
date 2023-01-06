import React from "react"; //Importar libreria de React
//2. Crear el componente
const Cards = function () {
  return (
    <div
      className="card mx-5 d-flex justify-content-center"
      style={{ width: "18rem" }}
    >
      <img
        src="https://turismolanzarote.com/wp-content/uploads/2017/03/Playas-PuertoDelCarmen-PlayaGrande-LR-5.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>

        <div className="card-footer">
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};
export default Cards;
