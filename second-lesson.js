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
var unicornAnswear = tab1BDVal[1];
var indexesAnswear = tab1BDVal[2];
var tam_choiceAnswear = tab1BDVal[3];
var find_unicornAnswear = tab1BDVal[4];
var conflictAnswears = tab1BDVal[5];
var conflictFirstAnswear;
var conflictSecondAnswear;
var conflictThirdAnswear;
if (conflictAnswears !== "" && conflictAnswears !== undefined) {
  var conflictAnswearsVal = conflictAnswears.split("*");
  conflictFirstAnswear = conflictAnswearsVal[0];
  conflictSecondAnswear = conflictAnswearsVal[1];
  conflictThirdAnswear = conflictAnswearsVal[2];
}
var tam_calcAnswear = tab1BDVal[6];
var samAnswear = tab1BDVal[7];
var sam_calcAnswear = tab1BDVal[8];
var sam_ukAnswear = tab1BDVal[9];
var unicorn_ukAnswear = tab1BDVal[10];
var macroAnswear = tab1BDVal[11];
var macro_factorsAnswear = tab1BDVal[12];
var on_businessAnswear = tab1BDVal[13];
var for_olluAnswear = tab1BDVal[14];
var starAnswearTab1 = tab1BDVal[15];

var countProgressTab2 = tab2BDVal[0];
var comp_unicornAnswear = tab2BDVal[1];
var comp_chooseAnswear = tab2BDVal[2];
var metricsAnswear = tab2BDVal[3];
var ollu_compAnswear = tab2BDVal[4];
var ollu_moneyAnswear = tab2BDVal[5];
var countryAnswear = tab2BDVal[6];
var conclusionsAnswear = tab2BDVal[7];
var charactersAnswear = tab2BDVal[8];
var fichAnswear = tab2BDVal[9];
var last_opinionAnswear = tab2BDVal[10];
var starAnswearTab2 = tab2BDVal[11];

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
create_lesson("6517f3b8afa18ec4281d2823", user_email, fragments[4]);

if (countProgressTab1 > 32) {
  availableLinks("secondl_tab2");
  activetab("secondl_tab2", "tab2");
}

function radioCheck(blopElement) {
  var radio = blopElement.querySelector('input[type="radio"]:checked');
  var radioAnswer;
  var radioAnswer2;
  if (radio) {
    var value = radio.value;
    if (blopElement.getAttribute("conflict") === "start") {
      if (value !== "one") {
        radioAnswer = blopElement.nextElementSibling.querySelector("." + value);
        radioAnswer.classList.add("answer_visible");
      } else {
        document.getElementById("tam_calc").classList.add("next_visible");
        setTimeout(function () {
          document.getElementById("tam_calc").classList.add("blop_animate");
        }, 1);
        var conflicts = document.querySelectorAll("[conflict]");
        conflicts.forEach((element) => {
          if (element.getAttribute("conflict") !== "start") {
            if (element) {
              element.remove();
            }
          }
        });
      }
    } else if (blopElement.getAttribute("conflict") === "2") {
      radioAnswer = blopElement.nextElementSibling.querySelector("." + value);
      radioAnswer2 = blopElement.nextElementSibling.nextElementSibling.querySelector(
        "." + value
      );
      radioAnswer.classList.add("answer_visible");
      radioAnswer2.classList.add("answer_visible");
    } else if (blopElement.getAttribute("conflict") === "3") {
      if (value !== "two") {
        // conflict_result
        var elementToDelete = document.querySelectorAll("[conflict_other]"); // Замість "elementToDelete" вкажіть id елемента, який ви хочете видалити
        elementToDelete.forEach((element) => {
          if (element) {
            element.remove();
          }
        });
        radioAnswer = blopElement.nextElementSibling.querySelector("." + value);
        radioAnswer2 = blopElement.nextElementSibling.nextElementSibling.querySelector(
          "." + value
        );
        radioAnswer.classList.add("answer_visible");
        radioAnswer2.classList.add("answer_visible_flex");
      } else {
        radioAnswer = blopElement.nextElementSibling.querySelector("." + value);
        radioAnswer.classList.add("answer_visible");
        radioAnswer2 = blopElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.querySelector(
          "." + value
        );
        radioAnswer2.classList.add("answer_visible_flex");
      }
    } else {
      radioAnswer = blopElement.nextElementSibling.querySelector("." + value);
      radioAnswer.classList.add("answer_visible");
    }
    return value;
  }
}

