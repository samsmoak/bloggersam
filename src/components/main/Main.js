import React from "react";
import { useEffect, useState } from "react";
import Header from "../Header";
import Posts from "./Posts";
import Sidebar from "./Sidebar";
import axios from "axios";
import API from "../API";
import { useLocation } from "react-router";
import { Carousel } from "react-bootstrap";
import Img from "../../Data/sampic.jpg";
import { Imagesdata } from "../../Data/imagesdata";

function Main() {
	const [posts, setPosts] = useState([]);
	const { search } = useLocation();
	const [index, setIndex] = useState(0);
	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};
	// console.log(location);

	useEffect(() => {
		const fetchPosts = async () => {
			const res = await API.get("/posts" + search);
			setPosts(res.data);
			// console.log(res);
		};
		fetchPosts();
	}, [search]);
	return (
		<div className=''>
			<div className=' w-screen h-bigx flex justify-center items-center'>
				<div className='grid grid-cols-6 '>
					<div className=' col-start-2 col-span-4 '>
						<Carousel
							activeIndex={index}
							onSelect={handleSelect}
							className='mt-14 border-b-2 hover:border-blue-600  '
							// onChange={setInView}
							variant='dark'
							images={Imagesdata}
						>
							<Carousel.Item hover={"pause"} className='p-10 mt-14 ml-10'>
								<img
									className='d-block h-small-2 w-full'
									src='https://images.unsplash.com/photo-1638914962352-3bdfa3cd1f78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2353&q=80'
									alt='Second slide'
								/>
								{/* <div className='bg-mamba-100'></div> */}

								<Carousel.Caption className=''>
									lorem20Praesent commodo cursus magna, vel scelerisque
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item hover={"pause"} className='p-10 mt-8 '>
								<img
									className='d-block h-small-2 w-full'
									src='https://images.unsplash.com/photo-1638914962385-66e892b6c304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2246&q=80'
									alt='Second slide'
								/>
								{/* <div className='bg-mamba-100'></div> */}

								<Carousel.Caption className=''>
									lorem20Praesent commodo cursus magna, vel scelerisque
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item hover={"pause"} className='p-10 mt-16'>
								<img
									className='d-block h-small-2 w-full'
									src='https://images.unsplash.com/photo-1445633743309-b60418bedbf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80'
									alt='Third slide'
								/>
								{/* <div className='bg-mamba-100'></div> */}

								<Carousel.Caption className=''>
									lorem20Praesent commodo cursus magna, vel scelerisque
								</Carousel.Caption>
							</Carousel.Item>
						</Carousel>
					</div>
				</div>
			</div>

			<div className='w-screen '>
				{/* <div className='grid grid-cols-1 md:grid-col-2 lg:grid-cols-4 '>
					<div className='col-span-1 lg:col-span-3'>
						<Posts posts={posts} />
					</div>
					<div className='col-span-1  lg:col-span-1 hidden lg:block '>
						<div className='sticky h-96 top-48'>
							<Sidebar />
						</div>
					</div>
				</div> */}
				<div className='grid grid-cols-1 md:grid-col-2 lg:grid-cols-4 '>
					<div className='col-span-1 lg:col-span-3'>
						<Posts posts={posts} />
					</div>
					<div className='col-span-1  lg:col-span-1 hidden lg:block '>
						{/* sticky h-96 top-48 */}
						<div className=''>
							<Sidebar />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Main;
