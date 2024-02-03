import { Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { CriarUsuarioComponent } from './components/pages/criar-usuario/criar-usuario.component';
import { ConsultaProdutosComponent } from './components/pages/consulta-produtos/consulta-produtos.component';

export const routes: Routes = [
    {
        path: "app/login", /* rota da página de login */
        component: LoginComponent
    },
    {
        path: "app/criar-usuario", /* rota de página de criar usuário */
        component: CriarUsuarioComponent
    },
    {
        path: "app/consulta-produtos",
        component: ConsultaProdutosComponent
    },
    {
        path: '', /* rota raiz do projeto (default) */
        pathMatch: 'full',
        redirectTo: '/app/login'
    }
];
