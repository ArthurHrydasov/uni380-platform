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
const introBD = document.getElementById("introBD");
var introBDVal = introBD.textContent;
introBDVal = introBDVal.split("|/|");
const tab1BD = document.getElementById("tab1BD");
var tab1BDVal = tab1BD.textContent;
tab1BDVal = tab1BDVal.split("|/|");
const tab2BD = document.getElementById("tab2BD");
var tab2BDVal = tab2BD.textContent;
tab2BDVal = tab2BDVal.split("|/|");

var countProgress = introBDVal[0];
var reportAnswear = introBDVal[1];
var starAnswear = introBDVal[2];

var countProgressTab1 = tab1BDVal[0];
var profileAnswear = tab1BDVal[1];
var photoLiAnswear = tab1BDVal[2];
var imgAnswear = tab1BDVal[3];
var headingAnswear = tab1BDVal[4];
var bioAnswear = tab1BDVal[5];
var workInfoAnswear = tab1BDVal[6];
var imgProfileAnswear = tab1BDVal[7];
var positiveAnswear = tab1BDVal[8];
var teamAnswear = tab1BDVal[9];
var linkedInAnswear = tab1BDVal[10];
var aboutYouAnswear = tab1BDVal[11];
var aboutTimeAnswear = tab1BDVal[12];
var selfPresentationAnswear = tab1BDVal[13];
var failSituationAnswear = tab1BDVal[14];
var modelAnswear = tab1BDVal[15];
var starAnswearTab1 = tab1BDVal[16];

var countProgressTab2 = tab2BDVal[0];
var yearCoastAnswear = tab2BDVal[1];
var romiAnswear = tab2BDVal[2];
var reportMounthAnswear = tab2BDVal[3];
var presentationAnswear = tab2BDVal[4];
var successesAnswear = tab2BDVal[5];
var problemsAnswear = tab2BDVal[6];
var moneyAnswear = tab2BDVal[7];
var questionsAnswear = tab2BDVal[8];
var starAnswearTab2 = tab2BDVal[9];

