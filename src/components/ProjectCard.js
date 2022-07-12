import { Col } from 'react-bootstrap';
import styled from 'styled-components';

export const ProjectCard = ({
	title,
	description,
	imgUrl,
	link,
	link2,
}) => {
	return (
		<Col size={6}>
			<Wrapper>
				<div className='proj-imgbx'>
					<img
						src={imgUrl}
						className='project-img'
						onClick='location.href="youtube.com"'
						alt='icon'
					/>
					<div className='proj-txtx'>
						<h4>{title}</h4>
						<span>{description}</span>
						<br />
						<button className='btn' style={{ marginTop: '1rem' }}>
							<a href={link} target='_blank' rel='noreferrer'>
								Go to website
							</a>
						</button>
						<br />
						<button className='btn' style={{ marginTop: '1rem' }}>
							<a href={link2} target='_blank' rel='noreferrer'>
								source
							</a>
						</button>
					</div>
				</div>
			</Wrapper>
		</Col>
	);
};

const Wrapper = styled.div`
	display: flex;
	align-content: center;
	justify-content: center;
	margin-top: 30px;

	.btn {
		border: 1px solid white;
		background: white;
		opacity: 0.8;
		font-weight: 600;
	}
	.btn:hover {
		background: black;
	}
	a {
		text-decoration: none;
	}
`;
