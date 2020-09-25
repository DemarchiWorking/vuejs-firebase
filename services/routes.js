import Home from '../pages/Home'
import Sobre from '../pages/Sobre'
import Login from '../pages/Login'
import ListaUsuarios from '../pages/ListaUsuarios'
import CadastrarProduto from '../pages/CadastrarProduto'
import ListarProdutos from '../pages/ListarProdutos'
import CadastrarLojas from '../pages/Lojas/CadastrarLojas'



export  const routes = [
    { path: '', component: Login},
    {path: '/Home', component: Home},
    {path: '/sobre', component: Sobre},
    {path: '/ListaUsuarios', component: ListaUsuarios},
    {path: '/login', component: Login},
    {path: '/cadastro', component: Home},
    {path: '/CadastrarProduto', component: CadastrarProduto},
    {path: '/ListarProdutos', component: ListarProdutos},
    {path: '/CadastrarLojas', component: CadastrarLojas},

    
];
// impedir o usuario nao logado de acessar
/*
routes.beforeEach((to, from, next) => {
    if(!window.uid && to.name != 'login'){
        next({ name: 'login'})
    } else {
        next()
    }
    next()
})*/