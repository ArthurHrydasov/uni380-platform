var nameBD = document.getElementById("nameBD");
nameBD = nameBD.innerHTML;
if (nameBD !== user_email) {
  window.location.href = "/";
}
const primalButtons = document.querySelectorAll(
  ".button_primal, .start_button"
);
var buttonWithAttrs = document.querySelectorAll("[numberBlop]");
var url = window.location.href;
var fragments = url.split("/");
const tab1BD = document.getElementById("tab1BD");
var tab1BDVal = tab1BD.textContent;
tab1BDVal = tab1BDVal.split("|/|");

var countProgressTab1 = tab1BDVal[0];
var open_rateAnswear = tab1BDVal[1];
var email_conversionAnswear = tab1BDVal[2];
var detailsAnswear = tab1BDVal[3];
var main_problemAnswear = tab1BDVal[4];
var best_resultsmAnswear = tab1BDVal[5];
var url_utmAnswear = tab1BDVal[6];
var ab_testAnswear = tab1BDVal[7];
var utm_chooseAnswear = tab1BDVal[8];
var analyticsAnswear = tab1BDVal[9];
var manager_analysAnswear = tab1BDVal[10];
var meeting_formatAnswear = tab1BDVal[11];
var cost_blogerAnswear = tab1BDVal[12];
var middle_coastAnswear = tab1BDVal[13];
var canal_economyAnswear = tab1BDVal[14];
var budget_cutAnswear = tab1BDVal[15];
var starAnswearTab1 = tab1BDVal[16];

function availableLinks(link) {
  document.getElementById(link).classList.add("available");
}
function activetab(link, tabsValue) {
  document.getElementById(link).classList.add("available");
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
  sublinkWrappers.forEach(function (wrapper) {
    wrapper.classList.remove("active");
  });
  document.getElementById(link).classList.add("active");
}

