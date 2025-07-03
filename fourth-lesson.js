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
var importantAnswear = tab1BDVal[1];
var focusAnswear = tab1BDVal[2];
var pricingAnswear = tab1BDVal[3];
var pricing_strategyAnswear = tab1BDVal[4];
var competitors_pricesAnswear = tab1BDVal[5];
var ab_pricingAnswear = tab1BDVal[6];
var pricing_hypothesisAnswear = tab1BDVal[7];
var pricing_rangeAnswear = tab1BDVal[8];
var pricing_calcAnswear = tab1BDVal[9];
var ab_resultsAnswear = tab1BDVal[10];
var ab_results_moreAnswear = tab1BDVal[11];
var starAnswearTab1 = tab1BDVal[12];

var countProgressTab2 = tab2BDVal[0];
var positioningAnswear = tab2BDVal[1];
var positioning_howAnswear = tab2BDVal[2];
var employeesAnswear = tab2BDVal[3];
var timingAnswear = tab2BDVal[4];
var you_doAnswear = tab2BDVal[5];
var competitors_sitesAnswear = tab2BDVal[6];
var target_audienceAnswear = tab2BDVal[7];
var whatAnswear = tab2BDVal[8];
var what_auditAnswear = tab2BDVal[9];
var howAnswear = tab2BDVal[10];
var whyAnswear = tab2BDVal[11];
var positioning_textAnswear = tab2BDVal[12];
var visionAnswear = tab2BDVal[13];
var positioning_whyAnswear = tab2BDVal[14];
var values_listAnswear = tab2BDVal[15];
var strategyAnswear = tab2BDVal[16];
var archetypeAnswear = tab2BDVal[17];
var archetype_textareaAnswear = tab2BDVal[18];
var emotional_characteristicsAnswear = tab2BDVal[19];
var positioning_textareaAnswear = tab2BDVal[20];
var starAnswearTab2 = tab2BDVal[21];

