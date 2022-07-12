import React from 'react'
import styled from 'styled-components'

const FormContact = () => {
	return (
		<Wrapper>
			<form
				action='https://formsubmit.co/73737adca87f6bd008b1391551645100'
				// 73737adca87f6bd008b1391551645100
				method='POST'
			>
				<input type='text' name='name' required placeholder='Name' />
				<input
					type='email'
					name='email'
					required
					placeholder='Email'
				/>
				<textarea
					name='message'
					rows={3}
					placeholder='Message'
					required
				></textarea>
				<div className='center'>
					<button type='submit' className='btn'>
						<span>Send</span>
					</button>
				</div>
			</form>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	max-width: 500px;
	form {
		display: flex;
		flex-direction: column;
	}

	span:hover {
		color: white;
	}
	.btn {
		border-radius: 1px;
		margin-top: 0;
	}
	.center {
		display: flex;
		justify-content: center;
		align-items: flex-start;
	}
	textarea {
		margin-bottom: 0;
	}
`

export default FormContact
