import { Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = 
[
    {path:'',component:RegistrationComponent},
    {path:'Login',component:LoginComponent}
];