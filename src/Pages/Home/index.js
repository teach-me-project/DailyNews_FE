/** @format */

import gunung from './components/images/gunung.jpg';
import candi from './components/images/candi.jpg';
import hutan from './components/images/Hutan.jpeg';
import sawah from './components/images/sawah.jpg';
import burung from './components/images/burung.jpg';
import indo from './components/images/indo.jpg';
import jakarta from './components/images/kotaJakarta.jpg';
import Navbar from '../../components/components/Navbar';
// import FooterNew from "./components/components/FooterNew"
import Footer from '../../components/components/Footer';
import { useEffect, useState } from 'react';
import { GetPost } from '../../Redux/Actions/Postingan';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useSearchParams } from 'react-router-dom';
import { Loading, EmptyState } from '../../helper/WaitingState';
import { GetPage } from '../../Redux/Actions/Postingan(page)';
import { useNavigate } from 'react-router-dom';
import { useParams, Link } from 'react-router-dom';
import ads from './components/images/sprite.png';
import wa from './components/images/wa.svg';
import instagram from './components/images/ig.svg';
import youtube from './components/images/youtube.svg';
import snap from './components/images/snap.svg';
import twitter from './components/images/tw.svg';
import massenger from './components/images/fb_ms.svg';
import gmail from './components/images/gmail.svg';

