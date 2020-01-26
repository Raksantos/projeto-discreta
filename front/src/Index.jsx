import React from "react";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import Home from "./Home";

class Index extends React.Component {
    render() {
        return (
            <div className="bg-danger" style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}>
                <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
                    <a className="navbar-brand" href="index.html">Projeto-RSA</a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Router>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" to="/">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/criptografar">Criptografa</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/descriptografar">Descriptografa</Link>
                                </li>
                            </ul>
                        </div>
                    </Router>
                </nav>

                <Home></Home>

                <footer>
                    <span className="text-light text-bold ml-2">Desenvolvedores:</span>
                    <span className="text-light text-bold ml-2">Rodrigo</span>
                    <a className="badge" href="https://github.com/Raksantos" target="_blank" rel="noopener noreferrer"><i className="text-light fab fa-github"></i></a>
                    <a className="badge" href="https://www.linkedin.com/in/rodrigo-santos-da-silva-175538175/" target="_blank" rel="noopener noreferrer"><i className="text-light fab fa-linkedin"></i></a>
                    <span className="text-light text-bold ml-2">João</span>
                    <a className="badge" href="https://github.com/camalejao" target="_blank" rel="noopener noreferrer"><i className="text-light fab fa-github"></i></a>
                    <a className="badge" href="https://www.linkedin.com/in/jo%C3%A3o-victor-falc%C3%A3o-360862188/" target="_blank" rel="noopener noreferrer"><i className="text-light fab fa-linkedin"></i></a>
                    <span className="text-light text-bold ml-2">Clemens</span>
                    <a className="badge" href="https://github.com/clemensss" target="_blank" rel="noopener noreferrer"><i className="text-light fab fa-github"></i></a>
                    <a className="badge" href="https://www.linkedin.com/in/clemens-schrage-79509018a/" target="_blank" rel="noopener noreferrer"><i className="text-light fab fa-linkedin"></i></a>
                </footer>

                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                    crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
                    integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
                    crossorigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
                    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
                    crossorigin="anonymous"></script>
            </div>
        );
    }
}

export default Index;