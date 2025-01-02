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

var countProgressTab1 = tab1BDVal[0];
var situationAnswer = tab1BDVal[1];
var reactionAnswer = tab1BDVal[2];
var investigationFullAnswer = tab1BDVal[3];
var investigation_twoFullAnswer = tab1BDVal[4];
var investigation_threeFullAnswer = tab1BDVal[5];
var investigation_fourFullAnswer = tab1BDVal[6];
var investigation_fiveFullAnswer = tab1BDVal[7];
var investigation_sixFullAnswer = tab1BDVal[8];
var general_conclusionAnswer = tab1BDVal[9];
var solving_situationAnswer = tab1BDVal[10];
var conflict_typeAnswer = tab1BDVal[11];
var consequences_dismissalAnswer = tab1BDVal[12];
var decideAnswer = tab1BDVal[13];
var say_directlyAnswer = tab1BDVal[14];
var starAnswearTab1 = tab1BDVal[15];

//
var julia_infoAnswer;
var investigation_reactionAnswer;
//

var investigationAnswer;
var investigation_twoAnswer;
var investigation_threeAnswer;
var investigation_fourAnswer;
var investigation_fiveAnswer;
var investigation_sixAnswer;
var investigationResult;
var investigation_twoResult;
var investigation_threeResult;
var investigation_fourResult;
var investigation_fiveResult;
var investigation_sixResult;
var investProgress;
var investProgress2;
var investProgress3;
var investProgress4;
var investProgress5;
var investProgress6;

if (investigationFullAnswer !== "" && investigationFullAnswer !== undefined) {
  var investigationSplit = investigationFullAnswer.split("/");
  var investigationAnswer = investigationSplit[0];
  // console.log(investigationAnswer);
  if (investigationSplit.length > 0) {
    investProgress = investigationSplit[1];
  }
  // console.log(investProgress);
  if (investigationSplit.length > 1 && investigationAnswer === "one") {
    investigation_reactionAnswer = investigationSplit[2];
  } else if (investigationSplit.length > 1 && investigationAnswer === "three") {
    julia_infoAnswer = investigationSplit[2];
  }
}

if (
  investigation_twoFullAnswer !== "" &&
  investigation_twoFullAnswer !== undefined
) {
  var investigation_twoSplit = investigation_twoFullAnswer.split("/");
  var investigation_twoAnswer = investigation_twoSplit[0];
  if (investigation_twoSplit.length > 0) {
    investProgress2 = investigation_twoSplit[1];
  }
  if (investigation_twoSplit.length > 1 && investigation_twoAnswer === "one") {
    investigation_reactionAnswer = investigation_twoSplit[2];
  } else if (
    investigation_twoSplit.length > 1 &&
    investigation_twoAnswer === "three"
  ) {
    julia_infoAnswer = investigation_twoSplit[2];
  }
}

if (
  investigation_threeFullAnswer !== "" &&
  investigation_threeFullAnswer !== undefined
) {
  var investigation_threeSplit = investigation_threeFullAnswer.split("/");
  var investigation_threeAnswer = investigation_threeSplit[0];
  if (investigation_threeSplit.length > 0) {
    investProgress3 = investigation_threeSplit[1];
  }
  if (
    investigation_threeSplit.length > 1 &&
    investigation_threeAnswer === "one"
  ) {
    investigation_reactionAnswer = investigation_threeSplit[2];
  } else if (
    investigation_threeSplit.length > 1 &&
    investigation_threeAnswer === "three"
  ) {
    julia_infoAnswer = investigation_threeSplit[2];
  }
}

if (
  investigation_fourFullAnswer !== "" &&
  investigation_fourFullAnswer !== undefined
) {
  var investigation_fourSplit = investigation_fourFullAnswer.split("/");
  var investigation_fourAnswer = investigation_fourSplit[0];
  if (investigation_fourSplit.length > 0) {
    investProgress4 = investigation_fourSplit[1];
  }
  if (
    investigation_fourSplit.length > 1 &&
    investigation_fourAnswer === "one"
  ) {
    investigation_reactionAnswer = investigation_fourSplit[2];
  } else if (
    investigation_fourSplit.length > 1 &&
    investigation_fourAnswer === "three"
  ) {
    julia_infoAnswer = investigation_fourSplit[2];
  }
}

if (
  investigation_fiveFullAnswer !== "" &&
  investigation_fiveFullAnswer !== undefined
) {
  var investigation_fiveSplit = investigation_fiveFullAnswer.split("/");
  var investigation_fiveAnswer = investigation_fiveSplit[0];
  if (investigation_fiveSplit.length > 0) {
    investProgress5 = investigation_fiveSplit[1];
  }
  if (
    investigation_fiveSplit.length > 1 &&
    investigation_fiveAnswer === "one"
  ) {
    investigation_reactionAnswer = investigation_fiveSplit[2];
  } else if (
    investigation_fiveSplit.length > 1 &&
    investigation_fiveAnswer === "three"
  ) {
    julia_infoAnswer = investigation_fiveSplit[2];
  }
}

if (
  investigation_sixFullAnswer !== "" &&
  investigation_sixFullAnswer !== undefined
) {
  var investigation_sixAnswer = investigation_sixFullAnswer;
}

var countProgressTab2 = tab2BDVal[0];
var missionAnswer = tab2BDVal[1];
var problemAnswer = tab2BDVal[2];
var stepsAnswer = tab2BDVal[3];
var fun_txtAnswer = tab2BDVal[4];
var answer_annAnswer = tab2BDVal[5];
var descriptionAnswer = tab2BDVal[6];
var feedback_txtAnswer = tab2BDVal[7];
var standartFullAnswer = tab2BDVal[8];
var standart_lastAnswer = tab2BDVal[9];
var standart2FullAnswer = tab2BDVal[10];
var starAnswearTab2 = tab2BDVal[11];

var standart_first_txtAnswer;
var standart_first_txt2Answer;
var standart_secondAnswer;
var standart_second2Answer;
var standart_thirdAnswer;
var standart_third2Answer;

var standartAnswer;
var standart2Answer;
var standartResult;
var standart2Result;
var investProgress7;
var investProgress8;

if (standartFullAnswer !== "" && standartFullAnswer !== undefined) {
  var standartSplit = standartFullAnswer.split("/");
  var standartAnswer = standartSplit[0];
  // console.log(standartAnswer);
  if (standartSplit.length > 0) {
    investProgress7 = standartSplit[1];
  }
  // console.log(investProgress);
  if (standartAnswer === "one") {
    if (standartSplit.length > 1) {
      standart_first_txtAnswer = standartSplit[2];
    }
    if (standartSplit.length > 2) {
      standart_secondAnswer = standartSplit[3];
    }
    if (standartSplit.length > 3) {
      standart_thirdAnswer = standartSplit[4];
    }
  } else if (standartAnswer === "two") {
    if (standartSplit.length > 1) {
      standart_first_txt2Answer = standartSplit[2];
    }
    if (standartSplit.length > 2) {
      standart_second2Answer = standartSplit[3];
    }
    if (standartSplit.length > 3) {
      standart_third2Answer = standartSplit[4];
    }
  }
}

