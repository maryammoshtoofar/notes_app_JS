const submitBtn = document.querySelector("#submit");
const form = document.querySelector("form");
console.log(form);
const handleSubmit = (e) => {
  const formData = Object.fromEntries(new FormData(form).entries());
  if (formData.text && formData.title) {
    console.log("can submit");
    // implement submit
  } else {
    // show alert
    console.log("can't submit");
  }

  e.preventDefault();
};
submitBtn.addEventListener("click", handleSubmit);
