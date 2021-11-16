import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import {
	NavbarStyled,
	ContainerStyled,
	NavStyled,
	NavStyledHome,
	ImageStyled,
} from "./styledHeader";
import Text from "../../components/Text/Text";
import logo from "../../assets/images/triangular.png";

import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
	return (
		<header>
			<NavbarStyled bg='dark' expand='lg'>
				<ContainerStyled>
					<ImageStyled src={logo}></ImageStyled>
					<Navbar.Brand>
						<Text variant='h1'>penrose</Text>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ml-auto '>
							<NavStyledHome>
								<Text variant='h2'>Home</Text>
							</NavStyledHome>
							<LinkContainer to='/newCollections'>
								<NavStyled>
									<Text variant='h3'>New collections</Text>
								</NavStyled>
							</LinkContainer>
							<NavDropdown title='Store' id='basic-nav-dropdown'>
								<LinkContainer to='/women'>
									<NavDropdown.Item>
										<Text variant='p1'>Women</Text>
									</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to='/men'>
									<NavDropdown.Item>
										<Text variant='p1'>Men</Text>
									</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to='/kids'>
									<NavDropdown.Item>
										<Text variant='p1'>Kids</Text>
									</NavDropdown.Item>
								</LinkContainer>
							</NavDropdown>
							<LinkContainer to='/contacts'>
								<NavStyled>
									<Text variant='h3'> Contacts</Text>
								</NavStyled>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</ContainerStyled>
			</NavbarStyled>
		</header>
	);
};

export default Header;
