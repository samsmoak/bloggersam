import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

function Post({ post }) {
	const PF = "http://localhost:5000/images/";
	return (
		<div className='shadow-2xl rounded-lg border-b-2 hover:border-black '>
			<div className='   w-small2  '>
				<div className='h-80 w-full px-2 flex justify-center   overflow-hidden'>
					{post.photo && (
						<img src={PF + post.photo} alt='' className='h-80 w-small2  ' />
					)}
				</div>
				<div className='py-4 space-y-2 px-3'>
					<div>
						{post.categories.map((c) => {
							return (
								<h4 className='text-center w-full text-gray-400'>{c.name}</h4>
							);
						})}
						<Link to={`/post/${post._id}`} style={{ textDecoration: "none" }}>
							<h1 className='text-center w-full font-extrabold text-2xl text-gray-600 p-3  bg-bluelight-300 bg-opacity-70 hover:bg-opacity-100'>
								{post.title}
							</h1>
						</Link>
						<h4 className='text-center w-full text-gray-400'>
							{new Date(post.createdAt).toDateString()}
						</h4>
					</div>

					<p className='w-full text-gray-500 h-36 overflow-hidden '>
						{parse(post.desc)}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Post;
