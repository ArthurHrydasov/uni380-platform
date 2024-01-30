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
var ta_infoAnswear = tab1BDVal[1];
var start_researchAnswear = tab1BDVal[2];
var castdevsAnswear = tab1BDVal[3];
var interviewAnswear = tab1BDVal[4];
var retention_3_calcAnswear = tab1BDVal[5];
var fine_questionsAnswear = tab1BDVal[6];
var segment_interviewAnswear = tab1BDVal[7];
var starAnswearTab1 = tab1BDVal[8];

var countProgressTab2 = tab2BDVal[0];
var common_charAnswear = tab2BDVal[1];
var mail_inviteAnswear = tab2BDVal[2];
var anket_problemAnswear = tab2BDVal[3];
var right_fixAnswear = tab2BDVal[4];
var sample_calcAnswear = tab2BDVal[5];
var starAnswearTab2 = tab2BDVal[6];

var countProgressTab3 = tab3BDVal[0];
var next_researchAnswear = tab3BDVal[1];
var audienceAnswear = tab3BDVal[2];
var portretAnswear = tab3BDVal[3];
var starAnswearTab3 = tab3BDVal[4];

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
  // console.log(data);
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
create_lesson("6517f3b8afa18ec4281d283c", user_email, fragments[4]);

if (countProgressTab1 > 20) {
  availableLinks("thirdl_tab2");
  activetab("thirdl_tab2", "tab2");
}
if (countProgressTab2 > 13) {
  availableLinks("thirdl_tab3");
  activetab("thirdl_tab3", "tab3");
}

// if (countProgressTab1 > 20) {
// availableLinks("thirdl_tab3");
// activetab("thirdl_tab3", "tab3");
// }

function radioCheck(blopElement) {
  var radio = blopElement.querySelector('input[type="radio"]:checked');
  if (radio) {
    var value = radio.value;
    var radioAnswer = blopElement.nextElementSibling.querySelector("." + value);
    radioAnswer.classList.add("answer_visible");
  }
}

function common_charCheck() {
  var common_charInfo = document.getElementById("common_char");
  var common_charForm = common_charInfo.querySelector("form");
  var common_charElements = common_charForm.querySelectorAll(".check_input");

  var common_charFirst = common_charElements[0].querySelector(
    'input[type="checkbox"]'
  );
  var common_charSecond = common_charElements[1].querySelector(
    'input[type="checkbox"]'
  );
  var common_charThird = common_charElements[2].querySelector(
    'input[type="checkbox"]'
  );
  var common_charFourth = common_charElements[3].querySelector(
    'input[type="checkbox"]'
  );
  var common_charFiveth = common_charElements[4].querySelector(
    'input[type="checkbox"]'
  );

  if (
    common_charFirst.checked &&
    common_charThird.checked &&
    common_charFourth.checked &&
    common_charFiveth.checked &&
    !common_charSecond.checked
  ) {
    common_charInfo.nextElementSibling
      .querySelector(".no")
      .classList.add("hide");
    common_charInfo.nextElementSibling
      .querySelector(".maybe")
      .classList.add("hide");
    common_charInfo.nextElementSibling
      .querySelector(".yes")
      .classList.remove("hide");
  } else if (
    common_charSecond.checked &&
    !common_charFirst.checked &&
    !common_charThird.checked &&
    !common_charFourth.checked &&
    !common_charFiveth.checked
  ) {
    common_charInfo.nextElementSibling
      .querySelector(".no")
      .classList.remove("hide");
    common_charInfo.nextElementSibling
      .querySelector(".maybe")
      .classList.add("hide");
    common_charInfo.nextElementSibling
      .querySelector(".yes")
      .classList.add("hide");
  } else {
    common_charInfo.nextElementSibling
      .querySelector(".no")
      .classList.add("hide");
    common_charInfo.nextElementSibling
      .querySelector(".yes")
      .classList.add("hide");
    common_charInfo.nextElementSibling
      .querySelector(".maybe")
      .classList.remove("hide");
  }
}

