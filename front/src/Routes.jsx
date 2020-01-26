import Criptografar from "./Criptografar";
import Descriptografar from "./Descriptografar";

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
    }
];

export default routes;