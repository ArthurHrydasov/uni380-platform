var user_email = localStorage.getItem("webflowLog");
// console.log("webflowLog: " + user_email);
function availableLinks(link) {
  document.getElementById(link).classList.add("available");
}
function activetab(link, tabsValue, lesson) {
  document.getElementById(link).classList.add("available");
  lessonTabs.forEach(function (tab) {
    tab.classList.remove("active");
    tab.classList.add("noactive");
  });

  var matchingLessonTab = document.querySelector(
    '.middle_content[lesson="' +
      lesson +
      '-lesson"] .lesson_tab[tabs="' +
      tabsValue +
      '"]'
  );

  if (matchingLessonTab) {
    matchingLessonTab.classList.remove("noactive");
    matchingLessonTab.classList.add("active");
  }
  sublinkWrappers.forEach(function (wrapper) {
    wrapper.classList.remove("active");
  });
  // console.log(document.getElementById(link));
  document.getElementById(link).classList.add("active");
}

var links = document.querySelectorAll(".side_bar_link");
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

document.getElementById("sixthl_tab2").remove();
document.getElementById("fourthl_tab3").remove();
document.getElementById("eighthl_tab4").remove();
document.getElementById("twelfthl_tab3").remove();

function sideBarAvailable(customPass) {
  var data = {
    user_email: user_email,
  };
  // console.log(data);
fetch("https://uni-platform-6db9f53f05ed.herokuapp.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      var lessonItems = document.querySelectorAll(".side_bar_links_block");
      var lessonspass;
      lessonspass = data.data.lessonspass;
      if (lessonspass > customPass) {
        lessonspass = customPass;
      }
      if (
        user_email === "oczymaagency@gmail.com" ||
        user_email === "psy.trn@gmail.com" ||
        user_email === "siaprokopa@gmail.com"
        // ||
        // user_email === "aliona.diatlovskaya@gmail.com"
      ) {
        lessonspass = 14;
      }
      // console.log(lessonspass);
      getSideProgress(lessonspass);

      // var lessonItems = document.querySelectorAll(".side_bar_links_block");
      lessonItems.forEach((item, index) => {
        if (index < lessonspass) {
          // if (index < 3) {
          item.classList.add("available");
          if (index === lessonspass - 1) {
            // if (index === 3 - 1) {
            item.classList.add("active");
            var link = item.querySelector(".side_bar_link");
            var linkId = link.getAttribute("id");
            document.querySelector(
              '.middle_content[lesson="' + linkId + '"]'
            ).style.display = "flex";
          }
        } else {
          item.classList.remove("available");
        }
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

function prevTheory(num) {
  console.log('empty');
  let divElement = document.createElement('div');
  divElement.classList.add('empty_theory', 'blop', 'blop_task', 'next_visible', 'blop_animate');
  let divContent = document.createElement('div');
  divContent.classList.add('heading', 'h_main');
  divContent.textContent = "Ви ще не відкрили теорію в цьому уроці";
  divElement.appendChild(divContent);
  let linkElement = document.createElement('a');
  linkElement.href = '/'; // Задайте URL для вашого посилання
  linkElement.textContent = 'Симулятор'; // Текст посилання
  linkElement.classList.add('button_primal');
  divElement.appendChild(linkElement);
  let numberText = ['', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth', 'thirteenth', 'fourteenth'];
  let numText = numberText[num];
  var blockElement = document.querySelector('.middle_content[lesson="' + numText + '-lesson"]');
  if (num !== 1) {
    document.getElementById(numText + 'l_tab1').classList.add("block_empty");
  } else {
    document.getElementById('firstl_intro').classList.add("block_empty");
  }
  blockElement.classList.add('hide_other');
  blockElement.appendChild(divElement);
}

function getUserInfo() {
  var data = {
    collection_id: "6517f3b8afa18ec4281d27f0",
    collection_id2: "6517f3b8afa18ec4281d2807",
    collection_id3: "6517f3b8afa18ec4281d2823",
    collection_id4: "6517f3b8afa18ec4281d283c",
    collection_id5: "6517f3b8afa18ec4281d2852",
    collection_id6: "6522b0ddc5a8a5ff923de4e8",
    collection_id7: "652ac15c622571ba14ac33f5",
    collection_id8: "65326a3ca55b6cc596333e33",
    collection_id9: "653baae8a73b64de22ff788b",
    collection_id10: "6546a14212815d6340defd76",
    collection_id11: "6556071b08de84914fd787a2",
    collection_id12: "655b23d09365d880eb114243",
    collection_id13: "656c7c06998532066a3e134d",
    collection_id14: "6589fffff1b468de2af19b66",
    user_email: user_email,
  };

  // console.log(data);
  fetch("https://uni-platform-6db9f53f05ed.herokuapp.com/get-all-lesson-info", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data[0].data !== undefined) {
        var introtheory = data[0].data.fieldData.introtheory;
        var tab1theory = data[0].data.fieldData.tab1theory;
        var tab2theory = data[0].data.fieldData.tab2theory;

        var tab1theory2;
        var tab2theory2;
        if (data[1].data !== undefined) {
          tab1theory2 = data[1].data.fieldData.tab1theory;
          tab2theory2 = data[1].data.fieldData.tab2theory;
        } else {
          tab1theory2 = undefined;
          tab2theory2 = undefined;
        }

        var tab1theory3;
        var tab2theory3;
        var tab3theory3;
        if (data[2].data !== undefined) {
          tab1theory3 = data[2].data.fieldData.tab1theory;
          tab2theory3 = data[2].data.fieldData.tab2theory;
          tab3theory3 = data[2].data.fieldData.tab3theory;
        } else {
          tab1theory3 = undefined;
          tab2theory3 = undefined;
          tab3theory3 = undefined;
        }

        var tab1theory4;
        var tab2theory4;
        // var tab3theory4;
        if (data[3].data !== undefined) {
          tab1theory4 = data[3].data.fieldData.tab1theory;
          tab2theory4 = data[3].data.fieldData.tab2theory;
        } else {
          tab1theory4 = undefined;
          tab2theory4 = undefined;
        }

        var tab1theory5;
        var tab2theory5;
        if (data[4].data !== undefined) {
          tab1theory5 = data[4].data.fieldData.tab1theory;
          tab2theory5 = data[4].data.fieldData.tab2theory;
        } else {
          tab1theory5 = undefined;
          tab2theory5 = undefined;
        }

        var tab1theory6;
        if (data[5].data !== undefined) {
          tab1theory6 = data[5].data.fieldData.tab1theory;
        } else {
          tab1theory6 = undefined;
        }

        var tab1theory7;
        if (data[6].data !== undefined) {
          tab1theory7 = data[6].data.fieldData.tab1theory;
        } else {
          tab1theory7 = undefined;
        }

        var tab1theory8;
        var tab2theory8;
        var tab3theory8;
        if (data[7].data !== undefined) {
          tab1theory8 = data[7].data.fieldData.tab1theory;
          tab2theory8 = data[7].data.fieldData.tab2theory;
          tab3theory8 = data[7].data.fieldData.tab3theory;
        } else {
          tab1theory8 = undefined;
          tab2theory8 = undefined;
          tab3theory8 = undefined;
        }

        var tab1theory9;
        var tab2theory9;
        if (data[8].data !== undefined) {
          tab1theory9 = data[8].data.fieldData.tab1theory;
          tab2theory9 = data[8].data.fieldData.tab2theory;
        } else {
          tab1theory9 = undefined;
          tab2theory9 = undefined;
        }

        var tab1theory10;
        if (data[9].data !== undefined) {
          tab1theory10 = data[9].data.fieldData.tab1theory;
        } else {
          tab1theory10 = undefined;
        }

        var tab1theory11;
        var tab2theory11;
        if (data[10].data !== undefined) {
          tab1theory11 = data[10].data.fieldData.tab1theory;
          tab2theory11 = data[10].data.fieldData.tab2theory;
        } else {
          tab1theory11 = undefined;
          tab2theory11 = undefined;
        }

        var tab1theory12;
        var tab2theory12;
        if (data[11].data !== undefined) {
          tab1theory12 = data[11].data.fieldData.tab1theory;
          tab2theory12 = data[11].data.fieldData.tab2theory;
        } else {
          tab1theory12 = undefined;
          tab2theory12 = undefined;
        }

        var tab1theory13;
        var tab2theory13;
        if (data[12].data !== undefined) {
          tab1theory13 = data[12].data.fieldData.tab1theory;
          tab2theory13 = data[12].data.fieldData.tab2theory;
        } else {
          tab1theory13 = undefined;
          tab2theory13 = undefined;
        }

        var tab1theory14;
        var tab2theory14;
        if (data[13].data !== undefined) {
          tab1theory14 = data[13].data.fieldData.tab1theory;
          tab2theory14 = data[13].data.fieldData.tab2theory;
        } else {
          tab1theory14 = undefined;
          tab2theory14 = undefined;
        }

        function introProgress(val, end, tab, lesson) {
          if (val > 0 && val !== "" && val !== undefined) {
            var targetElement = document.querySelector(
              '.middle_content[lesson="' +
                lesson +
                '-lesson"] .lesson_tab[tabs="' +
                tab +
                '"] .dialog_block [theory="' +
                val +
                '"]'
            );

            // var parentElement = targetElement.parentNode;
            var parentElement = document.querySelector(
              '.middle_content[lesson="' +
                lesson +
                '-lesson"] .lesson_tab[tabs="' +
                tab +
                '"] .dialog_block'
            );
            // console.log(parentElement);

            var blopBlocks = Array.from(
              parentElement.querySelectorAll('[blop="main"]')
            );
            // console.log(targetElement);
            var lastIndex = blopBlocks.indexOf(targetElement) - 1;
            function addVisClass(block) {
              block.classList.add("next_visible", "done_blop", "blop_animate");
            }
            for (var i = 0; i <= lastIndex; i++) {
              addVisClass(blopBlocks[i]);
            }
            addVisClass(targetElement);
            if (val == end) {
              var starBlopElement =
                targetElement.parentNode.querySelector(".star_blop");
              starBlopElement.classList.add("next_visible");
              setTimeout(function () {
                starBlopElement.classList.add("blop_animate");
              }, 1);
            }
          }
        }
        const theories = [
            { theory: introtheory, weight: 1, tab: "intro", order: "first" },
            { theory: tab1theory, weight: 5, tab: "tab1", order: "first" },
            { theory: tab2theory, weight: 3, tab: "tab2", order: "first" },
            { theory: tab1theory2, weight: 3, tab: "tab1", order: "second" },
            { theory: tab2theory2, weight: 2, tab: "tab2", order: "second" },
            { theory: tab1theory3, weight: 4, tab: "tab1", order: "third" },
            { theory: tab2theory3, weight: 2, tab: "tab2", order: "third" },
            { theory: tab3theory3, weight: 1, tab: "tab3", order: "third" },
            { theory: tab1theory4, weight: 2, tab: "tab1", order: "fourth" },
            { theory: tab2theory4, weight: 7, tab: "tab2", order: "fourth" },
            { theory: tab1theory5, weight: 2, tab: "tab1", order: "fiveth" },
            { theory: tab2theory5, weight: 4, tab: "tab2", order: "fiveth" },
            { theory: tab1theory6, weight: 3, tab: "tab1", order: "sixth" },
            { theory: tab1theory7, weight: 4, tab: "tab1", order: "seventh" },
            { theory: tab1theory8, weight: 2, tab: "tab1", order: "eighth" },
            { theory: tab2theory8, weight: 1, tab: "tab2", order: "eighth" },
            { theory: tab3theory8, weight: 3, tab: "tab3", order: "eighth" },
            { theory: tab1theory9, weight: 2, tab: "tab1", order: "ninth" },
            { theory: tab2theory9, weight: 3, tab: "tab2", order: "ninth" },
            { theory: tab1theory10, weight: 5, tab: "tab1", order: "tenth" },
            { theory: tab1theory11, weight: 4, tab: "tab1", order: "eleventh" },
            { theory: tab2theory11, weight: 4, tab: "tab2", order: "eleventh" },
            { theory: tab1theory12, weight: 3, tab: "tab1", order: "twelfth" },
            { theory: tab2theory12, weight: 1, tab: "tab2", order: "twelfth" },
            { theory: tab1theory13, weight: 4, tab: "tab1", order: "thirteenth" },
            { theory: tab2theory13, weight: 2, tab: "tab2", order: "thirteenth" },
            { theory: tab1theory14, weight: 4, tab: "tab1", order: "fourteenth" },
            { theory: tab2theory14, weight: 2, tab: "tab2", order: "fourteenth" }
        ];
        
        theories.forEach(item => {
            if (item.theory !== "" && item.theory !== undefined) {
                introProgress(item.theory, item.weight, item.tab, item.order);
            }
        });

        if (
          introtheory > 0 &&
          introtheory !== "" &&
          introtheory !== undefined &&
          tab1theory > 0 &&
          tab1theory !== "" &&
          tab1theory !== undefined
        ) {
          availableLinks("firstl_tab1");
          activetab("firstl_tab1", "tab1", "first");
        } else {
          availableLinks("firstl_intro");
          activetab("firstl_intro", "intro", "first");
        }
        if (
          tab1theory > 4 &&
          tab1theory !== "" &&
          tab1theory !== undefined &&
          tab2theory > 0 &&
          tab2theory !== "" &&
          tab2theory !== undefined
        ) {
          availableLinks("firstl_tab2");
          activetab("firstl_tab2", "tab2", "first");
        }

        if (tab1theory2 !== undefined) {
          if (
            tab1theory2 > 2 &&
            tab1theory2 !== "" &&
            tab1theory2 !== undefined &&
            tab2theory2 > 0 &&
            tab2theory2 !== "" &&
            tab2theory2 !== undefined
          ) {
            availableLinks("secondl_tab2");
            activetab("secondl_tab2", "tab2", "second");
          } else if (
            (tab1theory2 === "" || tab1theory2 === undefined) &&
            (tab2theory2 === "" || tab2theory2 === undefined)
          ) {
            prevTheory(2);
          } else {
            availableLinks("secondl_tab1");
            activetab("secondl_tab1", "tab1", "second");
          }
        } else {
          prevTheory(2);
        }
        if (tab1theory3 !== undefined) {
          if (
            tab2theory3 > 1 &&
            tab2theory3 !== "" &&
            tab2theory3 !== undefined &&
            tab3theory3 > 0 &&
            tab3theory3 !== "" &&
            tab3theory3 !== undefined
          ) {
            availableLinks("thirdl_tab3");
            availableLinks("thirdl_tab2");
            activetab("thirdl_tab3", "tab3", "third");
          } else if (
            tab1theory3 > 3 &&
            tab1theory3 !== "" &&
            tab1theory3 !== undefined &&
            tab2theory3 > 0 &&
            tab2theory3 !== "" &&
            tab2theory3 !== undefined
          ) {
            availableLinks("thirdl_tab2");
            activetab("thirdl_tab2", "tab2", "third");
          } else if (
            (tab1theory3 === "" || tab1theory3 === undefined) &&
            (tab2theory3 === "" || tab2theory3 === undefined) &&
            (tab3theory3 === "" || tab3theory3 === undefined)
          ) {
            prevTheory(3);
          } else {
            availableLinks("thirdl_tab1");
            activetab("thirdl_tab1", "tab1", "third");
          }
        } else {
          prevTheory(3);
        }
        if (tab1theory4 !== undefined) {
          // console.log(data[3].data);

          if (
            tab1theory4 > 1 &&
            tab1theory4 !== "" &&
            tab1theory4 !== undefined &&
            tab2theory4 > 0 &&
            tab2theory4 !== "" &&
            tab2theory4 !== undefined
          ) {
            availableLinks("fourthl_tab2");
            activetab("fourthl_tab2", "tab2", "fourth");
          } else if (
            (tab1theory4 === "" || tab1theory4 === undefined) &&
            (tab2theory4 === "" || tab2theory4 === undefined)
          ) {
            prevTheory(4);
          } else {
            availableLinks("fourthl_tab1");
            activetab("fourthl_tab1", "tab1", "fourth");
          }
        } else {
          prevTheory(4);
        }

        if (tab1theory5 !== undefined) {
          if (
            tab1theory5 > 1 &&
            tab1theory5 !== "" &&
            tab1theory5 !== undefined &&
            tab2theory5 > 0 &&
            tab2theory5 !== "" &&
            tab2theory5 !== undefined
          ) {
            availableLinks("fivethl_tab2");
            activetab("fivethl_tab2", "tab2", "fiveth");
          } else if (
            (tab1theory5 === "" || tab1theory5 === undefined) &&
            (tab2theory5 === "" || tab2theory5 === undefined)
          ) {
            prevTheory(5);
          } else {
            availableLinks("fivethl_tab1");
            activetab("fivethl_tab1", "tab1", "fiveth");
          }
        } else {
          prevTheory(5);
        }

        if (tab1theory6 !== undefined) {
          availableLinks("sixthl_tab1");
          activetab("sixthl_tab1", "tab1", "sixth");
        } else {
          prevTheory(6);
        }

        if (tab1theory7 !== undefined) {
          availableLinks("seventhl_tab1");
          activetab("seventhl_tab1", "tab1", "seventh");
        } else {
          prevTheory(7);
        }

        //----------

        if (tab1theory8 !== undefined) {
          if (
            tab2theory8 > 0 &&
            tab2theory8 !== "" &&
            tab2theory8 !== undefined &&
            tab3theory8 > 0 &&
            tab3theory8 !== "" &&
            tab3theory8 !== undefined
          ) {
            availableLinks("eighthl_tab3");
            availableLinks("eighthl_tab2");
            activetab("eighthl_tab3", "tab3", "eighth");
          } else if (
            tab1theory8 > 1 &&
            tab1theory8 !== "" &&
            tab1theory8 !== undefined &&
            tab2theory8 > 0 &&
            tab2theory8 !== "" &&
            tab2theory8 !== undefined
          ) {
            availableLinks("eighthl_tab2");
            activetab("eighthl_tab2", "tab2", "eighth");
          } else if (
            (tab1theory8 === "" || tab1theory8 === undefined) &&
            (tab2theory8 === "" || tab2theory8 === undefined) &&
            (tab3theory8 === "" || tab3theory8 === undefined)
          ) {
            prevTheory(8);
          } else {
            availableLinks("eighthl_tab1");
            activetab("eighthl_tab1", "tab1", "eighth");
          }
        } else {
          prevTheory(8);
        }

        if (tab1theory9 !== undefined) {
          if (
            tab1theory9 > 1 &&
            tab1theory9 !== "" &&
            tab1theory9 !== undefined &&
            tab2theory9 > 0 &&
            tab2theory9 !== "" &&
            tab2theory9 !== undefined
          ) {
            availableLinks("ninthl_tab2");
            activetab("ninthl_tab2", "tab2", "ninth");
          } else if (
            (tab1theory9 === "" || tab1theory9 === undefined) &&
            (tab2theory9 === "" || tab2theory9 === undefined)
          ) {
            prevTheory(9);
          } else {
            availableLinks("ninthl_tab1");
            activetab("ninthl_tab1", "tab1", "ninth");
          }
        } else {
          prevTheory(9);
        }

        if (tab1theory10 !== undefined) {
          availableLinks("tenthl_tab1");
          activetab("tenthl_tab1", "tab1", "tenth");
        } else {
          prevTheory(10);
        }

        if (tab1theory11 !== undefined) {
          if (
            tab1theory11 > 3 &&
            tab1theory11 !== "" &&
            tab1theory11 !== undefined &&
            tab2theory11 > 0 &&
            tab2theory11 !== "" &&
            tab2theory11 !== undefined
          ) {
            availableLinks("eleventhl_tab2");
            activetab("eleventhl_tab2", "tab2", "eleventh");
          } else if (
            tab1theory11 == 2 &&
            tab1theory11 !== "" &&
            tab1theory11 !== undefined &&
            tab2theory11 > 0 &&
            tab2theory11 !== "" &&
            tab2theory11 !== undefined
          ) {
            availableLinks("eleventhl_tab2");
            activetab("eleventhl_tab2", "tab2", "eleventh");
            document
              .querySelector(
                '[lesson="eleventh-lesson"] [tabs="tab1"] .star_blop'
              )
              .classList.add("next_visible", "blop_animate");
          } else if (
            (tab1theory11 === "" || tab1theory11 === undefined) &&
            (tab2theory11 === "" || tab2theory11 === undefined)
          ) {
            prevTheory(11);
          } else {
            availableLinks("eleventhl_tab1");
            activetab("eleventhl_tab1", "tab1", "eleventh");
          }
        } else {
          prevTheory(11);
        }

        if (tab1theory12 !== undefined) {
          if (
            tab1theory12 > 2 &&
            tab1theory12 !== "" &&
            tab1theory12 !== undefined &&
            tab2theory12 > 0 &&
            tab2theory12 !== "" &&
            tab2theory12 !== undefined
          ) {
            availableLinks("twelfthl_tab2");
            activetab("twelfthl_tab2", "tab2", "twelfth");
          } else if (
            tab1theory12 == 2 &&
            tab1theory12 !== "" &&
            tab1theory12 !== undefined &&
            tab2theory12 > 0 &&
            tab2theory12 !== "" &&
            tab2theory12 !== undefined
          ) {
            availableLinks("twelfthl_tab2");
            activetab("twelfthl_tab2", "tab2", "twelfth");
            document
              .querySelector(
                '[lesson="twelfth-lesson"] [tabs="tab1"] .star_blop'
              )
              .classList.add("next_visible", "blop_animate");
          } else if (
            (tab1theory12 === "" || tab1theory12 === undefined) &&
            (tab2theory12 === "" || tab2theory12 === undefined)
          ) {
            prevTheory(12);
          } else {
            availableLinks("twelfthl_tab1");
            activetab("twelfthl_tab1", "tab1", "twelfth");
          }
        } else {
          prevTheory(12);
        }

        if (tab1theory13 !== undefined) {
          if (
            tab1theory13 > 3 &&
            tab1theory13 !== "" &&
            tab1theory13 !== undefined &&
            tab2theory13 > 0 &&
            tab2theory13 !== "" &&
            tab2theory13 !== undefined
          ) {
            availableLinks("thirteenthl_tab2");
            activetab("thirteenthl_tab2", "tab2", "thirteenth");
          } else if (
            (tab1theory13 === "" || tab1theory13 === undefined) &&
            (tab2theory13 === "" || tab2theory13 === undefined)
          ) {
            prevTheory(13);
          } else {
            availableLinks("thirteenthl_tab1");
            activetab("thirteenthl_tab1", "tab1", "thirteenth");
          }
        } else {
          prevTheory(13);
        }

        if (tab1theory14 !== undefined) {
            console.log(tab1theory14);
            console.log(tab2theory14);
            if (
              tab1theory14 > 3 &&
              tab1theory14 !== "" &&
              tab1theory14 !== undefined &&
              tab2theory14 > 0 &&
              tab2theory14 !== "" &&
              tab2theory14 !== undefined
            ) {
              availableLinks("fourteenthl_tab2");
              activetab("fourteenthl_tab2", "tab2", "fourteenth");
            } else if (
              (tab1theory14 === "" || tab1theory14 === undefined) &&
              (tab2theory14 === "" || tab2theory14 === undefined)
            ) {
              prevTheory(14);
            } else {
              availableLinks("fourteenthl_tab1");
              activetab("fourteenthl_tab1", "tab1", "fourteenth");
            }
          } else {
            prevTheory(14);
          }
      } else {
        window.location.href = "/";
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
getUserInfo();

var sublinkWrappers = document.querySelectorAll(".side_bar_sublink_wrapper");
var lessonTabs = document.querySelectorAll(".lesson_tab");
sublinkWrappers.forEach(function (sublinkWrapper) {
  sublinkWrapper.addEventListener("click", function () {
    var tabsElement = sublinkWrapper.querySelector("[tabs]");
    if (tabsElement) {
      var tabsValue = tabsElement.getAttribute("tabs");
      var wrapId = tabsElement
        .closest(".side_bar_links_block")
        .querySelector(".side_bar_link")
        .getAttribute("id");
      lessonTabs.forEach(function (tab) {
        tab.classList.remove("active");
        tab.classList.add("noactive");
      });
      var matchingLessonTab = document.querySelector(
        '.middle_content[lesson="' +
          wrapId +
          '"] .lesson_tab[tabs="' +
          tabsValue +
          '"]'
      );
      if (matchingLessonTab) {
        matchingLessonTab.classList.remove("noactive");
        matchingLessonTab.classList.add("active");
      }
    }
    sublinkWrappers.forEach(function (wrapper) {
      wrapper.classList.remove("active");
    });
    sublinkWrapper.classList.add("active");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

var nextButtons = document.querySelectorAll(".next_button");
nextButtons.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.classList.contains("next_lesson")) {
      if (
        document
          .querySelector(".side_bar_links_block.active")
          .nextElementSibling.classList.contains("available")
      ) {
        document
          .querySelector(".side_bar_links_block.active")
          .nextElementSibling.click();
      }
    } else {
      if (
        document
          .querySelector(
            ".side_bar_links_block.active .side_bar_sublink_wrapper.active"
          )
          .nextElementSibling.classList.contains("available")
      ) {
        document
          .querySelector(
            ".side_bar_links_block.active .side_bar_sublink_wrapper.active"
          )
          .nextElementSibling.click();
      }
    }
  });
});

var side_links = document.querySelectorAll(".side_bar_links_block");
side_links.forEach((side_link) => {
  side_link.addEventListener("click", () => {
    side_links.forEach((element) => {
      element.classList.remove("active");
    });
    side_link.classList.add("active");
    var link = side_link.querySelector(".side_bar_link");
    var linkId = link.getAttribute("id");
    var alls = document.querySelectorAll(".middle_content");
    alls.forEach((element) => {
      element.style.display = "none";
    });
    var currentSublinkWrappers = side_link.querySelectorAll(
      ".side_bar_sublinks_block .side_bar_sublink_wrapper"
    );
    const hasActiveSublink = Array.from(currentSublinkWrappers).some(
      (wrapper) => wrapper.classList.contains("active")
    );
    if (!hasActiveSublink) {
      var sublinkWrapperAvailables = side_link.querySelectorAll(
        ".side_bar_sublinks_block .side_bar_sublink_wrapper.available"
      );
      var lastSublinkWrapper;
      if (sublinkWrapperAvailables.length === 1) {
        lastSublinkWrapper = sublinkWrapperAvailables[0];
      } else {
        lastSublinkWrapper =
          sublinkWrapperAvailables[sublinkWrapperAvailables.length - 1];
      }
      lastSublinkWrapper.click();
    }
    document.querySelector(
      '.middle_content[lesson="' + linkId + '"]'
    ).style.display = "flex";
  });
});
