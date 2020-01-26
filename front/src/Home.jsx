import React from "react";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

class DefaultTemplate extends React.Component {
    render() {
        return (
            <div className="container mx-auto text-light mb-5" style={{ flex: "1", maxWidth: "42em" }}>
                <main className="text-center text-justify">
                    <br></br>
                    <h1 className="font-weight-bold mb-3 pb-3">PROJETO - RSA</h1>
                    <p className="lead text-justify">Bem-vindo(a) ao Projeto de RSA. Por meio desse projeto você poderá realizar
                    processos voltados a criptografia, com o intuito de proteger suas informações ao repassá-las para outras
                    pessoas.
            </p>
                    <Router>
                        <Link className="btn btn-light mt-2" to="/criptografar" role="button">Criptografa <i className="fas fa-lock"></i></Link>
                        <Link className="btn btn-light mt-2" to="/criptografar" role="button">Descriptografa <i class="fas fa-lock-open"></i></Link>
                    </Router>
                </main>
            </div>
        );
    }
}

export default DefaultTemplate;