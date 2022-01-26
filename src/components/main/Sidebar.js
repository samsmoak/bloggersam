import React from "react";
import { useEffect, useState } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { useContext } from "react";
import API from "../API";

function Sidebar() {
	const [cats, setCat] = useState([]);
	const { user, dispatch } = useContext(Context);
	const PF = "http://localhost:5000/images/";
	const { url } = API.get("s3Url", async (req, res) => {
		await res.json();
	});
	useEffect(() => {
		const getCats = async () => {
			const res = await API.get("/categories");
			setCat(res.data);
			// console.log(res);
		};
		getCats();
	}, []);
	return (
		<div>
			<div className='px-3 w-80 border-2 border-gray-100 bg-white '>
				<h4 className='w-full text-center  py-1 bg-bluelight-600 text-gray-700 mt-6 '>
					About me
				</h4>
				<div className='w-full flex justify-center mt-6 mb-4'>
					<div className='h-52 w-52 bg-paper-200 rounded-full overflow-hidden '>
						<img
							src={user && url + user.profilePic}
							alt=''
							className='w-52 h-52 object-cover'
						/>
					</div>
				</div>
				<div className='flex  flex-col items-center space-y-3 w-full'>
					<p className='text-center'>
						typesetting industry. Lorem Ipsum has been the industry's standard
						dummy text ever since the 1500s, when an unknown printer took a
						galley of type and scrambled it to make a type specimen book. It has
						survived not only five centuries, but also the leap into electronic
					</p>
					<h6 className='border-t-2 border-b-2 border-gray-400 px-10'>
						Category
					</h6>
					<div className='w-full  flex justify-center'>
						<div className='grid grid-cols-1 space-x-4  '>
							{cats.map((c) => {
								return (
									<Link
										to={`/?cat=${c.name}`}
										style={{ textDecoration: "none" }}
										className='text-black w-full '
									>
										<h4 className='text-center'>{c.name}</h4>
									</Link>
								);
							})}
						</div>
					</div>
					<h6 className='border-t-2 border-b-2 border-gray-400 px-10'>
						Follow Us
					</h6>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