function create_lesson(collection_id, user_email, user_id) {
  var data = {
    collection_id: collection_id,
    user_email: user_email,
    user_id: user_id
  };
  // console.log(data);
  fetch("https://uni380-ua-f2a8d215b9ab.herokuapp.com/create-lesson", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then((response) => response.json())
    .then((foundUser) => {
      console.log(foundUser);
    })
    .catch((error) => {
      console.error(error);
    });
}
create_lesson("6556071b08de84914fd787a2", user_email, fragments[4]);

function radioCheck(blopElement) {
  var radio = blopElement.querySelector('input[type="radio"]:checked');
  if (blopElement.id === "details") {
    if (radio) {
      var value = radio.value;
      if (value === "one") {
        document.querySelector('[details="no"]').remove();
      } else {
        var removeYes = document.querySelectorAll('[details="yes"]');
        removeYes.forEach((yes) => {
          yes.remove();
        });
      }
    }
  } else {
    if (radio) {
      var value = radio.value;
      var radioAnswer = blopElement.nextElementSibling.querySelector(
        "." + value
      );
      radioAnswer.classList.add("answer_visible");
    }
  }
}

function meeting_formatCheck() {
  var meeting_formatInfo = document.getElementById("meeting_format");
  var meeting_formatForm = meeting_formatInfo.querySelector("form");
  var meeting_formatElements = meeting_formatForm.querySelectorAll(
    ".check_input"
  );

  var meeting_formatFirst = meeting_formatElements[0].querySelector(
    'input[type="checkbox"]'
  );
  var meeting_formatSecond = meeting_formatElements[1].querySelector(
    'input[type="checkbox"]'
  );
  var meeting_formatThird = meeting_formatElements[2].querySelector(
    'input[type="checkbox"]'
  );
  var meeting_formatFour = meeting_formatElements[3].querySelector(
    'input[type="checkbox"]'
  );
  var meeting_formatFive = meeting_formatElements[4].querySelector(
    'input[type="checkbox"]'
  );

  if (
    meeting_formatFirst.checked &&
    meeting_formatSecond.checked &&
    meeting_formatThird.checked &&
    !meeting_formatFour.checked &&
    !meeting_formatFive.checked
  ) {
    meeting_formatInfo.nextElementSibling
      .querySelector(".no")
      .classList.add("hide");
    meeting_formatInfo.nextElementSibling
      .querySelector(".maybe")
      .classList.add("hide");
    meeting_formatInfo.nextElementSibling
      .querySelector(".yes")
      .classList.remove("hide");
  } else if (
    meeting_formatFirst.checked &&
    meeting_formatSecond.checked &&
    meeting_formatThird.checked &&
    meeting_formatFour.checked &&
    !meeting_formatFive.checked
  ) {
    meeting_formatInfo.nextElementSibling
      .querySelector(".no")
      .classList.add("hide");
    meeting_formatInfo.nextElementSibling
      .querySelector(".maybe")
      .classList.add("hide");
    meeting_formatInfo.nextElementSibling
      .querySelector(".yes")
      .classList.remove("hide");
  } else if (
    !meeting_formatFirst.checked &&
    !meeting_formatSecond.checked &&
    !meeting_formatThird.checked &&
    meeting_formatFour.checked &&
    !meeting_formatFive.checked
  ) {
    meeting_formatInfo.nextElementSibling
      .querySelector(".no")
      .classList.add("hide");
    meeting_formatInfo.nextElementSibling
      .querySelector(".maybe")
      .classList.add("hide");
    meeting_formatInfo.nextElementSibling
      .querySelector(".yes")
      .classList.remove("hide");
  } else if (
    !meeting_formatFirst.checked &&
    !meeting_formatSecond.checked &&
    !meeting_formatThird.checked &&
    !meeting_formatFour.checked &&
    meeting_formatFive.checked
  ) {
    meeting_formatInfo.nextElementSibling
      .querySelector(".no")
      .classList.remove("hide");
    meeting_formatInfo.nextElementSibling
      .querySelector(".maybe")
      .classList.add("hide");
    meeting_formatInfo.nextElementSibling
      .querySelector(".yes")
      .classList.add("hide");
  } else {
    meeting_formatInfo.nextElementSibling
      .querySelector(".no")
      .classList.add("hide");
    meeting_formatInfo.nextElementSibling
      .querySelector(".yes")
      .classList.add("hide");
    meeting_formatInfo.nextElementSibling
      .querySelector(".maybe")
      .classList.remove("hide");
  }
}

function tab1Progress(numberBlop) {
  if (numberBlop > 0 && numberBlop !== "" && numberBlop !== undefined) {
    document
      .querySelector("div[tabs='tab1'] .start_button")
      .classList.add("hideButton");
    var targetButton = document.querySelector(
      'div[tabs="tab1"] [numberBlop="' + numberBlop + '"]'
    );
    var targetElement = targetButton.closest('[blop="main"]');
    var nextTargetElement = targetElement.nextElementSibling;
    var parentElement = targetElement.parentNode;
    var blopBlocks = Array.from(
      parentElement.querySelectorAll('[blop="main"]')
    );
    var lastIndex = blopBlocks.indexOf(targetElement) - 1;

    function addVisClass(block) {
      block.classList.add("next_visible", "done_blop", "blop_animate");
    }
    for (var i = 0; i <= lastIndex; i++) {
      addVisClass(blopBlocks[i]);
    }
    addVisClass(targetElement);
    nextTargetElement.classList.add("next_visible", "blop_animate");
  }

  function checkboxGetInfo(block, value) {
    var str = value;
    var arrs = str.split(",");
    var checkboxes = block.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(function (checkbox) {
      if (arrs.includes(checkbox.name)) {
        checkbox.checked = true;
        var divElement = checkbox.previousElementSibling;
        if (divElement && divElement.classList.contains("w-checkbox-input")) {
          divElement.classList.add("w--redirected-checked");
        }
      }
    });
    if (block && block.id === "meeting_format") {
      meeting_formatCheck();
    }
  }

  function starGetInfo(starBlock, bd_star_ratingVal) {
    starBlock.classList.add("done_blop");
    var targetButton = starBlock.querySelector(
      'input[type="radio"][value="' + bd_star_ratingVal + '"]'
    );
    var targetElement = targetButton.closest(".fs_starrating-1_item");
    var starBlocks = Array.from(
      starBlock.querySelectorAll(".fs_starrating-1_item")
    );
    var lastIndex = starBlocks.indexOf(targetElement) - 1;
    function addActiveClass(block) {
      var starIcon = block.querySelector(".fs_starrating-1_icon");
      starIcon.classList.add("active");
    }
    for (var i = 0; i <= lastIndex; i++) {
      addActiveClass(starBlocks[i]);
    }
    addActiveClass(targetElement);
  }

  function radioGetInfo(block, value) {
    var radioButton = block.querySelector(
      'input[type="radio"][value="' + value + '"]'
    );
    radioButton.checked = true;
    var divElement = radioButton.previousElementSibling;
    if (divElement && divElement.classList.contains("w-radio-input")) {
      divElement.classList.add("w--redirected-checked");
    }
    radioCheck(block);
  }

  function textareaGethInfo(block, value) {
    console.log(block);

    var textarea = block.querySelector("textarea");
    textarea.value = value;

    if (countProgressTab1 !== "") {
      if (block.classList.contains("open_rate")) {
        function textareaopen_rate_calc(blop) {
          var value = blop.querySelector("textarea").value;
          // var cleanedString = value.replace(/[$\s\-\+]/g, "");
          var cleanedString = value.replace(/[^0-9.]/g, "");
          var radioAnswer;
          if (cleanedString === "12.5") {
            radioAnswer = blop.nextElementSibling.querySelector(".one");
            radioAnswer.classList.add("answer_visible");
          } else {
            radioAnswer = blop.nextElementSibling.querySelector(".two");
            radioAnswer.classList.add("answer_visible");
          }
        }
        textareaopen_rate_calc(block);
      }
      if (block.classList.contains("middle_coast")) {
        function middle_coast(blop) {
          var value = blop.querySelector("textarea").value;
          // var cleanedString = value.replace(/[$\s\-\+]/g, "");
          var cleanedString = value.replace(/[^0-9.]/g, "");
          var radioAnswer;
          if (cleanedString === "25.67") {
            radioAnswer = blop.nextElementSibling.querySelector(".one");
            radioAnswer.classList.add("answer_visible");
          } else {
            radioAnswer = blop.nextElementSibling.querySelector(".two");
            radioAnswer.classList.add("answer_visible");
          }
        }
        middle_coast(block);
      }
    }
  }

  if (open_rateAnswear !== "" && open_rateAnswear !== undefined) {
    const open_rateTask = document.getElementById("open_rate");
    textareaGethInfo(open_rateTask, open_rateAnswear);
  }
  if (email_conversionAnswear !== "" && email_conversionAnswear !== undefined) {
    const email_conversionTask = document.getElementById("email_conversion");
    radioGetInfo(email_conversionTask, email_conversionAnswear);
  }
  if (detailsAnswear !== "" && detailsAnswear !== undefined) {
    const detailsTask = document.getElementById("details");
    radioGetInfo(detailsTask, detailsAnswear);
  }
  if (main_problemAnswear !== "" && main_problemAnswear !== undefined) {
    const main_problemTask = document.getElementById("main_problem");
    radioGetInfo(main_problemTask, main_problemAnswear);
  }
  if (best_resultsmAnswear !== "" && best_resultsmAnswear !== undefined) {
    const best_resultsTask = document.getElementById("best_results");
    radioGetInfo(best_resultsTask, best_resultsmAnswear);
  }
  if (url_utmAnswear !== "" && url_utmAnswear !== undefined) {
    const url_utmTask = document.getElementById("url_utm");
    radioGetInfo(url_utmTask, url_utmAnswear);
  }
  if (ab_testAnswear !== "" && ab_testAnswear !== undefined) {
    const ab_testTask = document.getElementById("ab_test");
    radioGetInfo(ab_testTask, ab_testAnswear);
  }
  if (utm_chooseAnswear !== "" && utm_chooseAnswear !== undefined) {
    const utm_chooseTask = document.getElementById("utm_choose");
    radioGetInfo(utm_chooseTask, utm_chooseAnswear);
  }
  if (analyticsAnswear !== "" && analyticsAnswear !== undefined) {
    const analyticsTask = document.getElementById("analytics");
    textareaGethInfo(analyticsTask, analyticsAnswear);
  }
  if (manager_analysAnswear !== "" && manager_analysAnswear !== undefined) {
    const manager_analysTask = document.getElementById("manager_analys");
    radioGetInfo(manager_analysTask, manager_analysAnswear);
  }
  if (meeting_formatAnswear !== "" && meeting_formatAnswear !== undefined) {
    const meeting_formatTask = document.getElementById("meeting_format");
    checkboxGetInfo(meeting_formatTask, meeting_formatAnswear);
  }
  if (cost_blogerAnswear !== "" && cost_blogerAnswear !== undefined) {
    const cost_blogerTask = document.getElementById("cost_bloger");
    radioGetInfo(cost_blogerTask, cost_blogerAnswear);
  }
  if (middle_coastAnswear !== "" && middle_coastAnswear !== undefined) {
    const middle_coastTask = document.getElementById("middle_coast");
    textareaGethInfo(middle_coastTask, middle_coastAnswear);
  }
  if (canal_economyAnswear !== "" && canal_economyAnswear !== undefined) {
    const canal_economyTask = document.getElementById("canal_economy");
    radioGetInfo(canal_economyTask, canal_economyAnswear);
  }
  if (budget_cutAnswear !== "" && budget_cutAnswear !== undefined) {
    const budget_cutTask = document.getElementById("budget_cut");
    radioGetInfo(budget_cutTask, budget_cutAnswear);
  }

  if (starAnswearTab1 !== "" && starAnswearTab1 !== undefined) {
    starGetInfo(
      document.querySelector('div[tabs="tab1"] .star_blop'),
      starAnswearTab1
    );
  }

  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth"
  });
}

