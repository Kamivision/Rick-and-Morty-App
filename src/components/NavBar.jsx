import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <>
            <Navbar expand="md" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="/">
                <img src='/Rick_and_Morty.svg' alt="Rick and Morty Logo" width="150" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/characters">Characters</Nav.Link>
                    <Nav.Link as={Link} to="/favorites">Favorites</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    )
}
export default NavBar;