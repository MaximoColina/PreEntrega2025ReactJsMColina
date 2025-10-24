import { Button, Container, Navbar, Nav } from 'react-bootstrap'

function App() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Mi App React-Bootstrap</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#acerca">Acerca</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-5 text-center">
        <h1>¡Hola desde React-Bootstrap! 🚀</h1>
        <Button variant="primary">Botón principal</Button>{' '}
        <Button variant="success">Botón éxito</Button>
      </Container>
    </>
  )
}

export default App