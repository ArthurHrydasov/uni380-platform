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
var brand_strategyAnswear = tab1BDVal[1];
var marketing_structureAnswear = tab1BDVal[2];
var structure_laterAnswear = tab1BDVal[3];
var specialistsAnswear = tab1BDVal[4];
var ecvisition_managerAnswear = tab1BDVal[5];
var ecvisition_calcAnswear = tab1BDVal[6];
var manager_lvlAnswear = tab1BDVal[7];
var ecvisition_quantityAnswear = tab1BDVal[8];
var ecvisition_budgetAnswear = tab1BDVal[9];
var starAnswearTab1 = tab1BDVal[10];

var countProgressTab2 = tab2BDVal[0];
var requirementsAnswear = tab2BDVal[1];
var canalsAnswear = tab2BDVal[2];
var test_taskAnswear = tab2BDVal[3];
var call_startAnswear = tab2BDVal[4];
var skills_reviewAnswear = tab2BDVal[5];
var valuesAnswear = tab2BDVal[6];
var dmytro_hireAnswear = tab2BDVal[7];
var analytics_interviewAnswear = tab2BDVal[8];
var mail_yesAnswear = tab2BDVal[9];
var mail_noAnswear = tab2BDVal[10];
var hiring_conclusionsAnswear = tab2BDVal[11];
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
  console.log(data);
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
create_lesson("6522b0ddc5a8a5ff923de4e8", user_email, fragments[4]);

if (countProgressTab1 > 21) {
  availableLinks("fivethl_tab2");
  activetab("fivethl_tab2", "tab2");
}

function radioCheck(blopElement) {
  var radio = blopElement.querySelector('input[type="radio"]:checked');
  if (radio) {
    var value = radio.value;
    var radioAnswer = blopElement.nextElementSibling.querySelector("." + value);
    radioAnswer.classList.add("answer_visible");
  }
}