if (countProgressTab1 !== "" && countProgressTab1 !== undefined) {
  tab1Progress(countProgressTab1);
}

primalButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    var blopElement = button.closest(".blop");
    if (blopElement) {
      blopElement.classList.add("done_blop");

      radioCheck(blopElement);
      meeting_formatCheck();

      blopElement.nextElementSibling.classList.add("next_visible");
      setTimeout(function () {
        blopElement.nextElementSibling.classList.add("blop_animate");
      }, 1);

      if (button.classList.contains("last_button")) {
        var ss = button.getAttribute("numberBlop");
        create_lesson("6556071b08de84914fd787a2", user_email, fragments[4]);

        var parent = button.closest(".lesson_tab").getAttribute("tabs");
      }
    }
    if (button.classList.contains("start_button")) {
      var tabClosest = button.closest("[tabs]");
      var attr = tabClosest.getAttribute("tabs");
      button.classList.add("hideButton");
      if (attr) {
        tabClosest.querySelector(".first_blop").classList.add("next_visible");
        setTimeout(function () {
          tabClosest.querySelector(".first_blop").classList.add("blop_animate");
        }, 1);
      }
    }
  });
});

var checks = document.querySelectorAll(
  '.check_input input[type="checkbox"], .check_input input[type="radio"]'
);

