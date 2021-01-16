import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BestSellersListsComponent } from './components/best-sellers-lists/best-sellers-lists.component';
import { BooksComponent } from './components/books/books.component';

const routes: Routes = [
  {path: '', component: BestSellersListsComponent},
  {path: 'list/:name', component: BooksComponent},
  {path: '**', component: BestSellersListsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
