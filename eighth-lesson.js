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
const tab3BD = document.getElementById("tab3BD");
var tab3BDVal = tab3BD.textContent;
tab3BDVal = tab3BDVal.split("|/|");
const tab4BD = document.getElementById("tab4BD");
var tab4BDVal = tab4BD.textContent;
tab4BDVal = tab4BDVal.split("|/|");

var countProgressTab1 = tab1BDVal[0];
var delegate_noAnswear = tab1BDVal[1];
var delegate_yesAnswear = tab1BDVal[2];
var calendarAnswear = tab1BDVal[3];
var meeting_formatAnswear = tab1BDVal[4];
var meeting_noAnswear = tab1BDVal[5];
var starAnswearTab1 = tab1BDVal[6];

var countProgressTab2 = tab2BDVal[0];
var faultAnswear = tab2BDVal[1];
var aidAnswear = tab2BDVal[2];
var designer_feedbackAnswear = tab2BDVal[3];
var nat_speechAnswear = tab2BDVal[4];
var starAnswearTab2 = tab2BDVal[5];

var countProgressTab3 = tab3BDVal[0];
var meeting_not_requiredAnswear = tab3BDVal[1];
var planing_meetingAnswear = tab3BDVal[2];
var motivation_problemsAnswear = tab3BDVal[3];
var burnout_indicatorsAnswear = tab3BDVal[4];
var cause_of_burnoutAnswear = tab3BDVal[5];
var motivationAnswear = tab3BDVal[6];
var motivation_moneyAnswear = tab3BDVal[7];
var motivation_growthAnswear = tab3BDVal[8];
var motivation_statusAnswear = tab3BDVal[9];
var motivation_powerAnswear = tab3BDVal[10];
var starAnswearTab3 = tab3BDVal[11];

var countProgressTab4 = tab4BDVal[0];
var teamAnswear = tab4BDVal[1];
var aarrrAnswear = tab4BDVal[2];
var middleAnswear = tab4BDVal[3];
var starAnswearTab4 = tab4BDVal[4];

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
create_lesson("653baae8a73b64de22ff788b", user_email, fragments[4]);

if (countProgressTab1 > 17) {
  availableLinks("eighthl_tab2");
  activetab("eighthl_tab2", "tab2");
}
if (countProgressTab2 > 20) {
  availableLinks("eighthl_tab3");
  activetab("eighthl_tab3", "tab3");
}
if (countProgressTab3 > 25) {
  availableLinks("eighthl_tab4");
  activetab("eighthl_tab4", "tab4");
}

function radioCheck(blopElement) {
  var radio = blopElement.querySelector('input[type="radio"]:checked');
  if (radio) {
    var value = radio.value;
    var radioAnswer = blopElement.nextElementSibling.querySelector("." + value);
    radioAnswer.classList.add("answer_visible");
  }
}

// function delegate_noCheck() {
//   var delegate_noInfo = document.getElementById("delegate_no");
//   var delegate_noForm = delegate_noInfo.querySelector("form");
//   var delegate_noElements = delegate_noForm.querySelectorAll(".check_input");

//   var delegate_noFirst = delegate_noElements[0].querySelector(
//     'input[type="checkbox"]'
//   );
//   var delegate_noSecond = delegate_noElements[1].querySelector(
//     'input[type="checkbox"]'
//   );
//   var delegate_noThird = delegate_noElements[2].querySelector(
//     'input[type="checkbox"]'
//   );
//   var delegate_noFourth = delegate_noElements[3].querySelector(
//     'input[type="checkbox"]'
//   );
//   var delegate_noFiveth = delegate_noElements[4].querySelector(
//     'input[type="checkbox"]'
//   );
//   var delegate_noSixth = delegate_noElements[5].querySelector(
//     'input[type="checkbox"]'
//   );

//   if (
//     !delegate_noFirst.checked &&
//     delegate_noSecond.checked &&
//     delegate_noThird.checked &&
//     !delegate_noFourth.checked &&
//     delegate_noFiveth.checked &&
//     !delegate_noSixth.checked
//   ) {
//     delegate_noInfo.nextElementSibling
//       .querySelector(".no")
//       .classList.add("hide");
//     delegate_noInfo.nextElementSibling
//       .querySelector(".yes")
//       .classList.remove("hide");
//   } else {
//     delegate_noInfo.nextElementSibling
//       .querySelector(".no")
//       .classList.remove("hide");
//     delegate_noInfo.nextElementSibling
//       .querySelector(".yes")
//       .classList.add("hide");
//   }
// }

function delegate_yesCheck() {
  var delegate_yesInfo = document.getElementById("delegate_yes");
  var delegate_yesForm = delegate_yesInfo.querySelector("form");
  var delegate_yesElements = delegate_yesForm.querySelectorAll(".check_input");

  var delegate_yesFirst = delegate_yesElements[0].querySelector(
    'input[type="checkbox"]',
  );
  var delegate_yesSecond = delegate_yesElements[1].querySelector(
    'input[type="checkbox"]',
  );
  var delegate_yesThird = delegate_yesElements[2].querySelector(
    'input[type="checkbox"]',
  );
  var delegate_yesFourth = delegate_yesElements[3].querySelector(
    'input[type="checkbox"]',
  );
  var delegate_yesFiveth = delegate_yesElements[4].querySelector(
    'input[type="checkbox"]',
  );
  var delegate_yesSixth = delegate_yesElements[5].querySelector(
    'input[type="checkbox"]',
  );

  if (
    delegate_yesFirst.checked &&
    delegate_yesSecond.checked &&
    !delegate_yesThird.checked &&
    delegate_yesFourth.checked &&
    delegate_yesFiveth.checked &&
    !delegate_yesSixth.checked
  ) {
    delegate_yesInfo.nextElementSibling
      .querySelector(".no")
      .classList.add("hide");
    delegate_yesInfo.nextElementSibling
      .querySelector(".yes")
      .classList.remove("hide");
  } else {
    delegate_yesInfo.nextElementSibling
      .querySelector(".no")
      .classList.remove("hide");
    delegate_yesInfo.nextElementSibling
      .querySelector(".yes")
      .classList.add("hide");
  }
}

