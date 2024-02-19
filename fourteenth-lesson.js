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
var china_knowAnswear = tab1BDVal[1];
var team_endAnswear = tab1BDVal[2];
var local_conAnswear = tab1BDVal[3];
var china_thinkAnswear = tab1BDVal[4];
var cheap_varAnswear = tab1BDVal[5];
var domenAnswear = tab1BDVal[6];
var socAnswear = tab1BDVal[7];
var min_testAnswear = tab1BDVal[8];
var blogersAnswear = tab1BDVal[9];
var successAnswear = tab1BDVal[10];
var reg_calcAnswear = tab1BDVal[11];
var first_pay_calcAnswear = tab1BDVal[12];
var retention_calcAnswear = tab1BDVal[13];
var mashtabAnswear = tab1BDVal[14];
var fail_doAnswear = tab1BDVal[15];
var starAnswearTab1 = tab1BDVal[16];

var countProgressTab2 = tab2BDVal[0];
var force_majeureAnswear = tab2BDVal[1];
var visaAnswear = tab2BDVal[2];
var visa_txtAnswear = tab2BDVal[3];
var office_txtAnswear = tab2BDVal[4];
var siaAnswear = tab2BDVal[5];
var factors_prioritiesAnswear = tab2BDVal[6];
var investigation_txtAnswear = tab2BDVal[7];
var contractAnswear = tab2BDVal[8];
var sia_sayAnswear = tab2BDVal[9];
var sia_doAnswear = tab2BDVal[10];
var pay_halfAnswear = tab2BDVal[11];
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

if (countProgressTab1 > 47) {
  availableLinks("fourteenthl_tab2");
  activetab("fourteenthl_tab2", "tab2");
}

