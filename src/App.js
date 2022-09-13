import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./Images/logo.svg"
import email_image from "./Images/email.png"
import './App.css';

function App() {
    return (
        <div className="App">

            <Navbar className="mb-4" bg="light">
                <Container>
                    <Navbar.Brand className="d-flex mx-auto">
                        <img src={logo} alt="logo"/>
                    </Navbar.Brand>
                </Container>
            </Navbar>

            <span className="mt-4">
                Olá, vamos te ajudar a acessar o sistema corretamente.
            </span>
            <div className="d-flex justify-content-center mt-4 mb-4">
                <img
                    className="w-25"
                    src={email_image}
                    alt={email_image}
                />
            </div>
            <span>Clique <a href="#">aqui</a> para acessar o sistema</span>


        </div>
    );
}

export default App;