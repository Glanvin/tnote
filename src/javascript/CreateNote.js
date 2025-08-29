export function createNote(title, note) {
  let noteList = document.getElementById("note-list");

  let noteBox = document.createElement("div");
  let noteTitle = document.createElement("h3");
  let noteContent = document.createElement("p");
  let noteMenu = document.createElement("div");
  let noteMenuBtn = document.createElement("button");
  let noteDropdown = document.createElement("div");
  let noteDeleteBtn = document.createElement("button");
  let noteUpdateBtn = document.createElement("button");

  // Classes
  noteBox.classList.add("note");
  noteMenu.classList.add("note-menu");
  noteDropdown.classList.add("dropdown");
  noteMenuBtn.classList.add("menu-btn");
  noteDeleteBtn.classList.add("delete-btn");
  noteUpdateBtn.classList.add("update-btn");

  // Text
  noteTitle.append(title);
  noteContent.append(note);
  noteMenuBtn.textContent = "⋮";
  noteDeleteBtn.textContent = "Delete";
  noteUpdateBtn.textContent = "Update";

  // Structure
  noteDropdown.append(noteUpdateBtn, noteDeleteBtn);
  noteMenu.append(noteMenuBtn, noteDropdown);
  noteBox.append(noteTitle, noteContent, noteMenu);
  noteList.prepend(noteBox);
}