// function meeting_formatCheck() {
//   var meeting_formatInfo = document.getElementById("meeting_format");
//   var meeting_formatForm = meeting_formatInfo.querySelector("form");
//   var meeting_formatElements = meeting_formatForm.querySelectorAll(
//     ".check_input"
//   );

//   var meeting_formatFirst = meeting_formatElements[0].querySelector(
//     'input[type="checkbox"]'
//   );
//   var meeting_formatSecond = meeting_formatElements[1].querySelector(
//     'input[type="checkbox"]'
//   );
//   var meeting_formatThird = meeting_formatElements[2].querySelector(
//     'input[type="checkbox"]'
//   );
//   var meeting_formatFourth = meeting_formatElements[3].querySelector(
//     'input[type="checkbox"]'
//   );
//   var meeting_formatFiveth = meeting_formatElements[4].querySelector(
//     'input[type="checkbox"]'
//   );
//   var meeting_formatSixth = meeting_formatElements[5].querySelector(
//     'input[type="checkbox"]'
//   );
//   var meeting_formatSeventh = meeting_formatElements[6].querySelector(
//     'input[type="checkbox"]'
//   );
//   var meeting_formatEighth = meeting_formatElements[7].querySelector(
//     'input[type="checkbox"]'
//   );

//   if (
//     meeting_formatFirst.checked &&
//     meeting_formatSecond.checked &&
//     !meeting_formatThird.checked &&
//     !meeting_formatFourth.checked &&
//     meeting_formatFiveth.checked &&
//     !meeting_formatSixth.checked &&
//     meeting_formatSeventh.checked &&
//     !meeting_formatEighth.checked
//   ) {
//     meeting_formatInfo.nextElementSibling
//       .querySelector(".no")
//       .classList.add("hide");
//     meeting_formatInfo.nextElementSibling
//       .querySelector(".yes")
//       .classList.remove("hide");
//   } else {
//     meeting_formatInfo.nextElementSibling
//       .querySelector(".no")
//       .classList.remove("hide");
//     meeting_formatInfo.nextElementSibling
//       .querySelector(".yes")
//       .classList.add("hide");
//   }
// }

function planing_meetingCheck() {
  var planing_meetingInfo = document.getElementById("planing_meeting");
  var planing_meetingForm = planing_meetingInfo.querySelector("form");
  var planing_meetingElements =
    planing_meetingForm.querySelectorAll(".check_input");

  var planing_meetingFirst = planing_meetingElements[0].querySelector(
    'input[type="checkbox"]',
  );
  var planing_meetingSecond = planing_meetingElements[1].querySelector(
    'input[type="checkbox"]',
  );
  var planing_meetingThird = planing_meetingElements[2].querySelector(
    'input[type="checkbox"]',
  );
  var planing_meetingFourth = planing_meetingElements[3].querySelector(
    'input[type="checkbox"]',
  );
  var planing_meetingFiveth = planing_meetingElements[4].querySelector(
    'input[type="checkbox"]',
  );

  if (
    planing_meetingFirst.checked &&
    !planing_meetingSecond.checked &&
    planing_meetingThird.checked &&
    !planing_meetingFourth.checked &&
    !planing_meetingFiveth.checked
  ) {
    planing_meetingInfo.nextElementSibling
      .querySelector(".no")
      .classList.add("hide");
    planing_meetingInfo.nextElementSibling
      .querySelector(".maybe")
      .classList.add("hide");
    planing_meetingInfo.nextElementSibling
      .querySelector(".yes")
      .classList.remove("hide");
  } else if (
    !planing_meetingFirst.checked &&
    planing_meetingSecond.checked &&
    !planing_meetingThird.checked &&
    planing_meetingFourth.checked &&
    planing_meetingFiveth.checked
  ) {
    planing_meetingInfo.nextElementSibling
      .querySelector(".no")
      .classList.remove("hide");
    planing_meetingInfo.nextElementSibling
      .querySelector(".maybe")
      .classList.add("hide");
    planing_meetingInfo.nextElementSibling
      .querySelector(".yes")
      .classList.add("hide");
  } else {
    planing_meetingInfo.nextElementSibling
      .querySelector(".no")
      .classList.add("hide");
    planing_meetingInfo.nextElementSibling
      .querySelector(".maybe")
      .classList.remove("hide");
    planing_meetingInfo.nextElementSibling
      .querySelector(".yes")
      .classList.add("hide");
  }
}

function burnout_indicatorsCheck() {
  var burnout_indicatorsInfo = document.getElementById("burnout_indicators");
  var burnout_indicatorsForm = burnout_indicatorsInfo.querySelector("form");
  var burnout_indicatorsElements =
    burnout_indicatorsForm.querySelectorAll(".check_input");

  var burnout_indicatorsFirst = burnout_indicatorsElements[0].querySelector(
    'input[type="checkbox"]',
  );
  var burnout_indicatorsSecond = burnout_indicatorsElements[1].querySelector(
    'input[type="checkbox"]',
  );
  var burnout_indicatorsThird = burnout_indicatorsElements[2].querySelector(
    'input[type="checkbox"]',
  );
  var burnout_indicatorsFourth = burnout_indicatorsElements[3].querySelector(
    'input[type="checkbox"]',
  );
  var burnout_indicatorsFiveth = burnout_indicatorsElements[4].querySelector(
    'input[type="checkbox"]',
  );

  if (
    burnout_indicatorsFirst.checked &&
    !burnout_indicatorsSecond.checked &&
    !burnout_indicatorsThird.checked &&
    burnout_indicatorsFourth.checked &&
    burnout_indicatorsFiveth.checked
  ) {
    burnout_indicatorsInfo.nextElementSibling
      .querySelector(".no")
      .classList.add("hide");
    burnout_indicatorsInfo.nextElementSibling
      .querySelector(".yes")
      .classList.remove("hide");
  } else {
    burnout_indicatorsInfo.nextElementSibling
      .querySelector(".no")
      .classList.remove("hide");
    burnout_indicatorsInfo.nextElementSibling
      .querySelector(".yes")
      .classList.add("hide");
  }
}

