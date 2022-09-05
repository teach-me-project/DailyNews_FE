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
import WhatNew from './components/components/WhatNew';


const Home = () => {
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

				<WhatNew />
			</div>
			<Footer />
		</>
	);
};

export default Home;
