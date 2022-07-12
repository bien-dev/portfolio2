import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import headerImg from '../assets/img/coder2-removebg.png'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import 'animate.css'
import TrackVisibility from 'react-on-screen'
import styled from 'styled-components'
import { Nav } from 'react-bootstrap'

export const Banner = () => {
	const [loopNum, setLoopNum] = useState(0)
	const [isDeleting, setIsDeleting] = useState(false)
	const [text, setText] = useState('')
	const [delta, setDelta] = useState(300 - Math.random() * 100)
	const toRotate = ['Web Developer', 'React Coder', 'Web Designer']
	const period = 1000

	useEffect(() => {
		let ticker = setInterval(() => {
			tick()
		}, delta)

		return () => {
			clearInterval(ticker)
		}
	}, [text])

	const tick = () => {
		let i = loopNum % toRotate.length
		let fullText = toRotate[i]
		let updatedText = isDeleting
			? fullText.substring(0, text.length - 1)
			: fullText.substring(0, text.length + 1)

		setText(updatedText)

		if (isDeleting) {
			setDelta((prevDelta) => prevDelta / 2)
		}

		if (!isDeleting && updatedText === fullText) {
			setIsDeleting(true)
			setDelta(period)
		} else if (isDeleting && updatedText === '') {
			setIsDeleting(false)
			setLoopNum(loopNum + 1)
			setDelta(500)
		}
	}

	return (
		<Wrapper>
			<section className='banner' id='home'>
				<Container>
					<Row className='align-items-center'>
						<Col xs={12} md={6} xl={7}>
							<TrackVisibility>
								{({ isVisible }) => (
									<div
										className={
											isVisible
												? 'animate__animated animate__fadeIn hover'
												: 'hover'
										}
									>
										<span className='tagline'>
											Welcome to my Portfolio
										</span>
										<h1 className='hover'>
											<span>Hi! </span>
											<span>I'm </span>
											<span>Bien </span>
											<span>Pham </span>
											<span
												className='txt-rotate'
												dataPeriod='1000'
												data-rotate='[ "Web Developer", "React Coder", "Web Designer" ]'
											>
												<span className='wrap'>{text}</span>
											</span>
										</h1>
										<p>
											Hi there, glad to have you here. <br />I love
											coding and spend most of my time, every day
											learning front-end development. I hope to become
											a fullstack developer in the near future. Now I
											am seeking an entry level programming job.
										</p>
										<Nav.Link href='#connect'>
											<button className='hover'>
												<a
													href='#connect'
													style={{
														textDecoration: 'none',
														color: 'white',
													}}
												>
													<span>
														Contact me
														<ArrowRightCircle size={25} />
													</span>
												</a>
											</button>
										</Nav.Link>
									</div>
								)}
							</TrackVisibility>
						</Col>
						<Col xs={12} md={6} xl={5}>
							<TrackVisibility>
								{({ isVisible }) => (
									<div
										className={
											isVisible
												? 'animate__animated animate__zoomIn flex'
												: 'flex'
										}
									>
										<img src={headerImg} alt='Header Img' />
									</div>
								)}
							</TrackVisibility>
						</Col>
					</Row>
				</Container>
			</section>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	@media (max-width: 900px) {
		h1 {
			font-size: 40px;
		}
		img {
			width: 70%;
			margin: auto;
		}
		.flex {
			display: flex;
		}
		.tagline {
			margin-top: 20px;
		}
	}
	.hover span:hover {
		cursor: pointer;
		color: yellowgreen;
	}
	h1 {
		color: white;
	}
	.hover span {
		transition: color 300;
	}
`