function motivationCheck() {
  var motivationInfo = document.getElementById("motivation");
  var motivationForm = motivationInfo.querySelector("form");
  var motivationElements = motivationForm.querySelectorAll(".check_input");

  var motivationFirst = motivationElements[0].querySelector(
    'input[type="checkbox"]',
  );
  var motivationSecond = motivationElements[1].querySelector(
    'input[type="checkbox"]',
  );
  var motivationThird = motivationElements[2].querySelector(
    'input[type="checkbox"]',
  );
  var motivationFourth = motivationElements[3].querySelector(
    'input[type="checkbox"]',
  );
  var motivationFiveth = motivationElements[4].querySelector(
    'input[type="checkbox"]',
  );
  var motivationSixth = motivationElements[5].querySelector(
    'input[type="checkbox"]',
  );

  if (
    !motivationFirst.checked &&
    motivationSecond.checked &&
    motivationThird.checked &&
    !motivationFourth.checked &&
    motivationFiveth.checked &&
    motivationSixth.checked
  ) {
    motivationInfo.nextElementSibling
      .querySelector(".no")
      .classList.add("hide");
    motivationInfo.nextElementSibling
      .querySelector(".yes")
      .classList.remove("hide");
  } else {
    motivationInfo.nextElementSibling
      .querySelector(".no")
      .classList.remove("hide");
    motivationInfo.nextElementSibling
      .querySelector(".yes")
      .classList.add("hide");
  }
}

function motivation_statusCheck() {
  var motivation_statusInfo = document.getElementById("motivation_status");
  var motivation_statusForm = motivation_statusInfo.querySelector("form");
  var motivation_statusElements =
    motivation_statusForm.querySelectorAll(".check_input");

  var motivation_statusFirst = motivation_statusElements[0].querySelector(
    'input[type="checkbox"]',
  );
  var motivation_statusSecond = motivation_statusElements[1].querySelector(
    'input[type="checkbox"]',
  );
  var motivation_statusThird = motivation_statusElements[2].querySelector(
    'input[type="checkbox"]',
  );
  var motivation_statusFourth = motivation_statusElements[3].querySelector(
    'input[type="checkbox"]',
  );

  if (
    motivation_statusFirst.checked &&
    !motivation_statusSecond.checked &&
    !motivation_statusThird.checked &&
    motivation_statusFourth.checked
  ) {
    motivation_statusInfo.nextElementSibling
      .querySelector(".no")
      .classList.add("hide");
    motivation_statusInfo.nextElementSibling
      .querySelector(".yes")
      .classList.remove("hide");
  } else {
    motivation_statusInfo.nextElementSibling
      .querySelector(".no")
      .classList.remove("hide");
    motivation_statusInfo.nextElementSibling
      .querySelector(".yes")
      .classList.add("hide");
  }
}

function motivation_powerCheck() {
  var motivation_powerInfo = document.getElementById("motivation_power");
  var motivation_powerForm = motivation_powerInfo.querySelector("form");
  var motivation_powerElements =
    motivation_powerForm.querySelectorAll(".check_input");

  var motivation_powerFirst = motivation_powerElements[0].querySelector(
    'input[type="checkbox"]',
  );
  var motivation_powerSecond = motivation_powerElements[1].querySelector(
    'input[type="checkbox"]',
  );
  var motivation_powerThird = motivation_powerElements[2].querySelector(
    'input[type="checkbox"]',
  );
  var motivation_powerFourth = motivation_powerElements[3].querySelector(
    'input[type="checkbox"]',
  );
  var motivation_powerFiveth = motivation_powerElements[4].querySelector(
    'input[type="checkbox"]',
  );

  if (
    !motivation_powerFirst.checked &&
    motivation_powerSecond.checked &&
    motivation_powerThird.checked &&
    motivation_powerFourth.checked &&
    !motivation_powerFiveth.checked
  ) {
    motivation_powerInfo.nextElementSibling
      .querySelector(".no")
      .classList.add("hide");
    motivation_powerInfo.nextElementSibling
      .querySelector(".yes")
      .classList.remove("hide");
  } else {
    motivation_powerInfo.nextElementSibling
      .querySelector(".no")
      .classList.remove("hide");
    motivation_powerInfo.nextElementSibling
      .querySelector(".yes")
      .classList.add("hide");
  }
}

