var customPass = 14;
var currentUrl = window.location.href;

// document
//   .querySelector('.custom_log_wrapper[href="/progress"]')
//   .classList.add("blocked");

if (
  currentUrl === "https://platform.uni380.com/" ||
  currentUrl === "https://platform.uni380.com/index.html" ||
  currentUrl.includes("user-account")
) {
  getUserInfo(customPass);
}

if (
  currentUrl.includes("-lesson") ||
  currentUrl.includes("video-lectures") ||
  currentUrl.includes("theory") ||
  currentUrl.includes("progress")
) {
  sideBarAvailable(customPass);
}

if (currentUrl.includes("-lesson")) {
  // [0] First Lesson Collection – 6517f3b8afa18ec4281d27f0
  // [1] Second Lesson Collection – 6517f3b8afa18ec4281d2807
  // [2] Third Lesson Collection – 6517f3b8afa18ec4281d2823
  // [3] Fourth Lesson Collection – 6517f3b8afa18ec4281d283c
  // [4] Fiveth Lesson Collection – 6517f3b8afa18ec4281d2852
  // [5] Sixth Lesson Collection – 6522b0ddc5a8a5ff923de4e8
  // [6] Seventh Lesson Collection – 652ac15c622571ba14ac33f5
  // [7] Eighth Lesson Collection – 65326a3ca55b6cc596333e33
  // [8] Ninth Lesson Collection – 653baae8a73b64de22ff788b
  // [9] Tenth Lesson Collection – 6546a14212815d6340defd76
  // [10] Eleventh Lesson Collection – 6556071b08de84914fd787a2
  // [11] Twelfth Lesson Collection – 655b23d09365d880eb114243
  // [12] Thirteenth Lesson Collection – 656c7c06998532066a3e134d
  // [13] Fourteenth Lesson Collection – 6589fffff1b468de2af19b66

  var firstButton = document.getElementById("first_button");
  firstButton.addEventListener("click", () => {
    var lessoncontinue;
    if (currentUrl.includes("first-lesson")) {
      lessoncontinue = "1-start";
    } else if (currentUrl.includes("second-lesson")) {
      lessoncontinue = "2-start";
    } else if (currentUrl.includes("third-lesson")) {
      lessoncontinue = "3-start";
    } else if (currentUrl.includes("fourth-lesson")) {
      lessoncontinue = "4-start";
    } else if (currentUrl.includes("fiveth-lesson")) {
      lessoncontinue = "5-start";
    } else if (currentUrl.includes("sixth-lesson")) {
      lessoncontinue = "6-start";
    } else if (currentUrl.includes("seventh-lesson")) {
      lessoncontinue = "7-start";
    } else if (currentUrl.includes("eighth-lesson")) {
      lessoncontinue = "8-start";
    } else if (currentUrl.includes("ninth-lesson")) {
      lessoncontinue = "9-start";
    } else if (currentUrl.includes("tenth-lesson")) {
      lessoncontinue = "10-start";
    } else if (currentUrl.includes("eleventh-lesson")) {
      lessoncontinue = "11-start";
    } else if (currentUrl.includes("twelfth-lesson")) {
      lessoncontinue = "12-start";
    } else if (currentUrl.includes("thirteenth-lesson")) {
      lessoncontinue = "13-start";
    } else if (currentUrl.includes("fourteenth-lesson")) {
      lessoncontinue = "14-start";
    }
    var data = {
      user_email: user_email,
      lessoncontinue: lessoncontinue,
    };
    // fetch("https://uni-platform-6db9f53f05ed.herokuapp.com/user", {
    fetch("https://uni380-ua.onrender.com/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    // .then((response) => response.json())
    // .then((patch) => {
    //   console.log(patch);
    // })
    // .catch((error) => {
    //   console.error(error);
    // });
  });

  var lastButton = document.getElementById("next_available_lesson");
  lastButton.addEventListener("click", () => {
    var lessoncontinue;
    var newPass;
    if (currentUrl.includes("first-lesson")) {
      lessoncontinue = "1-end";
      newPass = 2;
    } else if (currentUrl.includes("second-lesson")) {
      lessoncontinue = "2-end";
      newPass = 3;
    } else if (currentUrl.includes("third-lesson")) {
      lessoncontinue = "3-end";
      newPass = 4;
    } else if (currentUrl.includes("fourth-lesson")) {
      lessoncontinue = "4-end";
      newPass = 5;
    } else if (currentUrl.includes("fiveth-lesson")) {
      lessoncontinue = "5-end";
      newPass = 6;
    } else if (currentUrl.includes("sixth-lesson")) {
      lessoncontinue = "6-end";
      newPass = 7;
    } else if (currentUrl.includes("seventh-lesson")) {
      lessoncontinue = "7-end";
      newPass = 8;
    } else if (currentUrl.includes("eighth-lesson")) {
      lessoncontinue = "8-end";
      newPass = 9;
    } else if (currentUrl.includes("ninth-lesson")) {
      lessoncontinue = "9-end";
      newPass = 10;
    } else if (currentUrl.includes("tenth-lesson")) {
      lessoncontinue = "10-end";
      newPass = 11;
    } else if (currentUrl.includes("eleventh-lesson")) {
      lessoncontinue = "11-end";
      newPass = 12;
    } else if (currentUrl.includes("twelfth-lesson")) {
      lessoncontinue = "12-end";
      newPass = 13;
    } else if (currentUrl.includes("thirteenth-lesson")) {
      lessoncontinue = "13-end";
      newPass = 14;
    } else if (currentUrl.includes("fourteenth-lesson")) {
      lessoncontinue = "14-end";
      newPass = 14;
    }
    var data = {
      user_email: user_email,
      lessoncontinue: lessoncontinue,
      lessonspass: newPass,
    };
    // console.log(data);
    // fetch("https://uni-platform-6db9f53f05ed.herokuapp.com/user", {
    fetch("https://uni380-ua.onrender.com/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    // .then((response) => response.json())
    // .then((patch) => {
    //   console.log(patch);
    // })
    // .catch((error) => {
    //   console.error(error);
    // });
  });
}

if (window.innerWidth < 991) {
  var body = document.querySelector(".body");
  var menu_open = document.querySelector(".menu_open");
  var menu_wrapper = document.querySelector(".side_bar");
  var page_substrate_close = document.querySelector(".page_substrate_close");
  var menu_close = document.querySelectorAll(
    ".page_substrate_close, .menu_wrapper .menu_link, .menu_close, .side_bar_sublink_wrapper"
  );

  menu_open.addEventListener("click", () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    body.style.overflow = "hidden";
    page_substrate_close.classList.add("active");
    menu_wrapper.classList.add("active");
  });
  menu_close.forEach((element) => {
    element.addEventListener("click", () => {
      body.style.overflow = "auto";
      page_substrate_close.classList.remove("active");
      menu_wrapper.classList.remove("active");
    });
  });
}

var linkSets = {
  "video-lectures": "Відео",
  "user-account": "Профіль",
  theory: "Теорія",
  progress: "Прогрес",
};

var buttonMainNavigation = document.querySelectorAll(".custom_side_buttons");
for (var key in linkSets) {
  if (currentUrl.includes(key)) {
    var targetText = linkSets[key];
    buttonMainNavigation.forEach(function (button) {
      if (button.textContent.includes(targetText)) {
        button.classList.add("active");
      }
    });
    break;
  }
}

document.addEventListener("scroll", () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

// if (!currentUrl.includes("progress")) {
async function getLessonInfo(collection_id) {
  var data = {
    collection_id: collection_id,
    user_email: user_email,
  };

  try {
    const response = await fetch(
      //"https://uni-platform-6db9f53f05ed.herokuapp.com/get-lesson-info",
      "https://uni380-ua.onrender.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const lessonData = await response.json();
    return lessonData;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

function getSideProgress(lessonspass, customChapterCount) {
  (async () => {
    try {
      var LessonChapters;
      if (+lessonspass === 1) {
        // console.log(lessonspass);
        var firstLessonInfo = await getLessonInfo("6517f3b8afa18ec4281d27f0");
        var introBDVal = firstLessonInfo.fieldData.intro;
        var tab1BDVal = firstLessonInfo.fieldData.tab1;
        var tab2BDVal = firstLessonInfo.fieldData.tab2;
        // console.log(customChapterCount);
        if (customChapterCount !== "" && customChapterCount !== undefined) {
          LessonChapters = customChapterCount;
        } else {
          if (tab2BDVal !== "" && tab2BDVal !== undefined) {
            var tab2BDParts = tab2BDVal.split("|/|");
            var tab2Progress = tab2BDParts[0];
            if (+tab2Progress < 20) {
              LessonChapters = 2;
            } else {
              LessonChapters = 3;
            }
            // console.log(tab2BDVal);
          } else if (tab1BDVal !== "" && tab1BDVal !== undefined) {
            var tab1BDParts = tab1BDVal.split("|/|");
            var tab1Progress = tab1BDParts[0];
            if (+tab1Progress < 40) {
              LessonChapters = 1;
            } else {
              LessonChapters = 2;
            }
            // console.log(tab1BDVal);
          } else if (introBDVal !== "" && introBDVal !== undefined) {
            var introBDParts = introBDVal.split("|/|");
            var introProgress = introBDParts[0];
            if (+introProgress < 5) {
              LessonChapters = 0;
            } else {
              LessonChapters = 1;
            }
            // console.log(introBDVal);
          } else {
            LessonChapters = 0;
          }
        }
      } else if (+lessonspass === 2) {
        // console.log(lessonspass);
        var secondLessonInfo = await getLessonInfo("6517f3b8afa18ec4281d2807");
        var tab1BDVal2 = secondLessonInfo.fieldData.tab1;
        var tab2BDVal2 = secondLessonInfo.fieldData.tab2;
        // console.log(customChapterCount);

        if (customChapterCount !== "" && customChapterCount !== undefined) {
          LessonChapters = customChapterCount;
        } else {
          if (tab2BDVal2 !== "" && tab2BDVal2 !== undefined) {
            var tab2BDParts2 = tab2BDVal2.split("|/|");
            var tab2Progress2 = tab2BDParts2[0];
            if (+tab2Progress2 < 15) {
              LessonChapters = 4;
            } else {
              LessonChapters = 5;
            }
            // console.log(tab2BDVal);
          } else if (tab1BDVal2 !== "" && tab1BDVal2 !== undefined) {
            var tab1BDParts2 = tab1BDVal2.split("|/|");
            var tab1Progress2 = tab1BDParts2[0];
            if (+tab1Progress2 < 33) {
              LessonChapters = 3;
            } else {
              LessonChapters = 4;
            }
            // console.log(tab1BDVal);
          } else {
            LessonChapters = 3;
          }
        }
      } else if (+lessonspass === 3) {
        var thirdLessonInfo = await getLessonInfo("6517f3b8afa18ec4281d2823");
        var tab1BDVal3 = thirdLessonInfo.fieldData.tab1;
        var tab2BDVal3 = thirdLessonInfo.fieldData.tab2;
        var tab3BDVal3 = thirdLessonInfo.fieldData.tab3;
        console.log(customChapterCount);
        if (customChapterCount !== "" && customChapterCount !== undefined) {
          LessonChapters = customChapterCount;
        } else {
          if (tab3BDVal3 !== "" && tab3BDVal3 !== undefined) {
            var tab3BDParts3 = tab3BDVal3.split("|/|");
            var tab3Progress3 = tab3BDParts3[0];
            if (+tab3Progress3 < 10) {
              LessonChapters = 7;
            } else {
              LessonChapters = 8;
            }
          } else if (tab2BDVal3 !== "" && tab2BDVal3 !== undefined) {
            var tab2BDParts3 = tab2BDVal3.split("|/|");
            var tab2Progress3 = tab2BDParts3[0];
            if (+tab2Progress3 < 14) {
              LessonChapters = 6;
            } else {
              LessonChapters = 7;
            }
          } else if (tab1BDVal3 !== "" && tab1BDVal3 !== undefined) {
            var tab1BDParts3 = tab1BDVal3.split("|/|");
            var tab1Progress3 = tab1BDParts3[0];
            if (+tab1Progress3 < 21) {
              LessonChapters = 5;
            } else {
              LessonChapters = 6;
            }
          } else {
            LessonChapters = 5;
          }
        }
      } else if (+lessonspass === 4) {
        // console.log(lessonspass);
        var fourthLessonInfo = await getLessonInfo("6517f3b8afa18ec4281d283c");
        var tab1BDVal4 = fourthLessonInfo.fieldData.tab1;
        var tab2BDVal4 = fourthLessonInfo.fieldData.tab2;
        var tab3BDVal4 = fourthLessonInfo.fieldData.tab3;
        // console.log(customChapterCount);
        if (customChapterCount !== "" && customChapterCount !== undefined) {
          LessonChapters = customChapterCount;
        } else {
          if (tab3BDVal4 !== "" && tab3BDVal4 !== undefined) {
            var tab3BDParts4 = tab3BDVal4.split("|/|");
            var tab3Progress4 = tab3BDParts4[0];
            if (+tab3Progress4 < 7) {
              LessonChapters = 10;
            } else {
              LessonChapters = 11;
            }
          } else if (tab2BDVal4 !== "" && tab2BDVal4 !== undefined) {
            var tab2BDParts4 = tab2BDVal4.split("|/|");
            var tab2Progress4 = tab2BDParts4[0];
            if (+tab2Progress4 < 53) {
              LessonChapters = 9;
            } else {
              LessonChapters = 10;
            }
          } else if (tab1BDVal4 !== "" && tab1BDVal4 !== undefined) {
            var tab1BDParts4 = tab1BDVal4.split("|/|");
            var tab1Progress4 = tab1BDParts4[0];
            if (+tab1Progress4 < 7) {
              LessonChapters = 8;
            } else {
              LessonChapters = 9;
            }
          } else {
            LessonChapters = 8;
          }
        }
      } else if (+lessonspass === 5) {
        // console.log(lessonspass);
        var fivethLessonInfo = await getLessonInfo("6517f3b8afa18ec4281d2852");
        var tab1BDVal5 = fivethLessonInfo.fieldData.tab1;
        var tab2BDVal5 = fivethLessonInfo.fieldData.tab2;
        // console.log(customChapterCount);
        if (customChapterCount !== "" && customChapterCount !== undefined) {
          LessonChapters = customChapterCount;
        } else if (tab2BDVal5 !== "" && tab2BDVal5 !== undefined) {
          var tab2BDParts5 = tab2BDVal5.split("|/|");
          var tab2Progress5 = tab2BDParts5[0];
          if (+tab2Progress5 < 28) {
            LessonChapters = 12;
          } else {
            LessonChapters = 13;
          }
        } else if (tab1BDVal5 !== "" && tab1BDVal5 !== undefined) {
          var tab1BDParts5 = tab1BDVal5.split("|/|");
          var tab1Progress5 = tab1BDParts5[0];
          if (+tab1Progress5 < 22) {
            LessonChapters = 11;
          } else {
            LessonChapters = 12;
          }
        } else {
          LessonChapters = 11;
        }
      } else if (+lessonspass === 6) {
        // console.log(lessonspass);
        var sixthLessonInfo = await getLessonInfo("6522b0ddc5a8a5ff923de4e8");
        var tab1BDVal6 = sixthLessonInfo.fieldData.tab1;
        var tab2BDVal6 = sixthLessonInfo.fieldData.tab2;
        // console.log(customChapterCount);
        if (customChapterCount !== "" && customChapterCount !== undefined) {
          LessonChapters = customChapterCount;
        } else if (tab2BDVal6 !== "" && tab2BDVal6 !== undefined) {
          var tab2BDParts6 = tab2BDVal6.split("|/|");
          var tab2Progress6 = tab2BDParts6[0];
          if (+tab2Progress6 < 8) {
            LessonChapters = 14;
          } else {
            LessonChapters = 15;
          }
        } else if (tab1BDVal6 !== "" && tab1BDVal6 !== undefined) {
          var tab1BDParts6 = tab1BDVal6.split("|/|");
          var tab1Progress6 = tab1BDParts6[0];
          if (+tab1Progress6 < 30) {
            LessonChapters = 13;
          } else {
            LessonChapters = 14;
          }
        } else {
          LessonChapters = 13;
        }
      } else if (+lessonspass === 7) {
        var seventhLessonInfo = await getLessonInfo("652ac15c622571ba14ac33f5");
        var tab1BDVal7 = seventhLessonInfo.fieldData.tab1;
        if (customChapterCount !== "" && customChapterCount !== undefined) {
          LessonChapters = customChapterCount;
        } else if (tab1BDVal7 !== "" && tab1BDVal7 !== undefined) {
          var tab1BDParts7 = tab1BDVal7.split("|/|");
          var tab1Progress7 = tab1BDParts7[0];
          if (+tab1Progress7 < 54) {
            LessonChapters = 15;
          } else {
            LessonChapters = 16;
          }
        } else {
          LessonChapters = 15;
        }
      } else if (+lessonspass === 8) {
        // console.log(lessonspass);
        var eighthLessonInfo = await getLessonInfo("65326a3ca55b6cc596333e33");
        var tab1BDVal8 = eighthLessonInfo.fieldData.tab1;
        var tab2BDVal8 = eighthLessonInfo.fieldData.tab2;
        var tab3BDVal8 = eighthLessonInfo.fieldData.tab3;
        var tab4BDVal8 = eighthLessonInfo.fieldData.tab4;
        // console.log(customChapterCount);
        if (customChapterCount !== "" && customChapterCount !== undefined) {
          LessonChapters = customChapterCount;
        } else {
          if (tab4BDVal8 !== "" && tab4BDVal8 !== undefined) {
            var tab4BDParts8 = tab4BDVal8.split("|/|");
            var tab4Progress8 = tab4BDParts8[0];
            if (+tab4Progress8 < 9) {
              LessonChapters = 19;
            } else {
              LessonChapters = 20;
            }
          } else if (tab3BDVal8 !== "" && tab3BDVal8 !== undefined) {
            var tab3BDParts8 = tab3BDVal8.split("|/|");
            var tab3Progress8 = tab3BDParts8[0];
            if (+tab3Progress8 < 26) {
              LessonChapters = 18;
            } else {
              LessonChapters = 19;
            }
          } else if (tab2BDVal8 !== "" && tab2BDVal8 !== undefined) {
            var tab2BDParts8 = tab2BDVal8.split("|/|");
            var tab2Progress8 = tab2BDParts8[0];
            if (+tab2Progress8 < 21) {
              LessonChapters = 17;
            } else {
              LessonChapters = 18;
            }
          } else if (tab1BDVal8 !== "" && tab1BDVal8 !== undefined) {
            var tab1BDParts8 = tab1BDVal8.split("|/|");
            var tab1Progress8 = tab1BDParts8[0];
            if (+tab1Progress8 < 18) {
              LessonChapters = 16;
            } else {
              LessonChapters = 17;
            }
          } else {
            LessonChapters = 16;
          }
        }
      } else if (+lessonspass === 9) {
        var ninthLessonInfo = await getLessonInfo("653baae8a73b64de22ff788b");
        var tab1BDVal9 = ninthLessonInfo.fieldData.tab1;
        var tab2BDVal9 = ninthLessonInfo.fieldData.tab2;
        if (customChapterCount !== "" && customChapterCount !== undefined) {
          LessonChapters = customChapterCount;
        } else {
          if (tab2BDVal9 !== "" && tab2BDVal9 !== undefined) {
            var tab2BDParts9 = tab2BDVal9.split("|/|");
            var tab2Progress9 = tab2BDParts9[0];
            if (+tab2Progress9 < 30) {
              LessonChapters = 21;
            } else {
              LessonChapters = 22;
            }
          } else if (tab1BDVal9 !== "" && tab1BDVal9 !== undefined) {
            var tab1BDParts9 = tab1BDVal9.split("|/|");
            var tab1Progress9 = tab1BDParts9[0];
            if (+tab1Progress9 < 30) {
              LessonChapters = 20;
            } else {
              LessonChapters = 21;
            }
          } else {
            LessonChapters = 20;
          }
        }
      } else if (+lessonspass === 10) {
        var tenthLessonInfo = await getLessonInfo("6546a14212815d6340defd76");
        var tab1BDVal10 = tenthLessonInfo.fieldData.tab1;
        if (customChapterCount !== "" && customChapterCount !== undefined) {
          LessonChapters = customChapterCount;
        } else if (tab1BDVal10 !== "" && tab1BDVal10 !== undefined) {
          var tab1BDParts10 = tab1BDVal10.split("|/|");
          var tab1BDParts10 = tab1BDParts10[0];
          if (+tab1BDParts10 < 47) {
            LessonChapters = 22;
          } else {
            LessonChapters = 23;
          }
        } else {
          LessonChapters = 22;
        }
      } else if (+lessonspass === 11) {
        var eleventhLessonInfo = await getLessonInfo(
          "6556071b08de84914fd787a2"
        );
        var tab1BDVal11 = eleventhLessonInfo.fieldData.tab1;
        var tab2BDVal11 = eleventhLessonInfo.fieldData.tab2;
        if (customChapterCount !== "" && customChapterCount !== undefined) {
          LessonChapters = customChapterCount;
        } else {
          if (tab2BDVal11 !== "" && tab2BDVal11 !== undefined) {
            var tab2BDParts11 = tab2BDVal11.split("|/|");
            var tab2Progress11 = tab2BDParts11[0];
            if (+tab2Progress11 < 30) {
              LessonChapters = 24;
            } else {
              LessonChapters = 25;
            }
          } else if (tab1BDVal11 !== "" && tab1BDVal11 !== undefined) {
            var tab1BDParts11 = tab1BDVal11.split("|/|");
            var tab1Progress11 = tab1BDParts11[0];
            if (+tab1Progress11 < 37) {
              LessonChapters = 23;
            } else {
              LessonChapters = 24;
            }
          } else {
            LessonChapters = 23;
          }
        }
      } else if (+lessonspass === 12) {
        var twelfthLessonInfo = await getLessonInfo("655b23d09365d880eb114243");
        var tab1BDVal12 = twelfthLessonInfo.fieldData.tab1;
        var tab2BDVal12 = twelfthLessonInfo.fieldData.tab2;
        var tab3BDVal12 = twelfthLessonInfo.fieldData.tab3;
        if (customChapterCount !== "" && customChapterCount !== undefined) {
          LessonChapters = customChapterCount;
        } else {
          if (tab3BDVal12 !== "" && tab3BDVal12 !== undefined) {
            var tab3BDParts12 = tab3BDVal12.split("|/|");
            var tab3Progress12 = tab3BDParts12[0];
            if (+tab3Progress12 < 16) {
              LessonChapters = 27;
            } else {
              LessonChapters = 28;
            }
          } else if (tab2BDVal12 !== "" && tab2BDVal12 !== undefined) {
            var tab2BDParts12 = tab2BDVal12.split("|/|");
            var tab2Progress12 = tab2BDParts12[0];
            if (+tab2Progress12 < 13) {
              LessonChapters = 26;
            } else {
              LessonChapters = 27;
            }
          } else if (tab1BDVal12 !== "" && tab1BDVal12 !== undefined) {
            var tab1BDParts12 = tab1BDVal12.split("|/|");
            var tab1Progress12 = tab1BDParts12[0];
            if (+tab1Progress12 < 44) {
              LessonChapters = 25;
            } else {
              LessonChapters = 26;
            }
          } else {
            LessonChapters = 25;
          }
        }
      } else if (+lessonspass === 13) {
        var thirteenthInfo = await getLessonInfo("656c7c06998532066a3e134d");
        console.log(thirteenthInfo);
        var tab1BDVal13 = thirteenthInfo.fieldData.tab1;
        var tab2BDVal13 = thirteenthInfo.fieldData.tab2;
        if (customChapterCount !== "" && customChapterCount !== undefined) {
          LessonChapters = customChapterCount;
        } else {
          if (tab2BDVal13 !== "" && tab2BDVal13 !== undefined) {
            var tab2BDParts13 = tab2BDVal13.split("|/|");
            var tab2Progress13 = tab2BDParts13[0];
            if (+tab2Progress13 < 26) {
              LessonChapters = 29;
            } else {
              LessonChapters = 30;
            }
          } else if (tab1BDVal13 !== "" && tab1BDVal13 !== undefined) {
            var tab1BDParts13 = tab1BDVal13.split("|/|");
            var tab1Progress13 = tab1BDParts13[0];
            if (+tab1Progress13 < 43) {
              LessonChapters = 28;
            } else {
              LessonChapters = 29;
            }
          } else {
            LessonChapters = 28;
          }
        }
      } else if (+lessonspass === 14) {
        var fourteenthInfo = await getLessonInfo("6589fffff1b468de2af19b66");
        console.log(fourteenthInfo);
        var tab1BDVal14 = fourteenthInfo.fieldData.tab1;
        var tab2BDVal14 = fourteenthInfo.fieldData.tab2;
        if (customChapterCount !== "" && customChapterCount !== undefined) {
          LessonChapters = customChapterCount;
        } else {
          if (tab2BDVal14 !== "" && tab2BDVal14 !== undefined) {
            var tab2BDParts14 = tab2BDVal14.split("|/|");
            var tab2Progress14 = tab2BDParts14[0];
            if (+tab2Progress14 < 44) {
              LessonChapters = 31;
            } else {
              LessonChapters = 32;
            }
          } else if (tab1BDVal14 !== "" && tab1BDVal14 !== undefined) {
            var tab1BDParts14 = tab1BDVal14.split("|/|");
            var tab1Progress14 = tab1BDParts14[0];
            if (+tab1Progress14 < 48) {
              LessonChapters = 30;
            } else {
              LessonChapters = 31;
            }
          } else {
            LessonChapters = 30;
          }
        }
      }
      

      var userProgress = +LessonChapters;
      var lessonTarget = 32;
      var percentProgress = (100 / lessonTarget) * userProgress;
      percentProgress = Math.round(percentProgress);

      document.querySelector(".progress_span").innerHTML =
        percentProgress + "%";
    } catch (error) {
      console.error(error);
    }
  })();
}