function anket_problemCheck() {
  var anket_problemInfo = document.getElementById("anket_problem");
  var anket_problemForm = anket_problemInfo.querySelector("form");
  var anket_problemElements = anket_problemForm.querySelectorAll(
    ".check_input"
  );

  var anket_problemFirst = anket_problemElements[0].querySelector(
    'input[type="checkbox"]'
  );
  var anket_problemSecond = anket_problemElements[1].querySelector(
    'input[type="checkbox"]'
  );
  var anket_problemThird = anket_problemElements[2].querySelector(
    'input[type="checkbox"]'
  );
  var anket_problemFourth = anket_problemElements[3].querySelector(
    'input[type="checkbox"]'
  );
  var anket_problemFiveth = anket_problemElements[4].querySelector(
    'input[type="checkbox"]'
  );

  if (
    anket_problemFirst.checked &&
    !anket_problemSecond.checked &&
    !anket_problemThird.checked &&
    !anket_problemFourth.checked &&
    !anket_problemFiveth.checked
  ) {
    anket_problemInfo.nextElementSibling
      .querySelector(".no_one")
      .classList.remove("hide");
    anket_problemInfo.nextElementSibling
      .querySelector(".no_two")
      .classList.add("hide");
    anket_problemInfo.nextElementSibling
      .querySelector(".maybe")
      .classList.add("hide");
    anket_problemInfo.nextElementSibling
      .querySelector(".yes")
      .classList.add("hide");
  } else if (
    !anket_problemFirst.checked &&
    !anket_problemSecond.checked &&
    !anket_problemThird.checked &&
    anket_problemFourth.checked &&
    !anket_problemFiveth.checked
  ) {
    anket_problemInfo.nextElementSibling
      .querySelector(".no_one")
      .classList.add("hide");
    anket_problemInfo.nextElementSibling
      .querySelector(".no_two")
      .classList.remove("hide");
    anket_problemInfo.nextElementSibling
      .querySelector(".maybe")
      .classList.add("hide");
    anket_problemInfo.nextElementSibling
      .querySelector(".yes")
      .classList.add("hide");
  } else if (
    !anket_problemFirst.checked &&
    anket_problemSecond.checked &&
    anket_problemThird.checked &&
    !anket_problemFourth.checked &&
    anket_problemFiveth.checked
  ) {
    anket_problemInfo.nextElementSibling
      .querySelector(".no_one")
      .classList.add("hide");
    anket_problemInfo.nextElementSibling
      .querySelector(".no_two")
      .classList.add("hide");
    anket_problemInfo.nextElementSibling
      .querySelector(".maybe")
      .classList.add("hide");
    anket_problemInfo.nextElementSibling
      .querySelector(".yes")
      .classList.remove("hide");
  } else {
    anket_problemInfo.nextElementSibling
      .querySelector(".no_one")
      .classList.add("hide");
    anket_problemInfo.nextElementSibling
      .querySelector(".no_two")
      .classList.add("hide");
    anket_problemInfo.nextElementSibling
      .querySelector(".maybe")
      .classList.remove("hide");
    anket_problemInfo.nextElementSibling
      .querySelector(".yes")
      .classList.add("hide");
  }
}

