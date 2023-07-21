const submitBtn = document.querySelector("#submit");
const form = document.querySelector("form");

const generateToast = (text, color, duration, callback) => {
  Toastify({
    text: text,
    duration: duration,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: color,
    },
    callback: callback,
  }).showToast();
};

const addNewNote = (newNote) => {
  const hasLocalStorage = localStorage.getItem("notes");
  const notes = hasLocalStorage
    ? JSON.parse(localStorage.getItem("notes"))
    : [];
  notes.push(newNote);
  localStorage.setItem("notes", JSON.stringify(notes));
};

const handleSubmit = (e) => {
  e.preventDefault();
  const note = Object.fromEntries(new FormData(form).entries());

  if (note.text && note.title) {
    console.log("can submit");
    note.id = Date.now();
    addNewNote(note);
    form.reset();
    generateToast(
      "note added successfully",
      "linear-gradient(to right, #11998e, #38ef7d)",
      1000,
      () => location.assign("notes.html")
    );
  } else {
    // show alert
    console.log("can't submit");
    generateToast(
      "don't leave any empty fields",
      "linear-gradient(to right, #ff416c, #ff4b2b)",
      3000
    );
  }
};
submitBtn.addEventListener("click", handleSubmit);
