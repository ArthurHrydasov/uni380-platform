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
var percentAnswear = tab1BDVal[1];
var languageAnswear = tab1BDVal[2];
var answer_cplAnswear = tab1BDVal[3];
var criterionAnswear = tab1BDVal[4];
var criterion_chooseAnswear = tab1BDVal[5];
var main_criterionAnswear = tab1BDVal[6];
var factorAnswear = tab1BDVal[7];
var proposalAnswear = tab1BDVal[8];
var factors_txtAnswear = tab1BDVal[9];
var conclusionsAnswear = tab1BDVal[10];
var countryAnswear = tab1BDVal[11];
var country_chooseAnswear = tab1BDVal[12];
var factors_prioritiesAnswear = tab1BDVal[13];
var points_txtAnswear = tab1BDVal[14];
var country_pointsAnswear = tab1BDVal[15];
var research_txtAnswear = tab1BDVal[16];
var starAnswearTab1 = tab1BDVal[17];

var countProgressTab2 = tab2BDVal[0];
var pestleAnswear = tab2BDVal[1];
var decisionAnswear = tab2BDVal[2];
var decision_twoAnswear = tab2BDVal[3];
var factors_priorities_twoAnswear = tab2BDVal[4];
var legal_factorsAnswear = tab2BDVal[5];
var teamAnswear = tab2BDVal[6];
var team_txtAnswear = tab2BDVal[7];
var structureAnswear = tab2BDVal[8];
var signalAnswear = tab2BDVal[9];
var china_txtAnswear = tab2BDVal[10];
var believeAnswear = tab2BDVal[11];
var china_risks_txtAnswear = tab2BDVal[12];
var starAnswearTab2 = tab2BDVal[13];

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
    user_id: user_id,
  };
  // console.log(data);
  fetch("https://uni380-ua-f2a8d215b9ab.herokuapp.com/create-lesson", {
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
create_lesson(
  "6589fffff1b468de2af19b66",
  user_email,
  fragments[4].slice(0, 24)
);

if (countProgressTab1 > 42) {
  availableLinks("thirteenthl_tab2");
  activetab("thirteenthl_tab2", "tab2");
}

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

function countryCheck() {
  var countryInfo = document.getElementById("country");
  var countryForm = countryInfo.querySelector("form");
  var countryElements = countryForm.querySelectorAll(".check_input");

  var countryFirst = countryElements[0].querySelector('input[type="checkbox"]');
  var countrySecond = countryElements[1].querySelector(
    'input[type="checkbox"]'
  );
  var countryThird = countryElements[2].querySelector('input[type="checkbox"]');
  var countryFourth = countryElements[3].querySelector(
    'input[type="checkbox"]'
  );
  var countryFiveth = countryElements[4].querySelector(
    'input[type="checkbox"]'
  );
  var countrySixth = countryElements[5].querySelector('input[type="checkbox"]');

  var noElement = countryInfo.nextElementSibling.querySelector(".no");
  var maybeElement = countryInfo.nextElementSibling.querySelector(".maybe");
  var yesElement = countryInfo.nextElementSibling.querySelector(".yes");

  if (
    !countryFirst.checked &&
    !countrySixth.checked &&
    (countrySecond.checked ||
      countryThird.checked ||
      countryFourth.checked ||
      countryFiveth.checked)
  ) {
    hideElements([yesElement, maybeElement]);
    showElement(noElement);
  } else if (
    countryFirst.checked &&
    countrySixth.checked &&
    !countrySecond.checked &&
    !countryThird.checked &&
    !countryFourth.checked &&
    !countryFiveth.checked
  ) {
    hideElements([noElement, maybeElement]);
    showElement(yesElement);
  } else {
    hideElements([noElement, yesElement]);
    showElement(maybeElement);
  }
}

function criterion_chooseCheck() {
  var criterion_chooseInfo = document.getElementById("criterion_choose");
  var criterion_chooseForm = criterion_chooseInfo.querySelector("form");
  var criterion_chooseElements =
    criterion_chooseForm.querySelectorAll(".check_input");

  var criterion_chooseFirst = criterion_chooseElements[0].querySelector(
    'input[type="checkbox"]'
  );
  var criterion_chooseSecond = criterion_chooseElements[1].querySelector(
    'input[type="checkbox"]'
  );
  var criterion_chooseThird = criterion_chooseElements[2].querySelector(
    'input[type="checkbox"]'
  );
  var criterion_chooseFourth = criterion_chooseElements[3].querySelector(
    'input[type="checkbox"]'
  );
  var criterion_chooseFiveth = criterion_chooseElements[4].querySelector(
    'input[type="checkbox"]'
  );
  var criterion_chooseSixth = criterion_chooseElements[5].querySelector(
    'input[type="checkbox"]'
  );
  var criterion_chooseSeventh = criterion_chooseElements[6].querySelector(
    'input[type="checkbox"]'
  );
  var criterion_chooseEighth = criterion_chooseElements[7].querySelector(
    'input[type="checkbox"]'
  );
  var criterion_chooseNineth = criterion_chooseElements[8].querySelector(
    'input[type="checkbox"]'
  );

  var noElement = criterion_chooseInfo.nextElementSibling.querySelector(".no");
  var maybeElement =
    criterion_chooseInfo.nextElementSibling.querySelector(".maybe");
  var yesElement =
    criterion_chooseInfo.nextElementSibling.querySelector(".yes");

  if (
    !criterion_chooseFirst.checked &&
    !criterion_chooseFourth.checked &&
    !criterion_chooseSixth.checked &&
    !criterion_chooseSeventh.checked &&
    (criterion_chooseSecond.checked ||
      criterion_chooseThird.checked ||
      criterion_chooseFiveth.checked ||
      criterion_chooseEighth.checked ||
      criterion_chooseNineth.checked)
  ) {
    hideElements([yesElement, maybeElement]);
    showElement(noElement);
  } else if (
    criterion_chooseFirst.checked &&
    criterion_chooseFourth.checked &&
    criterion_chooseSixth.checked &&
    criterion_chooseSeventh.checked &&
    !criterion_chooseSecond.checked &&
    !criterion_chooseThird.checked &&
    !criterion_chooseFiveth.checked &&
    !criterion_chooseEighth.checked &&
    !criterion_chooseNineth.checked
  ) {
    hideElements([noElement, maybeElement]);
    showElement(yesElement);
  } else {
    hideElements([noElement, yesElement]);
    showElement(maybeElement);
  }
}

function hideElements(elements) {
  elements.forEach(function (element) {
    element.classList.add("hide");
  });
}
function showElement(element) {
  element.classList.remove("hide");
}

let dragStartIndex;
let currentList;

function dragStart(e) {
  dragStartIndex = +e.target.dataset.index;
  currentList = e.target.closest(".draggable-list");
}

function dragEnter(e) {
  if (
    e.target.classList.contains("draggable-item") &&
    e.target.closest(".draggable-list") === currentList
  ) {
    e.target.classList.add("drag-over");
  }
}

function dragLeave() {
  document
    .querySelectorAll(".draggable-item")
    .forEach((item) => item.classList.remove("drag-over"));
}

function dragEnd() {
  const dragEndIndex = +this.dataset.index;
  const isSameList = currentList === this.closest(".draggable-list");

  if (isSameList) {
    swapItems(dragStartIndex, dragEndIndex, currentList);
    updateDragNumbers(currentList);
  }

  this.classList.remove("dragging");
  document
    .querySelectorAll(".draggable-item")
    .forEach((item) => item.classList.remove("drag-over"));
}

function swapItems(fromIndex, toIndex, list) {
  const items = list.querySelectorAll(".draggable-item");
  const draggedItem = items[fromIndex];
  const referenceItem = items[toIndex];

  if (fromIndex < toIndex) {
    list.insertBefore(draggedItem, referenceItem.nextSibling);
  } else {
    list.insertBefore(draggedItem, referenceItem);
  }
}

function updateDragNumbers(list) {
  const items = list.querySelectorAll(".draggable-item");
  items.forEach((item, index) => {
    const dragNumber = item.querySelector(".drag_number");
    dragNumber.textContent = index + 1;
    item.dataset.index = index;
  });
}

const draggableLists = document.querySelectorAll(".draggable-list");
draggableLists.forEach((list) => {
  const draggableItems = list.querySelectorAll(".draggable-item");
  draggableItems.forEach((item, index) => {
    item.addEventListener("dragstart", dragStart);
    item.addEventListener("dragenter", dragEnter);
    item.addEventListener("dragleave", dragLeave);
    item.addEventListener("dragover", (e) => e.preventDefault());
    // item.addEventListener("drop", dragEnd);
    item.addEventListener("drop", () => {
      dragEnd.call(item); // Викликайте dragEnd як функцію та передавайте контекст
      if (currentList) {
        currentList
          .closest(".blop")
          .querySelector("a[numberblop]")
          .removeAttribute("state");
        updateDragNumbers(currentList);
      }
    });
    item.dataset.index = index;
  });
});

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
    if (block && block.id === "criterion_choose") {
      criterion_chooseCheck();
    } else if (block && block.id === "country") {
      countryCheck();
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
  }

  function dragGetInfo(block, value) {
    var values = value;
    var valuesArray = values.split(",");
    var container = block.querySelector(".draggable-list");
    var dragItems = block.querySelectorAll(".drag_item");
    var dragItemsMap = {};

    dragItems.forEach(function (item) {
      dragItemsMap[item.getAttribute("val")] = item;
    });
    valuesArray.forEach(function (value, index) {
      var item = dragItemsMap[value];
      container.appendChild(item);
      item.querySelector(".drag_number").textContent = index + 1;
    });
  }

  if (percentAnswear !== "" && percentAnswear !== undefined) {
    const percentTask = document.getElementById("percent");
    radioGetInfo(percentTask, percentAnswear);
  }
  if (languageAnswear !== "" && languageAnswear !== undefined) {
    const languageTask = document.getElementById("language");
    radioGetInfo(languageTask, languageAnswear);
  }
  if (answer_cplAnswear !== "" && answer_cplAnswear !== undefined) {
    const answer_cplTask = document.getElementById("answer_cpl");
    radioGetInfo(answer_cplTask, answer_cplAnswear);
  }
  if (criterionAnswear !== "" && criterionAnswear !== undefined) {
    const criterionTask = document.getElementById("criterion");
    radioGetInfo(criterionTask, criterionAnswear);
  }
  if (criterion_chooseAnswear !== "" && criterion_chooseAnswear !== undefined) {
    const criterion_chooseTask = document.getElementById("criterion_choose");
    checkboxGetInfo(criterion_chooseTask, criterion_chooseAnswear);
  }
  if (main_criterionAnswear !== "" && main_criterionAnswear !== undefined) {
    const main_criterionTask = document.getElementById("main_criterion");
    radioGetInfo(main_criterionTask, main_criterionAnswear);
  }
  if (factorAnswear !== "" && factorAnswear !== undefined) {
    const factorTask = document.getElementById("factor");
    radioGetInfo(factorTask, factorAnswear);
  }
  if (proposalAnswear !== "" && proposalAnswear !== undefined) {
    const proposalTask = document.getElementById("proposal");
    radioGetInfo(proposalTask, proposalAnswear);
  }
  if (factors_txtAnswear !== "" && factors_txtAnswear !== undefined) {
    const factors_txtTask = document.getElementById("factors_txt");
    textareaGethInfo(factors_txtTask, factors_txtAnswear);
  }
  if (conclusionsAnswear !== "" && conclusionsAnswear !== undefined) {
    const conclusionsTask = document.getElementById("conclusions");
    radioGetInfo(conclusionsTask, conclusionsAnswear);
  }
  if (countryAnswear !== "" && countryAnswear !== undefined) {
    const countryTask = document.getElementById("country");
    checkboxGetInfo(countryTask, countryAnswear);
  }
  if (country_chooseAnswear !== "" && country_chooseAnswear !== undefined) {
    const country_chooseTask = document.getElementById("country_choose");
    radioGetInfo(country_chooseTask, country_chooseAnswear);
  }
  if (
    factors_prioritiesAnswear !== "" &&
    factors_prioritiesAnswear !== undefined
  ) {
    const factors_prioritiesTask =
      document.getElementById("factors_priorities");
    dragGetInfo(factors_prioritiesTask, factors_prioritiesAnswear);
  }
  if (points_txtAnswear !== "" && points_txtAnswear !== undefined) {
    const points_txtTask = document.getElementById("points_txt");
    textareaGethInfo(points_txtTask, points_txtAnswear);
  }
  if (country_pointsAnswear !== "" && country_pointsAnswear !== undefined) {
    const country_pointsTask = document.getElementById("country_points");
    radioGetInfo(country_pointsTask, country_pointsAnswear);
  }
  if (research_txtAnswear !== "" && research_txtAnswear !== undefined) {
    const research_txtTask = document.getElementById("research_txt");
    textareaGethInfo(research_txtTask, research_txtAnswear);
  }

  if (starAnswearTab1 !== "" && starAnswearTab1 !== undefined) {
    starGetInfo(
      document.querySelector('div[tabs="tab1"] .star_blop'),
      starAnswearTab1
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
    // if (block && block.id === "criterion_choose") {
    //   criterion_chooseCheck();
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

  function dragGetInfo(block, value) {
    var values = value;
    var valuesArray = values.split(",");
    var container = block.querySelector(".draggable-list");
    var dragItems = block.querySelectorAll(".drag_item");
    var dragItemsMap = {};

    dragItems.forEach(function (item) {
      dragItemsMap[item.getAttribute("val")] = item;
    });
    valuesArray.forEach(function (value, index) {
      var item = dragItemsMap[value];
      container.appendChild(item);
      item.querySelector(".drag_number").textContent = index + 1;
    });
  }

  if (pestleAnswear !== "" && pestleAnswear !== undefined) {
    const pestleTask = document.getElementById("pestle");
    radioGetInfo(pestleTask, pestleAnswear);
  }
  if (decisionAnswear !== "" && decisionAnswear !== undefined) {
    const decisionTask = document.getElementById("decision");
    radioGetInfo(decisionTask, decisionAnswear);
  }
  if (decision_twoAnswear !== "" && decision_twoAnswear !== undefined) {
    const decision_twoTask = document.getElementById("decision_two");
    radioGetInfo(decision_twoTask, decision_twoAnswear);
  }
  if (
    factors_priorities_twoAnswear !== "" &&
    factors_priorities_twoAnswear !== undefined
  ) {
    const factors_priorities_twoTask = document.getElementById(
      "factors_priorities_two"
    );
    dragGetInfo(factors_priorities_twoTask, factors_priorities_twoAnswear);
  }
  if (legal_factorsAnswear !== "" && legal_factorsAnswear !== undefined) {
    const legal_factorsTask = document.getElementById("legal_factors");
    radioGetInfo(legal_factorsTask, legal_factorsAnswear);
  }
  if (teamAnswear !== "" && teamAnswear !== undefined) {
    const teamTask = document.getElementById("team");
    radioGetInfo(teamTask, teamAnswear);
  }
  if (team_txtAnswear !== "" && team_txtAnswear !== undefined) {
    const team_txtTask = document.getElementById("team_txt");
    textareaGethInfo(team_txtTask, team_txtAnswear);
  }
  if (structureAnswear !== "" && structureAnswear !== undefined) {
    const structureTask = document.getElementById("structure");
    radioGetInfo(structureTask, structureAnswear);
  }
  if (signalAnswear !== "" && signalAnswear !== undefined) {
    const signalTask = document.getElementById("signal");
    radioGetInfo(signalTask, signalAnswear);
  }
  if (china_txtAnswear !== "" && china_txtAnswear !== undefined) {
    const china_txtTask = document.getElementById("china_txt");
    textareaGethInfo(china_txtTask, china_txtAnswear);
  }
  if (believeAnswear !== "" && believeAnswear !== undefined) {
    const believeTask = document.getElementById("believe");
    radioGetInfo(believeTask, believeAnswear);
  }
  if (china_risks_txtAnswear !== "" && china_risks_txtAnswear !== undefined) {
    const china_risks_txtTask = document.getElementById("china_risks_txt");
    textareaGethInfo(china_risks_txtTask, china_risks_txtAnswear);
  }

  if (starAnswearTab2 !== "" && starAnswearTab2 !== undefined) {
    starGetInfo(
      document.querySelector('div[tabs="tab2"] .star_blop'),
      starAnswearTab2
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
      criterion_chooseCheck();
      countryCheck();

      blopElement.nextElementSibling.classList.add("next_visible");
      setTimeout(function () {
        blopElement.nextElementSibling.classList.add("blop_animate");
      }, 1);

      if (button.classList.contains("last_button")) {
        var ss = button.getAttribute("numberBlop");
        create_lesson(
          "6589fffff1b468de2af19b66",
          user_email,
          fragments[4].slice(0, 24)
        );

        var parent = button.closest(".lesson_tab").getAttribute("tabs");

        if (ss > 42 && parent === "tab1") {
          availableLinks("thirteenthl_tab2");
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
      return result;
    }

    function dragPushInfo(block) {
      var drags = block.querySelectorAll(".drag_item");
      var selectedValues = [];
      drags.forEach(function (drag) {
        selectedValues.push(drag.getAttribute("val"));
      });
      var joinedString = selectedValues.join(",");
      var result = joinedString;
      console.log(result);
      return result;
    }

    if (buttonWithAttr.closest("#percent")) {
      const percentTask = document.getElementById("percent");
      var percentResult = radioPushInfo(percentTask);
    }
    if (buttonWithAttr.closest("#language")) {
      const languageTask = document.getElementById("language");
      var languageResult = radioPushInfo(languageTask);
    }
    if (buttonWithAttr.closest("#answer_cpl")) {
      const answer_cplTask = document.getElementById("answer_cpl");
      var answer_cplResult = radioPushInfo(answer_cplTask);
    }
    if (buttonWithAttr.closest("#criterion")) {
      const criterionTask = document.getElementById("criterion");
      var criterionResult = radioPushInfo(criterionTask);
    }
    if (buttonWithAttr.closest("#criterion_choose")) {
      const criterion_chooseTask = document.getElementById("criterion_choose");
      var criterion_chooseResult = checkboxPushInfo(criterion_chooseTask);
    }
    if (buttonWithAttr.closest("#main_criterion")) {
      const main_criterionTask = document.getElementById("main_criterion");
      var main_criterionResult = radioPushInfo(main_criterionTask);
    }
    if (buttonWithAttr.closest("#factor")) {
      const factorTask = document.getElementById("factor");
      var factorResult = radioPushInfo(factorTask);
    }
    if (buttonWithAttr.closest("#proposal")) {
      const proposalTask = document.getElementById("proposal");
      var proposalResult = radioPushInfo(proposalTask);
    }
    if (buttonWithAttr.closest("#factors_txt")) {
      const factors_txtTask = document.getElementById("factors_txt");
      var factors_txtResult = textareaPushInfo(factors_txtTask);
    }
    if (buttonWithAttr.closest("#conclusions")) {
      const conclusionsTask = document.getElementById("conclusions");
      var conclusionsResult = radioPushInfo(conclusionsTask);
    }
    if (buttonWithAttr.closest("#country")) {
      const countryTask = document.getElementById("country");
      var countryResult = checkboxPushInfo(countryTask);
    }
    if (buttonWithAttr.closest("#country_choose")) {
      const country_chooseTask = document.getElementById("country_choose");
      var country_chooseResult = radioPushInfo(country_chooseTask);
    }
    if (buttonWithAttr.closest("#factors_priorities")) {
      const factors_prioritiesTask =
        document.getElementById("factors_priorities");
      var factors_prioritiesResult = dragPushInfo(factors_prioritiesTask);
    }
    if (buttonWithAttr.closest("#points_txt")) {
      const points_txtTask = document.getElementById("points_txt");
      var points_txtResult = textareaPushInfo(points_txtTask);
    }
    if (buttonWithAttr.closest("#country_points")) {
      const country_pointsTask = document.getElementById("country_points");
      var country_pointsResult = radioPushInfo(country_pointsTask);
    }
    if (buttonWithAttr.closest("#research_txt")) {
      const research_txtTask = document.getElementById("research_txt");
      var research_txtResult = textareaPushInfo(research_txtTask);
    }

    // ---------------

    if (buttonWithAttr.closest("#pestle")) {
      const pestleTask = document.getElementById("pestle");
      var pestleResult = radioPushInfo(pestleTask);
    }
    if (buttonWithAttr.closest("#decision")) {
      const decisionTask = document.getElementById("decision");
      var decisionResult = radioPushInfo(decisionTask);
    }
    if (buttonWithAttr.closest("#decision_two")) {
      const decision_twoTask = document.getElementById("decision_two");
      var decision_twoResult = radioPushInfo(decision_twoTask);
    }
    if (buttonWithAttr.closest("#factors_priorities_two")) {
      const factors_priorities_twoTask = document.getElementById(
        "factors_priorities_two"
      );
      var factors_priorities_twoResult = dragPushInfo(
        factors_priorities_twoTask
      );
    }
    if (buttonWithAttr.closest("#legal_factors")) {
      const legal_factorsTask = document.getElementById("legal_factors");
      var legal_factorsResult = radioPushInfo(legal_factorsTask);
    }
    if (buttonWithAttr.closest("#team")) {
      const teamTask = document.getElementById("team");
      var teamResult = radioPushInfo(teamTask);
    }
    if (buttonWithAttr.closest("#team_txt")) {
      const team_txtTask = document.getElementById("team_txt");
      var team_txtResult = textareaPushInfo(team_txtTask);
    }
    if (buttonWithAttr.closest("#structure")) {
      const structureTask = document.getElementById("structure");
      var structureResult = radioPushInfo(structureTask);
    }
    if (buttonWithAttr.closest("#signal")) {
      const signalTask = document.getElementById("signal");
      var signalResult = radioPushInfo(signalTask);
    }
    if (buttonWithAttr.closest("#china_txt")) {
      const china_txtTask = document.getElementById("china_txt");
      var china_txtResult = textareaPushInfo(china_txtTask);
    }
    if (buttonWithAttr.closest("#believe")) {
      const believeTask = document.getElementById("believe");
      var believeResult = radioPushInfo(believeTask);
    }
    if (buttonWithAttr.closest("#china_risks_txt")) {
      const china_risks_txtTask = document.getElementById("china_risks_txt");
      var china_risks_txtResult = textareaPushInfo(china_risks_txtTask);
    }

    // ---------------

    function formSubmit(dataTab1, dataTab2) {
      var data = {
        collection_id: "656c7c06998532066a3e134d",
        user_id: fragments[4].slice(0, 24),
        user_tab1: dataTab1,
        user_tab2: dataTab2,
      };
      console.log(data);

       fetch("https://uni380-ua-f2a8d215b9ab.herokuapp.com/lesson-info", {
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

      var percentBd;
      if (percentResult !== "" && percentResult !== undefined) {
        percentAnswear = percentResult;
        percentBd = "|/|" + percentAnswear;
      } else if (percentAnswear !== "" && percentAnswear !== undefined) {
        percentBd = "|/|" + percentAnswear;
      } else {
        percentBd = "";
      }
      var languageBd;
      if (languageResult !== "" && languageResult !== undefined) {
        languageAnswear = languageResult;
        languageBd = "|/|" + languageAnswear;
      } else if (languageAnswear !== "" && languageAnswear !== undefined) {
        languageBd = "|/|" + languageAnswear;
      } else {
        languageBd = "";
      }
      var answer_cplBd;
      if (answer_cplResult !== "" && answer_cplResult !== undefined) {
        answer_cplAnswear = answer_cplResult;
        answer_cplBd = "|/|" + answer_cplAnswear;
      } else if (answer_cplAnswear !== "" && answer_cplAnswear !== undefined) {
        answer_cplBd = "|/|" + answer_cplAnswear;
      } else {
        answer_cplBd = "";
      }
      var criterionBd;
      if (criterionResult !== "" && criterionResult !== undefined) {
        criterionAnswear = criterionResult;
        criterionBd = "|/|" + criterionAnswear;
      } else if (criterionAnswear !== "" && criterionAnswear !== undefined) {
        criterionBd = "|/|" + criterionAnswear;
      } else {
        criterionBd = "";
      }
      var criterion_chooseBd;
      if (
        criterion_chooseResult !== "" &&
        criterion_chooseResult !== undefined
      ) {
        criterion_chooseAnswear = criterion_chooseResult;
        criterion_chooseBd = "|/|" + criterion_chooseAnswear;
      } else if (
        criterion_chooseAnswear !== "" &&
        criterion_chooseAnswear !== undefined
      ) {
        criterion_chooseBd = "|/|" + criterion_chooseAnswear;
      } else {
        criterion_chooseBd = "";
      }
      var main_criterionBd;
      if (main_criterionResult !== "" && main_criterionResult !== undefined) {
        main_criterionAnswear = main_criterionResult;
        main_criterionBd = "|/|" + main_criterionAnswear;
      } else if (
        main_criterionAnswear !== "" &&
        main_criterionAnswear !== undefined
      ) {
        main_criterionBd = "|/|" + main_criterionAnswear;
      } else {
        main_criterionBd = "";
      }
      var factorBd;
      if (factorResult !== "" && factorResult !== undefined) {
        factorAnswear = factorResult;
        factorBd = "|/|" + factorAnswear;
      } else if (factorAnswear !== "" && factorAnswear !== undefined) {
        factorBd = "|/|" + factorAnswear;
      } else {
        factorBd = "";
      }
      var proposalBd;
      if (proposalResult !== "" && proposalResult !== undefined) {
        proposalAnswear = proposalResult;
        proposalBd = "|/|" + proposalAnswear;
      } else if (proposalAnswear !== "" && proposalAnswear !== undefined) {
        proposalBd = "|/|" + proposalAnswear;
      } else {
        proposalBd = "";
      }
      var factors_txtBd;
      if (factors_txtResult !== "" && factors_txtResult !== undefined) {
        factors_txtAnswear = factors_txtResult;
        factors_txtBd = "|/|" + factors_txtAnswear;
      } else if (
        factors_txtAnswear !== "" &&
        factors_txtAnswear !== undefined
      ) {
        factors_txtBd = "|/|" + factors_txtAnswear;
      } else {
        factors_txtBd = "";
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
      var countryBd;
      if (countryResult !== "" && countryResult !== undefined) {
        countryAnswear = countryResult;
        countryBd = "|/|" + countryAnswear;
      } else if (countryAnswear !== "" && countryAnswear !== undefined) {
        countryBd = "|/|" + countryAnswear;
      } else {
        countryBd = "";
      }
      var country_chooseBd;
      if (country_chooseResult !== "" && country_chooseResult !== undefined) {
        country_chooseAnswear = country_chooseResult;
        country_chooseBd = "|/|" + country_chooseAnswear;
      } else if (
        country_chooseAnswear !== "" &&
        country_chooseAnswear !== undefined
      ) {
        country_chooseBd = "|/|" + country_chooseAnswear;
      } else {
        country_chooseBd = "";
      }
      var factors_prioritiesBd;
      if (
        factors_prioritiesResult !== "" &&
        factors_prioritiesResult !== undefined
      ) {
        factors_prioritiesAnswear = factors_prioritiesResult;
        factors_prioritiesBd = "|/|" + factors_prioritiesAnswear;
      } else if (
        factors_prioritiesAnswear !== "" &&
        factors_prioritiesAnswear !== undefined
      ) {
        factors_prioritiesBd = "|/|" + factors_prioritiesAnswear;
      } else {
        factors_prioritiesBd = "";
      }
      var points_txtBd;
      if (points_txtResult !== "" && points_txtResult !== undefined) {
        points_txtAnswear = points_txtResult;
        points_txtBd = "|/|" + points_txtAnswear;
      } else if (points_txtAnswear !== "" && points_txtAnswear !== undefined) {
        points_txtBd = "|/|" + points_txtAnswear;
      } else {
        points_txtBd = "";
      }
      var country_pointsBd;
      if (country_pointsResult !== "" && country_pointsResult !== undefined) {
        country_pointsAnswear = country_pointsResult;
        country_pointsBd = "|/|" + country_pointsAnswear;
      } else if (
        country_pointsAnswear !== "" &&
        country_pointsAnswear !== undefined
      ) {
        country_pointsBd = "|/|" + country_pointsAnswear;
      } else {
        country_pointsBd = "";
      }
      var research_txtBd;
      if (research_txtResult !== "" && research_txtResult !== undefined) {
        research_txtAnswear = research_txtResult;
        research_txtBd = "|/|" + research_txtAnswear;
      } else if (
        research_txtAnswear !== "" &&
        research_txtAnswear !== undefined
      ) {
        research_txtBd = "|/|" + research_txtAnswear;
      } else {
        research_txtBd = "";
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

      // // ----------

      var pestleBd;
      if (pestleResult !== "" && pestleResult !== undefined) {
        pestleAnswear = pestleResult;
        pestleBd = "|/|" + pestleAnswear;
      } else if (pestleAnswear !== "" && pestleAnswear !== undefined) {
        pestleBd = "|/|" + pestleAnswear;
      } else {
        pestleBd = "";
      }
      var decisionBd;
      if (decisionResult !== "" && decisionResult !== undefined) {
        decisionAnswear = decisionResult;
        decisionBd = "|/|" + decisionAnswear;
      } else if (decisionAnswear !== "" && decisionAnswear !== undefined) {
        decisionBd = "|/|" + decisionAnswear;
      } else {
        decisionBd = "";
      }
      var decision_twoBd;
      if (decision_twoResult !== "" && decision_twoResult !== undefined) {
        decision_twoAnswear = decision_twoResult;
        decision_twoBd = "|/|" + decision_twoAnswear;
      } else if (
        decision_twoAnswear !== "" &&
        decision_twoAnswear !== undefined
      ) {
        decision_twoBd = "|/|" + decision_twoAnswear;
      } else {
        decision_twoBd = "";
      }
      var factors_priorities_twoBd;
      if (
        factors_priorities_twoResult !== "" &&
        factors_priorities_twoResult !== undefined
      ) {
        factors_priorities_twoAnswear = factors_priorities_twoResult;
        factors_priorities_twoBd = "|/|" + factors_priorities_twoAnswear;
      } else if (
        factors_priorities_twoAnswear !== "" &&
        factors_priorities_twoAnswear !== undefined
      ) {
        factors_priorities_twoBd = "|/|" + factors_priorities_twoAnswear;
      } else {
        factors_priorities_twoBd = "";
      }
      var legal_factorsBd;
      if (legal_factorsResult !== "" && legal_factorsResult !== undefined) {
        legal_factorsAnswear = legal_factorsResult;
        legal_factorsBd = "|/|" + legal_factorsAnswear;
      } else if (
        legal_factorsAnswear !== "" &&
        legal_factorsAnswear !== undefined
      ) {
        legal_factorsBd = "|/|" + legal_factorsAnswear;
      } else {
        legal_factorsBd = "";
      }
      var teamBd;
      if (teamResult !== "" && teamResult !== undefined) {
        teamAnswear = teamResult;
        teamBd = "|/|" + teamAnswear;
      } else if (teamAnswear !== "" && teamAnswear !== undefined) {
        teamBd = "|/|" + teamAnswear;
      } else {
        teamBd = "";
      }
      var team_txtBd;
      if (team_txtResult !== "" && team_txtResult !== undefined) {
        team_txtAnswear = team_txtResult;
        team_txtBd = "|/|" + team_txtAnswear;
      } else if (team_txtAnswear !== "" && team_txtAnswear !== undefined) {
        team_txtBd = "|/|" + team_txtAnswear;
      } else {
        team_txtBd = "";
      }
      var structureBd;
      if (structureResult !== "" && structureResult !== undefined) {
        structureAnswear = structureResult;
        structureBd = "|/|" + structureAnswear;
      } else if (structureAnswear !== "" && structureAnswear !== undefined) {
        structureBd = "|/|" + structureAnswear;
      } else {
        structureBd = "";
      }
      var signalBd;
      if (signalResult !== "" && signalResult !== undefined) {
        signalAnswear = signalResult;
        signalBd = "|/|" + signalAnswear;
      } else if (signalAnswear !== "" && signalAnswear !== undefined) {
        signalBd = "|/|" + signalAnswear;
      } else {
        signalBd = "";
      }
      var china_txtBd;
      if (china_txtResult !== "" && china_txtResult !== undefined) {
        china_txtAnswear = china_txtResult;
        china_txtBd = "|/|" + china_txtAnswear;
      } else if (china_txtAnswear !== "" && china_txtAnswear !== undefined) {
        china_txtBd = "|/|" + china_txtAnswear;
      } else {
        china_txtBd = "";
      }
      var believeBd;
      if (believeResult !== "" && believeResult !== undefined) {
        believeAnswear = believeResult;
        believeBd = "|/|" + believeAnswear;
      } else if (believeAnswear !== "" && believeAnswear !== undefined) {
        believeBd = "|/|" + believeAnswear;
      } else {
        believeBd = "";
      }
      var china_risks_txtBd;
      if (china_risks_txtResult !== "" && china_risks_txtResult !== undefined) {
        china_risks_txtAnswear = china_risks_txtResult;
        china_risks_txtBd = "|/|" + china_risks_txtAnswear;
      } else if (
        china_risks_txtAnswear !== "" &&
        china_risks_txtAnswear !== undefined
      ) {
        china_risks_txtBd = "|/|" + china_risks_txtAnswear;
      } else {
        china_risks_txtBd = "";
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

      // ---------------

      if (tab === "tab1") {
        var dataTab1 =
          countProgressTab1 +
          percentBd +
          languageBd +
          answer_cplBd +
          criterionBd +
          criterion_chooseBd +
          main_criterionBd +
          factorBd +
          proposalBd +
          factors_txtBd +
          conclusionsBd +
          countryBd +
          country_chooseBd +
          factors_prioritiesBd +
          points_txtBd +
          country_pointsBd +
          research_txtBd +
          starTab1Bd;
      } else if (tab === "tab2") {
        var dataTab2 =
          countProgressTab2 +
          pestleBd +
          decisionBd +
          decision_twoBd +
          factors_priorities_twoBd +
          legal_factorsBd +
          teamBd +
          team_txtBd +
          structureBd +
          signalBd +
          china_txtBd +
          believeBd +
          china_risks_txtBd +
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

    function formTheory(tab1theoryVal) {
      var data2;
      if (tabs === "tab1") {
        data2 = {
          collection_id: "656c7c06998532066a3e134d",
          user_id: fragments[4].slice(0, 24),
          tab1theory: tab1theoryVal,
        };
      } else if (tabs === "tab2") {
        data2 = {
          collection_id: "656c7c06998532066a3e134d",
          user_id: fragments[4].slice(0, 24),
          tab2theory: tab2theoryVal,
        };
      }
      console.log(data2);
       fetch("https://uni380-ua-f2a8d215b9ab.herokuapp.com/lesson-info", {
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
