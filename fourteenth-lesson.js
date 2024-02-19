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
// var pestleAnswear = tab2BDVal[1];
// var decisionAnswear = tab2BDVal[2];
// var decision_twoAnswear = tab2BDVal[3];
// var factors_priorities_twoAnswear = tab2BDVal[4];
// var legal_factorsAnswear = tab2BDVal[5];
// var teamAnswear = tab2BDVal[6];
// var team_txtAnswear = tab2BDVal[7];
// var structureAnswear = tab2BDVal[8];
// var signalAnswear = tab2BDVal[9];
// var china_txtAnswear = tab2BDVal[10];
// var believeAnswear = tab2BDVal[11];
// var china_risks_txtAnswear = tab2BDVal[12];
// var starAnswearTab2 = tab2BDVal[13];

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

// function create_lesson(collection_id, user_email, user_id) {
//   var data = {
//     collection_id: collection_id,
//     user_email: user_email,
//     user_id: user_id,
//   };
//   // console.log(data);
//   fetch("https://uni380-ua-f2a8d215b9ab.herokuapp.com/create-lesson", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   })
//     .then((response) => response.json())
//     .then((foundUser) => {
//       console.log(foundUser);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }
// create_lesson(
//   "6589fffff1b468de2af19b66",
//   user_email,
//   fragments[4].slice(0, 24)
// );

// if (countProgressTab1 > 42) {
//   availableLinks("thirteenthl_tab2");
//   activetab("thirteenthl_tab2", "tab2");
// }

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

