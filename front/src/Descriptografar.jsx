import React from "react";
import {Link} from "react-router-dom"

class Descriptografar extends React.Component{

    render(){
        return(
            <div className="bg-danger" style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}>
                <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
                    <a className="navbar-brand" href="index.html">Projeto-RSA</a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/criptografar">Criptografar</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/descriptografar">Descriptografar</Link>
                                </li>
                            </ul>
                        </div>
                </nav>

                <div className="container mx-auto text-light mb-5" style={{ flex: "1", maxWidth: "42em" }}>
                    <form className="text-center text-justify">
                        <br></br>
                        <h1 className="font-weight-bold mb-3 pb-3">DESCRIPTOGRAFAR</h1>
                        <textarea placeholder="Informe aqui o texto para ser criptografado" class="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
                        <br></br>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon3">Chave: </span>
                            </div>
                                <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                            </div>

                            <p className="text-light">OU</p>

                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroupFileAddon01">Arquivo cripotrafado: </span>
                                </div>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="inputGroupFile01"
                                    aria-describedby="inputGroupFileAddon01"/>
                                    <label class="custom-file-label" for="inputGroupFile01"></label>
                                </div>
                            </div>

                            <br></br>

                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroupFileAddon01">Chave: </span>
                                </div>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="inputGroupFile01"
                                    aria-describedby="inputGroupFileAddon01"/>
                                    <label class="custom-file-label" for="inputGroupFile01"></label>
                                </div>
                            </div>
                            
                            <br></br>

                        <button type="submit" class="btn btn-light mt-2 center calcular">Descriptografar</button>
                    </form>

                </div>

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

export default Descriptografar;