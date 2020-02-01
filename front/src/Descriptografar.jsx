import React from "react";
import {Link} from "react-router-dom"

class Descriptografar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            mensagem: "",
            number_p: "",
            number_q: "",
            number_e: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({ [name]: value });
    }

    handleSubmit(event){
        event.preventDefault();

        console.log(this.state);
    }

    
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
                                    <Link className="nav-link" to="/gerarchave">Gerar Chave</Link>
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
                        <textarea name="mensagem" onChange={this.handleChange} placeholder="Informe aqui o texto para ser criptografado" className="form-control" id="msg" rows="4"></textarea>

                        <br></br>
                        
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="entrada-p">P: </span>
                            </div>
                            <input type="text" name="number_p" onChange={this.handleChange} className="form-control" id="primo-p" aria-describedby="basic-addon3" />
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="entrada-q">Q: </span>
                            </div>
                            <input type="text" name="number_q" onChange={this.handleChange} className="form-control" id="primo-q" aria-describedby="basic-addon3" />
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="entrada-e">E: </span>
                            </div>
                            <input type="text" name="number_e" onChange={this.handleChange} className="form-control" id="expoente-e" aria-describedby="basic-addon3" />
                        </div>

                        <br></br>

                        <button type="submit" onClick={this.handleSubmit} className="btn btn-light mt-2 center descriptografar">Descriptografar</button>
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
                    crossOrigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
                    integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
                    crossOrigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
                    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
                    crossOrigin="anonymous"></script>
            </div>
        );
    }

}

export default Descriptografar;