function indexesCheck() {
  var indexesInfo = document.getElementById("indexes");
  var indexesForm = indexesInfo.querySelector("form");
  var indexesElements = indexesForm.querySelectorAll(".check_input");

  var indexesFirst = indexesElements[0].querySelector('input[type="checkbox"]');
  var indexesSecond = indexesElements[1].querySelector(
    'input[type="checkbox"]'
  );
  var indexesThird = indexesElements[2].querySelector('input[type="checkbox"]');

  if (
    // ----- yes ----- //
    indexesFirst.checked &&
    indexesSecond.checked &&
    indexesThird.checked
  ) {
    indexesInfo.nextElementSibling
      .querySelector(".yes")
      .classList.remove("hide");
    indexesInfo.nextElementSibling.querySelector(".no").classList.add("hide");
  } else {
    indexesInfo.nextElementSibling
      .querySelector(".no")
      .classList.remove("hide");
    indexesInfo.nextElementSibling.querySelector(".yes").classList.add("hide");
  }
}

function comp_chooseCheck() {
  var comp_chooseInfo = document.getElementById("comp_choose");
  var comp_chooseForm = comp_chooseInfo.querySelector("form");
  var comp_chooseElements = comp_chooseForm.querySelectorAll(".check_input");

  var comp_chooseFirst = comp_chooseElements[0].querySelector(
    'input[type="checkbox"]'
  );
  var comp_chooseSecond = comp_chooseElements[1].querySelector(
    'input[type="checkbox"]'
  );
  var comp_chooseThird = comp_chooseElements[2].querySelector(
    'input[type="checkbox"]'
  );
  var comp_chooseFourth = comp_chooseElements[3].querySelector(
    'input[type="checkbox"]'
  );
  var comp_chooseFiveth = comp_chooseElements[4].querySelector(
    'input[type="checkbox"]'
  );
  var comp_chooseSixth = comp_chooseElements[5].querySelector(
    'input[type="checkbox"]'
  );
  var comp_chooseSeventh = comp_chooseElements[6].querySelector(
    'input[type="checkbox"]'
  );

  if (
    // ----- yes ----- //
    comp_chooseFirst.checked &&
    comp_chooseFiveth.checked &&
    comp_chooseSixth.checked &&
    comp_chooseSeventh.checked &&
    !comp_chooseSecond.checked &&
    !comp_chooseThird.checked &&
    !comp_chooseFourth.checked
  ) {
    comp_chooseInfo.nextElementSibling
      .querySelector(".yes")
      .classList.remove("hide");
    comp_chooseInfo.nextElementSibling
      .querySelector(".no")
      .classList.add("hide");
  } else {
    comp_chooseInfo.nextElementSibling
      .querySelector(".no")
      .classList.remove("hide");
    comp_chooseInfo.nextElementSibling
      .querySelector(".yes")
      .classList.add("hide");
  }
}