// min_test

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
  var yesElement = cheap_varInfo.nextElementSibling.querySelector(".yes");

  if (
    !cheap_varThird.checked &&
    !cheap_varFourth.checked &&
    (cheap_varFirst.checked || cheap_varSecond.checked)
  ) {
    hideElements([yesElement]);
    showElement(noElement);
  } else {
    hideElements([noElement]);
    showElement(yesElement);
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
    checkboxGetInfo(successTask, successAnswear);
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

  // china_knowAnswear
  // team_endAnswear
  // local_conAnswear
  // china_thinkAnswear
  // cheap_varAnswear
  // domenAnswear
  // socAnswear
  // min_testAnswear
  // blogersAnswear
  // successAnswear
  // reg_calcAnswear
  // first_pay_calcAnswear
  // retention_calcAnswear
  // mashtabAnswear
  // fail_doAnswear
  // starAnswearTab1

  //   if (
  //     factors_prioritiesAnswear !== "" &&
  //     factors_prioritiesAnswear !== undefined
  //   ) {
  //     const factors_prioritiesTask =
  //       document.getElementById("factors_priorities");
  //     dragGetInfo(factors_prioritiesTask, factors_prioritiesAnswear);
  //   }

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

  //   if (pestleAnswear !== "" && pestleAnswear !== undefined) {
  //     const pestleTask = document.getElementById("pestle");
  //     radioGetInfo(pestleTask, pestleAnswear);
  //   }
  //   if (decisionAnswear !== "" && decisionAnswear !== undefined) {
  //     const decisionTask = document.getElementById("decision");
  //     radioGetInfo(decisionTask, decisionAnswear);
  //   }
  //   if (decision_twoAnswear !== "" && decision_twoAnswear !== undefined) {
  //     const decision_twoTask = document.getElementById("decision_two");
  //     radioGetInfo(decision_twoTask, decision_twoAnswear);
  //   }
  //   if (
  //     factors_priorities_twoAnswear !== "" &&
  //     factors_priorities_twoAnswear !== undefined
  //   ) {
  //     const factors_priorities_twoTask = document.getElementById(
  //       "factors_priorities_two"
  //     );
  //     dragGetInfo(factors_priorities_twoTask, factors_priorities_twoAnswear);
  //   }
  //   if (legal_factorsAnswear !== "" && legal_factorsAnswear !== undefined) {
  //     const legal_factorsTask = document.getElementById("legal_factors");
  //     radioGetInfo(legal_factorsTask, legal_factorsAnswear);
  //   }
  //   if (teamAnswear !== "" && teamAnswear !== undefined) {
  //     const teamTask = document.getElementById("team");
  //     radioGetInfo(teamTask, teamAnswear);
  //   }
  //   if (team_txtAnswear !== "" && team_txtAnswear !== undefined) {
  //     const team_txtTask = document.getElementById("team_txt");
  //     textareaGethInfo(team_txtTask, team_txtAnswear);
  //   }
  //   if (structureAnswear !== "" && structureAnswear !== undefined) {
  //     const structureTask = document.getElementById("structure");
  //     radioGetInfo(structureTask, structureAnswear);
  //   }
  //   if (signalAnswear !== "" && signalAnswear !== undefined) {
  //     const signalTask = document.getElementById("signal");
  //     radioGetInfo(signalTask, signalAnswear);
  //   }
  //   if (china_txtAnswear !== "" && china_txtAnswear !== undefined) {
  //     const china_txtTask = document.getElementById("china_txt");
  //     textareaGethInfo(china_txtTask, china_txtAnswear);
  //   }
  //   if (believeAnswear !== "" && believeAnswear !== undefined) {
  //     const believeTask = document.getElementById("believe");
  //     radioGetInfo(believeTask, believeAnswear);
  //   }
  //   if (china_risks_txtAnswear !== "" && china_risks_txtAnswear !== undefined) {
  //     const china_risks_txtTask = document.getElementById("china_risks_txt");
  //     textareaGethInfo(china_risks_txtTask, china_risks_txtAnswear);
  //   }

  //   if (starAnswearTab2 !== "" && starAnswearTab2 !== undefined) {
  //     starGetInfo(
  //       document.querySelector('div[tabs="tab2"] .star_blop'),
  //       starAnswearTab2
  //     );
  //   }

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

    // china_knowResult
    // team_endResult
    // local_conResult
    // china_thinkResult
    // cheap_varResult
    // domenResult
    // socResult
    // min_testResult
    // successResult
    // first_pay_calcResult
    // retention_calcResult
    // mashtabResult
    // fail_doResult

    // if (buttonWithAttr.closest("#language")) {
    //   const languageTask = document.getElementById("language");
    //   var languageResult = radioPushInfo(languageTask);
    // }
    // if (buttonWithAttr.closest("#answer_cpl")) {
    //   const answer_cplTask = document.getElementById("answer_cpl");
    //   var answer_cplResult = radioPushInfo(answer_cplTask);
    // }
    // if (buttonWithAttr.closest("#criterion")) {
    //   const criterionTask = document.getElementById("criterion");
    //   var criterionResult = radioPushInfo(criterionTask);
    // }
    // if (buttonWithAttr.closest("#criterion_choose")) {
    //   const criterion_chooseTask = document.getElementById("criterion_choose");
    //   var criterion_chooseResult = checkboxPushInfo(criterion_chooseTask);
    // }
    // if (buttonWithAttr.closest("#main_criterion")) {
    //   const main_criterionTask = document.getElementById("main_criterion");
    //   var main_criterionResult = radioPushInfo(main_criterionTask);
    // }
    // if (buttonWithAttr.closest("#factor")) {
    //   const factorTask = document.getElementById("factor");
    //   var factorResult = radioPushInfo(factorTask);
    // }
    // if (buttonWithAttr.closest("#proposal")) {
    //   const proposalTask = document.getElementById("proposal");
    //   var proposalResult = radioPushInfo(proposalTask);
    // }

    // if (buttonWithAttr.closest("#conclusions")) {
    //   const conclusionsTask = document.getElementById("conclusions");
    //   var conclusionsResult = radioPushInfo(conclusionsTask);
    // }
    // if (buttonWithAttr.closest("#country")) {
    //   const countryTask = document.getElementById("country");
    //   var countryResult = checkboxPushInfo(countryTask);
    // }
    // if (buttonWithAttr.closest("#country_choose")) {
    //   const country_chooseTask = document.getElementById("country_choose");
    //   var country_chooseResult = radioPushInfo(country_chooseTask);
    // }
    // if (buttonWithAttr.closest("#factors_priorities")) {
    //   const factors_prioritiesTask =
    //     document.getElementById("factors_priorities");
    //   var factors_prioritiesResult = dragPushInfo(factors_prioritiesTask);
    // }
    // if (buttonWithAttr.closest("#points_txt")) {
    //   const points_txtTask = document.getElementById("points_txt");
    //   var points_txtResult = textareaPushInfo(points_txtTask);
    // }
    // if (buttonWithAttr.closest("#country_points")) {
    //   const country_pointsTask = document.getElementById("country_points");
    //   var country_pointsResult = radioPushInfo(country_pointsTask);
    // }
    // if (buttonWithAttr.closest("#research_txt")) {
    //   const research_txtTask = document.getElementById("research_txt");
    //   var research_txtResult = textareaPushInfo(research_txtTask);
    // }

    // ---------------

    // if (buttonWithAttr.closest("#pestle")) {
    //   const pestleTask = document.getElementById("pestle");
    //   var pestleResult = radioPushInfo(pestleTask);
    // }
    // if (buttonWithAttr.closest("#decision")) {
    //   const decisionTask = document.getElementById("decision");
    //   var decisionResult = radioPushInfo(decisionTask);
    // }
    // if (buttonWithAttr.closest("#decision_two")) {
    //   const decision_twoTask = document.getElementById("decision_two");
    //   var decision_twoResult = radioPushInfo(decision_twoTask);
    // }
    // if (buttonWithAttr.closest("#factors_priorities_two")) {
    //   const factors_priorities_twoTask = document.getElementById(
    //     "factors_priorities_two"
    //   );
    //   var factors_priorities_twoResult = dragPushInfo(
    //     factors_priorities_twoTask
    //   );
    // }
    // if (buttonWithAttr.closest("#legal_factors")) {
    //   const legal_factorsTask = document.getElementById("legal_factors");
    //   var legal_factorsResult = radioPushInfo(legal_factorsTask);
    // }
    // if (buttonWithAttr.closest("#team")) {
    //   const teamTask = document.getElementById("team");
    //   var teamResult = radioPushInfo(teamTask);
    // }
    // if (buttonWithAttr.closest("#team_txt")) {
    //   const team_txtTask = document.getElementById("team_txt");
    //   var team_txtResult = textareaPushInfo(team_txtTask);
    // }
    // if (buttonWithAttr.closest("#structure")) {
    //   const structureTask = document.getElementById("structure");
    //   var structureResult = radioPushInfo(structureTask);
    // }
    // if (buttonWithAttr.closest("#signal")) {
    //   const signalTask = document.getElementById("signal");
    //   var signalResult = radioPushInfo(signalTask);
    // }
    // if (buttonWithAttr.closest("#china_txt")) {
    //   const china_txtTask = document.getElementById("china_txt");
    //   var china_txtResult = textareaPushInfo(china_txtTask);
    // }
    // if (buttonWithAttr.closest("#believe")) {
    //   const believeTask = document.getElementById("believe");
    //   var believeResult = radioPushInfo(believeTask);
    // }
    // if (buttonWithAttr.closest("#china_risks_txt")) {
    //   const china_risks_txtTask = document.getElementById("china_risks_txt");
    //   var china_risks_txtResult = textareaPushInfo(china_risks_txtTask);
    // }

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

      // china_knowBd
      // team_endBd
      // local_conBd
      // china_thinkBd
      // cheap_varBd
      // domenBd
      // socBd
      // min_testBd
      // successBd
      // first_pay_calcBd
      // retention_calcBd
      // mashtabBd
      // fail_doBd

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

      //      var starTab2Bd;
      //      if (star2 !== "" && star2 !== undefined) {
      //        starAnswearTab2 = star2;
      //        starTab2Bd = "|/|" + starAnswearTab2;
      //      } else if (starAnswearTab2 !== "" && starAnswearTab2 !== undefined) {
      //        starTab2Bd = "|/|" + starAnswearTab2;
      //      } else {
      //        starTab2Bd = "";
      //      }

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
          successBd +
          first_pay_calcBd +
          retention_calcBd +
          mashtabBd +
          fail_doBd +
          starTab1Bd;
      } else if (tab === "tab2") {
        var dataTab2 = countProgressTab2;
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
