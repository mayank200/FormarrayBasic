import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormdataComponent } from './formdata/formdata.component';
import { LoginComponent } from './login.component';

const routes: Routes = [
  // { path: '', component: LoginComponent },
  
  {
    path: '', component: FormdataComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