function teamCheck() {
  var teamInfo = document.getElementById("team");
  var teamForm = teamInfo.querySelector("form");
  var teamElements = teamForm.querySelectorAll(".check_input");

  var teamFirst = teamElements[0].querySelector('input[type="checkbox"]');
  var teamSecond = teamElements[1].querySelector('input[type="checkbox"]');
  var teamThird = teamElements[2].querySelector('input[type="checkbox"]');
  var teamFourth = teamElements[3].querySelector('input[type="checkbox"]');
  var teamFiveth = teamElements[4].querySelector('input[type="checkbox"]');
  var teamSixth = teamElements[5].querySelector('input[type="checkbox"]');
  var teamSeventh = teamElements[6].querySelector('input[type="checkbox"]');
  var teamEighth = teamElements[7].querySelector('input[type="checkbox"]');

  if (
    teamFirst.checked &&
    teamSecond.checked &&
    teamThird.checked &&
    teamFourth.checked &&
    !teamFiveth.checked &&
    teamSixth.checked &&
    teamSeventh.checked &&
    teamEighth.checked
  ) {
    teamInfo.nextElementSibling.querySelector(".no").classList.add("hide");
    teamInfo.nextElementSibling.querySelector(".yes").classList.remove("hide");
  } else {
    teamInfo.nextElementSibling.querySelector(".no").classList.remove("hide");
    teamInfo.nextElementSibling.querySelector(".yes").classList.add("hide");
  }
}