function charactersCheck() {
  var charactersInfo = document.getElementById("characters");
  var charactersForm = charactersInfo.querySelector("form");
  var charactersElements = charactersForm.querySelectorAll(".check_input");

  var charactersFirst = charactersElements[0].querySelector(
    'input[type="checkbox"]'
  );
  var charactersSecond = charactersElements[1].querySelector(
    'input[type="checkbox"]'
  );
  var charactersThird = charactersElements[2].querySelector(
    'input[type="checkbox"]'
  );
  var charactersFourth = charactersElements[3].querySelector(
    'input[type="checkbox"]'
  );
  var charactersFiveth = charactersElements[4].querySelector(
    'input[type="checkbox"]'
  );
  var charactersSixth = charactersElements[5].querySelector(
    'input[type="checkbox"]'
  );
  var charactersSeventh = charactersElements[6].querySelector(
    'input[type="checkbox"]'
  );

  if (
    // ----- yes ----- //
    charactersFirst.checked &&
    charactersSecond.checked &&
    charactersFiveth.checked &&
    charactersSeventh.checked &&
    !charactersThird.checked &&
    !charactersFourth.checked &&
    !charactersSixth.checked
  ) {
    charactersInfo.nextElementSibling
      .querySelector(".yes")
      .classList.remove("hide");
    charactersInfo.nextElementSibling
      .querySelector(".no")
      .classList.add("hide");
  } else {
    charactersInfo.nextElementSibling
      .querySelector(".no")
      .classList.remove("hide");
    charactersInfo.nextElementSibling
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

  // conflict_second

  //   var conflictFirstAnswear;
  // var conflictSecondAnswear;
  // var conflictThirdAnswear;
  if (conflictSecondAnswear !== "" && conflictSecondAnswear !== undefined) {
    var allFirst = document.querySelectorAll("[conflict='1']");
    allFirst.forEach((element) => {
      console.log(element);
      element.classList.add("next_visible", "done_blop", "blop_animate");
    });
    document
      .querySelector("#conflict_second")
      .classList.add("next_visible", "blop_animate", "done_blop");
    document
      .querySelector("#conflict_second")
      .nextElementSibling.classList.add("next_visible", "blop_animate");
  }
  if (conflictThirdAnswear !== "" && conflictThirdAnswear !== undefined) {
    var allSecond = document.querySelectorAll("[conflict='2']");
    allSecond.forEach((element) => {
      console.log(element);
      element.classList.add("next_visible", "done_blop", "blop_animate");
    });
    document
      .querySelector("#conflict_third")
      .classList.add("next_visible", "blop_animate", "done_blop");

    if (conflictThirdAnswear === "two") {
      document
        .querySelector("#conflict_third")
        .nextElementSibling.classList.add(
          "next_visible",
          "blop_animate",
          "done_blop"
        );
      var allThird2 = document.querySelectorAll("[conflict_other='3_2']");
      allThird2.forEach((element) => {
        console.log(element);
        element.classList.add("next_visible", "done_blop", "blop_animate");
      });
    } else {
      document
        .querySelector("#conflict_third")
        .nextElementSibling.classList.add(
          "next_visible",
          "blop_animate",
          "done_blop"
        );
    }

    document
      .querySelector("#conflict_result")
      .classList.add("next_visible", "blop_animate");
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
    if (block && block.id === "indexes") {
      indexesCheck();
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
      if (block.classList.contains("tam_calc")) {
        function textareaCheckTamCalc(blop) {
          var value = blop.querySelector("textarea").value;
          var cleanedString = value.replace(/[$\s\-\+]/g, "");
          var radioAnswer;
          if (cleanedString === "5823341") {
            radioAnswer = blop.nextElementSibling.querySelector(".one");
            radioAnswer.classList.add("answer_visible");
          } else {
            radioAnswer = blop.nextElementSibling.querySelector(".two");
            radioAnswer.classList.add("answer_visible");
          }
        }
        textareaCheckTamCalc(block);
      }

      if (block.classList.contains("sam_calc")) {
        function textareaCheckSamCalc(blop) {
          var value = blop.querySelector("textarea").value;
          var cleanedString = value.replace(/[$\s\-\+]/g, "");
          var radioAnswer;
          if (cleanedString === "2891606") {
            radioAnswer = blop.nextElementSibling.querySelector(".one");
            radioAnswer.classList.add("answer_visible");
          } else {
            radioAnswer = blop.nextElementSibling.querySelector(".two");
            radioAnswer.classList.add("answer_visible");
          }
        }
        textareaCheckSamCalc(block);
      }
    }
  }

  if (unicornAnswear !== "" && unicornAnswear !== undefined) {
    const unicornTask = document.getElementById("unicorn");
    radioGetInfo(unicornTask, unicornAnswear);
  }
  if (indexesAnswear !== "" && indexesAnswear !== undefined) {
    const indexesTask = document.getElementById("indexes");
    checkboxGetInfo(indexesTask, indexesAnswear);
  }
  if (tam_choiceAnswear !== "" && tam_choiceAnswear !== undefined) {
    const tam_choiceTask = document.getElementById("tam_choice");
    radioGetInfo(tam_choiceTask, tam_choiceAnswear);
  }
  if (find_unicornAnswear !== "" && find_unicornAnswear !== undefined) {
    const find_unicornTask = document.getElementById("find_unicorn");
    radioGetInfo(find_unicornTask, find_unicornAnswear);
  }
  if (conflictFirstAnswear !== "" && conflictFirstAnswear !== undefined) {
    const conflictTask = document.getElementById("conflict");
    radioGetInfo(conflictTask, conflictFirstAnswear);
  }
  if (conflictSecondAnswear !== "" && conflictSecondAnswear !== undefined) {
    const conflict_secondTask = document.getElementById("conflict_second");
    radioGetInfo(conflict_secondTask, conflictSecondAnswear);
  }
  if (conflictThirdAnswear !== "" && conflictThirdAnswear !== undefined) {
    const conflict_thirdTask = document.getElementById("conflict_third");
    radioGetInfo(conflict_thirdTask, conflictThirdAnswear);
  }
  if (tam_calcAnswear !== "" && tam_calcAnswear !== undefined) {
    const tam_calcTask = document.getElementById("tam_calc");
    textareaGethInfo(tam_calcTask, tam_calcAnswear);
  }
  if (samAnswear !== "" && samAnswear !== undefined) {
    const samTask = document.getElementById("sam");
    radioGetInfo(samTask, samAnswear);
  }
  if (sam_calcAnswear !== "" && sam_calcAnswear !== undefined) {
    const sam_calcTask = document.getElementById("sam_calc");
    textareaGethInfo(sam_calcTask, sam_calcAnswear);
  }
  if (sam_ukAnswear !== "" && sam_ukAnswear !== undefined) {
    const sam_ukTask = document.getElementById("sam_uk");
    radioGetInfo(sam_ukTask, sam_ukAnswear);
  }
  if (unicorn_ukAnswear !== "" && unicorn_ukAnswear !== undefined) {
    const unicorn_ukTask = document.getElementById("unicorn_uk");
    radioGetInfo(unicorn_ukTask, unicorn_ukAnswear);
  }
  if (macroAnswear !== "" && macroAnswear !== undefined) {
    const macroTask = document.getElementById("macro");
    radioGetInfo(macroTask, macroAnswear);
  }
  if (macro_factorsAnswear !== "" && macro_factorsAnswear !== undefined) {
    const macro_factorsTask = document.getElementById("macro_factors");
    checkboxGetInfo(macro_factorsTask, macro_factorsAnswear);
  }
  if (on_businessAnswear !== "" && on_businessAnswear !== undefined) {
    const on_businessTask = document.getElementById("on_business");
    radioGetInfo(on_businessTask, on_businessAnswear);
  }
  if (for_olluAnswear !== "" && for_olluAnswear !== undefined) {
    const for_olluTask = document.getElementById("for_ollu");
    textareaGethInfo(for_olluTask, for_olluAnswear);
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
    if (block && block.id === "comp_choose") {
      comp_chooseCheck();
    } else if (block && block.id === "characters") {
      charactersCheck();
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

  if (comp_unicornAnswear !== "" && comp_unicornAnswear !== undefined) {
    var comp_unicornTask = document.getElementById("comp_unicorn");
    radioGetInfo(comp_unicornTask, comp_unicornAnswear);
  }
  if (comp_chooseAnswear !== "" && comp_chooseAnswear !== undefined) {
    var comp_chooseTask = document.getElementById("comp_choose");
    checkboxGetInfo(comp_chooseTask, comp_chooseAnswear);
  }
  if (metricsAnswear !== "" && metricsAnswear !== undefined) {
    var metricsTask = document.getElementById("metrics");
    radioGetInfo(metricsTask, metricsAnswear);
  }
  if (ollu_compAnswear !== "" && ollu_compAnswear !== undefined) {
    var ollu_compTask = document.getElementById("ollu_comp");
    radioGetInfo(ollu_compTask, ollu_compAnswear);
  }
  if (ollu_moneyAnswear !== "" && ollu_moneyAnswear !== undefined) {
    var ollu_moneyTask = document.getElementById("ollu_money");
    radioGetInfo(ollu_moneyTask, ollu_moneyAnswear);
  }
  if (countryAnswear !== "" && countryAnswear !== undefined) {
    var countryTask = document.getElementById("country");
    radioGetInfo(countryTask, countryAnswear);
  }
  if (conclusionsAnswear !== "" && conclusionsAnswear !== undefined) {
    var conclusionsTask = document.getElementById("conclusions");
    textareaGethInfo(conclusionsTask, conclusionsAnswear);
  }
  if (charactersAnswear !== "" && charactersAnswear !== undefined) {
    var charactersTask = document.getElementById("characters");
    checkboxGetInfo(charactersTask, charactersAnswear);
  }
  if (fichAnswear !== "" && fichAnswear !== undefined) {
    var fichTask = document.getElementById("fich");
    checkboxGetInfo(fichTask, fichAnswear);
  }
  if (last_opinionAnswear !== "" && last_opinionAnswear !== undefined) {
    var last_opinionTask = document.getElementById("last_opinion");
    textareaGethInfo(last_opinionTask, last_opinionAnswear);
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
// tab1Progress(30);

primalButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    var blopElement = button.closest(".blop");
    if (blopElement) {
      blopElement.classList.add("done_blop");

      var valueRadio = radioCheck(blopElement);

      indexesCheck();
      comp_chooseCheck();
      charactersCheck();

      if (
        blopElement.getAttribute("id") === "conflict" &&
        valueRadio === "one"
      ) {
      } else {
        blopElement.nextElementSibling.classList.add("next_visible");
        setTimeout(function () {
          blopElement.nextElementSibling.classList.add("blop_animate");
        }, 1);
      }

      if (button.classList.contains("last_button")) {
        create_lesson("6517f3b8afa18ec4281d2823", user_email, fragments[4]);
        var ss = button.getAttribute("numberBlop");
        if (ss > 32) {
          availableLinks("secondl_tab2");
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
    if (textarea.closest("#tam_calc") || textarea.closest("#sam_calc")) {
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

      if (block.classList.contains("tam_calc")) {
        function textareaCheckTamCalc(blop) {
          var value = blop.querySelector("textarea").value;
          var cleanedString = value.replace(/[$\s\-\+]/g, "");
          var radioAnswer;
          if (cleanedString === "5823341") {
            radioAnswer = blop.nextElementSibling.querySelector(".one");
            radioAnswer.classList.add("answer_visible");
          } else {
            radioAnswer = blop.nextElementSibling.querySelector(".two");
            radioAnswer.classList.add("answer_visible");
          }
        }
        textareaCheckTamCalc(block);
      }

      if (block.classList.contains("sam_calc")) {
        function textareaCheckSamCalc(blop) {
          var value = blop.querySelector("textarea").value;
          var cleanedString = value.replace(/[$\s\-\+]/g, "");
          var radioAnswer;
          if (cleanedString === "2891606") {
            radioAnswer = blop.nextElementSibling.querySelector(".one");
            radioAnswer.classList.add("answer_visible");
          } else {
            radioAnswer = blop.nextElementSibling.querySelector(".two");
            radioAnswer.classList.add("answer_visible");
          }
        }
        textareaCheckSamCalc(block);
      }
      return result;
    }

    if (buttonWithAttr.closest("#unicorn")) {
      const unicornTask = document.getElementById("unicorn");
      var unicornResult = radioPushInfo(unicornTask);
    }
    if (buttonWithAttr.closest("#indexes")) {
      const indexesTask = document.getElementById("indexes");
      var indexesResult = checkboxPushInfo(indexesTask);
    }
    if (buttonWithAttr.closest("#tam_choice")) {
      const tam_choiceTask = document.getElementById("tam_choice");
      var tam_choiceResult = radioPushInfo(tam_choiceTask);
    }
    if (buttonWithAttr.closest("#find_unicorn")) {
      const find_unicornTask = document.getElementById("find_unicorn");
      var find_unicornResult = radioPushInfo(find_unicornTask);
    }
    if (buttonWithAttr.closest("#conflict")) {
      const conflictTask = document.getElementById("conflict");
      var conflictResult = radioPushInfo(conflictTask);
    }
    if (buttonWithAttr.closest("#conflict_second")) {
      const conflict_secondTask = document.getElementById("conflict_second");
      var conflict_secondResult = radioPushInfo(conflict_secondTask);
    }
    if (buttonWithAttr.closest("#conflict_third")) {
      const conflict_thirdTask = document.getElementById("conflict_third");
      var conflict_thirdResult = radioPushInfo(conflict_thirdTask);
    }
    if (buttonWithAttr.closest("#tam_calc")) {
      const tam_calcTask = document.getElementById("tam_calc");
      var tam_calcResult = textareaPushInfo(tam_calcTask);
    }
    if (buttonWithAttr.closest("#sam")) {
      const samTask = document.getElementById("sam");
      var samResult = radioPushInfo(samTask);
    }
    if (buttonWithAttr.closest("#sam_calc")) {
      const sam_calcTask = document.getElementById("sam_calc");
      var sam_calcResult = textareaPushInfo(sam_calcTask);
    }
    if (buttonWithAttr.closest("#sam_uk")) {
      const sam_ukTask = document.getElementById("sam_uk");
      var sam_ukResult = radioPushInfo(sam_ukTask);
    }
    if (buttonWithAttr.closest("#unicorn_uk")) {
      const unicorn_ukTask = document.getElementById("unicorn_uk");
      var unicorn_ukResult = radioPushInfo(unicorn_ukTask);
    }
    if (buttonWithAttr.closest("#macro")) {
      const macroTask = document.getElementById("macro");
      var macroResult = radioPushInfo(macroTask);
    }
    if (buttonWithAttr.closest("#macro_factors")) {
      const macro_factorsTask = document.getElementById("macro_factors");
      var macro_factorsResult = checkboxPushInfo(macro_factorsTask);
    }
    if (buttonWithAttr.closest("#on_business")) {
      const on_businessTask = document.getElementById("on_business");
      var on_businessResult = radioPushInfo(on_businessTask);
    }
    if (buttonWithAttr.closest("#for_ollu")) {
      const for_olluTask = document.getElementById("for_ollu");
      var for_olluResult = textareaPushInfo(for_olluTask);
    }

    //---------------

    if (buttonWithAttr.closest("#comp_unicorn")) {
      const comp_unicornTask = document.getElementById("comp_unicorn");
      var comp_unicornResult = radioPushInfo(comp_unicornTask);
    }
    if (buttonWithAttr.closest("#comp_choose")) {
      const comp_chooseTask = document.getElementById("comp_choose");
      var comp_chooseResult = checkboxPushInfo(comp_chooseTask);
    }
    if (buttonWithAttr.closest("#metrics")) {
      const metricsTask = document.getElementById("metrics");
      var metricsResult = radioPushInfo(metricsTask);
    }
    if (buttonWithAttr.closest("#ollu_comp")) {
      const ollu_compTask = document.getElementById("ollu_comp");
      var ollu_compResult = radioPushInfo(ollu_compTask);
    }
    if (buttonWithAttr.closest("#ollu_money")) {
      const ollu_moneyTask = document.getElementById("ollu_money");
      var ollu_moneyResult = radioPushInfo(ollu_moneyTask);
    }
    if (buttonWithAttr.closest("#country")) {
      const countryTask = document.getElementById("country");
      var countryResult = radioPushInfo(countryTask);
    }
    if (buttonWithAttr.closest("#conclusions")) {
      const conclusionsTask = document.getElementById("conclusions");
      var conclusionsResult = textareaPushInfo(conclusionsTask);
    }
    if (buttonWithAttr.closest("#characters")) {
      const charactersTask = document.getElementById("characters");
      var charactersResult = checkboxPushInfo(charactersTask);
    }
    if (buttonWithAttr.closest("#fich")) {
      const fichTask = document.getElementById("fich");
      var fichResult = checkboxPushInfo(fichTask);
    }
    if (buttonWithAttr.closest("#last_opinion")) {
      const last_opinionTask = document.getElementById("last_opinion");
      var last_opinionResult = textareaPushInfo(last_opinionTask);
    }

    //---------------

    function formSubmit(dataTab1, dataTab2) {
      var data = {
        collection_id: "6517f3b8afa18ec4281d2807",
        user_id: fragments[4],
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
      var star1 = "";
      var star2 = "";
      // console.log("yes");

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

      var unicornBd;
      if (unicornResult !== "" && unicornResult !== undefined) {
        unicornAnswear = unicornResult;
        unicornBd = "|/|" + unicornAnswear;
      } else if (unicornAnswear !== "" && unicornAnswear !== undefined) {
        unicornBd = "|/|" + unicornAnswear;
      } else {
        unicornBd = "";
      }

      var indexesBd;
      if (indexesResult !== "" && indexesResult !== undefined) {
        indexesAnswear = indexesResult;
        indexesBd = "|/|" + indexesAnswear;
      } else if (indexesAnswear !== "" && indexesAnswear !== undefined) {
        indexesBd = "|/|" + indexesAnswear;
      } else {
        indexesBd = "";
      }

      var tam_choiceBd;
      if (tam_choiceResult !== "" && tam_choiceResult !== undefined) {
        tam_choiceAnswear = tam_choiceResult;
        tam_choiceBd = "|/|" + tam_choiceAnswear;
      } else if (tam_choiceAnswear !== "" && tam_choiceAnswear !== undefined) {
        tam_choiceBd = "|/|" + tam_choiceAnswear;
      } else {
        tam_choiceBd = "";
      }

      var find_unicornBd;
      if (find_unicornResult !== "" && find_unicornResult !== undefined) {
        find_unicornAnswear = find_unicornResult;
        find_unicornBd = "|/|" + find_unicornAnswear;
      } else if (
        find_unicornAnswear !== "" &&
        find_unicornAnswear !== undefined
      ) {
        find_unicornBd = "|/|" + find_unicornAnswear;
      } else {
        find_unicornBd = "";
      }

      var conflictBd;
      var conflictFirstBd;
      if (conflictResult !== "" && conflictResult !== undefined) {
        conflictFirstAnswear = conflictResult;
        conflictFirstBd = conflictFirstAnswear;
      } else if (
        conflictFirstAnswear !== "" &&
        conflictFirstAnswear !== undefined
      ) {
        conflictFirstBd = conflictFirstAnswear;
      } else {
        conflictFirstBd = "";
      }

      var conflictSecondBd;
      if (conflict_secondResult !== "" && conflict_secondResult !== undefined) {
        conflictSecondAnswear = conflict_secondResult;
        conflictSecondBd = "*" + conflictSecondAnswear;
      } else if (
        conflictSecondAnswear !== "" &&
        conflictSecondAnswear !== undefined
      ) {
        conflictSecondBd = "*" + conflictSecondAnswear;
      } else {
        conflictSecondBd = "";
      }

      var conflictThirdBd;
      if (conflict_thirdResult !== "" && conflict_thirdResult !== undefined) {
        conflictThirdAnswear = conflict_thirdResult;
        conflictThirdBd = "*" + conflictThirdAnswear;
      } else if (
        conflictThirdAnswear !== "" &&
        conflictThirdAnswear !== undefined
      ) {
        conflictThirdBd = "*" + conflictThirdAnswear;
      } else {
        conflictThirdBd = "";
      }

      if (conflictFirstBd !== "") {
        conflictBd =
          "|/|" + conflictFirstBd + conflictSecondBd + conflictThirdBd;
      } else {
        conflictBd = "";
      }

      var tam_calcBd;
      if (tam_calcResult !== "" && tam_calcResult !== undefined) {
        tam_calcAnswear = tam_calcResult;
        tam_calcBd = "|/|" + tam_calcAnswear;
      } else if (tam_calcAnswear !== "" && tam_calcAnswear !== undefined) {
        tam_calcBd = "|/|" + tam_calcAnswear;
      } else {
        tam_calcBd = "";
      }

      var samBd;
      if (samResult !== "" && samResult !== undefined) {
        samAnswear = samResult;
        samBd = "|/|" + samAnswear;
      } else if (samAnswear !== "" && samAnswear !== undefined) {
        samBd = "|/|" + samAnswear;
      } else {
        samBd = "";
      }

      var sam_calcBd;
      if (sam_calcResult !== "" && sam_calcResult !== undefined) {
        sam_calcAnswear = sam_calcResult;
        sam_calcBd = "|/|" + sam_calcAnswear;
      } else if (sam_calcAnswear !== "" && sam_calcAnswear !== undefined) {
        sam_calcBd = "|/|" + sam_calcAnswear;
      } else {
        sam_calcBd = "";
      }

      var sam_ukBd;
      if (sam_ukResult !== "" && sam_ukResult !== undefined) {
        sam_ukAnswear = sam_ukResult;
        sam_ukBd = "|/|" + sam_ukAnswear;
      } else if (sam_ukAnswear !== "" && sam_ukAnswear !== undefined) {
        sam_ukBd = "|/|" + sam_ukAnswear;
      } else {
        sam_ukBd = "";
      }

      var unicorn_ukBd;
      if (unicorn_ukResult !== "" && unicorn_ukResult !== undefined) {
        unicorn_ukAnswear = unicorn_ukResult;
        unicorn_ukBd = "|/|" + unicorn_ukAnswear;
      } else if (unicorn_ukAnswear !== "" && unicorn_ukAnswear !== undefined) {
        unicorn_ukBd = "|/|" + unicorn_ukAnswear;
      } else {
        unicorn_ukBd = "";
      }

      var macroBd;
      if (macroResult !== "" && macroResult !== undefined) {
        macroAnswear = macroResult;
        macroBd = "|/|" + macroAnswear;
      } else if (macroAnswear !== "" && macroAnswear !== undefined) {
        macroBd = "|/|" + macroAnswear;
      } else {
        macroBd = "";
      }

      var macro_factorsBd;
      if (macro_factorsResult !== "" && macro_factorsResult !== undefined) {
        macro_factorsAnswear = macro_factorsResult;
        macro_factorsBd = "|/|" + macro_factorsAnswear;
      } else if (
        macro_factorsAnswear !== "" &&
        macro_factorsAnswear !== undefined
      ) {
        macro_factorsBd = "|/|" + macro_factorsAnswear;
      } else {
        macro_factorsBd = "";
      }

      var on_businessBd;
      if (on_businessResult !== "" && on_businessResult !== undefined) {
        on_businessAnswear = on_businessResult;
        on_businessBd = "|/|" + on_businessAnswear;
      } else if (
        on_businessAnswear !== "" &&
        on_businessAnswear !== undefined
      ) {
        on_businessBd = "|/|" + on_businessAnswear;
      } else {
        on_businessBd = "";
      }

      var for_olluBd;
      if (for_olluResult !== "" && for_olluResult !== undefined) {
        for_olluAnswear = for_olluResult;
        for_olluBd = "|/|" + for_olluAnswear;
      } else if (for_olluAnswear !== "" && for_olluAnswear !== undefined) {
        for_olluBd = "|/|" + for_olluAnswear;
      } else {
        for_olluBd = "";
      }

      var comp_unicornBd;
      if (comp_unicornResult !== "" && comp_unicornResult !== undefined) {
        comp_unicornAnswear = comp_unicornResult;
        comp_unicornBd = "|/|" + comp_unicornAnswear;
      } else if (
        comp_unicornAnswear !== "" &&
        comp_unicornAnswear !== undefined
      ) {
        comp_unicornBd = "|/|" + comp_unicornAnswear;
      } else {
        comp_unicornBd = "";
      }

      var comp_chooseBd;
      if (comp_chooseResult !== "" && comp_chooseResult !== undefined) {
        comp_chooseAnswear = comp_chooseResult;
        comp_chooseBd = "|/|" + comp_chooseAnswear;
      } else if (
        comp_chooseAnswear !== "" &&
        comp_chooseAnswear !== undefined
      ) {
        comp_chooseBd = "|/|" + comp_chooseAnswear;
      } else {
        comp_chooseBd = "";
      }

      var metricsBd;
      if (metricsResult !== "" && metricsResult !== undefined) {
        metricsAnswear = metricsResult;
        metricsBd = "|/|" + metricsAnswear;
      } else if (metricsAnswear !== "" && metricsAnswear !== undefined) {
        metricsBd = "|/|" + metricsAnswear;
      } else {
        metricsBd = "";
      }

      var ollu_compBd;
      if (ollu_compResult !== "" && ollu_compResult !== undefined) {
        ollu_compAnswear = ollu_compResult;
        ollu_compBd = "|/|" + ollu_compAnswear;
      } else if (ollu_compAnswear !== "" && ollu_compAnswear !== undefined) {
        ollu_compBd = "|/|" + ollu_compAnswear;
      } else {
        ollu_compBd = "";
      }

      var ollu_moneyBd;
      if (ollu_moneyResult !== "" && ollu_moneyResult !== undefined) {
        ollu_moneyAnswear = ollu_moneyResult;
        ollu_moneyBd = "|/|" + ollu_moneyAnswear;
      } else if (ollu_moneyAnswear !== "" && ollu_moneyAnswear !== undefined) {
        ollu_moneyBd = "|/|" + ollu_moneyAnswear;
      } else {
        ollu_moneyBd = "";
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

      var charactersBd;
      if (charactersResult !== "" && charactersResult !== undefined) {
        charactersAnswear = charactersResult;
        charactersBd = "|/|" + charactersAnswear;
      } else if (charactersAnswear !== "" && charactersAnswear !== undefined) {
        charactersBd = "|/|" + charactersAnswear;
      } else {
        charactersBd = "";
      }

      var fichBd;
      if (fichResult !== "" && fichResult !== undefined) {
        fichAnswear = fichResult;
        fichBd = "|/|" + fichAnswear;
      } else if (fichAnswear !== "" && fichAnswear !== undefined) {
        fichBd = "|/|" + fichAnswear;
      } else {
        fichBd = "";
      }

      var last_opinionBd;
      if (last_opinionResult !== "" && last_opinionResult !== undefined) {
        last_opinionAnswear = last_opinionResult;
        last_opinionBd = "|/|" + last_opinionAnswear;
      } else if (
        last_opinionAnswear !== "" &&
        last_opinionAnswear !== undefined
      ) {
        last_opinionBd = "|/|" + last_opinionAnswear;
      } else {
        last_opinionBd = "";
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

      if (tab === "tab1") {
        var dataTab1 =
          countProgressTab1 +
          unicornBd +
          indexesBd +
          tam_choiceBd +
          find_unicornBd +
          conflictBd +
          tam_calcBd +
          samBd +
          sam_calcBd +
          sam_ukBd +
          unicorn_ukBd +
          macroBd +
          macro_factorsBd +
          on_businessBd +
          for_olluBd +
          starTab1Bd;
      } else if (tab === "tab2") {
        var dataTab2 =
          countProgressTab2 +
          comp_unicornBd +
          comp_chooseBd +
          metricsBd +
          ollu_compBd +
          ollu_moneyBd +
          countryBd +
          conclusionsBd +
          charactersBd +
          fichBd +
          last_opinionBd +
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
          collection_id: "6517f3b8afa18ec4281d2807",
          user_id: fragments[4],
          tab1theory: tab1theoryVal
        };
      } else if (tabs === "tab2") {
        data2 = {
          collection_id: "6517f3b8afa18ec4281d2807",
          user_id: fragments[4],
          tab2theory: tab2theoryVal
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