if (standart2FullAnswer !== "" && standart2FullAnswer !== undefined) {
  var standart2Split = standart2FullAnswer.split("/");
  var standart2Answer = standart2Split[0];
  // console.log(standart2Answer);
  if (standart2Split.length > 0) {
    investProgress8 = standart2Split[1];
  }
  // console.log(investProgress);
  if (standart2Answer === "one") {
    if (standart2Split.length > 1) {
      standart_first_txtAnswer = standart2Split[2];
    }
    if (standart2Split.length > 2) {
      standart_secondAnswer = standart2Split[3];
    }
    if (standart2Split.length > 3) {
      standart_thirdAnswer = standart2Split[4];
    }
  } else if (standart2Answer === "two") {
    if (standart2Split.length > 1) {
      standart_first_txt2Answer = standart2Split[2];
    }
    if (standart2Split.length > 2) {
      standart_second2Answer = standart2Split[3];
    }
    if (standart2Split.length > 3) {
      standart_third2Answer = standart2Split[4];
    }
  }
}

// var standart_first_txtAnswer = tab2BDVal[9];
// var standart_secondAnswer = tab2BDVal[10];
// var standart_thirdAnswer = tab2BDVal[11];
// var standart_lastAnswer = tab2BDVal[12];
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
create_lesson("655b23d09365d880eb114243", user_email, fragments[4]);

if (countProgressTab1 > 36) {
  availableLinks("eleventhl_tab2");
  activetab("eleventhl_tab2", "tab2");
}

function reactionDelete(value) {
  var ones, twos, threes;
  switch (value) {
    case "one":
      twos = document.querySelectorAll('[reaction="two"], [reaction="three"]');
      break;
    case "two":
      ones = document.querySelectorAll('[reaction="one"], [reaction="three"]');
      break;
    case "three":
      ones = document.querySelectorAll('[reaction="one"]');
      twos = document.querySelectorAll('[reaction="two"]');
      break;
  }

  ones && ones.forEach((one) => one.remove());
  twos && twos.forEach((two) => two.remove());
  threes && threes.forEach((three) => three.remove());
}

function solvingDelete(value) {
  if (value === "one") {
    var helps = document.querySelectorAll("[help]");
    helps.forEach((help) => {
      help.remove();
    });
    conflict_typeAnswer = "empty";
    consequences_dismissalAnswer = "empty";
  }
}

function sayDelete(value) {
  var helps = document.querySelectorAll("[say_directly]");

  helps.forEach((help) => {
    if (value === "one" && help.getAttribute("say_directly") === "two") {
      help.remove();
    } else if (value === "two" && help.getAttribute("say_directly") === "one") {
      help.remove();
    }
  });
}

function markDelete(value) {
  var ones, twos, threes;
  switch (value) {
    case "one":
      twos = document.querySelectorAll(
        '[investigation_reaction="two"], [investigation_reaction="three"]',
      );
      break;
    case "two":
      ones = document.querySelectorAll(
        '[investigation_reaction="one"], [investigation_reaction="three"]',
      );
      break;
    case "three":
      ones = document.querySelectorAll('[investigation_reaction="one"]');
      twos = document.querySelectorAll('[investigation_reaction="two"]');
      break;
  }

  ones && ones.forEach((one) => one.remove());
  twos && twos.forEach((two) => two.remove());
  threes && threes.forEach((three) => three.remove());
}

