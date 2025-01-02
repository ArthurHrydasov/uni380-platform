var nameBD = document.getElementById("nameBD");
nameBD = nameBD.innerHTML;
if (nameBD !== user_email) {
  window.location.href = "/";
}
const primalButtons = document.querySelectorAll(
  ".button_primal, .start_button",
);
var buttonWithAttrs = document.querySelectorAll("[numberBlop]");
var url = window.location.href;
var fragments = url.split("/");
const tab1BD = document.getElementById("tab1BD");
var tab1BDVal = tab1BD.textContent;
tab1BDVal = tab1BDVal.split("|/|");
const tab2BD = document.getElementById("tab2BD");
var tab2BDVal = tab2BD.textContent;
tab2BDVal = tab2BDVal.split("|/|");

var countProgressTab1 = tab1BDVal[0];
var changesAnswer = tab1BDVal[1];
var changes_stageAnswer = tab1BDVal[2];
var paybackAnswer = tab1BDVal[3];
var arppu_calcAnswer = tab1BDVal[4];
var payback_cohortAnswer = tab1BDVal[5];
var resultsAnswer = tab1BDVal[6];
var everyoneAnswer = tab1BDVal[7];
var cpo_calcAnswer = tab1BDVal[8];
var low_metricAnswer = tab1BDVal[9];
var proxyAnswer = tab1BDVal[10];
var starAnswearTab1 = tab1BDVal[11];

var countProgressTab2 = tab2BDVal[0];
var media_planAnswer = tab2BDVal[1];
var media_textAnswer = tab2BDVal[2];
var count_funnelAnswer = tab2BDVal[3];
var breakdownAnswer = tab2BDVal[4];
var media_plan_textAnswer = tab2BDVal[5];
var ctlAnswer = tab2BDVal[6];
var mediaplan_doneAnswer = tab2BDVal[7];
var mediaplan_done_textAnswer = tab2BDVal[8];
var mediaplan_finalAnswer = tab2BDVal[9];
var budget_testAnswer = tab2BDVal[10];
var budget_test_percentAnswer = tab2BDVal[11];
var starAnswearTab2 = tab2BDVal[12];

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
    '.lesson_tab[tabs="' + tabsValue + '"]',
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
    user_id: user_id,
  };
  // console.log(data);
  fetch("https://uni-platform-6db9f53f05ed.herokuapp.com/create-lesson", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((foundUser) => {
      console.log(foundUser);
    })
    .catch((error) => {
      console.error(error);
    });
}
create_lesson("6546a14212815d6340defd76", user_email, fragments[4]);

if (countProgressTab1 > 27) {
  availableLinks("ninthl_tab2");
  activetab("ninthl_tab2", "tab2");
}

function radioCheck(blopElement) {
  var radio = blopElement.querySelector('input[type="radio"]:checked');
  if (radio) {
    var value = radio.value;
    var radioAnswer = blopElement.nextElementSibling.querySelector("." + value);
    radioAnswer.classList.add("answer_visible");
  }
}

function proxyCheck() {
  var proxyInfo = document.getElementById("proxy");
  var proxyForm = proxyInfo.querySelector("form");
  var proxyElements = proxyForm.querySelectorAll(".check_input");

  var proxyFirst = proxyElements[0].querySelector('input[type="checkbox"]');
  var proxySecond = proxyElements[1].querySelector('input[type="checkbox"]');
  var proxyThird = proxyElements[2].querySelector('input[type="checkbox"]');
  var proxyFourth = proxyElements[3].querySelector('input[type="checkbox"]');
  var proxyFiveth = proxyElements[4].querySelector('input[type="checkbox"]');

  if (
    !proxyFirst.checked &&
    proxySecond.checked &&
    proxyThird.checked &&
    proxyFourth.checked &&
    proxyFiveth.checked
  ) {
    proxyInfo.nextElementSibling.querySelector(".no").classList.add("hide");
    proxyInfo.nextElementSibling.querySelector(".yes").classList.remove("hide");
  } else {
    proxyInfo.nextElementSibling.querySelector(".no").classList.remove("hide");
    proxyInfo.nextElementSibling.querySelector(".yes").classList.add("hide");
  }
}

