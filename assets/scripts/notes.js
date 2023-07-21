const noNotes = document.querySelector(".no-notes");
const cardsContainer = document.querySelector(".cards");
const generateNotes = (notes) => {
  notes.forEach((note) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <h6 class="card-title">
            ${note.title}
            <i class="fa-solid fa-xmark delete" onclick="deleteNote(${note.id})"></i>
        </h6>
        <p class="card-text">
        ${note.text}
        </p>
    `;
    cardsContainer.append(card);
  });
};

const deleteNote = (id) => {
  const notes = JSON.parse(localStorage.getItem("notes"));
  const updatedNotes = notes.filter((note) => note.id != id);
  localStorage.removeItem("notes");
  if (updatedNotes.length > 0) {
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  }
  init();
};
const init = () => {
  cardsContainer.innerHTML = "";
  const hasLocalStorage = localStorage.getItem("notes");
  noNotes.style.display = hasLocalStorage ? "none" : "block";
  const notes = hasLocalStorage
    ? JSON.parse(localStorage.getItem("notes"))
    : [];
  if (notes.length > 0) {
    generateNotes(notes);
  }
};

// event listener
document.addEventListener("DOMContentLoaded", init);