function audienceCheck() {
  var audienceInfo = document.getElementById("audience");
  var audienceForm = audienceInfo.querySelector("form");
  var audienceElements = audienceForm.querySelectorAll(".check_input");

  var audienceFirst = audienceElements[0].querySelector(
    'input[type="checkbox"]'
  );
  var audienceSecond = audienceElements[1].querySelector(
    'input[type="checkbox"]'
  );
  var audienceThird = audienceElements[2].querySelector(
    'input[type="checkbox"]'
  );
  var audienceFourth = audienceElements[3].querySelector(
    'input[type="checkbox"]'
  );

  if (
    audienceFirst.checked &&
    !audienceSecond.checked &&
    !audienceThird.checked &&
    !audienceFourth.checked
  ) {
    audienceInfo.nextElementSibling
      .querySelector(".no")
      .classList.remove("hide");
    audienceInfo.nextElementSibling
      .querySelector(".maybe")
      .classList.add("hide");
    audienceInfo.nextElementSibling.querySelector(".yes").classList.add("hide");
  } else if (
    !audienceFirst.checked &&
    !audienceSecond.checked &&
    audienceThird.checked &&
    !audienceFourth.checked
  ) {
    audienceInfo.nextElementSibling
      .querySelector(".no")
      .classList.remove("hide");
    audienceInfo.nextElementSibling
      .querySelector(".maybe")
      .classList.add("hide");
    audienceInfo.nextElementSibling.querySelector(".yes").classList.add("hide");
  } else if (
    audienceFirst.checked &&
    !audienceSecond.checked &&
    audienceThird.checked &&
    !audienceFourth.checked
  ) {
    audienceInfo.nextElementSibling
      .querySelector(".no")
      .classList.remove("hide");
    audienceInfo.nextElementSibling
      .querySelector(".maybe")
      .classList.add("hide");
    audienceInfo.nextElementSibling.querySelector(".yes").classList.add("hide");
  } else if (
    !audienceFirst.checked &&
    audienceSecond.checked &&
    !audienceThird.checked &&
    audienceFourth.checked
  ) {
    audienceInfo.nextElementSibling.querySelector(".no").classList.add("hide");
    audienceInfo.nextElementSibling
      .querySelector(".maybe")
      .classList.add("hide");
    audienceInfo.nextElementSibling
      .querySelector(".yes")
      .classList.remove("hide");
  } else {
    audienceInfo.nextElementSibling.querySelector(".no").classList.add("hide");
    audienceInfo.nextElementSibling
      .querySelector(".maybe")
      .classList.remove("hide");
    audienceInfo.nextElementSibling.querySelector(".yes").classList.add("hide");
  }
}

