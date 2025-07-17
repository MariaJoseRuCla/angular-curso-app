import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoteService } from '../../services/note';
import Note from '../../../models/Note';

@Component({
  selector: 'app-create-note',
  imports: [FormsModule],
  templateUrl: './create-note.html',
  styleUrl: './create-note.css'
})
export class CreateNoteComponent {
  noteTitle: string = '';

  constructor(public noteServie: NoteService) { }

  handleSubmit = () => {
    if (!this.noteTitle) return;
    
    const newNote: Note = {
      id: this.noteServie.createId(),
      title: this.noteTitle,
      marked: false
    }
    this.noteServie.createNote(newNote);
    this.noteTitle = "";
  }
}
