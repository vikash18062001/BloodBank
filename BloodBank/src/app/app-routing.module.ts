import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:"about",component:AboutusComponent},
  {path:":authMode",component:LoginComponent,},
  {path:"**",redirectTo:'login',pathMatch:"prefix"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