const Home = () => {
	const dispatch = useDispatch();
	const [query, setQuery] = useSearchParams();
	const [paginate, setPaginate] = useState({
		limit: 100,
		page: 1,
		order_by: 'post_title',
		sort: 'ASC',
	});

	let navigate = useNavigate();
	const [params, setparams] = useSearchParams();
	const [filter, setFilter] = useState({ order_by: 'post_title', sort: 'ASC' });
	const [refetch, setRefecth] = useState(false);

	useEffect(() => {
		dispatch(
			GetPage(paginate.limit, paginate.page, paginate.order_by, paginate.sort)
		);
	}, [paginate, filter, refetch]);

	const { data, error, loading } = useSelector((state) => state.page);
	useParams(data.post_id);

	let totalPages = [5];
	console.log(totalPages, 'total page saat ini');

	if (loading) {
		return <Loading />;
	}
	if (error) {
		return <EmptyState />;
	}

	const handlePaginate = (page) => {
		setPaginate((prevState) => ({ ...prevState, page }));
		query.set('page', page);
		setQuery(query);
	};

	const handleFilter = async (e) => {
		e.preventDefault();
		dispatch(
			GetPost(paginate.limit, paginate.page, paginate.order_by, paginate.sort)
		);
		setRefecth(!refetch);
	};

	return (
		<>
			<Navbar />
			<hr />
			<div className='flex flex-col mt-5'>
				<div className='flex flex-row ml-9 '>
					<div className='flex flex-col w-[700px] hover:bg-transparent hover:bg-black'>
						<img className='w-[700px]' src={jakarta} />
						<div className='text-black'>
							{/* mt-7 delete */}
							<h1 className='font-extrabold text-3xl w-auto mt-7'>
								Remaining Determaining Few Her Two Cordially Marketing
							</h1>
							<p className='mt-5'>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book. It has
								survived not
							</p>
							<p className='mt-9 font-medium text-gray-500'>
								Desember 25, 2022
							</p>
						</div>
					</div>
					<div className='flex flex-col ml-9'>
						<div className=''>
							<img className='w-[300px]' src={candi} />

							<h1 className='font-bold w-[300px] mt-3'>
								Breakfast Met Certainty And Fullfiled Property Led
							</h1>
							<p className='mt-9 text-gray-500 font-medium'>January 25, 2022</p>
						</div>

						<div className='mt-9'>
							<img className='w-[300px]' src={candi} />
							<h1 className='font-bold w-[300px] mt-3'>
								Breakfast Met Certainty And Fullfiled Property Led
							</h1>
							<p className='mt-9 text-gray-500 font-medium'>
								September 25, 2022
							</p>
						</div>
					</div>
					<div className='flex flex-col ml-9'>
						<img className='w-[300px] h-[500px]' src={indo} />
						<h1 className='font-bold w-[300px] mt-3'>
							Breakfast Met Certainty And Fullfiled Property Led
						</h1>
						<p className='mt-9 text-gray-500 font-medium'>September 25, 2022</p>
						{/* <div className="btn-group">
                            <input type="radio" name="options" data-title="1" className="btn" />
                            <input type="radio" name="options" data-title="2" className="btn" checked />
                            <input type="radio" name="options" data-title="3" className="btn" />
                            <input type="radio" name="options" data-title="4" className="btn" />
                        </div> */}

						<div className='mt-10'>
							<hr className='h-1 bg-gray-600 rounded-xl' />
							<div className='ml-5 mt-5'>
								<h1 className='font-extrabold text-blue-700 text-2xl'>
									Tag Terpopular
								</h1>
								<p className='mt-2 font-bold'>
									<span className='font-extrabold text-xl text-gray-400'>
										#
									</span>{' '}
									Save Sandi
								</p>
								<p className='mt-2 font-bold'>
									<span className='font-extrabold text-xl text-gray-400'>
										#
									</span>{' '}
									Citayam Fashion Week
								</p>
								<p className='mt-2 font-bold'>
									<span className='font-extrabold text-xl text-gray-400'>
										#
									</span>{' '}
									TNI tembak TNI
								</p>
								<p className='mt-2 font-bold'>
									<span className='font-extrabold text-xl text-gray-400'>
										#
									</span>{' '}
									Polisi tembak Polisi
								</p>
							</div>
						</div>
					</div>
				</div>
				<br />
				<br />
				<hr />

				<div className='flex flex-row ml-10 mt-10'>
					<button className='bg-black text-white px-1 border-2 border-black w-80 text-xl'>
						What's New!
					</button>
					<form className='ml-10 py-2 font-bold'>
						<select
							name='search'
							id='search'
							onChange={(e) => {
								setPaginate((prevData) => ({
									...prevData,
									order_by: e.target.value,
								}));
								handleFilter();
							}}
						>
							{paginate.order_by == 'post_title' ? (
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
								setPaginate((prevData) => ({
									...prevData,
									sort: e.target.value,
								}));
								handleFilter();
							}}
						>
							{paginate.sort == 'ASC' ? (
								<>
									<option value='ASC'>Z-A</option>
									<option value='DESC'>A-Z</option>
								</>
							) : (
								<>
									<option value='DESC'>A-Z</option>
									<option value='ASC'>Z-A</option>
								</>
							)}
						</select>
					</form>
					<form>
						<input
							className='m-5'
							type='text'
							placeholder=''
							onChange={(e) => {
								setPaginate((prevState) => ({
									...prevState,
									limit: e.target.value,
								}));
							}}
						/>
					</form>
				</div>

				<div className='flex flex-row justify-between'>
					<div>
						{data.loading ? (
							<Loading />
						) : (
							<div className='flex flex-col ml-10 mb-20'>
								{!data.length ? (
									<EmptyState />
								) : (
									data.map((item) => {
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
													<p className='mt-5 text-justify'>
														{`${item.post_fill}`}
													</p>
													<p className='mt-5 text-justify'>
														{`${item.post_category}`}
													</p>
													<p className='mt-20 text-gray-500'>{`${item.created_at.slice(
														0,
														10
													)
													}`}</p>
													{/* <button className="px-2 py-2 text-white bg-black w-24 rounded-md">details</button> */}
													<Link to={`/article/${item.post_id}`}>
														see more..
													</Link>
												</div>
											</div>
										);
									})
								)}
								{/* <div className="flex flex-row mt-10">
                                <img className="w-80 h-60" src={hutan} />
                            <div className="flex flex-col ml-10 w-[600px]">
                                <h1 className="font-extrabold text-xl">
                                Exquistie Admitting Cordially September Newspapper
                                </h1>
                                <p className="mt-5 text-justify">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a
                                type specimen book. It has survived not
                                </p>
                                                    <p className="mt-20 text-gray-500">Desember 25, 2022</p>
                                                </div>
                            </div>
                            <div className="flex flex-row mt-10">
                                <img className="w-80 h-60" src={hutan} />
                                <div className="flex flex-col ml-10 w-[600px]">
                                    <h1 className="font-extrabold text-xl">
                                    Exquistie Admitting Cordially September Newspapper
                                    </h1>
                                    <p className="mt-5 text-justify">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a
                                    type specimen book. It has survived not
                                    </p>
                                    <p className="mt-20 text-gray-500">Desember 25, 2022</p>
                                </div>
                            </div>
                            <div className="flex flex-row mt-10">
                                <img className="w-80 h-60" src={hutan} />
                                <div className="flex flex-col ml-10 w-[600px]">
                                    <h1 className="font-extrabold text-xl">
                                    Exquistie Admitting Cordially September Newspapper
                                    </h1>
                                    <p className="mt-5 text-justify">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a
                                    type specimen book. It has survived not
                                    </p>
                                    <p className="mt-20 text-gray-500">Desember 25, 2022</p>
                                </div>
                            </div> */}
								<div className='pagination mt-10 flex justify-center'>
									{totalPages.map((item, index) => {
										return (
											<button
												className={`ml-3 btn ${
													paginate.page === index + 1
														? `btn-before`
														: `btn-after`
												}`}
												onClick={() => handlePaginate(index + 1)}
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
						</div>

						<div className='mt-20 snap-y mb-10 mr-3'>
							<h1 className='font-extrabold text-lg divider w-full'>
								POST POPULAR
							</h1>
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
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
