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

var countProgressTab1 = tab1BDVal[0];
var firmstyleAnswear = tab1BDVal[1];
var designerAnswear = tab1BDVal[2];
var identityAnswear = tab1BDVal[3];
var redesignAnswear = tab1BDVal[4];
var metaphorAnswear = tab1BDVal[5];
var metaphor_textareaAnswear = tab1BDVal[6];
var feedbackAnswear = tab1BDVal[7];
var opinionAnswear = tab1BDVal[8];
var do_workAnswear = tab1BDVal[9];
var variant_textareaAnswear = tab1BDVal[10];
var colorsAnswear = tab1BDVal[11];
var feedback_textareaAnswear = tab1BDVal[12];
var gidelineAnswear = tab1BDVal[13];
var logo_reviewAnswear = tab1BDVal[14];
var starAnswearTab1 = tab1BDVal[15];

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
create_lesson("65326a3ca55b6cc596333e33", user_email, fragments[4]);
// if (countProgressTab1 > 29) {
//   availableLinks("sixthl_tab2");
//   activetab("sixthl_tab2", "tab2");
// }

function radioCheck(blopElement) {
  var radio = blopElement.querySelector('input[type="radio"]:checked');
  if (radio) {
    var value = radio.value;
    var radioAnswer = blopElement.nextElementSibling.querySelector("." + value);
    radioAnswer.classList.add("answer_visible");
  }
}

function identityCheck() {
  var identityInfo = document.getElementById("identity");
  var identityForm = identityInfo.querySelector("form");
  var identityElements = identityForm.querySelectorAll(".check_input");

  var identityFirst = identityElements[0].querySelector(
    'input[type="checkbox"]'
  );
  var identitySecond = identityElements[1].querySelector(
    'input[type="checkbox"]'
  );
  var identityThird = identityElements[2].querySelector(
    'input[type="checkbox"]'
  );
  var identityFour = identityElements[3].querySelector(
    'input[type="checkbox"]'
  );
  var identityFive = identityElements[4].querySelector(
    'input[type="checkbox"]'
  );
  var identitySix = identityElements[5].querySelector('input[type="checkbox"]');
  var identitySeven = identityElements[6].querySelector(
    'input[type="checkbox"]'
  );
  var identityEight = identityElements[7].querySelector(
    'input[type="checkbox"]'
  );

  if (
    !identityFirst.checked &&
    !identitySecond.checked &&
    !identityThird.checked &&
    identityFour.checked &&
    identityFive.checked &&
    !identitySix.checked &&
    identitySeven.checked &&
    identityEight.checked
  ) {
    identityInfo.nextElementSibling.querySelector(".no").classList.add("hide");
    identityInfo.nextElementSibling
      .querySelector(".yes")
      .classList.remove("hide");
  } else {
    identityInfo.nextElementSibling
      .querySelector(".no")
      .classList.remove("hide");
    identityInfo.nextElementSibling.querySelector(".yes").classList.add("hide");
  }
}

function feedbackCheck() {
  var feedbackInfo = document.getElementById("feedback");
  var feedbackForm = feedbackInfo.querySelector("form");
  var feedbackElements = feedbackForm.querySelectorAll(".check_input");

  var feedbackFirst = feedbackElements[0].querySelector(
    'input[type="checkbox"]'
  );
  var feedbackSecond = feedbackElements[1].querySelector(
    'input[type="checkbox"]'
  );
  var feedbackThird = feedbackElements[2].querySelector(
    'input[type="checkbox"]'
  );
  var feedbackFour = feedbackElements[3].querySelector(
    'input[type="checkbox"]'
  );
  var feedbackFive = feedbackElements[4].querySelector(
    'input[type="checkbox"]'
  );
  var feedbackSix = feedbackElements[5].querySelector('input[type="checkbox"]');
  var feedbackSeven = feedbackElements[6].querySelector(
    'input[type="checkbox"]'
  );
  var feedbackEight = feedbackElements[7].querySelector(
    'input[type="checkbox"]'
  );

  if (
    !feedbackFirst.checked &&
    feedbackSecond.checked &&
    feedbackThird.checked &&
    !feedbackFour.checked &&
    feedbackFive.checked &&
    !feedbackSix.checked &&
    !feedbackSeven.checked &&
    feedbackEight.checked
  ) {
    feedbackInfo.nextElementSibling.querySelector(".no").classList.add("hide");
    feedbackInfo.nextElementSibling
      .querySelector(".yes")
      .classList.remove("hide");
  } else {
    feedbackInfo.nextElementSibling
      .querySelector(".no")
      .classList.remove("hide");
    feedbackInfo.nextElementSibling.querySelector(".yes").classList.add("hide");
  }
}