function tab1Progress(numberBlop) {
  if (numberBlop > 0 && numberBlop !== "" && numberBlop !== undefined) {
    document
      .querySelector("div[tabs='tab1'] .start_button")
      .classList.add("hideButton");
    var targetButton = document.querySelector(
      'div[tabs="tab1"] [numberBlop="' + numberBlop + '"]',
    );
    var targetElement = targetButton.closest('[blop="main"]');
    var nextTargetElement = targetElement.nextElementSibling;
    var parentElement = targetElement.parentNode;
    var blopBlocks = Array.from(
      parentElement.querySelectorAll('[blop="main"]'),
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
    if (block && block.id === "proxy") {
      proxyCheck();
    }
  }

  function starGetInfo(starBlock, bd_star_ratingVal) {
    starBlock.classList.add("done_blop");
    var targetButton = starBlock.querySelector(
      'input[type="radio"][value="' + bd_star_ratingVal + '"]',
    );
    var targetElement = targetButton.closest(".fs_starrating-1_item");
    var starBlocks = Array.from(
      starBlock.querySelectorAll(".fs_starrating-1_item"),
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
      'input[type="radio"][value="' + value + '"]',
    );
    radioButton.checked = true;
    var divElement = radioButton.previousElementSibling;
    if (divElement && divElement.classList.contains("w-radio-input")) {
      divElement.classList.add("w--redirected-checked");
    }
    radioCheck(block);
  }
  function textareaGethInfo(block, value) {
    var textarea = block.querySelector("textarea");
    textarea.value = value;

    if (countProgressTab1 !== "") {
      if (
        block.classList.contains("arppu_calc") ||
        block.classList.contains("cpo_calc")
      ) {
        function textareaCheckEcvisition(blop) {
          var value = blop.querySelector("textarea").value;
          // var cleanedString = value.replace(/[$\s\-\+]/g, "");
          var cleanedString = value.replace(/[^0-9.]/g, "");
          var radioAnswer;
          if (cleanedString === "43.1" || cleanedString === "43.2") {
            radioAnswer = blop.nextElementSibling.querySelector(".one");
            radioAnswer.classList.add("answer_visible");
          } else {
            radioAnswer = blop.nextElementSibling.querySelector(".two");
            radioAnswer.classList.add("answer_visible");
          }
        }
        textareaCheckEcvisition(block);
      }
    }
  }

  if (changesAnswer !== "" && changesAnswer !== undefined) {
    const changesTask = document.getElementById("changes");
    radioGetInfo(changesTask, changesAnswer);
  }
  if (changes_stageAnswer !== "" && changes_stageAnswer !== undefined) {
    const changes_stageTask = document.getElementById("changes_stage");
    radioGetInfo(changes_stageTask, changes_stageAnswer);
  }
  if (paybackAnswer !== "" && paybackAnswer !== undefined) {
    const paybackTask = document.getElementById("payback");
    radioGetInfo(paybackTask, paybackAnswer);
  }
  if (arppu_calcAnswer !== "" && arppu_calcAnswer !== undefined) {
    const arppu_calcTask = document.getElementById("arppu_calc");
    textareaGethInfo(arppu_calcTask, arppu_calcAnswer);
  }
  if (payback_cohortAnswer !== "" && payback_cohortAnswer !== undefined) {
    const payback_cohortTask = document.getElementById("payback_cohort");
    radioGetInfo(payback_cohortTask, payback_cohortAnswer);
  }
  if (resultsAnswer !== "" && resultsAnswer !== undefined) {
    const resultsTask = document.getElementById("results");
    radioGetInfo(resultsTask, resultsAnswer);
  }
  if (everyoneAnswer !== "" && everyoneAnswer !== undefined) {
    const everyoneTask = document.getElementById("everyone");
    radioGetInfo(everyoneTask, everyoneAnswer);
  }
  if (cpo_calcAnswer !== "" && cpo_calcAnswer !== undefined) {
    const cpo_calcTask = document.getElementById("cpo_calc");
    textareaGethInfo(cpo_calcTask, cpo_calcAnswer);
  }
  if (low_metricAnswer !== "" && low_metricAnswer !== undefined) {
    const low_metricTask = document.getElementById("low_metric");
    radioGetInfo(low_metricTask, low_metricAnswer);
  }
  if (proxyAnswer !== "" && proxyAnswer !== undefined) {
    const proxyTask = document.getElementById("proxy");
    checkboxGetInfo(proxyTask, proxyAnswer);
  }
  if (starAnswearTab1 !== "" && starAnswearTab1 !== undefined) {
    starGetInfo(
      document.querySelector('div[tabs="tab1"] .star_blop'),
      starAnswearTab1,
    );
  }

  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
}

function tab2Progress(numberBlop) {
  if (numberBlop > 0 && numberBlop !== "" && numberBlop !== undefined) {
    document
      .querySelector("div[tabs='tab2'] .start_button")
      .classList.add("hideButton");
    var targetButton = document.querySelector(
      'div[tabs="tab2"] [numberBlop="' + numberBlop + '"]',
    );
    var targetElement = targetButton.closest('[blop="main"]');
    var nextTargetElement = targetElement.nextElementSibling;
    var parentElement = targetElement.parentNode;
    var blopBlocks = Array.from(
      parentElement.querySelectorAll('[blop="main"]'),
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
  }

  function starGetInfo(starBlock, bd_star_ratingVal) {
    starBlock.classList.add("done_blop");
    var targetButton = starBlock.querySelector(
      'input[type="radio"][value="' + bd_star_ratingVal + '"]',
    );
    var targetElement = targetButton.closest(".fs_starrating-1_item");
    var starBlocks = Array.from(
      starBlock.querySelectorAll(".fs_starrating-1_item"),
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
      'input[type="radio"][value="' + value + '"]',
    );
    radioButton.checked = true;
    var divElement = radioButton.previousElementSibling;
    if (divElement && divElement.classList.contains("w-radio-input")) {
      divElement.classList.add("w--redirected-checked");
    }
    radioCheck(block);
  }
  function textareaGethInfo(block, value) {
    var textarea = block.querySelector("textarea");
    textarea.value = value;
  }

  if (media_planAnswer !== "" && media_planAnswer !== undefined) {
    const media_planTask = document.getElementById("media_plan");
    radioGetInfo(media_planTask, media_planAnswer);
  }
  if (media_textAnswer !== "" && media_textAnswer !== undefined) {
    const media_textTask = document.getElementById("media_text");
    textareaGethInfo(media_textTask, media_textAnswer);
  }
  if (count_funnelAnswer !== "" && count_funnelAnswer !== undefined) {
    const count_funnelTask = document.getElementById("count_funnel");
    radioGetInfo(count_funnelTask, count_funnelAnswer);
  }
  if (breakdownAnswer !== "" && breakdownAnswer !== undefined) {
    const breakdownTask = document.getElementById("breakdown");
    radioGetInfo(breakdownTask, breakdownAnswer);
  }
  if (media_plan_textAnswer !== "" && media_plan_textAnswer !== undefined) {
    const media_plan_textTask = document.getElementById("media_plan_text");
    textareaGethInfo(media_plan_textTask, media_plan_textAnswer);
  }
  if (ctlAnswer !== "" && ctlAnswer !== undefined) {
    const ctlTask = document.getElementById("ctl");
    radioGetInfo(ctlTask, ctlAnswer);
  }
  if (mediaplan_doneAnswer !== "" && mediaplan_doneAnswer !== undefined) {
    const mediaplan_doneTask = document.getElementById("mediaplan_done");
    radioGetInfo(mediaplan_doneTask, mediaplan_doneAnswer);
  }
  if (
    mediaplan_done_textAnswer !== "" &&
    mediaplan_done_textAnswer !== undefined
  ) {
    const mediaplan_done_textTask = document.getElementById(
      "mediaplan_done_text",
    );
    textareaGethInfo(mediaplan_done_textTask, mediaplan_done_textAnswer);
  }
  if (mediaplan_finalAnswer !== "" && mediaplan_finalAnswer !== undefined) {
    const mediaplan_finalTask = document.getElementById("mediaplan_final");
    radioGetInfo(mediaplan_finalTask, mediaplan_finalAnswer);
  }
  if (budget_testAnswer !== "" && budget_testAnswer !== undefined) {
    const budget_testTask = document.getElementById("budget_test");
    radioGetInfo(budget_testTask, budget_testAnswer);
  }
  if (
    budget_test_percentAnswer !== "" &&
    budget_test_percentAnswer !== undefined
  ) {
    const budget_test_percentTask = document.getElementById(
      "budget_test_percent",
    );
    radioGetInfo(budget_test_percentTask, budget_test_percentAnswer);
  }

  if (starAnswearTab2 !== "" && starAnswearTab2 !== undefined) {
    starGetInfo(
      document.querySelector('div[tabs="tab2"] .star_blop'),
      starAnswearTab2,
    );
  }

  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
}

if (countProgressTab1 !== "" && countProgressTab1 !== undefined) {
  tab1Progress(countProgressTab1);
}
if (countProgressTab2 !== "" && countProgressTab2 !== undefined) {
  tab2Progress(countProgressTab2);
}

primalButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    var blopElement = button.closest(".blop");
    if (blopElement) {
      blopElement.classList.add("done_blop");

      radioCheck(blopElement);
      proxyCheck();

      blopElement.nextElementSibling.classList.add("next_visible");
      setTimeout(function () {
        blopElement.nextElementSibling.classList.add("blop_animate");
      }, 1);

      if (button.classList.contains("last_button")) {
        var ss = button.getAttribute("numberBlop");
        create_lesson("6546a14212815d6340defd76", user_email, fragments[4]);

        var parent = button.closest(".lesson_tab").getAttribute("tabs");

        if (ss > 27 && parent === "tab1") {
          availableLinks("sixthl_tab2");
        }
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
  '.check_input input[type="checkbox"], .check_input input[type="radio"]',
);

checks.forEach(function (check) {
  check.addEventListener("click", function () {
    var blopElementCheck = check.closest(".blop");
    var checkboxes = blopElementCheck.querySelectorAll(
      'input[type="checkbox"], input[type="radio"]',
    );

    var isAnyCheckboxChecked = Array.from(checkboxes).some(function (checkbox) {
      return checkbox.checked;
    });
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
  });
});

var scrollButtons = document.querySelectorAll(
  ".button_primal, .side_bar_sublink_wrapper, .start_button",
);

scrollButtons.forEach((scrollButton) => {
  scrollButton.addEventListener("click", () => {
    var mainElement;
    if (scrollButton.classList.contains("side_bar_sublink_wrapper")) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
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
    if (textarea.closest("#arppu_calc") || textarea.closest("#cpo_calc")) {
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

      if (
        block.classList.contains("arppu_calc") ||
        block.classList.contains("cpo_calc")
      ) {
        function textareaCheckEcvisition(blop) {
          var value = blop.querySelector("textarea").value;
          // var cleanedString = value.replace(/[$\s\-\+]/g, "");
          var cleanedString = value.replace(/[^0-9.]/g, "");
          var radioAnswer;
          if (cleanedString === "43.1" || cleanedString === "43.2") {
            radioAnswer = blop.nextElementSibling.querySelector(".one");
            radioAnswer.classList.add("answer_visible");
          } else {
            radioAnswer = blop.nextElementSibling.querySelector(".two");
            radioAnswer.classList.add("answer_visible");
          }
        }
        textareaCheckEcvisition(block);
      }

      return result;
    }

    if (buttonWithAttr.closest("#changes")) {
      const changesTask = document.getElementById("changes");
      var changesResult = radioPushInfo(changesTask);
    }
    if (buttonWithAttr.closest("#changes_stage")) {
      const changes_stageTask = document.getElementById("changes_stage");
      var changes_stageResult = radioPushInfo(changes_stageTask);
    }
    if (buttonWithAttr.closest("#payback")) {
      const paybackTask = document.getElementById("payback");
      var paybackResult = radioPushInfo(paybackTask);
    }
    if (buttonWithAttr.closest("#arppu_calc")) {
      const arppu_calcTask = document.getElementById("arppu_calc");
      var arppu_calcResult = textareaPushInfo(arppu_calcTask);
    }
    if (buttonWithAttr.closest("#payback_cohort")) {
      const payback_cohortTask = document.getElementById("payback_cohort");
      var payback_cohortResult = radioPushInfo(payback_cohortTask);
    }
    if (buttonWithAttr.closest("#results")) {
      const resultsTask = document.getElementById("results");
      var resultsResult = radioPushInfo(resultsTask);
    }
    if (buttonWithAttr.closest("#everyone")) {
      const everyoneTask = document.getElementById("everyone");
      var everyoneResult = radioPushInfo(everyoneTask);
    }
    if (buttonWithAttr.closest("#cpo_calc")) {
      const cpo_calcTask = document.getElementById("cpo_calc");
      var cpo_calcResult = textareaPushInfo(cpo_calcTask);
    }
    if (buttonWithAttr.closest("#low_metric")) {
      const low_metricTask = document.getElementById("low_metric");
      var low_metricResult = radioPushInfo(low_metricTask);
    }
    if (buttonWithAttr.closest("#proxy")) {
      const proxyTask = document.getElementById("proxy");
      var proxyResult = checkboxPushInfo(proxyTask);
    }

    // ---------------

    if (buttonWithAttr.closest("#media_plan")) {
      const media_planTask = document.getElementById("media_plan");
      var media_planResult = radioPushInfo(media_planTask);
    }
    if (buttonWithAttr.closest("#media_text")) {
      const media_textTask = document.getElementById("media_text");
      var media_textResult = textareaPushInfo(media_textTask);
    }
    if (buttonWithAttr.closest("#count_funnel")) {
      const count_funnelTask = document.getElementById("count_funnel");
      var count_funnelResult = radioPushInfo(count_funnelTask);
    }
    if (buttonWithAttr.closest("#breakdown")) {
      const breakdownTask = document.getElementById("breakdown");
      var breakdownResult = radioPushInfo(breakdownTask);
    }
    if (buttonWithAttr.closest("#media_plan_text")) {
      const media_plan_textTask = document.getElementById("media_plan_text");
      var media_plan_textResult = textareaPushInfo(media_plan_textTask);
    }
    if (buttonWithAttr.closest("#ctl")) {
      const ctlTask = document.getElementById("ctl");
      var ctlResult = radioPushInfo(ctlTask);
    }
    if (buttonWithAttr.closest("#mediaplan_done")) {
      const mediaplan_doneTask = document.getElementById("mediaplan_done");
      var mediaplan_doneResult = radioPushInfo(mediaplan_doneTask);
    }
    if (buttonWithAttr.closest("#mediaplan_done_text")) {
      const mediaplan_done_textTask = document.getElementById(
        "mediaplan_done_text",
      );
      var mediaplan_done_textResult = textareaPushInfo(mediaplan_done_textTask);
    }
    if (buttonWithAttr.closest("#mediaplan_final")) {
      const mediaplan_finalTask = document.getElementById("mediaplan_final");
      var mediaplan_finalResult = radioPushInfo(mediaplan_finalTask);
    }
    if (buttonWithAttr.closest("#budget_test")) {
      const budget_testTask = document.getElementById("budget_test");
      var budget_testResult = radioPushInfo(budget_testTask);
    }
    if (buttonWithAttr.closest("#budget_test_percent")) {
      const budget_test_percentTask = document.getElementById(
        "budget_test_percent",
      );
      var budget_test_percentResult = radioPushInfo(budget_test_percentTask);
    }

    // ---------------

    function formSubmit(dataTab1, dataTab2) {
      var data = {
        collection_id: "653baae8a73b64de22ff788b",
        user_id: fragments[4],
        user_tab1: dataTab1,
        user_tab2: dataTab2,
      };
      console.log(data);

      fetch("https://uni-platform-6db9f53f05ed.herokuapp.com/lesson-info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      // .then((response) => response.json())
      // .then((data) => {
      //   console.log(data);
      // });
    }

    function starButtons(tab) {
      var but = buttonWithAttr.closest(".fs_starrating-1_item");
      var clickedButton = but.querySelector(
        '.lesson_tab[tabs="' + tab + '"] input[type="radio"]',
      );
      var star = clickedButton.value;
      return star;
    }

    function dataPush() {
      var tab = collectionIdButtons();
      var star1 = "";
      var star2 = "";

      if (
        buttonWithAttr.closest(".lesson_tab[tabs='tab1'] .fs_starrating-1_item")
      ) {
        star1 = starButtons(tab);
      }
      if (
        buttonWithAttr.closest(".lesson_tab[tabs='tab2'] .fs_starrating-1_item")
      ) {
        star2 = starButtons(tab);
      }

      countProgressTab1 = attributeValue;
      countProgressTab2 = attributeValue;

      var changesBd;
      if (changesResult !== "" && changesResult !== undefined) {
        changesAnswer = changesResult;
        changesBd = "|/|" + changesAnswer;
      } else if (changesAnswer !== "" && changesAnswer !== undefined) {
        changesBd = "|/|" + changesAnswer;
      } else {
        changesBd = "";
      }

      var changes_stageBd;
      if (changes_stageResult !== "" && changes_stageResult !== undefined) {
        changes_stageAnswer = changes_stageResult;
        changes_stageBd = "|/|" + changes_stageAnswer;
      } else if (
        changes_stageAnswer !== "" &&
        changes_stageAnswer !== undefined
      ) {
        changes_stageBd = "|/|" + changes_stageAnswer;
      } else {
        changes_stageBd = "";
      }

      var paybackBd;
      if (paybackResult !== "" && paybackResult !== undefined) {
        paybackAnswer = paybackResult;
        paybackBd = "|/|" + paybackAnswer;
      } else if (paybackAnswer !== "" && paybackAnswer !== undefined) {
        paybackBd = "|/|" + paybackAnswer;
      } else {
        paybackBd = "";
      }

      var arppu_calcBd;
      if (arppu_calcResult !== "" && arppu_calcResult !== undefined) {
        arppu_calcAnswer = arppu_calcResult;
        arppu_calcBd = "|/|" + arppu_calcAnswer;
      } else if (arppu_calcAnswer !== "" && arppu_calcAnswer !== undefined) {
        arppu_calcBd = "|/|" + arppu_calcAnswer;
      } else {
        arppu_calcBd = "";
      }

      var payback_cohortBd;
      if (payback_cohortResult !== "" && payback_cohortResult !== undefined) {
        payback_cohortAnswer = payback_cohortResult;
        payback_cohortBd = "|/|" + payback_cohortAnswer;
      } else if (
        payback_cohortAnswer !== "" &&
        payback_cohortAnswer !== undefined
      ) {
        payback_cohortBd = "|/|" + payback_cohortAnswer;
      } else {
        payback_cohortBd = "";
      }

      var resultsBd;
      if (resultsResult !== "" && resultsResult !== undefined) {
        resultsAnswer = resultsResult;
        resultsBd = "|/|" + resultsAnswer;
      } else if (resultsAnswer !== "" && resultsAnswer !== undefined) {
        resultsBd = "|/|" + resultsAnswer;
      } else {
        resultsBd = "";
      }

      var everyoneBd;
      if (everyoneResult !== "" && everyoneResult !== undefined) {
        everyoneAnswer = everyoneResult;
        everyoneBd = "|/|" + everyoneAnswer;
      } else if (everyoneAnswer !== "" && everyoneAnswer !== undefined) {
        everyoneBd = "|/|" + everyoneAnswer;
      } else {
        everyoneBd = "";
      }

      var cpo_calcBd;
      if (cpo_calcResult !== "" && cpo_calcResult !== undefined) {
        cpo_calcAnswer = cpo_calcResult;
        cpo_calcBd = "|/|" + cpo_calcAnswer;
      } else if (cpo_calcAnswer !== "" && cpo_calcAnswer !== undefined) {
        cpo_calcBd = "|/|" + cpo_calcAnswer;
      } else {
        cpo_calcBd = "";
      }

      var low_metricBd;
      if (low_metricResult !== "" && low_metricResult !== undefined) {
        low_metricAnswer = low_metricResult;
        low_metricBd = "|/|" + low_metricAnswer;
      } else if (low_metricAnswer !== "" && low_metricAnswer !== undefined) {
        low_metricBd = "|/|" + low_metricAnswer;
      } else {
        low_metricBd = "";
      }

      var proxyBd;
      if (proxyResult !== "" && proxyResult !== undefined) {
        proxyAnswer = proxyResult;
        proxyBd = "|/|" + proxyAnswer;
      } else if (proxyAnswer !== "" && proxyAnswer !== undefined) {
        proxyBd = "|/|" + proxyAnswer;
      } else {
        proxyBd = "";
      }

      var starTab1Bd;
      if (star1 !== "" && star1 !== undefined) {
        starAnswearTab1 = star1;
        starTab1Bd = "|/|" + starAnswearTab1;
      } else if (starAnswearTab1 !== "" && starAnswearTab1 !== undefined) {
        starTab1Bd = "|/|" + starAnswearTab1;
      } else {
        starTab1Bd = "";
      }

      var media_planBd;
      if (media_planResult !== "" && media_planResult !== undefined) {
        media_planAnswer = media_planResult;
        media_planBd = "|/|" + media_planAnswer;
      } else if (media_planAnswer !== "" && media_planAnswer !== undefined) {
        media_planBd = "|/|" + media_planAnswer;
      } else {
        media_planBd = "";
      }

      var media_textBd;
      if (media_textResult !== "" && media_textResult !== undefined) {
        media_textAnswer = media_textResult;
        media_textBd = "|/|" + media_textAnswer;
      } else if (media_textAnswer !== "" && media_textAnswer !== undefined) {
        media_textBd = "|/|" + media_textAnswer;
      } else {
        media_textBd = "";
      }

      var count_funnelBd;
      if (count_funnelResult !== "" && count_funnelResult !== undefined) {
        count_funnelAnswer = count_funnelResult;
        count_funnelBd = "|/|" + count_funnelAnswer;
      } else if (
        count_funnelAnswer !== "" &&
        count_funnelAnswer !== undefined
      ) {
        count_funnelBd = "|/|" + count_funnelAnswer;
      } else {
        count_funnelBd = "";
      }

      var breakdownBd;
      if (breakdownResult !== "" && breakdownResult !== undefined) {
        breakdownAnswer = breakdownResult;
        breakdownBd = "|/|" + breakdownAnswer;
      } else if (breakdownAnswer !== "" && breakdownAnswer !== undefined) {
        breakdownBd = "|/|" + breakdownAnswer;
      } else {
        breakdownBd = "";
      }

      var media_plan_textBd;
      if (media_plan_textResult !== "" && media_plan_textResult !== undefined) {
        media_plan_textAnswer = media_plan_textResult;
        media_plan_textBd = "|/|" + media_plan_textAnswer;
      } else if (
        media_plan_textAnswer !== "" &&
        media_plan_textAnswer !== undefined
      ) {
        media_plan_textBd = "|/|" + media_plan_textAnswer;
      } else {
        media_plan_textBd = "";
      }

      var ctlBd;
      if (ctlResult !== "" && ctlResult !== undefined) {
        ctlAnswer = ctlResult;
        ctlBd = "|/|" + ctlAnswer;
      } else if (ctlAnswer !== "" && ctlAnswer !== undefined) {
        ctlBd = "|/|" + ctlAnswer;
      } else {
        ctlBd = "";
      }

      var mediaplan_doneBd;
      if (mediaplan_doneResult !== "" && mediaplan_doneResult !== undefined) {
        mediaplan_doneAnswer = mediaplan_doneResult;
        mediaplan_doneBd = "|/|" + mediaplan_doneAnswer;
      } else if (
        mediaplan_doneAnswer !== "" &&
        mediaplan_doneAnswer !== undefined
      ) {
        mediaplan_doneBd = "|/|" + mediaplan_doneAnswer;
      } else {
        mediaplan_doneBd = "";
      }

      var mediaplan_done_textBd;
      if (
        mediaplan_done_textResult !== "" &&
        mediaplan_done_textResult !== undefined
      ) {
        mediaplan_done_textAnswer = mediaplan_done_textResult;
        mediaplan_done_textBd = "|/|" + mediaplan_done_textAnswer;
      } else if (
        mediaplan_done_textAnswer !== "" &&
        mediaplan_done_textAnswer !== undefined
      ) {
        mediaplan_done_textBd = "|/|" + mediaplan_done_textAnswer;
      } else {
        mediaplan_done_textBd = "";
      }

      var mediaplan_finalBd;
      if (mediaplan_finalResult !== "" && mediaplan_finalResult !== undefined) {
        mediaplan_finalAnswer = mediaplan_finalResult;
        mediaplan_finalBd = "|/|" + mediaplan_finalAnswer;
      } else if (
        mediaplan_finalAnswer !== "" &&
        mediaplan_finalAnswer !== undefined
      ) {
        mediaplan_finalBd = "|/|" + mediaplan_finalAnswer;
      } else {
        mediaplan_finalBd = "";
      }

      var budget_testBd;
      if (budget_testResult !== "" && budget_testResult !== undefined) {
        budget_testAnswer = budget_testResult;
        budget_testBd = "|/|" + budget_testAnswer;
      } else if (budget_testAnswer !== "" && budget_testAnswer !== undefined) {
        budget_testBd = "|/|" + budget_testAnswer;
      } else {
        budget_testBd = "";
      }

      var budget_test_percentBd;
      if (
        budget_test_percentResult !== "" &&
        budget_test_percentResult !== undefined
      ) {
        budget_test_percentAnswer = budget_test_percentResult;
        budget_test_percentBd = "|/|" + budget_test_percentAnswer;
      } else if (
        budget_test_percentAnswer !== "" &&
        budget_test_percentAnswer !== undefined
      ) {
        budget_test_percentBd = "|/|" + budget_test_percentAnswer;
      } else {
        budget_test_percentBd = "";
      }

      var starTab2Bd;
      if (star2 !== "" && star2 !== undefined) {
        starAnswearTab2 = star2;
        starTab2Bd = "|/|" + starAnswearTab2;
      } else if (starAnswearTab2 !== "" && starAnswearTab2 !== undefined) {
        starTab2Bd = "|/|" + starAnswearTab2;
      } else {
        starTab2Bd = "";
      }

      if (tab === "tab1") {
        var dataTab1 =
          countProgressTab1 +
          changesBd +
          changes_stageBd +
          paybackBd +
          arppu_calcBd +
          payback_cohortBd +
          resultsBd +
          everyoneBd +
          cpo_calcBd +
          low_metricBd +
          proxyBd +
          starTab1Bd;
      } else if (tab === "tab2") {
        var dataTab2 =
          countProgressTab2 +
          media_planBd +
          media_textBd +
          count_funnelBd +
          breakdownBd +
          media_plan_textBd +
          ctlBd +
          mediaplan_doneBd +
          mediaplan_done_textBd +
          mediaplan_finalBd +
          budget_testBd +
          budget_test_percentBd +
          starTab2Bd;
      }
      formSubmit(dataTab1, dataTab2);
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

    function formTheory(tab1theoryVal, tab2theoryVal) {
      var data2;
      if (tabs === "tab1") {
        data2 = {
          collection_id: "653baae8a73b64de22ff788b",
          user_id: fragments[4],
          tab1theory: tab1theoryVal,
        };
      } else if (tabs === "tab2") {
        data2 = {
          collection_id: "653baae8a73b64de22ff788b",
          user_id: fragments[4],
          tab2theory: tab2theoryVal,
        };
      }
      console.log(data2);
      fetch("https://uni-platform-6db9f53f05ed.herokuapp.com/lesson-info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data2),
      });
      // .then((response) => response.json())
      // .then((data) => {
      //   console.log(data);
      // });
    }

    if (tabs === "tab1") {
      var tab1theoryVal = theoryButton.getAttribute("theory");
    } else if (tabs === "tab2") {
      var tab2theoryVal = theoryButton.getAttribute("theory");
    }
    formTheory(tab1theoryVal, tab2theoryVal);
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
