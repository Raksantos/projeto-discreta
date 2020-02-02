import React from "react";
import { Link } from "react-router-dom"
import axios from 'axios'

const baseUrl = "http://127.0.0.1:5000/rsa/";

class GerarChave extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            number_p: "",
            number_q: "",
            number_e: "",
            thereIsP: 0,
            thereIsQ: 0,
            thereIsE: 0
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.gerarPrimo = this.gerarPrimo.bind(this);
        this.gerarE = this.gerarE.bind(this);
    }

    gerarPrimo(event) {
        event.preventDefault();

        const target = event.target;
        const name = target.name;

        axios.get(baseUrl + 'gerar-primo').then(res => {
            let resp = res.data;

            if (resp.erro === 0) {
                //console.log(resp);
            }
            else {

                if (name === "number_p" && this.state.thereIsP === 0) {
                    this.setState({ number_p: resp["result"] });
                    this.setState({ thereIsP: 1 });
                    let botao_p = document.querySelector(".gerar-p");
                    let new_button = document.createElement('button');
                    let icon_new_button = document.createElement('i');

                    icon_new_button.className = "fas fa-arrow-down";

                    new_button.appendChild(icon_new_button);

                    new_button.className = "btn btn-light download-p mt-2 ml-2";

                    botao_p.after(new_button);

                    document.querySelector("#primo-p").innerHTML = resp["result"];
                }

                if (name === "number_q" && this.state.thereIsQ === 0) {
                    this.setState({ number_q: resp["result"] });
                    this.setState({ thereIsQ: 1 });
                    let botato_q = document.querySelector(".gerar-q");
                    let new_button = document.createElement('button');
                    let icon_new_button = document.createElement('i');


                    icon_new_button.className = "fas fa-arrow-down";
                    new_button.appendChild(icon_new_button);

                    new_button.className = "btn btn-light download-p mt-2 ml-2";

                    botato_q.after(new_button);

                    document.querySelector("#primo-q").innerHTML = resp["result"];
                }
            }
        }).catch((error) => console.log(error));
    }

    gerarE(event) {
        event.preventDefault();

        if (this.state.number_p === "") {
            alert("Por favor, gere um valor para o número P.");
        }
        else if (this.state.number_q === "") {
            alert("Por favor, gere um valor para o número Q")
        }
        else {

            let json = {
                p: this.state.number_p,
                q: this.state.number_q
            }

            axios.post(baseUrl + 'gerar-numero-e', json).then(res => {
                let resp = res.data;

                if (resp.erro === 0) {
                    console.log("Ocorreu um erro inesperado");
                    alert("Ocorreu um erro inesperado!");
                }
                else {
                    if (this.state.thereIsE === 0) {
                        this.setState({ number_e: resp["result"] });
                        this.setState({ thereIsE: 1 });
                        console.log(this.state.number_e);

                        let botato_e = document.querySelector(".gerar-e");
                        let new_button = document.createElement('button');
                        let icon_new_button = document.createElement('i');


                        icon_new_button.className = "fas fa-arrow-down";
                        new_button.appendChild(icon_new_button);

                        new_button.className = "btn btn-light download-p mt-2 ml-2";

                        botato_e.after(new_button);

                        document.querySelector("#primo-e").innerHTML = resp["result"];
                    }
                }
            }).catch((error) => console.log(error));
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        console.log(this.state);
    }

    render() {
        return (
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
                        <h1 className="font-weight-bold mb-3 pb-3">CHAVE PÚBLICA</h1>

                        <br></br>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="entrada-p">P: </span>
                            </div>
                            <div type="text" name="number_q" className="card-body bg-light text-dark" id="primo-p" aria-describedby="basic-addon3"></div>
                            <button type="submit" name="number_p" onClick={this.gerarPrimo} className="btn btn-light gerar-p ml-2">Gerar</button>
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="entrada-q">Q: </span>
                            </div>
                            <div type="text" name="number_q" className="card-body bg-light text-dark" id="primo-q" aria-describedby="basic-addon3"></div>
                            <button type="submit" name="number_q" onClick={this.gerarPrimo} className="btn btn-light gerar-q ml-2">Gerar</button>
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="entrada-e">E: </span>
                            </div>
                            <div type="text" name="number_e" className="card-body bg-light text-dark" id="primo-e" aria-describedby="basic-addon3"></div>
                            <button type="submit" name="number_e" onClick={this.gerarE} className="btn btn-light gerar-e ml-2">Gerar</button>
                        </div>

                        <br></br>

                        <button type="submit" className="btn btn-light gerar-q ml-2">Gerar Chave</button>
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

export default GerarChave;