function juliaInfo(value) {
  var ones, twos;
  switch (value) {
    case "one":
      twos = document.querySelectorAll('[julia_info="two"]');
      break;
    case "two":
      ones = document.querySelectorAll('[julia_info="one"]');
      break;
  }
  ones && ones.forEach((one) => one.remove());
  twos && twos.forEach((two) => two.remove());
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

function investigationProgress(
  element,
  investProgress,
  attrBlock,
  blockClosest,
) {
  if (
    investProgress > 0 &&
    investProgress !== "" &&
    investProgress !== undefined
  ) {
    var targetButton = document.querySelector(
      "div[" +
        attrBlock +
        '="' +
        element +
        '"] [investProgress="' +
        investProgress +
        '"]',
    );

    var targetElement = targetButton.closest('[blop="main"]');
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

    if (targetElement.hasAttribute("last_in_var")) {
      var investLastBlop = targetElement.closest("." + blockClosest);
      investLastBlop.nextElementSibling.classList.add("next_visible");
      setTimeout(function () {
        investLastBlop.nextElementSibling.classList.add("blop_animate");
      }, 1);
    } else {
      var nextTargetElement = targetElement.nextElementSibling;
      nextTargetElement.classList.add("next_visible", "blop_animate");
    }
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }
}

function radioCheck(blopElement) {
  var radio = blopElement.querySelector('input[type="radio"]:checked');
  if (blopElement.id === "reaction") {
    if (radio) {
      var value = radio.value;
      reactionDelete(value);
    }
  } else if (blopElement.id === "solving_situation") {
    if (radio) {
      var value = radio.value;
      solvingDelete(value);
    }
  } else if (blopElement.id === "say_directly") {
    if (radio) {
      var value = radio.value;
      sayDelete(value);
    }
  }
  // else if (blopElement.id === "standart") {
  //   if (radio) {
  //     var value = radio.value;
  //     standartVar(value);
  //   }
  // }
  // else if (blopElement.id === "standart_second") {
  //   if (radio) {
  //     var value = radio.value;
  //     standart_secondVar(standartAnswer, target_second);
  //   }
  // }
  else if (
    blopElement.id === "investigation" ||
    blopElement.id === "investigation_two" ||
    blopElement.id === "investigation_three" ||
    blopElement.id === "investigation_four" ||
    blopElement.id === "investigation_five" ||
    blopElement.id === "investigation_six"
  ) {
    if (radio) {
      var value = radio.value;
      var deletes = document.querySelectorAll("[invest_del]");
      if (value !== "six" && value !== "empty") {
        investigationEmbed(value, blopElement, "variant");
        deletes.forEach((deleteElement, index) => {
          var currentIndex = Array.from(deletes).indexOf(blopElement);
          deletes.forEach((element, elementIndex) => {
            if (elementIndex > currentIndex) {
              var elDeleteAnswer = element.querySelector(
                '[answer_delete="' + value + '"]',
              );
              elDeleteAnswer.style.display = "none";
            }
          });
        });
      } else if (value === "six" && value !== "empty") {
        var six = document.querySelector('[variant="six"]');
        six.classList.add("next_visible");
        setTimeout(function () {
          six.classList.add("blop_animate");
        }, 1);

        deletes.forEach((deleteElement, index) => {
          var currentIndex = Array.from(deletes).indexOf(blopElement);
          deletes.forEach((element, elementIndex) => {
            if (elementIndex > currentIndex) {
              element.remove();
              // investigationResults[elementIndex] = "empty";
              if (elementIndex === 1) {
                investigation_threeResult = "empty";
              } else if (elementIndex === 2) {
                investigation_fourResult = "empty";
              } else if (elementIndex === 3) {
                investigation_fiveResult = "empty";
              } else if (elementIndex === 4) {
                investigation_sixResult = "empty";
              }
            }
          });
        });
      }
    }
  } else if (blopElement.id === "standart" || blopElement.id === "standart2") {
    if (radio) {
      var value = radio.value;
      if (value !== "empty") {
        investigationEmbed(value, blopElement, "last_block");
        if (blopElement.id === "standart") {
          document.querySelector(
            '[last_answer_delete="' + value + '"]',
          ).style.display = "none";
        }
      }
    }
  } else if (blopElement.id === "standart_last") {
    var value = radio.value;
    if (value === "one") {
      document.getElementById("repeatStandart").remove();
      document.getElementById("standart2").remove();
      standart2Answer = "empty";
      document
        .querySelector("[standart='lesson_end']")
        .classList.add("next_visible");
      setTimeout(function () {
        document
          .querySelector("[standart='lesson_end']")
          .classList.add("blop_animate");
      }, 1);
    }
  } else if (blopElement.id === "julia_info") {
    if (radio) {
      var value = radio.value;
      juliaInfo(value);
    }
  } else if (blopElement.id === "investigation_reaction") {
    if (radio) {
      var value = radio.value;
      markDelete(value);
    }
  }
  // else if (
  //   blopElement.id === "standart_second" ||
  //   blopElement.id === "standart_third"
  // ) {
  //   if (radio) {
  //     var value = radio.value;
  //     var radioAnswerStandart = blopElement.nextElementSibling.querySelector(
  //       "[standart='" + standartAnswer + "'] " + "." + value,
  //     );
  //     radioAnswerStandart.classList.add("answer_visible");
  //   }
  // } else if (
  //   blopElement.id === "standart_last" &&
  //   blopElement.querySelector('[type="radio"][value="one"]:checked')
  // ) {
  //   document.getElementById("repeatStandart").remove();
  //   document
  //     .querySelector("[standart='lesson_end']")
  //     .classList.add("next_visible");
  //   setTimeout(function () {
  //     document
  //       .querySelector("[standart='lesson_end']")
  //       .classList.add("blop_animate");
  //   }, 1);
  // }
  // if (blopElement.id !== "standart_last")
  else {
    if (radio) {
      var value = radio.value;
      if (value !== "empty") {
        var radioAnswer = blopElement.nextElementSibling.querySelector(
          "." + value,
        );
        radioAnswer.classList.add("answer_visible");
      }
    }
  }
}
// conflict_type
function conflict_typeCheck() {
  var conflict_typeInfo = document.getElementById("conflict_type");
  var conflict_typeForm = conflict_typeInfo.querySelector("form");
  var conflict_typeElements =
    conflict_typeForm.querySelectorAll(".check_input");

  var conflict_typeFirst = conflict_typeElements[0].querySelector(
    'input[type="checkbox"]',
  );
  var conflict_typeSecond = conflict_typeElements[1].querySelector(
    'input[type="checkbox"]',
  );
  var conflict_typeThird = conflict_typeElements[2].querySelector(
    'input[type="checkbox"]',
  );
  var conflict_typeFourth = conflict_typeElements[3].querySelector(
    'input[type="checkbox"]',
  );

  if (
    !conflict_typeFirst.checked &&
    conflict_typeSecond.checked &&
    conflict_typeThird.checked &&
    !conflict_typeFourth.checked
  ) {
    conflict_typeInfo.nextElementSibling
      .querySelector(".no")
      .classList.add("hide");
    conflict_typeInfo.nextElementSibling
      .querySelector(".yes")
      .classList.remove("hide");
  } else {
    conflict_typeInfo.nextElementSibling
      .querySelector(".no")
      .classList.remove("hide");
    conflict_typeInfo.nextElementSibling
      .querySelector(".yes")
      .classList.add("hide");
  }
}

function stepsCheck() {
  var stepsInfo = document.getElementById("steps");
  var stepsForm = stepsInfo.querySelector("form");
  var stepsElements = stepsForm.querySelectorAll(".check_input");

  var stepsFirst = stepsElements[0].querySelector('input[type="checkbox"]');
  var stepsSecond = stepsElements[1].querySelector('input[type="checkbox"]');
  var stepsThird = stepsElements[2].querySelector('input[type="checkbox"]');
  var stepsFourth = stepsElements[3].querySelector('input[type="checkbox"]');
  var stepsFiveth = stepsElements[4].querySelector('input[type="checkbox"]');
  var stepsSixth = stepsElements[5].querySelector('input[type="checkbox"]');

  if (
    !stepsFirst.checked &&
    !stepsSecond.checked &&
    stepsThird.checked &&
    !stepsFourth.checked &&
    stepsFiveth.checked &&
    stepsSixth.checked
  ) {
    stepsInfo.nextElementSibling.querySelector(".no").classList.add("hide");
    stepsInfo.nextElementSibling.querySelector(".yes").classList.remove("hide");
  } else {
    stepsInfo.nextElementSibling.querySelector(".no").classList.remove("hide");
    stepsInfo.nextElementSibling.querySelector(".yes").classList.add("hide");
  }
}

// preview_text_wrapper
var prevWrap = document.querySelector(".preview_text_wrapper");
var attentionButton = document.querySelector(".prev_attention");
var uniAttention = document.querySelector(".uni_attention");

attentionButton.addEventListener("click", () => {
  uniAttention.style.display = "none";
  prevWrap.style.display = "flex";
});

function tab1Progress(numberBlop) {
  if (numberBlop > 0 && numberBlop !== "" && numberBlop !== undefined) {
    if (reactionAnswer !== "" && reactionAnswer !== undefined) {
      reactionDelete(reactionAnswer);
    }
    attentionButton.style.display = "none";
    uniAttention.style.display = "flex";
    prevWrap.style.display = "flex";
    // if (investigationAnswer !== "" && investigationAnswer !== undefined) {
    //   var investigationEl = document.getElementById("investigation");
    //   investigationEmbed(investigationAnswer, investigationEl);
    // }
    if (
      solving_situationAnswer !== "" &&
      solving_situationAnswer !== undefined
    ) {
      solvingDelete(solving_situationAnswer);
    }
    if (say_directlyAnswer !== "" && say_directlyAnswer !== undefined) {
      sayDelete(say_directlyAnswer);
    }

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
    if (
      targetElement.id !== "investigation" &&
      targetElement.id !== "investigation_two" &&
      targetElement.id !== "investigation_three" &&
      targetElement.id !== "investigation_four" &&
      targetElement.id !== "investigation_five" &&
      targetElement.id !== "investigation_six"
    ) {
      nextTargetElement.classList.add("next_visible", "blop_animate");
    }
  }

  function checkboxGetInfo(block, value) {
    if (value !== "empty") {
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
      if (
        block &&
        block.id === "conflict_type" &&
        conflict_typeAnswer !== "empty"
      ) {
        conflict_typeCheck();
      }
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
    if (value !== "empty") {
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
  }
  function textareaGethInfo(block, value) {
    if (value !== "empty") {
      var textarea = block.querySelector("textarea");
      textarea.value = value;
    }
  }

  if (situationAnswer !== "" && situationAnswer !== undefined) {
    const situationTask = document.getElementById("situation");
    radioGetInfo(situationTask, situationAnswer);
  }
  if (reactionAnswer !== "" && reactionAnswer !== undefined) {
    const reactionTask = document.getElementById("reaction");
    radioGetInfo(reactionTask, reactionAnswer);
  }
  if (investigationAnswer !== "" && investigationAnswer !== undefined) {
    const investigationTask = document.getElementById("investigation");
    radioGetInfo(investigationTask, investigationAnswer);
  }
  if (investigation_twoAnswer !== "" && investigation_twoAnswer !== undefined) {
    const investigation_twoTask = document.getElementById("investigation_two");
    radioGetInfo(investigation_twoTask, investigation_twoAnswer);
  }
  if (
    investigation_threeAnswer !== "" &&
    investigation_threeAnswer !== undefined
  ) {
    const investigation_threeTask = document.getElementById(
      "investigation_three",
    );
    radioGetInfo(investigation_threeTask, investigation_threeAnswer);
  }
  if (
    investigation_fourAnswer !== "" &&
    investigation_fourAnswer !== undefined
  ) {
    const investigation_fourTask =
      document.getElementById("investigation_four");
    radioGetInfo(investigation_fourTask, investigation_fourAnswer);
  }
  if (
    investigation_fiveAnswer !== "" &&
    investigation_fiveAnswer !== undefined
  ) {
    const investigation_fiveTask =
      document.getElementById("investigation_five");
    radioGetInfo(investigation_fiveTask, investigation_fiveAnswer);
  }
  if (investigation_sixAnswer !== "" && investigation_sixAnswer !== undefined) {
    const investigation_sixTask = document.getElementById("investigation_six");
    radioGetInfo(investigation_sixTask, investigation_sixAnswer);
  }

  // ------ Mark var -----
  if (
    investigation_reactionAnswer !== "" &&
    investigation_reactionAnswer !== undefined
  ) {
    const investigation_reactionTask = document.getElementById(
      "investigation_reaction",
    );
    radioGetInfo(investigation_reactionTask, investigation_reactionAnswer);
  }
  if (julia_infoAnswer !== "" && julia_infoAnswer !== undefined) {
    const julia_infoTask = document.getElementById("julia_info");
    radioGetInfo(julia_infoTask, julia_infoAnswer);
  }
  // -----------

  if (
    general_conclusionAnswer !== "" &&
    general_conclusionAnswer !== undefined
  ) {
    const general_conclusionTask =
      document.getElementById("general_conclusion");
    textareaGethInfo(general_conclusionTask, general_conclusionAnswer);
  }
  if (solving_situationAnswer !== "" && solving_situationAnswer !== undefined) {
    const solving_situationTask = document.getElementById("solving_situation");
    radioGetInfo(solving_situationTask, solving_situationAnswer);
  }
  if (conflict_typeAnswer !== "" && conflict_typeAnswer !== undefined) {
    const conflict_typeTask = document.getElementById("conflict_type");
    checkboxGetInfo(conflict_typeTask, conflict_typeAnswer);
  }
  if (
    consequences_dismissalAnswer !== "" &&
    consequences_dismissalAnswer !== undefined
  ) {
    const consequences_dismissalTask = document.getElementById(
      "consequences_dismissal",
    );
    textareaGethInfo(consequences_dismissalTask, consequences_dismissalAnswer);
  }
  if (decideAnswer !== "" && decideAnswer !== undefined) {
    const decideTask = document.getElementById("decide");
    radioGetInfo(decideTask, decideAnswer);
  }
  if (say_directlyAnswer !== "" && say_directlyAnswer !== undefined) {
    const say_directlyTask = document.getElementById("say_directly");
    radioGetInfo(say_directlyTask, say_directlyAnswer);
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
    if (block && block.id === "steps") {
      stepsCheck();
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
    if (value !== "empty") {
      var radioButton;
      radioButton = block.querySelector(
        'input[type="radio"][value="' + value + '"]',
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

  if (missionAnswer !== "" && missionAnswer !== undefined) {
    const missionTask = document.getElementById("mission");
    radioGetInfo(missionTask, missionAnswer);
  }
  if (problemAnswer !== "" && problemAnswer !== undefined) {
    const problemTask = document.getElementById("problem");
    radioGetInfo(problemTask, problemAnswer);
  }
  if (stepsAnswer !== "" && stepsAnswer !== undefined) {
    const stepsTask = document.getElementById("steps");
    checkboxGetInfo(stepsTask, stepsAnswer);
  }
  if (fun_txtAnswer !== "" && fun_txtAnswer !== undefined) {
    const fun_txtTask = document.getElementById("fun_txt");
    textareaGethInfo(fun_txtTask, fun_txtAnswer);
  }
  if (answer_annAnswer !== "" && answer_annAnswer !== undefined) {
    const answer_annTask = document.getElementById("answer_ann");
    radioGetInfo(answer_annTask, answer_annAnswer);
  }
  if (descriptionAnswer !== "" && descriptionAnswer !== undefined) {
    const descriptionTask = document.getElementById("description");
    radioGetInfo(descriptionTask, descriptionAnswer);
  }
  if (feedback_txtAnswer !== "" && feedback_txtAnswer !== undefined) {
    const feedback_txtTask = document.getElementById("feedback_txt");
    textareaGethInfo(feedback_txtTask, feedback_txtAnswer);
  }
  if (standartAnswer !== "" && standartAnswer !== undefined) {
    const standartTask = document.getElementById("standart");
    radioGetInfo(standartTask, standartAnswer);
  }
  if (standart2Answer !== "" && standart2Answer !== undefined) {
    const standar2tTask = document.getElementById("standart2");
    radioGetInfo(standar2tTask, standart2Answer);
  }
  if (
    standart_first_txtAnswer !== "" &&
    standart_first_txtAnswer !== undefined
  ) {
    const standart_first_txtTask =
      document.getElementById("standart_first_txt");
    textareaGethInfo(standart_first_txtTask, standart_first_txtAnswer);
  }
  if (
    standart_first_txt2Answer !== "" &&
    standart_first_txt2Answer !== undefined
  ) {
    const standart_first_txt2Task = document.getElementById(
      "standart_first_txt2",
    );
    textareaGethInfo(standart_first_txt2Task, standart_first_txt2Answer);
  }
  if (standart_secondAnswer !== "" && standart_secondAnswer !== undefined) {
    const standart_secondTask = document.getElementById("standart_second");
    radioGetInfo(standart_secondTask, standart_secondAnswer);
  }
  if (standart_second2Answer !== "" && standart_second2Answer !== undefined) {
    const standart_second2Task = document.getElementById("standart_second2");
    radioGetInfo(standart_second2Task, standart_second2Answer);
  }
  if (standart_thirdAnswer !== "" && standart_thirdAnswer !== undefined) {
    const standart_thirdTask = document.getElementById("standart_third");
    radioGetInfo(standart_thirdTask, standart_thirdAnswer);
  }
  if (standart_third2Answer !== "" && standart_third2Answer !== undefined) {
    const standart_third2Task = document.getElementById("standart_third2");
    radioGetInfo(standart_third2Task, standart_third2Answer);
  }
  if (standart_lastAnswer !== "" && standart_lastAnswer !== undefined) {
    const standart_lastTask = document.getElementById("standart_last");
    radioGetInfo(standart_lastTask, standart_lastAnswer);
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

if (countProgressTab1 !== "" && countProgressTab1 !== undefined) {
  tab1Progress(countProgressTab1);
}

if (investProgress !== "" && investProgress !== undefined) {
  investigationProgress(
    investigationAnswer,
    investProgress,
    "variant",
    "investigation_block",
  );
}
if (investProgress2 !== "" && investProgress2 !== undefined) {
  investigationProgress(
    investigation_twoAnswer,
    investProgress2,
    "variant",
    "investigation_block",
  );
}
if (investProgress3 !== "" && investProgress3 !== undefined) {
  investigationProgress(
    investigation_threeAnswer,
    investProgress3,
    "variant",
    "investigation_block",
  );
}
if (investProgress4 !== "" && investProgress4 !== undefined) {
  investigationProgress(
    investigation_fourAnswer,
    investProgress4,
    "variant",
    "investigation_block",
  );
}
if (investProgress5 !== "" && investProgress5 !== undefined) {
  investigationProgress(
    investigation_fiveAnswer,
    investProgress5,
    "variant",
    "investigation_block",
  );
}
if (investProgress6 !== "" && investProgress6 !== undefined) {
  investigationProgress(
    investigation_sixAnswer,
    investProgress6,
    "variant",
    "investigation_block",
  );
}
// tab1Progress(8);
if (countProgressTab2 !== "" && countProgressTab2 !== undefined) {
  tab2Progress(countProgressTab2);
}
if (investProgress7 !== "" && investProgress7 !== undefined) {
  investigationProgress(
    standartAnswer,
    investProgress7,
    "last_block",
    "last_block",
  );
}
if (investProgress8 !== "" && investProgress8 !== undefined) {
  investigationProgress(
    standart2Answer,
    investProgress8,
    "last_block",
    "last_block",
  );
}

primalButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    var blopElement = button.closest(".blop");
    if (blopElement) {
      blopElement.classList.add("done_blop");

      radioCheck(blopElement);
      if (conflict_typeAnswer !== "empty") {
        conflict_typeCheck();
      }
      stepsCheck();

      if (blopElement.hasAttribute("last_in_var")) {
        var investLastBlop;
        if (blopElement.closest(".investigation_block")) {
          investLastBlop = blopElement.closest(".investigation_block");
        } else if (blopElement.closest(".last_block")) {
          investLastBlop = blopElement.closest(".last_block");
        }
        investLastBlop.nextElementSibling.classList.add("next_visible");
        setTimeout(function () {
          investLastBlop.nextElementSibling.classList.add("blop_animate");
        }, 1);
      } else if (
        blopElement.id !== "investigation" &&
        blopElement.id !== "investigation_two" &&
        blopElement.id !== "investigation_three" &&
        blopElement.id !== "investigation_four" &&
        blopElement.id !== "investigation_five" &&
        blopElement.id !== "investigation_six"
      ) {
        blopElement.nextElementSibling.classList.add("next_visible");
        setTimeout(function () {
          blopElement.nextElementSibling.classList.add("blop_animate");
        }, 1);
      }

      if (button.classList.contains("last_button")) {
        var ss = button.getAttribute("numberBlop");
        create_lesson("655b23d09365d880eb114243", user_email, fragments[4]);

        var parent = button.closest(".lesson_tab").getAttribute("tabs");

        if (ss > 36 && parent === "tab1") {
          availableLinks("eleventhl_tab2");
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
      } else if (scrollButton.closest(".blop").hasAttribute("last_in_var")) {
        if (scrollButton.closest(".investigation_block")) {
          mainElement = scrollButton.closest(
            ".investigation_block",
          ).nextElementSibling;
        } else if (scrollButton.closest(".last_block")) {
          mainElement = scrollButton.closest(".last_block").nextElementSibling;
        }
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
      return result;
    }

    if (buttonWithAttr.closest("#situation")) {
      const situationTask = document.getElementById("situation");
      var situationResult = radioPushInfo(situationTask);
    }
    if (buttonWithAttr.closest("#reaction")) {
      const reactionTask = document.getElementById("reaction");
      var reactionResult = radioPushInfo(reactionTask);
    }
    if (buttonWithAttr.closest("#investigation")) {
      const investigationTask = document.getElementById("investigation");
      investigationResult = radioPushInfo(investigationTask);
    }
    if (buttonWithAttr.closest("#investigation_two")) {
      const investigation_twoTask =
        document.getElementById("investigation_two");
      investigation_twoResult = radioPushInfo(investigation_twoTask);
    }
    if (buttonWithAttr.closest("#investigation_three")) {
      const investigation_threeTask = document.getElementById(
        "investigation_three",
      );
      investigation_threeResult = radioPushInfo(investigation_threeTask);
    }
    if (buttonWithAttr.closest("#investigation_four")) {
      const investigation_fourTask =
        document.getElementById("investigation_four");
      investigation_fourResult = radioPushInfo(investigation_fourTask);
    }
    if (buttonWithAttr.closest("#investigation_five")) {
      const investigation_fiveTask =
        document.getElementById("investigation_five");
      investigation_fiveResult = radioPushInfo(investigation_fiveTask);
    }
    if (buttonWithAttr.closest("#investigation_six")) {
      const investigation_sixTask =
        document.getElementById("investigation_six");
      investigation_sixResult = radioPushInfo(investigation_sixTask);
    }
    // -----------
    if (buttonWithAttr.closest("#investigation_reaction")) {
      const investigation_reactionTask = document.getElementById(
        "investigation_reaction",
      );
      var investigation_reactionResult = radioPushInfo(
        investigation_reactionTask,
      );
    }
    if (buttonWithAttr.closest("#julia_info")) {
      const julia_infoTask = document.getElementById("julia_info");
      var julia_infoResult = radioPushInfo(julia_infoTask);
    }
    // -----------

    if (buttonWithAttr.closest("#general_conclusion")) {
      const general_conclusionTask =
        document.getElementById("general_conclusion");
      var general_conclusionResult = textareaPushInfo(general_conclusionTask);
    }
    if (buttonWithAttr.closest("#solving_situation")) {
      const solving_situationTask =
        document.getElementById("solving_situation");
      var solving_situationResult = radioPushInfo(solving_situationTask);
    }
    if (buttonWithAttr.closest("#conflict_type")) {
      const conflict_typeTask = document.getElementById("conflict_type");
      var conflict_typeResult = checkboxPushInfo(conflict_typeTask);
    }
    if (buttonWithAttr.closest("#consequences_dismissal")) {
      const consequences_dismissalTask = document.getElementById(
        "consequences_dismissal",
      );
      var consequences_dismissalResult = textareaPushInfo(
        consequences_dismissalTask,
      );
    }
    if (buttonWithAttr.closest("#decide")) {
      const decideTask = document.getElementById("decide");
      var decideResult = radioPushInfo(decideTask);
    }
    if (buttonWithAttr.closest("#say_directly")) {
      const say_directlyTask = document.getElementById("say_directly");
      var say_directlyResult = radioPushInfo(say_directlyTask);
    }

    // ------------------

    if (buttonWithAttr.closest("#mission")) {
      const missionTask = document.getElementById("mission");
      var missionResult = radioPushInfo(missionTask);
    }
    if (buttonWithAttr.closest("#problem")) {
      const problemTask = document.getElementById("problem");
      var problemResult = radioPushInfo(problemTask);
    }
    if (buttonWithAttr.closest("#steps")) {
      const stepsTask = document.getElementById("steps");
      var stepsResult = checkboxPushInfo(stepsTask);
    }
    if (buttonWithAttr.closest("#fun_txt")) {
      const fun_txtTask = document.getElementById("fun_txt");
      var fun_txtResult = textareaPushInfo(fun_txtTask);
    }
    if (buttonWithAttr.closest("#answer_ann")) {
      const answer_annTask = document.getElementById("answer_ann");
      var answer_annResult = radioPushInfo(answer_annTask);
    }
    if (buttonWithAttr.closest("#description")) {
      const descriptionTask = document.getElementById("description");
      var descriptionResult = radioPushInfo(descriptionTask);
    }
    if (buttonWithAttr.closest("#feedback_txt")) {
      const feedback_txtTask = document.getElementById("feedback_txt");
      var feedback_txtResult = textareaPushInfo(feedback_txtTask);
    }
    if (buttonWithAttr.closest("#standart")) {
      const standartTask = document.getElementById("standart");
      var standartResult = radioPushInfo(standartTask);
    }
    if (buttonWithAttr.closest("#standart2")) {
      const standart2Task = document.getElementById("standart2");
      var standart2Result = radioPushInfo(standart2Task);
    }
    if (buttonWithAttr.closest("#standart_first_txt")) {
      const standart_first_txtTask =
        document.getElementById("standart_first_txt");
      var standart_first_txtResult = textareaPushInfo(standart_first_txtTask);
    }
    if (buttonWithAttr.closest("#standart_first_txt2")) {
      const standart_first_txt2Task = document.getElementById(
        "standart_first_txt2",
      );
      var standart_first_txt2Result = textareaPushInfo(standart_first_txt2Task);
    }
    if (buttonWithAttr.closest("#standart_second")) {
      const standart_secondTask = document.getElementById("standart_second");
      var standart_secondResult = radioPushInfo(standart_secondTask);
    }
    if (buttonWithAttr.closest("#standart_second2")) {
      const standart_second2Task = document.getElementById("standart_second2");
      var standart_second2Result = radioPushInfo(standart_second2Task);
    }
    if (buttonWithAttr.closest("#standart_third")) {
      const standart_thirdTask = document.getElementById("standart_third");
      var standart_thirdResult = radioPushInfo(standart_thirdTask);
    }
    if (buttonWithAttr.closest("#standart_third2")) {
      const standart_third2Task = document.getElementById("standart_third2");
      var standart_third2Result = radioPushInfo(standart_third2Task);
    }
    if (buttonWithAttr.closest("#standart_last")) {
      const standart_lastTask = document.getElementById("standart_last");
      var standart_lastResult = radioPushInfo(standart_lastTask);
    }

    // ---------------

    function formSubmit(dataTab1, dataTab2) {
      var data = {
        collection_id: "6556071b08de84914fd787a2",
        user_id: fragments[4],
        user_tab1: dataTab1,
        user_tab2: dataTab2,
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
        '.lesson_tab[tabs="' + tab + '"] input[type="radio"]',
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
      var investProgressAttr;
      if (attributeValue !== "none") {
        countProgressTab1 = attributeValue;
      } else {
        investProgressAttr = buttonWithAttr.getAttribute("investProgress");
      }
      if (attributeValue !== "none") {
        countProgressTab2 = attributeValue;
      } else {
        investProgressAttr = buttonWithAttr.getAttribute("investProgress");
      }

      var situationBd;
      if (situationResult !== "" && situationResult !== undefined) {
        situationAnswer = situationResult;
        situationBd = "|/|" + situationAnswer;
      } else if (situationAnswer !== "" && situationAnswer !== undefined) {
        situationBd = "|/|" + situationAnswer;
      } else {
        situationBd = "";
      }

      var reactionBd;
      if (reactionResult !== "" && reactionResult !== undefined) {
        reactionAnswer = reactionResult;
        reactionBd = "|/|" + reactionAnswer;
      } else if (reactionAnswer !== "" && reactionAnswer !== undefined) {
        reactionBd = "|/|" + reactionAnswer;
      } else {
        reactionBd = "";
      }

      var investigationBd;
      if (investigationResult !== "" && investigationResult !== undefined) {
        investigationAnswer = investigationResult;
        investigationBd = "|/|" + investigationAnswer;
      } else if (
        investigationAnswer !== "" &&
        investigationAnswer !== undefined
      ) {
        investigationBd = "|/|" + investigationAnswer;
      } else {
        investigationBd = "";
      }

      var investigation_twoBd;
      if (
        investigation_twoResult !== "" &&
        investigation_twoResult !== undefined
      ) {
        investigation_twoAnswer = investigation_twoResult;
        investigation_twoBd = "|/|" + investigation_twoAnswer;
      } else if (
        investigation_twoAnswer !== "" &&
        investigation_twoAnswer !== undefined
      ) {
        investigation_twoBd = "|/|" + investigation_twoAnswer;
      } else {
        investigation_twoBd = "";
      }

      var investigation_threeBd;
      if (
        investigation_threeResult !== "" &&
        investigation_threeResult !== undefined
      ) {
        investigation_threeAnswer = investigation_threeResult;
        investigation_threeBd = "|/|" + investigation_threeAnswer;
      } else if (
        investigation_threeAnswer !== "" &&
        investigation_threeAnswer !== undefined
      ) {
        investigation_threeBd = "|/|" + investigation_threeAnswer;
      } else {
        investigation_threeBd = "";
      }

      var investigation_fourBd;
      if (
        investigation_fourResult !== "" &&
        investigation_fourResult !== undefined
      ) {
        investigation_fourAnswer = investigation_fourResult;
        investigation_fourBd = "|/|" + investigation_fourAnswer;
      } else if (
        investigation_fourAnswer !== "" &&
        investigation_fourAnswer !== undefined
      ) {
        investigation_fourBd = "|/|" + investigation_fourAnswer;
      } else {
        investigation_fourBd = "";
      }

      var investigation_fiveBd;
      if (
        investigation_fiveResult !== "" &&
        investigation_fiveResult !== undefined
      ) {
        investigation_fiveAnswer = investigation_fiveResult;
        investigation_fiveBd = "|/|" + investigation_fiveAnswer;
      } else if (
        investigation_fiveAnswer !== "" &&
        investigation_fiveAnswer !== undefined
      ) {
        investigation_fiveBd = "|/|" + investigation_fiveAnswer;
      } else {
        investigation_fiveBd = "";
      }

      var investigation_sixBd;
      if (
        investigation_sixResult !== "" &&
        investigation_sixResult !== undefined
      ) {
        investigation_sixAnswer = investigation_sixResult;
        investigation_sixBd = "|/|" + investigation_sixAnswer;
      } else if (
        investigation_sixAnswer !== "" &&
        investigation_sixAnswer !== undefined
      ) {
        investigation_sixBd = "|/|" + investigation_sixAnswer;
      } else {
        investigation_sixBd = "";
      }

      var investigation_reactionBd;
      if (
        investigation_reactionResult !== "" &&
        investigation_reactionResult !== undefined
      ) {
        investigation_reactionAnswer = investigation_reactionResult;
        investigation_reactionBd = investigation_reactionAnswer;
      } else if (
        investigation_reactionAnswer !== "" &&
        investigation_reactionAnswer !== undefined
      ) {
        investigation_reactionBd = investigation_reactionAnswer;
      } else {
        investigation_reactionBd = "";
      }

      var julia_infoBd;
      if (julia_infoResult !== "" && julia_infoResult !== undefined) {
        julia_infoAnswer = julia_infoResult;
        julia_infoBd = julia_infoAnswer;
      } else if (julia_infoAnswer !== "" && julia_infoAnswer !== undefined) {
        julia_infoBd = julia_infoAnswer;
      } else {
        julia_infoBd = "";
      }

      if (
        buttonWithAttr.closest(".investigation_block[target='investigation']")
      ) {
        investProgress = investProgressAttr;
      } else if (
        buttonWithAttr.closest(
          ".investigation_block[target='investigation_two']",
        )
      ) {
        investProgress2 = investProgressAttr;
      } else if (
        buttonWithAttr.closest(
          ".investigation_block[target='investigation_three']",
        )
      ) {
        investProgress3 = investProgressAttr;
      } else if (
        buttonWithAttr.closest(
          ".investigation_block[target='investigation_four']",
        )
      ) {
        investProgress4 = investProgressAttr;
      } else if (
        buttonWithAttr.closest(
          ".investigation_block[target='investigation_five']",
        )
      ) {
        investProgress5 = investProgressAttr;
      } else if (buttonWithAttr.closest(".last_block[target='standart']")) {
        investProgress7 = investProgressAttr;
      } else if (buttonWithAttr.closest(".last_block[target='standart2']")) {
        investProgress8 = investProgressAttr;
      }

      if (investProgress !== "" && investProgress !== undefined) {
        investigationBd = investigationBd + "/" + investProgress;
      }
      if (investProgress2 !== "" && investProgress2 !== undefined) {
        investigation_twoBd = investigation_twoBd + "/" + investProgress2;
      }
      if (investProgress3 !== "" && investProgress3 !== undefined) {
        investigation_threeBd = investigation_threeBd + "/" + investProgress3;
      }
      if (investProgress4 !== "" && investProgress4 !== undefined) {
        investigation_fourBd = investigation_fourBd + "/" + investProgress4;
      }
      if (investProgress5 !== "" && investProgress5 !== undefined) {
        investigation_fiveBd = investigation_fiveBd + "/" + investProgress5;
      }

      if (investigationAnswer === "one" && investigation_reactionBd !== "") {
        investigationBd = investigationBd + "/" + investigation_reactionBd;
      } else if (investigationAnswer === "three" && julia_infoBd !== "") {
        investigationBd = investigationBd + "/" + julia_infoBd;
      }

      if (
        investigation_twoAnswer === "one" &&
        investigation_reactionBd !== ""
      ) {
        investigation_twoBd =
          investigation_twoBd + "/" + investigation_reactionBd;
      } else if (investigation_twoAnswer === "three" && julia_infoBd !== "") {
        investigation_twoBd = investigation_twoBd + "/" + julia_infoBd;
      }

      if (
        investigation_threeAnswer === "one" &&
        investigation_reactionBd !== ""
      ) {
        investigation_threeBd =
          investigation_threeBd + "/" + investigation_reactionBd;
      } else if (investigation_threeAnswer === "three" && julia_infoBd !== "") {
        investigation_threeBd = investigation_threeBd + "/" + julia_infoBd;
      }

      if (
        investigation_fourAnswer === "one" &&
        investigation_reactionBd !== ""
      ) {
        investigation_fourBd =
          investigation_fourBd + "/" + investigation_reactionBd;
      } else if (investigation_fourAnswer === "three" && julia_infoBd !== "") {
        investigation_fourBd = investigation_fourBd + "/" + julia_infoBd;
      }

      if (
        investigation_fiveAnswer === "one" &&
        investigation_reactionBd !== ""
      ) {
        investigation_fiveBd =
          investigation_fiveBd + "/" + investigation_reactionBd;
      } else if (investigation_fiveAnswer === "three" && julia_infoBd !== "") {
        investigation_fiveBd = investigation_fiveBd + "/" + julia_infoBd;
      }

      var general_conclusionBd;
      if (
        general_conclusionResult !== "" &&
        general_conclusionResult !== undefined
      ) {
        general_conclusionAnswer = general_conclusionResult;
        general_conclusionBd = "|/|" + general_conclusionAnswer;
      } else if (
        general_conclusionAnswer !== "" &&
        general_conclusionAnswer !== undefined
      ) {
        general_conclusionBd = "|/|" + general_conclusionAnswer;
      } else {
        general_conclusionBd = "";
      }

      var solving_situationBd;
      if (
        solving_situationResult !== "" &&
        solving_situationResult !== undefined
      ) {
        solving_situationAnswer = solving_situationResult;
        solving_situationBd = "|/|" + solving_situationAnswer;
      } else if (
        solving_situationAnswer !== "" &&
        solving_situationAnswer !== undefined
      ) {
        solving_situationBd = "|/|" + solving_situationAnswer;
      } else {
        solving_situationBd = "";
      }

      var conflict_typeBd;
      if (conflict_typeResult !== "" && conflict_typeResult !== undefined) {
        conflict_typeAnswer = conflict_typeResult;
        conflict_typeBd = "|/|" + conflict_typeAnswer;
      } else if (
        conflict_typeAnswer !== "" &&
        conflict_typeAnswer !== undefined
      ) {
        conflict_typeBd = "|/|" + conflict_typeAnswer;
      } else {
        conflict_typeBd = "";
      }

      var consequences_dismissalBd;
      if (
        consequences_dismissalResult !== "" &&
        consequences_dismissalResult !== undefined
      ) {
        consequences_dismissalAnswer = consequences_dismissalResult;
        consequences_dismissalBd = "|/|" + consequences_dismissalAnswer;
      } else if (
        consequences_dismissalAnswer !== "" &&
        consequences_dismissalAnswer !== undefined
      ) {
        consequences_dismissalBd = "|/|" + consequences_dismissalAnswer;
      } else {
        consequences_dismissalBd = "";
      }

      var decideBd;
      if (decideResult !== "" && decideResult !== undefined) {
        decideAnswer = decideResult;
        decideBd = "|/|" + decideAnswer;
      } else if (decideAnswer !== "" && decideAnswer !== undefined) {
        decideBd = "|/|" + decideAnswer;
      } else {
        decideBd = "";
      }

      var say_directlyBd;
      if (say_directlyResult !== "" && say_directlyResult !== undefined) {
        say_directlyAnswer = say_directlyResult;
        say_directlyBd = "|/|" + say_directlyAnswer;
      } else if (
        say_directlyAnswer !== "" &&
        say_directlyAnswer !== undefined
      ) {
        say_directlyBd = "|/|" + say_directlyAnswer;
      } else {
        say_directlyBd = "";
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

      var missionBd;
      if (missionResult !== "" && missionResult !== undefined) {
        missionAnswer = missionResult;
        missionBd = "|/|" + missionAnswer;
      } else if (missionAnswer !== "" && missionAnswer !== undefined) {
        missionBd = "|/|" + missionAnswer;
      } else {
        missionBd = "";
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

      var stepsBd;
      if (stepsResult !== "" && stepsResult !== undefined) {
        stepsAnswer = stepsResult;
        stepsBd = "|/|" + stepsAnswer;
      } else if (stepsAnswer !== "" && stepsAnswer !== undefined) {
        stepsBd = "|/|" + stepsAnswer;
      } else {
        stepsBd = "";
      }

      var fun_txtBd;
      if (fun_txtResult !== "" && fun_txtResult !== undefined) {
        fun_txtAnswer = fun_txtResult;
        fun_txtBd = "|/|" + fun_txtAnswer;
      } else if (fun_txtAnswer !== "" && fun_txtAnswer !== undefined) {
        fun_txtBd = "|/|" + fun_txtAnswer;
      } else {
        fun_txtBd = "";
      }

      var answer_annBd;
      if (answer_annResult !== "" && answer_annResult !== undefined) {
        answer_annAnswer = answer_annResult;
        answer_annBd = "|/|" + answer_annAnswer;
      } else if (answer_annAnswer !== "" && answer_annAnswer !== undefined) {
        answer_annBd = "|/|" + answer_annAnswer;
      } else {
        answer_annBd = "";
      }

      var descriptionBd;
      if (descriptionResult !== "" && descriptionResult !== undefined) {
        descriptionAnswer = descriptionResult;
        descriptionBd = "|/|" + descriptionAnswer;
      } else if (descriptionAnswer !== "" && descriptionAnswer !== undefined) {
        descriptionBd = "|/|" + descriptionAnswer;
      } else {
        descriptionBd = "";
      }

      var feedback_txtBd;
      if (feedback_txtResult !== "" && feedback_txtResult !== undefined) {
        feedback_txtAnswer = feedback_txtResult;
        feedback_txtBd = "|/|" + feedback_txtAnswer;
      } else if (
        feedback_txtAnswer !== "" &&
        feedback_txtAnswer !== undefined
      ) {
        feedback_txtBd = "|/|" + feedback_txtAnswer;
      } else {
        feedback_txtBd = "";
      }

      var standartBd;
      if (standartResult !== "" && standartResult !== undefined) {
        standartAnswer = standartResult;
        standartBd = "|/|" + standartAnswer;
      } else if (standartAnswer !== "" && standartAnswer !== undefined) {
        standartBd = "|/|" + standartAnswer;
      } else {
        standartBd = "";
      }
      var standart2Bd;
      if (standart2Result !== "" && standart2Result !== undefined) {
        standart2Answer = standart2Result;
        standart2Bd = "|/|" + standart2Answer;
      } else if (standart2Answer !== "" && standart2Answer !== undefined) {
        standart2Bd = "|/|" + standart2Answer;
      } else {
        standart2Bd = "";
      }

      if (investProgress7 !== "" && investProgress7 !== undefined) {
        standartBd = standartBd + "/" + investProgress7;
      }
      if (investProgress8 !== "" && investProgress8 !== undefined) {
        standart2Bd = standart2Bd + "/" + investProgress8;
      }

      var standart_first_txtBd;
      if (
        standart_first_txtResult !== "" &&
        standart_first_txtResult !== undefined
      ) {
        standart_first_txtAnswer = standart_first_txtResult;
        standart_first_txtBd = standart_first_txtAnswer;
      } else if (
        standart_first_txtAnswer !== "" &&
        standart_first_txtAnswer !== undefined
      ) {
        standart_first_txtBd = standart_first_txtAnswer;
      } else {
        standart_first_txtBd = "";
      }

      var standart_first_txt2Bd;
      if (
        standart_first_txt2Result !== "" &&
        standart_first_txt2Result !== undefined
      ) {
        standart_first_txt2Answer = standart_first_txt2Result;
        standart_first_txt2Bd = standart_first_txt2Answer;
      } else if (
        standart_first_txt2Answer !== "" &&
        standart_first_txt2Answer !== undefined
      ) {
        standart_first_txt2Bd = standart_first_txt2Answer;
      } else {
        standart_first_txt2Bd = "";
      }

      var standart_secondBd;
      if (standart_secondResult !== "" && standart_secondResult !== undefined) {
        standart_secondAnswer = standart_secondResult;
        standart_secondBd = standart_secondAnswer;
      } else if (
        standart_secondAnswer !== "" &&
        standart_secondAnswer !== undefined
      ) {
        standart_secondBd = standart_secondAnswer;
      } else {
        standart_secondBd = "";
      }

      var standart_second2Bd;
      if (
        standart_second2Result !== "" &&
        standart_second2Result !== undefined
      ) {
        standart_second2Answer = standart_second2Result;
        standart_second2Bd = standart_second2Answer;
      } else if (
        standart_second2Answer !== "" &&
        standart_second2Answer !== undefined
      ) {
        standart_second2Bd = standart_second2Answer;
      } else {
        standart_second2Bd = "";
      }

      var standart_thirdBd;
      if (standart_thirdResult !== "" && standart_thirdResult !== undefined) {
        standart_thirdAnswer = standart_thirdResult;
        standart_thirdBd = standart_thirdAnswer;
      } else if (
        standart_thirdAnswer !== "" &&
        standart_thirdAnswer !== undefined
      ) {
        standart_thirdBd = standart_thirdAnswer;
      } else {
        standart_thirdBd = "";
      }

      var standart_third2Bd;
      if (standart_third2Result !== "" && standart_third2Result !== undefined) {
        standart_third2Answer = standart_third2Result;
        standart_third2Bd = standart_third2Answer;
      } else if (
        standart_third2Answer !== "" &&
        standart_third2Answer !== undefined
      ) {
        standart_third2Bd = standart_third2Answer;
      } else {
        standart_third2Bd = "";
      }

      if (standartAnswer === "one") {
        if (standart_first_txtBd !== "") {
          standartBd = standartBd + "/" + standart_first_txtBd;
        }
        if (standart_secondBd !== "") {
          standartBd = standartBd + "/" + standart_secondBd;
        }
        if (standart_thirdBd !== "") {
          standartBd = standartBd + "/" + standart_thirdBd;
        }
      } else if (standartAnswer === "two") {
        if (standart_first_txt2Bd !== "") {
          standartBd = standartBd + "/" + standart_first_txt2Bd;
        }
        if (standart_second2Bd !== "") {
          standartBd = standartBd + "/" + standart_second2Bd;
        }
        if (standart_third2Bd !== "") {
          standartBd = standartBd + "/" + standart_third2Bd;
        }
      }

      if (standart2Answer === "one") {
        if (standart_first_txtBd !== "") {
          standart2Bd = standart2Bd + "/" + standart_first_txtBd;
        }
        if (standart_secondBd !== "") {
          standart2Bd = standart2Bd + "/" + standart_secondBd;
        }
        if (standart_thirdBd !== "") {
          standart2Bd = standart2Bd + "/" + standart_thirdBd;
        }
      } else if (standart2Answer === "two") {
        if (standart_first_txt2Bd !== "") {
          standart2Bd = standart2Bd + "/" + standart_first_txt2Bd;
        }
        if (standart_second2Bd !== "") {
          standart2Bd = standart2Bd + "/" + standart_second2Bd;
        }
        if (standart_third2Bd !== "") {
          standart2Bd = standart2Bd + "/" + standart_third2Bd;
        }
      }

      var standart_lastBd;
      if (standart_lastResult !== "" && standart_lastResult !== undefined) {
        standart_lastAnswer = standart_lastResult;
        standart_lastBd = "|/|" + standart_lastAnswer;
      } else if (
        standart_lastAnswer !== "" &&
        standart_lastAnswer !== undefined
      ) {
        standart_lastBd = "|/|" + standart_lastAnswer;
      } else {
        standart_lastBd = "";
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
          situationBd +
          reactionBd +
          investigationBd +
          investigation_twoBd +
          investigation_threeBd +
          investigation_fourBd +
          investigation_fiveBd +
          investigation_sixBd +
          general_conclusionBd +
          solving_situationBd +
          conflict_typeBd +
          consequences_dismissalBd +
          decideBd +
          say_directlyBd +
          starTab1Bd;
      } else if (tab === "tab2") {
        var dataTab2 =
          countProgressTab2 +
          missionBd +
          problemBd +
          stepsBd +
          fun_txtBd +
          answer_annBd +
          descriptionBd +
          feedback_txtBd +
          standartBd +
          standart_lastBd +
          standart2Bd +
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
          collection_id: "6556071b08de84914fd787a2",
          user_id: fragments[4],
          tab1theory: tab1theoryVal,
        };
      } else if (tabs === "tab2") {
        data2 = {
          collection_id: "6556071b08de84914fd787a2",
          user_id: fragments[4],
          tab2theory: tab2theoryVal,
        };
      }
      // console.log(data2);
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
