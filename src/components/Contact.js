import { Container, Row, Col } from 'react-bootstrap'
import contactImg from '../assets/img/coder-cartoon.png'
import 'animate.css'
import TrackVisibility from 'react-on-screen'
import styled from 'styled-components'
import FormContact from './FormContact'

export const Contact = () => {
	return (
		<Wrapper className='contact' id='connect'>
			<Container>
				<Row className='align-items-center'>
					<Col size={12} md={6}>
						<TrackVisibility>
							{({ isVisible }) => (
								<img
									className={
										isVisible
											? 'animate__animated animate__zoomIn'
											: ''
									}
									src={contactImg}
									alt='Contact Us'
								/>
							)}
						</TrackVisibility>
					</Col>
					<Col size={12} md={6}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
									className={
										isVisible
											? 'animate__animated animate__fadeIn'
											: ''
									}
								>
									<h2>Leave me a message</h2>
									<FormContact />
									<div className='contact-info'>
										<h4>Or contact me via: </h4>
										<h5>
											<a href='mailto:phamvanbien@gmail.com'>
												Email: bienpham.dev@gmail
											</a>
										</h5>
										<h5>
											<a href='tel:+84377709539'>Phone: 0377709539</a>
										</h5>
									</div>
								</div>
							)}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	@media only screen and (min-width: 600px) {
		height: 100vh;
	}

	img {
		animation: sideway 2s linear infinite;
	}
	@keyframes sideway {
		0% {
			transform: translateX(-30px);
		}
		50% {
			transform: translateX(30px);
		}
		100% {
			transform: translateX(-30px);
		}
	}
	a {
		text-decoration: none;
		color: black;
	}
	a:hover {
		text-decoration: underline;
		color: yellowgreen;
	}
	.contact-info {
		color: black;
		max-width: 500px;
		margin-top: 50px;
		border: 2px solid white;
		background: white;
		padding-left: 10%;
		border-radius: 5px;
		opacity: 0.5;
	}
`
