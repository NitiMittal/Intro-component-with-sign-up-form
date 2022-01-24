let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let first = id("first"),
  last = id("last"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

// Adding the submit event Listener

form.addEventListener("submit", (e) => {
  e.preventDefault();
  engine(first, 0, "First Name cannot be empty");
  engine(last, 1, "Last Name cannot be empty");
  engine(email, 2, "Email Address cannot be empty");
  engine(password, 3, "Password cannot be empty");
});

// Adding the input event listener
form.addEventListener("input", (e) => {
  e.preventDefault();
  engine(first, 0, "First Name cannot be empty");
  engine(last, 1, "Last Name cannot be empty");
  engine(email, 2, "Email Address cannot be empty");
  engine(password, 3, "Password cannot be empty");
});

let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    failureMsg(id, serial, message);
  } else if (email.value !== "" && serial == 2) {
    let testMail = ValidateEmail(email.value);
    if (testMail) {
      successMsg(id, serial);
    } else if (testMail == false) {
      failureMsg(id, serial, "Looks like this is not an email");
    }
  } else {
    successMsg(id, serial);
  }
};

// pattern for validating mail
let ValidateEmail = (mail) => {
  let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (pattern.test(mail)) {
    return true;
  } else {
    return false;
  }
};

// function in case of success
let successMsg = (id, serial) => {
  errorMsg[serial].innerHTML = "";
  id.style.border = "2px solid green";
  failureIcon[serial].style.opacity = "0";
  successIcon[serial].style.opacity = "1";
};

// function in case of failure
let failureMsg = (id, serial, message) => {
  errorMsg[serial].innerHTML = message;
  id.style.border = "2px solid red";
  failureIcon[serial].style.opacity = "1";
  successIcon[serial].style.opacity = "0";
};
