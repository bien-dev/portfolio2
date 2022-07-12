import { Container, Row, Col, Tab } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from '../assets/img/project1.png';
import projImg2 from '../assets/img/project2.png';
import projImg3 from '../assets/img/hatdieu.png';
import projImg4 from '../assets/img/project4.png';
import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
	const projects = [
		{
			title: 'E-commerce',
			description:
				'A furniture selling website. Tech: React, Styled Components, Login, Logout, place an order, checkout',
			imgUrl: projImg1,
			link: 'https://bien-yourstore.netlify.app/',
			link2: 'https://github.com/bien-dev/yourstore',
		},
		{
			title: 'Cloud Service',
			description: 'Design & Development, tech: React, TailwindCSS',
			imgUrl: projImg2,
			link: 'https://cloud101.netlify.app/',
		},
		{
			title: 'Portfolio',
			description:
				'This very website. Tech: React, Bootstrap, Styled Component',
			imgUrl: projImg4,
			link: 'https://bien-portfolio.netlify.app/',
			link2: 'https://github.com/bien-dev/portfolio2',
		},
		{
			title: 'Online store',
			description: `A website I was hired to build. 
			Tech: React, Styled Components, login, logout, place orders, checkout`,
			imgUrl: projImg3,
			link: 'https://hatdieu.netlify.app/',
			link2: 'https://github.com/bien-dev/hatdieu',
		},
	];

	return (
		<section className='project' id='projects'>
			<Container>
				<Row>
					<Col size={12}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
									className={
										isVisible
											? 'animate__animated animate__fadeIn'
											: ''
									}
								>
									<h2>Projects</h2>
									<Tab.Container
										id='projects-tabs'
										defaultActiveKey='first'
									>
										<Tab.Content
											id='slideInUp'
											className={
												isVisible
													? 'animate__animated animate__slideInUp'
													: ''
											}
										>
											<Row>
												{projects.map((project, index) => {
													return (
														<ProjectCard key={index} {...project} />
													);
												})}
											</Row>
										</Tab.Content>
									</Tab.Container>
								</div>
							)}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
			<img
				className='background-image-right'
				src={colorSharp2}
				alt='background'
			/>
		</section>
	);
};
