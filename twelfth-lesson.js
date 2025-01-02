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
const tab3BD = document.getElementById("tab3BD");
var tab3BDVal = tab3BD.textContent;
tab3BDVal = tab3BDVal.split("|/|");

var countProgressTab1 = tab1BDVal[0];
var appAnswer = tab1BDVal[1];
var analysis_systemAnswer = tab1BDVal[2];
var problemAnswer = tab1BDVal[3];
var automation_txtAnswer = tab1BDVal[4];
var data_lakeAnswer = tab1BDVal[5];
var data_typeAnswer = tab1BDVal[6];
var cannibalizationAnswer = tab1BDVal[7];
var priorityAnswer = tab1BDVal[8];
var organic_issueAnswer = tab1BDVal[9];
var advertising_txtAnswer = tab1BDVal[10];
var meet_addAnswer = tab1BDVal[11];
var data_verificationAnswer = tab1BDVal[12];
var duplicated_dataAnswer = tab1BDVal[13];
var sqlAnswer = tab1BDVal[14];
var analyze_extractAnswer = tab1BDVal[15];
var calculationsAnswer = tab1BDVal[16];
var conclusion_cycleAnswer = tab1BDVal[17];
var starAnswearTab1 = tab1BDVal[18];

var data_verificationResult;
var duplicated_dataResult;
var sqlResult;
var analyze_extractResult;
var calculationsResult;
var conclusion_cycleResult;

var crisis_annAnswer;
var crisis_ann_twoAnswer;
var crisis_ann_three_var1Answer;
var crisis_ann_three_var2Answer;
var crisis_ann_fourAnswer;

var crisis_mykolaAnswer;
var crisis_mykola_twoAnswer;
var crisis_mykola_threeAnswer;
var crisis_mykola_fourAnswer;
var crisis_mykola_fiveAnswer;
var crisis_mykola_fiveResult;

var countProgressTab2 = tab2BDVal[0];
var nat_talkAnswer = tab2BDVal[1];
var photoAnswer = tab2BDVal[2];
var photo_reactionAnswer = tab2BDVal[3];
var crisisFullAnswer = tab2BDVal[4];
var starAnswearTab2 = tab2BDVal[5];

var crisisAnswer;
var embedProgress1;
var embedProgress2;
var crisis_ann_fourResult;
if (crisisFullAnswer !== "" && crisisFullAnswer !== undefined) {
  var crisisSplit = crisisFullAnswer.split("/");
  var crisisAnswer = crisisSplit[0];

  if (crisisAnswer === "one") {
    if (crisisSplit.length > 0) {
      embedProgress1 = crisisSplit[1];
    }
    if (crisisSplit.length > 1) {
      crisis_annAnswer = crisisSplit[2];
    }
    if (crisisSplit.length > 2) {
      crisis_ann_twoAnswer = crisisSplit[3];
    }
    if (crisisSplit.length > 3) {
      crisis_ann_three_var1Answer = crisisSplit[4];
    }
    if (crisisSplit.length > 4) {
      crisis_ann_three_var2Answer = crisisSplit[5];
    }
    if (crisisSplit.length > 5) {
      crisis_ann_fourAnswer = crisisSplit[6];
    }
    //
    if (crisisSplit.length > 6) {
      embedProgress2 = crisisSplit[7];
    }
    if (crisisSplit.length > 7) {
      crisis_mykolaAnswer = crisisSplit[8];
    }
    if (crisisSplit.length > 8) {
      crisis_mykola_twoAnswer = crisisSplit[9];
    }
    if (crisisSplit.length > 9) {
      crisis_mykola_threeAnswer = crisisSplit[10];
    }
    if (crisisSplit.length > 10) {
      crisis_mykola_fourAnswer = crisisSplit[11];
    }
    if (crisisSplit.length > 11) {
      crisis_mykola_fiveAnswer = crisisSplit[12];
    }
  } else if (crisisAnswer === "two") {
    if (crisisSplit.length > 0) {
      embedProgress2 = crisisSplit[1];
    }
    if (crisisSplit.length > 1) {
      crisis_mykolaAnswer = crisisSplit[2];
    }
    if (crisisSplit.length > 2) {
      crisis_mykola_twoAnswer = crisisSplit[3];
    }
    if (crisisSplit.length > 3) {
      crisis_mykola_threeAnswer = crisisSplit[4];
    }
    if (crisisSplit.length > 4) {
      crisis_mykola_fourAnswer = crisisSplit[5];
    }
    if (crisisSplit.length > 5) {
      crisis_mykola_fiveAnswer = crisisSplit[6];
    }
    //
    if (crisisSplit.length > 6) {
      embedProgress1 = crisisSplit[7];
    }
    if (crisisSplit.length > 7) {
      crisis_annAnswer = crisisSplit[8];
    }
    if (crisisSplit.length > 8) {
      crisis_ann_twoAnswer = crisisSplit[9];
    }
    if (crisisSplit.length > 9) {
      crisis_ann_three_var1Answer = crisisSplit[10];
    }
    if (crisisSplit.length > 10) {
      crisis_ann_three_var2Answer = crisisSplit[11];
    }
    if (crisisSplit.length > 11) {
      crisis_ann_fourAnswer = crisisSplit[12];
    }
  }
}

var countProgressTab3 = tab3BDVal[0];
var metrics_txtAnswer = tab3BDVal[1];
var ltvAnswer = tab3BDVal[2];
var org_analisis_txtAnswer = tab3BDVal[3];
var churnAnswer = tab3BDVal[4];
var leaveAnswer = tab3BDVal[5];
var retentionAnswer = tab3BDVal[6];
var retention_txtAnswer = tab3BDVal[7];
var starAnswearTab3 = tab3BDVal[8];

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
create_lesson(
  "656c7c06998532066a3e134d",
  user_email,
  fragments[4].slice(0, 24)
);

if (countProgressTab1 > 43) {
  availableLinks("twelfthl_tab2");
  activetab("twelfthl_tab2", "tab2");
}
if (countProgressTab2 > 12) {
  availableLinks("twelfthl_tab3");
  activetab("twelfthl_tab3", "tab3");
}

function analystsCheck(value) {
  var analysts = document.querySelectorAll("[analysts]");
  if (value === "one") {
    // document.querySelector("[last_del]").remove();
    var lastDelRemove = document.querySelector("[last_del]");
    if (lastDelRemove) {
      lastDelRemove.remove();
    }
  } else if (value === "two") {
    analysts.forEach((element) => {
      element.remove();
    });
    data_verificationResult = "empty";
    duplicated_dataResult = "empty";
    sqlResult = "empty";
    analyze_extractResult = "empty";
    calculationsResult = "empty";
    conclusion_cycleResult = "empty";
  }
}

function delCheck(value, attrN) {
  const elementsToRemove = document.querySelectorAll("[" + attrN + "]");
  elementsToRemove.forEach((element) => {
    if (element.getAttribute(attrN) !== value) {
      element.remove();
    }
  });
}

function investigationEmbed(value, element, attrBlock) {
  var divToMove = document.querySelector("[" + attrBlock + '="' + value + '"]');
  element.parentNode.insertBefore(divToMove, element.nextSibling);
  var target = element.id;
  divToMove.setAttribute("target", target);
  divToMove.querySelector("[first_in_var]").classList.add("next_visible");
  setTimeout(function () {
    divToMove.querySelector("[first_in_var]").classList.add("blop_animate");
  }, 1);
}
function embedProgress(element, embedProgress, attrBlock, blockClosest) {
  if (
    embedProgress > 0 &&
    embedProgress !== "" &&
    embedProgress !== undefined
  ) {
    var targetButton = document.querySelector(
      "div[" +
        attrBlock +
        '="' +
        element +
        '"] [embedProgress="' +
        embedProgress +
        '"]'
    );

    var targetElement = targetButton.closest('[blop="main"]');
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

    if (targetElement.hasAttribute("last_in_var")) {
      var embedLastBlop = targetElement.closest("." + blockClosest);
      embedLastBlop.nextElementSibling.classList.add("next_visible");
      setTimeout(function () {
        embedLastBlop.nextElementSibling.classList.add("blop_animate");
      }, 1);
    } else {
      // console.log(targetElement);
      if (
        targetElement.hasAttribute("stop_progress") &&
        crisis_mykola_fourAnswer === "six"
      ) {
      } else {
        var nextTargetElement = targetElement.nextElementSibling;
        nextTargetElement.classList.add("next_visible", "blop_animate");
      }
    }
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }
}

