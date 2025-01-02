var user_email = localStorage.getItem("webflowLog");
// console.log("webflowLog: " + user_email);
// onboarding(user_email);

var keywords = [
  "onboarding",
  "first-lesson",
  "second-lesson",
  "third-lesson",
  "fourth-lesson",
  "fiveth-lesson",
  "sixth-lesson",
  "seventh-lesson",
  "eighth-lesson",
  "ninth-lesson",
  "tenth-lesson",
  "eleventh-lesson",
  "twelfth-lesson",
  "thirteenth-lesson",
  "fourteenth-lesson",
];
function checkURLForKeywords() {
  var currentURL = window.location.href;
  for (var i = 0; i < keywords.length; i++) {
    if (currentURL.includes(keywords[i])) {
      var element = document.getElementById(keywords[i]);
      element.parentElement.classList.add("active");

      var lessonTabs = document.querySelectorAll(".lesson_tab");
      lessonTabs.forEach(function (tab) {
        if (tab.classList.contains("active")) {
          var tabsAttributeValue = tab.getAttribute("tabs");
          var sideBarSublinkWrapper = element.parentElement.querySelector(
            '.side_bar_sublink_wrapper a[tabs="' + tabsAttributeValue + '"]'
          );
          sideBarSublinkWrapper.parentElement.classList.add("active");
        }
      });
    }
  }
}

window.onload = checkURLForKeywords;

var sublinkWrappers = document.querySelectorAll(".side_bar_sublink_wrapper");
var lessonTabs = document.querySelectorAll(".lesson_tab");
sublinkWrappers.forEach(function (sublinkWrapper) {
  sublinkWrapper.addEventListener("click", function () {
    var tabsElement = sublinkWrapper.querySelector("[tabs]");

    if (tabsElement) {
      var tabsValue = tabsElement.getAttribute("tabs");
      lessonTabs.forEach(function (tab) {
        tab.classList.remove("active");
        tab.classList.add("noactive");
      });

      var matchingLessonTab = document.querySelector(
        '.lesson_tab[tabs="' + tabsValue + '"]'
      );

      if (matchingLessonTab) {
        matchingLessonTab.classList.remove("noactive");
        matchingLessonTab.classList.add("active");
      }
    }
    sublinkWrappers.forEach(function (wrapper) {
      wrapper.classList.remove("active");
    });
    sublinkWrapper.classList.add("active");
  });
});

var nextButtons = document.querySelectorAll(".next_button");
nextButtons.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.classList.contains("next_lesson")) {
      window.location.href = "/";
    } else {
      document
        .querySelector(
          ".side_bar_links_block.active .side_bar_sublink_wrapper.active"
        )
        .nextElementSibling.click();
    }
  });
});

