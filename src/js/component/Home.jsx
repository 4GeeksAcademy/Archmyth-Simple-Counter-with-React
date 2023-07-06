import React from "react";

//include images into your bundle
import SecondsCounter from "./SecondsCounter";
import CountDown from "./CountDown";

//create your first component
const Home = () => {
	return (
		<div>
		<SecondsCounter/>
		<CountDown/>
		</div>
	);
};

export default Home;