function availableLinks(link) {
  document.getElementById(link).classList.add("available");
}
function activetab(link, tabsValue) {
  document.getElementById(link).classList.add("available");
  lessonTabs.forEach(function (tab) {
    // tab.style.display = "none";
    tab.classList.remove("active");
    tab.classList.add("noactive");
  });
  var matchingLessonTab = document.querySelector(
    '.lesson_tab[tabs="' + tabsValue + '"]'
  );

  if (matchingLessonTab) {
    // matchingLessonTab.style.display = "flex";
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
create_lesson("6517f3b8afa18ec4281d2807", user_email, fragments[4]);

if (countProgress > 4) {
  availableLinks("firstl_tab1");
  activetab("firstl_tab1", "tab1");
}
if (countProgressTab1 > 39) {
  availableLinks("firstl_tab2");
  activetab("firstl_tab2", "tab2");
}

function radioCheck(blopElement) {
  var radio = blopElement.querySelector('input[type="radio"]:checked');
  if (radio) {
    var value = radio.value;
    var radioAnswer = blopElement.nextElementSibling.querySelector("." + value);
    radioAnswer.classList.add("answer_visible");
  }
}

function reportCheck() {
  var reportInfo = document.getElementById("report_info_blop");
  var reportForm = reportInfo.querySelector("form");
  var reportElements = reportForm.querySelectorAll(".check_input");

  var reportFirst = reportElements[0].querySelector('input[type="checkbox"]');
  var reportSecond = reportElements[1].querySelector('input[type="checkbox"]');
  var reportThird = reportElements[2].querySelector('input[type="checkbox"]');
  var reportFourth = reportElements[3].querySelector('input[type="checkbox"]');
  var reportFiveth = reportElements[4].querySelector('input[type="checkbox"]');

  if (
    // ----- no ----- //
    reportFirst.checked
  ) {
    reportInfo.nextElementSibling.querySelector(".no").classList.remove("hide");
    reportInfo.nextElementSibling.querySelector(".yes").classList.add("hide");
    reportInfo.nextElementSibling.querySelector(".maybe").classList.add("hide");
  } else if (
    // ----- yes ----- //
    reportSecond.checked &&
    reportThird.checked &&
    reportFourth.checked &&
    reportFiveth.checked &&
    !reportFirst.checked
  ) {
    reportInfo.nextElementSibling
      .querySelector(".yes")
      .classList.remove("hide");
    reportInfo.nextElementSibling.querySelector(".maybe").classList.add("hide");
    reportInfo.nextElementSibling.querySelector(".no").classList.add("hide");
  } else {
    // ----- maybe ----- //
    reportInfo.nextElementSibling
      .querySelector(".maybe")
      .classList.remove("hide");
    reportInfo.nextElementSibling.querySelector(".yes").classList.add("hide");
    reportInfo.nextElementSibling.querySelector(".no").classList.add("hide");
  }
}

function profileCheck() {
  var profileInfo = document.getElementById("profile_info");
  var profileForm = profileInfo.querySelector("form");
  var profileElements = profileForm.querySelectorAll(".check_input");

  var profileFirst = profileElements[0].querySelector('input[type="checkbox"]');
  var profileSecond = profileElements[1].querySelector(
    'input[type="checkbox"]'
  );
  var profileThird = profileElements[2].querySelector('input[type="checkbox"]');
  var profileFourth = profileElements[3].querySelector(
    'input[type="checkbox"]'
  );
  var profileFives = profileElements[4].querySelector('input[type="checkbox"]');
  var profileSixth = profileElements[5].querySelector('input[type="checkbox"]');

  if (
    profileFirst.checked &&
    profileSecond.checked &&
    profileThird.checked &&
    profileFourth.checked &&
    profileFives.checked &&
    profileSixth.checked
  ) {
    profileInfo.nextElementSibling.querySelector(".no").classList.add("hide");
    profileInfo.nextElementSibling
      .querySelector(".yes")
      .classList.remove("hide");
  } else {
    profileInfo.nextElementSibling
      .querySelector(".no")
      .classList.remove("hide");
    profileInfo.nextElementSibling.querySelector(".yes").classList.add("hide");
  }
}

function workCheck() {
  var workInfoTask = document.getElementById("work_info_blop");
  var workForm = workInfoTask.querySelector("form");
  var workElements = workForm.querySelectorAll(".check_input");

  var workFirst = workElements[0].querySelector('input[type="checkbox"]');
  var workSecond = workElements[1].querySelector('input[type="checkbox"]');
  var workThird = workElements[2].querySelector('input[type="checkbox"]');
  var workFourth = workElements[3].querySelector('input[type="checkbox"]');

  if (
    workFirst.checked &&
    workSecond.checked &&
    workThird.checked &&
    !workFourth.checked
  ) {
    workInfoTask.nextElementSibling.querySelector(".no").classList.add("hide");
    workInfoTask.nextElementSibling
      .querySelector(".maybe")
      .classList.add("hide");
    workInfoTask.nextElementSibling
      .querySelector(".yes")
      .classList.remove("hide");
  } else if (
    !workFirst.checked &&
    !workSecond.checked &&
    !workThird.checked &&
    workFourth.checked
  ) {
    workInfoTask.nextElementSibling.querySelector(".yes").classList.add("hide");
    workInfoTask.nextElementSibling
      .querySelector(".maybe")
      .classList.add("hide");
    workInfoTask.nextElementSibling
      .querySelector(".no")
      .classList.remove("hide");
  } else {
    workInfoTask.nextElementSibling.querySelector(".yes").classList.add("hide");
    workInfoTask.nextElementSibling.querySelector(".no").classList.add("hide");
    workInfoTask.nextElementSibling
      .querySelector(".maybe")
      .classList.remove("hide");
  }
}

function positiveCheck() {
  var positiveAnswerTask = document.getElementById("positive_answer_blop");
  var positiveForm = positiveAnswerTask.querySelector("form");
  var positivelements = positiveForm.querySelectorAll(".check_input");
  var positiveFirst = positivelements[0].querySelector(
    'input[type="checkbox"]'
  );
  var positiveSecond = positivelements[1].querySelector(
    'input[type="checkbox"]'
  );
  var positiveThird = positivelements[2].querySelector(
    'input[type="checkbox"]'
  );
  var positiveFourth = positivelements[3].querySelector(
    'input[type="checkbox"]'
  );
  // var positiveFiveth = positivelements[4].querySelector(
  //   'input[type="checkbox"]'
  // );

  if (
    positiveFirst.checked &&
    positiveSecond.checked &&
    positiveThird.checked &&
    positiveFourth.checked
    // &&
    // positiveFiveth.checked
  ) {
    positiveAnswerTask.nextElementSibling
      .querySelector(".no")
      .classList.add("hide");
    positiveAnswerTask.nextElementSibling
      .querySelector(".yes")
      .classList.remove("hide");
  } else {
    positiveAnswerTask.nextElementSibling
      .querySelector(".yes")
      .classList.add("hide");
    positiveAnswerTask.nextElementSibling
      .querySelector(".no")
      .classList.remove("hide");
  }
}

function aboutYouCheck() {
  var aboutYouTask = document.getElementById("about_you_blop");
  var aboutYouForm = aboutYouTask.querySelector("form");
  var aboutYouElements = aboutYouForm.querySelectorAll(".check_input");
  var aboutYouFirst = aboutYouElements[0].querySelector(
    'input[type="checkbox"]'
  );
  var aboutYouSecond = aboutYouElements[1].querySelector(
    'input[type="checkbox"]'
  );
  var aboutYouThird = aboutYouElements[2].querySelector(
    'input[type="checkbox"]'
  );
  var aboutYouFourth = aboutYouElements[3].querySelector(
    'input[type="checkbox"]'
  );
  var aboutYouFive = aboutYouElements[4].querySelector(
    'input[type="checkbox"]'
  );
  var aboutYouSix = aboutYouElements[5].querySelector('input[type="checkbox"]');

  if (
    aboutYouThird.checked &&
    aboutYouFourth.checked &&
    aboutYouFive.checked &&
    !aboutYouFirst.checked &&
    !aboutYouSecond.checked &&
    !aboutYouSix.checked
  ) {
    aboutYouTask.nextElementSibling.querySelector(".no").classList.add("hide");
    aboutYouTask.nextElementSibling
      .querySelector(".maybe")
      .classList.add("hide");
    aboutYouTask.nextElementSibling
      .querySelector(".yes")
      .classList.remove("hide");
  } else if (
    !aboutYouThird.checked &&
    !aboutYouFourth.checked &&
    !aboutYouFive.checked &&
    aboutYouFirst.checked &&
    aboutYouSecond.checked &&
    aboutYouSix.checked
  ) {
    aboutYouTask.nextElementSibling.querySelector(".yes").classList.add("hide");
    aboutYouTask.nextElementSibling
      .querySelector(".maybe")
      .classList.add("hide");
    aboutYouTask.nextElementSibling
      .querySelector(".no")
      .classList.remove("hide");
  } else {
    aboutYouTask.nextElementSibling.querySelector(".yes").classList.add("hide");
    aboutYouTask.nextElementSibling.querySelector(".no").classList.add("hide");
    aboutYouTask.nextElementSibling
      .querySelector(".maybe")
      .classList.remove("hide");
  }
}

function problemsCheck() {
  var problemsTask = document.getElementById("problems_blop");
  var problemsForm = problemsTask.querySelector("form");
  var problemsElements = problemsForm.querySelectorAll(".check_input");
  var problemsFirst = problemsElements[0].querySelector(
    'input[type="checkbox"]'
  );
  var problemsSecond = problemsElements[1].querySelector(
    'input[type="checkbox"]'
  );
  var problemsThird = problemsElements[2].querySelector(
    'input[type="checkbox"]'
  );
  var problemsFourth = problemsElements[3].querySelector(
    'input[type="checkbox"]'
  );
  var problemsFiveth = problemsElements[4].querySelector(
    'input[type="checkbox"]'
  );

  if (
    problemsSecond.checked &&
    problemsThird.checked &&
    problemsFourth.checked &&
    !problemsFirst.checked &&
    !problemsFiveth.checked
  ) {
    problemsTask.nextElementSibling.querySelector(".no").classList.add("hide");
    problemsTask.nextElementSibling
      .querySelector(".maybe")
      .classList.add("hide");
    problemsTask.nextElementSibling
      .querySelector(".yes")
      .classList.remove("hide");
  } else if (
    // no
    !problemsSecond.checked &&
    !problemsThird.checked &&
    !problemsFourth.checked &&
    problemsFirst.checked &&
    problemsFiveth.checked
  ) {
    problemsTask.nextElementSibling.querySelector(".yes").classList.add("hide");
    problemsTask.nextElementSibling
      .querySelector(".maybe")
      .classList.add("hide");
    problemsTask.nextElementSibling
      .querySelector(".no")
      .classList.remove("hide");
  } else if (
    // no
    problemsFiveth.checked
  ) {
    problemsTask.nextElementSibling.querySelector(".yes").classList.add("hide");
    problemsTask.nextElementSibling
      .querySelector(".maybe")
      .classList.add("hide");
    problemsTask.nextElementSibling
      .querySelector(".no")
      .classList.remove("hide");
  } else if (
    // no
    problemsFirst.checked
  ) {
    problemsTask.nextElementSibling.querySelector(".yes").classList.add("hide");
    problemsTask.nextElementSibling
      .querySelector(".maybe")
      .classList.add("hide");
    problemsTask.nextElementSibling
      .querySelector(".no")
      .classList.remove("hide");
  } else {
    problemsTask.nextElementSibling.querySelector(".yes").classList.add("hide");
    problemsTask.nextElementSibling.querySelector(".no").classList.add("hide");
    problemsTask.nextElementSibling
      .querySelector(".maybe")
      .classList.remove("hide");
  }
}

// var clickedStarVal; // Глобальна змінна для збереження значення

function introProgress(numberBlop) {
  if (numberBlop > 0 && numberBlop !== "" && numberBlop !== undefined) {
    var targetButton = document.querySelector(
      'div[tabs="intro"] [numberBlop="' + numberBlop + '"]'
    );
    var targetElement = targetButton.closest('[blop="main"]');
    var nextTargetElement = targetElement.nextElementSibling;
    var parentElement = targetElement.parentNode;
    // console.log(parentElement);
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
    if (block && block.id === "report_info_blop") {
      reportCheck();
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

  if (reportAnswear !== "" && reportAnswear !== undefined) {
    const reportTask = document.getElementById("report_info_blop");
    checkboxGetInfo(reportTask, reportAnswear);
  }
  if (starAnswear !== "" && starAnswear !== undefined) {
    starGetInfo(
      document.querySelector('div[tabs="intro"] .star_blop'),
      starAnswear
    );
  }

  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth"
  });
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
    if (block && block.id === "profile_info") {
      profileCheck();
    } else if (block && block.id === "work_info_blop") {
      workCheck();
    } else if (block && block.id === "positive_answer_blop") {
      positiveCheck();
    } else if (block && block.id === "about_you_blop") {
      aboutYouCheck();
    } else {
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

  if (profileAnswear !== "" && profileAnswear !== undefined) {
    var profileInfoTask = document.getElementById("profile_info");
    checkboxGetInfo(profileInfoTask, profileAnswear);
  }
  if (photoLiAnswear !== "" && photoLiAnswear !== undefined) {
    const photoLiTask = document.getElementById("photo_li");
    checkboxGetInfo(photoLiTask, photoLiAnswear);
  }
  if (imgAnswear !== "" && imgAnswear !== undefined) {
    const imgTask = document.getElementById("img_choice_blop");
    radioGetInfo(imgTask, imgAnswear);
  }
  if (headingAnswear !== "" && headingAnswear !== undefined) {
    const headingTask = document.getElementById("heading_choice_blop");
    radioGetInfo(headingTask, headingAnswear);
  }
  if (bioAnswear !== "" && bioAnswear !== undefined) {
    const bioTask = document.getElementById("bio_choice_blop");
    radioGetInfo(bioTask, bioAnswear);
  }
  if (workInfoAnswear !== "" && workInfoAnswear !== undefined) {
    var workInfoTask = document.getElementById("work_info_blop");
    checkboxGetInfo(workInfoTask, workInfoAnswear);
  }
  if (imgProfileAnswear !== "" && imgProfileAnswear !== undefined) {
    const imgProfileTask = document.getElementById("img_profile_blop");
    radioGetInfo(imgProfileTask, imgProfileAnswear);
  }
  if (positiveAnswear !== "" && positiveAnswear !== undefined) {
    var positiveAnswerTask = document.getElementById("positive_answer_blop");
    checkboxGetInfo(positiveAnswerTask, positiveAnswear);
  }
  if (teamAnswear !== "" && teamAnswear !== undefined) {
    const teamTask = document.getElementById("team_choice_blop");
    radioGetInfo(teamTask, teamAnswear);
  }
  if (linkedInAnswear !== "" && linkedInAnswear !== undefined) {
    const linkedInTask = document.getElementById("linked_in_profile");
    textareaGethInfo(linkedInTask, linkedInAnswear);
  }

  if (aboutYouAnswear !== "" && aboutYouAnswear !== undefined) {
    var aboutYouTask = document.getElementById("about_you_blop");
    checkboxGetInfo(aboutYouTask, aboutYouAnswear);
  }
  if (aboutTimeAnswear !== "" && aboutTimeAnswear !== undefined) {
    var aboutTimeTask = document.getElementById("about_time_blop");
    radioGetInfo(aboutTimeTask, aboutTimeAnswear);
  }
  if (selfPresentationAnswear !== "" && selfPresentationAnswear !== undefined) {
    var selfPresentationTask = document.getElementById(
      "self_presentation_open"
    );
    textareaGethInfo(selfPresentationTask, selfPresentationAnswear);
  }
  if (failSituationAnswear !== "" && failSituationAnswear !== undefined) {
    var failSituationTask = document.getElementById("fail_situation_blop");
    radioGetInfo(failSituationTask, failSituationAnswear);
  }
  if (modelAnswear !== "" && modelAnswear !== undefined) {
    var modelTask = document.getElementById("model_open");
    textareaGethInfo(modelTask, modelAnswear);
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
    if (block && block.id === "problems_blop") {
      problemsCheck();
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

    if (countProgressTab2 !== "") {
      if (block.classList.contains("year_coast")) {
        function textareaCheckYear(blop) {
          var valueText = value;
          // console.log(value);
          var cleanedString = valueText.replace(/[$\s\-\+]/g, "");
          var radioAnswer;
          if (cleanedString === "390785") {
            radioAnswer = blop.nextElementSibling.querySelector(".one");
            radioAnswer.classList.add("answer_visible");
          } else {
            radioAnswer = blop.nextElementSibling.querySelector(".two");
            radioAnswer.classList.add("answer_visible");
          }
        }
        textareaCheckYear(block);
      }

      if (block.classList.contains("romi")) {
        function textareaRomi(blop) {
          var valueText = value;
          var cleanedString = valueText.replace(/[^-79]/g, "");
          var radioAnswer;
          if (cleanedString === "-79") {
            radioAnswer = blop.nextElementSibling.querySelector(".one");
            radioAnswer.classList.add("answer_visible");
          } else {
            radioAnswer = blop.nextElementSibling.querySelector(".two");
            radioAnswer.classList.add("answer_visible");
          }
        }
        textareaRomi(block);
      }
    }
  }

  if (yearCoastAnswear !== "" && yearCoastAnswear !== undefined) {
    var year_coastTask = document.getElementById("year_coast");
    textareaGethInfo(year_coastTask, yearCoastAnswear);
  }
  if (romiAnswear !== "" && romiAnswear !== undefined) {
    var romiTask = document.getElementById("romi");
    textareaGethInfo(romiTask, romiAnswear);
  }

  if (reportMounthAnswear !== "" && reportMounthAnswear !== undefined) {
    var reportMounthTask = document.getElementById("report_mounth_blop");
    radioGetInfo(reportMounthTask, reportMounthAnswear);
  }
  if (presentationAnswear !== "" && presentationAnswear !== undefined) {
    var presentationTask = document.getElementById("presentation_blop");
    radioGetInfo(presentationTask, presentationAnswear);
  }
  if (successesAnswear !== "" && successesAnswear !== undefined) {
    var successesTask = document.getElementById("successes_blop");
    radioGetInfo(successesTask, successesAnswear);
  }
  if (problemsAnswear !== "" && problemsAnswear !== undefined) {
    var problemsTask = document.getElementById("problems_blop");
    checkboxGetInfo(problemsTask, problemsAnswear);
  }
  if (moneyAnswear !== "" && moneyAnswear !== undefined) {
    var moneyTask = document.getElementById("money_blop");
    radioGetInfo(moneyTask, moneyAnswear);
  }
  if (questionsAnswear !== "" && questionsAnswear !== undefined) {
    var questionsTask = document.getElementById("questions_blop");
    radioGetInfo(questionsTask, questionsAnswear);
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

if (countProgress !== "" && countProgress !== undefined) {
  introProgress(countProgress);
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

      reportCheck();
      profileCheck();
      workCheck();
      positiveCheck();
      aboutYouCheck();
      problemsCheck();

      blopElement.nextElementSibling.classList.add("next_visible");
      setTimeout(function () {
        blopElement.nextElementSibling.classList.add("blop_animate");
      }, 1);

      if (button.classList.contains("last_button")) {
        var ss = button.getAttribute("numberBlop");
        create_lesson("6517f3b8afa18ec4281d2807", user_email, fragments[4]);

        if (ss > 39) {
          availableLinks("firstl_tab2");
        } else if (ss > 4) {
          availableLinks("firstl_tab1");
        }
      }
    }
    if (button.classList.contains("start_button")) {
      var tabClosest = button.closest("[tabs]");
      var attr = tabClosest.getAttribute("tabs");
      button.classList.add("hideButton");
      if (attr === "tab1") {
        document.getElementById("first_blop").classList.add("next_visible");
        setTimeout(function () {
          document.getElementById("first_blop").classList.add("blop_animate");
        }, 1);
      }
      document.querySelector("#first_blop").classList.add("next_visible");
      setTimeout(function () {
        document.querySelector("#first_blop").classList.add("blop_animate");
      }, 1);
    }
  });
});

// -------------- Checkbox/Radio check -------------- //

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
        // console.log("Хочаб один чекбокс вибраний");
        if (blopElementCheck) {
          blopElementCheck
            .querySelector(".variety_answer")
            .removeAttribute("state");
        }
      } else {
        // console.log("Жоден чекбокс не вибраний");
        if (blopElementCheck) {
          blopElementCheck
            .querySelector(".variety_answer")
            .setAttribute("state", "blocked");
        }
      }
    } else {
      if (isAnyCheckboxChecked) {
        // console.log("Хочаб один чекбокс вибраний");
        if (blopElementCheck) {
          blopElementCheck
            .querySelector(".button_primal")
            .removeAttribute("state");
        }
      } else {
        // console.log("Жоден чекбокс не вибраний");
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
  ".button_primal, .side_bar_sublink_wrapper"
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
      mainElement = scrollButton.closest(".blop").nextElementSibling;

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
    if (textarea.closest("#year_coast") || textarea.closest("#romi")) {
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
        // console.log(parentElement.getAttribute("tabs"));
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

      if (block.classList.contains("year_coast")) {
        function textareaCheckYear(blop) {
          var value = blop.querySelector("textarea").value;
          // console.log(value);
          var cleanedString = value.replace(/[$\s\-\+]/g, "");
          var radioAnswer;
          if (cleanedString === "390785") {
            radioAnswer = blop.nextElementSibling.querySelector(".one");
            radioAnswer.classList.add("answer_visible");
          } else {
            radioAnswer = blop.nextElementSibling.querySelector(".two");
            radioAnswer.classList.add("answer_visible");
          }
        }
        textareaCheckYear(block);
      }

      if (block.classList.contains("romi")) {
        function textareaRomi(blop) {
          var value = blop.querySelector("textarea").value;
          var cleanedString = value.replace(/[^-79]/g, "");
          var radioAnswer;
          if (cleanedString === "-79") {
            radioAnswer = blop.nextElementSibling.querySelector(".one");
            radioAnswer.classList.add("answer_visible");
          } else {
            radioAnswer = blop.nextElementSibling.querySelector(".two");
            radioAnswer.classList.add("answer_visible");
          }
        }
        textareaRomi(block);
      }
      return result;
    }

    if (buttonWithAttr.closest("#report_info_blop")) {
      const reportTask = document.getElementById("report_info_blop");
      var reportInfoResult = checkboxPushInfo(reportTask);
    }
    if (buttonWithAttr.closest("#profile_info")) {
      const profileTask = document.getElementById("profile_info");
      var profileInfoResult = checkboxPushInfo(profileTask);
    }
    if (buttonWithAttr.closest("#photo_li")) {
      const photoTask = document.getElementById("photo_li");
      var photoLiResult = checkboxPushInfo(photoTask);
    }
    if (buttonWithAttr.closest("#img_choice_blop")) {
      const imgTask = document.getElementById("img_choice_blop");
      var imgResult = radioPushInfo(imgTask);
    }
    if (buttonWithAttr.closest("#heading_choice_blop")) {
      const headingTask = document.getElementById("heading_choice_blop");
      var headingResult = radioPushInfo(headingTask);
    }
    if (buttonWithAttr.closest("#bio_choice_blop")) {
      const bioTask = document.getElementById("bio_choice_blop");
      var bioResult = radioPushInfo(bioTask);
    }
    if (buttonWithAttr.closest("#work_info_blop")) {
      const workInfoTask = document.getElementById("work_info_blop");
      var workInfoResult = checkboxPushInfo(workInfoTask);
    }
    if (buttonWithAttr.closest("#img_profile_blop")) {
      const imgProfileTask = document.getElementById("img_profile_blop");
      var imgProfileResult = radioPushInfo(imgProfileTask);
    }
    if (buttonWithAttr.closest("#positive_answer_blop")) {
      const positiveAnswerTask = document.getElementById(
        "positive_answer_blop"
      );
      var positiveAnswerResult = checkboxPushInfo(positiveAnswerTask);
    }
    if (buttonWithAttr.closest("#team_choice_blop")) {
      const teamTask = document.getElementById("team_choice_blop");
      var teamResult = radioPushInfo(teamTask);
    }
    if (buttonWithAttr.closest("#linked_in_profile")) {
      const linkedInTask = document.getElementById("linked_in_profile");
      var linkedInResult = textareaPushInfo(linkedInTask);
    }
    if (buttonWithAttr.closest("#about_you_blop")) {
      const aboutYouTask = document.getElementById("about_you_blop");
      var aboutYouResult = checkboxPushInfo(aboutYouTask);
    }
    if (buttonWithAttr.closest("#about_time_blop")) {
      const aboutTimeTask = document.getElementById("about_time_blop");
      var aboutTimeResult = radioPushInfo(aboutTimeTask);
    }
    if (buttonWithAttr.closest("#self_presentation_open")) {
      const selfPresentationTask = document.getElementById(
        "self_presentation_open"
      );
      var selfPresentationResult = textareaPushInfo(selfPresentationTask);
    }
    if (buttonWithAttr.closest("#fail_situation_blop")) {
      const failSituationTask = document.getElementById("fail_situation_blop");
      var failSituationResult = radioPushInfo(failSituationTask);
    }
    if (buttonWithAttr.closest("#model_open")) {
      const modelTask = document.getElementById("model_open");
      var modelResult = textareaPushInfo(modelTask);
    }

    //---------------

    if (buttonWithAttr.closest("#year_coast")) {
      const yearCoastTask = document.getElementById("year_coast");
      var yearCoastResult = textareaPushInfo(yearCoastTask);
    }
    if (buttonWithAttr.closest("#romi")) {
      const romiTask = document.getElementById("romi");
      var romiResult = textareaPushInfo(romiTask);
    }
    if (buttonWithAttr.closest("#report_mounth_blop")) {
      const reportMounthTask = document.getElementById("report_mounth_blop");
      var reportMounthResult = radioPushInfo(reportMounthTask);
    }
    if (buttonWithAttr.closest("#presentation_blop")) {
      const presentationTask = document.getElementById("presentation_blop");
      var presentationResult = radioPushInfo(presentationTask);
    }
    if (buttonWithAttr.closest("#successes_blop")) {
      const successesTask = document.getElementById("successes_blop");
      var successesResult = radioPushInfo(successesTask);
    }
    if (buttonWithAttr.closest("#problems_blop")) {
      const problemsTask = document.getElementById("problems_blop");
      var problemsResult = checkboxPushInfo(problemsTask);
    }
    if (buttonWithAttr.closest("#money_blop")) {
      const moneyTask = document.getElementById("money_blop");
      var moneyResult = radioPushInfo(moneyTask);
    }
    if (buttonWithAttr.closest("#questions_blop")) {
      const questionsTask = document.getElementById("questions_blop");
      var questionsResult = radioPushInfo(questionsTask);
    }

    function formSubmit(dataIntro, dataTab1, dataTab2) {
      var data = {
        collection_id: "6517f3b8afa18ec4281d27f0",
        user_id: fragments[4],
        user_intro: dataIntro,
        user_tab1: dataTab1,
        user_tab2: dataTab2
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
      var star = "";
      var star1 = "";
      var star2 = "";
      // console.log("yes");

      if (
        buttonWithAttr.closest(
          ".lesson_tab[tabs='intro'] .fs_starrating-1_item"
        )
      ) {
        star = starButtons(tab);
      }
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

      countProgress = attributeValue;
      countProgressTab1 = attributeValue;
      countProgressTab2 = attributeValue;

      var reportBd;
      if (reportInfoResult !== "" && reportInfoResult !== undefined) {
        reportAnswear = reportInfoResult;
        reportBd = "|/|" + reportAnswear;
      } else if (reportAnswear !== "" && reportAnswear !== undefined) {
        reportBd = "|/|" + reportAnswear;
      } else {
        reportBd = "";
      }

      var profileBd;
      if (profileInfoResult !== "" && profileInfoResult !== undefined) {
        profileAnswear = profileInfoResult;
        profileBd = "|/|" + profileAnswear;
      } else if (profileAnswear !== "" && profileAnswear !== undefined) {
        profileBd = "|/|" + profileAnswear;
      } else {
        profileBd = "";
      }
      // photoLiResult
      var photoLiBd;
      if (photoLiResult !== "" && photoLiResult !== undefined) {
        photoLiAnswear = photoLiResult;
        photoLiBd = "|/|" + photoLiAnswear;
      } else if (photoLiAnswear !== "" && photoLiAnswear !== undefined) {
        photoLiBd = "|/|" + photoLiAnswear;
      } else {
        photoLiBd = "";
      }
      // imgResult
      var imgBd;
      if (imgResult !== "" && imgResult !== undefined) {
        imgAnswear = imgResult;
        imgBd = "|/|" + imgAnswear;
      } else if (imgAnswear !== "" && imgAnswear !== undefined) {
        imgBd = "|/|" + imgAnswear;
      } else {
        imgBd = "";
      }
      // headingResult
      var headingBd;
      if (headingResult !== "" && headingResult !== undefined) {
        headingAnswear = headingResult;
        headingBd = "|/|" + headingAnswear;
      } else if (headingAnswear !== "" && headingAnswear !== undefined) {
        headingBd = "|/|" + headingAnswear;
      } else {
        headingBd = "";
      }
      // bioResult
      var bioBd;
      if (bioResult !== "" && bioResult !== undefined) {
        bioAnswear = bioResult;
        bioBd = "|/|" + bioAnswear;
      } else if (bioAnswear !== "" && bioAnswear !== undefined) {
        bioBd = "|/|" + bioAnswear;
      } else {
        bioBd = "";
      }
      // workInfoResult
      var workInfoBd;
      if (workInfoResult !== "" && workInfoResult !== undefined) {
        workInfoAnswear = workInfoResult;
        workInfoBd = "|/|" + workInfoAnswear;
      } else if (workInfoAnswear !== "" && workInfoAnswear !== undefined) {
        workInfoBd = "|/|" + workInfoAnswear;
      } else {
        workInfoBd = "";
      }
      // imgProfileResult
      var imgProfileBd;
      if (imgProfileResult !== "" && imgProfileResult !== undefined) {
        imgProfileAnswear = imgProfileResult;
        imgProfileBd = "|/|" + imgProfileAnswear;
      } else if (imgProfileAnswear !== "" && imgProfileAnswear !== undefined) {
        imgProfileBd = "|/|" + imgProfileAnswear;
      } else {
        imgProfileBd = "";
      }
      // positiveAnswerResult
      var positiveBd;
      if (positiveAnswerResult !== "" && positiveAnswerResult !== undefined) {
        positiveAnswear = positiveAnswerResult;
        positiveBd = "|/|" + positiveAnswear;
      } else if (positiveAnswear !== "" && positiveAnswear !== undefined) {
        positiveBd = "|/|" + positiveAnswear;
      } else {
        positiveBd = "";
      }
      // teamResult
      var teamBd;
      if (teamResult !== "" && teamResult !== undefined) {
        teamAnswear = teamResult;
        teamBd = "|/|" + teamAnswear;
      } else if (teamAnswear !== "" && teamAnswear !== undefined) {
        teamBd = "|/|" + teamAnswear;
      } else {
        teamBd = "";
      }
      // linkedInResult
      var linkedInBd;
      if (linkedInResult !== "" && linkedInResult !== undefined) {
        linkedInAnswear = linkedInResult;
        linkedInBd = "|/|" + linkedInAnswear;
      } else if (linkedInAnswear !== "" && linkedInAnswear !== undefined) {
        linkedInBd = "|/|" + linkedInAnswear;
      } else {
        linkedInBd = "";
      }
      // aboutYouResult
      var aboutYouBd;
      if (aboutYouResult !== "" && aboutYouResult !== undefined) {
        aboutYouAnswear = aboutYouResult;
        aboutYouBd = "|/|" + aboutYouAnswear;
      } else if (aboutYouAnswear !== "" && aboutYouAnswear !== undefined) {
        aboutYouBd = "|/|" + aboutYouAnswear;
      } else {
        aboutYouBd = "";
      }
      // aboutTimeResult
      var aboutTimeBd;
      if (aboutTimeResult !== "" && aboutTimeResult !== undefined) {
        aboutTimeAnswear = aboutTimeResult;
        aboutTimeBd = "|/|" + aboutTimeAnswear;
      } else if (aboutTimeAnswear !== "" && aboutTimeAnswear !== undefined) {
        aboutTimeBd = "|/|" + aboutTimeAnswear;
      } else {
        aboutTimeBd = "";
      }
      // selfPresentationResult
      var selfPresentationBd;
      if (
        selfPresentationResult !== "" &&
        selfPresentationResult !== undefined
      ) {
        selfPresentationAnswear = selfPresentationResult;
        selfPresentationBd = "|/|" + selfPresentationAnswear;
      } else if (
        selfPresentationAnswear !== "" &&
        selfPresentationAnswear !== undefined
      ) {
        selfPresentationBd = "|/|" + selfPresentationAnswear;
      } else {
        selfPresentationBd = "";
      }
      // failSituationResult
      var failSituationBd;
      if (failSituationResult !== "" && failSituationResult !== undefined) {
        failSituationAnswear = failSituationResult;
        failSituationBd = "|/|" + failSituationAnswear;
      } else if (
        failSituationAnswear !== "" &&
        failSituationAnswear !== undefined
      ) {
        failSituationBd = "|/|" + failSituationAnswear;
      } else {
        failSituationBd = "";
      }
      // modelResult
      var modelBd;
      if (modelResult !== "" && modelResult !== undefined) {
        modelAnswear = modelResult;
        modelBd = "|/|" + modelAnswear;
      } else if (modelAnswear !== "" && modelAnswear !== undefined) {
        modelBd = "|/|" + modelAnswear;
      } else {
        modelBd = "";
      }
      // yearCoastResult
      var yearCoastBd;
      if (yearCoastResult !== "" && yearCoastResult !== undefined) {
        yearCoastAnswear = yearCoastResult;
        yearCoastBd = "|/|" + yearCoastAnswear;
      } else if (yearCoastAnswear !== "" && yearCoastAnswear !== undefined) {
        yearCoastBd = "|/|" + yearCoastAnswear;
      } else {
        yearCoastBd = "";
      }
      // romiResult
      var romiBd;
      if (romiResult !== "" && romiResult !== undefined) {
        romiAnswear = romiResult;
        romiBd = "|/|" + romiAnswear;
      } else if (romiAnswear !== "" && romiAnswear !== undefined) {
        romiBd = "|/|" + romiAnswear;
      } else {
        romiBd = "";
      }
      // reportMounthResult
      var reportMounthBd;
      if (reportMounthResult !== "" && reportMounthResult !== undefined) {
        reportMounthAnswear = reportMounthResult;
        reportMounthBd = "|/|" + reportMounthAnswear;
      } else if (
        reportMounthAnswear !== "" &&
        reportMounthAnswear !== undefined
      ) {
        reportMounthBd = "|/|" + reportMounthAnswear;
      } else {
        reportMounthBd = "";
      }

      // presentationResult
      var presentationBd;
      if (presentationResult !== "" && presentationResult !== undefined) {
        presentationAnswear = presentationResult;
        presentationBd = "|/|" + presentationAnswear;
      } else if (
        presentationAnswear !== "" &&
        presentationAnswear !== undefined
      ) {
        presentationBd = "|/|" + presentationAnswear;
      } else {
        presentationBd = "";
      }

      // successesResult
      var successesBd;
      if (successesResult !== "" && successesResult !== undefined) {
        successesAnswear = successesResult;
        successesBd = "|/|" + successesAnswear;
      } else if (successesAnswear !== "" && successesAnswear !== undefined) {
        successesBd = "|/|" + successesAnswear;
      } else {
        successesBd = "";
      }
      // problemsResult
      var problemsBd;
      if (problemsResult !== "" && problemsResult !== undefined) {
        problemsAnswear = problemsResult;
        problemsBd = "|/|" + problemsAnswear;
      } else if (problemsAnswear !== "" && problemsAnswear !== undefined) {
        problemsBd = "|/|" + problemsAnswear;
      } else {
        problemsBd = "";
      }
      // moneyResult
      var moneyBd;
      if (moneyResult !== "" && moneyResult !== undefined) {
        moneyAnswear = moneyResult;
        moneyBd = "|/|" + moneyAnswear;
      } else if (moneyAnswear !== "" && moneyAnswear !== undefined) {
        moneyBd = "|/|" + moneyAnswear;
      } else {
        moneyBd = "";
      }
      // questionsResult
      var questionsBd;
      if (questionsResult !== "" && questionsResult !== undefined) {
        questionsAnswear = questionsResult;
        questionsBd = "|/|" + questionsAnswear;
      } else if (questionsAnswear !== "" && questionsAnswear !== undefined) {
        questionsBd = "|/|" + questionsAnswear;
      } else {
        questionsBd = "";
      }

      // starAnswearTab1
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

      // console.log(starTab2Bd);

      var starBd;
      if (star !== "" && star !== undefined) {
        starAnswear = star;
        starBd = "|/|" + starAnswear;
      } else if (starAnswear !== "" && starAnswear !== undefined) {
        starBd = "|/|" + starAnswear;
      } else {
        starBd = "";
      }

      if (tab === "intro") {
        var dataIntro = countProgress + reportBd + starBd;
      } else if (tab === "tab1") {
        var dataTab1 =
          countProgressTab1 +
          profileBd +
          photoLiBd +
          imgBd +
          headingBd +
          bioBd +
          workInfoBd +
          imgProfileBd +
          positiveBd +
          teamBd +
          linkedInBd +
          aboutYouBd +
          aboutTimeBd +
          selfPresentationBd +
          failSituationBd +
          modelBd +
          starTab1Bd;
      } else if (tab === "tab2") {
        var dataTab2 =
          countProgressTab2 +
          yearCoastBd +
          romiBd +
          reportMounthBd +
          presentationBd +
          successesBd +
          problemsBd +
          moneyBd +
          questionsBd +
          starTab2Bd;
      }
      formSubmit(dataIntro, dataTab1, dataTab2);
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

    function formTheory(introtheoryVal, tab1theoryVal, tab2theoryVal) {
      var data2;
      if (tabs === "intro") {
        data2 = {
          collection_id: "6517f3b8afa18ec4281d27f0",
          user_id: fragments[4],
          introtheory: introtheoryVal
        };
      } else if (tabs === "tab1") {
        data2 = {
          collection_id: "6517f3b8afa18ec4281d27f0",
          user_id: fragments[4],
          tab1theory: tab1theoryVal
        };
      } else if (tabs === "tab2") {
        data2 = {
          collection_id: "6517f3b8afa18ec4281d27f0",
          user_id: fragments[4],
          tab2theory: tab2theoryVal
        };
      }

      // console.log(data2);

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

    if (tabs === "intro") {
      var introtheoryVal = theoryButton.getAttribute("theory");
    } else if (tabs === "tab1") {
      var tab1theoryVal = theoryButton.getAttribute("theory");
    } else if (tabs === "tab2") {
      var tab2theoryVal = theoryButton.getAttribute("theory");
    }
    formTheory(introtheoryVal, tab1theoryVal, tab2theoryVal);
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
