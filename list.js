var user_email = localStorage.getItem("webflowLog");
// console.log(user_email);

const lessonItems = document.querySelectorAll(".lesson_item");
const lessonlinks = document.querySelectorAll(".link_to_lesson");
const preview_img = document.querySelector(".lesson_preview_img");
const preview_head = document.querySelector(".lesson_preview_head");
const preview_speaker = document.querySelector(".lesson_preview_speaker");
const buttons = document.querySelectorAll(".button_toxic");

function repeat(item) {
  item.nextElementSibling
    .querySelector(".button_toxic")
    .classList.add("past_lesson");
  item.nextElementSibling.querySelector(".button_toxic").innerHTML =
    "Переглянути";
}
function continues(item) {
  item.nextElementSibling
    .querySelector(".button_toxic")
    .classList.add("continue_lesson");
  item.nextElementSibling.querySelector(".button_toxic").innerHTML =
    "Продовжити";
}

function getUserInfo(customPass) {
  var data = {
    user_email: user_email,
  };
  // console.log(data);
  fetch("https://uni380-ua.onrender.com/", {
    // fetch("https://uni380-ece0513571ea.herokuapp.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);

      var lessonspass;
      var userId = data.id;
      var lessonContinue;
      if (
        data.data.lessoncontinue !== "" &&
        data.data.lessoncontinue !== undefined
      ) {
        lessonContinue = data.data.lessoncontinue;
        lessonContinue = lessonContinue.split("-");
        var continueNumber = lessonContinue[0];
        var continueState = lessonContinue[1];
      } else {
        lessonContinue = "";
      }

      // var lessonContinue = 2;
      lessonspass = data.data.lessonspass;
      if (lessonspass > customPass) {
        lessonspass = customPass;
      }
      getSideProgress(lessonspass);

      lessonItems.forEach((item, index) => {
        if (index < lessonspass) {
          item.classList.remove("disabled");
          if (index < lessonspass - 1) {
            repeat(item);
          }
          if (index === lessonspass - 1) {
            if (lessonContinue !== "" && index === continueNumber - 1) {
              // console.log(continueState);
              if (continueState !== "end") {
                continues(item);
              } else {
                repeat(item);
              }
            }
          }
          if (index === lessonspass - 1 && window.innerWidth > 991) {
            // lessonContinue = +lessonContinue;
            item.click();
          }
        } else {
          item.classList.add("disabled");
        }
      });

      lessonlinks.forEach((link) => {
        var linkSrc = link.innerHTML;
        link.innerHTML = linkSrc + userId;
      });
      var button_href = document
        .getElementById("button_redirect")
        .getAttribute("href");

      document
        .getElementById("button_redirect")
        .setAttribute("href", button_href + userId);
    })
    .catch((error) => {
      console.error(error);
    });
}

let activeTab = null;

lessonItems.forEach((item) => {
  item.addEventListener("click", () => {
    const parentTab = item.parentElement;
    const isActive = parentTab.classList.contains("active");

    lessonItems.forEach((otherItem) => {
      otherItem.parentElement.classList.remove("active");
    });

    if (window.innerWidth > 991) {
      item.parentElement.classList.add("active");
      if (
        item.nextElementSibling
          .querySelector(".button_toxic")
          .classList.contains("past_lesson")
      ) {
        document
          .getElementById("button_redirect")
          .classList.remove("continue_lesson");
        document.getElementById("button_redirect").classList.add("past_lesson");
        document.getElementById("button_redirect").innerHTML = "Переглянути";
      } else if (
        item.nextElementSibling
          .querySelector(".button_toxic")
          .classList.contains("continue_lesson")
      ) {
        document
          .getElementById("button_redirect")
          .classList.remove("past_lesson");
        document
          .getElementById("button_redirect")
          .classList.add("continue_lesson");
        document.getElementById("button_redirect").innerHTML = "Продовжити";
      } else {
        document
          .getElementById("button_redirect")
          .classList.remove("past_lesson");
        document
          .getElementById("button_redirect")
          .classList.remove("continue_lesson");
        document.getElementById("button_redirect").innerHTML = "Почати";
      }
    } else {
      if (!isActive) {
        parentTab.classList.add("active");
        activeTab = parentTab;
      } else {
        activeTab = null;
      }
    }

    // Отримати дані для відображення в попередньому перегляді
    const image = item.querySelector(".lesson_item_img");
    const speaker = item.querySelector(".speaker");
    const heading = item.querySelector(".lesson_item_heading");
    const link = item.querySelector(".link_to_lesson");

    const speakerText = speaker.innerHTML;
    const itemHeading = heading.innerHTML;
    const linkUrl = link.innerHTML;

    // Оновити посилання на кнопки
    buttons.forEach((button) => {
      button.setAttribute("href", linkUrl);
    });

    // Оновити вміст попереднього перегляду
    preview_head.innerHTML = itemHeading;
    preview_speaker.innerHTML = speakerText;
    const srcValue = image.getAttribute("src");
    preview_img.style.background = `url(${srcValue})`;
  });
});