var countProgressTab3 = tab3BDVal[0];
var retention_monthAnswear = tab3BDVal[1];
var priceAnswear = tab3BDVal[2];
var retention_textareaAnswear = tab3BDVal[3];
var starAnswearTab3 = tab3BDVal[4];

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
  fetch("https://uni380-ua.onrender.com/create-lesson", {
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
create_lesson("6517f3b8afa18ec4281d2852", user_email, fragments[4]);

if (countProgressTab1 > 25) {
  availableLinks("fourthl_tab2");
  activetab("fourthl_tab2", "tab2");
}
if (countProgressTab2 > 52) {
  availableLinks("fourthl_tab3");
  activetab("fourthl_tab3", "tab3");
}

function radioCheck(blopElement) {
  var radio = blopElement.querySelector('input[type="radio"]:checked');
  if (radio) {
    var value = radio.value;
    var radioAnswer = blopElement.nextElementSibling.querySelector("." + value);
    radioAnswer.classList.add("answer_visible");
  }
}

function competitors_pricesCheck() {
  var competitorsInfo = document.getElementById("competitors_prices");
  var competitorsForm = competitorsInfo.querySelector("form");
  var competitorsElements = competitorsForm.querySelectorAll(".check_input");

  var competitorsFirst = competitorsElements[0].querySelector(
    'input[type="checkbox"]'
  );
  var competitorsSecond = competitorsElements[1].querySelector(
    'input[type="checkbox"]'
  );
  var competitorsThird = competitorsElements[2].querySelector(
    'input[type="checkbox"]'
  );
  var competitorsFourth = competitorsElements[3].querySelector(
    'input[type="checkbox"]'
  );
  var competitorsFiveth = competitorsElements[4].querySelector(
    'input[type="checkbox"]'
  );

  if (
    competitorsFirst.checked &&
    competitorsSecond.checked &&
    competitorsThird.checked &&
    competitorsFourth.checked &&
    competitorsFiveth.checked
  ) {
    competitorsInfo.nextElementSibling
      .querySelector(".maybe")
      .classList.add("hide");
    competitorsInfo.nextElementSibling
      .querySelector(".yes")
      .classList.remove("hide");
  } else {
    competitorsInfo.nextElementSibling
      .querySelector(".maybe")
      .classList.remove("hide");
    competitorsInfo.nextElementSibling
      .querySelector(".yes")
      .classList.add("hide");
  }
}

function employeesCheck() {
  var employeesInfo = document.getElementById("employees");
  var employeesForm = employeesInfo.querySelector("form");
  var employeesElements = employeesForm.querySelectorAll(".check_input");

  var employeesFirst = employeesElements[0].querySelector(
    'input[type="checkbox"]'
  );
  var employeesSecond = employeesElements[1].querySelector(
    'input[type="checkbox"]'
  );
  var employeesThird = employeesElements[2].querySelector(
    'input[type="checkbox"]'
  );
  var employeesFourth = employeesElements[3].querySelector(
    'input[type="checkbox"]'
  );
  var employeesFiveth = employeesElements[4].querySelector(
    'input[type="checkbox"]'
  );

  if (
    !employeesFirst.checked &&
    employeesSecond.checked &&
    employeesThird.checked &&
    !employeesFourth.checked &&
    !employeesFiveth.checked
  ) {
    employeesInfo.nextElementSibling.querySelector(".no").classList.add("hide");
    employeesInfo.nextElementSibling
      .querySelector(".yes")
      .classList.remove("hide");
  } else {
    employeesInfo.nextElementSibling
      .querySelector(".no")
      .classList.remove("hide");
    employeesInfo.nextElementSibling
      .querySelector(".yes")
      .classList.add("hide");
  }
}

function competitors_sitesCheck() {
  var competitorsInfo = document.getElementById("competitors_sites");
  var competitorsForm = competitorsInfo.querySelector("form");
  var competitorsElements = competitorsForm.querySelectorAll(".check_input");

  var competitorsFirst = competitorsElements[0].querySelector(
    'input[type="checkbox"]'
  );
  var competitorsSecond = competitorsElements[1].querySelector(
    'input[type="checkbox"]'
  );
  var competitorsThird = competitorsElements[2].querySelector(
    'input[type="checkbox"]'
  );
  var competitorsFourth = competitorsElements[3].querySelector(
    'input[type="checkbox"]'
  );
  var competitorsFiveth = competitorsElements[4].querySelector(
    'input[type="checkbox"]'
  );
  var competitorsSixth = competitorsElements[5].querySelector(
    'input[type="checkbox"]'
  );

  if (
    !competitorsFirst.checked &&
    competitorsSecond.checked &&
    !competitorsThird.checked &&
    competitorsFourth.checked &&
    !competitorsFiveth.checked &&
    !competitorsSixth.checked
  ) {
    competitorsInfo.nextElementSibling
      .querySelector(".no")
      .classList.add("hide");
    competitorsInfo.nextElementSibling
      .querySelector(".yes")
      .classList.remove("hide");
  } else {
    competitorsInfo.nextElementSibling
      .querySelector(".no")
      .classList.remove("hide");
    competitorsInfo.nextElementSibling
      .querySelector(".yes")
      .classList.add("hide");
  }
}

function values_listCheck() {
  var valuesInfo = document.getElementById("values_list");
  var valuesForm = valuesInfo.querySelector("form");
  var valuesElements = valuesForm.querySelectorAll(".check_input");

  var valuesFirst = valuesElements[0].querySelector('input[type="checkbox"]');
  var valuesSecond = valuesElements[1].querySelector('input[type="checkbox"]');
  var valuesThird = valuesElements[2].querySelector('input[type="checkbox"]');
  var valuesFourth = valuesElements[3].querySelector('input[type="checkbox"]');
  var valuesFiveth = valuesElements[4].querySelector('input[type="checkbox"]');
  var valuesSixth = valuesElements[5].querySelector('input[type="checkbox"]');

  if (
    !valuesFirst.checked &&
    !valuesSecond.checked &&
    valuesThird.checked &&
    !valuesFourth.checked &&
    valuesFiveth.checked &&
    valuesSixth.checked
  ) {
    valuesInfo.nextElementSibling.querySelector(".no").classList.add("hide");
    valuesInfo.nextElementSibling
      .querySelector(".yes")
      .classList.remove("hide");
  } else {
    valuesInfo.nextElementSibling.querySelector(".no").classList.remove("hide");
    valuesInfo.nextElementSibling.querySelector(".yes").classList.add("hide");
  }
}

function emotional_characteristicsCheck() {
  var emotionalInfo = document.getElementById("emotional_characteristics");
  var emotionalForm = emotionalInfo.querySelector("form");
  var emotionalElements = emotionalForm.querySelectorAll(".check_input");

  var emotionalFirst = emotionalElements[0].querySelector(
    'input[type="checkbox"]'
  );
  var emotionalSecond = emotionalElements[1].querySelector(
    'input[type="checkbox"]'
  );
  var emotionalThird = emotionalElements[2].querySelector(
    'input[type="checkbox"]'
  );
  var emotionalFourth = emotionalElements[3].querySelector(
    'input[type="checkbox"]'
  );
  var emotionalFiveth = emotionalElements[4].querySelector(
    'input[type="checkbox"]'
  );

  if (
    emotionalFirst.checked &&
    !emotionalSecond.checked &&
    emotionalThird.checked &&
    !emotionalFourth.checked &&
    !emotionalFiveth.checked
  ) {
    emotionalInfo.nextElementSibling.querySelector(".no").classList.add("hide");
    emotionalInfo.nextElementSibling
      .querySelector(".yes")
      .classList.remove("hide");
  } else {
    emotionalInfo.nextElementSibling
      .querySelector(".no")
      .classList.remove("hide");
    emotionalInfo.nextElementSibling
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
    if (block && block.id === "competitors_prices") {
      competitors_pricesCheck();
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
      if (block.classList.contains("pricing_calc")) {
        function textareaCheckPricing(blop) {
          var value = blop.querySelector("textarea").value;
          var cleanedString = value.replace(/[$\s\-\+]/g, "");
          var radioAnswer;
          if (cleanedString === "30") {
            radioAnswer = blop.nextElementSibling.querySelector(".one");
            radioAnswer.classList.add("answer_visible");
          } else {
            radioAnswer = blop.nextElementSibling.querySelector(".two");
            radioAnswer.classList.add("answer_visible");
          }
        }
        textareaCheckPricing(block);
      }
    }
  }

  if (importantAnswear !== "" && importantAnswear !== undefined) {
    const importantTask = document.getElementById("important");
    radioGetInfo(importantTask, importantAnswear);
  }
  if (focusAnswear !== "" && focusAnswear !== undefined) {
    const focusTask = document.getElementById("focus");
    radioGetInfo(focusTask, focusAnswear);
  }
  if (pricingAnswear !== "" && pricingAnswear !== undefined) {
    const pricingTask = document.getElementById("pricing");
    radioGetInfo(pricingTask, pricingAnswear);
  }
  if (pricing_strategyAnswear !== "" && pricing_strategyAnswear !== undefined) {
    const pricing_strategyTask = document.getElementById("pricing_strategy");
    radioGetInfo(pricing_strategyTask, pricing_strategyAnswear);
  }
  if (
    competitors_pricesAnswear !== "" &&
    competitors_pricesAnswear !== undefined
  ) {
    const competitors_pricesTask = document.getElementById(
      "competitors_prices"
    );
    checkboxGetInfo(competitors_pricesTask, competitors_pricesAnswear);
  }
  if (ab_pricingAnswear !== "" && ab_pricingAnswear !== undefined) {
    const ab_pricingTask = document.getElementById("ab_pricing");
    radioGetInfo(ab_pricingTask, ab_pricingAnswear);
  }
  if (
    pricing_hypothesisAnswear !== "" &&
    pricing_hypothesisAnswear !== undefined
  ) {
    const pricing_hypothesisTask = document.getElementById(
      "pricing_hypothesis"
    );
    radioGetInfo(pricing_hypothesisTask, pricing_hypothesisAnswear);
  }
  if (pricing_rangeAnswear !== "" && pricing_rangeAnswear !== undefined) {
    const pricing_rangeTask = document.getElementById("pricing_range");
    radioGetInfo(pricing_rangeTask, pricing_rangeAnswear);
  }
  if (pricing_calcAnswear !== "" && pricing_calcAnswear !== undefined) {
    const pricing_calcTask = document.getElementById("pricing_calc");
    textareaGethInfo(pricing_calcTask, pricing_calcAnswear);
  }
  if (ab_resultsAnswear !== "" && ab_resultsAnswear !== undefined) {
    const ab_resultsTask = document.getElementById("ab_results");
    radioGetInfo(ab_resultsTask, ab_resultsAnswear);
  }
  if (ab_results_moreAnswear !== "" && ab_results_moreAnswear !== undefined) {
    const ab_results_moreTask = document.getElementById("ab_results_more");
    radioGetInfo(ab_results_moreTask, ab_results_moreAnswear);
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
    if (block && block.id === "employees") {
      employeesCheck();
    } else if (block && block.id === "competitors_sites") {
      competitors_sitesCheck();
    } else if (block && block.id === "values_list") {
      values_listCheck();
    } else if (block && block.id === "emotional_characteristics") {
      emotional_characteristicsCheck();
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

  if (positioningAnswear !== "" && positioningAnswear !== undefined) {
    const positioningTask = document.getElementById("positioning");
    radioGetInfo(positioningTask, positioningAnswear);
  }
  if (positioning_howAnswear !== "" && positioning_howAnswear !== undefined) {
    const positioning_howTask = document.getElementById("positioning_how");
    radioGetInfo(positioning_howTask, positioning_howAnswear);
  }
  if (employeesAnswear !== "" && employeesAnswear !== undefined) {
    const employeesTask = document.getElementById("employees");
    checkboxGetInfo(employeesTask, employeesAnswear);
  }
  if (timingAnswear !== "" && timingAnswear !== undefined) {
    const timingTask = document.getElementById("timing");
    radioGetInfo(timingTask, timingAnswear);
  }
  if (you_doAnswear !== "" && you_doAnswear !== undefined) {
    const you_doTask = document.getElementById("you_do");
    radioGetInfo(you_doTask, you_doAnswear);
  }
  if (
    competitors_sitesAnswear !== "" &&
    competitors_sitesAnswear !== undefined
  ) {
    const competitors_sitesTask = document.getElementById("competitors_sites");
    checkboxGetInfo(competitors_sitesTask, competitors_sitesAnswear);
  }
  if (target_audienceAnswear !== "" && target_audienceAnswear !== undefined) {
    const target_audienceTask = document.getElementById("target_audience");
    radioGetInfo(target_audienceTask, target_audienceAnswear);
  }
  if (whatAnswear !== "" && whatAnswear !== undefined) {
    const whatTask = document.getElementById("what");
    radioGetInfo(whatTask, whatAnswear);
  }
  if (what_auditAnswear !== "" && what_auditAnswear !== undefined) {
    const what_auditTask = document.getElementById("what_audit");
    radioGetInfo(what_auditTask, what_auditAnswear);
  }
  if (howAnswear !== "" && howAnswear !== undefined) {
    const howTask = document.getElementById("how");
    radioGetInfo(howTask, howAnswear);
  }
  if (whyAnswear !== "" && whyAnswear !== undefined) {
    const whyTask = document.getElementById("why");
    radioGetInfo(whyTask, whyAnswear);
  }
  if (positioning_textAnswear !== "" && positioning_textAnswear !== undefined) {
    const positioning_textTask = document.getElementById("positioning_text");
    textareaGethInfo(positioning_textTask, positioning_textAnswear);
  }
  if (visionAnswear !== "" && visionAnswear !== undefined) {
    const visionTask = document.getElementById("vision");
    radioGetInfo(visionTask, visionAnswear);
  }
  if (positioning_whyAnswear !== "" && positioning_whyAnswear !== undefined) {
    const positioning_whyTask = document.getElementById("positioning_why");
    radioGetInfo(positioning_whyTask, positioning_whyAnswear);
  }
  if (values_listAnswear !== "" && values_listAnswear !== undefined) {
    const values_listTask = document.getElementById("values_list");
    checkboxGetInfo(values_listTask, values_listAnswear);
  }
  if (strategyAnswear !== "" && strategyAnswear !== undefined) {
    const strategyTask = document.getElementById("strategy");
    textareaGethInfo(strategyTask, strategyAnswear);
  }
  if (archetypeAnswear !== "" && archetypeAnswear !== undefined) {
    const archetypeTask = document.getElementById("archetype");
    radioGetInfo(archetypeTask, archetypeAnswear);
  }
  if (
    archetype_textareaAnswear !== "" &&
    archetype_textareaAnswear !== undefined
  ) {
    const archetype_textareaTask = document.getElementById(
      "archetype_textarea"
    );
    textareaGethInfo(archetype_textareaTask, archetype_textareaAnswear);
  }
  if (
    emotional_characteristicsAnswear !== "" &&
    emotional_characteristicsAnswear !== undefined
  ) {
    const emotional_characteristicsTask = document.getElementById(
      "emotional_characteristics"
    );
    checkboxGetInfo(
      emotional_characteristicsTask,
      emotional_characteristicsAnswear
    );
  }
  if (
    positioning_textareaAnswear !== "" &&
    positioning_textareaAnswear !== undefined
  ) {
    const positioning_textareaTask = document.getElementById(
      "positioning_textarea"
    );
    textareaGethInfo(positioning_textareaTask, positioning_textareaAnswear);
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

function tab3Progress(numberBlop) {
  if (numberBlop > 0 && numberBlop !== "" && numberBlop !== undefined) {
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

  // function checkboxGetInfo(block, value) {
  //   var str = value;
  //   var arrs = str.split(",");
  //   var checkboxes = block.querySelectorAll('input[type="checkbox"]');

  //   checkboxes.forEach(function (checkbox) {
  //     if (arrs.includes(checkbox.name)) {
  //       checkbox.checked = true;
  //       var divElement = checkbox.previousElementSibling;
  //       if (divElement && divElement.classList.contains("w-checkbox-input")) {
  //         divElement.classList.add("w--redirected-checked");
  //       }
  //     }
  //   });
  // }

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

    if (countProgressTab3 !== "") {
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
    }
  }

  if (retention_monthAnswear !== "" && retention_monthAnswear !== undefined) {
    const retention_monthTask = document.getElementById("retention_month");
    textareaGethInfo(retention_monthTask, retention_monthAnswear);
  }
  if (priceAnswear !== "" && priceAnswear !== undefined) {
    const priceTask = document.getElementById("price");
    radioGetInfo(priceTask, priceAnswear);
  }
  if (
    retention_textareaAnswear !== "" &&
    retention_textareaAnswear !== undefined
  ) {
    const retention_textareaTask = document.getElementById(
      "retention_textarea"
    );
    textareaGethInfo(retention_textareaTask, retention_textareaAnswear);
  }
  if (starAnswearTab3 !== "" && starAnswearTab3 !== undefined) {
    starGetInfo(
      document.querySelector('div[tabs="tab3"] .star_blop'),
      starAnswearTab3
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
if (countProgressTab3 !== "" && countProgressTab3 !== undefined) {
  tab3Progress(countProgressTab3);
}

primalButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    var blopElement = button.closest(".blop");
    if (blopElement) {
      blopElement.classList.add("done_blop");

      radioCheck(blopElement);
      competitors_pricesCheck();
      employeesCheck();
      competitors_sitesCheck();
      values_listCheck();
      emotional_characteristicsCheck();

      blopElement.nextElementSibling.classList.add("next_visible");
      setTimeout(function () {
        blopElement.nextElementSibling.classList.add("blop_animate");
      }, 1);

      if (button.classList.contains("last_button")) {
        var ss = button.getAttribute("numberBlop");
        create_lesson("6517f3b8afa18ec4281d2852", user_email, fragments[4]);

        var parent = button.closest(".lesson_tab").getAttribute("tabs");
        // console.log(parent);

        if (ss > 25 && parent === "tab1") {
          availableLinks("fourthl_tab2");
        } else if (ss > 52 && parent === "tab2") {
          availableLinks("fourthl_tab3");
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
    if (
      textarea.closest("#pricing_calc") ||
      textarea.closest("#retention_month")
    ) {
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

      if (block.classList.contains("pricing_calc")) {
        function textareaCheckPricing(blop) {
          var value = blop.querySelector("textarea").value;
          var cleanedString = value.replace(/[$\s\-\+]/g, "");
          var radioAnswer;
          if (cleanedString === "30") {
            radioAnswer = blop.nextElementSibling.querySelector(".one");
            radioAnswer.classList.add("answer_visible");
          } else {
            radioAnswer = blop.nextElementSibling.querySelector(".two");
            radioAnswer.classList.add("answer_visible");
          }
        }
        textareaCheckPricing(block);
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

    if (buttonWithAttr.closest("#important")) {
      const importantTask = document.getElementById("important");
      var importantResult = radioPushInfo(importantTask);
    }
    if (buttonWithAttr.closest("#focus")) {
      const focusTask = document.getElementById("focus");
      var focusResult = radioPushInfo(focusTask);
    }
    if (buttonWithAttr.closest("#pricing")) {
      const pricingTask = document.getElementById("pricing");
      var pricingResult = radioPushInfo(pricingTask);
    }
    if (buttonWithAttr.closest("#pricing_strategy")) {
      const pricing_strategyTask = document.getElementById("pricing_strategy");
      var pricing_strategyResult = radioPushInfo(pricing_strategyTask);
    }
    if (buttonWithAttr.closest("#competitors_prices")) {
      const competitors_pricesTask = document.getElementById(
        "competitors_prices"
      );
      var competitors_pricesResult = checkboxPushInfo(competitors_pricesTask);
    }
    if (buttonWithAttr.closest("#ab_pricing")) {
      const ab_pricingTask = document.getElementById("ab_pricing");
      var ab_pricingResult = radioPushInfo(ab_pricingTask);
    }
    if (buttonWithAttr.closest("#pricing_hypothesis")) {
      const pricing_hypothesisTask = document.getElementById(
        "pricing_hypothesis"
      );
      var pricing_hypothesisResult = radioPushInfo(pricing_hypothesisTask);
    }
    if (buttonWithAttr.closest("#pricing_range")) {
      const pricing_rangeTask = document.getElementById("pricing_range");
      var pricing_rangeResult = radioPushInfo(pricing_rangeTask);
    }
    if (buttonWithAttr.closest("#pricing_calc")) {
      const pricing_calcTask = document.getElementById("pricing_calc");
      var pricing_calcResult = textareaPushInfo(pricing_calcTask);
    }
    if (buttonWithAttr.closest("#ab_results")) {
      const ab_resultsTask = document.getElementById("ab_results");
      var ab_resultsResult = radioPushInfo(ab_resultsTask);
    }
    if (buttonWithAttr.closest("#ab_results_more")) {
      const ab_results_moreTask = document.getElementById("ab_results_more");
      var ab_results_moreResult = radioPushInfo(ab_results_moreTask);
    }

    //---------------

    if (buttonWithAttr.closest("#positioning")) {
      const positioningTask = document.getElementById("positioning");
      var positioningResult = radioPushInfo(positioningTask);
    }
    if (buttonWithAttr.closest("#positioning_how")) {
      const positioning_howTask = document.getElementById("positioning_how");
      var positioning_howResult = radioPushInfo(positioning_howTask);
    }
    if (buttonWithAttr.closest("#employees")) {
      const employeesTask = document.getElementById("employees");
      var employeesResult = checkboxPushInfo(employeesTask);
    }
    if (buttonWithAttr.closest("#timing")) {
      const timingTask = document.getElementById("timing");
      var timingResult = radioPushInfo(timingTask);
    }
    if (buttonWithAttr.closest("#you_do")) {
      const you_doTask = document.getElementById("you_do");
      var you_doResult = radioPushInfo(you_doTask);
    }
    if (buttonWithAttr.closest("#competitors_sites")) {
      const competitors_sitesTask = document.getElementById(
        "competitors_sites"
      );
      var competitors_sitesResult = checkboxPushInfo(competitors_sitesTask);
    }
    if (buttonWithAttr.closest("#target_audience")) {
      const target_audienceTask = document.getElementById("target_audience");
      var target_audienceResult = radioPushInfo(target_audienceTask);
    }
    if (buttonWithAttr.closest("#what")) {
      const whatTask = document.getElementById("what");
      var whatResult = radioPushInfo(whatTask);
    }
    if (buttonWithAttr.closest("#what_audit")) {
      const what_auditTask = document.getElementById("what_audit");
      var what_auditResult = radioPushInfo(what_auditTask);
    }
    if (buttonWithAttr.closest("#how")) {
      const howTask = document.getElementById("how");
      var howResult = radioPushInfo(howTask);
    }
    if (buttonWithAttr.closest("#why")) {
      const whyTask = document.getElementById("why");
      var whyResult = radioPushInfo(whyTask);
    }
    if (buttonWithAttr.closest("#positioning_text")) {
      const positioning_textTask = document.getElementById("positioning_text");
      var positioning_textResult = textareaPushInfo(positioning_textTask);
    }
    if (buttonWithAttr.closest("#vision")) {
      const visionTask = document.getElementById("vision");
      var visionResult = radioPushInfo(visionTask);
    }
    if (buttonWithAttr.closest("#positioning_why")) {
      const positioning_whyTask = document.getElementById("positioning_why");
      var positioning_whyResult = radioPushInfo(positioning_whyTask);
    }
    if (buttonWithAttr.closest("#values_list")) {
      const values_listTask = document.getElementById("values_list");
      var values_listResult = checkboxPushInfo(values_listTask);
    }
    if (buttonWithAttr.closest("#strategy")) {
      const strategyTask = document.getElementById("strategy");
      var strategyResult = textareaPushInfo(strategyTask);
    }
    if (buttonWithAttr.closest("#archetype")) {
      const archetypeTask = document.getElementById("archetype");
      var archetypeResult = radioPushInfo(archetypeTask);
    }
    if (buttonWithAttr.closest("#archetype_textarea")) {
      const archetype_textareaTask = document.getElementById(
        "archetype_textarea"
      );
      var archetype_textareaResult = textareaPushInfo(archetype_textareaTask);
    }
    if (buttonWithAttr.closest("#emotional_characteristics")) {
      const emotional_characteristicsTask = document.getElementById(
        "emotional_characteristics"
      );
      var emotional_characteristicsResult = checkboxPushInfo(
        emotional_characteristicsTask
      );
    }
    if (buttonWithAttr.closest("#positioning_textarea")) {
      const positioning_textareaTask = document.getElementById(
        "positioning_textarea"
      );
      var positioning_textareaResult = textareaPushInfo(
        positioning_textareaTask
      );
    }

    //---------------

    if (buttonWithAttr.closest("#retention_month")) {
      const retention_monthTask = document.getElementById("retention_month");
      var retention_monthResult = textareaPushInfo(retention_monthTask);
    }
    if (buttonWithAttr.closest("#price")) {
      const priceTask = document.getElementById("price");
      var priceResult = radioPushInfo(priceTask);
    }
    if (buttonWithAttr.closest("#retention_textarea")) {
      const retention_textareaTask = document.getElementById(
        "retention_textarea"
      );
      var retention_textareaResult = textareaPushInfo(retention_textareaTask);
    }

    //---------------

    function formSubmit(dataTab1, dataTab2, dataTab3) {
      var data = {
        collection_id: "6517f3b8afa18ec4281d283c",
        user_id: fragments[4],
        user_tab1: dataTab1,
        user_tab2: dataTab2,
        user_tab3: dataTab3
      };
      // console.log(data);

      fetch("https://uni380-ua.onrender.com/lesson-info", {
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
      countProgressTab2 = attributeValue;
      countProgressTab3 = attributeValue;

      var importantBd;
      if (importantResult !== "" && importantResult !== undefined) {
        importantAnswear = importantResult;
        importantBd = "|/|" + importantAnswear;
      } else if (importantAnswear !== "" && importantAnswear !== undefined) {
        importantBd = "|/|" + importantAnswear;
      } else {
        importantBd = "";
      }

      var focusBd;
      if (focusResult !== "" && focusResult !== undefined) {
        focusAnswear = focusResult;
        focusBd = "|/|" + focusAnswear;
      } else if (focusAnswear !== "" && focusAnswear !== undefined) {
        focusBd = "|/|" + focusAnswear;
      } else {
        focusBd = "";
      }

      var pricingBd;
      if (pricingResult !== "" && pricingResult !== undefined) {
        pricingAnswear = pricingResult;
        pricingBd = "|/|" + pricingAnswear;
      } else if (pricingAnswear !== "" && pricingAnswear !== undefined) {
        pricingBd = "|/|" + pricingAnswear;
      } else {
        pricingBd = "";
      }

      var pricing_strategyBd;
      if (
        pricing_strategyResult !== "" &&
        pricing_strategyResult !== undefined
      ) {
        pricing_strategyAnswear = pricing_strategyResult;
        pricing_strategyBd = "|/|" + pricing_strategyAnswear;
      } else if (
        pricing_strategyAnswear !== "" &&
        pricing_strategyAnswear !== undefined
      ) {
        pricing_strategyBd = "|/|" + pricing_strategyAnswear;
      } else {
        pricing_strategyBd = "";
      }

      var competitors_pricesBd;
      if (
        competitors_pricesResult !== "" &&
        competitors_pricesResult !== undefined
      ) {
        competitors_pricesAnswear = competitors_pricesResult;
        competitors_pricesBd = "|/|" + competitors_pricesAnswear;
      } else if (
        competitors_pricesAnswear !== "" &&
        competitors_pricesAnswear !== undefined
      ) {
        competitors_pricesBd = "|/|" + competitors_pricesAnswear;
      } else {
        competitors_pricesBd = "";
      }

      var ab_pricingBd;
      if (ab_pricingResult !== "" && ab_pricingResult !== undefined) {
        ab_pricingAnswear = ab_pricingResult;
        ab_pricingBd = "|/|" + ab_pricingAnswear;
      } else if (ab_pricingAnswear !== "" && ab_pricingAnswear !== undefined) {
        ab_pricingBd = "|/|" + ab_pricingAnswear;
      } else {
        ab_pricingBd = "";
      }

      var pricing_hypothesisBd;
      if (
        pricing_hypothesisResult !== "" &&
        pricing_hypothesisResult !== undefined
      ) {
        pricing_hypothesisAnswear = pricing_hypothesisResult;
        pricing_hypothesisBd = "|/|" + pricing_hypothesisAnswear;
      } else if (
        pricing_hypothesisAnswear !== "" &&
        pricing_hypothesisAnswear !== undefined
      ) {
        pricing_hypothesisBd = "|/|" + pricing_hypothesisAnswear;
      } else {
        pricing_hypothesisBd = "";
      }

      var pricing_rangeBd;
      if (pricing_rangeResult !== "" && pricing_rangeResult !== undefined) {
        pricing_rangeAnswear = pricing_rangeResult;
        pricing_rangeBd = "|/|" + pricing_rangeAnswear;
      } else if (
        pricing_rangeAnswear !== "" &&
        pricing_rangeAnswear !== undefined
      ) {
        pricing_rangeBd = "|/|" + pricing_rangeAnswear;
      } else {
        pricing_rangeBd = "";
      }

      var pricing_calcBd;
      if (pricing_calcResult !== "" && pricing_calcResult !== undefined) {
        pricing_calcAnswear = pricing_calcResult;
        pricing_calcBd = "|/|" + pricing_calcAnswear;
      } else if (
        pricing_calcAnswear !== "" &&
        pricing_calcAnswear !== undefined
      ) {
        pricing_calcBd = "|/|" + pricing_calcAnswear;
      } else {
        pricing_calcBd = "";
      }

      var ab_resultsBd;
      if (ab_resultsResult !== "" && ab_resultsResult !== undefined) {
        ab_resultsAnswear = ab_resultsResult;
        ab_resultsBd = "|/|" + ab_resultsAnswear;
      } else if (ab_resultsAnswear !== "" && ab_resultsAnswear !== undefined) {
        ab_resultsBd = "|/|" + ab_resultsAnswear;
      } else {
        ab_resultsBd = "";
      }

      var ab_results_moreBd;
      if (ab_results_moreResult !== "" && ab_results_moreResult !== undefined) {
        ab_results_moreAnswear = ab_results_moreResult;
        ab_results_moreBd = "|/|" + ab_results_moreAnswear;
      } else if (
        ab_results_moreAnswear !== "" &&
        ab_results_moreAnswear !== undefined
      ) {
        ab_results_moreBd = "|/|" + ab_results_moreAnswear;
      } else {
        ab_results_moreBd = "";
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

      var positioningBd;
      if (positioningResult !== "" && positioningResult !== undefined) {
        positioningAnswear = positioningResult;
        positioningBd = "|/|" + positioningAnswear;
      } else if (
        positioningAnswear !== "" &&
        positioningAnswear !== undefined
      ) {
        positioningBd = "|/|" + positioningAnswear;
      } else {
        positioningBd = "";
      }

      var positioning_howBd;
      if (positioning_howResult !== "" && positioning_howResult !== undefined) {
        positioning_howAnswear = positioning_howResult;
        positioning_howBd = "|/|" + positioning_howAnswear;
      } else if (
        positioning_howAnswear !== "" &&
        positioning_howAnswear !== undefined
      ) {
        positioning_howBd = "|/|" + positioning_howAnswear;
      } else {
        positioning_howBd = "";
      }

      var employeesBd;
      if (employeesResult !== "" && employeesResult !== undefined) {
        employeesAnswear = employeesResult;
        employeesBd = "|/|" + employeesAnswear;
      } else if (employeesAnswear !== "" && employeesAnswear !== undefined) {
        employeesBd = "|/|" + employeesAnswear;
      } else {
        employeesBd = "";
      }

      var timingBd;
      if (timingResult !== "" && timingResult !== undefined) {
        timingAnswear = timingResult;
        timingBd = "|/|" + timingAnswear;
      } else if (timingAnswear !== "" && timingAnswear !== undefined) {
        timingBd = "|/|" + timingAnswear;
      } else {
        timingBd = "";
      }

      var you_doBd;
      if (you_doResult !== "" && you_doResult !== undefined) {
        you_doAnswear = you_doResult;
        you_doBd = "|/|" + you_doAnswear;
      } else if (you_doAnswear !== "" && you_doAnswear !== undefined) {
        you_doBd = "|/|" + you_doAnswear;
      } else {
        you_doBd = "";
      }

      var competitors_sitesBd;
      if (
        competitors_sitesResult !== "" &&
        competitors_sitesResult !== undefined
      ) {
        competitors_sitesAnswear = competitors_sitesResult;
        competitors_sitesBd = "|/|" + competitors_sitesAnswear;
      } else if (
        competitors_sitesAnswear !== "" &&
        competitors_sitesAnswear !== undefined
      ) {
        competitors_sitesBd = "|/|" + competitors_sitesAnswear;
      } else {
        competitors_sitesBd = "";
      }

      var target_audienceBd;
      if (target_audienceResult !== "" && target_audienceResult !== undefined) {
        target_audienceAnswear = target_audienceResult;
        target_audienceBd = "|/|" + target_audienceAnswear;
      } else if (
        target_audienceAnswear !== "" &&
        target_audienceAnswear !== undefined
      ) {
        target_audienceBd = "|/|" + target_audienceAnswear;
      } else {
        target_audienceBd = "";
      }

      var whatBd;
      if (whatResult !== "" && whatResult !== undefined) {
        whatAnswear = whatResult;
        whatBd = "|/|" + whatAnswear;
      } else if (whatAnswear !== "" && whatAnswear !== undefined) {
        whatBd = "|/|" + whatAnswear;
      } else {
        whatBd = "";
      }

      var what_auditBd;
      if (what_auditResult !== "" && what_auditResult !== undefined) {
        what_auditAnswear = what_auditResult;
        what_auditBd = "|/|" + what_auditAnswear;
      } else if (what_auditAnswear !== "" && what_auditAnswear !== undefined) {
        what_auditBd = "|/|" + what_auditAnswear;
      } else {
        what_auditBd = "";
      }

      var howBd;
      if (howResult !== "" && howResult !== undefined) {
        howAnswear = howResult;
        howBd = "|/|" + howAnswear;
      } else if (howAnswear !== "" && howAnswear !== undefined) {
        howBd = "|/|" + howAnswear;
      } else {
        howBd = "";
      }

      var whyBd;
      if (whyResult !== "" && whyResult !== undefined) {
        whyAnswear = whyResult;
        whyBd = "|/|" + whyAnswear;
      } else if (whyAnswear !== "" && whyAnswear !== undefined) {
        whyBd = "|/|" + whyAnswear;
      } else {
        whyBd = "";
      }

      var positioning_textBd;
      if (
        positioning_textResult !== "" &&
        positioning_textResult !== undefined
      ) {
        positioning_textAnswear = positioning_textResult;
        positioning_textBd = "|/|" + positioning_textAnswear;
      } else if (
        positioning_textAnswear !== "" &&
        positioning_textAnswear !== undefined
      ) {
        positioning_textBd = "|/|" + positioning_textAnswear;
      } else {
        positioning_textBd = "";
      }

      var visionBd;
      if (visionResult !== "" && visionResult !== undefined) {
        visionAnswear = visionResult;
        visionBd = "|/|" + visionAnswear;
      } else if (visionAnswear !== "" && visionAnswear !== undefined) {
        visionBd = "|/|" + visionAnswear;
      } else {
        visionBd = "";
      }

      var positioning_whyBd;
      if (positioning_whyResult !== "" && positioning_whyResult !== undefined) {
        positioning_whyAnswear = positioning_whyResult;
        positioning_whyBd = "|/|" + positioning_whyAnswear;
      } else if (
        positioning_whyAnswear !== "" &&
        positioning_whyAnswear !== undefined
      ) {
        positioning_whyBd = "|/|" + positioning_whyAnswear;
      } else {
        positioning_whyBd = "";
      }

      var values_listBd;
      if (values_listResult !== "" && values_listResult !== undefined) {
        values_listAnswear = values_listResult;
        values_listBd = "|/|" + values_listAnswear;
      } else if (
        values_listAnswear !== "" &&
        values_listAnswear !== undefined
      ) {
        values_listBd = "|/|" + values_listAnswear;
      } else {
        values_listBd = "";
      }

      var strategyBd;
      if (strategyResult !== "" && strategyResult !== undefined) {
        strategyAnswear = strategyResult;
        strategyBd = "|/|" + strategyAnswear;
      } else if (strategyAnswear !== "" && strategyAnswear !== undefined) {
        strategyBd = "|/|" + strategyAnswear;
      } else {
        strategyBd = "";
      }

      var archetypeBd;
      if (archetypeResult !== "" && archetypeResult !== undefined) {
        archetypeAnswear = archetypeResult;
        archetypeBd = "|/|" + archetypeAnswear;
      } else if (archetypeAnswear !== "" && archetypeAnswear !== undefined) {
        archetypeBd = "|/|" + archetypeAnswear;
      } else {
        archetypeBd = "";
      }

      var archetype_textareaBd;
      if (
        archetype_textareaResult !== "" &&
        archetype_textareaResult !== undefined
      ) {
        archetype_textareaAnswear = archetype_textareaResult;
        archetype_textareaBd = "|/|" + archetype_textareaAnswear;
      } else if (
        archetype_textareaAnswear !== "" &&
        archetype_textareaAnswear !== undefined
      ) {
        archetype_textareaBd = "|/|" + archetype_textareaAnswear;
      } else {
        archetype_textareaBd = "";
      }

      var emotional_characteristicsBd;
      if (
        emotional_characteristicsResult !== "" &&
        emotional_characteristicsResult !== undefined
      ) {
        emotional_characteristicsAnswear = emotional_characteristicsResult;
        emotional_characteristicsBd = "|/|" + emotional_characteristicsAnswear;
      } else if (
        emotional_characteristicsAnswear !== "" &&
        emotional_characteristicsAnswear !== undefined
      ) {
        emotional_characteristicsBd = "|/|" + emotional_characteristicsAnswear;
      } else {
        emotional_characteristicsBd = "";
      }

      var positioning_textareaBd;
      if (
        positioning_textareaResult !== "" &&
        positioning_textareaResult !== undefined
      ) {
        positioning_textareaAnswear = positioning_textareaResult;
        positioning_textareaBd = "|/|" + positioning_textareaAnswear;
      } else if (
        positioning_textareaAnswear !== "" &&
        positioning_textareaAnswear !== undefined
      ) {
        positioning_textareaBd = "|/|" + positioning_textareaAnswear;
      } else {
        positioning_textareaBd = "";
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

      var retention_monthBd;
      if (retention_monthResult !== "" && retention_monthResult !== undefined) {
        retention_monthAnswear = retention_monthResult;
        retention_monthBd = "|/|" + retention_monthAnswear;
      } else if (
        retention_monthAnswear !== "" &&
        retention_monthAnswear !== undefined
      ) {
        retention_monthBd = "|/|" + retention_monthAnswear;
      } else {
        retention_monthBd = "";
      }

      var priceBd;
      if (priceResult !== "" && priceResult !== undefined) {
        priceAnswear = priceResult;
        priceBd = "|/|" + priceAnswear;
      } else if (priceAnswear !== "" && priceAnswear !== undefined) {
        priceBd = "|/|" + priceAnswear;
      } else {
        priceBd = "";
      }

      var retention_textareaBd;
      if (
        retention_textareaResult !== "" &&
        retention_textareaResult !== undefined
      ) {
        retention_textareaAnswear = retention_textareaResult;
        retention_textareaBd = "|/|" + retention_textareaAnswear;
      } else if (
        retention_textareaAnswear !== "" &&
        retention_textareaAnswear !== undefined
      ) {
        retention_textareaBd = "|/|" + retention_textareaAnswear;
      } else {
        retention_textareaBd = "";
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
          importantBd +
          focusBd +
          pricingBd +
          pricing_strategyBd +
          competitors_pricesBd +
          ab_pricingBd +
          pricing_hypothesisBd +
          pricing_rangeBd +
          pricing_calcBd +
          ab_resultsBd +
          ab_results_moreBd +
          starTab1Bd;
      } else if (tab === "tab2") {
        var dataTab2 =
          countProgressTab2 +
          positioningBd +
          positioning_howBd +
          employeesBd +
          timingBd +
          you_doBd +
          competitors_sitesBd +
          target_audienceBd +
          whatBd +
          what_auditBd +
          howBd +
          whyBd +
          positioning_textBd +
          visionBd +
          positioning_whyBd +
          values_listBd +
          strategyBd +
          archetypeBd +
          archetype_textareaBd +
          emotional_characteristicsBd +
          positioning_textareaBd +
          starTab2Bd;
      } else if (tab === "tab3") {
        var dataTab3 =
          countProgressTab3 +
          retention_monthBd +
          priceBd +
          retention_textareaBd +
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

    function formTheory(tab1theoryVal, tab2theoryVal, tab3theoryVal) {
      var data2;
      if (tabs === "tab1") {
        data2 = {
          collection_id: "6517f3b8afa18ec4281d283c",
          user_id: fragments[4],
          tab1theory: tab1theoryVal
        };
      } else if (tabs === "tab2") {
        data2 = {
          collection_id: "6517f3b8afa18ec4281d283c",
          user_id: fragments[4],
          tab2theory: tab2theoryVal
        };
      } else if (tabs === "tab3") {
        data2 = {
          collection_id: "6517f3b8afa18ec4281d283c",
          user_id: fragments[4],
          tab3theory: tab3theoryVal
        };
      }
      console.log(data2);
      fetch("https://uni380-ua.onrender.com/lesson-info", {
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
