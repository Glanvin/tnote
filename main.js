import { createNote } from "./javascript/CreateNote.js";

let noteInput;
let noteTitle;

window.addEventListener("DOMContentLoaded", () => {
  noteInput = document.querySelector("#note-input");
  noteTitle = document.querySelector("#note-title");
  document.querySelector("#note-form").addEventListener("submit", (e) => {
    e.preventDefault();
    if (noteInput.value != "" || noteTitle.value != "") {
      createNote(noteTitle.value, noteInput.value);
    } else {
      alert("Both Fields cannot be empty!");
    }
  });
});
