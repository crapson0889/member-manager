import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsetComponent } from './tabset.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tabs', component: TabsetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
