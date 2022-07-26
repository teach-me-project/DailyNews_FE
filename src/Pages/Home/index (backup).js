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

const Home = () => {
	const dispatch = useDispatch();
	const [query, setQuery] = useSearchParams();
	const [paginate, setPaginate] = useState({
		page: query.get('page') ?? 1,
		limit: 7,
		order_by: 'post_title',
		sort: 'ASC',
	});

	const [refetch, setRefecth] = useState(false);
	const [filter, setFilter] = useState({
		order_by: '',
		sort: '',
	});

	const handleFilter = () => {
		dispatch(GetPost(paginate));
		setRefecth(!refetch);
	};

	useEffect(() => {
		const { order_by, sort } = filter;
	}, [refetch, filter]);

	useEffect(() => {
		dispatch(GetPost(paginate));
	}, [paginate]);

	const { data, error, loading } = useSelector((state) => state.postingan);
	const datas = data.list;
	console.log(datas, 'cek data postingan');

	let totalPages = Array(data.totalpage).fill() ?? [];
	console.log(totalPages, 'total Page');

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

	return (
		<>
			<Navbar />
			<hr />
			<div className='flex flex-col mt-5'>
				<div className='flex flex-row ml-10 '>
					<div className='flex flex-col w-[700px]'>
						<img className='w-[700px]' src={jakarta} />
						<h1 className='font-extrabold text-3xl w-auto mt-7'>
							Remaining Determaining Few Her Two Cordially Marketing
						</h1>
						<p className='mt-5'>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not
						</p>
						<p className='mt-9 text-gray-500'>Desember 25, 2022</p>
					</div>
					<div className='flex flex-col ml-10'>
						<div className=''>
							<img className='w-[300px]' src={candi} />
							<h1 className='font-bold w-[300px] mt-3'>
								Berakfast Met Certainty And Fullfiled Property Led
							</h1>
							<p className='mt-9 text-gray-500'>January 25, 2022</p>
						</div>

						<div className='mt-10'>
							<img className='w-[300px]' src={candi} />
							<h1 className='font-bold w-[300px] mt-3'>
								Berakfast Met Certainty And Fullfiled Property Led
							</h1>
							<p className='mt-9 text-gray-500'>September 25, 2022</p>
						</div>
					</div>
					<div className='flex flex-col'>
						<img className='w-[300px] h-[500px] ml-10' src={indo} />
						{/* <div className="btn-group">
                            <input type="radio" name="options" data-title="1" className="btn" />
                            <input type="radio" name="options" data-title="2" className="btn" checked />
                            <input type="radio" name="options" data-title="3" className="btn" />
                            <input type="radio" name="options" data-title="4" className="btn" />
                        </div> */}
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
						{/* <label for="search" className="mr-3">Search </label> */}
						<select
							name='search'
							id='search'
							onChange={(e) => {
								setFilter((prevData) => ({
									...prevData,
									order_by: e.target.value,
								}));
							}}
						>
							<option
								value='Category'
								onClick={(e) => {
									setPaginate((prevData) => ({
										...prevData,
										order_by: 'post_title',
									}));
									handleFilter(e);
								}}
							>
								Name
							</option>
							<option
								value='Created at'
								onClick={(e) => {
									setPaginate((prevData) => ({
										...prevData,
										order_by: 'created_at',
									}));
									handleFilter(e);
								}}
							>
								Last Added
							</option>
						</select>
					</form>
					<form className='ml-10 py-2 font-bold'>
						{/* <label for="search" className="mr-3">Sort </label> */}
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
							<option
								value='Ascending'
								onClick={(e) => {
									setPaginate((prevData) => ({
										...prevData,
										sort: 'ASC',
									}));
									handleFilter(e);
								}}
							>
								A-Z
							</option>
							<option
								value='Descending'
								onClick={(e) => {
									setPaginate((prevData) => ({
										...prevData,
										sort: 'DESC',
									}));
									handleFilter(e);
								}}
							>
								Z-A
							</option>
						</select>
					</form>
					<form></form>

					{/* <div className="px-14 w-80">
                        <div className="form-control">
                            <input type="text" placeholder="Search" className="w-80 h-10 input input-bordered" />
                        </div>
                    </div> */}
				</div>

				<div className='flex flex-row justify-between'>
					<div>
						{datas.loading ? (
							<Loading />
						) : (
							<div className='flex flex-col ml-10 mb-20'>
								{!datas.length ? (
									<EmptyState />
								) : (
									datas.map((item) => {
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
													<p className='mt-20 text-gray-500'>{`${item.created_at}`}</p>
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
						<div>
							<img className='w-96 bg-black' src={burung} />
						</div>
						<div className='mt-20'>
							<h1 className='font-extrabold text-lg divider w-full'>
								RECENT POST
							</h1>
							<div className='flex flex-row mt-10 ml-10'>
								<div className='w-22'>
									<img className='w-40 h-28' src={hutan} />
								</div>
								<div className='flex flex-col ml-5 w-44'>
									<h1 className='font-extrabold text-xs'>
										Exquistie Admitting Cordially September Newspapper
									</h1>
									<p className='mt-10 text-gray-500 text-xs'>
										Desember 25, 2022
									</p>
								</div>
							</div>

							<div className='flex flex-row mt-10 ml-10'>
								<div className='w-22'>
									<img className='w-40 h-28' src={hutan} />
								</div>
								<div className='flex flex-col ml-5 w-44'>
									<h1 className='font-extrabold text-xs'>
										Exquistie Admitting Cordially September Newspapper
									</h1>
									<p className='mt-10 text-gray-500 text-xs'>
										Desember 25, 2022
									</p>
								</div>
							</div>
							<div className='flex flex-row mt-10 ml-10'>
								<div className='w-22'>
									<img className='w-40 h-28' src={hutan} />
								</div>
								<div className='flex flex-col ml-5 w-44'>
									<h1 className='font-extrabold text-xs'>
										Exquistie Admitting Cordially September Newspapper
									</h1>
									<p className='mt-10 text-gray-500 text-xs'>
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