function opinionCheck() {
  var opinionInfo = document.getElementById("opinion");
  var opinionForm = opinionInfo.querySelector("form");
  var opinionElements = opinionForm.querySelectorAll(".check_input");

  var opinionFirst = opinionElements[0].querySelector('input[type="checkbox"]');
  var opinionSecond = opinionElements[1].querySelector(
    'input[type="checkbox"]'
  );
  var opinionThird = opinionElements[2].querySelector('input[type="checkbox"]');
  var opinionFour = opinionElements[3].querySelector('input[type="checkbox"]');
  var opinionFive = opinionElements[4].querySelector('input[type="checkbox"]');
  var opinionSix = opinionElements[5].querySelector('input[type="checkbox"]');
  var opinionSeven = opinionElements[6].querySelector('input[type="checkbox"]');
  var opinionEight = opinionElements[7].querySelector('input[type="checkbox"]');

  if (
    !opinionFirst.checked &&
    opinionSecond.checked &&
    opinionThird.checked &&
    !opinionFour.checked &&
    !opinionFive.checked &&
    !opinionSix.checked &&
    !opinionSeven.checked &&
    !opinionEight.checked
  ) {
    opinionInfo.nextElementSibling.querySelector(".no").classList.add("hide");
    opinionInfo.nextElementSibling
      .querySelector(".yes")
      .classList.remove("hide");
  } else {
    opinionInfo.nextElementSibling
      .querySelector(".no")
      .classList.remove("hide");
    opinionInfo.nextElementSibling.querySelector(".yes").classList.add("hide");
  }
}

