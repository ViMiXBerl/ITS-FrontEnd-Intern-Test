import styled from "styled-components";
import { Navbar, Container, Nav, Image } from "react-bootstrap";

export const NavbarStyled = styled(Navbar)`
	background: transparent
		linear-gradient(
			180deg,
			rgba(0, 0, 0, 1) 0%,
			rgba(41, 41, 41, 41) 40%,
			rgba(41, 41, 41, 41) 82%,
			rgba(41, 41, 41, 41) 100%
		);
`;

export const ContainerStyled = styled(Container)`
	align-items: baseline !important;
`;

export const NavStyled = styled(Nav.Link)`
	:hover {
		background-color: rgba(234, 0, 255, 0.24);
	}
`;

export const NavStyledHome = styled(Nav.Link)`
	margin-right: 2rem;
`;

export const ImageStyled = styled(Image)`
	width: 67px;
	height: 66px;
	position: relative;
	top: 1.3rem;
	right: 0.4rem;
`;
