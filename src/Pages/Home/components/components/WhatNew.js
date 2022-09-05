import React from 'react'
import { useEffect, useState } from 'react';
import { GetPost } from '../../../../Redux/Actions/Postingan';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useSearchParams } from 'react-router-dom';
import { Loading, EmptyState } from '../../../../helper/WaitingState';
// import { GetPage } from '../../../../Redux/Actions/Postingan(page)';
import { useNavigate } from 'react-router-dom';
import { useParams, Link } from 'react-router-dom';
import ads from '../images/sprite.png';
import wa from '../images/wa.svg';
import instagram from '../images/ig.svg';
import youtube from '../images/youtube.svg';
import snap from '../images/snap.svg';
import twitter from '../images/tw.svg';
import massenger from '../images/fb_ms.svg';
import gmail from '../images/gmail.svg';
import hutan from '../images/Hutan.jpeg';
import { GetRecent } from '../../../../Redux/Actions/RecentPost';
import { GetPopular } from '../../../../Redux/Actions/PopularPost';

const WhatNew = () => {
	const dispatch = useDispatch();
	const [query, setQuery] = useSearchParams();
	const [filter, setFilter] = useState({
		limit: '',
		page: 1,
		order_by: '',
		sort: '',
	});

	let navigate = useNavigate();
	const [refetch, setRefecth] = useState(false);

	useEffect(() => {
		dispatch(
			GetPost(filter)
		);
	}, [refetch, filter]);

	const { data: data2 } = useSelector((state) => state.recent)
	console.log(data2, 'cek data2 di what new')
	useEffect(() => {
		dispatch(GetRecent())
	}, [])

	const { data: data3 } = useSelector((state) => state.popular)
	console.log(data3, 'cek data3 popular')
	useEffect(() => {
		dispatch(GetPopular())
	}, [])

	const { data, error, loading } = useSelector((state) => state.postingan);
	useParams(data.post_id);

	let totalPages = Array(data?.totalpage).fill() ?? []
	console.log(totalPages, 'total page saat ini');

	if (loading) {
		return <Loading />;
	}
	if (error) {
		return <EmptyState />;
	}

	const handlePaginate = (index) => {
		setFilter((prevState) => ({ ...prevState, page: index + 1 }));
		query.set(`/home?page=${index + 1}`);
		setQuery(query);
	};

	// const handlePaginate = (index) => {
	//     setFilter(prevData => ({
	//         ...prevData, page: index + 1
	//     }));
	//     query.set(`/home?page=${index + 1}`)
	// 	setQuery(query)
	// };


	// const handleFilter = async (e) => {
	// 	e.preventDefault();
	// 	dispatch(
	// 		GetPost(filter)
	// 	);
	// 	setRefecth(!refetch);
	// };

	return (
		<>
			<div className='flex flex-row ml-10 mt-10 items-center'>
				<button className='bg-black text-white px-1 border-2 border-black w-80 text-xl'>
					What's New!
				</button>
				<form className='ml-10 py-2 font-bold'>
					<select
						name='search'
						id='search'
						onInput={(e) => {
							setFilter(prevData => ({
								...prevData,
								order_by: e.target.value,
							}))
						}}
					>
						{filter.order_by == 'post_title' ? (
							<>
								<option value='post_title'>Title</option>
								<option value='created_at'>Last Added</option>
							</>
						) : (
							<>
								<option value='created_at'>Last Added</option>
								<option value='post_title'>Title</option>
							</>
						)}
					</select>
				</form>
				<form className='ml-10 py-2 font-bold'>
					<select
						name='search'
						id='search'
						onChange={(e) => {
							setFilter((prevData) => ({
								...prevData,
								sort: e.target.value,
							}));
						}}
					>
						{filter.sort == 'ASC' ? (
							<>
								<option value='ASC'>A-Z</option>
								<option value='DESC'>Z-A</option>
							</>
						) : (
							<>
								<option value='DESC'>Z-A</option>
								<option value='ASC'>A-Z</option>
							</>
						)}
					</select>
				</form>
				<div className='items-center'>
					<input
						type='text'
						placeholder='limit...'
						value={filter.limit}
						className='w-25 h-8 ml-6 input input-bordered text-black'
						onInput={(e) => {
							setFilter((prevData) => ({
								...prevData,
								limit: e.target.value,
							}));
						}}
					/>
				</div>
			</div>

			<div className='flex flex-row justify-between'>
				<div>
					{data?.result?.loading ? (
						<Loading />
					) : (
						<div className='flex flex-col ml-10 mb-20'>
							{!data?.result?.length ? (
								<EmptyState />
							) : (
								data?.result?.map((item) => {
									// useParams(item.post_id)
									return (
										<div className='flex flex-row mt-10'>
											<img
												className='w-80 h-60'
												src={`http://localhost:3289/upload/${item.post_cover}`}
											/>
											<div className='flex flex-col ml-10 w-[600px]'>
												<h1 className='font-extrabold text-xl'>
													{`${item.post_title}`}
												</h1>
												<p className='mt-5 mr-20 text-justify'>
													{`${item.post_fill.slice(0, 100)}...`}
												</p>
												<p className='mt-5 text-justify'>
													{`${item.post_category}`}
												</p>
												<p className='mt-14 text-gray-500'>{`${item.created_at.slice(
													0,
													10
												)
													}`}</p>
												{/* <button className="px-2 py-2 text-white bg-black w-24 rounded-md">details</button> */}
												<Link to={`/viewArticle/${item.post_id}`}>
													see more..
												</Link>
											</div>
										</div>
									);
								})
							)}
							<div className='pagination mt-10 flex justify-center'>
								{totalPages.map((item, index) => {
									return (
										<button
											onClick={() => (handlePaginate(index))} className={`${data.page === index + 1 ? `bg-black mr-1 ml-1 text-white px-4 py-2.5 rounded border border-gray-300 hover:bg-gray-800` : ` bg-black mr-1 ml-1 text-white px-4 py-2.5 rounded border border-gray-300 hover:bg-gray-800`}`}
										>
											{index + 1}
										</button>
									);
								})}
							</div>
						</div>
					)}
				</div>

				<div className='mr-7 mt-5'>
					<div className='flex flex-col'>
						<img className='w-96 bg-black' src={ads} />
						<p className='mt-2 font-bold text-lg'>
							Advertise contact us and follow us
						</p>
						<div className='flex flex-row mt-3'>
							<img className='w-9 h-9 ml-3' src={wa} />
							<img className='w-9 h-9 ml-3' src={instagram} />
							<img className='w-9 h-9 ml-3' src={gmail} />
							<img className='w-9 h-9 ml-3' src={snap} />
							<img className='w-9 h-9 ml-3' src={twitter} />
							<img className='w-9 h-9 ml-3' src={youtube} />
							<img className='w-9 h-9 ml-3' src={massenger} />
						</div>
					</div>
					<div className='mt-20 snap-y mb-10 mr-3'>
						<h1 className='font-extrabold text-lg divider w-full'>
							RECENT POST
						</h1>
						<div>
							{data2?.result?.loading ? (
								<Loading />
							) : (
								<div className='flex flex-col mt-9 ml-9'>
									{!data2?.result?.length ? (
										<EmptyState />
									) : (
										data2?.result?.map((item) => {
											// useParams(item.post_id)
											return (
												<Link to={`/viewArticle/${item.post_id}`}>
													<div className='flex flex-row mt-10'>
														<div className='w-22'>
															<img className='w-40 h-28' src={`http://localhost:3289/upload/${item.post_cover}`} />
														</div>
														<div className='flex flex-col ml-5 w-44'>
															<h1 className='font-extrabold text-xs'>
																{`${item.post_title}`}
															</h1>
															<p className='mt-9 text-gray-500 text-xs'>
																{`${item.created_at.slice(
																	0,
																	10
																)
																	}`}
															</p>
														</div>
													</div>
												</Link>
											);
										})
									)}
								</div>
							)}
						</div>

						{/* <div className='flex flex-row mt-9 ml-9'>
							<div className='w-22'>
								<img className='w-40 h-28' src={hutan} />
							</div>
							<div className='flex flex-col ml-5 w-44'>
								<h1 className='font-extrabold text-xs'>
									Exquistie Admitting Cordially September Newspapper
								</h1>
								<p className='mt-9 text-gray-500 text-xs'>
									Desember 25, 2022
								</p>
							</div>
						</div> */}

						{/* <div className='flex flex-row mt-9 ml-9'>
							<div className='w-22'>
								<img className='w-40 h-28' src={hutan} />
							</div>
							<div className='flex flex-col ml-5 w-44'>
								<h1 className='font-extrabold text-xs'>
									Exquistie Admitting Cordially September Newspapper
								</h1>
								<p className='mt-9 text-gray-500 text-xs'>
									Desember 25, 2022
								</p>
							</div>
						</div>
						<div className='flex flex-row mt-9 ml-9'>
							<div className='w-22'>
								<img className='w-40 h-28' src={hutan} />
							</div>
							<div className='flex flex-col ml-5 w-44'>
								<h1 className='font-extrabold text-xs'>
									Exquistie Admitting Cordially September Newspapper
								</h1>
								<p className='mt-9 text-gray-500 text-xs'>
									Desember 25, 2022
								</p>
							</div>
						</div>

						<div className='flex flex-row mt-9 ml-9'>
							<div className='w-22'>
								<img className='w-40 h-28' src={hutan} />
							</div>
							<div className='flex flex-col ml-5 w-44'>
								<h1 className='font-extrabold text-xs'>
									Exquistie Admitting Cordially September Newspapper
								</h1>
								<p className='mt-9 text-gray-500 text-xs'>
									Desember 25, 2022
								</p>
							</div>
						</div>

						<div className='flex flex-row mt-9 ml-9'>
							<div className='w-22'>
								<img className='w-40 h-28' src={hutan} />
							</div>
							<div className='flex flex-col ml-5 w-44'>
								<h1 className='font-extrabold text-xs'>
									Exquistie Admitting Cordially September Newspapper
								</h1>
								<p className='mt-9 text-gray-500 text-xs'>
									Desember 25, 2022
								</p>
							</div>
						</div> */}
					</div>

					<div className='mt-20 snap-y mb-10 mr-3'>
						<h1 className='font-extrabold text-lg divider w-full'>
							POST POPULAR
						</h1>
						<div>
							{data3?.result?.loading ? (
								<Loading />
							) : (
								<div className='flex flex-col mt-9 ml-9'>
									{!data3?.result?.length ? (
										<EmptyState />
									) : (
										data3?.result?.map((item) => {
											// useParams(item.post_id)
											return (
												<Link to={`/viewArticle/${item.post_id}`}>
													<div className='flex flex-row mt-10'>
														<div className='w-22'>
															<img className='w-40 h-28' src={`http://localhost:3289/upload/${item.post_cover}`} />
														</div>
														<div className='flex flex-col ml-5 w-44'>
															<h1 className='font-extrabold text-xs'>
																{`${item.post_title}`}
															</h1>
															<p className='mt-9 text-gray-500 text-xs'>
																{`${item.created_at.slice(
																	0,
																	10
																)
																	}`}
															</p>
														</div>
													</div>
												</Link>
											);
										})
									)}
								</div>
							)}
						</div>

						{/* <div className='flex flex-row mt-9 ml-9'>
							<div className='w-22'>
								<img className='w-40 h-28' src={hutan} />
							</div>
							<div className='flex flex-col ml-5 w-44'>
								<h1 className='font-extrabold text-xs'>
									Exquistie Admitting Cordially September Newspapper
								</h1>
								<p className='mt-9 text-gray-500 text-xs'>
									Desember 25, 2022
								</p>
							</div>
						</div> */}

						{/* <div className='flex flex-row mt-9 ml-9'>
							<div className='w-22'>
								<img className='w-40 h-28' src={hutan} />
							</div>
							<div className='flex flex-col ml-5 w-44'>
								<h1 className='font-extrabold text-xs'>
									Exquistie Admitting Cordially September Newspapper
								</h1>
								<p className='mt-9 text-gray-500 text-xs'>
									Desember 25, 2022
								</p>
							</div>
						</div>
						<div className='flex flex-row mt-9 ml-9'>
							<div className='w-22'>
								<img className='w-40 h-28' src={hutan} />
							</div>
							<div className='flex flex-col ml-5 w-44'>
								<h1 className='font-extrabold text-xs'>
									Exquistie Admitting Cordially September Newspapper
								</h1>
								<p className='mt-9 text-gray-500 text-xs'>
									Desember 25, 2022
								</p>
							</div>
						</div>

						<div className='flex flex-row mt-9 ml-9'>
							<div className='w-22'>
								<img className='w-40 h-28' src={hutan} />
							</div>
							<div className='flex flex-col ml-5 w-44'>
								<h1 className='font-extrabold text-xs'>
									Exquistie Admitting Cordially September Newspapper
								</h1>
								<p className='mt-9 text-gray-500 text-xs'>
									Desember 25, 2022
								</p>
							</div>
						</div>

						<div className='flex flex-row mt-9 ml-9'>
							<div className='w-22'>
								<img className='w-40 h-28' src={hutan} />
							</div>
							<div className='flex flex-col ml-5 w-44'>
								<h1 className='font-extrabold text-xs'>
									Exquistie Admitting Cordially September Newspapper
								</h1>
								<p className='mt-9 text-gray-500 text-xs'>
									Desember 25, 2022
								</p>
							</div>
						</div> */}
					</div>
				</div>
			</div>
		</>
	)
}

export default WhatNew