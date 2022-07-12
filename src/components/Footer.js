import { Container, Row, Col } from 'react-bootstrap'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

export const Footer = () => {
	return (
		<footer className='footer'>
			<Container>
				<Row className='align-items-center'>
					<Col className='text-center text-sm-end'>
						<div className='social-icon'>
							<a
								href='https://www.linkedin.com/in/bien-pham-b1621884/</div>'
								target='_blank'
								rel='noreferrer'
							>
								<img src={navIcon1} alt='Icon' />
							</a>
							<a
								href='https://www.facebook.com/bienpham.dev'
								target='_blank'
								rel='noreferrer'
							>
								<img src={navIcon2} alt='Icon' />
							</a>
							<a
								href='https://www.instagram.com/'
								target='_blank'
								rel='noreferrer'
							>
								<img src={navIcon3} alt='Icon' />
							</a>
						</div>
						<h6>&copy;2022. bienpham.dev@gmail.com</h6>
					</Col>
				</Row>
			</Container>
		</footer>
	)
}
