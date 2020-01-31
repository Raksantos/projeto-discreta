import Criptografar from "./Criptografar";
import Descriptografar from "./Descriptografar";
import GerarChave from "./GerarChave";

var routes = [
    {
        path: "/criptografar",
        name: "Tela de Criptografar",
        component: Criptografar,
        layout: "/"
    },
    {
        path: "/descriptografar",
        name: "Tela de Descriptografar",
        component: Descriptografar,
        layout: "/"
    },
    {
        path: "/gerarchave",
        name: "Tela para gerar chave pública",
        component: GerarChave,
        layout: "/"
    }
];

export default routes;