function aarrrCheck() {
  var aarrrInfo = document.getElementById("aarrr");
  var aarrrForm = aarrrInfo.querySelector("form");
  var aarrrElements = aarrrForm.querySelectorAll(".check_input");

  var aarrrFirst = aarrrElements[0].querySelector('input[type="checkbox"]');
  var aarrrSecond = aarrrElements[1].querySelector('input[type="checkbox"]');
  var aarrrThird = aarrrElements[2].querySelector('input[type="checkbox"]');
  var aarrrFourth = aarrrElements[3].querySelector('input[type="checkbox"]');
  var aarrrFiveth = aarrrElements[4].querySelector('input[type="checkbox"]');
  var aarrrSixth = aarrrElements[5].querySelector('input[type="checkbox"]');
  var aarrrSeventh = aarrrElements[6].querySelector('input[type="checkbox"]');

  if (
    aarrrFirst.checked &&
    !aarrrSecond.checked &&
    !aarrrThird.checked &&
    aarrrFourth.checked &&
    aarrrFiveth.checked &&
    aarrrSixth.checked &&
    !aarrrSeventh.checked
  ) {
    aarrrInfo.nextElementSibling.querySelector(".no").classList.add("hide");
    aarrrInfo.nextElementSibling.querySelector(".yes").classList.remove("hide");
  } else {
    aarrrInfo.nextElementSibling.querySelector(".no").classList.remove("hide");
    aarrrInfo.nextElementSibling.querySelector(".yes").classList.add("hide");
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
    // if (block && block.id === "delegate_no") {
    //   delegate_noCheck();
    // } else
    if (block && block.id === "delegate_yes") {
      delegate_yesCheck();
    }
    // else if (block && block.id === "meeting_format") {
    //   meeting_formatCheck();
    // }
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

  if (delegate_noAnswear !== "" && delegate_noAnswear !== undefined) {
    const delegate_noTask = document.getElementById("delegate_no");
    checkboxGetInfo(delegate_noTask, delegate_noAnswear);
  }
  if (delegate_yesAnswear !== "" && delegate_yesAnswear !== undefined) {
    const delegate_yesTask = document.getElementById("delegate_yes");
    checkboxGetInfo(delegate_yesTask, delegate_yesAnswear);
  }
  if (calendarAnswear !== "" && calendarAnswear !== undefined) {
    const calendarTask = document.getElementById("calendar");
    textareaGethInfo(calendarTask, calendarAnswear);
  }
  if (meeting_formatAnswear !== "" && meeting_formatAnswear !== undefined) {
    const meeting_formatTask = document.getElementById("meeting_format");
    checkboxGetInfo(meeting_formatTask, meeting_formatAnswear);
  }
  if (meeting_noAnswear !== "" && meeting_noAnswear !== undefined) {
    const meeting_noTask = document.getElementById("meeting_no");
    radioGetInfo(meeting_noTask, meeting_noAnswear);
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

  if (faultAnswear !== "" && faultAnswear !== undefined) {
    const faultTask = document.getElementById("fault");
    radioGetInfo(faultTask, faultAnswear);
  }
  if (aidAnswear !== "" && aidAnswear !== undefined) {
    const aidTask = document.getElementById("aid");
    radioGetInfo(aidTask, aidAnswear);
  }
  if (
    designer_feedbackAnswear !== "" &&
    designer_feedbackAnswear !== undefined
  ) {
    const designer_feedbackTask = document.getElementById("designer_feedback");
    radioGetInfo(designer_feedbackTask, designer_feedbackAnswear);
  }
  if (nat_speechAnswear !== "" && nat_speechAnswear !== undefined) {
    const nat_speechTask = document.getElementById("nat_speech");
    textareaGethInfo(nat_speechTask, nat_speechAnswear);
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

function tab3Progress(numberBlop) {
  if (numberBlop > 0 && numberBlop !== "" && numberBlop !== undefined) {
    document
      .querySelector("div[tabs='tab3'] .start_button")
      .classList.add("hideButton");
    var targetButton = document.querySelector(
      'div[tabs="tab3"] [numberBlop="' + numberBlop + '"]',
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
    if (block && block.id === "planing_meeting") {
      planing_meetingCheck();
    } else if (block && block.id === "burnout_indicators") {
      burnout_indicatorsCheck();
    } else if (block && block.id === "motivation") {
      motivationCheck();
    } else if (block && block.id === "motivation_status") {
      motivation_statusCheck();
    } else if (block && block.id === "motivation_power") {
      motivation_powerCheck();
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
  }

  if (
    meeting_not_requiredAnswear !== "" &&
    meeting_not_requiredAnswear !== undefined
  ) {
    const meeting_not_requiredTask = document.getElementById(
      "meeting_not_required",
    );
    radioGetInfo(meeting_not_requiredTask, meeting_not_requiredAnswear);
  }
  if (planing_meetingAnswear !== "" && planing_meetingAnswear !== undefined) {
    const planing_meetingTask = document.getElementById("planing_meeting");
    checkboxGetInfo(planing_meetingTask, planing_meetingAnswear);
  }
  if (
    motivation_problemsAnswear !== "" &&
    motivation_problemsAnswear !== undefined
  ) {
    const motivation_problemsTask = document.getElementById(
      "motivation_problems",
    );
    radioGetInfo(motivation_problemsTask, motivation_problemsAnswear);
  }
  if (
    burnout_indicatorsAnswear !== "" &&
    burnout_indicatorsAnswear !== undefined
  ) {
    const burnout_indicatorsTask =
      document.getElementById("burnout_indicators");
    checkboxGetInfo(burnout_indicatorsTask, burnout_indicatorsAnswear);
  }
  if (cause_of_burnoutAnswear !== "" && cause_of_burnoutAnswear !== undefined) {
    const cause_of_burnoutTask = document.getElementById("cause_of_burnout");
    radioGetInfo(cause_of_burnoutTask, cause_of_burnoutAnswear);
  }
  if (motivationAnswear !== "" && motivationAnswear !== undefined) {
    const motivationTask = document.getElementById("motivation");
    checkboxGetInfo(motivationTask, motivationAnswear);
  }
  if (motivation_moneyAnswear !== "" && motivation_moneyAnswear !== undefined) {
    const motivation_moneyTask = document.getElementById("motivation_money");
    radioGetInfo(motivation_moneyTask, motivation_moneyAnswear);
  }
  if (
    motivation_growthAnswear !== "" &&
    motivation_growthAnswear !== undefined
  ) {
    const motivation_growthTask = document.getElementById("motivation_growth");
    radioGetInfo(motivation_growthTask, motivation_growthAnswear);
  }
  if (
    motivation_statusAnswear !== "" &&
    motivation_statusAnswear !== undefined
  ) {
    const motivation_statusTask = document.getElementById("motivation_status");
    checkboxGetInfo(motivation_statusTask, motivation_statusAnswear);
  }
  if (motivation_powerAnswear !== "" && motivation_powerAnswear !== undefined) {
    const motivation_powerTask = document.getElementById("motivation_power");
    checkboxGetInfo(motivation_powerTask, motivation_powerAnswear);
  }

  if (starAnswearTab3 !== "" && starAnswearTab3 !== undefined) {
    starGetInfo(
      document.querySelector('div[tabs="tab3"] .star_blop'),
      starAnswearTab3,
    );
  }

  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
}

function tab4Progress(numberBlop) {
  if (numberBlop > 0 && numberBlop !== "" && numberBlop !== undefined) {
    document
      .querySelector("div[tabs='tab4'] .start_button")
      .classList.add("hideButton");
    var targetButton = document.querySelector(
      'div[tabs="tab4"] [numberBlop="' + numberBlop + '"]',
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
    if (block && block.id === "team") {
      teamCheck();
    } else if (block && block.id === "aarrr") {
      aarrrCheck();
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
  }

  if (teamAnswear !== "" && teamAnswear !== undefined) {
    const teamTask = document.getElementById("team");
    checkboxGetInfo(teamTask, teamAnswear);
  }
  if (aarrrAnswear !== "" && aarrrAnswear !== undefined) {
    const aarrrTask = document.getElementById("aarrr");
    checkboxGetInfo(aarrrTask, aarrrAnswear);
  }
  if (middleAnswear !== "" && middleAnswear !== undefined) {
    const middleTask = document.getElementById("middle");
    textareaGethInfo(middleTask, middleAnswear);
  }
  if (starAnswearTab4 !== "" && starAnswearTab4 !== undefined) {
    starGetInfo(
      document.querySelector('div[tabs="tab4"] .star_blop'),
      starAnswearTab4,
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
if (countProgressTab3 !== "" && countProgressTab3 !== undefined) {
  tab3Progress(countProgressTab3);
}
if (countProgressTab4 !== "" && countProgressTab4 !== undefined) {
  tab4Progress(countProgressTab4);
}

primalButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    var blopElement = button.closest(".blop");
    if (blopElement) {
      blopElement.classList.add("done_blop");

      radioCheck(blopElement);
      // delegate_noCheck();
      delegate_yesCheck();
      // meeting_formatCheck();
      planing_meetingCheck();
      burnout_indicatorsCheck();
      motivationCheck();
      motivation_statusCheck();
      motivation_powerCheck();
      teamCheck();
      aarrrCheck();

      blopElement.nextElementSibling.classList.add("next_visible");
      setTimeout(function () {
        blopElement.nextElementSibling.classList.add("blop_animate");
      }, 1);

      if (button.classList.contains("last_button")) {
        var ss = button.getAttribute("numberBlop");
        create_lesson("653baae8a73b64de22ff788b", user_email, fragments[4]);

        var parent = button.closest(".lesson_tab").getAttribute("tabs");

        if (ss > 17 && parent === "tab1") {
          availableLinks("eighthl_tab2");
        }
        if (ss > 20 && parent === "tab2") {
          availableLinks("eighthl_tab3");
        }
        if (ss > 25 && parent === "tab3") {
          availableLinks("eighthl_tab4");
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

    if (buttonWithAttr.closest("#delegate_no")) {
      const delegate_noTask = document.getElementById("delegate_no");
      var delegate_noResult = checkboxPushInfo(delegate_noTask);
    }
    if (buttonWithAttr.closest("#delegate_yes")) {
      const delegate_yesTask = document.getElementById("delegate_yes");
      var delegate_yesResult = checkboxPushInfo(delegate_yesTask);
    }
    if (buttonWithAttr.closest("#calendar")) {
      const calendarTask = document.getElementById("calendar");
      var calendarResult = textareaPushInfo(calendarTask);
    }
    if (buttonWithAttr.closest("#meeting_format")) {
      const meeting_formatTask = document.getElementById("meeting_format");
      var meeting_formatResult = checkboxPushInfo(meeting_formatTask);
    }
    if (buttonWithAttr.closest("#meeting_no")) {
      const meeting_noTask = document.getElementById("meeting_no");
      var meeting_noResult = radioPushInfo(meeting_noTask);
    }

    // ---------------

    if (buttonWithAttr.closest("#fault")) {
      const faultTask = document.getElementById("fault");
      var faultResult = radioPushInfo(faultTask);
    }
    if (buttonWithAttr.closest("#aid")) {
      const aidTask = document.getElementById("aid");
      var aidResult = radioPushInfo(aidTask);
    }
    if (buttonWithAttr.closest("#designer_feedback")) {
      const designer_feedbackTask =
        document.getElementById("designer_feedback");
      var designer_feedbackResult = radioPushInfo(designer_feedbackTask);
    }
    if (buttonWithAttr.closest("#nat_speech")) {
      const nat_speechTask = document.getElementById("nat_speech");
      var nat_speechResult = textareaPushInfo(nat_speechTask);
    }

    // ---------------

    if (buttonWithAttr.closest("#meeting_not_required")) {
      const meeting_not_requiredTask = document.getElementById(
        "meeting_not_required",
      );
      var meeting_not_requiredResult = radioPushInfo(meeting_not_requiredTask);
    }
    if (buttonWithAttr.closest("#planing_meeting")) {
      const planing_meetingTask = document.getElementById("planing_meeting");
      var planing_meetingResult = checkboxPushInfo(planing_meetingTask);
    }
    if (buttonWithAttr.closest("#motivation_problems")) {
      const motivation_problemsTask = document.getElementById(
        "motivation_problems",
      );
      var motivation_problemsResult = radioPushInfo(motivation_problemsTask);
    }
    if (buttonWithAttr.closest("#burnout_indicators")) {
      const burnout_indicatorsTask =
        document.getElementById("burnout_indicators");
      var burnout_indicatorsResult = checkboxPushInfo(burnout_indicatorsTask);
    }
    if (buttonWithAttr.closest("#cause_of_burnout")) {
      const cause_of_burnoutTask = document.getElementById("cause_of_burnout");
      var cause_of_burnoutResult = radioPushInfo(cause_of_burnoutTask);
    }
    if (buttonWithAttr.closest("#motivation")) {
      const motivationTask = document.getElementById("motivation");
      var motivationResult = checkboxPushInfo(motivationTask);
    }
    if (buttonWithAttr.closest("#motivation_money")) {
      const motivation_moneyTask = document.getElementById("motivation_money");
      var motivation_moneyResult = radioPushInfo(motivation_moneyTask);
    }
    if (buttonWithAttr.closest("#motivation_growth")) {
      const motivation_growthTask =
        document.getElementById("motivation_growth");
      var motivation_growthResult = radioPushInfo(motivation_growthTask);
    }
    if (buttonWithAttr.closest("#motivation_status")) {
      const motivation_statusTask =
        document.getElementById("motivation_status");
      var motivation_statusResult = checkboxPushInfo(motivation_statusTask);
    }
    if (buttonWithAttr.closest("#motivation_power")) {
      const motivation_powerTask = document.getElementById("motivation_power");
      var motivation_powerResult = checkboxPushInfo(motivation_powerTask);
    }

    // ---------------

    if (buttonWithAttr.closest("#team")) {
      const teamTask = document.getElementById("team");
      var teamResult = checkboxPushInfo(teamTask);
    }
    if (buttonWithAttr.closest("#aarrr")) {
      const aarrrTask = document.getElementById("aarrr");
      var aarrrResult = checkboxPushInfo(aarrrTask);
    }
    if (buttonWithAttr.closest("#middle")) {
      const middleTask = document.getElementById("middle");
      var middleResult = textareaPushInfo(middleTask);
    }

    // ---------------

    function formSubmit(dataTab1, dataTab2, dataTab3, dataTab4) {
      var data = {
        collection_id: "65326a3ca55b6cc596333e33",
        user_id: fragments[4],
        user_tab1: dataTab1,
        user_tab2: dataTab2,
        user_tab3: dataTab3,
        user_tab4: dataTab4,
      };
      // console.log(data);

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
        '.lesson_tab[tabs="' + tab + '"] input[type="radio"]',
      );
      var star = clickedButton.value;
      return star;
    }

    function dataPush() {
      var tab = collectionIdButtons();
      var star1 = "";
      var star2 = "";
      var star3 = "";
      var star4 = "";

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
      if (
        buttonWithAttr.closest(".lesson_tab[tabs='tab4'] .fs_starrating-1_item")
      ) {
        star4 = starButtons(tab);
      }

      countProgressTab1 = attributeValue;
      countProgressTab2 = attributeValue;
      countProgressTab3 = attributeValue;
      countProgressTab4 = attributeValue;

      var delegate_noBd;
      if (delegate_noResult !== "" && delegate_noResult !== undefined) {
        delegate_noAnswear = delegate_noResult;
        delegate_noBd = "|/|" + delegate_noAnswear;
      } else if (
        delegate_noAnswear !== "" &&
        delegate_noAnswear !== undefined
      ) {
        delegate_noBd = "|/|" + delegate_noAnswear;
      } else {
        delegate_noBd = "";
      }

      var delegate_yesBd;
      if (delegate_yesResult !== "" && delegate_yesResult !== undefined) {
        delegate_yesAnswear = delegate_yesResult;
        delegate_yesBd = "|/|" + delegate_yesAnswear;
      } else if (
        delegate_yesAnswear !== "" &&
        delegate_yesAnswear !== undefined
      ) {
        delegate_yesBd = "|/|" + delegate_yesAnswear;
      } else {
        delegate_yesBd = "";
      }

      var calendarBd;
      if (calendarResult !== "" && calendarResult !== undefined) {
        calendarAnswear = calendarResult;
        calendarBd = "|/|" + calendarAnswear;
      } else if (calendarAnswear !== "" && calendarAnswear !== undefined) {
        calendarBd = "|/|" + calendarAnswear;
      } else {
        calendarBd = "";
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

      var meeting_noBd;
      if (meeting_noResult !== "" && meeting_noResult !== undefined) {
        meeting_noAnswear = meeting_noResult;
        meeting_noBd = "|/|" + meeting_noAnswear;
      } else if (meeting_noAnswear !== "" && meeting_noAnswear !== undefined) {
        meeting_noBd = "|/|" + meeting_noAnswear;
      } else {
        meeting_noBd = "";
      }

      var faultBd;
      if (faultResult !== "" && faultResult !== undefined) {
        faultAnswear = faultResult;
        faultBd = "|/|" + faultAnswear;
      } else if (faultAnswear !== "" && faultAnswear !== undefined) {
        faultBd = "|/|" + faultAnswear;
      } else {
        faultBd = "";
      }

      var aidBd;
      if (aidResult !== "" && aidResult !== undefined) {
        aidAnswear = aidResult;
        aidBd = "|/|" + aidAnswear;
      } else if (aidAnswear !== "" && aidAnswear !== undefined) {
        aidBd = "|/|" + aidAnswear;
      } else {
        aidBd = "";
      }

      var designer_feedbackBd;
      if (
        designer_feedbackResult !== "" &&
        designer_feedbackResult !== undefined
      ) {
        designer_feedbackAnswear = designer_feedbackResult;
        designer_feedbackBd = "|/|" + designer_feedbackAnswear;
      } else if (
        designer_feedbackAnswear !== "" &&
        designer_feedbackAnswear !== undefined
      ) {
        designer_feedbackBd = "|/|" + designer_feedbackAnswear;
      } else {
        designer_feedbackBd = "";
      }

      var nat_speechBd;
      if (nat_speechResult !== "" && nat_speechResult !== undefined) {
        nat_speechAnswear = nat_speechResult;
        nat_speechBd = "|/|" + nat_speechAnswear;
      } else if (nat_speechAnswear !== "" && nat_speechAnswear !== undefined) {
        nat_speechBd = "|/|" + nat_speechAnswear;
      } else {
        nat_speechBd = "";
      }

      var meeting_not_requiredBd;
      if (
        meeting_not_requiredResult !== "" &&
        meeting_not_requiredResult !== undefined
      ) {
        meeting_not_requiredAnswear = meeting_not_requiredResult;
        meeting_not_requiredBd = "|/|" + meeting_not_requiredAnswear;
      } else if (
        meeting_not_requiredAnswear !== "" &&
        meeting_not_requiredAnswear !== undefined
      ) {
        meeting_not_requiredBd = "|/|" + meeting_not_requiredAnswear;
      } else {
        meeting_not_requiredBd = "";
      }

      var planning_meetingBd;
      if (planing_meetingResult !== "" && planing_meetingResult !== undefined) {
        planing_meetingAnswear = planing_meetingResult;
        planning_meetingBd = "|/|" + planing_meetingAnswear;
      } else if (
        planing_meetingAnswear !== "" &&
        planing_meetingAnswear !== undefined
      ) {
        planning_meetingBd = "|/|" + planing_meetingAnswear;
      } else {
        planning_meetingBd = "";
      }

      var motivation_problemsBd;
      if (
        motivation_problemsResult !== "" &&
        motivation_problemsResult !== undefined
      ) {
        motivation_problemsAnswear = motivation_problemsResult;
        motivation_problemsBd = "|/|" + motivation_problemsAnswear;
      } else if (
        motivation_problemsAnswear !== "" &&
        motivation_problemsAnswear !== undefined
      ) {
        motivation_problemsBd = "|/|" + motivation_problemsAnswear;
      } else {
        motivation_problemsBd = "";
      }

      var burnout_indicatorsBd;
      if (
        burnout_indicatorsResult !== "" &&
        burnout_indicatorsResult !== undefined
      ) {
        burnout_indicatorsAnswear = burnout_indicatorsResult;
        burnout_indicatorsBd = "|/|" + burnout_indicatorsAnswear;
      } else if (
        burnout_indicatorsAnswear !== "" &&
        burnout_indicatorsAnswear !== undefined
      ) {
        burnout_indicatorsBd = "|/|" + burnout_indicatorsAnswear;
      } else {
        burnout_indicatorsBd = "";
      }

      var cause_of_burnoutBd;
      if (
        cause_of_burnoutResult !== "" &&
        cause_of_burnoutResult !== undefined
      ) {
        cause_of_burnoutAnswear = cause_of_burnoutResult;
        cause_of_burnoutBd = "|/|" + cause_of_burnoutAnswear;
      } else if (
        cause_of_burnoutAnswear !== "" &&
        cause_of_burnoutAnswear !== undefined
      ) {
        cause_of_burnoutBd = "|/|" + cause_of_burnoutAnswear;
      } else {
        cause_of_burnoutBd = "";
      }

      var motivationBd;
      if (motivationResult !== "" && motivationResult !== undefined) {
        motivationAnswear = motivationResult;
        motivationBd = "|/|" + motivationAnswear;
      } else if (motivationAnswear !== "" && motivationAnswear !== undefined) {
        motivationBd = "|/|" + motivationAnswear;
      } else {
        motivationBd = "";
      }

      var motivation_moneyBd;
      if (
        motivation_moneyResult !== "" &&
        motivation_moneyResult !== undefined
      ) {
        motivation_moneyAnswear = motivation_moneyResult;
        motivation_moneyBd = "|/|" + motivation_moneyAnswear;
      } else if (
        motivation_moneyAnswear !== "" &&
        motivation_moneyAnswear !== undefined
      ) {
        motivation_moneyBd = "|/|" + motivation_moneyAnswear;
      } else {
        motivation_moneyBd = "";
      }

      var motivation_growthBd;
      if (
        motivation_growthResult !== "" &&
        motivation_growthResult !== undefined
      ) {
        motivation_growthAnswear = motivation_growthResult;
        motivation_growthBd = "|/|" + motivation_growthAnswear;
      } else if (
        motivation_growthAnswear !== "" &&
        motivation_growthAnswear !== undefined
      ) {
        motivation_growthBd = "|/|" + motivation_growthAnswear;
      } else {
        motivation_growthBd = "";
      }

      var motivation_statusBd;
      if (
        motivation_statusResult !== "" &&
        motivation_statusResult !== undefined
      ) {
        motivation_statusAnswear = motivation_statusResult;
        motivation_statusBd = "|/|" + motivation_statusAnswear;
      } else if (
        motivation_statusAnswear !== "" &&
        motivation_statusAnswear !== undefined
      ) {
        motivation_statusBd = "|/|" + motivation_statusAnswear;
      } else {
        motivation_statusBd = "";
      }

      var motivation_powerBd;
      if (
        motivation_powerResult !== "" &&
        motivation_powerResult !== undefined
      ) {
        motivation_powerAnswear = motivation_powerResult;
        motivation_powerBd = "|/|" + motivation_powerAnswear;
      } else if (
        motivation_powerAnswear !== "" &&
        motivation_powerAnswear !== undefined
      ) {
        motivation_powerBd = "|/|" + motivation_powerAnswear;
      } else {
        motivation_powerBd = "";
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

      var aarrrBd;
      if (aarrrResult !== "" && aarrrResult !== undefined) {
        aarrrAnswear = aarrrResult;
        aarrrBd = "|/|" + aarrrAnswear;
      } else if (aarrrAnswear !== "" && aarrrAnswear !== undefined) {
        aarrrBd = "|/|" + aarrrAnswear;
      } else {
        aarrrBd = "";
      }

      var middleBd;
      if (middleResult !== "" && middleResult !== undefined) {
        middleAnswear = middleResult;
        middleBd = "|/|" + middleAnswear;
      } else if (middleAnswear !== "" && middleAnswear !== undefined) {
        middleBd = "|/|" + middleAnswear;
      } else {
        middleBd = "";
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

      var starTab2Bd;
      if (star2 !== "" && star2 !== undefined) {
        starAnswearTab2 = star2;
        starTab2Bd = "|/|" + starAnswearTab2;
      } else if (starAnswearTab2 !== "" && starAnswearTab2 !== undefined) {
        starTab2Bd = "|/|" + starAnswearTab2;
      } else {
        starTab2Bd = "";
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

      var starTab4Bd;
      if (star4 !== "" && star4 !== undefined) {
        starAnswearTab4 = star4;
        starTab4Bd = "|/|" + starAnswearTab4;
      } else if (starAnswearTab4 !== "" && starAnswearTab4 !== undefined) {
        starTab4Bd = "|/|" + starAnswearTab4;
      } else {
        starTab4Bd = "";
      }

      if (tab === "tab1") {
        var dataTab1 =
          countProgressTab1 +
          delegate_noBd +
          delegate_yesBd +
          calendarBd +
          meeting_formatBd +
          meeting_noBd +
          starTab1Bd;
      } else if (tab === "tab2") {
        var dataTab2 =
          countProgressTab2 +
          faultBd +
          aidBd +
          designer_feedbackBd +
          nat_speechBd +
          starTab2Bd;
      } else if (tab === "tab3") {
        var dataTab3 =
          countProgressTab3 +
          meeting_not_requiredBd +
          planning_meetingBd +
          motivation_problemsBd +
          burnout_indicatorsBd +
          cause_of_burnoutBd +
          motivationBd +
          motivation_moneyBd +
          motivation_growthBd +
          motivation_statusBd +
          motivation_powerBd +
          starTab3Bd;
      } else if (tab === "tab4") {
        var dataTab4 =
          countProgressTab4 + teamBd + aarrrBd + middleBd + starTab4Bd;
      }
      formSubmit(dataTab1, dataTab2, dataTab3, dataTab4);
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

    function formTheory(
      tab1theoryVal,
      tab2theoryVal,
      tab3theoryVal,
      tab4theoryVal,
    ) {
      var data2;
      if (tabs === "tab1") {
        data2 = {
          collection_id: "65326a3ca55b6cc596333e33",
          user_id: fragments[4],
          tab1theory: tab1theoryVal,
        };
      } else if (tabs === "tab2") {
        data2 = {
          collection_id: "65326a3ca55b6cc596333e33",
          user_id: fragments[4],
          tab2theory: tab2theoryVal,
        };
      } else if (tabs === "tab3") {
        data2 = {
          collection_id: "65326a3ca55b6cc596333e33",
          user_id: fragments[4],
          tab3theory: tab3theoryVal,
        };
      } else if (tabs === "tab4") {
        data2 = {
          collection_id: "65326a3ca55b6cc596333e33",
          user_id: fragments[4],
          tab4theory: tab4theoryVal,
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
    } else if (tabs === "tab3") {
      var tab3theoryVal = theoryButton.getAttribute("theory");
    } else if (tabs === "tab4") {
      var tab4theoryVal = theoryButton.getAttribute("theory");
    }
    formTheory(tab1theoryVal, tab2theoryVal, tab3theoryVal, tab4theoryVal);
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