checks.forEach(function (check) {
  check.addEventListener("click", function () {
    var blopElementCheck = check.closest(".blop");
    var checkboxes = blopElementCheck.querySelectorAll(
      'input[type="checkbox"], input[type="radio"]'
    );

    var isAnyCheckboxChecked = Array.from(checkboxes).some(function (checkbox) {
      return checkbox.checked;
    });

    if (blopElementCheck.classList.contains("in_variaty_blop")) {
      if (isAnyCheckboxChecked) {
        if (blopElementCheck) {
          blopElementCheck
            .querySelector(".variety_answer")
            .removeAttribute("state");
        }
      } else {
        if (blopElementCheck) {
          blopElementCheck
            .querySelector(".variety_answer")
            .setAttribute("state", "blocked");
        }
      }
    } else {
      if (isAnyCheckboxChecked) {
        if (blopElementCheck) {
          blopElementCheck
            .querySelector(".button_primal")
            .removeAttribute("state");
        }
      } else {
        if (blopElementCheck) {
          blopElementCheck
            .querySelector(".button_primal")
            .setAttribute("state", "blocked");
        }
      }
    }
  });
});

var scrollButtons = document.querySelectorAll(
  ".button_primal, .side_bar_sublink_wrapper, .start_button"
);

scrollButtons.forEach((scrollButton) => {
  scrollButton.addEventListener("click", () => {
    var mainElement;
    if (scrollButton.classList.contains("side_bar_sublink_wrapper")) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth"
      });
    } else {
      if (scrollButton.classList.contains("start_button")) {
        var closest = scrollButton.closest("[tabs]");
        mainElement = closest.querySelector(".first_blop");
      } else {
        mainElement = scrollButton.closest(".blop").nextElementSibling;
      }

      var offset;
      if (window.innerWidth < 992) {
        offset = 75;
      } else {
        offset = 30;
      }
      var topOffset =
        mainElement.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  });
});