function radioCheck(blopElement) {
  var radio = blopElement.querySelector('input[type="radio"]:checked');
  if (radio) {
    var value = radio.value;
    if (blopElement.id === "meet_add") {
      if (meet_addAnswer === "" || meet_addAnswer === undefined) {
        analystsCheck(value);
      }
    } else if (blopElement.id === "nat_talk") {
      delCheck(value, "nat_talk");
    } else if (blopElement.id === "photo") {
      delCheck(value, "photo");
    } else if (blopElement.id === "photo_reaction") {
      delCheck(value, "photo_reaction");
    } else if (blopElement.id === "crisis_ann") {
      delCheck(value, "crisis_ann");
    } else if (blopElement.id === "crisis_ann_two") {
      delCheck(value, "crisis_ann_two");
    } else if (blopElement.id === "crisis_ann_four") {
      delCheck(value, "crisis_ann_four");
    } else if (blopElement.id === "crisis_mykola") {
      delCheck(value, "crisis_mykola");
    } else if (blopElement.id === "crisis_mykola_two") {
      delCheck(value, "crisis_mykola_two");
    } else if (blopElement.id === "crisis_mykola_three") {
      delCheck(value, "crisis_mykola_three");
    } else if (blopElement.id === "crisis_mykola_five") {
      delCheck(value, "crisis_mykola_five");
    } else if (blopElement.id === "crisis_ann_three_var1") {
      crisis_ann_three_var2Answer = "empty";
      delCheck(value, "crisis_ann_three");
      if (value === "one") {
        document.getElementById("concl_mb").setAttribute("last_in_var", "stop");
        crisis_ann_fourResult = "empty";
      }
      // }
    } else if (blopElement.id === "crisis_mykola_four") {
      if (value !== "five" && value !== "six") {
        crisis_mykola_fiveResult = "empty";
        document
          .getElementById("mykola_last_mb")
          .setAttribute("last_in_var", "stop");
        delCheck(value, "crisis_mykola_four");
      } else if (value === "five") {
        document.getElementById("mykola_last_mb").remove();
      } else if (value === "six") {
        delCheck(value, "crisis_mykola_four");
        document.getElementById("mykola_last_mb").remove();
        crisis_mykola_fiveResult = "empty";
        var crisisSEl = document.getElementById("crisis_second");
        investigationEmbed("one", crisisSEl, "variant");
      }
    } else if (blopElement.id === "crisis_ann_three_var2") {
      crisis_ann_three_var1Answer = "empty";
      if (value === "one") {
        delCheck("two", "crisis_ann_three");
      } else if (value === "two") {
        delCheck("three", "crisis_ann_three");
        document.getElementById("concl_mb").setAttribute("last_in_var", "stop");
        crisis_ann_fourResult = "empty";
      }
    } else if (blopElement.id === "crisis") {
      investigationEmbed(value, blopElement, "variant");
    } else {
      var radioAnswer = blopElement.nextElementSibling.querySelector(
        "." + value
      );
      radioAnswer.classList.add("answer_visible");
    }
  }
}
function appCheck() {
  var appInfo = document.getElementById("app");
  var appForm = appInfo.querySelector("form");
  var appElements = appForm.querySelectorAll(".check_input");

  var appFirst = appElements[0].querySelector('input[type="checkbox"]');
  var appSecond = appElements[1].querySelector('input[type="checkbox"]');
  var appThird = appElements[2].querySelector('input[type="checkbox"]');
  var appFourth = appElements[3].querySelector('input[type="checkbox"]');
  var appFiveth = appElements[4].querySelector('input[type="checkbox"]');

  var noElement = appInfo.nextElementSibling.querySelector(".no");
  var maybeElement = appInfo.nextElementSibling.querySelector(".maybe");
  var yesElement = appInfo.nextElementSibling.querySelector(".yes");

  if (
    !appFirst.checked &&
    !appThird.checked &&
    (appSecond.checked || appFourth.checked || appFiveth.checked)
  ) {
    hideElements([yesElement, maybeElement]);
    showElement(noElement);
  } else if (
    appFirst.checked &&
    appThird.checked &&
    !appSecond.checked &&
    !appFourth.checked &&
    !appFiveth.checked
  ) {
    hideElements([noElement, maybeElement]);
    showElement(yesElement);
  } else {
    hideElements([noElement, yesElement]);
    showElement(maybeElement);
  }
}

function problemCheck() {
  var problemInfo = document.getElementById("problem");
  var problemForm = problemInfo.querySelector("form");
  var problemElements = problemForm.querySelectorAll(".check_input");

  var problemFirst = problemElements[0].querySelector('input[type="checkbox"]');
  var problemSecond = problemElements[1].querySelector(
    'input[type="checkbox"]'
  );
  var problemThird = problemElements[2].querySelector('input[type="checkbox"]');
  var problemFourth = problemElements[3].querySelector(
    'input[type="checkbox"]'
  );
  var problemFiveth = problemElements[4].querySelector(
    'input[type="checkbox"]'
  );
  var problemSixth = problemElements[5].querySelector('input[type="checkbox"]');

  var noElement = problemInfo.nextElementSibling.querySelector(".no");
  var maybeElement = problemInfo.nextElementSibling.querySelector(".maybe");
  var yesElement = problemInfo.nextElementSibling.querySelector(".yes");

  if (
    problemFirst.checked &&
    problemThird.checked &&
    problemFourth.checked &&
    !problemSecond.checked &&
    !problemFiveth.checked &&
    !problemSixth.checked
  ) {
    hideElements([noElement, maybeElement]);
    showElement(yesElement);
  } else if (
    !problemFirst.checked &&
    !problemThird.checked &&
    !problemFourth.checked &&
    (problemSecond.checked || problemFiveth.checked || problemSixth.checked)
  ) {
    hideElements([yesElement, maybeElement]);
    showElement(noElement);
  } else {
    hideElements([noElement, yesElement]);
    showElement(maybeElement);
  }
}
function data_typeCheck() {
  var data_typeInfo = document.getElementById("data_type");
  var data_typeForm = data_typeInfo.querySelector("form");
  var data_typeElements = data_typeForm.querySelectorAll(".check_input");

  var data_typeFirst = data_typeElements[0].querySelector(
    'input[type="checkbox"]'
  );
  var data_typeSecond = data_typeElements[1].querySelector(
    'input[type="checkbox"]'
  );
  var data_typeThird = data_typeElements[2].querySelector(
    'input[type="checkbox"]'
  );
  var data_typeFourth = data_typeElements[3].querySelector(
    'input[type="checkbox"]'
  );
  var data_typeFiveth = data_typeElements[4].querySelector(
    'input[type="checkbox"]'
  );
  var data_typeSixth = data_typeElements[5].querySelector(
    'input[type="checkbox"]'
  );

  var noElement = data_typeInfo.nextElementSibling.querySelector(".no");
  var maybeElement = data_typeInfo.nextElementSibling.querySelector(".maybe");
  var yesElement = data_typeInfo.nextElementSibling.querySelector(".yes");

  if (
    data_typeSecond.checked &&
    data_typeFourth.checked &&
    !data_typeFirst.checked &&
    !data_typeThird.checked &&
    !data_typeFiveth.checked &&
    !data_typeSixth.checked
  ) {
    hideElements([noElement, maybeElement]);
    showElement(yesElement);
  } else if (
    (data_typeFirst.checked ||
      data_typeThird.checked ||
      data_typeFiveth.checked ||
      data_typeSixth.checked) &&
    !data_typeSecond.checked &&
    !data_typeFourth.checked
  ) {
    hideElements([yesElement, maybeElement]);
    showElement(noElement);
  } else {
    hideElements([noElement, yesElement]);
    showElement(maybeElement);
  }
}
// Функція, яка приховує всі передані елементи
function hideElements(elements) {
  elements.forEach(function (element) {
    element.classList.add("hide");
  });
}