function gidelineCheck() {
  var gidelineInfo = document.getElementById("gideline");
  var gidelineForm = gidelineInfo.querySelector("form");
  var gidelineElements = gidelineForm.querySelectorAll(".check_input");

  var gidelineFirst = gidelineElements[0].querySelector(
    'input[type="checkbox"]'
  );
  var gidelineSecond = gidelineElements[1].querySelector(
    'input[type="checkbox"]'
  );
  var gidelineThird = gidelineElements[2].querySelector(
    'input[type="checkbox"]'
  );
  var gidelineFour = gidelineElements[3].querySelector(
    'input[type="checkbox"]'
  );
  var gidelineFive = gidelineElements[4].querySelector(
    'input[type="checkbox"]'
  );
  var gidelineSix = gidelineElements[5].querySelector('input[type="checkbox"]');

  if (
    gidelineFirst.checked &&
    !gidelineSecond.checked &&
    !gidelineThird.checked &&
    gidelineFour.checked &&
    gidelineFive.checked &&
    gidelineSix.checked
  ) {
    gidelineInfo.nextElementSibling.querySelector(".no").classList.add("hide");
    gidelineInfo.nextElementSibling
      .querySelector(".yes")
      .classList.remove("hide");
  } else {
    gidelineInfo.nextElementSibling
      .querySelector(".no")
      .classList.remove("hide");
    gidelineInfo.nextElementSibling.querySelector(".yes").classList.add("hide");
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
    if (block && block.id === "identity") {
      identityCheck();
    } else if (block && block.id === "feedback") {
      feedbackCheck();
    } else if (block && block.id === "opinion") {
      opinionCheck();
    } else if (block && block.id === "gideline") {
      gidelineCheck();
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

  if (firmstyleAnswear !== "" && firmstyleAnswear !== undefined) {
    const firmstyleTask = document.getElementById("firmstyle");
    radioGetInfo(firmstyleTask, firmstyleAnswear);
  }
  if (designerAnswear !== "" && designerAnswear !== undefined) {
    const designerTask = document.getElementById("designer");
    radioGetInfo(designerTask, designerAnswear);
  }
  if (identityAnswear !== "" && identityAnswear !== undefined) {
    const identityTask = document.getElementById("identity");
    checkboxGetInfo(identityTask, identityAnswear);
  }
  if (redesignAnswear !== "" && redesignAnswear !== undefined) {
    const redesignTask = document.getElementById("redesign");
    radioGetInfo(redesignTask, redesignAnswear);
  }
  if (metaphorAnswear !== "" && metaphorAnswear !== undefined) {
    const metaphorTask = document.getElementById("metaphor");
    radioGetInfo(metaphorTask, metaphorAnswear);
  }
  if (
    metaphor_textareaAnswear !== "" &&
    metaphor_textareaAnswear !== undefined
  ) {
    const metaphor_textareaTask = document.getElementById("metaphor_textarea");
    textareaGethInfo(metaphor_textareaTask, metaphor_textareaAnswear);
  }
  if (feedbackAnswear !== "" && feedbackAnswear !== undefined) {
    const feedbackTask = document.getElementById("feedback");
    checkboxGetInfo(feedbackTask, feedbackAnswear);
  }
  if (opinionAnswear !== "" && opinionAnswear !== undefined) {
    const opinionTask = document.getElementById("opinion");
    checkboxGetInfo(opinionTask, opinionAnswear);
  }
  if (do_workAnswear !== "" && do_workAnswear !== undefined) {
    const do_workTask = document.getElementById("do_work");
    radioGetInfo(do_workTask, do_workAnswear);
  }
  if (variant_textareaAnswear !== "" && variant_textareaAnswear !== undefined) {
    const variant_textareaTask = document.getElementById("variant_textarea");
    textareaGethInfo(variant_textareaTask, variant_textareaAnswear);
  }
  if (colorsAnswear !== "" && colorsAnswear !== undefined) {
    const colorsTask = document.getElementById("colors");
    radioGetInfo(colorsTask, colorsAnswear);
  }
  if (
    feedback_textareaAnswear !== "" &&
    feedback_textareaAnswear !== undefined
  ) {
    const feedback_textareaTask = document.getElementById("feedback_textarea");
    textareaGethInfo(feedback_textareaTask, feedback_textareaAnswear);
  }
  if (gidelineAnswear !== "" && gidelineAnswear !== undefined) {
    const gidelineTask = document.getElementById("gideline");
    checkboxGetInfo(gidelineTask, gidelineAnswear);
  }
  if (logo_reviewAnswear !== "" && logo_reviewAnswear !== undefined) {
    const logo_reviewTask = document.getElementById("logo_review");
    textareaGethInfo(logo_reviewTask, logo_reviewAnswear);
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

if (countProgressTab1 !== "" && countProgressTab1 !== undefined) {
  tab1Progress(countProgressTab1);
}

primalButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    var blopElement = button.closest(".blop");
    if (blopElement) {
      blopElement.classList.add("done_blop");

      radioCheck(blopElement);
      identityCheck();
      feedbackCheck();
      opinionCheck();
      gidelineCheck();

      blopElement.nextElementSibling.classList.add("next_visible");
      setTimeout(function () {
        blopElement.nextElementSibling.classList.add("blop_animate");
      }, 1);

      if (button.classList.contains("last_button")) {
        var ss = button.getAttribute("numberBlop");
        create_lesson("65326a3ca55b6cc596333e33", user_email, fragments[4]);

        var parent = button.closest(".lesson_tab").getAttribute("tabs");

        // if (ss > 29 && parent === "tab1") {
        //   availableLinks("sixthl_tab2");
        // }
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

    if (buttonWithAttr.closest("#firmstyle")) {
      const firmstyleTask = document.getElementById("firmstyle");
      var firmstyleResult = radioPushInfo(firmstyleTask);
    }
    if (buttonWithAttr.closest("#designer")) {
      const designerTask = document.getElementById("designer");
      var designerResult = radioPushInfo(designerTask);
    }
    if (buttonWithAttr.closest("#identity")) {
      const identityTask = document.getElementById("identity");
      var identityResult = checkboxPushInfo(identityTask);
    }
    if (buttonWithAttr.closest("#redesign")) {
      const redesignTask = document.getElementById("redesign");
      var redesignResult = radioPushInfo(redesignTask);
    }
    if (buttonWithAttr.closest("#metaphor")) {
      const metaphorTask = document.getElementById("metaphor");
      var metaphorResult = radioPushInfo(metaphorTask);
    }
    if (buttonWithAttr.closest("#metaphor_textarea")) {
      const metaphor_textareaTask = document.getElementById(
        "metaphor_textarea"
      );
      var metaphor_textareaResult = textareaPushInfo(metaphor_textareaTask);
    }
    if (buttonWithAttr.closest("#feedback")) {
      const feedbackTask = document.getElementById("feedback");
      var feedbackResult = checkboxPushInfo(feedbackTask);
    }
    if (buttonWithAttr.closest("#opinion")) {
      const opinionTask = document.getElementById("opinion");
      var opinionResult = checkboxPushInfo(opinionTask);
    }
    if (buttonWithAttr.closest("#do_work")) {
      const do_workTask = document.getElementById("do_work");
      var do_workResult = radioPushInfo(do_workTask);
    }
    if (buttonWithAttr.closest("#variant_textarea")) {
      const variant_textareaTask = document.getElementById("variant_textarea");
      var variant_textareaResult = textareaPushInfo(variant_textareaTask);
    }
    if (buttonWithAttr.closest("#colors")) {
      const colorsTask = document.getElementById("colors");
      var colorsResult = radioPushInfo(colorsTask);
    }
    if (buttonWithAttr.closest("#feedback_textarea")) {
      const feedback_textareaTask = document.getElementById(
        "feedback_textarea"
      );
      var feedback_textareaResult = textareaPushInfo(feedback_textareaTask);
    }
    if (buttonWithAttr.closest("#gideline")) {
      const gidelineTask = document.getElementById("gideline");
      var gidelineResult = checkboxPushInfo(gidelineTask);
    }
    if (buttonWithAttr.closest("#logo_review")) {
      const logo_reviewTask = document.getElementById("logo_review");
      var logo_reviewResult = textareaPushInfo(logo_reviewTask);
    }

    // ---------------

    function formSubmit(dataTab1) {
      var data = {
        collection_id: "652ac15c622571ba14ac33f5",
        user_id: fragments[4],
        user_tab1: dataTab1
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

      if (
        buttonWithAttr.closest(".lesson_tab[tabs='tab1'] .fs_starrating-1_item")
      ) {
        star1 = starButtons(tab);
      }

      countProgressTab1 = attributeValue;

      var firmstyleBd;
      if (firmstyleResult !== "" && firmstyleResult !== undefined) {
        firmstyleAnswear = firmstyleResult;
        firmstyleBd = "|/|" + firmstyleAnswear;
      } else if (firmstyleAnswear !== "" && firmstyleAnswear !== undefined) {
        firmstyleBd = "|/|" + firmstyleAnswear;
      } else {
        firmstyleBd = "";
      }

      var designerBd;
      if (designerResult !== "" && designerResult !== undefined) {
        designerAnswear = designerResult;
        designerBd = "|/|" + designerAnswear;
      } else if (designerAnswear !== "" && designerAnswear !== undefined) {
        designerBd = "|/|" + designerAnswear;
      } else {
        designerBd = "";
      }

      var identityBd;
      if (identityResult !== "" && identityResult !== undefined) {
        identityAnswear = identityResult;
        identityBd = "|/|" + identityAnswear;
      } else if (identityAnswear !== "" && identityAnswear !== undefined) {
        identityBd = "|/|" + identityAnswear;
      } else {
        identityBd = "";
      }

      var redesignBd;
      if (redesignResult !== "" && redesignResult !== undefined) {
        redesignAnswear = redesignResult;
        redesignBd = "|/|" + redesignAnswear;
      } else if (redesignAnswear !== "" && redesignAnswear !== undefined) {
        redesignBd = "|/|" + redesignAnswear;
      } else {
        redesignBd = "";
      }

      var metaphorBd;
      if (metaphorResult !== "" && metaphorResult !== undefined) {
        metaphorAnswear = metaphorResult;
        metaphorBd = "|/|" + metaphorAnswear;
      } else if (metaphorAnswear !== "" && metaphorAnswear !== undefined) {
        metaphorBd = "|/|" + metaphorAnswear;
      } else {
        metaphorBd = "";
      }

      var metaphor_textareaBd;
      if (
        metaphor_textareaResult !== "" &&
        metaphor_textareaResult !== undefined
      ) {
        metaphor_textareaAnswear = metaphor_textareaResult;
        metaphor_textareaBd = "|/|" + metaphor_textareaAnswear;
      } else if (
        metaphor_textareaAnswear !== "" &&
        metaphor_textareaAnswear !== undefined
      ) {
        metaphor_textareaBd = "|/|" + metaphor_textareaAnswear;
      } else {
        metaphor_textareaBd = "";
      }

      var feedbackBd;
      if (feedbackResult !== "" && feedbackResult !== undefined) {
        feedbackAnswear = feedbackResult;
        feedbackBd = "|/|" + feedbackAnswear;
      } else if (feedbackAnswear !== "" && feedbackAnswear !== undefined) {
        feedbackBd = "|/|" + feedbackAnswear;
      } else {
        feedbackBd = "";
      }

      var opinionBd;
      if (opinionResult !== "" && opinionResult !== undefined) {
        opinionAnswear = opinionResult;
        opinionBd = "|/|" + opinionAnswear;
      } else if (opinionAnswear !== "" && opinionAnswear !== undefined) {
        opinionBd = "|/|" + opinionAnswear;
      } else {
        opinionBd = "";
      }

      var do_workBd;
      if (do_workResult !== "" && do_workResult !== undefined) {
        do_workAnswear = do_workResult;
        do_workBd = "|/|" + do_workAnswear;
      } else if (do_workAnswear !== "" && do_workAnswear !== undefined) {
        do_workBd = "|/|" + do_workAnswear;
      } else {
        do_workBd = "";
      }

      var variant_textareaBd;
      if (
        variant_textareaResult !== "" &&
        variant_textareaResult !== undefined
      ) {
        variant_textareaAnswear = variant_textareaResult;
        variant_textareaBd = "|/|" + variant_textareaAnswear;
      } else if (
        variant_textareaAnswear !== "" &&
        variant_textareaAnswear !== undefined
      ) {
        variant_textareaBd = "|/|" + variant_textareaAnswear;
      } else {
        variant_textareaBd = "";
      }

      var colorsBd;
      if (colorsResult !== "" && colorsResult !== undefined) {
        colorsAnswear = colorsResult;
        colorsBd = "|/|" + colorsAnswear;
      } else if (colorsAnswear !== "" && colorsAnswear !== undefined) {
        colorsBd = "|/|" + colorsAnswear;
      } else {
        colorsBd = "";
      }

      var feedback_textareaBd;
      if (
        feedback_textareaResult !== "" &&
        feedback_textareaResult !== undefined
      ) {
        feedback_textareaAnswear = feedback_textareaResult;
        feedback_textareaBd = "|/|" + feedback_textareaAnswear;
      } else if (
        feedback_textareaAnswear !== "" &&
        feedback_textareaAnswear !== undefined
      ) {
        feedback_textareaBd = "|/|" + feedback_textareaAnswear;
      } else {
        feedback_textareaBd = "";
      }

      var gidelineBd;
      if (gidelineResult !== "" && gidelineResult !== undefined) {
        gidelineAnswear = gidelineResult;
        gidelineBd = "|/|" + gidelineAnswear;
      } else if (gidelineAnswear !== "" && gidelineAnswear !== undefined) {
        gidelineBd = "|/|" + gidelineAnswear;
      } else {
        gidelineBd = "";
      }

      var logo_reviewBd;
      if (logo_reviewResult !== "" && logo_reviewResult !== undefined) {
        logo_reviewAnswear = logo_reviewResult;
        logo_reviewBd = "|/|" + logo_reviewAnswear;
      } else if (
        logo_reviewAnswear !== "" &&
        logo_reviewAnswear !== undefined
      ) {
        logo_reviewBd = "|/|" + logo_reviewAnswear;
      } else {
        logo_reviewBd = "";
      }

      // ----------

      var starTab1Bd;
      if (star1 !== "" && star1 !== undefined) {
        starAnswearTab1 = star1;
        starTab1Bd = "|/|" + starAnswearTab1;
      } else if (starAnswearTab1 !== "" && starAnswearTab1 !== undefined) {
        starTab1Bd = "|/|" + starAnswearTab1;
      } else {
        starTab1Bd = "";
      }

      if (tab === "tab1") {
        var dataTab1 =
          countProgressTab1 +
          firmstyleBd +
          designerBd +
          identityBd +
          redesignBd +
          metaphorBd +
          metaphor_textareaBd +
          feedbackBd +
          opinionBd +
          do_workBd +
          variant_textareaBd +
          colorsBd +
          feedback_textareaBd +
          gidelineBd +
          logo_reviewBd +
          starTab1Bd;
      }
      formSubmit(dataTab1);
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
          collection_id: "652ac15c622571ba14ac33f5",
          user_id: fragments[4],
          tab1theory: tab1theoryVal
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

    if (tabs === "tab1") {
      var tab1theoryVal = theoryButton.getAttribute("theory");
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
