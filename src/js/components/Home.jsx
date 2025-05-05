import { useState } from "react";
import React  from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [ selectedColor, setSelectedColor ] = useState("");
	return (
		<div className="traffic-light">
			
            <div
			    onClick={() => setSelectedColor("R")}
			    className={
					"light R"+( (selectedColor === "R")? " glow" : "")
			    }></div>
			<div 
			    onClick={()=> setSelectedColor("A")}
			    className={
					"light A"+( (selectedColor === "A")? " glow" : "")

				}></div>
			<div 
			    onClick={() => setSelectedColor("V")}
			    className={
					"light V"+( (selectedColor === "V")? " glow" : "")

				}></div>
			
			
		</div>
	);
};

export default Home;