function sideBarAvailable(customPass) {
  var data = {
    user_email: user_email,
  };
  // console.log(data);
  fetch("https://uni-platform-6db9f53f05ed.herokuapp.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      var lessonItems = document.querySelectorAll(".side_bar_links_block");
      var lessonspass;

      lessonspass = data.data.lessonspass;
      if (lessonspass > customPass) {
        lessonspass = customPass;
      }
      getSideProgress(lessonspass);

      lessonItems.forEach((item, index) => {
        if (index < lessonspass) {
          item.classList.add("available");
          var currentHref = item
            .querySelector(".side_bar_link")
            .getAttribute("href");
          item
            .querySelector(".side_bar_link")
            .setAttribute("href", currentHref + fragments[4]);
        } else {
          item.classList.remove("available");
        }
      });
      var user_name = data.data.name;
      var user_avatar = data.data.avatar;

      var currentUrl = window.location.href;

      var reloadProgLinks = document.querySelectorAll(".last_button");
      reloadProgLinks.forEach((element) => {
        element.addEventListener("click", () => {
          var customChapterCount;

          if (currentUrl.indexOf("first-lesson") !== -1) {
            if (element.closest('.lesson_tab[tabs="intro"]')) {
              customChapterCount = 1;
            } else if (element.closest('.lesson_tab[tabs="tab1"]')) {
              customChapterCount = 2;
            } else if (element.closest('.lesson_tab[tabs="tab2"]')) {
              customChapterCount = 3;
            }
          } else if (currentUrl.indexOf("second-lesson") !== -1) {
            if (element.closest('.lesson_tab[tabs="tab1"]')) {
              customChapterCount = 4;
            } else if (element.closest('.lesson_tab[tabs="tab2"]')) {
              customChapterCount = 5;
            }
          } else if (currentUrl.indexOf("third-lesson") !== -1) {
            if (element.closest('.lesson_tab[tabs="tab1"]')) {
              customChapterCount = 6;
            } else if (element.closest('.lesson_tab[tabs="tab2"]')) {
              customChapterCount = 7;
            } else if (element.closest('.lesson_tab[tabs="tab3"]')) {
              customChapterCount = 8;
            }
          } else if (currentUrl.indexOf("fourth-lesson") !== -1) {
            if (element.closest('.lesson_tab[tabs="tab1"]')) {
              customChapterCount = 9;
            } else if (element.closest('.lesson_tab[tabs="tab2"]')) {
              customChapterCount = 10;
            } else if (element.closest('.lesson_tab[tabs="tab3"]')) {
              customChapterCount = 11;
            }
          } else if (currentUrl.indexOf("fiveth-lesson") !== -1) {
            if (element.closest('.lesson_tab[tabs="tab1"]')) {
              customChapterCount = 12;
            } else if (element.closest('.lesson_tab[tabs="tab2"]')) {
              customChapterCount = 13;
            }
          } else if (currentUrl.indexOf("sixth-lesson") !== -1) {
            if (element.closest('.lesson_tab[tabs="tab1"]')) {
              customChapterCount = 14;
            } else if (element.closest('.lesson_tab[tabs="tab2"]')) {
              customChapterCount = 15;
            }
          } else if (currentUrl.indexOf("seventh-lesson") !== -1) {
            if (element.closest('.lesson_tab[tabs="tab1"]')) {
              customChapterCount = 16;
            }
          } else if (currentUrl.indexOf("eighth-lesson") !== -1) {
            if (element.closest('.lesson_tab[tabs="tab1"]')) {
              customChapterCount = 17;
            } else if (element.closest('.lesson_tab[tabs="tab2"]')) {
              customChapterCount = 18;
            } else if (element.closest('.lesson_tab[tabs="tab3"]')) {
              customChapterCount = 19;
            } else if (element.closest('.lesson_tab[tabs="tab4"]')) {
              customChapterCount = 20;
            }
          } else if (currentUrl.indexOf("ninth-lesson") !== -1) {
            if (element.closest('.lesson_tab[tabs="tab1"]')) {
              customChapterCount = 21;
            } else if (element.closest('.lesson_tab[tabs="tab2"]')) {
              customChapterCount = 22;
            }
          } else if (currentUrl.indexOf("tenth-lesson") !== -1) {
            if (element.closest('.lesson_tab[tabs="tab1"]')) {
              customChapterCount = 23;
            }
          } else if (currentUrl.indexOf("eleventh-lesson") !== -1) {
            if (element.closest('.lesson_tab[tabs="tab1"]')) {
              customChapterCount = 24;
            } else if (element.closest('.lesson_tab[tabs="tab2"]')) {
              customChapterCount = 25;
            }
          } else if (currentUrl.indexOf("twelfth-lesson") !== -1) {
            if (element.closest('.lesson_tab[tabs="tab1"]')) {
              customChapterCount = 26;
            } else if (element.closest('.lesson_tab[tabs="tab2"]')) {
              customChapterCount = 27;
            } else if (element.closest('.lesson_tab[tabs="tab3"]')) {
              customChapterCount = 28;
            }
          } else if (currentUrl.indexOf("thirteenth-lesson") !== -1) {
            if (element.closest('.lesson_tab[tabs="tab1"]')) {
              customChapterCount = 29;
            } else if (element.closest('.lesson_tab[tabs="tab2"]')) {
              customChapterCount = 30;
            }
          } else if (currentUrl.indexOf("fourteenth-lesson") !== -1) {
            if (element.closest('.lesson_tab[tabs="tab1"]')) {
              customChapterCount = 31;
            } else if (element.closest('.lesson_tab[tabs="tab2"]')) {
              customChapterCount = 32;
            }
          }

          getSideProgress(lessonspass, customChapterCount);
        });
      });

      if (currentUrl.indexOf("-lesson") !== -1) {
        function setAvatar(href, block) {
          block.classList.remove("noAvatar");
          block.textContent = "";
          block.style.backgroundImage = 'url("' + href + '")';
        }

        function userAvatar(name, avatar) {
          var userAvatars = document.querySelectorAll(".blop_icon.client");
          userAvatars.forEach((userAvatar) => {
            if (avatar !== "" && avatar !== undefined) {
              setAvatar(avatar, userAvatar);
            } else {
              userAvatar.classList.add("noAvatar");
              var str = name;
              var firstLetter = str[0];
              userAvatar.textContent = firstLetter;
            }
          });
        }
        userAvatar(user_name, user_avatar);

        function userName(name) {
          var userNames = document.querySelectorAll(".name_user");
          userNames.forEach((userName) => {
            userName.textContent = name;
          });
        }
        userName(user_name);

        if (data.data.sex === "female") {
          var swapSexSpans = document.querySelectorAll(".swap_sex");
          var elementsWithAttribute = document.querySelectorAll('[sex14img]');
          if (elementsWithAttribute.length > 0) {
            elementsWithAttribute[0].classList.add('sex14img_none');
            elementsWithAttribute[1].classList.remove('sex14img_none');
          }
          swapSexSpans.forEach((span) => {
            var text = span.textContent;
            if (text === "народився") {
              span.textContent = "народилася";
            } else if (text === "готовий") {
              span.textContent = "готова";
            } else if (text === "Готовий") {
              span.textContent = "Готова";
            } else if (text === "Закінчив") {
              span.textContent = "Закінчила";
            } else if (text === "вступив") {
              span.textContent = "вступила";
            } else if (text === "пішов") {
              span.textContent = "пішла";
            } else if (text === "прочитав") {
              span.textContent = "прочитала";
            } else if (text === "сам") {
              span.textContent = "сама";
            } else if (text === "найняв") {
              span.textContent = "найняла";
            } else if (text === "виростив") {
              span.textContent = "виростила";
            } else if (text === "готувався") {
              span.textContent = "готувалася";
            } else if (text === "знайомий") {
              span.textContent = "знайома";
            } else if (text === "налаштований") {
              span.textContent = "налаштована";
            } else if (text === "знайшов") {
              span.textContent = "знайшла";
            } else if (text === "нашого") {
              span.textContent = "нашу";
            } else if (text === "Впевнений") {
              span.textContent = "Впевнена";
            } else if (text === "пояснив") {
              span.textContent = "пояснила";
            } else if (text === "Радий") {
              span.textContent = "Рада";
            } else if (text === "сказав") {
              span.textContent = "сказала";
            } else if (text === "відпочив") {
              span.textContent = "відпочила";
            } else if (text === "боягузом") {
              span.textContent = "боягузкою";
            } else if (text === "Зрозумів") {
              span.textContent = "Зрозуміла";
            } else if (text === "згоден") {
              span.textContent = "згодна";
            } else if (text === "Згоден") {
              span.textContent = "Згодна";
            } else if (text === "сам") {
              span.textContent = "сама";
            } else if (text === "Міг") {
              span.textContent = "Могла";
            } else if (text === "був") {
              span.textContent = "була";
            } else if (text === "бачив") {
              span.textContent = "бачила";
            } else if (text === "найкращий") {
              span.textContent = "найкраща";
            } else if (text === "радий") {
              span.textContent = "рада";
            } else if (text === "уявив") {
              span.textContent = "уявила";
            } else if (text === "працював") {
              span.textContent = "працювала";
            } else if (text === "пробував") {
              span.textContent = "пробувала";
            } else if (text === "поставив") {
              span.textContent = "поставила";
            } else if (text === "Зрозумів") {
              span.textContent = "Зрозуміла";
            } else if (text === "думав") {
              span.textContent = "думала";
            } else if (text === "сам") {
              span.textContent = "сама";
            } else if (text === "правий") {
              span.textContent = "права";
            } else if (text === "приєднався") {
              span.textContent = "приєдналась";
            } else if (text === "хотів") {
              span.textContent = "хотіла";
            } else if (text === "питав") {
              span.textContent = "питала";
            } else if (text === "вдячний") {
              span.textContent = "вдячна";
            } else if (text === "вислухав") {
              span.textContent = "вислухала";
            } else if (text === "Поговорив") {
              span.textContent = "Поговорила";
            } else if (text === "отримав") {
              span.textContent = "отримала";
            } else if (text === "слухав") {
              span.textContent = "слухала";
            } else if (text === "порахував") {
              span.textContent = "порахувала";
            } else if (text === "встиг") {
              span.textContent = "встигла";
            } else if (text === "Він") {
              span.textContent = "Вона";
            } else if (text === "винен") {
              span.textContent = "винна";
            } else if (text === "послухав") {
              span.textContent = "послухала";
            } else if (text === "Згоден") {
              span.textContent = "Згодна";
            } else if (text === "покликав") {
              span.textContent = "покликала";
            } else if (text === "задоволений") {
              span.textContent = "задоволена";
            } else if (text === "почав") {
              span.textContent = "почала";
            } else if (text === "говорив") {
              span.textContent = "говорила";
            } else if (text === "радий") {
              span.textContent = "рада";
            } else if (text === "чув") {
              span.textContent = "чула";
            } else if (text === "правий") {
              span.textContent = "права";
            } else if (text === "дізнався") {
              span.textContent = "дізналася";
            } else if (text === "впевнений") {
              span.textContent = "впевнена";
            } else if (text === "подумав") {
              span.textContent = "подумала";
            }
          });
        }
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
