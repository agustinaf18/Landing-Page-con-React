import React from "react";
import Navbar from "./navbar.jsx"
import Jumbotron from "./jumbotron.jsx";
import Cards from "./cards.jsx";
import Footer from "./footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<div>
				<Jumbotron/>
				<div className="container-fluid row g-1 my-2">
					<div className="col-3"><Cards/></div>
					<div className="col-3"><Cards/></div>
					<div className="col-3"><Cards/></div>
					<div className="col-3"><Cards/></div>
				</div>
			</div>
			<div className=" w-100 h-100"><Footer/></div>
		</div>
	
	);
};

export default Home;
