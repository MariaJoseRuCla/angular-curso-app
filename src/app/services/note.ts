import { Injectable } from '@angular/core';
import Note from '../../models/Note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  notes: Note[];

  constructor() {
    this.notes = [
      {
        id: this.createId(),
        title: "Cita con el médico",
        marked: false
      },
       {
        id: this.createId(),
        title: "Contraseña del Wifi: 123456",
        marked: true
      }
    ]
  }

  updateTitle(id: string, newTitle: string) {
    const updatedNote = this.notes.find((note) => note.id === id );
    if(!updatedNote) return;

    updatedNote.title = newTitle;
  }

   updateMarked(id: string) {
    const updatedNote = this.notes.find((note) => note.id === id );
    if(!updatedNote) return;
    
    updatedNote.marked = !updatedNote.marked;
  }

  createNote(note: Note) {
    this.notes.unshift(note);
  }

  createId = () => {
    return Date.now().toString(36) + Math.random().toString(36).slice(2);
  };
  
}