// Функція, яка показує переданий елемент
function showElement(element) {
  element.classList.remove("hide");
}

function tab1Progress(numberBlop) {
  analystsCheck(meet_addAnswer);
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
    if (block && block.id === "app") {
      appCheck();
    } else if (block && block.id === "problem") {
      problemCheck();
    } else if (block && block.id === "data_type") {
      data_typeCheck();
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
    if (value !== "empty") {
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
  }
  function textareaGethInfo(block, value) {
    if (value !== "empty") {
      var textarea = block.querySelector("textarea");
      textarea.value = value;
    }
  }

  if (appAnswer !== "" && appAnswer !== undefined) {
    const appTask = document.getElementById("app");
    checkboxGetInfo(appTask, appAnswer);
  }
  if (analysis_systemAnswer !== "" && analysis_systemAnswer !== undefined) {
    const analysis_systemTask = document.getElementById("analysis_system");
    radioGetInfo(analysis_systemTask, analysis_systemAnswer);
  }
  if (problemAnswer !== "" && problemAnswer !== undefined) {
    const problemTask = document.getElementById("problem");
    checkboxGetInfo(problemTask, problemAnswer);
  }
  if (automation_txtAnswer !== "" && automation_txtAnswer !== undefined) {
    const automation_txtTask = document.getElementById("automation_txt");
    textareaGethInfo(automation_txtTask, automation_txtAnswer);
  }
  if (data_lakeAnswer !== "" && data_lakeAnswer !== undefined) {
    const data_lakeTask = document.getElementById("data_lake");
    radioGetInfo(data_lakeTask, data_lakeAnswer);
  }
  if (data_typeAnswer !== "" && data_typeAnswer !== undefined) {
    const data_typeTask = document.getElementById("data_type");
    checkboxGetInfo(data_typeTask, data_typeAnswer);
  }
  if (cannibalizationAnswer !== "" && cannibalizationAnswer !== undefined) {
    const cannibalizationTask = document.getElementById("cannibalization");
    radioGetInfo(cannibalizationTask, cannibalizationAnswer);
  }
  if (priorityAnswer !== "" && priorityAnswer !== undefined) {
    const priorityTask = document.getElementById("priority");
    radioGetInfo(priorityTask, priorityAnswer);
  }

  if (organic_issueAnswer !== "" && organic_issueAnswer !== undefined) {
    const organic_issueTask = document.getElementById("organic_issue");
    radioGetInfo(organic_issueTask, organic_issueAnswer);
  }
  if (advertising_txtAnswer !== "" && advertising_txtAnswer !== undefined) {
    const advertising_txtTask = document.getElementById("advertising_txt");
    textareaGethInfo(advertising_txtTask, advertising_txtAnswer);
  }
  if (meet_addAnswer !== "" && meet_addAnswer !== undefined) {
    const meet_addTask = document.getElementById("meet_add");
    radioGetInfo(meet_addTask, meet_addAnswer);
  }
  if (data_verificationAnswer !== "" && data_verificationAnswer !== undefined) {
    const data_verificationTask = document.getElementById("data_verification");
    radioGetInfo(data_verificationTask, data_verificationAnswer);
  }
  if (duplicated_dataAnswer !== "" && duplicated_dataAnswer !== undefined) {
    const duplicated_dataTask = document.getElementById("duplicated_data");
    radioGetInfo(duplicated_dataTask, duplicated_dataAnswer);
  }
  if (sqlAnswer !== "" && sqlAnswer !== undefined) {
    const sqlTask = document.getElementById("sql");
    textareaGethInfo(sqlTask, sqlAnswer);
  }
  if (analyze_extractAnswer !== "" && analyze_extractAnswer !== undefined) {
    const analyze_extractTask = document.getElementById("analyze_extract");
    textareaGethInfo(analyze_extractTask, analyze_extractAnswer);
  }
  if (calculationsAnswer !== "" && calculationsAnswer !== undefined) {
    const calculationsTask = document.getElementById("calculations");
    radioGetInfo(calculationsTask, calculationsAnswer);
  }
  if (conclusion_cycleAnswer !== "" && conclusion_cycleAnswer !== undefined) {
    const conclusion_cycleTask = document.getElementById("conclusion_cycle");
    textareaGethInfo(conclusion_cycleTask, conclusion_cycleAnswer);
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
  if (nat_talkAnswer !== "" && nat_talkAnswer !== undefined) {
    delCheck(nat_talkAnswer, "nat_talk");
  }
  if (photoAnswer !== "" && photoAnswer !== undefined) {
    delCheck(photoAnswer, "photo");
  }
  if (photo_reactionAnswer !== "" && photo_reactionAnswer !== undefined) {
    delCheck(photo_reactionAnswer, "photo_reaction");
  }
  if (crisisAnswer !== "" && crisisAnswer !== undefined) {
    var crisisEl = document.getElementById("crisis");
    investigationEmbed(crisisAnswer, crisisEl, "variant");
  }
  if (crisis_annAnswer !== "" && crisis_annAnswer !== undefined) {
    delCheck(crisis_annAnswer, "crisis_ann");
  }
  if (crisis_ann_twoAnswer !== "" && crisis_ann_twoAnswer !== undefined) {
    delCheck(crisis_ann_twoAnswer, "crisis_ann_two");
  }
  if (crisis_ann_twoAnswer !== "" && crisis_ann_twoAnswer !== undefined) {
    delCheck(crisis_ann_twoAnswer, "crisis_ann_two");
  }
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
    if (value !== "empty") {
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
  }
  function textareaGethInfo(block, value) {
    var textarea = block.querySelector("textarea");
    textarea.value = value;
  }

  if (nat_talkAnswer !== "" && nat_talkAnswer !== undefined) {
    const nat_talkTask = document.getElementById("nat_talk");
    radioGetInfo(nat_talkTask, nat_talkAnswer);
  }
  if (photoAnswer !== "" && photoAnswer !== undefined) {
    const photoTask = document.getElementById("photo");
    radioGetInfo(photoTask, photoAnswer);
  }
  if (photo_reactionAnswer !== "" && photo_reactionAnswer !== undefined) {
    const photo_reactionTask = document.getElementById("photo_reaction");
    radioGetInfo(photo_reactionTask, photo_reactionAnswer);
  }
  if (crisisAnswer !== "" && crisisAnswer !== undefined) {
    const crisisTask = document.getElementById("crisis");
    radioGetInfo(crisisTask, crisisAnswer);
  }
  if (crisis_annAnswer !== "" && crisis_annAnswer !== undefined) {
    const crisis_annTask = document.getElementById("crisis_ann");
    radioGetInfo(crisis_annTask, crisis_annAnswer);
  }
  if (crisis_ann_twoAnswer !== "" && crisis_ann_twoAnswer !== undefined) {
    const crisis_ann_twoTask = document.getElementById("crisis_ann_two");
    radioGetInfo(crisis_ann_twoTask, crisis_ann_twoAnswer);
  }
  if (
    crisis_ann_three_var1Answer !== "" &&
    crisis_ann_three_var1Answer !== undefined
  ) {
    const crisis_ann_three_var1Task = document.getElementById(
      "crisis_ann_three_var1"
    );
    radioGetInfo(crisis_ann_three_var1Task, crisis_ann_three_var1Answer);
  }
  if (
    crisis_ann_three_var2Answer !== "" &&
    crisis_ann_three_var2Answer !== undefined
  ) {
    const crisis_ann_three_var2Task = document.getElementById(
      "crisis_ann_three_var2"
    );
    radioGetInfo(crisis_ann_three_var2Task, crisis_ann_three_var2Answer);
  }
  if (crisis_ann_fourAnswer !== "" && crisis_ann_fourAnswer !== undefined) {
    const crisis_ann_fourTask = document.getElementById("crisis_ann_four");
    radioGetInfo(crisis_ann_fourTask, crisis_ann_fourAnswer);
  }

  // ---------------------

  if (crisis_mykolaAnswer !== "" && crisis_mykolaAnswer !== undefined) {
    const crisis_mykolaTask = document.getElementById("crisis_mykola");
    radioGetInfo(crisis_mykolaTask, crisis_mykolaAnswer);
  }
  if (crisis_mykola_twoAnswer !== "" && crisis_mykola_twoAnswer !== undefined) {
    const crisis_mykola_twoTask = document.getElementById("crisis_mykola_two");
    radioGetInfo(crisis_mykola_twoTask, crisis_mykola_twoAnswer);
  }
  if (
    crisis_mykola_threeAnswer !== "" &&
    crisis_mykola_threeAnswer !== undefined
  ) {
    const crisis_mykola_threeTask = document.getElementById(
      "crisis_mykola_three"
    );
    radioGetInfo(crisis_mykola_threeTask, crisis_mykola_threeAnswer);
  }
  if (
    crisis_mykola_fourAnswer !== "" &&
    crisis_mykola_fourAnswer !== undefined
  ) {
    const crisis_mykola_fourTask =
      document.getElementById("crisis_mykola_four");
    radioGetInfo(crisis_mykola_fourTask, crisis_mykola_fourAnswer);
  }
  if (
    crisis_mykola_fiveAnswer !== "" &&
    crisis_mykola_fiveAnswer !== undefined
  ) {
    const crisis_mykola_fiveTask =
      document.getElementById("crisis_mykola_five");
    radioGetInfo(crisis_mykola_fiveTask, crisis_mykola_fiveAnswer);
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

function tab3Progress(numberBlop) {
  analystsCheck(meet_addAnswer);
  if (numberBlop > 0 && numberBlop !== "" && numberBlop !== undefined) {
    document
      .querySelector("div[tabs='tab3'] .start_button")
      .classList.add("hideButton");
    var targetButton = document.querySelector(
      'div[tabs="tab3"] [numberBlop="' + numberBlop + '"]'
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
    if (value !== "empty") {
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
  }
  function textareaGethInfo(block, value) {
    var textarea = block.querySelector("textarea");
    textarea.value = value;

    if (countProgressTab3 !== "") {
      if (block.classList.contains("retention_txt")) {
        function retention_txt(blop) {
          var value = blop.querySelector("textarea").value;
          // var cleanedString = value.replace(/[$\s\-\+]/g, "");
          var cleanedString = value.replace(/[^0-9.]/g, "");
          var radioAnswer;
          if (cleanedString === "104.6") {
            radioAnswer = blop.nextElementSibling.querySelector(".one");
            radioAnswer.classList.add("answer_visible");
          } else {
            radioAnswer = blop.nextElementSibling.querySelector(".two");
            radioAnswer.classList.add("answer_visible");
          }
        }
        retention_txt(block);
      }
    }
  }

  if (metrics_txtAnswer !== "" && metrics_txtAnswer !== undefined) {
    const metrics_txtTask = document.getElementById("metrics_txt");
    textareaGethInfo(metrics_txtTask, metrics_txtAnswer);
  }
  if (ltvAnswer !== "" && ltvAnswer !== undefined) {
    const ltvTask = document.getElementById("ltv");
    checkboxGetInfo(ltvTask, ltvAnswer);
  }
  if (org_analisis_txtAnswer !== "" && org_analisis_txtAnswer !== undefined) {
    const org_analisis_txtTask = document.getElementById("org_analisis_txt");
    textareaGethInfo(org_analisis_txtTask, org_analisis_txtAnswer);
  }
  if (churnAnswer !== "" && churnAnswer !== undefined) {
    const churnTask = document.getElementById("churn");
    radioGetInfo(churnTask, churnAnswer);
  }
  if (leaveAnswer !== "" && leaveAnswer !== undefined) {
    const leaveTask = document.getElementById("leave");
    radioGetInfo(leaveTask, leaveAnswer);
  }
  if (retentionAnswer !== "" && retentionAnswer !== undefined) {
    const retentionTask = document.getElementById("retention");
    radioGetInfo(retentionTask, retentionAnswer);
  }
  if (retention_txtAnswer !== "" && retention_txtAnswer !== undefined) {
    const retention_txtTask = document.getElementById("retention_txt");
    textareaGethInfo(retention_txtTask, retention_txtAnswer);
  }

  if (starAnswearTab3 !== "" && starAnswearTab3 !== undefined) {
    starGetInfo(
      document.querySelector('div[tabs="tab3"] .star_blop'),
      starAnswearTab3
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
if (embedProgress1 !== "" && embedProgress1 !== undefined) {
  if (crisisAnswer === "one") {
    embedProgress(crisisAnswer, embedProgress1, "variant", "crisis_block");
  } else if (crisisAnswer === "two") {
    embedProgress("one", embedProgress1, "variant", "crisis_block");
  }
}
if (embedProgress2 !== "" && embedProgress2 !== undefined) {
  embedProgress(crisisAnswer, embedProgress2, "variant", "crisis_block");
}
if (countProgressTab3 !== "" && countProgressTab3 !== undefined) {
  tab3Progress(countProgressTab3);
}

primalButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    var blopElement = button.closest(".blop");
    if (blopElement) {
      blopElement.classList.add("done_blop");

      radioCheck(blopElement);
      appCheck();
      problemCheck();
      data_typeCheck();
      // ltvCheck();

      if (blopElement.hasAttribute("last_in_var")) {
        var investLastBlop;
        if (blopElement.closest(".crisis_block")) {
          investLastBlop = blopElement.closest(".crisis_block");
        }
        investLastBlop.nextElementSibling.classList.add("next_visible");
        setTimeout(function () {
          investLastBlop.nextElementSibling.classList.add("blop_animate");
        }, 1);
      } else if (
        blopElement.id === "crisis_mykola_four" &&
        blopElement.querySelector('input[type="radio"]:checked').value === "six"
      ) {
      } else {
        blopElement.nextElementSibling.classList.add("next_visible");
        setTimeout(function () {
          blopElement.nextElementSibling.classList.add("blop_animate");
        }, 1);
      }

      if (button.classList.contains("last_button")) {
        var ss = button.getAttribute("numberBlop");
        create_lesson(
          "656c7c06998532066a3e134d",
          user_email,
          fragments[4].slice(0, 24)
        );

        var parent = button.closest(".lesson_tab").getAttribute("tabs");

        if (ss > 43 && parent === "tab1") {
          availableLinks("twelfthl_tab2");
        }
        if (ss > 12 && parent === "tab2") {
          availableLinks("twelfthl_tab3");
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
      } else if (scrollButton.closest(".blop").hasAttribute("last_in_var")) {
        if (scrollButton.closest(".crisis_block")) {
          mainElement =
            scrollButton.closest(".crisis_block").nextElementSibling;
        }
      } else if (
        scrollButton.closest(".blop").id === "crisis_mykola_four" &&
        scrollButton
          .closest(".blop")
          .querySelector('input[type="radio"]:checked').value === "six"
      ) {
        mainElement = document.querySelector('[variant="one"]');
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

      if (block.classList.contains("retention_txt")) {
        function retention_txt(blop) {
          var value = blop.querySelector("textarea").value;
          var cleanedString = value.replace(/[^0-9.]/g, "");
          var radioAnswer;
          if (cleanedString === "104.6") {
            radioAnswer = blop.nextElementSibling.querySelector(".one");
            radioAnswer.classList.add("answer_visible");
          } else {
            radioAnswer = blop.nextElementSibling.querySelector(".two");
            radioAnswer.classList.add("answer_visible");
          }
        }
        retention_txt(block);
      }

      return result;
    }

    if (buttonWithAttr.closest("#app")) {
      const appTask = document.getElementById("app");
      var appResult = checkboxPushInfo(appTask);
    }
    if (buttonWithAttr.closest("#analysis_system")) {
      const analysis_systemTask = document.getElementById("analysis_system");
      var analysis_systemResult = radioPushInfo(analysis_systemTask);
    }
    if (buttonWithAttr.closest("#problem")) {
      const problemTask = document.getElementById("problem");
      var problemResult = checkboxPushInfo(problemTask);
    }
    if (buttonWithAttr.closest("#automation_txt")) {
      const automation_txtTask = document.getElementById("automation_txt");
      var automation_txtResult = textareaPushInfo(automation_txtTask);
    }
    if (buttonWithAttr.closest("#data_lake")) {
      const data_lakeTask = document.getElementById("data_lake");
      var data_lakeResult = radioPushInfo(data_lakeTask);
    }
    if (buttonWithAttr.closest("#data_type")) {
      const data_typeTask = document.getElementById("data_type");
      var data_typeResult = checkboxPushInfo(data_typeTask);
    }
    if (buttonWithAttr.closest("#cannibalization")) {
      const cannibalizationTask = document.getElementById("cannibalization");
      var cannibalizationResult = radioPushInfo(cannibalizationTask);
    }
    if (buttonWithAttr.closest("#priority")) {
      const priorityTask = document.getElementById("priority");
      var priorityResult = radioPushInfo(priorityTask);
    }
    if (buttonWithAttr.closest("#organic_issue")) {
      const organic_issueTask = document.getElementById("organic_issue");
      var organic_issueResult = radioPushInfo(organic_issueTask);
    }
    if (buttonWithAttr.closest("#advertising_txt")) {
      const advertising_txtTask = document.getElementById("advertising_txt");
      var advertising_txtResult = textareaPushInfo(advertising_txtTask);
    }
    if (buttonWithAttr.closest("#meet_add")) {
      const meet_addTask = document.getElementById("meet_add");
      var meet_addResult = radioPushInfo(meet_addTask);
    }

    // ------------- Analysts -------------

    if (buttonWithAttr.closest("#data_verification")) {
      const data_verificationTask =
        document.getElementById("data_verification");
      data_verificationResult = radioPushInfo(data_verificationTask);
    }
    if (buttonWithAttr.closest("#duplicated_data")) {
      const duplicated_dataTask = document.getElementById("duplicated_data");
      duplicated_dataResult = radioPushInfo(duplicated_dataTask);
    }
    if (buttonWithAttr.closest("#sql")) {
      const sqlTask = document.getElementById("sql");
      sqlResult = textareaPushInfo(sqlTask);
    }
    if (buttonWithAttr.closest("#analyze_extract")) {
      const analyze_extractTask = document.getElementById("analyze_extract");
      analyze_extractResult = textareaPushInfo(analyze_extractTask);
    }
    if (buttonWithAttr.closest("#calculations")) {
      const calculationsTask = document.getElementById("calculations");
      calculationsResult = radioPushInfo(calculationsTask);
    }
    if (buttonWithAttr.closest("#conclusion_cycle")) {
      const conclusion_cycleTask = document.getElementById("conclusion_cycle");
      conclusion_cycleResult = textareaPushInfo(conclusion_cycleTask);
    }

    // // ---------------

    if (buttonWithAttr.closest("#nat_talk")) {
      const nat_talkTask = document.getElementById("nat_talk");
      var nat_talkResult = radioPushInfo(nat_talkTask);
    }
    if (buttonWithAttr.closest("#photo")) {
      const photoTask = document.getElementById("photo");
      var photoResult = radioPushInfo(photoTask);
    }
    if (buttonWithAttr.closest("#photo_reaction")) {
      const photo_reactionTask = document.getElementById("photo_reaction");
      var photo_reactionResult = radioPushInfo(photo_reactionTask);
    }
    if (buttonWithAttr.closest("#crisis")) {
      const crisisTask = document.getElementById("crisis");
      var crisisResult = radioPushInfo(crisisTask);
    }

    // --------------

    //
    if (buttonWithAttr.closest("#crisis_ann")) {
      const crisis_annTask = document.getElementById("crisis_ann");
      var crisis_annResult = radioPushInfo(crisis_annTask);
    }
    if (buttonWithAttr.closest("#crisis_ann_two")) {
      const crisis_ann_twoTask = document.getElementById("crisis_ann_two");
      var crisis_ann_twoResult = radioPushInfo(crisis_ann_twoTask);
    }
    if (buttonWithAttr.closest("#crisis_ann_three_var1")) {
      const crisis_ann_three_var1Task = document.getElementById(
        "crisis_ann_three_var1"
      );
      var crisis_ann_three_var1Result = radioPushInfo(
        crisis_ann_three_var1Task
      );
    }
    if (buttonWithAttr.closest("#crisis_ann_three_var2")) {
      var crisis_ann_three_var2Task = document.getElementById(
        "crisis_ann_three_var2"
      );
      var crisis_ann_three_var2Result = radioPushInfo(
        crisis_ann_three_var2Task
      );
    }
    if (buttonWithAttr.closest("#crisis_ann_four")) {
      const crisis_ann_fourTask = document.getElementById("crisis_ann_four");
      crisis_ann_fourResult = radioPushInfo(crisis_ann_fourTask);
    }

    // ----------------

    if (buttonWithAttr.closest("#crisis_mykola")) {
      const crisis_mykolaTask = document.getElementById("crisis_mykola");
      var crisis_mykolaResult = radioPushInfo(crisis_mykolaTask);
    }
    if (buttonWithAttr.closest("#crisis_mykola_two")) {
      const crisis_mykola_twoTask =
        document.getElementById("crisis_mykola_two");
      var crisis_mykola_twoResult = radioPushInfo(crisis_mykola_twoTask);
    }
    if (buttonWithAttr.closest("#crisis_mykola_three")) {
      const crisis_mykola_threeTask = document.getElementById(
        "crisis_mykola_three"
      );
      var crisis_mykola_threeResult = radioPushInfo(crisis_mykola_threeTask);
    }
    if (buttonWithAttr.closest("#crisis_mykola_four")) {
      const crisis_mykola_fourTask =
        document.getElementById("crisis_mykola_four");
      var crisis_mykola_fourResult = radioPushInfo(crisis_mykola_fourTask);
    }
    if (buttonWithAttr.closest("#crisis_mykola_five")) {
      const crisis_mykola_fiveTask =
        document.getElementById("crisis_mykola_five");
      crisis_mykola_fiveResult = radioPushInfo(crisis_mykola_fiveTask);
    }
    // -----------------------

    if (buttonWithAttr.closest("#metrics_txt")) {
      const metrics_txtTask = document.getElementById("metrics_txt");
      var metrics_txtResult = textareaPushInfo(metrics_txtTask);
    }
    if (buttonWithAttr.closest("#ltv")) {
      const ltvTask = document.getElementById("ltv");
      var ltvResult = checkboxPushInfo(ltvTask);
    }
    if (buttonWithAttr.closest("#org_analisis_txt")) {
      const org_analisis_txtTask = document.getElementById("org_analisis_txt");
      var org_analisis_txtResult = textareaPushInfo(org_analisis_txtTask);
    }
    if (buttonWithAttr.closest("#churn")) {
      const churnTask = document.getElementById("churn");
      var churnResult = radioPushInfo(churnTask);
    }
    if (buttonWithAttr.closest("#leave")) {
      const leaveTask = document.getElementById("leave");
      var leaveResult = radioPushInfo(leaveTask);
    }
    if (buttonWithAttr.closest("#retention")) {
      const retentionTask = document.getElementById("retention");
      var retentionResult = radioPushInfo(retentionTask);
    }
    if (buttonWithAttr.closest("#retention_txt")) {
      const retention_txtTask = document.getElementById("retention_txt");
      var retention_txtResult = textareaPushInfo(retention_txtTask);
    }

    // ---------------

    function formSubmit(dataTab1, dataTab2, dataTab3) {
      var data = {
        collection_id: "655b23d09365d880eb114243",
        user_id: fragments[4].slice(0, 24),
        user_tab1: dataTab1,
        user_tab2: dataTab2,
        user_tab3: dataTab3,
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
        '.lesson_tab[tabs="' + tab + '"] input[type="radio"]'
      );
      var star = clickedButton.value;
      return star;
    }

    function dataPush() {
      var tab = collectionIdButtons();
      var star1 = "";
      var star2 = "";
      var star3 = "";

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
      if (
        buttonWithAttr.closest(".lesson_tab[tabs='tab3'] .fs_starrating-1_item")
      ) {
        star3 = starButtons(tab);
      }

      countProgressTab1 = attributeValue;
      // countProgressTab2 = attributeValue;
      var embedProgressAttr;
      if (attributeValue !== "none") {
        countProgressTab2 = attributeValue;
      } else {
        if (buttonWithAttr.getAttribute("embedProgress") !== undefined) {
          embedProgressAttr = buttonWithAttr.getAttribute("embedProgress");
        }
      }
      countProgressTab3 = attributeValue;

      var appBd;
      if (appResult !== "" && appResult !== undefined) {
        appAnswer = appResult;
        appBd = "|/|" + appAnswer;
      } else if (appAnswer !== "" && appAnswer !== undefined) {
        appBd = "|/|" + appAnswer;
      } else {
        appBd = "";
      }
      var analysis_systemBd;
      if (analysis_systemResult !== "" && analysis_systemResult !== undefined) {
        analysis_systemAnswer = analysis_systemResult;
        analysis_systemBd = "|/|" + analysis_systemAnswer;
      } else if (
        analysis_systemAnswer !== "" &&
        analysis_systemAnswer !== undefined
      ) {
        analysis_systemBd = "|/|" + analysis_systemAnswer;
      } else {
        analysis_systemBd = "";
      }
      var problemBd;
      if (problemResult !== "" && problemResult !== undefined) {
        problemAnswer = problemResult;
        problemBd = "|/|" + problemAnswer;
      } else if (problemAnswer !== "" && problemAnswer !== undefined) {
        problemBd = "|/|" + problemAnswer;
      } else {
        problemBd = "";
      }
      var automation_txtBd;
      if (automation_txtResult !== "" && automation_txtResult !== undefined) {
        automation_txtAnswer = automation_txtResult;
        automation_txtBd = "|/|" + automation_txtAnswer;
      } else if (
        automation_txtAnswer !== "" &&
        automation_txtAnswer !== undefined
      ) {
        automation_txtBd = "|/|" + automation_txtAnswer;
      } else {
        automation_txtBd = "";
      }
      var data_lakeBd;
      if (data_lakeResult !== "" && data_lakeResult !== undefined) {
        data_lakeAnswer = data_lakeResult;
        data_lakeBd = "|/|" + data_lakeAnswer;
      } else if (data_lakeAnswer !== "" && data_lakeAnswer !== undefined) {
        data_lakeBd = "|/|" + data_lakeAnswer;
      } else {
        data_lakeBd = "";
      }
      var data_typeBd;
      if (data_typeResult !== "" && data_typeResult !== undefined) {
        data_typeAnswer = data_typeResult;
        data_typeBd = "|/|" + data_typeAnswer;
      } else if (data_typeAnswer !== "" && data_typeAnswer !== undefined) {
        data_typeBd = "|/|" + data_typeAnswer;
      } else {
        data_typeBd = "";
      }
      var cannibalizationBd;
      if (cannibalizationResult !== "" && cannibalizationResult !== undefined) {
        cannibalizationAnswer = cannibalizationResult;
        cannibalizationBd = "|/|" + cannibalizationAnswer;
      } else if (
        cannibalizationAnswer !== "" &&
        cannibalizationAnswer !== undefined
      ) {
        cannibalizationBd = "|/|" + cannibalizationAnswer;
      } else {
        cannibalizationBd = "";
      }
      var priorityBd;
      if (priorityResult !== "" && priorityResult !== undefined) {
        priorityAnswer = priorityResult;
        priorityBd = "|/|" + priorityAnswer;
      } else if (priorityAnswer !== "" && priorityAnswer !== undefined) {
        priorityBd = "|/|" + priorityAnswer;
      } else {
        priorityBd = "";
      }
      var organic_issueBd;
      if (organic_issueResult !== "" && organic_issueResult !== undefined) {
        organic_issueAnswer = organic_issueResult;
        organic_issueBd = "|/|" + organic_issueAnswer;
      } else if (
        organic_issueAnswer !== "" &&
        organic_issueAnswer !== undefined
      ) {
        organic_issueBd = "|/|" + organic_issueAnswer;
      } else {
        organic_issueBd = "";
      }
      var advertising_txtBd;
      if (advertising_txtResult !== "" && advertising_txtResult !== undefined) {
        advertising_txtAnswer = advertising_txtResult;
        advertising_txtBd = "|/|" + advertising_txtAnswer;
      } else if (
        advertising_txtAnswer !== "" &&
        advertising_txtAnswer !== undefined
      ) {
        advertising_txtBd = "|/|" + advertising_txtAnswer;
      } else {
        advertising_txtBd = "";
      }
      var meet_addBd;
      if (meet_addResult !== "" && meet_addResult !== undefined) {
        meet_addAnswer = meet_addResult;
        meet_addBd = "|/|" + meet_addAnswer;
      } else if (meet_addAnswer !== "" && meet_addAnswer !== undefined) {
        meet_addBd = "|/|" + meet_addAnswer;
      } else {
        meet_addBd = "";
      }
      var data_verificationBd;
      if (
        data_verificationResult !== "" &&
        data_verificationResult !== undefined
      ) {
        data_verificationAnswer = data_verificationResult;
        data_verificationBd = "|/|" + data_verificationAnswer;
      } else if (
        data_verificationAnswer !== "" &&
        data_verificationAnswer !== undefined
      ) {
        data_verificationBd = "|/|" + data_verificationAnswer;
      } else {
        data_verificationBd = "";
      }
      var duplicated_dataBd;
      if (duplicated_dataResult !== "" && duplicated_dataResult !== undefined) {
        duplicated_dataAnswer = duplicated_dataResult;
        duplicated_dataBd = "|/|" + duplicated_dataAnswer;
      } else if (
        duplicated_dataAnswer !== "" &&
        duplicated_dataAnswer !== undefined
      ) {
        duplicated_dataBd = "|/|" + duplicated_dataAnswer;
      } else {
        duplicated_dataBd = "";
      }
      var sqlBd;
      if (sqlResult !== "" && sqlResult !== undefined) {
        sqlAnswer = sqlResult;
        sqlBd = "|/|" + sqlAnswer;
      } else if (sqlAnswer !== "" && sqlAnswer !== undefined) {
        sqlBd = "|/|" + sqlAnswer;
      } else {
        sqlBd = "";
      }
      var analyze_extractBd;
      if (analyze_extractResult !== "" && analyze_extractResult !== undefined) {
        analyze_extractAnswer = analyze_extractResult;
        analyze_extractBd = "|/|" + analyze_extractAnswer;
      } else if (
        analyze_extractAnswer !== "" &&
        analyze_extractAnswer !== undefined
      ) {
        analyze_extractBd = "|/|" + analyze_extractAnswer;
      } else {
        analyze_extractBd = "";
      }
      var calculationsBd;
      if (calculationsResult !== "" && calculationsResult !== undefined) {
        calculationsAnswer = calculationsResult;
        calculationsBd = "|/|" + calculationsAnswer;
      } else if (
        calculationsAnswer !== "" &&
        calculationsAnswer !== undefined
      ) {
        calculationsBd = "|/|" + calculationsAnswer;
      } else {
        calculationsBd = "";
      }
      var conclusion_cycleBd;
      if (
        conclusion_cycleResult !== "" &&
        conclusion_cycleResult !== undefined
      ) {
        conclusion_cycleAnswer = conclusion_cycleResult;
        conclusion_cycleBd = "|/|" + conclusion_cycleAnswer;
      } else if (
        conclusion_cycleAnswer !== "" &&
        conclusion_cycleAnswer !== undefined
      ) {
        conclusion_cycleBd = "|/|" + conclusion_cycleAnswer;
      } else {
        conclusion_cycleBd = "";
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

      // ------------------------

      var nat_talkBd;
      if (nat_talkResult !== "" && nat_talkResult !== undefined) {
        nat_talkAnswer = nat_talkResult;
        nat_talkBd = "|/|" + nat_talkAnswer;
      } else if (nat_talkAnswer !== "" && nat_talkAnswer !== undefined) {
        nat_talkBd = "|/|" + nat_talkAnswer;
      } else {
        nat_talkBd = "";
      }
      var photoBd;
      if (photoResult !== "" && photoResult !== undefined) {
        photoAnswer = photoResult;
        photoBd = "|/|" + photoAnswer;
      } else if (photoAnswer !== "" && photoAnswer !== undefined) {
        photoBd = "|/|" + photoAnswer;
      } else {
        photoBd = "";
      }
      var photo_reactionBd;
      if (photo_reactionResult !== "" && photo_reactionResult !== undefined) {
        photo_reactionAnswer = photo_reactionResult;
        photo_reactionBd = "|/|" + photo_reactionAnswer;
      } else if (
        photo_reactionAnswer !== "" &&
        photo_reactionAnswer !== undefined
      ) {
        photo_reactionBd = "|/|" + photo_reactionAnswer;
      } else {
        photo_reactionBd = "";
      }

      var crisisBd;
      if (crisisResult !== "" && crisisResult !== undefined) {
        crisisAnswer = crisisResult;
        crisisBd = "|/|" + crisisAnswer;
      } else if (crisisAnswer !== "" && crisisAnswer !== undefined) {
        crisisBd = "|/|" + crisisAnswer;
      } else {
        crisisBd = "";
      }

      var crisis_annBd;
      if (crisis_annResult !== "" && crisis_annResult !== undefined) {
        crisis_annAnswer = crisis_annResult;
        crisis_annBd = "/" + crisis_annAnswer;
      } else if (crisis_annAnswer !== "" && crisis_annAnswer !== undefined) {
        crisis_annBd = "/" + crisis_annAnswer;
      } else {
        crisis_annBd = "";
      }
      var crisis_ann_twoBd;
      if (crisis_ann_twoResult !== "" && crisis_ann_twoResult !== undefined) {
        crisis_ann_twoAnswer = crisis_ann_twoResult;
        crisis_ann_twoBd = "/" + crisis_ann_twoAnswer;
      } else if (
        crisis_ann_twoAnswer !== "" &&
        crisis_ann_twoAnswer !== undefined
      ) {
        crisis_ann_twoBd = "/" + crisis_ann_twoAnswer;
      } else {
        crisis_ann_twoBd = "";
      }
      var crisis_ann_three_var1Bd;
      if (
        crisis_ann_three_var1Result !== "" &&
        crisis_ann_three_var1Result !== undefined
      ) {
        crisis_ann_three_var1Answer = crisis_ann_three_var1Result;
        crisis_ann_three_var1Bd = "/" + crisis_ann_three_var1Answer;
      } else if (
        crisis_ann_three_var1Answer !== "" &&
        crisis_ann_three_var1Answer !== undefined
      ) {
        crisis_ann_three_var1Bd = "/" + crisis_ann_three_var1Answer;
      } else {
        crisis_ann_three_var1Bd = "";
      }
      var crisis_ann_three_var2Bd;
      if (
        crisis_ann_three_var2Result !== "" &&
        crisis_ann_three_var2Result !== undefined
      ) {
        crisis_ann_three_var2Answer = crisis_ann_three_var2Result;
        crisis_ann_three_var2Bd = "/" + crisis_ann_three_var2Answer;
      } else if (
        crisis_ann_three_var2Answer !== "" &&
        crisis_ann_three_var2Answer !== undefined
      ) {
        crisis_ann_three_var2Bd = "/" + crisis_ann_three_var2Answer;
      } else {
        crisis_ann_three_var2Bd = "";
      }
      var crisis_ann_fourBd;
      if (crisis_ann_fourResult !== "" && crisis_ann_fourResult !== undefined) {
        crisis_ann_fourAnswer = crisis_ann_fourResult;
        crisis_ann_fourBd = "/" + crisis_ann_fourAnswer;
      } else if (
        crisis_ann_fourAnswer !== "" &&
        crisis_ann_fourAnswer !== undefined
      ) {
        crisis_ann_fourBd = "/" + crisis_ann_fourAnswer;
      } else {
        crisis_ann_fourBd = "";
      }

      var crisis_mykolaBd;
      if (crisis_mykolaResult !== "" && crisis_mykolaResult !== undefined) {
        crisis_mykolaAnswer = crisis_mykolaResult;
        crisis_mykolaBd = "/" + crisis_mykolaAnswer;
      } else if (
        crisis_mykolaAnswer !== "" &&
        crisis_mykolaAnswer !== undefined
      ) {
        crisis_mykolaBd = "/" + crisis_mykolaAnswer;
      } else {
        crisis_mykolaBd = "";
      }
      var crisis_mykola_twoBd;
      if (
        crisis_mykola_twoResult !== "" &&
        crisis_mykola_twoResult !== undefined
      ) {
        crisis_mykola_twoAnswer = crisis_mykola_twoResult;
        crisis_mykola_twoBd = "/" + crisis_mykola_twoAnswer;
      } else if (
        crisis_mykola_twoAnswer !== "" &&
        crisis_mykola_twoAnswer !== undefined
      ) {
        crisis_mykola_twoBd = "/" + crisis_mykola_twoAnswer;
      } else {
        crisis_mykola_twoBd = "";
      }
      var crisis_mykola_threeBd;
      if (
        crisis_mykola_threeResult !== "" &&
        crisis_mykola_threeResult !== undefined
      ) {
        crisis_mykola_threeAnswer = crisis_mykola_threeResult;
        crisis_mykola_threeBd = "/" + crisis_mykola_threeAnswer;
      } else if (
        crisis_mykola_threeAnswer !== "" &&
        crisis_mykola_threeAnswer !== undefined
      ) {
        crisis_mykola_threeBd = "/" + crisis_mykola_threeAnswer;
      } else {
        crisis_mykola_threeBd = "";
      }
      var crisis_mykola_fourBd;
      if (
        crisis_mykola_fourResult !== "" &&
        crisis_mykola_fourResult !== undefined
      ) {
        crisis_mykola_fourAnswer = crisis_mykola_fourResult;
        crisis_mykola_fourBd = "/" + crisis_mykola_fourAnswer;
      } else if (
        crisis_mykola_fourAnswer !== "" &&
        crisis_mykola_fourAnswer !== undefined
      ) {
        crisis_mykola_fourBd = "/" + crisis_mykola_fourAnswer;
      } else {
        crisis_mykola_fourBd = "";
      }
      var crisis_mykola_fiveBd;
      if (
        crisis_mykola_fiveResult !== "" &&
        crisis_mykola_fiveResult !== undefined
      ) {
        crisis_mykola_fiveAnswer = crisis_mykola_fiveResult;
        crisis_mykola_fiveBd = "/" + crisis_mykola_fiveAnswer;
      } else if (
        crisis_mykola_fiveAnswer !== "" &&
        crisis_mykola_fiveAnswer !== undefined
      ) {
        crisis_mykola_fiveBd = "/" + crisis_mykola_fiveAnswer;
      } else {
        crisis_mykola_fiveBd = "";
      }

      // if (buttonWithAttr.closest(".crisis_block[variant='one']")) {
      //   embedProgress1 = embedProgressAttr;
      //   embedProgress1 = '/' + embedProgress1;
      // }
      // if (buttonWithAttr.closest(".crisis_block[variant='two']")) {
      //   embedProgress2 = embedProgressAttr;
      //   embedProgress2 = '/' + embedProgress2;
      // }
      // if (buttonWithAttr.closest(".crisis_block[variant]")) {

      if (embedProgress1 === undefined) {
        embedProgress1 = "";
      }
      if (embedProgress2 === undefined) {
        embedProgress2 = "";
      }
      if (buttonWithAttr.closest(".crisis_block[variant='one']")) {
        embedProgress1 = embedProgressAttr;
      }
      if (buttonWithAttr.closest(".crisis_block[variant='two']")) {
        embedProgress2 = embedProgressAttr;
      }
      if (embedProgress1 !== "") {
        embedProgress1 = embedProgress1.replace("/", "");
        embedProgress1 = "/" + embedProgress1;
      }
      if (embedProgress2 !== "") {
        embedProgress2 = embedProgress2.replace("/", "");
        embedProgress2 = "/" + embedProgress2;
      }

      // }

      if (crisisAnswer === "one") {
        crisisBd =
          crisisBd +
          embedProgress1 +
          crisis_annBd +
          crisis_ann_twoBd +
          crisis_ann_three_var1Bd +
          crisis_ann_three_var2Bd +
          crisis_ann_fourBd;
      } else if (crisisAnswer === "two") {
        crisisBd =
          crisisBd +
          embedProgress2 +
          crisis_mykolaBd +
          crisis_mykola_twoBd +
          crisis_mykola_threeBd +
          crisis_mykola_fourBd +
          crisis_mykola_fiveBd +
          embedProgress1 +
          crisis_annBd +
          crisis_ann_twoBd +
          crisis_ann_three_var1Bd +
          crisis_ann_three_var2Bd +
          crisis_ann_fourBd;
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

      var metrics_txtBd;
      if (metrics_txtResult !== "" && metrics_txtResult !== undefined) {
        metrics_txtAnswer = metrics_txtResult;
        metrics_txtBd = "|/|" + metrics_txtAnswer;
      } else if (metrics_txtAnswer !== "" && metrics_txtAnswer !== undefined) {
        metrics_txtBd = "|/|" + metrics_txtAnswer;
      } else {
        metrics_txtBd = "";
      }
      var ltvBd;
      if (ltvResult !== "" && ltvResult !== undefined) {
        ltvAnswer = ltvResult;
        ltvBd = "|/|" + ltvAnswer;
      } else if (ltvAnswer !== "" && ltvAnswer !== undefined) {
        ltvBd = "|/|" + ltvAnswer;
      } else {
        ltvBd = "";
      }
      var org_analisis_txtBd;
      if (
        org_analisis_txtResult !== "" &&
        org_analisis_txtResult !== undefined
      ) {
        org_analisis_txtAnswer = org_analisis_txtResult;
        org_analisis_txtBd = "|/|" + org_analisis_txtAnswer;
      } else if (
        org_analisis_txtAnswer !== "" &&
        org_analisis_txtAnswer !== undefined
      ) {
        org_analisis_txtBd = "|/|" + org_analisis_txtAnswer;
      } else {
        org_analisis_txtBd = "";
      }
      var churnBd;
      if (churnResult !== "" && churnResult !== undefined) {
        churnAnswer = churnResult;
        churnBd = "|/|" + churnAnswer;
      } else if (churnAnswer !== "" && churnAnswer !== undefined) {
        churnBd = "|/|" + churnAnswer;
      } else {
        churnBd = "";
      }
      var leaveBd;
      if (leaveResult !== "" && leaveResult !== undefined) {
        leaveAnswer = leaveResult;
        leaveBd = "|/|" + leaveAnswer;
      } else if (leaveAnswer !== "" && leaveAnswer !== undefined) {
        leaveBd = "|/|" + leaveAnswer;
      } else {
        leaveBd = "";
      }
      var retentionBd;
      if (retentionResult !== "" && retentionResult !== undefined) {
        retentionAnswer = retentionResult;
        retentionBd = "|/|" + retentionAnswer;
      } else if (retentionAnswer !== "" && retentionAnswer !== undefined) {
        retentionBd = "|/|" + retentionAnswer;
      } else {
        retentionBd = "";
      }
      var retention_txtBd;
      if (retention_txtResult !== "" && retention_txtResult !== undefined) {
        retention_txtAnswer = retention_txtResult;
        retention_txtBd = "|/|" + retention_txtAnswer;
      } else if (
        retention_txtAnswer !== "" &&
        retention_txtAnswer !== undefined
      ) {
        retention_txtBd = "|/|" + retention_txtAnswer;
      } else {
        retention_txtBd = "";
      }

      var starTab3Bd;
      if (star3 !== "" && star3 !== undefined) {
        starAnswearTab3 = star3;
        starTab3Bd = "|/|" + starAnswearTab3;
      } else if (starAnswearTab3 !== "" && starAnswearTab3 !== undefined) {
        starTab3Bd = "|/|" + starAnswearTab3;
      } else {
        starTab3Bd = "";
      }

      if (tab === "tab1") {
        var dataTab1 =
          countProgressTab1 +
          appBd +
          analysis_systemBd +
          problemBd +
          automation_txtBd +
          data_lakeBd +
          data_typeBd +
          cannibalizationBd +
          priorityBd +
          organic_issueBd +
          advertising_txtBd +
          meet_addBd +
          data_verificationBd +
          duplicated_dataBd +
          sqlBd +
          analyze_extractBd +
          calculationsBd +
          conclusion_cycleBd +
          starTab1Bd;
      } else if (tab === "tab2") {
        var dataTab2 =
          countProgressTab2 +
          nat_talkBd +
          photoBd +
          photo_reactionBd +
          crisisBd +
          starTab2Bd;
      } else if (tab === "tab3") {
        var dataTab3 =
          countProgressTab3 +
          metrics_txtBd +
          ltvBd +
          org_analisis_txtBd +
          churnBd +
          leaveBd +
          retentionBd +
          retention_txtBd +
          starTab3Bd;
      }
      formSubmit(dataTab1, dataTab2, dataTab3);
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
          collection_id: "655b23d09365d880eb114243",
          user_id: fragments[4].slice(0, 24),
          tab1theory: tab1theoryVal,
        };
      } else if (tabs === "tab2") {
        data2 = {
          collection_id: "655b23d09365d880eb114243",
          user_id: fragments[4].slice(0, 24),
          tab2theory: tab2theoryVal,
        };
      } else if (tabs === "tab3") {
        data2 = {
          collection_id: "655b23d09365d880eb114243",
          user_id: fragments[4].slice(0, 24),
          tab2theory: tab3theoryVal,
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
    } else if (tabs === "tab3") {
      var tab3theoryVal = theoryButton.getAttribute("theory");
    }
    formTheory(tab1theoryVal, tab2theoryVal, tab3theoryVal);
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