function call_startCheck() {
  var call_startInfo = document.getElementById("call_start");
  var call_startForm = call_startInfo.querySelector("form");
  var call_startElements = call_startForm.querySelectorAll(".check_input");

  var callFirst = call_startElements[0].querySelector('input[type="checkbox"]');
  var callSecond = call_startElements[1].querySelector(
    'input[type="checkbox"]'
  );
  var callThird = call_startElements[2].querySelector('input[type="checkbox"]');
  var callFourth = call_startElements[3].querySelector(
    'input[type="checkbox"]'
  );
  var callFiveth = call_startElements[4].querySelector(
    'input[type="checkbox"]'
  );
  var callSixth = call_startElements[5].querySelector('input[type="checkbox"]');
  var callSeventh = call_startElements[6].querySelector(
    'input[type="checkbox"]'
  );

  if (
    !callFirst.checked &&
    !callSecond.checked &&
    callThird.checked &&
    !callFourth.checked &&
    callFiveth.checked &&
    !callSixth.checked &&
    !callSeventh.checked
  ) {
    call_startInfo.nextElementSibling
      .querySelector(".no")
      .classList.add("hide");
    call_startInfo.nextElementSibling
      .querySelector(".yes")
      .classList.remove("hide");
  } else {
    call_startInfo.nextElementSibling
      .querySelector(".no")
      .classList.remove("hide");
    call_startInfo.nextElementSibling
      .querySelector(".yes")
      .classList.add("hide");
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

  if (brand_strategyAnswear !== "" && brand_strategyAnswear !== undefined) {
    const brand_strategyTask = document.getElementById("brand_strategy");
    radioGetInfo(brand_strategyTask, brand_strategyAnswear);
  }
  if (
    marketing_structureAnswear !== "" &&
    marketing_structureAnswear !== undefined
  ) {
    const marketing_structureTask = document.getElementById(
      "marketing_structure"
    );
    radioGetInfo(marketing_structureTask, marketing_structureAnswear);
  }
  if (structure_laterAnswear !== "" && structure_laterAnswear !== undefined) {
    const structure_laterTask = document.getElementById("structure_later");
    radioGetInfo(structure_laterTask, structure_laterAnswear);
  }
  if (specialistsAnswear !== "" && specialistsAnswear !== undefined) {
    const specialistsTask = document.getElementById("specialists");
    textareaGethInfo(specialistsTask, specialistsAnswear);
  }
  if (
    ecvisition_managerAnswear !== "" &&
    ecvisition_managerAnswear !== undefined
  ) {
    const ecvisition_managerTask = document.getElementById(
      "ecvisition_manager"
    );
    radioGetInfo(ecvisition_managerTask, ecvisition_managerAnswear);
  }
  if (ecvisition_calcAnswear !== "" && ecvisition_calcAnswear !== undefined) {
    const ecvisition_calcTask = document.getElementById("ecvisition_calc");
    textareaGethInfo(ecvisition_calcTask, ecvisition_calcAnswear);
  }
  if (manager_lvlAnswear !== "" && manager_lvlAnswear !== undefined) {
    const manager_lvlTask = document.getElementById("manager_lvl");
    radioGetInfo(manager_lvlTask, manager_lvlAnswear);
  }
  if (
    ecvisition_quantityAnswear !== "" &&
    ecvisition_quantityAnswear !== undefined
  ) {
    const ecvisition_quantityTask = document.getElementById(
      "ecvisition_quantity"
    );
    radioGetInfo(ecvisition_quantityTask, ecvisition_quantityAnswear);
  }
  if (
    ecvisition_budgetAnswear !== "" &&
    ecvisition_budgetAnswear !== undefined
  ) {
    const ecvisition_budgetTask = document.getElementById("ecvisition_budget");
    textareaGethInfo(ecvisition_budgetTask, ecvisition_budgetAnswear);
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
    if (block && block.id === "call_start") {
      call_startCheck();
    }
    // else if (block && block.id === "competitors_sites") {
    //   competitors_sitesCheck();
    // } else if (block && block.id === "values_list") {
    //   values_listCheck();
    // } else if (block && block.id === "emotional_characteristics") {
    //   emotional_characteristicsCheck();
    // }
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

  if (requirementsAnswear !== "" && requirementsAnswear !== undefined) {
    const requirementsTask = document.getElementById("requirements");
    radioGetInfo(requirementsTask, requirementsAnswear);
  }
  if (canalsAnswear !== "" && canalsAnswear !== undefined) {
    const canalsTask = document.getElementById("canals");
    checkboxGetInfo(canalsTask, canalsAnswear);
  }
  if (test_taskAnswear !== "" && test_taskAnswear !== undefined) {
    const test_taskTask = document.getElementById("test_task");
    textareaGethInfo(test_taskTask, test_taskAnswear);
  }
  if (call_startAnswear !== "" && call_startAnswear !== undefined) {
    const call_startTask = document.getElementById("call_start");
    checkboxGetInfo(call_startTask, call_startAnswear);
  }
  if (skills_reviewAnswear !== "" && skills_reviewAnswear !== undefined) {
    const skills_reviewTask = document.getElementById("skills_review");
    checkboxGetInfo(skills_reviewTask, skills_reviewAnswear);
  }
  if (valuesAnswear !== "" && valuesAnswear !== undefined) {
    const valuesTask = document.getElementById("values");
    checkboxGetInfo(valuesTask, valuesAnswear);
  }
  if (dmytro_hireAnswear !== "" && dmytro_hireAnswear !== undefined) {
    const dmytro_hireTask = document.getElementById("dmytro_hire");
    radioGetInfo(dmytro_hireTask, dmytro_hireAnswear);
  }
  if (
    analytics_interviewAnswear !== "" &&
    analytics_interviewAnswear !== undefined
  ) {
    const analytics_interviewTask = document.getElementById(
      "analytics_interview"
    );
    radioGetInfo(analytics_interviewTask, analytics_interviewAnswear);
  }
  if (mail_yesAnswear !== "" && mail_yesAnswear !== undefined) {
    const mail_yesTask = document.getElementById("mail_yes");
    radioGetInfo(mail_yesTask, mail_yesAnswear);
  }
  if (mail_noAnswear !== "" && mail_noAnswear !== undefined) {
    const mail_noTask = document.getElementById("mail_no");
    radioGetInfo(mail_noTask, mail_noAnswear);
  }
  if (
    hiring_conclusionsAnswear !== "" &&
    hiring_conclusionsAnswear !== undefined
  ) {
    const hiring_conclusionsTask = document.getElementById(
      "hiring_conclusions"
    );
    textareaGethInfo(hiring_conclusionsTask, hiring_conclusionsAnswear);
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
      call_startCheck();

      blopElement.nextElementSibling.classList.add("next_visible");
      setTimeout(function () {
        blopElement.nextElementSibling.classList.add("blop_animate");
      }, 1);

      if (button.classList.contains("last_button")) {
        var ss = button.getAttribute("numberBlop");
        create_lesson("6522b0ddc5a8a5ff923de4e8", user_email, fragments[4]);

        var parent = button.closest(".lesson_tab").getAttribute("tabs");
        // console.log(parent);

        if (ss > 21 && parent === "tab1") {
          availableLinks("fivethl_tab2");
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
      if (attr) {
        tabClosest
          .querySelector(".top_on_dialog")
          .classList.add("next_visible");
        setTimeout(function () {
          tabClosest
            .querySelector(".top_on_dialog")
            .classList.add("blop_animate");
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
        mainElement = document.getElementById("first_blop");
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

      if (block.classList.contains("retention_month")) {
        function textareaCheckRetention(blop) {
          var value = blop.querySelector("textarea").value;
          var cleanedString = value.replace(/[$\s\-\+]/g, "");
          var radioAnswer;
          if (cleanedString === "647") {
            radioAnswer = blop.nextElementSibling.querySelector(".one");
            radioAnswer.classList.add("answer_visible");
          } else {
            radioAnswer = blop.nextElementSibling.querySelector(".two");
            radioAnswer.classList.add("answer_visible");
          }
        }
        textareaCheckRetention(block);
      }

      return result;
    }

    if (buttonWithAttr.closest("#brand_strategy")) {
      const brand_strategyTask = document.getElementById("brand_strategy");
      var brand_strategyResult = radioPushInfo(brand_strategyTask);
    }
    if (buttonWithAttr.closest("#marketing_structure")) {
      const marketing_structureTask = document.getElementById(
        "marketing_structure"
      );
      var marketing_structureResult = radioPushInfo(marketing_structureTask);
    }
    if (buttonWithAttr.closest("#structure_later")) {
      const structure_laterTask = document.getElementById("structure_later");
      var structure_laterResult = radioPushInfo(structure_laterTask);
    }
    if (buttonWithAttr.closest("#specialists")) {
      const specialistsTask = document.getElementById("specialists");
      var specialistsResult = textareaPushInfo(specialistsTask);
    }
    if (buttonWithAttr.closest("#ecvisition_manager")) {
      const ecvisition_managerTask = document.getElementById(
        "ecvisition_manager"
      );
      var ecvisition_managerResult = radioPushInfo(ecvisition_managerTask);
    }
    if (buttonWithAttr.closest("#ecvisition_calc")) {
      const ecvisition_calcTask = document.getElementById("ecvisition_calc");
      var ecvisition_calcResult = textareaPushInfo(ecvisition_calcTask);
    }
    if (buttonWithAttr.closest("#manager_lvl")) {
      const manager_lvlTask = document.getElementById("manager_lvl");
      var manager_lvlResult = radioPushInfo(manager_lvlTask);
    }
    if (buttonWithAttr.closest("#ecvisition_quantity")) {
      const ecvisition_quantityTask = document.getElementById(
        "ecvisition_quantity"
      );
      var ecvisition_quantityResult = radioPushInfo(ecvisition_quantityTask);
    }
    if (buttonWithAttr.closest("#ecvisition_budget")) {
      const ecvisition_budgetTask = document.getElementById(
        "ecvisition_budget"
      );
      var ecvisition_budgetResult = textareaPushInfo(ecvisition_budgetTask);
    }

    //---------------

    if (buttonWithAttr.closest("#requirements")) {
      const requirementsTask = document.getElementById("requirements");
      var requirementsResult = radioPushInfo(requirementsTask);
    }
    if (buttonWithAttr.closest("#canals")) {
      const canalsTask = document.getElementById("canals");
      var canalsResult = checkboxPushInfo(canalsTask);
    }
    if (buttonWithAttr.closest("#test_task")) {
      const test_taskTask = document.getElementById("test_task");
      var test_taskResult = textareaPushInfo(test_taskTask);
    }
    if (buttonWithAttr.closest("#call_start")) {
      const call_startTask = document.getElementById("call_start");
      var call_startResult = checkboxPushInfo(call_startTask);
    }
    if (buttonWithAttr.closest("#skills_review")) {
      const skills_reviewTask = document.getElementById("skills_review");
      var skills_reviewResult = checkboxPushInfo(skills_reviewTask);
    }
    if (buttonWithAttr.closest("#values")) {
      const valuesTask = document.getElementById("values");
      var valuesResult = checkboxPushInfo(valuesTask);
    }
    if (buttonWithAttr.closest("#dmytro_hire")) {
      const dmytro_hireTask = document.getElementById("dmytro_hire");
      var dmytro_hireResult = radioPushInfo(dmytro_hireTask);
    }
    if (buttonWithAttr.closest("#analytics_interview")) {
      const analytics_interviewTask = document.getElementById(
        "analytics_interview"
      );
      var analytics_interviewResult = radioPushInfo(analytics_interviewTask);
    }
    if (buttonWithAttr.closest("#mail_yes")) {
      const mail_yesTask = document.getElementById("mail_yes");
      var mail_yesResult = radioPushInfo(mail_yesTask);
    }
    if (buttonWithAttr.closest("#mail_no")) {
      const mail_noTask = document.getElementById("mail_no");
      var mail_noResult = radioPushInfo(mail_noTask);
    }
    if (buttonWithAttr.closest("#hiring_conclusions")) {
      const hiring_conclusionsTask = document.getElementById(
        "hiring_conclusions"
      );
      var hiring_conclusionsResult = textareaPushInfo(hiring_conclusionsTask);
    }

    //---------------

    function formSubmit(dataTab1, dataTab2) {
      var data = {
        collection_id: "6517f3b8afa18ec4281d2852",
        user_id: fragments[4],
        user_tab1: dataTab1,
        user_tab2: dataTab2
      };
      // console.log(data);

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

      var brand_strategyBd;
      if (brand_strategyResult !== "" && brand_strategyResult !== undefined) {
        brand_strategyAnswear = brand_strategyResult;
        brand_strategyBd = "|/|" + brand_strategyAnswear;
      } else if (
        brand_strategyAnswear !== "" &&
        brand_strategyAnswear !== undefined
      ) {
        brand_strategyBd = "|/|" + brand_strategyAnswear;
      } else {
        brand_strategyBd = "";
      }

      var marketing_structureBd;
      if (
        marketing_structureResult !== "" &&
        marketing_structureResult !== undefined
      ) {
        marketing_structureAnswear = marketing_structureResult;
        marketing_structureBd = "|/|" + marketing_structureAnswear;
      } else if (
        marketing_structureAnswear !== "" &&
        marketing_structureAnswear !== undefined
      ) {
        marketing_structureBd = "|/|" + marketing_structureAnswear;
      } else {
        marketing_structureBd = "";
      }

      var structure_laterBd;
      if (structure_laterResult !== "" && structure_laterResult !== undefined) {
        structure_laterAnswear = structure_laterResult;
        structure_laterBd = "|/|" + structure_laterAnswear;
      } else if (
        structure_laterAnswear !== "" &&
        structure_laterAnswear !== undefined
      ) {
        structure_laterBd = "|/|" + structure_laterAnswear;
      } else {
        structure_laterBd = "";
      }

      var specialistsBd;
      if (specialistsResult !== "" && specialistsResult !== undefined) {
        specialistsAnswear = specialistsResult;
        specialistsBd = "|/|" + specialistsAnswear;
      } else if (
        specialistsAnswear !== "" &&
        specialistsAnswear !== undefined
      ) {
        specialistsBd = "|/|" + specialistsAnswear;
      } else {
        specialistsBd = "";
      }

      var ecvisition_managerBd;
      if (
        ecvisition_managerResult !== "" &&
        ecvisition_managerResult !== undefined
      ) {
        ecvisition_managerAnswear = ecvisition_managerResult;
        ecvisition_managerBd = "|/|" + ecvisition_managerAnswear;
      } else if (
        ecvisition_managerAnswear !== "" &&
        ecvisition_managerAnswear !== undefined
      ) {
        ecvisition_managerBd = "|/|" + ecvisition_managerAnswear;
      } else {
        ecvisition_managerBd = "";
      }

      var ecvisition_calcBd;
      if (ecvisition_calcResult !== "" && ecvisition_calcResult !== undefined) {
        ecvisition_calcAnswear = ecvisition_calcResult;
        ecvisition_calcBd = "|/|" + ecvisition_calcAnswear;
      } else if (
        ecvisition_calcAnswear !== "" &&
        ecvisition_calcAnswear !== undefined
      ) {
        ecvisition_calcBd = "|/|" + ecvisition_calcAnswear;
      } else {
        ecvisition_calcBd = "";
      }

      var manager_lvlBd;
      if (manager_lvlResult !== "" && manager_lvlResult !== undefined) {
        manager_lvlAnswear = manager_lvlResult;
        manager_lvlBd = "|/|" + manager_lvlAnswear;
      } else if (
        manager_lvlAnswear !== "" &&
        manager_lvlAnswear !== undefined
      ) {
        manager_lvlBd = "|/|" + manager_lvlAnswear;
      } else {
        manager_lvlBd = "";
      }

      var ecvisition_quantityBd;
      if (
        ecvisition_quantityResult !== "" &&
        ecvisition_quantityResult !== undefined
      ) {
        ecvisition_quantityAnswear = ecvisition_quantityResult;
        ecvisition_quantityBd = "|/|" + ecvisition_quantityAnswear;
      } else if (
        ecvisition_quantityAnswear !== "" &&
        ecvisition_quantityAnswear !== undefined
      ) {
        ecvisition_quantityBd = "|/|" + ecvisition_quantityAnswear;
      } else {
        ecvisition_quantityBd = "";
      }

      var ecvisition_budgetBd;
      if (
        ecvisition_budgetResult !== "" &&
        ecvisition_budgetResult !== undefined
      ) {
        ecvisition_budgetAnswear = ecvisition_budgetResult;
        ecvisition_budgetBd = "|/|" + ecvisition_budgetAnswear;
      } else if (
        ecvisition_budgetAnswear !== "" &&
        ecvisition_budgetAnswear !== undefined
      ) {
        ecvisition_budgetBd = "|/|" + ecvisition_budgetAnswear;
      } else {
        ecvisition_budgetBd = "";
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

      var requirementsBd;
      if (requirementsResult !== "" && requirementsResult !== undefined) {
        requirementsAnswear = requirementsResult;
        requirementsBd = "|/|" + requirementsAnswear;
      } else if (
        requirementsAnswear !== "" &&
        requirementsAnswear !== undefined
      ) {
        requirementsBd = "|/|" + requirementsAnswear;
      } else {
        requirementsBd = "";
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

      var test_taskBd;
      if (test_taskResult !== "" && test_taskResult !== undefined) {
        test_taskAnswear = test_taskResult;
        test_taskBd = "|/|" + test_taskAnswear;
      } else if (test_taskAnswear !== "" && test_taskAnswear !== undefined) {
        test_taskBd = "|/|" + test_taskAnswear;
      } else {
        test_taskBd = "";
      }

      var call_startBd;
      if (call_startResult !== "" && call_startResult !== undefined) {
        call_startAnswear = call_startResult;
        call_startBd = "|/|" + call_startAnswear;
      } else if (call_startAnswear !== "" && call_startAnswear !== undefined) {
        call_startBd = "|/|" + call_startAnswear;
      } else {
        call_startBd = "";
      }

      var skills_reviewBd;
      if (skills_reviewResult !== "" && skills_reviewResult !== undefined) {
        skills_reviewAnswear = skills_reviewResult;
        skills_reviewBd = "|/|" + skills_reviewAnswear;
      } else if (
        skills_reviewAnswear !== "" &&
        skills_reviewAnswear !== undefined
      ) {
        skills_reviewBd = "|/|" + skills_reviewAnswear;
      } else {
        skills_reviewBd = "";
      }

      var valuesBd;
      if (valuesResult !== "" && valuesResult !== undefined) {
        valuesAnswear = valuesResult;
        valuesBd = "|/|" + valuesAnswear;
      } else if (valuesAnswear !== "" && valuesAnswear !== undefined) {
        valuesBd = "|/|" + valuesAnswear;
      } else {
        valuesBd = "";
      }

      var dmytro_hireBd;
      if (dmytro_hireResult !== "" && dmytro_hireResult !== undefined) {
        dmytro_hireAnswear = dmytro_hireResult;
        dmytro_hireBd = "|/|" + dmytro_hireAnswear;
      } else if (
        dmytro_hireAnswear !== "" &&
        dmytro_hireAnswear !== undefined
      ) {
        dmytro_hireBd = "|/|" + dmytro_hireAnswear;
      } else {
        dmytro_hireBd = "";
      }

      var analytics_interviewBd;
      if (
        analytics_interviewResult !== "" &&
        analytics_interviewResult !== undefined
      ) {
        analytics_interviewAnswear = analytics_interviewResult;
        analytics_interviewBd = "|/|" + analytics_interviewAnswear;
      } else if (
        analytics_interviewAnswear !== "" &&
        analytics_interviewAnswear !== undefined
      ) {
        analytics_interviewBd = "|/|" + analytics_interviewAnswear;
      } else {
        analytics_interviewBd = "";
      }

      var mail_yesBd;
      if (mail_yesResult !== "" && mail_yesResult !== undefined) {
        mail_yesAnswear = mail_yesResult;
        mail_yesBd = "|/|" + mail_yesAnswear;
      } else if (mail_yesAnswear !== "" && mail_yesAnswear !== undefined) {
        mail_yesBd = "|/|" + mail_yesAnswear;
      } else {
        mail_yesBd = "";
      }

      var mail_noBd;
      if (mail_noResult !== "" && mail_noResult !== undefined) {
        mail_noAnswear = mail_noResult;
        mail_noBd = "|/|" + mail_noAnswear;
      } else if (mail_noAnswear !== "" && mail_noAnswear !== undefined) {
        mail_noBd = "|/|" + mail_noAnswear;
      } else {
        mail_noBd = "";
      }

      var hiring_conclusionsBd;
      if (
        hiring_conclusionsResult !== "" &&
        hiring_conclusionsResult !== undefined
      ) {
        hiring_conclusionsAnswear = hiring_conclusionsResult;
        hiring_conclusionsBd = "|/|" + hiring_conclusionsAnswear;
      } else if (
        hiring_conclusionsAnswear !== "" &&
        hiring_conclusionsAnswear !== undefined
      ) {
        hiring_conclusionsBd = "|/|" + hiring_conclusionsAnswear;
      } else {
        hiring_conclusionsBd = "";
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
          brand_strategyBd +
          marketing_structureBd +
          structure_laterBd +
          specialistsBd +
          ecvisition_managerBd +
          ecvisition_calcBd +
          manager_lvlBd +
          ecvisition_quantityBd +
          ecvisition_budgetBd +
          starTab1Bd;
      } else if (tab === "tab2") {
        var dataTab2 =
          countProgressTab2 +
          requirementsBd +
          canalsBd +
          test_taskBd +
          call_startBd +
          skills_reviewBd +
          valuesBd +
          dmytro_hireBd +
          analytics_interviewBd +
          mail_yesBd +
          mail_noBd +
          hiring_conclusionsBd +
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
          collection_id: "6517f3b8afa18ec4281d2852",
          user_id: fragments[4],
          tab1theory: tab1theoryVal
        };
      } else if (tabs === "tab2") {
        data2 = {
          collection_id: "6517f3b8afa18ec4281d2852",
          user_id: fragments[4],
          tab2theory: tab2theoryVal
        };
      }
      console.log(data2);
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
