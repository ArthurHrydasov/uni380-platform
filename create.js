const list_lessons = document.getElementById("list_lessons");
const create = document.getElementById("create");
const nameI = document.getElementById("name");
const second_name = document.getElementById("second_name");
const send_data = document.getElementById("send_data");
// const user_email = document.getElementById("user_email");
const primalButtons = document.querySelectorAll(".button_primal");
var nameBlock = nameI.closest(".task_input_block");
var second_nameBlock = second_name.closest(".task_input_block");
var check_input = document.querySelector(".task_input_check_block");
var check_inputBlock = check_input.closest(".task_input_block");

var avatar_img = document.querySelector(".avatar_img");
var img_link = document.querySelector(".img_link");

function setAvatar(href) {
  avatar_img.classList.remove("noAvatar");
  avatar_img.textContent = "";
  avatar_img.style.backgroundImage = 'url("' + href + '")';
}

setInterval(() => {
  var href = img_link.value;
  if (href !== "" && href !== undefined) {
    setAvatar(href);
  }
}, 1500);

// ------------- create_onboarding ------------- //

function createFirstLesson() {
  var data = {
    collection_id: "6517f3b8afa18ec4281d27f0",
    user_email: user_email,
  };
  // console.log(data);

  // fetch("https://uni-platform-6db9f53f05ed.herokuapp.com/create-first-lesson", {
  fetch("https://uni380-ua.onrender.com/create-first-lesson", {
    // fetch("https://uni380-ece0513571ea.herokuapp.com/create-first-lesson", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((foundUser) => {
      // Виведіть дані в консоль
      // console.log(foundUser);
      if (foundUser === "Дані надано") {
        list_lessons.classList.remove("list_page");
      } else {
        create.classList.remove("list_page");
        var blockedLinks = document.querySelectorAll(".custom_log_wrapper");
        blockedLinks.forEach((element) => {
          if (
            element
              .querySelector(".custom_side_buttons")
              .getAttribute("data-wf-user-logout") === "Вийти"
          ) {
            element.classList.remove("blocked");
          } else {
            element.classList.add("blocked");
          }
        });
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
createFirstLesson();

// ------------- create_onboarding ------------- //

primalButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    var blopElement = button.closest(".blop");
    if (blopElement) {
      blopElement.classList.add("done_blop");

      blopElement.nextElementSibling.classList.add("next_visible");
      setTimeout(function () {
        blopElement.nextElementSibling.classList.add("blop_animate");
      }, 1);
    }
  });
});

send_data.addEventListener("click", () => {
  var href = img_link.value;
  if (href === "") {
    href = undefined;
  }
  var nameVal = nameI.value;
  var second_nameVal = second_name.value;
  // var user_emailVal = user_email.innerHTML;
  function showSelectedOption() {
    const radioButtons = document.getElementsByName("sex");
    let selectedOption;
    for (const radioButton of radioButtons) {
      if (radioButton.checked) {
        selectedOption = radioButton.value;
        break;
      }
    }
    if (selectedOption) {
      return selectedOption;
    }
  }
  var sex = showSelectedOption();

  // console.log(nameVal);
  // console.log(second_nameVal);
  // console.log(sex);

  function checkErrors() {
    if (nameVal.trim() === "") {
      nameBlock.classList.add("error");
    } else {
      nameBlock.classList.remove("error");
    }
    if (second_nameVal.trim() === "") {
      second_nameBlock.classList.add("error");
    } else {
      second_nameBlock.classList.remove("error");
    }
    if (sex === "" || sex === undefined) {
      check_inputBlock.classList.add("error");
    } else {
      check_inputBlock.classList.remove("error");
    }
  }
  // nameVal.trim() === ""
  // if (
  //   nameVal.trim() !== "" &&
  //   second_nameVal.trim() !== "" &&
  //   sex !== "" &&
  //   sex !== undefined &&
  //   user_email !== "" &&
  //   user_email !== undefined
  // ) {
  if (
    nameVal !== "" &&
    second_nameVal !== "" &&
    sex !== "" &&
    sex !== undefined &&
    user_email !== ""
  ) {
    checkErrors();
    function dataSend(user_email) {
      var lessonspass = "1";
      var data = {
        user_email: user_email,
        user_name: nameVal,
        user_second_name: second_nameVal,
        user_sex: sex,
        lessonspass: lessonspass,
        user_avatar: href,
      };
      // console.log(data);
      // fetch("https://uni-platform-6db9f53f05ed.herokuapp.com/user", {
      fetch("https://uni380-ua.onrender.com/user", {
        // fetch("https://uni380-ece0513571ea.herokuapp.com/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((patch) => {
          console.log(patch);
          var new_url = "/";
          setTimeout(function () {
            window.location.href = new_url; // Перенаправлення на нову URL
          }, 100);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    dataSend(user_email);
  } else {
    checkErrors();
  }
});

