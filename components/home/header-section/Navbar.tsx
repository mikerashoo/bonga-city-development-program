import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../widgets/Logo';

function HomeNavBar() {
  return (
    <>
       <Navbar className='bg-transparent' expand="lg">
      <Container>
      <Navbar.Brand href="#home">
        <div className='grid grid-cols-2'>
           <Image
              src="/logo.png"
              alt="Bonga town development Logo" 
              width={200 } height={60}
              priority
            />
            {/* <div>
            <a href="/home" className="text-2xl no-underline text-green-600 text-grey-darkest hover:text-blue-dark font-sans font-bold">Bonga Town</a><br />
            <span className="text-xs text-grey-dark text-green-500">Development</span>
          </div> */}
        </div>
     
          </Navbar.Brand> 
          </Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav" className=' justify-content-end'>
          <Nav fill className="justify-content-end text-white">
            <Nav.Link className='text-white' href="#home">Home</Nav.Link>
            <Nav.Link className='text-white' href="#link">Link</Nav.Link>
             
          </Nav>
        </Navbar.Collapse> 
    </Navbar>
    </>
  );
}

export default HomeNavBar;