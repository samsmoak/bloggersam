import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import Img from "../Data/sampic.jpg";
import { Imagesdata } from "../Data/imagesdata";

function Header(e) {
	const [index, setIndex] = useState(0);
	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};
	return (
		<div className='mt-24 w-screen  flex flex-col items-center justify-center'></div>
	);
}

export default Header;
