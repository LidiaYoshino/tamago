import styled from 'styled-components';

const Header = styled.section`
	text-align: center;
	background-color: ${props => props.theme.colors.background};
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: ${props => props.theme.fontSize.header};
	color: white;
`;

Header.defaultProps = {
	theme: {
		colors: {
			background: '#282C34',
		},
		fontSize: {
			header: 'calc(10px + 2vmin)',
		}
	}
}

export default Header;