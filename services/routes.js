import Home from '../pages/Home'
import Sobre from '../pages/Sobre'
import Login from '../pages/Login'
import ListaUsuarios from '../pages/ListaUsuarios'

export  const routes = [
    { path: '', component: Home},
    {path: '/cadastro', component: Home},
    {path: '/sobre', component: Sobre},
    {path: '/ListaUsuarios', component: ListaUsuarios},
    {path: '/login', component: Login}
];
