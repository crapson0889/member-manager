import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TabsetComponent } from './tabset.component';

const routes: Routes = [{ path: '', component: AppComponent },
{ path: 'tabs', component: TabsetComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
