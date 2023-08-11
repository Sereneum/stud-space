import logo from './space_logo.svg'

const Preloader = () => {
	return (
			<div className="preloader">
							 <img
									alt=""
									src={logo}
									className='preloader_logo'/>
							{/* <img
									alt=""
									src={logo}
									className='preloader_logo_back'/> */}
			</div>
	);
};

export default Preloader;