function radioCheck(blopElement) {
  var radio = blopElement.querySelector('input[type="radio"]:checked');
  if (blopElement.id === "sia_say") {
    if (radio) {
      var value = radio.value;
      var elementsToRemove = document.querySelectorAll(
        '[sia_say]:not([sia_say="' + value + '"])'
      );
      elementsToRemove.forEach((elem) => {
        elem.remove();
      });
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

function min_testCheck() {
  var min_testInfo = document.getElementById("min_test");
  var min_testForm = min_testInfo.querySelector("form");
  var min_testElements = min_testForm.querySelectorAll(".check_input");

  var min_testFirst = min_testElements[0].querySelector(
    'input[type="checkbox"]'
  );
  var min_testSecond = min_testElements[1].querySelector(
    'input[type="checkbox"]'
  );
  var min_testThird = min_testElements[2].querySelector(
    'input[type="checkbox"]'
  );
  var min_testFourth = min_testElements[3].querySelector(
    'input[type="checkbox"]'
  );
  var min_testFiveth = min_testElements[4].querySelector(
    'input[type="checkbox"]'
  );

  var noElement = min_testInfo.nextElementSibling.querySelector(".no");
  var maybeElement = min_testInfo.nextElementSibling.querySelector(".maybe");
  var yesElement = min_testInfo.nextElementSibling.querySelector(".yes");

  if (
    !min_testFirst.checked &&
    !min_testSecond.checked &&
    !min_testFiveth.checked &&
    (min_testFourth.checked || min_testThird.checked)
  ) {
    hideElements([yesElement, maybeElement]);
    showElement(noElement);
  } else if (
    min_testFirst.checked &&
    min_testSecond.checked &&
    min_testFiveth.checked &&
    !min_testFourth.checked &&
    !min_testThird.checked
  ) {
    hideElements([noElement, maybeElement]);
    showElement(yesElement);
  } else {
    hideElements([noElement, yesElement]);
    showElement(maybeElement);
  }
}

function cheap_varCheck() {
  var cheap_varInfo = document.getElementById("cheap_var");
  var cheap_varForm = cheap_varInfo.querySelector("form");
  var cheap_varElements = cheap_varForm.querySelectorAll(".check_input");

  var cheap_varFirst = cheap_varElements[0].querySelector(
    'input[type="checkbox"]'
  );
  var cheap_varSecond = cheap_varElements[1].querySelector(
    'input[type="checkbox"]'
  );
  var cheap_varThird = cheap_varElements[2].querySelector(
    'input[type="checkbox"]'
  );
  var cheap_varFourth = cheap_varElements[3].querySelector(
    'input[type="checkbox"]'
  );

  var noElement = cheap_varInfo.nextElementSibling.querySelector(".no");
  var maybeElement = cheap_varInfo.nextElementSibling.querySelector(".maybe");
  var yesElement = cheap_varInfo.nextElementSibling.querySelector(".yes");

  if (
    !cheap_varThird.checked &&
    !cheap_varFourth.checked &&
    (cheap_varFirst.checked || cheap_varSecond.checked)
  ) {
    hideElements([yesElement, maybeElement]);
    showElement(noElement);
  } else if (
    cheap_varThird.checked &&
    cheap_varFourth.checked &&
    !cheap_varFirst.checked &&
    !cheap_varSecond.checked
  ) {
    hideElements([noElement, maybeElement]);
    showElement(yesElement);
  } else {
    hideElements([noElement, yesElement]);
    showElement(maybeElement);
  }
}

function contractCheck() {
  var contractInfo = document.getElementById("contract");
  var contractForm = contractInfo.querySelector("form");
  var contractElements = contractForm.querySelectorAll(".check_input");

  var contractFirst = contractElements[0].querySelector(
    'input[type="checkbox"]'
  );
  var contractSecond = contractElements[1].querySelector(
    'input[type="checkbox"]'
  );
  var contractThird = contractElements[2].querySelector(
    'input[type="checkbox"]'
  );
  var contractFourth = contractElements[3].querySelector(
    'input[type="checkbox"]'
  );

  var noElement = contractInfo.nextElementSibling.querySelector(".no");
  var maybeElement = contractInfo.nextElementSibling.querySelector(".maybe");
  var yesElement = contractInfo.nextElementSibling.querySelector(".yes");

  if (
    !contractSecond.checked &&
    !contractThird.checked &&
    !contractFourth.checked &&
    contractFirst.checked
  ) {
    hideElements([yesElement, maybeElement]);
    showElement(noElement);
  } else if (
    contractThird.checked &&
    contractFourth.checked &&
    contractSecond.checked &&
    !contractFirst.checked
  ) {
    hideElements([noElement, maybeElement]);
    showElement(yesElement);
  } else {
    hideElements([noElement, yesElement]);
    showElement(maybeElement);
  }
}

function sia_doCheck() {
  var sia_doInfo = document.getElementById("sia_do");
  var sia_doForm = sia_doInfo.querySelector("form");
  var sia_doElements = sia_doForm.querySelectorAll(".check_input");

  var sia_doFirst = sia_doElements[0].querySelector('input[type="checkbox"]');
  var sia_doSecond = sia_doElements[1].querySelector('input[type="checkbox"]');
  var sia_doThird = sia_doElements[2].querySelector('input[type="checkbox"]');
  var sia_doFourth = sia_doElements[3].querySelector('input[type="checkbox"]');
  var sia_doFiveth = sia_doElements[4].querySelector('input[type="checkbox"]');

  var noElement = sia_doInfo.nextElementSibling.querySelector(".no");
  var maybeElement = sia_doInfo.nextElementSibling.querySelector(".maybe");
  var yesElement = sia_doInfo.nextElementSibling.querySelector(".yes");

  if (
    !sia_doFirst.checked &&
    !sia_doThird.checked &&
    !sia_doFourth.checked &&
    (sia_doFiveth.checked || sia_doSecond.checked)
  ) {
    hideElements([yesElement, maybeElement]);
    showElement(noElement);
  } else if (
    sia_doFirst.checked &&
    sia_doThird.checked &&
    sia_doFourth.checked &&
    !sia_doFiveth.checked &&
    !sia_doSecond.checked
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
    if (block && block.id === "cheap_var") {
      cheap_varCheck();
    } else if (block && block.id === "min_test") {
      min_testCheck();
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

  //   function textareaGethInfo(block, value) {
  //     var textarea = block.querySelector("textarea");
  //     textarea.value = value;
  //   }

  function textareaGethInfo(block, value) {
    var textarea = block.querySelector("textarea");
    textarea.value = value;

    if (countProgressTab1 !== "") {
      if (block.classList.contains("reg_calc")) {
        function reg_calc(blop) {
          var value = blop.querySelector("textarea").value;
          var cleanedString = value.replace(/[^0-9.]/g, "");
          var radioAnswer;
          if (cleanedString === "4.3") {
            radioAnswer = blop.nextElementSibling.querySelector(".one");
            radioAnswer.classList.add("answer_visible");
          } else {
            radioAnswer = blop.nextElementSibling.querySelector(".two");
            radioAnswer.classList.add("answer_visible");
          }
        }
        reg_calc(block);
      }
    } else if (block.classList.contains("first_pay_calc")) {
      function first_pay_calc(blop) {
        var value = blop.querySelector("textarea").value;
        var cleanedString = value.replace(/[^0-9.]/g, "");
        var radioAnswer;
        if (cleanedString === "19.96" || cleanedString === "20") {
          radioAnswer = blop.nextElementSibling.querySelector(".one");
          radioAnswer.classList.add("answer_visible");
        } else {
          radioAnswer = blop.nextElementSibling.querySelector(".two");
          radioAnswer.classList.add("answer_visible");
        }
      }
      first_pay_calc(block);
    } else if (block.classList.contains("retention_calc")) {
      function retention_calc(blop) {
        var value = blop.querySelector("textarea").value;
        var cleanedString = value.replace(/[^0-9.]/g, "");
        var radioAnswer;
        if (
          cleanedString === "78.78" ||
          cleanedString === "78.8" ||
          cleanedString === "79"
        ) {
          radioAnswer = blop.nextElementSibling.querySelector(".one");
          radioAnswer.classList.add("answer_visible");
        } else {
          radioAnswer = blop.nextElementSibling.querySelector(".two");
          radioAnswer.classList.add("answer_visible");
        }
      }
      retention_calc(block);
    }
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

  if (china_knowAnswear !== "" && china_knowAnswear !== undefined) {
    const china_knowTask = document.getElementById("china_know");
    checkboxGetInfo(china_knowTask, china_knowAnswear);
  }
  if (team_endAnswear !== "" && team_endAnswear !== undefined) {
    const team_endTask = document.getElementById("team_end");
    radioGetInfo(team_endTask, team_endAnswear);
  }
  if (local_conAnswear !== "" && local_conAnswear !== undefined) {
    const local_conTask = document.getElementById("local_con");
    radioGetInfo(local_conTask, local_conAnswear);
  }
  if (china_thinkAnswear !== "" && china_thinkAnswear !== undefined) {
    const china_thinkTask = document.getElementById("china_think");
    textareaGethInfo(china_thinkTask, china_thinkAnswear);
  }
  if (cheap_varAnswear !== "" && cheap_varAnswear !== undefined) {
    const cheap_varTask = document.getElementById("cheap_var");
    checkboxGetInfo(cheap_varTask, cheap_varAnswear);
  }
  if (domenAnswear !== "" && domenAnswear !== undefined) {
    const domenTask = document.getElementById("domen");
    radioGetInfo(domenTask, domenAnswear);
  }
  if (socAnswear !== "" && socAnswear !== undefined) {
    const socTask = document.getElementById("soc");
    checkboxGetInfo(socTask, socAnswear);
  }
  if (min_testAnswear !== "" && min_testAnswear !== undefined) {
    const min_testTask = document.getElementById("min_test");
    checkboxGetInfo(min_testTask, min_testAnswear);
  }
  if (blogersAnswear !== "" && blogersAnswear !== undefined) {
    const blogersTask = document.getElementById("blogers");
    textareaGethInfo(blogersTask, blogersAnswear);
  }
  if (successAnswear !== "" && successAnswear !== undefined) {
    const successTask = document.getElementById("success");
    radioGetInfo(successTask, successAnswear);
  }
  if (reg_calcAnswear !== "" && reg_calcAnswear !== undefined) {
    const reg_calcTask = document.getElementById("reg_calc");
    textareaGethInfo(reg_calcTask, reg_calcAnswear);
  }
  if (first_pay_calcAnswear !== "" && first_pay_calcAnswear !== undefined) {
    const first_pay_calcTask = document.getElementById("first_pay_calc");
    textareaGethInfo(first_pay_calcTask, first_pay_calcAnswear);
  }
  if (retention_calcAnswear !== "" && retention_calcAnswear !== undefined) {
    const retention_calcTask = document.getElementById("retention_calc");
    textareaGethInfo(retention_calcTask, retention_calcAnswear);
  }
  if (mashtabAnswear !== "" && mashtabAnswear !== undefined) {
    const mashtabTask = document.getElementById("mashtab");
    radioGetInfo(mashtabTask, mashtabAnswear);
  }
  if (fail_doAnswear !== "" && fail_doAnswear !== undefined) {
    const fail_doTask = document.getElementById("fail_do");
    radioGetInfo(fail_doTask, fail_doAnswear);
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
    if (block && block.id === "contract") {
      contractCheck();
    } else if (block && block.id === "sia_do") {
      sia_doCheck();
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

    // sia_say
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

  if (force_majeureAnswear !== "" && force_majeureAnswear !== undefined) {
    const force_majeureTask = document.getElementById("force_majeure");
    radioGetInfo(force_majeureTask, force_majeureAnswear);
  }
  if (visaAnswear !== "" && visaAnswear !== undefined) {
    const visaTask = document.getElementById("visa");
    radioGetInfo(visaTask, visaAnswear);
  }
  if (visa_txtAnswear !== "" && visa_txtAnswear !== undefined) {
    const visa_txtTask = document.getElementById("visa_txt");
    textareaGethInfo(visa_txtTask, visa_txtAnswear);
  }
  if (office_txtAnswear !== "" && office_txtAnswear !== undefined) {
    const office_txtTask = document.getElementById("office_txt");
    textareaGethInfo(office_txtTask, office_txtAnswear);
  }
  if (siaAnswear !== "" && siaAnswear !== undefined) {
    const siaTask = document.getElementById("sia");
    radioGetInfo(siaTask, siaAnswear);
  }
  if (
    factors_prioritiesAnswear !== "" &&
    factors_prioritiesAnswear !== undefined
  ) {
    const factors_prioritiesTask =
      document.getElementById("factors_priorities");
    dragGetInfo(factors_prioritiesTask, factors_prioritiesAnswear);
  }
  if (
    investigation_txtAnswear !== "" &&
    investigation_txtAnswear !== undefined
  ) {
    const investigation_txtTask = document.getElementById("investigation_txt");
    textareaGethInfo(investigation_txtTask, investigation_txtAnswear);
  }
  if (contractAnswear !== "" && contractAnswear !== undefined) {
    const contractTask = document.getElementById("contract");
    checkboxGetInfo(contractTask, contractAnswear);
  }
  if (sia_sayAnswear !== "" && sia_sayAnswear !== undefined) {
    const sia_sayTask = document.getElementById("sia_say");
    radioGetInfo(sia_sayTask, sia_sayAnswear);
  }
  if (sia_doAnswear !== "" && sia_doAnswear !== undefined) {
    const sia_doTask = document.getElementById("sia_do");
    checkboxGetInfo(sia_doTask, sia_doAnswear);
  }
  if (pay_halfAnswear !== "" && pay_halfAnswear !== undefined) {
    const pay_halfTask = document.getElementById("pay_half");
    radioGetInfo(pay_halfTask, pay_halfAnswear);
  }

  // force_majeureAnswear
  // visaAnswear
  // visa_txtAnswear
  // office_txtAnswear
  // siaAnswear
  // factors_prioritiesAnswear
  // investigation_txtAnswear
  // contractAnswear
  // sia_sayAnswear
  // sia_doAnswear
  // pay_halfAnswear

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
      cheap_varCheck();
      min_testCheck();
      contractCheck();
      sia_doCheck();

      blopElement.nextElementSibling.classList.add("next_visible");
      setTimeout(function () {
        blopElement.nextElementSibling.classList.add("blop_animate");
      }, 1);

      if (button.classList.contains("last_button")) {
        var ss = button.getAttribute("numberBlop");
        // create_lesson(
        //   "6589fffff1b468de2af19b66",
        //   user_email,
        //   fragments[4].slice(0, 24)
        // );

        var parent = button.closest(".lesson_tab").getAttribute("tabs");

        if (ss > 47 && parent === "tab1") {
          availableLinks("fourteenthl_tab2");
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

      if (block.classList.contains("reg_calc")) {
        function reg_calc(blop) {
          var value = blop.querySelector("textarea").value;
          var cleanedString = value.replace(/[^0-9.]/g, "");
          var radioAnswer;
          if (cleanedString === "4.3") {
            radioAnswer = blop.nextElementSibling.querySelector(".one");
            radioAnswer.classList.add("answer_visible");
          } else {
            radioAnswer = blop.nextElementSibling.querySelector(".two");
            radioAnswer.classList.add("answer_visible");
          }
        }
        reg_calc(block);
      } else if (block.classList.contains("first_pay_calc")) {
        function first_pay_calc(blop) {
          var value = blop.querySelector("textarea").value;
          var cleanedString = value.replace(/[^0-9.]/g, "");
          var radioAnswer;
          if (cleanedString === "19.96" || cleanedString === "20") {
            radioAnswer = blop.nextElementSibling.querySelector(".one");
            radioAnswer.classList.add("answer_visible");
          } else {
            radioAnswer = blop.nextElementSibling.querySelector(".two");
            radioAnswer.classList.add("answer_visible");
          }
        }
        first_pay_calc(block);
      } else if (block.classList.contains("retention_calc")) {
        function retention_calc(blop) {
          var value = blop.querySelector("textarea").value;
          var cleanedString = value.replace(/[^0-9.]/g, "");
          var radioAnswer;
          if (
            cleanedString === "78.78" ||
            cleanedString === "78.8" ||
            cleanedString === "79"
          ) {
            radioAnswer = blop.nextElementSibling.querySelector(".one");
            radioAnswer.classList.add("answer_visible");
          } else {
            radioAnswer = blop.nextElementSibling.querySelector(".two");
            radioAnswer.classList.add("answer_visible");
          }
        }
        retention_calc(block);
      }

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

    if (buttonWithAttr.closest("#china_know")) {
      const china_knowTask = document.getElementById("china_know");
      var china_knowResult = checkboxPushInfo(china_knowTask);
    }
    if (buttonWithAttr.closest("#team_end")) {
      const team_endTask = document.getElementById("team_end");
      var team_endResult = radioPushInfo(team_endTask);
    }
    if (buttonWithAttr.closest("#local_con")) {
      const local_conTask = document.getElementById("local_con");
      var local_conResult = radioPushInfo(local_conTask);
    }
    if (buttonWithAttr.closest("#china_think")) {
      const china_thinkTask = document.getElementById("china_think");
      var china_thinkResult = textareaPushInfo(china_thinkTask);
    }
    if (buttonWithAttr.closest("#cheap_var")) {
      const cheap_varTask = document.getElementById("cheap_var");
      var cheap_varResult = checkboxPushInfo(cheap_varTask);
    }
    if (buttonWithAttr.closest("#domen")) {
      const domenTask = document.getElementById("domen");
      var domenResult = radioPushInfo(domenTask);
    }
    if (buttonWithAttr.closest("#soc")) {
      const socTask = document.getElementById("soc");
      var socResult = checkboxPushInfo(socTask);
    }
    if (buttonWithAttr.closest("#min_test")) {
      const min_testTask = document.getElementById("min_test");
      var min_testResult = checkboxPushInfo(min_testTask);
    }
    if (buttonWithAttr.closest("#blogers")) {
      const blogersTask = document.getElementById("blogers");
      var blogersResult = textareaPushInfo(blogersTask);
    }
    if (buttonWithAttr.closest("#success")) {
      const successTask = document.getElementById("success");
      var successResult = radioPushInfo(successTask);
    }
    if (buttonWithAttr.closest("#reg_calc")) {
      const reg_calcTask = document.getElementById("reg_calc");
      var reg_calcResult = textareaPushInfo(reg_calcTask);
    }
    if (buttonWithAttr.closest("#first_pay_calc")) {
      const first_pay_calcTask = document.getElementById("first_pay_calc");
      var first_pay_calcResult = textareaPushInfo(first_pay_calcTask);
    }
    if (buttonWithAttr.closest("#retention_calc")) {
      const retention_calcTask = document.getElementById("retention_calc");
      var retention_calcResult = textareaPushInfo(retention_calcTask);
    }
    if (buttonWithAttr.closest("#mashtab")) {
      const mashtabTask = document.getElementById("mashtab");
      var mashtabResult = radioPushInfo(mashtabTask);
    }
    if (buttonWithAttr.closest("#fail_do")) {
      const fail_doTask = document.getElementById("fail_do");
      var fail_doResult = radioPushInfo(fail_doTask);
    }

    // ------------------------------------------------------------

    if (buttonWithAttr.closest("#force_majeure")) {
      const force_majeureTask = document.getElementById("force_majeure");
      var force_majeureResult = radioPushInfo(force_majeureTask);
    }
    if (buttonWithAttr.closest("#visa")) {
      const visaTask = document.getElementById("visa");
      var visaResult = radioPushInfo(visaTask);
    }
    if (buttonWithAttr.closest("#visa_txt")) {
      const visa_txtTask = document.getElementById("visa_txt");
      var visa_txtResult = textareaPushInfo(visa_txtTask);
    }
    if (buttonWithAttr.closest("#office_txt")) {
      const office_txtTask = document.getElementById("office_txt");
      var office_txtResult = textareaPushInfo(office_txtTask);
    }
    if (buttonWithAttr.closest("#sia")) {
      const siaTask = document.getElementById("sia");
      var siaResult = radioPushInfo(siaTask);
    }
    if (buttonWithAttr.closest("#factors_priorities")) {
      const factors_prioritiesTask =
        document.getElementById("factors_priorities");
      var factors_prioritiesResult = dragPushInfo(factors_prioritiesTask);
    }
    if (buttonWithAttr.closest("#investigation_txt")) {
      const investigation_txtTask =
        document.getElementById("investigation_txt");
      var investigation_txtResult = textareaPushInfo(investigation_txtTask);
    }
    if (buttonWithAttr.closest("#contract")) {
      const contractTask = document.getElementById("contract");
      var contractResult = checkboxPushInfo(contractTask);
    }
    if (buttonWithAttr.closest("#sia_say")) {
      const sia_sayTask = document.getElementById("sia_say");
      var sia_sayResult = radioPushInfo(sia_sayTask);
    }
    if (buttonWithAttr.closest("#sia_do")) {
      const sia_doTask = document.getElementById("sia_do");
      var sia_doResult = checkboxPushInfo(sia_doTask);
    }
    if (buttonWithAttr.closest("#pay_half")) {
      const pay_halfTask = document.getElementById("pay_half");
      var pay_halfResult = radioPushInfo(pay_halfTask);
    }

    // ---------------

    function formSubmit(dataTab1, dataTab2) {
      var data = {
        collection_id: "6589fffff1b468de2af19b66",
        user_id: fragments[4].slice(0, 24),
        user_tab1: dataTab1,
        user_tab2: dataTab2,
      };
      console.log(data);

      //    fetch("https://uni380-ua-f2a8d215b9ab.herokuapp.com/lesson-info", {
      //      method: "POST",
      //      headers: {
      //        "Content-Type": "application/json",
      //      },
      //      body: JSON.stringify(data),
      //    });
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

      var china_knowBd;
      if (china_knowResult !== "" && china_knowResult !== undefined) {
        china_knowAnswear = china_knowResult;
        china_knowBd = "|/|" + china_knowAnswear;
      } else if (china_knowAnswear !== "" && china_knowAnswear !== undefined) {
        china_knowBd = "|/|" + china_knowAnswear;
      } else {
        china_knowBd = "";
      }
      var team_endBd;
      if (team_endResult !== "" && team_endResult !== undefined) {
        team_endAnswear = team_endResult;
        team_endBd = "|/|" + team_endAnswear;
      } else if (team_endAnswear !== "" && team_endAnswear !== undefined) {
        team_endBd = "|/|" + team_endAnswear;
      } else {
        team_endBd = "";
      }
      var local_conBd;
      if (local_conResult !== "" && local_conResult !== undefined) {
        local_conAnswear = local_conResult;
        local_conBd = "|/|" + local_conAnswear;
      } else if (local_conAnswear !== "" && local_conAnswear !== undefined) {
        local_conBd = "|/|" + local_conAnswear;
      } else {
        local_conBd = "";
      }
      var china_thinkBd;
      if (china_thinkResult !== "" && china_thinkResult !== undefined) {
        china_thinkAnswear = china_thinkResult;
        china_thinkBd = "|/|" + china_thinkAnswear;
      } else if (
        china_thinkAnswear !== "" &&
        china_thinkAnswear !== undefined
      ) {
        china_thinkBd = "|/|" + china_thinkAnswear;
      } else {
        china_thinkBd = "";
      }
      var cheap_varBd;
      if (cheap_varResult !== "" && cheap_varResult !== undefined) {
        cheap_varAnswear = cheap_varResult;
        cheap_varBd = "|/|" + cheap_varAnswear;
      } else if (cheap_varAnswear !== "" && cheap_varAnswear !== undefined) {
        cheap_varBd = "|/|" + cheap_varAnswear;
      } else {
        cheap_varBd = "";
      }
      var domenBd;
      if (domenResult !== "" && domenResult !== undefined) {
        domenAnswear = domenResult;
        domenBd = "|/|" + domenAnswear;
      } else if (domenAnswear !== "" && domenAnswear !== undefined) {
        domenBd = "|/|" + domenAnswear;
      } else {
        domenBd = "";
      }
      var socBd;
      if (socResult !== "" && socResult !== undefined) {
        socAnswear = socResult;
        socBd = "|/|" + socAnswear;
      } else if (socAnswear !== "" && socAnswear !== undefined) {
        socBd = "|/|" + socAnswear;
      } else {
        socBd = "";
      }
      var min_testBd;
      if (min_testResult !== "" && min_testResult !== undefined) {
        min_testAnswear = min_testResult;
        min_testBd = "|/|" + min_testAnswear;
      } else if (min_testAnswear !== "" && min_testAnswear !== undefined) {
        min_testBd = "|/|" + min_testAnswear;
      } else {
        min_testBd = "";
      }
      var blogersBd;
      if (blogersResult !== "" && blogersResult !== undefined) {
        blogersAnswear = blogersResult;
        blogersBd = "|/|" + blogersAnswear;
      } else if (blogersAnswear !== "" && blogersAnswear !== undefined) {
        blogersBd = "|/|" + blogersAnswear;
      } else {
        blogersBd = "";
      }
      var reg_calcBd;
      if (reg_calcResult !== "" && reg_calcResult !== undefined) {
        reg_calcAnswear = reg_calcResult;
        reg_calcBd = "|/|" + reg_calcAnswear;
      } else if (reg_calcAnswear !== "" && reg_calcAnswear !== undefined) {
        reg_calcBd = "|/|" + reg_calcAnswear;
      } else {
        reg_calcBd = "";
      }
      var successBd;
      if (successResult !== "" && successResult !== undefined) {
        successAnswear = successResult;
        successBd = "|/|" + successAnswear;
      } else if (successAnswear !== "" && successAnswear !== undefined) {
        successBd = "|/|" + successAnswear;
      } else {
        successBd = "";
      }
      var first_pay_calcBd;
      if (first_pay_calcResult !== "" && first_pay_calcResult !== undefined) {
        first_pay_calcAnswear = first_pay_calcResult;
        first_pay_calcBd = "|/|" + first_pay_calcAnswear;
      } else if (
        first_pay_calcAnswear !== "" &&
        first_pay_calcAnswear !== undefined
      ) {
        first_pay_calcBd = "|/|" + first_pay_calcAnswear;
      } else {
        first_pay_calcBd = "";
      }
      var retention_calcBd;
      if (retention_calcResult !== "" && retention_calcResult !== undefined) {
        retention_calcAnswear = retention_calcResult;
        retention_calcBd = "|/|" + retention_calcAnswear;
      } else if (
        retention_calcAnswear !== "" &&
        retention_calcAnswear !== undefined
      ) {
        retention_calcBd = "|/|" + retention_calcAnswear;
      } else {
        retention_calcBd = "";
      }
      var mashtabBd;
      if (mashtabResult !== "" && mashtabResult !== undefined) {
        mashtabAnswear = mashtabResult;
        mashtabBd = "|/|" + mashtabAnswear;
      } else if (mashtabAnswear !== "" && mashtabAnswear !== undefined) {
        mashtabBd = "|/|" + mashtabAnswear;
      } else {
        mashtabBd = "";
      }
      var fail_doBd;
      if (fail_doResult !== "" && fail_doResult !== undefined) {
        fail_doAnswear = fail_doResult;
        fail_doBd = "|/|" + fail_doAnswear;
      } else if (fail_doAnswear !== "" && fail_doAnswear !== undefined) {
        fail_doBd = "|/|" + fail_doAnswear;
      } else {
        fail_doBd = "";
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

      // ----------

      var force_majeureBd;
      if (force_majeureResult !== "" && force_majeureResult !== undefined) {
        force_majeureAnswear = force_majeureResult;
        force_majeureBd = "|/|" + force_majeureAnswear;
      } else if (
        force_majeureAnswear !== "" &&
        force_majeureAnswear !== undefined
      ) {
        force_majeureBd = "|/|" + force_majeureAnswear;
      } else {
        force_majeureBd = "";
      }
      var visaBd;
      if (visaResult !== "" && visaResult !== undefined) {
        visaAnswear = visaResult;
        visaBd = "|/|" + visaAnswear;
      } else if (visaAnswear !== "" && visaAnswear !== undefined) {
        visaBd = "|/|" + visaAnswear;
      } else {
        visaBd = "";
      }
      var visa_txtBd;
      if (visa_txtResult !== "" && visa_txtResult !== undefined) {
        visa_txtAnswear = visa_txtResult;
        visa_txtBd = "|/|" + visa_txtAnswear;
      } else if (visa_txtAnswear !== "" && visa_txtAnswear !== undefined) {
        visa_txtBd = "|/|" + visa_txtAnswear;
      } else {
        visa_txtBd = "";
      }
      var office_txtBd;
      if (office_txtResult !== "" && office_txtResult !== undefined) {
        office_txtAnswear = office_txtResult;
        office_txtBd = "|/|" + office_txtAnswear;
      } else if (office_txtAnswear !== "" && office_txtAnswear !== undefined) {
        office_txtBd = "|/|" + office_txtAnswear;
      } else {
        office_txtBd = "";
      }
      var siaBd;
      if (siaResult !== "" && siaResult !== undefined) {
        siaAnswear = siaResult;
        siaBd = "|/|" + siaAnswear;
      } else if (siaAnswear !== "" && siaAnswear !== undefined) {
        siaBd = "|/|" + siaAnswear;
      } else {
        siaBd = "";
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
      var investigation_txtBd;
      if (
        investigation_txtResult !== "" &&
        investigation_txtResult !== undefined
      ) {
        investigation_txtAnswear = investigation_txtResult;
        investigation_txtBd = "|/|" + investigation_txtAnswear;
      } else if (
        investigation_txtAnswear !== "" &&
        investigation_txtAnswear !== undefined
      ) {
        investigation_txtBd = "|/|" + investigation_txtAnswear;
      } else {
        investigation_txtBd = "";
      }
      var contractBd;
      if (contractResult !== "" && contractResult !== undefined) {
        contractAnswear = contractResult;
        contractBd = "|/|" + contractAnswear;
      } else if (contractAnswear !== "" && contractAnswear !== undefined) {
        contractBd = "|/|" + contractAnswear;
      } else {
        contractBd = "";
      }
      var sia_sayBd;
      if (sia_sayResult !== "" && sia_sayResult !== undefined) {
        sia_sayAnswear = sia_sayResult;
        sia_sayBd = "|/|" + sia_sayAnswear;
      } else if (sia_sayAnswear !== "" && sia_sayAnswear !== undefined) {
        sia_sayBd = "|/|" + sia_sayAnswear;
      } else {
        sia_sayBd = "";
      }
      var sia_doBd;
      if (sia_doResult !== "" && sia_doResult !== undefined) {
        sia_doAnswear = sia_doResult;
        sia_doBd = "|/|" + sia_doAnswear;
      } else if (sia_doAnswear !== "" && sia_doAnswear !== undefined) {
        sia_doBd = "|/|" + sia_doAnswear;
      } else {
        sia_doBd = "";
      }
      var pay_halfBd;
      if (pay_halfResult !== "" && pay_halfResult !== undefined) {
        pay_halfAnswear = pay_halfResult;
        pay_halfBd = "|/|" + pay_halfAnswear;
      } else if (pay_halfAnswear !== "" && pay_halfAnswear !== undefined) {
        pay_halfBd = "|/|" + pay_halfAnswear;
      } else {
        pay_halfBd = "";
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
          china_knowBd +
          team_endBd +
          local_conBd +
          china_thinkBd +
          cheap_varBd +
          domenBd +
          socBd +
          min_testBd +
          blogersBd +
          successBd +
          reg_calcBd +
          first_pay_calcBd +
          retention_calcBd +
          mashtabBd +
          fail_doBd +
          starTab1Bd;
      } else if (tab === "tab2") {
        var dataTab2 =
          countProgressTab2 +
          force_majeureBd +
          visaBd +
          visa_txtBd +
          office_txtBd +
          siaBd +
          factors_prioritiesBd +
          investigation_txtBd +
          contractBd +
          sia_sayBd +
          sia_doBd +
          pay_halfBd +
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
          collection_id: "6589fffff1b468de2af19b66",
          user_id: fragments[4].slice(0, 24),
          tab1theory: tab1theoryVal,
        };
      } else if (tabs === "tab2") {
        data2 = {
          collection_id: "6589fffff1b468de2af19b66",
          user_id: fragments[4].slice(0, 24),
          tab2theory: tab2theoryVal,
        };
      }
      console.log(data2);
      //    fetch("https://uni380-ua-f2a8d215b9ab.herokuapp.com/lesson-info", {
      //      method: "POST",
      //      headers: {
      //        "Content-Type": "application/json",
      //      },
      //      body: JSON.stringify(data2),
      //    });
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
