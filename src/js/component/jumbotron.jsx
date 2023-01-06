import React from "react"; //Importar libreria de React
//2. Crear el componente
const Jumbotron = function () {
  return (
    <div className="jumbotron container bg-secondary bg-opacity-10">
      <div className="jumbotron">
        <h1 className="display-4">A warm, welcome!</h1>
        <p className="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eos
          ullam exercitationem laudantium rerum possimus illum sint quidem
          corporis unde earum culpa, porro dolores quis amet laborum nesciunt
          consectetur! Labore.
        </p>
        <div className="d-flex align-items:start py-3 mx-3">
          <a className="btn btn-primary btn-lg " href="#" role="button">
            Call to action!
          </a>
        </div>
      </div>
    </div>
  );
};
export default Jumbotron;