function portretCheck() {
  var portretInfo = document.getElementById("portret");
  var portretForm = portretInfo.querySelector("form");
  var portretElements = portretForm.querySelectorAll(".check_input");

  var portretFirst = portretElements[0].querySelector('input[type="checkbox"]');
  var portretSecond = portretElements[1].querySelector(
    'input[type="checkbox"]'
  );
  var portretThird = portretElements[2].querySelector('input[type="checkbox"]');
  var portretFourth = portretElements[3].querySelector(
    'input[type="checkbox"]'
  );
  var portretFiveth = portretElements[4].querySelector(
    'input[type="checkbox"]'
  );
  var portretSixth = portretElements[5].querySelector('input[type="checkbox"]');

  if (
    portretFirst.checked &&
    portretSecond.checked &&
    portretThird.checked &&
    !portretFourth.checked &&
    portretFiveth.checked &&
    portretSixth.checked
  ) {
    portretInfo.nextElementSibling.querySelector(".no").classList.add("hide");
    portretInfo.nextElementSibling
      .querySelector(".maybe")
      .classList.add("hide");
    portretInfo.nextElementSibling
      .querySelector(".yes")
      .classList.remove("hide");
  } else if (
    !portretFirst.checked &&
    !portretSecond.checked &&
    !portretThird.checked &&
    portretFourth.checked &&
    !portretFiveth.checked &&
    !portretSixth.checked
  ) {
    portretInfo.nextElementSibling
      .querySelector(".no")
      .classList.remove("hide");
    portretInfo.nextElementSibling
      .querySelector(".maybe")
      .classList.add("hide");
    portretInfo.nextElementSibling.querySelector(".yes").classList.add("hide");
  } else {
    portretInfo.nextElementSibling.querySelector(".no").classList.add("hide");
    portretInfo.nextElementSibling
      .querySelector(".maybe")
      .classList.remove("hide");
    portretInfo.nextElementSibling.querySelector(".yes").classList.add("hide");
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
      if (block.classList.contains("retention_3_calc")) {
        function textareaCheckRetention(blop) {
          var value = blop.querySelector("textarea").value;
          var cleanedString = value.replace(/[$\s\-\+]/g, "");
          var radioAnswer;
          if (cleanedString === "462") {
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

  if (ta_infoAnswear !== "" && ta_infoAnswear !== undefined) {
    const ta_infoTask = document.getElementById("ta_info");
    radioGetInfo(ta_infoTask, ta_infoAnswear);
  }
  if (start_researchAnswear !== "" && start_researchAnswear !== undefined) {
    const start_researchTask = document.getElementById("start_research");
    radioGetInfo(start_researchTask, start_researchAnswear);
  }
  if (castdevsAnswear !== "" && castdevsAnswear !== undefined) {
    const castdevsTask = document.getElementById("castdevs");
    radioGetInfo(castdevsTask, castdevsAnswear);
  }
  if (interviewAnswear !== "" && interviewAnswear !== undefined) {
    const interviewTask = document.getElementById("interview");
    radioGetInfo(interviewTask, interviewAnswear);
  }
  if (retention_3_calcAnswear !== "" && retention_3_calcAnswear !== undefined) {
    const retention_3_calcTask = document.getElementById("retention_3_calc");
    textareaGethInfo(retention_3_calcTask, retention_3_calcAnswear);
  }
  if (fine_questionsAnswear !== "" && fine_questionsAnswear !== undefined) {
    const fine_questionsTask = document.getElementById("fine_questions");
    checkboxGetInfo(fine_questionsTask, fine_questionsAnswear);
  }
  if (
    segment_interviewAnswear !== "" &&
    segment_interviewAnswear !== undefined
  ) {
    const segment_interviewTask = document.getElementById("segment_interview");
    radioGetInfo(segment_interviewTask, segment_interviewAnswear);
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
    if (block && block.id === "common_char") {
      common_charCheck();
    } else if (block && block.id === "anket_problem") {
      anket_problemCheck();
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
      if (block.classList.contains("sample_calc")) {
        function textareaCheckSample(blop) {
          var value = blop.querySelector("textarea").value;
          var cleanedString = value.replace(/[$\s\-\+]/g, "");
          var radioAnswer;
          if (cleanedString === "364") {
            radioAnswer = blop.nextElementSibling.querySelector(".one");
            radioAnswer.classList.add("answer_visible");
          } else {
            radioAnswer = blop.nextElementSibling.querySelector(".two");
            radioAnswer.classList.add("answer_visible");
          }
        }
        textareaCheckSample(block);
      }
    }
  }

  if (common_charAnswear !== "" && common_charAnswear !== undefined) {
    const common_charTask = document.getElementById("common_char");
    checkboxGetInfo(common_charTask, common_charAnswear);
  }
  if (mail_inviteAnswear !== "" && mail_inviteAnswear !== undefined) {
    const mail_inviteTask = document.getElementById("mail_invite");
    radioGetInfo(mail_inviteTask, mail_inviteAnswear);
  }
  if (anket_problemAnswear !== "" && anket_problemAnswear !== undefined) {
    const anket_problemTask = document.getElementById("anket_problem");
    checkboxGetInfo(anket_problemTask, anket_problemAnswear);
  }
  if (right_fixAnswear !== "" && right_fixAnswear !== undefined) {
    const right_fixTask = document.getElementById("right_fix");
    radioGetInfo(right_fixTask, right_fixAnswear);
  }
  if (sample_calcAnswear !== "" && sample_calcAnswear !== undefined) {
    const sample_calcTask = document.getElementById("sample_calc");
    textareaGethInfo(sample_calcTask, sample_calcAnswear);
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
    if (block && block.id === "audience") {
      audienceCheck();
    } else if (block && block.id === "portret") {
      portretCheck();
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

  if (next_researchAnswear !== "" && next_researchAnswear !== undefined) {
    const next_researchTask = document.getElementById("next_research");
    radioGetInfo(next_researchTask, next_researchAnswear);
  }
  if (audienceAnswear !== "" && audienceAnswear !== undefined) {
    const audienceTask = document.getElementById("audience");
    checkboxGetInfo(audienceTask, audienceAnswear);
  }
  if (portretAnswear !== "" && portretAnswear !== undefined) {
    const portretTask = document.getElementById("portret");
    checkboxGetInfo(portretTask, portretAnswear);
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
      common_charCheck();
      anket_problemCheck();
      audienceCheck();
      portretCheck();

      blopElement.nextElementSibling.classList.add("next_visible");
      setTimeout(function () {
        blopElement.nextElementSibling.classList.add("blop_animate");
      }, 1);

      if (button.classList.contains("last_button")) {
        var ss = button.getAttribute("numberBlop");
        create_lesson("6517f3b8afa18ec4281d283c", user_email, fragments[4]);

        var parent = button.closest(".lesson_tab").getAttribute("tabs");
        console.log(parent);

        if (ss > 20 && parent === "tab1") {
          availableLinks("thirdl_tab2");
          console.log("thirdl_tab2");
        } else if (ss > 13 && parent === "tab2") {
          availableLinks("thirdl_tab3");
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
      textarea.closest("#retention_3_calc") ||
      textarea.closest("#sample_calc")
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

      if (block.classList.contains("retention_3_calc")) {
        function textareaCheckRetention(blop) {
          var value = blop.querySelector("textarea").value;
          var cleanedString = value.replace(/[$\s\-\+]/g, "");
          var radioAnswer;
          if (cleanedString === "462") {
            radioAnswer = blop.nextElementSibling.querySelector(".one");
            radioAnswer.classList.add("answer_visible");
          } else {
            radioAnswer = blop.nextElementSibling.querySelector(".two");
            radioAnswer.classList.add("answer_visible");
          }
        }
        textareaCheckRetention(block);
      }

      if (block.classList.contains("sample_calc")) {
        function textareaCheckSample(blop) {
          var value = blop.querySelector("textarea").value;
          var cleanedString = value.replace(/[$\s\-\+]/g, "");
          var radioAnswer;
          if (cleanedString === "364") {
            radioAnswer = blop.nextElementSibling.querySelector(".one");
            radioAnswer.classList.add("answer_visible");
          } else {
            radioAnswer = blop.nextElementSibling.querySelector(".two");
            radioAnswer.classList.add("answer_visible");
          }
        }
        textareaCheckSample(block);
      }

      return result;
    }

    if (buttonWithAttr.closest("#ta_info")) {
      const ta_infoTask = document.getElementById("ta_info");
      var ta_infoResult = radioPushInfo(ta_infoTask);
    }
    if (buttonWithAttr.closest("#start_research")) {
      const start_researchTask = document.getElementById("start_research");
      var start_researchResult = radioPushInfo(start_researchTask);
    }
    if (buttonWithAttr.closest("#castdevs")) {
      const castdevsTask = document.getElementById("castdevs");
      var castdevsResult = radioPushInfo(castdevsTask);
    }
    if (buttonWithAttr.closest("#interview")) {
      const interviewTask = document.getElementById("interview");
      var interviewResult = radioPushInfo(interviewTask);
    }
    if (buttonWithAttr.closest("#retention_3_calc")) {
      const retention_3_calcTask = document.getElementById("retention_3_calc");
      var retention_3_calcResult = textareaPushInfo(retention_3_calcTask);
    }
    if (buttonWithAttr.closest("#fine_questions")) {
      const fine_questionsTask = document.getElementById("fine_questions");
      var fine_questionsResult = checkboxPushInfo(fine_questionsTask);
    }
    if (buttonWithAttr.closest("#segment_interview")) {
      const segment_interviewTask = document.getElementById(
        "segment_interview"
      );
      var segment_interviewResult = radioPushInfo(segment_interviewTask);
    }

    //---------------

    if (buttonWithAttr.closest("#common_char")) {
      const common_charTask = document.getElementById("common_char");
      var common_charResult = checkboxPushInfo(common_charTask);
    }
    if (buttonWithAttr.closest("#mail_invite")) {
      const mail_inviteTask = document.getElementById("mail_invite");
      var mail_inviteResult = radioPushInfo(mail_inviteTask);
    }
    if (buttonWithAttr.closest("#anket_problem")) {
      const anket_problemTask = document.getElementById("anket_problem");
      var anket_problemResult = checkboxPushInfo(anket_problemTask);
    }
    if (buttonWithAttr.closest("#right_fix")) {
      const right_fixTask = document.getElementById("right_fix");
      var right_fixResult = radioPushInfo(right_fixTask);
    }
    if (buttonWithAttr.closest("#sample_calc")) {
      const sample_calcTask = document.getElementById("sample_calc");
      var sample_calcResult = textareaPushInfo(sample_calcTask);
    }

    //---------------

    if (buttonWithAttr.closest("#next_research")) {
      const next_researchTask = document.getElementById("next_research");
      var next_researchResult = radioPushInfo(next_researchTask);
    }
    if (buttonWithAttr.closest("#audience")) {
      const audienceTask = document.getElementById("audience");
      var audienceResult = checkboxPushInfo(audienceTask);
    }
    if (buttonWithAttr.closest("#portret")) {
      const portretTask = document.getElementById("portret");
      var portretResult = checkboxPushInfo(portretTask);
    }

    //---------------

    function formSubmit(dataTab1, dataTab2, dataTab3) {
      var data = {
        collection_id: "6517f3b8afa18ec4281d2823",
        user_id: fragments[4],
        user_tab1: dataTab1,
        user_tab2: dataTab2,
        user_tab3: dataTab3
      };
      console.log(data);

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

      var ta_infoBd;
      if (ta_infoResult !== "" && ta_infoResult !== undefined) {
        ta_infoAnswear = ta_infoResult;
        ta_infoBd = "|/|" + ta_infoAnswear;
      } else if (ta_infoAnswear !== "" && ta_infoAnswear !== undefined) {
        ta_infoBd = "|/|" + ta_infoAnswear;
      } else {
        ta_infoBd = "";
      }

      var start_researchBd;
      if (start_researchResult !== "" && start_researchResult !== undefined) {
        start_researchAnswear = start_researchResult;
        start_researchBd = "|/|" + start_researchAnswear;
      } else if (
        start_researchAnswear !== "" &&
        start_researchAnswear !== undefined
      ) {
        start_researchBd = "|/|" + start_researchAnswear;
      } else {
        start_researchBd = "";
      }

      var castdevsBd;
      if (castdevsResult !== "" && castdevsResult !== undefined) {
        castdevsAnswear = castdevsResult;
        castdevsBd = "|/|" + castdevsAnswear;
      } else if (castdevsAnswear !== "" && castdevsAnswear !== undefined) {
        castdevsBd = "|/|" + castdevsAnswear;
      } else {
        castdevsBd = "";
      }

      var interviewBd;
      if (interviewResult !== "" && interviewResult !== undefined) {
        interviewAnswear = interviewResult;
        interviewBd = "|/|" + interviewAnswear;
      } else if (interviewAnswear !== "" && interviewAnswear !== undefined) {
        interviewBd = "|/|" + interviewAnswear;
      } else {
        interviewBd = "";
      }

      var retention_3_calcBd;
      if (
        retention_3_calcResult !== "" &&
        retention_3_calcResult !== undefined
      ) {
        retention_3_calcAnswear = retention_3_calcResult;
        retention_3_calcBd = "|/|" + retention_3_calcAnswear;
      } else if (
        retention_3_calcAnswear !== "" &&
        retention_3_calcAnswear !== undefined
      ) {
        retention_3_calcBd = "|/|" + retention_3_calcAnswear;
      } else {
        retention_3_calcBd = "";
      }

      var fine_questionsBd;
      if (fine_questionsResult !== "" && fine_questionsResult !== undefined) {
        fine_questionsAnswear = fine_questionsResult;
        fine_questionsBd = "|/|" + fine_questionsAnswear;
      } else if (
        fine_questionsAnswear !== "" &&
        fine_questionsAnswear !== undefined
      ) {
        fine_questionsBd = "|/|" + fine_questionsAnswear;
      } else {
        fine_questionsBd = "";
      }

      var segment_interviewBd;
      if (
        segment_interviewResult !== "" &&
        segment_interviewResult !== undefined
      ) {
        segment_interviewAnswear = segment_interviewResult;
        segment_interviewBd = "|/|" + segment_interviewAnswear;
      } else if (
        segment_interviewAnswear !== "" &&
        segment_interviewAnswear !== undefined
      ) {
        segment_interviewBd = "|/|" + segment_interviewAnswear;
      } else {
        segment_interviewBd = "";
      }

      var common_charBd;
      if (common_charResult !== "" && common_charResult !== undefined) {
        common_charAnswear = common_charResult;
        common_charBd = "|/|" + common_charAnswear;
      } else if (
        common_charAnswear !== "" &&
        common_charAnswear !== undefined
      ) {
        common_charBd = "|/|" + common_charAnswear;
      } else {
        common_charBd = "";
      }

      var mail_inviteBd;
      if (mail_inviteResult !== "" && mail_inviteResult !== undefined) {
        mail_inviteAnswear = mail_inviteResult;
        mail_inviteBd = "|/|" + mail_inviteAnswear;
      } else if (
        mail_inviteAnswear !== "" &&
        mail_inviteAnswear !== undefined
      ) {
        mail_inviteBd = "|/|" + mail_inviteAnswear;
      } else {
        mail_inviteBd = "";
      }

      var anket_problemBd;
      if (anket_problemResult !== "" && anket_problemResult !== undefined) {
        anket_problemAnswear = anket_problemResult;
        anket_problemBd = "|/|" + anket_problemAnswear;
      } else if (
        anket_problemAnswear !== "" &&
        anket_problemAnswear !== undefined
      ) {
        anket_problemBd = "|/|" + anket_problemAnswear;
      } else {
        anket_problemBd = "";
      }

      var right_fixBd;
      if (right_fixResult !== "" && right_fixResult !== undefined) {
        right_fixAnswear = right_fixResult;
        right_fixBd = "|/|" + right_fixAnswear;
      } else if (right_fixAnswear !== "" && right_fixAnswear !== undefined) {
        right_fixBd = "|/|" + right_fixAnswear;
      } else {
        right_fixBd = "";
      }

      var sample_calcBd;
      if (sample_calcResult !== "" && sample_calcResult !== undefined) {
        sample_calcAnswear = sample_calcResult;
        sample_calcBd = "|/|" + sample_calcAnswear;
      } else if (
        sample_calcAnswear !== "" &&
        sample_calcAnswear !== undefined
      ) {
        sample_calcBd = "|/|" + sample_calcAnswear;
      } else {
        sample_calcBd = "";
      }

      var next_researchBd;
      if (next_researchResult !== "" && next_researchResult !== undefined) {
        next_researchAnswear = next_researchResult;
        next_researchBd = "|/|" + next_researchAnswear;
      } else if (
        next_researchAnswear !== "" &&
        next_researchAnswear !== undefined
      ) {
        next_researchBd = "|/|" + next_researchAnswear;
      } else {
        next_researchBd = "";
      }

      var audienceBd;
      if (audienceResult !== "" && audienceResult !== undefined) {
        audienceAnswear = audienceResult;
        audienceBd = "|/|" + audienceAnswear;
      } else if (audienceAnswear !== "" && audienceAnswear !== undefined) {
        audienceBd = "|/|" + audienceAnswear;
      } else {
        audienceBd = "";
      }

      var portretBd;
      if (portretResult !== "" && portretResult !== undefined) {
        portretAnswear = portretResult;
        portretBd = "|/|" + portretAnswear;
      } else if (portretAnswear !== "" && portretAnswear !== undefined) {
        portretBd = "|/|" + portretAnswear;
      } else {
        portretBd = "";
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

      if (tab === "tab1") {
        var dataTab1 =
          countProgressTab1 +
          ta_infoBd +
          start_researchBd +
          castdevsBd +
          interviewBd +
          retention_3_calcBd +
          fine_questionsBd +
          segment_interviewBd +
          starTab1Bd;
      } else if (tab === "tab2") {
        var dataTab2 =
          countProgressTab2 +
          common_charBd +
          mail_inviteBd +
          anket_problemBd +
          right_fixBd +
          sample_calcBd +
          starTab2Bd;
      } else if (tab === "tab3") {
        var dataTab3 =
          countProgressTab3 +
          next_researchBd +
          audienceBd +
          portretBd +
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
          collection_id: "6517f3b8afa18ec4281d2823",
          user_id: fragments[4],
          tab1theory: tab1theoryVal
        };
      } else if (tabs === "tab2") {
        data2 = {
          collection_id: "6517f3b8afa18ec4281d2823",
          user_id: fragments[4],
          tab2theory: tab2theoryVal
        };
      } else if (tabs === "tab3") {
        data2 = {
          collection_id: "6517f3b8afa18ec4281d2823",
          user_id: fragments[4],
          tab3theory: tab3theoryVal
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
