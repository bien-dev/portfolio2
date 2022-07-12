import html5 from '../assets/img/html5.png';
import css from '../assets/img/css.png';
import js from '../assets/img/Javascript.png';
import react from '../assets/img/react.png';
import tailwind from '../assets/img/tailwind.png';
import toeic from '../assets/img/toeic.png';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from '../assets/img/color-sharp.png';
import styled from 'styled-components';

export const Skills = () => {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 4,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 3,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 3,
		},
	};

	return (
		<Wrapper>
			<section className='skill' id='skills'>
				<div className='container'>
					<div className='row'>
						<div className='col-12'>
							<div className='skill-bx wow zoomIn'>
								<h2>Skills</h2>
								<p>
									Create websites with HTML, CSS, Javascript, React,
									Tailwind<br></br> I study and update new technology
									every day.
								</p>
								<div className='slider'>
									<Carousel
										responsive={responsive}
										infinite={true}
										className='owl-carousel owl-theme skill-slider'
									>
										<div className='item'>
											<img src={html5} alt='icon meter' />
											<h5>HTML</h5>
										</div>
										<div className='item'>
											<img src={css} alt='icon meter' />
											<h5>CSS</h5>
										</div>
										<div className='item'>
											<img src={js} alt='icon meter' />
											<h5>JavaScript</h5>
										</div>
										<div className='item'>
											<img src={react} alt='icon meter' />
											<h5>ReactJS</h5>
										</div>
										<div className='item'>
											<img src={toeic} alt='icon meter' />
											<h5>English 970 TOEIC</h5>
										</div>
										<div className='item'>
											<img src={tailwind} alt='icon meter' />
											<h5>Tailwind, Bootstrap</h5>
										</div>
									</Carousel>
								</div>
							</div>
						</div>
					</div>
				</div>
				<img
					className='background-image-left'
					src={colorSharp}
					alt='background gradient'
				/>
			</section>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	width: 100%;
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	img {
		height: 80px;
	}
	@media (min-width: 800px) {
		img {
			height: 180px;
		}
	}

	.slider {
		padding: 0;
		margin: 0;
	}
	@media (max-width: 600px) {
		h5 {
			font-size: 15px;
		}
		h2 {
			font-size: 35px;
		}
		.slider {
			width: 100%;
		}
	}
`;