var textareas = document.querySelectorAll("textarea");

textareas.forEach((textarea) => {
  textarea.addEventListener("input", function () {
    var textareBlop = textarea.closest(".blop");

    // middle_coast

    if (textarea.closest("#open_rate") || textarea.closest("#middle_coast")) {
      function validateInput(input) {
        const regex = /^[0-9+-]*$/;
        if (!regex.test(input.value)) {
          // input.value = input.value.replace(/[^0-9+-]/g, "");
          input.value = input.value.replace(/[^0-9.]/g, "");
        }
        if (input.value.trim() === "") {
          if (textareBlop) {
            textareBlop
              .querySelector("a[numberblop]")
              .setAttribute("state", "blocked");
          }
        } else {
          if (textareBlop) {
            textareBlop.querySelector("a[numberblop]").removeAttribute("state");
          }
        }
      }
      textarea.addEventListener("input", (e) => {
        validateInput(e.target);
      });
      textarea.addEventListener("mouseout", (e) => {
        validateInput(e.target);
      });
    } else {
      if (textarea.value.trim() === "") {
        if (textareBlop) {
          textareBlop
            .querySelector("a[numberblop]")
            .setAttribute("state", "blocked");
        }
      } else {
        if (textareBlop) {
          textareBlop.querySelector("a[numberblop]").removeAttribute("state");
        }
      }
    }
  });
});

