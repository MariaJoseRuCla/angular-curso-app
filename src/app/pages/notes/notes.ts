import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header';
import { NoteService } from '../../services/note';
import { NoteCardComponent } from '../../components/note-card/note-card';

@Component({
  selector: 'app-notes',
  imports: [HeaderComponent, NoteCardComponent],
  templateUrl: './notes.html',
  styleUrl: './notes.css'
})
export class NotesComponent {
  constructor (public noteService: NoteService) {}
}
