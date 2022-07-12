import { useState, useEffect } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from '../assets/img/biendev-logo.png'

export const NavBar = () => {
	const [activeLink, setActiveLink] = useState('home')
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true)
			} else {
				setScrolled(false)
			}
		}

		window.addEventListener('scroll', onScroll)

		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	const onUpdateActiveLink = (value) => {
		setActiveLink(value)
	}

	return (
		<Navbar
			expand='md'
			className={scrolled ? 'scrolled' : ''}
			collapseOnSelect
		>
			<Container>
				<Navbar.Brand href='#home' style={{ width: '200px' }}>
					<img src={logo} alt='Logo' />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav'>
					<span className='navbar-toggler-icon'></span>
				</Navbar.Toggle>
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='me-auto'>
						<Nav.Link
							href='#home'
							className={
								activeLink === 'home'
									? 'active navbar-link'
									: 'navbar-link'
							}
							onClick={() => onUpdateActiveLink('home')}
							onToggle
						>
							Home
						</Nav.Link>
						<Nav.Link
							href='#skills'
							className={
								activeLink === 'skills'
									? 'active navbar-link'
									: 'navbar-link'
							}
							onClick={() => onUpdateActiveLink('skills')}
						>
							Skills
						</Nav.Link>
						<Nav.Link
							href='#projects'
							className={
								activeLink === 'projects'
									? 'active navbar-link'
									: 'navbar-link'
							}
							onClick={() => onUpdateActiveLink('projects')}
						>
							Projects
						</Nav.Link>
					</Nav>
					<span className='navbar-text'>
						<Nav.Link href='#connect'>
							<button
								className='vvd'
								onClick={() => onUpdateActiveLink('connect')}
							>
								<span>Contact me</span>
							</button>
						</Nav.Link>
					</span>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}
