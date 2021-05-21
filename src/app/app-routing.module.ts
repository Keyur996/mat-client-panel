import { AddUpdateClientComponent } from './components/add-update-client/add-update-client.component';
import { ClientsComponent } from './components/clients/clients.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ClientsComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'add-client', component: AddUpdateClientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
