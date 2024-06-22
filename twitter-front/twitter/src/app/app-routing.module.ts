import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { CreateUserComponent } from './account/create-user/create-user.component';
import { FeedComponent } from './components/feed/feed.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'register', component: CreateUserComponent
  },
  {
    path: 'feed', component: FeedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
