import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { NotesComponent } from './pages/notes/notes';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'notes', component: NotesComponent}
];
