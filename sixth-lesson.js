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
const tab2BD = document.getElementById("tab2BD");
var tab2BDVal = tab2BD.textContent;
tab2BDVal = tab2BDVal.split("|/|");

var countProgressTab1 = tab1BDVal[0];
var cjmAnswear = tab1BDVal[1];
var before_buyAnswear = tab1BDVal[2];
var whats_nextAnswear = tab1BDVal[3];
var task_doneAnswear = tab1BDVal[4];
var canalsAnswear = tab1BDVal[5];
var bonus_canalsAnswear = tab1BDVal[6];
var coworkAnswear = tab1BDVal[7];
var bloger_integrationAnswear = tab1BDVal[8];
var blogerAnswear = tab1BDVal[9];
var remarketing_bannerAnswear = tab1BDVal[10];
var collabAnswear = tab1BDVal[11];
var starAnswearTab1 = tab1BDVal[12];

var countProgressTab2 = tab2BDVal[0];
var collab_audienceAnswear = tab2BDVal[1];
var collab_ideaAnswear = tab2BDVal[2];
var conclusionsAnswear = tab2BDVal[3];
var starAnswearTab2 = tab2BDVal[4];

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
  fetch("https://uni-platform-6db9f53f05ed.herokuapp.com/create-lesson", {
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
create_lesson("652ac15c622571ba14ac33f5", user_email, fragments[4]);

if (countProgressTab1 > 29) {
  availableLinks("sixthl_tab2");
  activetab("sixthl_tab2", "tab2");
}

function radioCheck(blopElement) {
  var radio = blopElement.querySelector('input[type="radio"]:checked');
  if (radio) {
    var value = radio.value;
    var radioAnswer = blopElement.nextElementSibling.querySelector("." + value);
    radioAnswer.classList.add("answer_visible");
  }
}

function canalsCheck() {
  var canalsInfo = document.getElementById("canals");
  var canalsForm = canalsInfo.querySelector("form");
  var canalsElements = canalsForm.querySelectorAll(".check_input");

  var canalsFirst = canalsElements[0].querySelector('input[type="checkbox"]');
  var canalsSecond = canalsElements[1].querySelector('input[type="checkbox"]');
  var canalsThird = canalsElements[2].querySelector('input[type="checkbox"]');
  var canalsFourth = canalsElements[3].querySelector('input[type="checkbox"]');
  var canalsFiveth = canalsElements[4].querySelector('input[type="checkbox"]');
  var canalsSixth = canalsElements[5].querySelector('input[type="checkbox"]');
  var canalsSeventh = canalsElements[6].querySelector('input[type="checkbox"]');
  var canalsEighth = canalsElements[7].querySelector('input[type="checkbox"]');

  if (
    !canalsFirst.checked &&
    canalsSecond.checked &&
    canalsThird.checked &&
    canalsFourth.checked &&
    !canalsFiveth.checked &&
    canalsSixth.checked &&
    !canalsSeventh.checked &&
    !canalsEighth.checked
  ) {
    canalsInfo.nextElementSibling.querySelector(".no").classList.add("hide");
    canalsInfo.nextElementSibling
      .querySelector(".yes")
      .classList.remove("hide");
  } else {
    canalsInfo.nextElementSibling.querySelector(".no").classList.remove("hide");
    canalsInfo.nextElementSibling.querySelector(".yes").classList.add("hide");
  }
}
function bonus_canalsCheck() {
  var bonus_canalsInfo = document.getElementById("bonus_canals");
  var bonus_canalsForm = bonus_canalsInfo.querySelector("form");
  var bonus_canalsElements = bonus_canalsForm.querySelectorAll(".check_input");

  var bonus_canalsFirst = bonus_canalsElements[0].querySelector(
    'input[type="checkbox"]'
  );
  var bonus_canalsSecond = bonus_canalsElements[1].querySelector(
    'input[type="checkbox"]'
  );
  var bonus_canalsThird = bonus_canalsElements[2].querySelector(
    'input[type="checkbox"]'
  );
  var bonus_canalsFourth = bonus_canalsElements[3].querySelector(
    'input[type="checkbox"]'
  );
  var bonus_canalsFiveth = bonus_canalsElements[4].querySelector(
    'input[type="checkbox"]'
  );
  var bonus_canalsSixth = bonus_canalsElements[5].querySelector(
    'input[type="checkbox"]'
  );

  if (
    !bonus_canalsFirst.checked &&
    bonus_canalsSecond.checked &&
    !bonus_canalsThird.checked &&
    !bonus_canalsFourth.checked &&
    bonus_canalsFiveth.checked &&
    !bonus_canalsSixth.checked
  ) {
    bonus_canalsInfo.nextElementSibling
      .querySelector(".no")
      .classList.add("hide");
    bonus_canalsInfo.nextElementSibling
      .querySelector(".yes")
      .classList.remove("hide");
  } else {
    bonus_canalsInfo.nextElementSibling
      .querySelector(".no")
      .classList.remove("hide");
    bonus_canalsInfo.nextElementSibling
      .querySelector(".yes")
      .classList.add("hide");
  }
}
function collabCheck() {
  var collabInfo = document.getElementById("collab");
  var collabForm = collabInfo.querySelector("form");
  var collabElements = collabForm.querySelectorAll(".check_input");

  var collabFirst = collabElements[0].querySelector('input[type="checkbox"]');
  var collabSecond = collabElements[1].querySelector('input[type="checkbox"]');
  var collabThird = collabElements[2].querySelector('input[type="checkbox"]');

  if (!collabFirst.checked && collabSecond.checked && collabThird.checked) {
    collabInfo.nextElementSibling.querySelector(".no").classList.add("hide");
    collabInfo.nextElementSibling
      .querySelector(".yes")
      .classList.remove("hide");
  } else {
    collabInfo.nextElementSibling.querySelector(".no").classList.remove("hide");
    collabInfo.nextElementSibling.querySelector(".yes").classList.add("hide");
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
    if (block && block.id === "canals") {
      canalsCheck();
    } else if (block && block.id === "bonus_canals") {
      bonus_canalsCheck();
    } else if (block && block.id === "collab") {
      collabCheck();
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
    var textarea = block.querySelector("textarea");
    textarea.value = value;

    if (countProgressTab1 !== "") {
      if (block.classList.contains("ecvisition_calc")) {
        function textareaCheckEcvisition(blop) {
          var value = blop.querySelector("textarea").value;
          var cleanedString = value.replace(/[$\s\-\+]/g, "");
          var radioAnswer;
          if (cleanedString === "96000") {
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

  if (cjmAnswear !== "" && cjmAnswear !== undefined) {
    const cjmTask = document.getElementById("cjm");
    radioGetInfo(cjmTask, cjmAnswear);
  }
  if (before_buyAnswear !== "" && before_buyAnswear !== undefined) {
    const before_buyTask = document.getElementById("before_buy");
    radioGetInfo(before_buyTask, before_buyAnswear);
  }
  if (whats_nextAnswear !== "" && whats_nextAnswear !== undefined) {
    const whats_nextTask = document.getElementById("whats_next");
    radioGetInfo(whats_nextTask, whats_nextAnswear);
  }
  if (task_doneAnswear !== "" && task_doneAnswear !== undefined) {
    const task_doneTask = document.getElementById("task_done");
    radioGetInfo(task_doneTask, task_doneAnswear);
  }
  if (canalsAnswear !== "" && canalsAnswear !== undefined) {
    const canalsTask = document.getElementById("canals");
    checkboxGetInfo(canalsTask, canalsAnswear);
  }
  if (bonus_canalsAnswear !== "" && bonus_canalsAnswear !== undefined) {
    const bonus_canalsTask = document.getElementById("bonus_canals");
    checkboxGetInfo(bonus_canalsTask, bonus_canalsAnswear);
  }
  if (coworkAnswear !== "" && coworkAnswear !== undefined) {
    const coworkTask = document.getElementById("cowork");
    radioGetInfo(coworkTask, coworkAnswear);
  }
  if (
    bloger_integrationAnswear !== "" &&
    bloger_integrationAnswear !== undefined
  ) {
    const bloger_integrationTask = document.getElementById(
      "bloger_integration"
    );
    radioGetInfo(bloger_integrationTask, bloger_integrationAnswear);
  }
  if (blogerAnswear !== "" && blogerAnswear !== undefined) {
    const blogerTask = document.getElementById("bloger");
    radioGetInfo(blogerTask, blogerAnswear);
  }
  if (
    remarketing_bannerAnswear !== "" &&
    remarketing_bannerAnswear !== undefined
  ) {
    const remarketing_bannerTask = document.getElementById(
      "remarketing_banner"
    );
    radioGetInfo(remarketing_bannerTask, remarketing_bannerAnswear);
  }
  if (collabAnswear !== "" && collabAnswear !== undefined) {
    const collabTask = document.getElementById("collab");
    checkboxGetInfo(collabTask, collabAnswear);
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

function tab2Progress(numberBlop) {
  if (numberBlop > 0 && numberBlop !== "" && numberBlop !== undefined) {
    document
      .querySelector("div[tabs='tab2'] .start_button")
      .classList.add("hideButton");
    var targetButton = document.querySelector(
      'div[tabs="tab2"] [numberBlop="' + numberBlop + '"]'
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
    var textarea = block.querySelector("textarea");
    textarea.value = value;
  }

  if (collab_audienceAnswear !== "" && collab_audienceAnswear !== undefined) {
    const collab_audienceTask = document.getElementById("collab_audience");
    radioGetInfo(collab_audienceTask, collab_audienceAnswear);
  }
  if (collab_ideaAnswear !== "" && collab_ideaAnswear !== undefined) {
    const collab_ideaTask = document.getElementById("collab_idea");
    textareaGethInfo(collab_ideaTask, collab_ideaAnswear);
  }
  if (conclusionsAnswear !== "" && conclusionsAnswear !== undefined) {
    const conclusionsTask = document.getElementById("conclusions");
    textareaGethInfo(conclusionsTask, conclusionsAnswear);
  }

  if (starAnswearTab2 !== "" && starAnswearTab2 !== undefined) {
    starGetInfo(
      document.querySelector('div[tabs="tab2"] .star_blop'),
      starAnswearTab2
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
if (countProgressTab2 !== "" && countProgressTab2 !== undefined) {
  tab2Progress(countProgressTab2);
}

primalButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    var blopElement = button.closest(".blop");
    if (blopElement) {
      blopElement.classList.add("done_blop");

      radioCheck(blopElement);
      canalsCheck();
      bonus_canalsCheck();
      collabCheck();

      blopElement.nextElementSibling.classList.add("next_visible");
      setTimeout(function () {
        blopElement.nextElementSibling.classList.add("blop_animate");
      }, 1);

      if (button.classList.contains("last_button")) {
        var ss = button.getAttribute("numberBlop");
        create_lesson("652ac15c622571ba14ac33f5", user_email, fragments[4]);

        var parent = button.closest(".lesson_tab").getAttribute("tabs");

        if (ss > 29 && parent === "tab1") {
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
    if (textarea.closest("#ecvisition_calc")) {
      function validateInput(input) {
        const regex = /^[0-9+-]*$/;
        if (!regex.test(input.value)) {
          input.value = input.value.replace(/[^0-9+-]/g, "");
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

      if (block.classList.contains("ecvisition_calc")) {
        function textareaCheckEcvisition(blop) {
          var value = blop.querySelector("textarea").value;
          var cleanedString = value.replace(/[$\s\-\+]/g, "");
          var radioAnswer;
          if (cleanedString === "96000") {
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

    if (buttonWithAttr.closest("#cjm")) {
      const cjmTask = document.getElementById("cjm");
      var cjmResult = radioPushInfo(cjmTask);
    }
    if (buttonWithAttr.closest("#before_buy")) {
      const before_buyTask = document.getElementById("before_buy");
      var before_buyResult = radioPushInfo(before_buyTask);
    }
    if (buttonWithAttr.closest("#whats_next")) {
      const whats_nextTask = document.getElementById("whats_next");
      var whats_nextResult = radioPushInfo(whats_nextTask);
    }
    if (buttonWithAttr.closest("#task_done")) {
      const task_doneTask = document.getElementById("task_done");
      var task_doneResult = radioPushInfo(task_doneTask);
    }
    if (buttonWithAttr.closest("#canals")) {
      const canalsTask = document.getElementById("canals");
      var canalsResult = checkboxPushInfo(canalsTask);
    }
    if (buttonWithAttr.closest("#bonus_canals")) {
      const bonus_canalsTask = document.getElementById("bonus_canals");
      var bonus_canalsResult = checkboxPushInfo(bonus_canalsTask);
    }
    if (buttonWithAttr.closest("#cowork")) {
      const coworkTask = document.getElementById("cowork");
      var coworkResult = radioPushInfo(coworkTask);
    }
    if (buttonWithAttr.closest("#bloger_integration")) {
      const bloger_integrationTask = document.getElementById(
        "bloger_integration"
      );
      var bloger_integrationResult = radioPushInfo(bloger_integrationTask);
    }
    if (buttonWithAttr.closest("#bloger")) {
      const blogerTask = document.getElementById("bloger");
      var blogerResult = radioPushInfo(blogerTask);
    }
    if (buttonWithAttr.closest("#remarketing_banner")) {
      const remarketing_bannerTask = document.getElementById(
        "remarketing_banner"
      );
      var remarketing_bannerResult = radioPushInfo(remarketing_bannerTask);
    }
    if (buttonWithAttr.closest("#collab")) {
      const collabTask = document.getElementById("collab");
      var collabResult = checkboxPushInfo(collabTask);
    }

    // ---------------

    if (buttonWithAttr.closest("#collab_audience")) {
      const collab_audienceTask = document.getElementById("collab_audience");
      var collab_audienceResult = radioPushInfo(collab_audienceTask);
    }
    if (buttonWithAttr.closest("#collab_idea")) {
      const collab_ideaTask = document.getElementById("collab_idea");
      var collab_ideaResult = textareaPushInfo(collab_ideaTask);
    }
    if (buttonWithAttr.closest("#conclusions")) {
      const conclusionsTask = document.getElementById("conclusions");
      var conclusionsResult = textareaPushInfo(conclusionsTask);
    }

    // ---------------

    function formSubmit(dataTab1, dataTab2) {
      var data = {
        collection_id: "6522b0ddc5a8a5ff923de4e8",
        user_id: fragments[4],
        user_tab1: dataTab1,
        user_tab2: dataTab2
      };
      // console.log(data);

      fetch("https://uni-platform-6db9f53f05ed.herokuapp.com/lesson-info", {
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

      var cjmBd;
      if (cjmResult !== "" && cjmResult !== undefined) {
        cjmAnswear = cjmResult;
        cjmBd = "|/|" + cjmAnswear;
      } else if (cjmAnswear !== "" && cjmAnswear !== undefined) {
        cjmBd = "|/|" + cjmAnswear;
      } else {
        cjmBd = "";
      }

      var before_buyBd;
      if (before_buyResult !== "" && before_buyResult !== undefined) {
        before_buyAnswear = before_buyResult;
        before_buyBd = "|/|" + before_buyAnswear;
      } else if (before_buyAnswear !== "" && before_buyAnswear !== undefined) {
        before_buyBd = "|/|" + before_buyAnswear;
      } else {
        before_buyBd = "";
      }

      var whats_nextBd;
      if (whats_nextResult !== "" && whats_nextResult !== undefined) {
        whats_nextAnswear = whats_nextResult;
        whats_nextBd = "|/|" + whats_nextAnswear;
      } else if (whats_nextAnswear !== "" && whats_nextAnswear !== undefined) {
        whats_nextBd = "|/|" + whats_nextAnswear;
      } else {
        whats_nextBd = "";
      }

      var task_doneBd;
      if (task_doneResult !== "" && task_doneResult !== undefined) {
        task_doneAnswear = task_doneResult;
        task_doneBd = "|/|" + task_doneAnswear;
      } else if (task_doneAnswear !== "" && task_doneAnswear !== undefined) {
        task_doneBd = "|/|" + task_doneAnswear;
      } else {
        task_doneBd = "";
      }

      var canalsBd;
      if (canalsResult !== "" && canalsResult !== undefined) {
        canalsAnswear = canalsResult;
        canalsBd = "|/|" + canalsAnswear;
      } else if (canalsAnswear !== "" && canalsAnswear !== undefined) {
        canalsBd = "|/|" + canalsAnswear;
      } else {
        canalsBd = "";
      }

      var bonus_canalsBd;
      if (bonus_canalsResult !== "" && bonus_canalsResult !== undefined) {
        bonus_canalsAnswear = bonus_canalsResult;
        bonus_canalsBd = "|/|" + bonus_canalsAnswear;
      } else if (
        bonus_canalsAnswear !== "" &&
        bonus_canalsAnswear !== undefined
      ) {
        bonus_canalsBd = "|/|" + bonus_canalsAnswear;
      } else {
        bonus_canalsBd = "";
      }

      var coworkBd;
      if (coworkResult !== "" && coworkResult !== undefined) {
        coworkAnswear = coworkResult;
        coworkBd = "|/|" + coworkAnswear;
      } else if (coworkAnswear !== "" && coworkAnswear !== undefined) {
        coworkBd = "|/|" + coworkAnswear;
      } else {
        coworkBd = "";
      }

      var bloger_integrationBd;
      if (
        bloger_integrationResult !== "" &&
        bloger_integrationResult !== undefined
      ) {
        bloger_integrationAnswear = bloger_integrationResult;
        bloger_integrationBd = "|/|" + bloger_integrationAnswear;
      } else if (
        bloger_integrationAnswear !== "" &&
        bloger_integrationAnswear !== undefined
      ) {
        bloger_integrationBd = "|/|" + bloger_integrationAnswear;
      } else {
        bloger_integrationBd = "";
      }

      var blogerBd;
      if (blogerResult !== "" && blogerResult !== undefined) {
        blogerAnswear = blogerResult;
        blogerBd = "|/|" + blogerAnswear;
      } else if (blogerAnswear !== "" && blogerAnswear !== undefined) {
        blogerBd = "|/|" + blogerAnswear;
      } else {
        blogerBd = "";
      }

      var remarketing_bannerBd;
      if (
        remarketing_bannerResult !== "" &&
        remarketing_bannerResult !== undefined
      ) {
        remarketing_bannerAnswear = remarketing_bannerResult;
        remarketing_bannerBd = "|/|" + remarketing_bannerAnswear;
      } else if (
        remarketing_bannerAnswear !== "" &&
        remarketing_bannerAnswear !== undefined
      ) {
        remarketing_bannerBd = "|/|" + remarketing_bannerAnswear;
      } else {
        remarketing_bannerBd = "";
      }

      var collabBd;
      if (collabResult !== "" && collabResult !== undefined) {
        collabAnswear = collabResult;
        collabBd = "|/|" + collabAnswear;
      } else if (collabAnswear !== "" && collabAnswear !== undefined) {
        collabBd = "|/|" + collabAnswear;
      } else {
        collabBd = "";
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

      var collab_audienceBd;
      if (collab_audienceResult !== "" && collab_audienceResult !== undefined) {
        collab_audienceAnswear = collab_audienceResult;
        collab_audienceBd = "|/|" + collab_audienceAnswear;
      } else if (
        collab_audienceAnswear !== "" &&
        collab_audienceAnswear !== undefined
      ) {
        collab_audienceBd = "|/|" + collab_audienceAnswear;
      } else {
        collab_audienceBd = "";
      }

      var collab_ideaBd;
      if (collab_ideaResult !== "" && collab_ideaResult !== undefined) {
        collab_ideaAnswear = collab_ideaResult;
        collab_ideaBd = "|/|" + collab_ideaAnswear;
      } else if (
        collab_ideaAnswear !== "" &&
        collab_ideaAnswear !== undefined
      ) {
        collab_ideaBd = "|/|" + collab_ideaAnswear;
      } else {
        collab_ideaBd = "";
      }

      var conclusionsBd;
      if (conclusionsResult !== "" && conclusionsResult !== undefined) {
        conclusionsAnswear = conclusionsResult;
        conclusionsBd = "|/|" + conclusionsAnswear;
      } else if (
        conclusionsAnswear !== "" &&
        conclusionsAnswear !== undefined
      ) {
        conclusionsBd = "|/|" + conclusionsAnswear;
      } else {
        conclusionsBd = "";
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
          cjmBd +
          before_buyBd +
          whats_nextBd +
          task_doneBd +
          canalsBd +
          bonus_canalsBd +
          coworkBd +
          bloger_integrationBd +
          blogerBd +
          remarketing_bannerBd +
          collabBd +
          starTab1Bd;
      } else if (tab === "tab2") {
        var dataTab2 =
          countProgressTab2 +
          collab_audienceBd +
          collab_ideaBd +
          conclusionsBd +
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
          collection_id: "6522b0ddc5a8a5ff923de4e8",
          user_id: fragments[4],
          tab1theory: tab1theoryVal
        };
      } else if (tabs === "tab2") {
        data2 = {
          collection_id: "6522b0ddc5a8a5ff923de4e8",
          user_id: fragments[4],
          tab2theory: tab2theoryVal
        };
      }
      // console.log(data2);
      fetch("https://uni-platform-6db9f53f05ed.herokuapp.com/lesson-info", {
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