buttonWithAttrs.forEach((buttonWithAttr) => {
  buttonWithAttr.addEventListener("click", (event) => {
    var attributeValue = buttonWithAttr.getAttribute("numberBlop");

    var buttonSearch = buttonWithAttr;
    function collectionIdButtons() {
      var parentElement = findParentWithAttribute(buttonSearch, "tabs");
      function findParentWithAttribute(element, attributeName, attributeValue) {
        while (element) {
          if (element.getAttribute(attributeName)) {
            return element;
          }
          element = element.parentElement;
        }
        return null;
      }
      if (parentElement) {
        var tab = parentElement.getAttribute("tabs");
      }
      return tab;
    }

    function radioPushInfo(block) {
      var radioButton = block.querySelector('input[type="radio"]:checked');
      var selectedValue = radioButton.value;
      var result = selectedValue;
      return result;
    }

    function checkboxPushInfo(block) {
      var checkboxes = block.querySelectorAll('input[type="checkbox"]:checked');
      var selectedValues = [];
      checkboxes.forEach(function (checkbox) {
        selectedValues.push(checkbox.name);
      });
      var joinedString = selectedValues.join(",");
      var result = joinedString;
      return result;
    }

    function textareaPushInfo(block) {
      var textarea = block.querySelector("textarea");
      var textareaNoEnter = textarea.value;
      let newStr = textareaNoEnter.replace(/\n/g, "");
      var selectedValue = newStr;
      var result = selectedValue;

      if (block.classList.contains("open_rate")) {
        function textareaopen_rate(blop) {
          var value = blop.querySelector("textarea").value;
          // var cleanedString = value.replace(/[$\s\-\+]/g, "");
          var cleanedString = value.replace(/[^0-9.]/g, "");
          var radioAnswer;
          if (cleanedString === "12.5") {
            radioAnswer = blop.nextElementSibling.querySelector(".one");
            radioAnswer.classList.add("answer_visible");
          } else {
            radioAnswer = blop.nextElementSibling.querySelector(".two");
            radioAnswer.classList.add("answer_visible");
          }
        }
        textareaopen_rate(block);
      }

      if (block.classList.contains("middle_coast")) {
        function middle_coast(blop) {
          var value = blop.querySelector("textarea").value;
          // var cleanedString = value.replace(/[$\s\-\+]/g, "");
          var cleanedString = value.replace(/[^0-9.]/g, "");
          var radioAnswer;
          if (cleanedString === "25.67") {
            radioAnswer = blop.nextElementSibling.querySelector(".one");
            radioAnswer.classList.add("answer_visible");
          } else {
            radioAnswer = blop.nextElementSibling.querySelector(".two");
            radioAnswer.classList.add("answer_visible");
          }
        }
        middle_coast(block);
      }

      return result;
    }

    if (buttonWithAttr.closest("#open_rate")) {
      const open_rate_calc_textareaTask = document.getElementById("open_rate");
      var open_rateResult = textareaPushInfo(open_rate_calc_textareaTask);
    }
    if (buttonWithAttr.closest("#email_conversion")) {
      const email_conversionTask = document.getElementById("email_conversion");
      var email_conversionResult = radioPushInfo(email_conversionTask);
    }
    if (buttonWithAttr.closest("#details")) {
      const detailsTask = document.getElementById("details");
      var detailsResult = radioPushInfo(detailsTask);
    }
    if (buttonWithAttr.closest("#main_problem")) {
      const main_problemTask = document.getElementById("main_problem");
      var main_problemResult = radioPushInfo(main_problemTask);
    }
    if (buttonWithAttr.closest("#best_results")) {
      const best_resultsTask = document.getElementById("best_results");
      var best_resultsResult = radioPushInfo(best_resultsTask);
    }
    if (buttonWithAttr.closest("#url_utm")) {
      const url_utmTask = document.getElementById("url_utm");
      var url_utmResult = radioPushInfo(url_utmTask);
    }
    if (buttonWithAttr.closest("#ab_test")) {
      const ab_testTask = document.getElementById("ab_test");
      var ab_testResult = radioPushInfo(ab_testTask);
    }
    if (buttonWithAttr.closest("#utm_choose")) {
      const utm_chooseTask = document.getElementById("utm_choose");
      var utm_chooseResult = radioPushInfo(utm_chooseTask);
    }
    if (buttonWithAttr.closest("#analytics")) {
      const analyticsTask = document.getElementById("analytics");
      var analyticsResult = textareaPushInfo(analyticsTask);
    }
    if (buttonWithAttr.closest("#manager_analys")) {
      const manager_analysTask = document.getElementById("manager_analys");
      var manager_analysResult = radioPushInfo(manager_analysTask);
    }
    if (buttonWithAttr.closest("#meeting_format")) {
      const meeting_formatTask = document.getElementById("meeting_format");
      var meeting_formatResult = checkboxPushInfo(meeting_formatTask);
    }
    if (buttonWithAttr.closest("#cost_bloger")) {
      const cost_blogerTask = document.getElementById("cost_bloger");
      var cost_blogerResult = radioPushInfo(cost_blogerTask);
    }
    if (buttonWithAttr.closest("#middle_coast")) {
      const middle_coastTask = document.getElementById("middle_coast");
      var middle_coastResult = textareaPushInfo(middle_coastTask);
    }
    if (buttonWithAttr.closest("#canal_economy")) {
      const canal_economyTask = document.getElementById("canal_economy");
      var canal_economyResult = radioPushInfo(canal_economyTask);
    }
    if (buttonWithAttr.closest("#budget_cut")) {
      const budget_cutTask = document.getElementById("budget_cut");
      var budget_cutResult = radioPushInfo(budget_cutTask);
    }

    // ---------------

    function formSubmit(dataTab1) {
      var data = {
        collection_id: "6546a14212815d6340defd76",
        user_id: fragments[4],
        user_tab1: dataTab1
      };
      console.log(data);

      fetch("https://uni380-ua-f2a8d215b9ab.herokuapp.com/lesson-info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      // .then((response) => response.json())
      // .then((data) => {
      //   console.log(data);
      // });
    }

    function starButtons(tab) {
      var but = buttonWithAttr.closest(".fs_starrating-1_item");
      var clickedButton = but.querySelector(
        '.lesson_tab[tabs="' + tab + '"] input[type="radio"]'
      );
      var star = clickedButton.value;
      return star;
    }

    function dataPush() {
      var tab = collectionIdButtons();
      var star1 = "";

      if (
        buttonWithAttr.closest(".lesson_tab[tabs='tab1'] .fs_starrating-1_item")
      ) {
        star1 = starButtons(tab);
      }

      countProgressTab1 = attributeValue;

      var open_rateBd;
      if (open_rateResult !== "" && open_rateResult !== undefined) {
        open_rateAnswear = open_rateResult;
        open_rateBd = "|/|" + open_rateAnswear;
      } else if (open_rateAnswear !== "" && open_rateAnswear !== undefined) {
        open_rateBd = "|/|" + open_rateAnswear;
      } else {
        open_rateBd = "";
      }

      var email_conversionBd;
      if (
        email_conversionResult !== "" &&
        email_conversionResult !== undefined
      ) {
        email_conversionAnswear = email_conversionResult;
        email_conversionBd = "|/|" + email_conversionAnswear;
      } else if (
        email_conversionAnswear !== "" &&
        email_conversionAnswear !== undefined
      ) {
        email_conversionBd = "|/|" + email_conversionAnswear;
      } else {
        email_conversionBd = "";
      }

      var detailsBd;
      if (detailsResult !== "" && detailsResult !== undefined) {
        detailsAnswear = detailsResult;
        detailsBd = "|/|" + detailsAnswear;
      } else if (detailsAnswear !== "" && detailsAnswear !== undefined) {
        detailsBd = "|/|" + detailsAnswear;
      } else {
        detailsBd = "";
      }

      var main_problemBd;
      if (main_problemResult !== "" && main_problemResult !== undefined) {
        main_problemAnswear = main_problemResult;
        main_problemBd = "|/|" + main_problemAnswear;
      } else if (
        main_problemAnswear !== "" &&
        main_problemAnswear !== undefined
      ) {
        main_problemBd = "|/|" + main_problemAnswear;
      } else {
        main_problemBd = "";
      }

      var best_resultsBd;
      if (best_resultsResult !== "" && best_resultsResult !== undefined) {
        best_resultsmAnswear = best_resultsResult;
        best_resultsBd = "|/|" + best_resultsmAnswear;
      } else if (
        best_resultsmAnswear !== "" &&
        best_resultsmAnswear !== undefined
      ) {
        best_resultsBd = "|/|" + best_resultsmAnswear;
      } else {
        best_resultsBd = "";
      }

      var url_utmBd;
      if (url_utmResult !== "" && url_utmResult !== undefined) {
        url_utmAnswear = url_utmResult;
        url_utmBd = "|/|" + url_utmAnswear;
      } else if (url_utmAnswear !== "" && url_utmAnswear !== undefined) {
        url_utmBd = "|/|" + url_utmAnswear;
      } else {
        url_utmBd = "";
      }

      var ab_testBd;
      if (ab_testResult !== "" && ab_testResult !== undefined) {
        ab_testAnswear = ab_testResult;
        ab_testBd = "|/|" + ab_testAnswear;
      } else if (ab_testAnswear !== "" && ab_testAnswear !== undefined) {
        ab_testBd = "|/|" + ab_testAnswear;
      } else {
        ab_testBd = "";
      }

      var utm_chooseBd;
      if (utm_chooseResult !== "" && utm_chooseResult !== undefined) {
        utm_chooseAnswear = utm_chooseResult;
        utm_chooseBd = "|/|" + utm_chooseAnswear;
      } else if (utm_chooseAnswear !== "" && utm_chooseAnswear !== undefined) {
        utm_chooseBd = "|/|" + utm_chooseAnswear;
      } else {
        utm_chooseBd = "";
      }

      var analyticsBd;
      if (analyticsResult !== "" && analyticsResult !== undefined) {
        analyticsAnswear = analyticsResult;
        analyticsBd = "|/|" + analyticsAnswear;
      } else if (analyticsAnswear !== "" && analyticsAnswear !== undefined) {
        analyticsBd = "|/|" + analyticsAnswear;
      } else {
        analyticsBd = "";
      }

      var manager_analysBd;
      if (manager_analysResult !== "" && manager_analysResult !== undefined) {
        manager_analysAnswear = manager_analysResult;
        manager_analysBd = "|/|" + manager_analysAnswear;
      } else if (
        manager_analysAnswear !== "" &&
        manager_analysAnswear !== undefined
      ) {
        manager_analysBd = "|/|" + manager_analysAnswear;
      } else {
        manager_analysBd = "";
      }

      var meeting_formatBd;
      if (meeting_formatResult !== "" && meeting_formatResult !== undefined) {
        meeting_formatAnswear = meeting_formatResult;
        meeting_formatBd = "|/|" + meeting_formatAnswear;
      } else if (
        meeting_formatAnswear !== "" &&
        meeting_formatAnswear !== undefined
      ) {
        meeting_formatBd = "|/|" + meeting_formatAnswear;
      } else {
        meeting_formatBd = "";
      }

      var cost_blogerBd;
      if (cost_blogerResult !== "" && cost_blogerResult !== undefined) {
        cost_blogerAnswear = cost_blogerResult;
        cost_blogerBd = "|/|" + cost_blogerAnswear;
      } else if (
        cost_blogerAnswear !== "" &&
        cost_blogerAnswear !== undefined
      ) {
        cost_blogerBd = "|/|" + cost_blogerAnswear;
      } else {
        cost_blogerBd = "";
      }

      var middle_coastBd;
      if (middle_coastResult !== "" && middle_coastResult !== undefined) {
        middle_coastAnswear = middle_coastResult;
        middle_coastBd = "|/|" + middle_coastAnswear;
      } else if (
        middle_coastAnswear !== "" &&
        middle_coastAnswear !== undefined
      ) {
        middle_coastBd = "|/|" + middle_coastAnswear;
      } else {
        middle_coastBd = "";
      }

      var canal_economyBd;
      if (canal_economyResult !== "" && canal_economyResult !== undefined) {
        canal_economyAnswear = canal_economyResult;
        canal_economyBd = "|/|" + canal_economyAnswear;
      } else if (
        canal_economyAnswear !== "" &&
        canal_economyAnswear !== undefined
      ) {
        canal_economyBd = "|/|" + canal_economyAnswear;
      } else {
        canal_economyBd = "";
      }

      var budget_cutBd;
      if (budget_cutResult !== "" && budget_cutResult !== undefined) {
        budget_cutAnswear = budget_cutResult;
        budget_cutBd = "|/|" + budget_cutAnswear;
      } else if (budget_cutAnswear !== "" && budget_cutAnswear !== undefined) {
        budget_cutBd = "|/|" + budget_cutAnswear;
      } else {
        budget_cutBd = "";
      }

      // ----------

      var starTab1Bd;
      if (star1 !== "" && star1 !== undefined) {
        starAnswearTab1 = star1;
        starTab1Bd = "|/|" + starAnswearTab1;
      } else if (starAnswearTab1 !== "" && starAnswearTab1 !== undefined) {
        starTab1Bd = "|/|" + starAnswearTab1;
      } else {
        starTab1Bd = "";
      }

      if (tab === "tab1") {
        var dataTab1 =
          countProgressTab1 +
          open_rateBd +
          email_conversionBd +
          detailsBd +
          main_problemBd +
          best_resultsBd +
          url_utmBd +
          ab_testBd +
          utm_chooseBd +
          analyticsBd +
          manager_analysBd +
          meeting_formatBd +
          cost_blogerBd +
          middle_coastBd +
          canal_economyBd +
          budget_cutBd +
          starTab1Bd;
      }
      formSubmit(dataTab1);
    }
    dataPush();
  });
});

var theoryButtons = document.querySelectorAll("[theory]");

theoryButtons.forEach((theoryButton) => {
  theoryButton.addEventListener("click", (event) => {
    var buttonSearch = theoryButton;

    function collectionIdButtons() {
      var parentElement = findParentWithAttribute(buttonSearch, "tabs");
      function findParentWithAttribute(element, attributeName, attributeValue) {
        while (element) {
          if (element.getAttribute(attributeName)) {
            return element;
          }
          element = element.parentElement;
        }
        return null;
      }
      if (parentElement) {
        var tab = parentElement.getAttribute("tabs");
        // console.log(parentElement.getAttribute("tabs"));
      }
      return tab;
    }
    var tabs = collectionIdButtons();

    function formTheory(tab1theoryVal) {
      var data2;
      if (tabs === "tab1") {
        data2 = {
          collection_id: "6546a14212815d6340defd76",
          user_id: fragments[4],
          tab1theory: tab1theoryVal
        };
      }
      // console.log(data2);
      fetch("https://uni380-ua-f2a8d215b9ab.herokuapp.com/lesson-info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data2)
      });
      // .then((response) => response.json())
      // .then((data) => {
      //   console.log(data);
      // });
    }

    if (tabs === "tab1") {
      var tab1theoryVal = theoryButton.getAttribute("theory");
    }

    formTheory(tab1theoryVal);
  });
});

var textHeight;

if (window.innerWidth > 991) {
  textHeight = 6.25;
} else {
  textHeight = 5;
}

const textareaAll = document.querySelectorAll("textarea");
textareaAll.forEach((element) => {
  element.addEventListener("input", function () {
    this.style.height = textHeight + "rem";
    this.style.height = this.scrollHeight + "px";
  });
});
