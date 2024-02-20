var user_email = localStorage.getItem("webflowLog");
var url = window.location.href;

var links = document.querySelectorAll(".side_bar_link");
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

function sideBarAvailable(customPass) {
  var data = {
    user_email: user_email,
  };
  // console.log(data);
  fetch("https://uni380-ua-f2a8d215b9ab.herokuapp.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.data.sex === "" || data.data.sex === undefined) {
        window.location.href = "/";
      } else {
        var lessonItems = document.querySelectorAll(".side_bar_links_block");
        var lessonspass;
        lessonspass = data.data.lessonspass;
        if (lessonspass > customPass) {
          lessonspass = customPass;
        }
        // console.log(lessonspass);

        if (
          user_email === "oczymaagency@gmail.com" ||
          user_email === "psy.trn@gmail.com" ||
          user_email === "siaprokopa@gmail.com" ||
          user_email === "dimazelenskiy6@gmail.com"
        ) {
          lessonspass = 14;
        }
        // console.log(lessonspass);
        getSideProgress(lessonspass);

        lessonItems.forEach((item, index) => {
          if (index < lessonspass) {
            item.classList.add("available");
            if (index === lessonspass - 1) {
              item.classList.add("active");
              var link = item.querySelector(".side_bar_link");
              var linkId = link.getAttribute("id");
              document
                .querySelector('.side_bar_link[id="' + linkId + '"]')
                .parentElement.click();
              document.querySelector(
                '.middle_content[lesson="' + linkId + '"]'
              ).style.display = "flex";
            }
          } else {
            item.classList.remove("available");
          }
        });
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

if (url.includes("progress")) {
  async function getLessonInfo(collection_id) {
    var data = {
      collection_id: collection_id,
      user_email: user_email,
    };

    try {
      const response = await fetch(
        "https://uni380-ua-f2a8d215b9ab.herokuapp.com/get-lesson-info",
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

  function fourteenthLesson(linkId) {
    (async () => {
      try {
        var firstLessonInfo = await getLessonInfo("6589fffff1b468de2af19b66");

        var tab1BDVal = firstLessonInfo.fieldData.tab1;
        var tab2BDVal = firstLessonInfo.fieldData.tab2;

        function tuskDonePoint(point) {
          if (point === "" || point === undefined || point === "empty") {
            point = 0;
          } else {
            point = 1;
          }
          return point;
        }

        function pointsCounter(data, valuesToCheck) {
          if (data !== "" && data !== undefined) {
            var counter = 0;
            valuesToCheck.forEach(function (value) {
              if (data.includes(value)) {
                counter++;
              }
            });
          } else {
            counter = 0;
          }
          return counter;
        }

        function dragDonePoint(value) {
          let userVariable = value;
          let correctVariable = "one,two,three,four,five";
          let userArray = userVariable.split(",");
          let correctArray = correctVariable.split(",");
          let score = 0;
          for (let i = 0; i < userArray.length; i++) {
            if (userArray[i] === correctArray[i]) {
              score++;
            }
          }
          return score;
        }

        if (tab1BDVal !== "" && tab1BDVal !== undefined) {
          var tab1BDParts = tab1BDVal.split("|/|");

          var china_knowAnswer = tab1BDParts[1];
          var china_knowPoint = china_knowAnswer;
          china_knowPoint = tuskDonePoint(china_knowPoint);
          var task1_1 = ["one", "two", "three", "four", "five"];
          var answearTask1_1 = pointsCounter(china_knowAnswer, task1_1);

          var team_endAnswer = tab1BDParts[2];
          var team_endPoint = team_endAnswer;
          team_endPoint = tuskDonePoint(team_endPoint);
          var task1_2;
          if (team_endAnswer === "four") {
            task1_2 = ["four"];
          } else if (team_endAnswer === "two") {
            task1_2 = ["two"];
          } else {
            task1_2 = ["four"];
          }
          var answearTask1_2 = pointsCounter(team_endAnswer, task1_2);

          var local_conAnswer = tab1BDParts[3];
          var local_conPoint = local_conAnswer;
          local_conPoint = tuskDonePoint(local_conPoint);
          var task1_3 = ["two"];
          var answearTask1_3 = pointsCounter(local_conAnswer, task1_3);

          var china_thinkAnswer = tab1BDParts[4];
          var china_thinkPoint = china_thinkAnswer;
          china_thinkPoint = tuskDonePoint(china_thinkPoint);

          var cheap_varAnswer = tab1BDParts[5];
          var cheap_varPoint = cheap_varAnswer;
          cheap_varPoint = tuskDonePoint(cheap_varPoint);
          var task1_5 = ["three", "four"];
          var answearTask1_5 = pointsCounter(cheap_varAnswer, task1_5);

          var domenAnswer = tab1BDParts[6];
          var domenPoint = domenAnswer;
          domenPoint = tuskDonePoint(domenPoint);
          var task1_6;
          if (domenAnswer === "two") {
            task1_6 = ["two"];
          } else if (domenAnswer === "three") {
            task1_6 = ["three"];
          } else {
            task1_6 = ["two"];
          }
          var answearTask1_6 = pointsCounter(domenAnswer, task1_6);

          var socAnswer = tab1BDParts[7];
          var socPoint = socAnswer;
          socPoint = tuskDonePoint(socPoint);
          var task1_7 = ["one", "two", "three", "four", "five"];
          var answearTask1_7 = pointsCounter(socAnswer, task1_7);

          var min_testAnswer = tab1BDParts[8];
          var min_testPoint = min_testAnswer;
          min_testPoint = tuskDonePoint(min_testPoint);
          var task1_8 = ["one", "two", "five"];
          var answearTask1_8 = pointsCounter(min_testAnswer, task1_8);

          var blogersAnswer = tab1BDParts[9];
          var blogersPoint = blogersAnswer;
          blogersPoint = tuskDonePoint(blogersPoint);

          var successAnswer = tab1BDParts[10];
          var successPoint = successAnswer;
          successPoint = tuskDonePoint(successPoint);
          var task1_10 = ["three"];
          var answearTask1_10 = pointsCounter(successAnswer, task1_10);

          var reg_calcAnswer = tab1BDParts[11];
          var reg_calcPoint = reg_calcAnswer;
          reg_calcPoint = tuskDonePoint(reg_calcPoint);
          if (reg_calcAnswer !== "" || reg_calcAnswer !== undefined) {
            var answearTask1_11;
            if (reg_calcAnswer === "4.3") {
              answearTask1_11 = 1;
            } else {
              answearTask1_11 = 0;
            }
          } else {
            answearTask1_11 = 0;
          }

          var first_pay_calcAnswer = tab1BDParts[12];
          var first_pay_calcPoint = first_pay_calcAnswer;
          first_pay_calcPoint = tuskDonePoint(first_pay_calcPoint);
          if (first_pay_calcAnswer !== "" || first_pay_calcAnswer !== undefined) {
            var answearTask1_12;
            if (first_pay_calcAnswer === "19.96" || first_pay_calcAnswer === "20") {
              answearTask1_12 = 1;
            } else {
              answearTask1_12 = 0;
            }
          } else {
            answearTask1_12 = 0;
          }

          var retention_calcAnswer = tab1BDParts[13];
          var retention_calcPoint = retention_calcAnswer;
          retention_calcPoint = tuskDonePoint(retention_calcPoint);
          if (retention_calcAnswer !== "" || retention_calcAnswer !== undefined) {
            var answearTask1_13;
            if (retention_calcAnswer === "78.78" || retention_calcAnswer === "78.8" || retention_calcAnswer === "79") {
              answearTask1_13 = 1;
            } else {
              answearTask1_13 = 0;
            }
          } else {
            answearTask1_13 = 0;
          }

          var mashtabAnswer = tab1BDParts[14];
          var mashtabPoint = mashtabAnswer;
          mashtabPoint = tuskDonePoint(mashtabPoint);
          var task1_14 = ["one"];
          var answearTask1_14 = pointsCounter(mashtabAnswer, task1_14);

          var fail_doAnswer = tab1BDParts[15];
          var fail_doPoint = fail_doAnswer;
          fail_doPoint = tuskDonePoint(fail_doPoint);
          var task1_15 = ["three"];
          var answearTask1_15 = pointsCounter(fail_doAnswer, task1_15);

        } else {
            answearTask1_1 = 0;
            answearTask1_2 = 0;
            answearTask1_3 = 0;
            answearTask1_5 = 0;
            answearTask1_6 = 0;
            answearTask1_7 = 0;
            answearTask1_8 = 0;
            answearTask1_10 = 0;
            answearTask1_11 = 0;
            answearTask1_12 = 0;
            answearTask1_13 = 0;
            answearTask1_14 = 0;
            answearTask1_15 = 0;

            china_knowPoint = 0;
            team_endPoint = 0;
            local_conPoint = 0;
            china_thinkPoint = 0;
            cheap_varPoint = 0;
            domenPoint = 0;
            socPoint = 0;
            min_testPoint = 0;
            blogersPoint = 0;
            successPoint = 0;
            reg_calcPoint = 0;
            first_pay_calcPoint = 0;
            retention_calcPoint = 0;
            mashtabPoint = 0;
            fail_doPoint = 0;
        }

        if (tab2BDVal !== "" && tab2BDVal !== undefined) {
          var tab2BDParts = tab2BDVal.split("|/|");

          var force_majeureAnswer = tab2BDParts[1];
          var force_majeurePoint = force_majeureAnswer;
          force_majeurePoint = tuskDonePoint(force_majeurePoint);
          var task2_1 = ["four"];
          var answearTask2_1 = pointsCounter(force_majeureAnswer, task2_1);

          var visaAnswer = tab2BDParts[2];
          var visaPoint = visaAnswer;
          visaPoint = tuskDonePoint(visaPoint);
          var task2_2 = ["one"];
          var answearTask2_2 = pointsCounter(visaAnswer, task2_2);

          var visa_txtAnswer = tab2BDParts[3];
          var visa_txtPoint = visa_txtAnswer;
          visa_txtPoint = tuskDonePoint(visa_txtPoint);

          var office_txtAnswer = tab2BDParts[4];
          var office_txtPoint = office_txtAnswer;
          office_txtPoint = tuskDonePoint(office_txtPoint);

          var siaAnswer = tab2BDParts[5];
          var siaPoint = siaAnswer;
          siaPoint = tuskDonePoint(siaPoint);
          var task2_5 = ["two"];
          var answearTask2_5 = pointsCounter(siaAnswer, task2_5);

          var factors_prioritiesAnswer = tab1BDParts[6];
          var factors_prioritiesPoint = factors_prioritiesAnswer;
          factors_prioritiesPoint = tuskDonePoint(factors_prioritiesPoint);
          var answearTask1_6 = dragDonePoint(factors_prioritiesAnswer);

          var investigation_txtAnswer = tab2BDParts[7];
          var investigation_txtPoint = investigation_txtAnswer;
          investigation_txtPoint = tuskDonePoint(investigation_txtPoint);

          var contractAnswer = tab2BDParts[8];
          var contractPoint = contractAnswer;
          contractPoint = tuskDonePoint(contractPoint);
          var task2_8 = ["two", "three", "four"];
          var answearTask2_8 = pointsCounter(contractAnswer, task2_8);

          var sia_sayAnswer = tab2BDParts[9];
          var sia_sayPoint = sia_sayAnswer;
          sia_sayPoint = tuskDonePoint(sia_sayPoint);

          var sia_doAnswer = tab2BDParts[10];
          var sia_doPoint = sia_doAnswer;
          sia_doPoint = tuskDonePoint(sia_doPoint);
          var task2_10 = ["one", "three", "four"];
          var answearTask2_10 = pointsCounter(sia_doAnswer, task2_10);

          var pay_halfAnswer = tab2BDParts[11];
          var pay_halfPoint = pay_halfAnswer;
          pay_halfPoint = tuskDonePoint(pay_halfPoint);
        } else {
            answearTask2_1 = 0;
            answearTask2_2 = 0;
            answearTask2_5 = 0;
            answearTask1_6 = 0;
            answearTask2_8 = 0;
            answearTask2_10 = 0;
            force_majeurePoint = 0;
            visaPoint = 0;
            visa_txtPoint = 0;
            office_txtPoint = 0;
            siaPoint = 0;
            factors_prioritiesPoint = 0;
            investigation_txtPoint = 0;
            contractPoint = 0;
            sia_sayPoint = 0;
            sia_doPoint = 0;
            pay_halfPoint = 0;
        }

        var tasksDone =
            china_knowPoint +
            team_endPoint +
            local_conPoint +
            china_thinkPoint +
            cheap_varPoint +
            domenPoint +
            socPoint +
            min_testPoint +
            blogersPoint +
            successPoint +
            reg_calcPoint +
            first_pay_calcPoint +
            retention_calcPoint +
            mashtabPoint +
            fail_doPoint + 
            force_majeurePoint + 
            visaPoint + 
            visa_txtPoint + 
            office_txtPoint + 
            siaPoint + 
            factors_prioritiesPoint + 
            investigation_txtPoint + 
            contractPoint + 
            sia_sayPoint + 
            sia_doPoint + 
            pay_halfPoint;

        document.querySelector(
          '.middle_content[lesson="' + linkId + '"] .tasks_done'
        ).innerHTML = tasksDone;

        var tasksPoints =
            answearTask1_1 +
            answearTask1_2 +
            answearTask1_3 +
            answearTask1_5 +
            answearTask1_6 +
            answearTask1_7 +
            answearTask1_8 +
            answearTask1_10 +
            answearTask1_11 +
            answearTask1_12 +
            answearTask1_13 +
            answearTask1_14 +
            answearTask1_15 +
            answearTask2_1 +
            answearTask2_2 +
            answearTask2_5 +
            answearTask1_6 +
            answearTask2_8 +
            answearTask2_10;

        document.querySelector(
          '.middle_content[lesson="' + linkId + '"] .right_answears'
        ).innerHTML = tasksPoints;

        var pointsTarget = 38;
        var pointspercentProgress = (100 / pointsTarget) * tasksPoints;
        pointspercentProgress = Math.round(pointspercentProgress);

        document.querySelector(
          '.middle_content[lesson="' + linkId + '"] .percent_aswear'
        ).innerHTML = pointspercentProgress;

        // -----------------
      } catch (error) {
        console.error(error);
      }
    })();
  }

  function thirteenthLesson(linkId) {
    (async () => {
      try {
        var firstLessonInfo = await getLessonInfo("656c7c06998532066a3e134d");

        var tab1BDVal = firstLessonInfo.fieldData.tab1;
        var tab2BDVal = firstLessonInfo.fieldData.tab2;

        function tuskDonePoint(point) {
          if (point === "" || point === undefined || point === "empty") {
            point = 0;
          } else {
            point = 1;
          }
          return point;
        }

        function pointsCounter(data, valuesToCheck) {
          if (data !== "" && data !== undefined) {
            var counter = 0;
            valuesToCheck.forEach(function (value) {
              if (data.includes(value)) {
                counter++;
              }
            });
          } else {
            counter = 0;
          }
          return counter;
        }

        function dragDonePoint(value) {
          let userVariable = value;
          let correctVariable = "one,two,three,four,five,six,seven,eight,nine";
          let userArray = userVariable.split(",");
          let correctArray = correctVariable.split(",");
          let score = 0;
          for (let i = 0; i < userArray.length; i++) {
            if (userArray[i] === correctArray[i]) {
              score++;
            }
          }
          return score;
        }

        if (tab1BDVal !== "" && tab1BDVal !== undefined) {
          var tab1BDParts = tab1BDVal.split("|/|");

          var percentAnswer = tab1BDParts[1];
          var percentPoint = percentAnswer;
          percentPoint = tuskDonePoint(percentPoint);
          var task1_1 = ["four"];
          var answearTask1_1 = pointsCounter(percentAnswer, task1_1);

          var languageAnswer = tab1BDParts[2];
          var languagePoint = languageAnswer;
          languagePoint = tuskDonePoint(languagePoint);
          var task1_2 = ["four"];
          var answearTask1_2 = pointsCounter(languageAnswer, task1_2);

          var answer_cplAnswer = tab1BDParts[3];
          var answer_cplPoint = answer_cplAnswer;
          answer_cplPoint = tuskDonePoint(answer_cplPoint);
          var task1_3 = ["three"];
          var answearTask1_3 = pointsCounter(answer_cplAnswer, task1_3);

          var criterionAnswer = tab1BDParts[4];
          var criterionPoint = criterionAnswer;
          criterionPoint = tuskDonePoint(criterionPoint);
          var task1_4 = ["two"];
          var answearTask1_4 = pointsCounter(criterionAnswer, task1_4);

          var criterion_chooseAnswer = tab1BDParts[5];
          var criterion_choosePoint = criterion_chooseAnswer;
          criterion_choosePoint = tuskDonePoint(criterion_choosePoint);
          var task1_5 = ["one", "four", "six", "seven"];
          var answearTask1_5 = pointsCounter(criterion_chooseAnswer, task1_5);

          var main_criterionAnswer = tab1BDParts[6];
          var main_criterionPoint = main_criterionAnswer;
          main_criterionPoint = tuskDonePoint(main_criterionPoint);
          var task1_6 = ["one"];
          var answearTask1_6 = pointsCounter(main_criterionAnswer, task1_6);

          var factorAnswer = tab1BDParts[7];
          var factorPoint = factorAnswer;
          factorPoint = tuskDonePoint(factorPoint);
          var task1_7 = ["one"];
          var answearTask1_7 = pointsCounter(factorAnswer, task1_7);

          var proposalAnswer = tab1BDParts[8];
          var proposalPoint = proposalAnswer;
          proposalPoint = tuskDonePoint(proposalPoint);
          var task1_8 = ["three"];
          var answearTask1_8 = pointsCounter(proposalAnswer, task1_8);

          var factors_txtAnswer = tab1BDParts[9];
          var factors_txtPoint = factors_txtAnswer;
          factors_txtPoint = tuskDonePoint(factors_txtPoint);

          var conclusionsAnswer = tab1BDParts[10];
          var conclusionsPoint = conclusionsAnswer;
          conclusionsPoint = tuskDonePoint(conclusionsPoint);
          var task1_10 = ["four"];
          var answearTask1_10 = pointsCounter(conclusionsAnswer, task1_10);

          var countryAnswer = tab1BDParts[11];
          var countryPoint = countryAnswer;
          countryPoint = tuskDonePoint(countryPoint);
          var task1_11 = ["one", "six"];
          var answearTask1_11 = pointsCounter(countryAnswer, task1_11);

          var country_chooseAnswer = tab1BDParts[12];
          var country_choosePoint = country_chooseAnswer;
          country_choosePoint = tuskDonePoint(country_choosePoint);
          var task1_12 = ["one"];
          var answearTask1_12 = pointsCounter(country_chooseAnswer, task1_12);

          var factors_prioritiesAnswer = tab1BDParts[13];
          var factors_prioritiesPoint = factors_prioritiesAnswer;
          factors_prioritiesPoint = tuskDonePoint(factors_prioritiesPoint);
          var answearTask1_13 = dragDonePoint(factors_prioritiesAnswer);

          var points_txtAnswer = tab1BDParts[14];
          var points_txtPoint = points_txtAnswer;
          points_txtPoint = tuskDonePoint(points_txtPoint);

          var country_pointsAnswer = tab1BDParts[15];
          var country_pointsPoint = country_pointsAnswer;
          country_pointsPoint = tuskDonePoint(country_pointsPoint);
          var task1_15 = ["two"];
          var answearTask1_15 = pointsCounter(country_pointsAnswer, task1_15);

          var research_txtAnswer = tab1BDParts[16];
          var research_txtPoint = research_txtAnswer;
          research_txtPoint = tuskDonePoint(research_txtPoint);
        } else {
          answearTask1_1 = 0;
          answearTask1_2 = 0;
          answearTask1_3 = 0;
          answearTask1_4 = 0;
          answearTask1_5 = 0;
          answearTask1_6 = 0;
          answearTask1_7 = 0;
          answearTask1_8 = 0;
          answearTask1_10 = 0;
          answearTask1_11 = 0;
          answearTask1_12 = 0;
          answearTask1_13 = 0;
          answearTask1_15 = 0;
          percentPoint = 0;
          languagePoint = 0;
          answer_cplPoint = 0;
          criterionPoint = 0;
          criterion_choosePoint = 0;
          main_criterionPoint = 0;
          factorPoint = 0;
          proposalPoint = 0;
          factors_txtPoint = 0;
          conclusionsPoint = 0;
          countryPoint = 0;
          country_choosePoint = 0;
          factors_prioritiesPoint = 0;
          points_txtPoint = 0;
          country_pointsPoint = 0;
          research_txtPoint = 0;
        }

        if (tab2BDVal !== "" && tab2BDVal !== undefined) {
          var tab2BDParts = tab2BDVal.split("|/|");

          var pestleAnswer = tab2BDParts[1];
          var pestlePoint = pestleAnswer;
          pestlePoint = tuskDonePoint(pestlePoint);
          var task2_1 = ["two"];
          var answearTask2_1 = pointsCounter(pestleAnswer, task2_1);

          var decisionAnswer = tab2BDParts[2];
          var decisionPoint = decisionAnswer;
          decisionPoint = tuskDonePoint(decisionPoint);
          var task2_2 = ["two"];
          var answearTask2_2 = pointsCounter(decisionAnswer, task2_2);

          var decision_twoAnswer = tab2BDParts[3];
          var decision_twoPoint = decision_twoAnswer;
          decision_twoPoint = tuskDonePoint(decision_twoPoint);
          var task2_3 = ["four"];
          var answearTask2_3 = pointsCounter(decision_twoAnswer, task2_3);

          var factors_priorities_twoAnswer = tab2BDParts[4];
          var factors_priorities_twoPoint = factors_priorities_twoAnswer;
          factors_priorities_twoPoint = tuskDonePoint(
            factors_priorities_twoPoint
          );
          var answearTask2_4 = dragDonePoint(factors_priorities_twoAnswer);

          var legal_factorsAnswer = tab2BDParts[5];
          var legal_factorsPoint = legal_factorsAnswer;
          legal_factorsPoint = tuskDonePoint(legal_factorsPoint);
          var task2_5 = ["one"];
          var answearTask2_5 = pointsCounter(legal_factorsAnswer, task2_5);

          var teamAnswer = tab2BDParts[6];
          var teamPoint = teamAnswer;
          teamPoint = tuskDonePoint(teamPoint);
          var task2_6 = ["two"];
          var answearTask2_6 = pointsCounter(teamAnswer, task2_6);

          var team_txtAnswer = tab2BDParts[7];
          var team_txtPoint = team_txtAnswer;
          team_txtPoint = tuskDonePoint(team_txtPoint);

          var structureAnswer = tab2BDParts[8];
          var structurePoint = structureAnswer;
          structurePoint = tuskDonePoint(structurePoint);
          var task2_8 = ["two"];
          var answearTask2_8 = pointsCounter(structureAnswer, task2_8);

          var signalAnswer = tab2BDParts[9];
          var signalPoint = signalAnswer;
          signalPoint = tuskDonePoint(signalPoint);
          var task2_9;
          if (signalAnswer === "two") {
            task2_9 = ["two"];
          } else if (signalAnswer === "three") {
            task2_9 = ["three"];
          } else {
            task2_9 = ["two"];
          }
          var answearTask2_9 = pointsCounter(signalAnswer, task2_9);

          var china_txtAnswer = tab2BDParts[10];
          var china_txtPoint = china_txtAnswer;
          china_txtPoint = tuskDonePoint(china_txtPoint);

          var believeAnswer = tab2BDParts[11];
          var believePoint = believeAnswer;
          believePoint = tuskDonePoint(believePoint);
          var task2_11 = ["two"];
          var answearTask2_11 = pointsCounter(believeAnswer, task2_11);

          var china_risks_txtAnswer = tab2BDParts[12];
          var china_risks_txtPoint = china_risks_txtAnswer;
          china_risks_txtPoint = tuskDonePoint(china_risks_txtPoint);
        } else {
          pestlePoint = 0;
          decisionPoint = 0;
          decision_twoPoint = 0;
          factors_priorities_twoPoint = 0;
          legal_factorsPoint = 0;
          teamPoint = 0;
          team_txtPoint = 0;
          structurePoint = 0;
          signalPoint = 0;
          china_txtPoint = 0;
          believePoint = 0;
          china_risks_txtPoint = 0;

          answearTask2_1 = 0;
          answearTask2_2 = 0;
          answearTask2_3 = 0;
          answearTask2_4 = 0;
          answearTask2_5 = 0;
          answearTask2_6 = 0;
          answearTask2_8 = 0;
          answearTask2_9 = 0;
          answearTask2_11 = 0;
        }

        var tasksDone =
          percentPoint +
          languagePoint +
          answer_cplPoint +
          criterionPoint +
          criterion_choosePoint +
          main_criterionPoint +
          factorPoint +
          proposalPoint +
          factors_txtPoint +
          conclusionsPoint +
          countryPoint +
          country_choosePoint +
          factors_prioritiesPoint +
          points_txtPoint +
          country_pointsPoint +
          research_txtPoint +
          pestlePoint +
          decisionPoint +
          decision_twoPoint +
          factors_priorities_twoPoint +
          legal_factorsPoint +
          teamPoint +
          team_txtPoint +
          structurePoint +
          signalPoint +
          china_txtPoint +
          believePoint +
          china_risks_txtPoint;

        document.querySelector(
          '.middle_content[lesson="' + linkId + '"] .tasks_done'
        ).innerHTML = tasksDone;

        var tasksPoints =
          answearTask1_1 +
          answearTask1_2 +
          answearTask1_3 +
          answearTask1_4 +
          answearTask1_5 +
          answearTask1_6 +
          answearTask1_7 +
          answearTask1_8 +
          answearTask1_10 +
          answearTask1_11 +
          answearTask1_12 +
          answearTask1_13 +
          answearTask1_15 +
          answearTask2_1 +
          answearTask2_2 +
          answearTask2_3 +
          answearTask2_4 +
          answearTask2_5 +
          answearTask2_6 +
          answearTask2_8 +
          answearTask2_9 +
          answearTask2_11;
        document.querySelector(
          '.middle_content[lesson="' + linkId + '"] .right_answears'
        ).innerHTML = tasksPoints;

        var pointsTarget = 38;
        var pointspercentProgress = (100 / pointsTarget) * tasksPoints;
        pointspercentProgress = Math.round(pointspercentProgress);

        document.querySelector(
          '.middle_content[lesson="' + linkId + '"] .percent_aswear'
        ).innerHTML = pointspercentProgress;

        // -----------------
      } catch (error) {
        console.error(error);
      }
    })();
  }

  function twelfthLesson(linkId) {
    (async () => {
      try {
        var firstLessonInfo = await getLessonInfo("655b23d09365d880eb114243");

        var tab1BDVal = firstLessonInfo.fieldData.tab1;
        var tab2BDVal = firstLessonInfo.fieldData.tab2;
        var tab3BDVal = firstLessonInfo.fieldData.tab3;

        function tuskDonePoint(point) {
          if (point === "" || point === undefined || point === "empty") {
            point = 0;
          } else {
            point = 1;
          }
          return point;
        }

        function pointsCounter(data, valuesToCheck) {
          if (data !== "" && data !== undefined) {
            var counter = 0;
            valuesToCheck.forEach(function (value) {
              if (data.includes(value)) {
                counter++;
              }
            });
          } else {
            counter = 0;
          }
          return counter;
        }

        if (tab1BDVal !== "" && tab1BDVal !== undefined) {
          var tab1BDParts = tab1BDVal.split("|/|");

          var appAnswer = tab1BDParts[1];
          var appPoint = appAnswer;
          appPoint = tuskDonePoint(appPoint);
          var task1_1 = ["one", "three"];
          var answearTask1_1 = pointsCounter(appAnswer, task1_1);

          var analysis_systemAnswer = tab1BDParts[2];
          var analysis_systemPoint = analysis_systemAnswer;
          analysis_systemPoint = tuskDonePoint(analysis_systemPoint);
          var task1_2 = ["three"];
          var answearTask1_2 = pointsCounter(analysis_systemAnswer, task1_2);

          var problemAnswer = tab1BDParts[3];
          var problemPoint = problemAnswer;
          problemPoint = tuskDonePoint(problemPoint);
          var task1_3 = ["one", "three", "four"];
          var answearTask1_3 = pointsCounter(problemAnswer, task1_3);

          var automation_txtAnswer = tab1BDParts[4];
          var automation_txtPoint = automation_txtAnswer;
          automation_txtPoint = tuskDonePoint(automation_txtPoint);

          var data_lakeAnswer = tab1BDParts[5];
          var data_lakePoint = data_lakeAnswer;
          data_lakePoint = tuskDonePoint(data_lakePoint);
          var task1_5 = ["one"];
          var answearTask1_5 = pointsCounter(data_lakeAnswer, task1_5);

          var data_typeAnswer = tab1BDParts[6];
          var data_typePoint = data_typeAnswer;
          data_typePoint = tuskDonePoint(data_typePoint);
          var task1_6 = ["two", "four"];
          var answearTask1_6 = pointsCounter(data_typeAnswer, task1_6);

          var cannibalizationAnswer = tab1BDParts[7];
          var cannibalizationPoint = cannibalizationAnswer;
          cannibalizationPoint = tuskDonePoint(cannibalizationPoint);
          var task1_7 = ["one"];
          var answearTask1_7 = pointsCounter(cannibalizationAnswer, task1_7);

          var priorityAnswer = tab1BDParts[8];
          var priorityPoint = priorityAnswer;
          priorityPoint = tuskDonePoint(priorityPoint);
          var task1_8 = ["three"];
          var answearTask1_8 = pointsCounter(priorityAnswer, task1_8);

          var organic_issueAnswer = tab1BDParts[9];
          var organic_issuePoint = organic_issueAnswer;
          organic_issuePoint = tuskDonePoint(organic_issuePoint);
          var task1_9 = ["four"];
          var answearTask1_9 = pointsCounter(organic_issueAnswer, task1_9);

          var advertising_txtAnswer = tab1BDParts[10];
          var advertising_txtPoint = advertising_txtAnswer;
          advertising_txtPoint = tuskDonePoint(advertising_txtPoint);

          var meet_addAnswer = tab1BDParts[11];
          var meet_addPoint = meet_addAnswer;
          meet_addPoint = tuskDonePoint(meet_addPoint);

          var data_verificationAnswer = tab1BDParts[12];
          var data_verificationPoint = data_verificationAnswer;
          data_verificationPoint = tuskDonePoint(data_verificationPoint);
          var task1_12;

          console.log(data_verificationAnswer);
          if (
            data_verificationAnswer === "two" ||
            data_verificationAnswer === "empty"
          ) {
            task1_12 = ["two"];
          } else if (data_verificationAnswer === "three") {
            task1_12 = ["three"];
          }
          var answearTask1_12 = pointsCounter(
            data_verificationAnswer,
            task1_12
          );

          var duplicated_dataAnswer = tab1BDParts[13];
          var duplicated_dataPoint = duplicated_dataAnswer;
          duplicated_dataPoint = tuskDonePoint(duplicated_dataPoint);
          var task1_13 = ["two"];
          var answearTask1_13 = pointsCounter(duplicated_dataAnswer, task1_13);

          var sqlAnswer = tab1BDParts[14];
          var sqlPoint = sqlAnswer;
          sqlPoint = tuskDonePoint(sqlPoint);

          var analyze_extractAnswer = tab1BDParts[15];
          var analyze_extractPoint = analyze_extractAnswer;
          analyze_extractPoint = tuskDonePoint(analyze_extractPoint);

          var calculationsAnswer = tab1BDParts[16];
          var calculationsPoint = calculationsAnswer;
          calculationsPoint = tuskDonePoint(calculationsPoint);
          var task1_16 = ["one"];
          var answearTask1_16 = pointsCounter(calculationsAnswer, task1_16);

          var conclusion_cycleAnswer = tab1BDParts[17];
          var conclusion_cyclePoint = conclusion_cycleAnswer;
          conclusion_cyclePoint = tuskDonePoint(conclusion_cyclePoint);
        } else {
          appPoint = 0;
          analysis_systemPoint = 0;
          problemPoint = 0;
          automation_txtPoint = 0;
          data_lakePoint = 0;
          data_typePoint = 0;
          cannibalizationPoint = 0;
          priorityPoint = 0;
          organic_issuePoint = 0;
          advertising_txtPoint = 0;
          meet_addPoint = 0;
          data_verificationPoint = 0;
          duplicated_dataPoint = 0;
          sqlPoint = 0;
          analyze_extractPoint = 0;
          calculationsPoint = 0;
          conclusion_cyclePoint = 0;
          answearTask1_1 = 0;
          answearTask1_2 = 0;
          answearTask1_3 = 0;
          answearTask1_5 = 0;
          answearTask1_6 = 0;
          answearTask1_7 = 0;
          answearTask1_8 = 0;
          answearTask1_9 = 0;
          answearTask1_12 = 0;
          answearTask1_13 = 0;
          answearTask1_16 = 0;
        }

        if (tab2BDVal !== "" && tab2BDVal !== undefined) {
          var tab2BDParts = tab2BDVal.split("|/|");

          //  nat_talk
          //  photo
          //  photo_reaction
          //  crisisFull

          var nat_talkAnswer = tab2BDParts[1];
          var nat_talkPoint = nat_talkAnswer;
          nat_talkPoint = tuskDonePoint(nat_talkPoint);

          var photoAnswer = tab2BDParts[2];
          var photoPoint = photoAnswer;
          photoPoint = tuskDonePoint(photoPoint);

          var photo_reactionAnswer = tab2BDParts[3];
          var photo_reactionPoint = photo_reactionAnswer;
          photo_reactionPoint = tuskDonePoint(photo_reactionPoint);

          var crisisAnswer;
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

          var crisisFullAnswer = tab2BDParts[4];

          if (crisisFullAnswer !== "" && crisisFullAnswer !== undefined) {
            var crisisSplit = crisisFullAnswer.split("/");
            var crisisAnswer = crisisSplit[0];

            if (crisisAnswer === "one") {
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

          console.log(crisisAnswer);

          var crisisPoint = crisisAnswer;
          crisisPoint = tuskDonePoint(crisisPoint);

          // var problemAnswer = tab2BDParts[2];
          var crisis_annPoint = crisis_annAnswer;
          crisis_annPoint = tuskDonePoint(crisis_annPoint);

          var crisis_ann_twoPoint = crisis_ann_twoAnswer;
          crisis_ann_twoPoint = tuskDonePoint(crisis_ann_twoPoint);

          var crisis_ann_three_var1Point = crisis_ann_three_var1Answer;
          crisis_ann_three_var1Point = tuskDonePoint(
            crisis_ann_three_var1Point
          );

          var crisis_ann_three_var2Point = crisis_ann_three_var2Answer;
          crisis_ann_three_var2Point = tuskDonePoint(
            crisis_ann_three_var2Point
          );

          var crisis_ann_fourPoint = crisis_ann_fourAnswer;
          crisis_ann_fourPoint = tuskDonePoint(crisis_ann_fourPoint);

          var crisis_mykolaPoint = crisis_mykolaAnswer;
          crisis_mykolaPoint = tuskDonePoint(crisis_mykolaPoint);

          var crisis_mykola_twoPoint = crisis_mykola_twoAnswer;
          crisis_mykola_twoPoint = tuskDonePoint(crisis_mykola_twoPoint);

          var crisis_mykola_threePoint = crisis_mykola_threeAnswer;
          crisis_mykola_threePoint = tuskDonePoint(crisis_mykola_threePoint);

          var crisis_mykola_fourPoint = crisis_mykola_fourAnswer;
          crisis_mykola_fourPoint = tuskDonePoint(crisis_mykola_fourPoint);

          var crisis_mykola_fivePoint = crisis_mykola_fiveAnswer;
          crisis_mykola_fivePoint = tuskDonePoint(crisis_mykola_fivePoint);
        } else {
          nat_talkPoint = 0;
          photoPoint = 0;
          photo_reactionPoint = 0;
          crisisPoint = 0;
          crisis_annPoint = 0;
          crisis_ann_twoPoint = 0;
          crisis_ann_three_var1Point = 0;
          crisis_ann_three_var2Point = 0;
          crisis_ann_fourPoint = 0;
          crisis_mykolaPoint = 0;
          crisis_mykola_twoPoint = 0;
          crisis_mykola_threePoint = 0;
          crisis_mykola_fourPoint = 0;
          crisis_mykola_fivePoint = 0;
        }
        if (tab3BDVal !== "" && tab3BDVal !== undefined) {
          var tab3BDParts = tab3BDVal.split("|/|");

          var metrics_txtAnswer = tab3BDParts[1];
          var metrics_txtPoint = metrics_txtAnswer;
          metrics_txtPoint = tuskDonePoint(metrics_txtPoint);

          var ltvAnswer = tab3BDParts[2];
          var ltvPoint = ltvAnswer;
          ltvPoint = tuskDonePoint(ltvPoint);
          var task3_2 = ["one", "three", "five"];
          var answearTask3_2 = pointsCounter(ltvAnswer, task3_2);

          var org_analisis_txtAnswer = tab3BDParts[3];
          var org_analisis_txtPoint = org_analisis_txtAnswer;
          org_analisis_txtPoint = tuskDonePoint(org_analisis_txtPoint);

          var churnAnswer = tab3BDParts[4];
          var churnPoint = churnAnswer;
          churnPoint = tuskDonePoint(churnPoint);
          var task3_4 = ["one"];
          var answearTask3_4 = pointsCounter(churnAnswer, task3_4);

          var leaveAnswer = tab3BDParts[5];
          var leavePoint = leaveAnswer;
          leavePoint = tuskDonePoint(leavePoint);
          var task3_5 = ["two"];
          var answearTask3_5 = pointsCounter(leaveAnswer, task3_5);

          var retentionAnswer = tab3BDParts[6];
          var retentionPoint = retentionAnswer;
          retentionPoint = tuskDonePoint(retentionPoint);
          var task3_6 = ["two"];
          var answearTask3_6 = pointsCounter(retentionAnswer, task3_6);

          var retention_txtAnswer = tab3BDParts[7];
          var retention_txtPoint = retention_txtAnswer;
          retention_txtPoint = tuskDonePoint(retention_txtPoint);
          if (retention_txtAnswer !== "" || retention_txtAnswer !== undefined) {
            var answearTask3_7;
            if (retention_txtAnswer === "104.6") {
              answearTask3_7 = 1;
            } else {
              answearTask3_7 = 0;
            }
          } else {
            answearTask3_7 = 0;
          }
        } else {
          metrics_txtPoint = 0;
          ltvPoint = 0;
          org_analisis_txtPoint = 0;
          churnPoint = 0;
          leavePoint = 0;
          retentionPoint = 0;
          retention_txtPoint = 0;
          answearTask3_2 = 0;
          answearTask3_4 = 0;
          answearTask3_5 = 0;
          answearTask3_6 = 0;
          answearTask3_7 = 0;
        }

        var tasksDone =
          appPoint +
          analysis_systemPoint +
          problemPoint +
          automation_txtPoint +
          data_lakePoint +
          data_typePoint +
          cannibalizationPoint +
          priorityPoint +
          organic_issuePoint +
          advertising_txtPoint +
          meet_addPoint +
          data_verificationPoint +
          duplicated_dataPoint +
          sqlPoint +
          analyze_extractPoint +
          calculationsPoint +
          conclusion_cyclePoint +
          nat_talkPoint +
          photoPoint +
          photo_reactionPoint +
          crisisPoint +
          crisis_annPoint +
          crisis_ann_twoPoint +
          crisis_ann_three_var1Point +
          crisis_ann_three_var2Point +
          crisis_ann_fourPoint +
          crisis_mykolaPoint +
          crisis_mykola_twoPoint +
          crisis_mykola_threePoint +
          crisis_mykola_fourPoint +
          crisis_mykola_fivePoint +
          //
          metrics_txtPoint +
          ltvPoint +
          org_analisis_txtPoint +
          churnPoint +
          leavePoint +
          retentionPoint +
          retention_txtPoint;
        // console.log(
        //   crisis_annPoint,
        //   crisis_ann_twoPoint,
        //   crisis_ann_three_var1Point,
        //   crisis_ann_three_var2Point,
        //   crisis_ann_fourPoint,
        //   crisis_mykolaPoint,
        //   crisis_mykola_twoPoint,
        //   crisis_mykola_threePoint,
        //   crisis_mykola_fourPoint,
        //   crisis_mykola_fivePoint
        // );

        document.querySelector(
          '.middle_content[lesson="' + linkId + '"] .tasks_done'
        ).innerHTML = tasksDone;

        var tasksPoints =
          answearTask1_1 +
          answearTask1_2 +
          answearTask1_3 +
          answearTask1_5 +
          answearTask1_6 +
          answearTask1_7 +
          answearTask1_8 +
          answearTask1_9 +
          answearTask1_12 +
          answearTask1_13 +
          answearTask1_16 +
          answearTask3_2 +
          answearTask3_4 +
          answearTask3_5 +
          answearTask3_6 +
          answearTask3_7;
        document.querySelector(
          '.middle_content[lesson="' + linkId + '"] .right_answears'
        ).innerHTML = tasksPoints;

        var pointsTarget = 37;
        var pointspercentProgress = (100 / pointsTarget) * tasksPoints;
        pointspercentProgress = Math.round(pointspercentProgress);

        document.querySelector(
          '.middle_content[lesson="' + linkId + '"] .percent_aswear'
        ).innerHTML = pointspercentProgress;

        // -----------------
      } catch (error) {
        console.error(error);
      }
    })();
    // }
    // counter1 = counter1 + 1;
  }

  function eleventhLesson(linkId) {
    (async () => {
      try {
        var firstLessonInfo = await getLessonInfo("6556071b08de84914fd787a2");

        var tab1BDVal = firstLessonInfo.fieldData.tab1;
        var tab2BDVal = firstLessonInfo.fieldData.tab2;

        function tuskDonePoint(point) {
          if (point === "" || point === undefined || point === "empty") {
            point = 0;
          } else {
            point = 1;
          }
          return point;
        }

        function pointsCounter(data, valuesToCheck) {
          if (data !== "" && data !== undefined) {
            var counter = 0;
            valuesToCheck.forEach(function (value) {
              if (data.includes(value)) {
                counter++;
              }
            });
          } else {
            counter = 0;
          }
          return counter;
        }

        if (tab1BDVal !== "" && tab1BDVal !== undefined) {
          var tab1BDParts = tab1BDVal.split("|/|");

          var situationAnswer = tab1BDParts[1];
          var situationPoint = situationAnswer;
          situationPoint = tuskDonePoint(situationPoint);

          var reactionAnswer = tab1BDParts[2];
          var reactionPoint = reactionAnswer;
          reactionPoint = tuskDonePoint(reactionPoint);

          var investigationFullAnswer = tab1BDParts[3];
          var investigation_twoFullAnswer = tab1BDParts[4];
          var investigation_threeFullAnswer = tab1BDParts[5];
          var investigation_fourFullAnswer = tab1BDParts[6];
          var investigation_fiveFullAnswer = tab1BDParts[7];
          var investigation_sixFullAnswer = tab1BDParts[8];

          var julia_infoAnswer;
          var investigation_reactionAnswer;

          var investigationAnswer;
          var investigation_twoAnswer;
          var investigation_threeAnswer;
          var investigation_fourAnswer;
          var investigation_fiveAnswer;
          var investigation_sixAnswer;

          if (
            investigationFullAnswer !== "" &&
            investigationFullAnswer !== undefined
          ) {
            var investigationSplit = investigationFullAnswer.split("/");
            investigationAnswer = investigationSplit[0];
            if (
              investigationSplit.length > 1 &&
              investigationAnswer === "one"
            ) {
              investigation_reactionAnswer = investigationSplit[2];
            } else if (
              investigationSplit.length > 1 &&
              investigationAnswer === "three"
            ) {
              julia_infoAnswer = investigationSplit[2];
            }
          }

          if (
            investigation_twoFullAnswer !== "" &&
            investigation_twoFullAnswer !== undefined
          ) {
            var investigation_twoSplit = investigation_twoFullAnswer.split("/");
            investigation_twoAnswer = investigation_twoSplit[0];
            if (
              investigation_twoSplit.length > 1 &&
              investigation_twoAnswer === "one"
            ) {
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
            var investigation_threeSplit =
              investigation_threeFullAnswer.split("/");
            investigation_threeAnswer = investigation_threeSplit[0];
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
            var investigation_fourSplit =
              investigation_fourFullAnswer.split("/");
            investigation_fourAnswer = investigation_fourSplit[0];
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
            var investigation_fiveSplit =
              investigation_fiveFullAnswer.split("/");
            investigation_fiveAnswer = investigation_fiveSplit[0];
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
            investigation_sixAnswer = investigation_sixFullAnswer;
          }

          var investigationPoint = investigationAnswer;
          investigationPoint = tuskDonePoint(investigationPoint);

          var investigation_twoPoint = investigation_twoAnswer;
          investigation_twoPoint = tuskDonePoint(investigation_twoPoint);

          var investigation_threePoint = investigation_threeAnswer;
          investigation_threePoint = tuskDonePoint(investigation_threePoint);

          var investigation_fourPoint = investigation_fourAnswer;
          investigation_fourPoint = tuskDonePoint(investigation_fourPoint);

          var investigation_fivePoint = investigation_fiveAnswer;
          investigation_fivePoint = tuskDonePoint(investigation_fivePoint);

          var investigation_sixPoint = investigation_sixAnswer;
          investigation_sixPoint = tuskDonePoint(investigation_sixPoint);

          var julia_infoPoint = julia_infoAnswer;
          julia_infoPoint = tuskDonePoint(julia_infoPoint);

          var investigation_reactionPoint = investigation_reactionAnswer;
          investigation_reactionPoint = tuskDonePoint(
            investigation_reactionPoint
          );

          var general_conclusionAnswer = tab1BDParts[9];
          var general_conclusionPoint = general_conclusionAnswer;
          general_conclusionPoint = tuskDonePoint(general_conclusionPoint);

          var solving_situationAnswer = tab1BDParts[10];
          var solving_situationPoint = solving_situationAnswer;
          solving_situationPoint = tuskDonePoint(solving_situationPoint);

          var conflict_typeAnswer = tab1BDParts[11];
          var conflict_typePoint = conflict_typeAnswer;
          conflict_typePoint = tuskDonePoint(conflict_typePoint);
          var task1_1 = ["two", "three"];
          var answearTask1_1 = pointsCounter(conflict_typeAnswer, task1_1);

          var consequences_dismissalAnswer = tab1BDParts[12];
          var consequences_dismissalPoint = consequences_dismissalAnswer;
          consequences_dismissalPoint = tuskDonePoint(
            consequences_dismissalPoint
          );

          var decideAnswer = tab1BDParts[13];
          var decidePoint = decideAnswer;
          decidePoint = tuskDonePoint(decidePoint);
          var task1_2 = ["five"];
          var answearTask1_2 = pointsCounter(decideAnswer, task1_2);

          var say_directlyAnswer = tab1BDParts[14];
          var say_directlyPoint = say_directlyAnswer;
          say_directlyPoint = tuskDonePoint(say_directlyPoint);
        } else {
          situationPoint = 0;
          reactionPoint = 0;
          investigationPoint = 0;
          investigation_twoPoint = 0;
          investigation_threePoint = 0;
          investigation_fourPoint = 0;
          investigation_fivePoint = 0;
          investigation_sixPoint = 0;
          julia_infoPoint = 0;
          investigation_reactionPoint = 0;
          general_conclusionPoint = 0;
          solving_situationPoint = 0;
          conflict_typePoint = 0;
          consequences_dismissalPoint = 0;
          decidePoint = 0;
          say_directlyPoint = 0;
          answearTask1_1 = 0;
          answearTask1_2 = 0;
        }

        if (tab2BDVal !== "" && tab2BDVal !== undefined) {
          var tab2BDParts = tab2BDVal.split("|/|");

          var missionAnswer = tab2BDParts[1];
          var missionPoint = missionAnswer;
          missionPoint = tuskDonePoint(missionPoint);

          var problemAnswer = tab2BDParts[2];
          var problemPoint = problemAnswer;
          problemPoint = tuskDonePoint(problemPoint);
          var task2_1 = ["two"];
          var answearTask2_1 = pointsCounter(problemAnswer, task2_1);

          var stepsAnswer = tab2BDParts[3];
          var stepsPoint = stepsAnswer;
          stepsPoint = tuskDonePoint(stepsPoint);
          var task2_2 = ["three", "five", "six"];
          var answearTask2_2 = pointsCounter(stepsAnswer, task2_2);

          var fun_txtAnswer = tab2BDParts[4];
          var fun_txtPoint = fun_txtAnswer;
          fun_txtPoint = tuskDonePoint(fun_txtPoint);

          var answer_annAnswer = tab2BDParts[5];
          var answer_annPoint = answer_annAnswer;
          answer_annPoint = tuskDonePoint(answer_annPoint);
          var task2_3 = ["two"];
          var answearTask2_3 = pointsCounter(answer_annAnswer, task2_3);

          var descriptionAnswer = tab2BDParts[6];
          var descriptionPoint = descriptionAnswer;
          descriptionPoint = tuskDonePoint(descriptionPoint);
          var task2_4 = ["two"];
          var answearTask2_4 = pointsCounter(descriptionAnswer, task2_4);

          var feedback_txtAnswer = tab2BDParts[7];
          var feedback_txtPoint = feedback_txtAnswer;
          feedback_txtPoint = tuskDonePoint(feedback_txtPoint);

          var standartFullAnswer = tab2BDParts[8];
          var standart2FullAnswer = tab2BDParts[10];

          console.log(standartFullAnswer);
          console.log(standart2FullAnswer);

          var standartAnswer;
          var standart2Answer;
          var standart_first_txtAnswer;
          var standart_first_txt2Answer;
          var standart_secondAnswer;
          var standart_second2Answer;
          var standart_thirdAnswer;
          var standart_third2Answer;

          if (standartFullAnswer !== "" && standartFullAnswer !== undefined) {
            var standartSplit = standartFullAnswer.split("/");
            standartAnswer = standartSplit[0];
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
            standart2Answer = standart2Split[0];
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

          var standartPoint = standartAnswer;
          standartPoint = tuskDonePoint(standartPoint);

          var standart_first_txtPoint = standart_first_txtAnswer;
          standart_first_txtPoint = tuskDonePoint(standart_first_txtPoint);

          var standart_secondPoint = standart_secondAnswer;
          standart_secondPoint = tuskDonePoint(standart_secondPoint);
          var task2_5 = ["three"];
          var answearTask2_5 = pointsCounter(standart_secondAnswer, task2_5);

          var standart_thirdPoint = standart_thirdAnswer;
          standart_thirdPoint = tuskDonePoint(standart_thirdPoint);
          var task2_6 = ["four"];
          var answearTask2_6 = pointsCounter(standart_thirdAnswer, task2_6);

          var standart_lastAnswer = tab2BDParts[9];
          var standart_lastPoint = standart_lastAnswer;
          standart_lastPoint = tuskDonePoint(standart_lastPoint);

          var standart2Point = standart2Answer;
          standart2Point = tuskDonePoint(standart2Point);

          var standart_first_txt2Point = standart_first_txt2Answer;
          standart_first_txt2Point = tuskDonePoint(standart_first_txt2Point);

          var standart_second2Point = standart_second2Answer;
          standart_second2Point = tuskDonePoint(standart_second2Point);
          var task2_7 = ["one"];
          var answearTask2_7 = pointsCounter(standart_second2Answer, task2_7);
          // console.log(answearTask2_7);

          var standart_third2Point = standart_third2Answer;
          standart_third2Point = tuskDonePoint(standart_third2Point);
          var task2_8 = ["two"];
          var answearTask2_8 = pointsCounter(standart_third2Answer, task2_8);
          console.log(standart_third2Point);
        } else {
          missionPoint = 0;
          problemPoint = 0;
          stepsPoint = 0;
          fun_txtPoint = 0;
          answer_annPoint = 0;
          descriptionPoint = 0;
          feedback_txtPoint = 0;
          standartPoint = 0;
          standart_first_txtPoint = 0;
          standart_secondPoint = 0;
          standart_thirdPoint = 0;
          standart_lastPoint = 0;
          standart2Point = 0;
          standart_first_txt2Point = 0;
          standart_second2Point = 0;
          standart_third2Point = 0;
          answearTask2_1 = 0;
          answearTask2_2 = 0;
          answearTask2_3 = 0;
          answearTask2_4 = 0;
          answearTask2_5 = 0;
          answearTask2_6 = 0;
          answearTask2_7 = 0;
          answearTask2_8 = 0;
        }

        var tasksDone =
          situationPoint +
          reactionPoint +
          investigationPoint +
          investigation_twoPoint +
          investigation_threePoint +
          investigation_fourPoint +
          investigation_fivePoint +
          investigation_sixPoint +
          julia_infoPoint +
          investigation_reactionPoint +
          general_conclusionPoint +
          solving_situationPoint +
          conflict_typePoint +
          consequences_dismissalPoint +
          decidePoint +
          say_directlyPoint +
          missionPoint +
          problemPoint +
          stepsPoint +
          fun_txtPoint +
          answer_annPoint +
          descriptionPoint +
          feedback_txtPoint +
          standartPoint +
          standart_first_txtPoint +
          standart_secondPoint +
          standart_thirdPoint +
          standart_lastPoint +
          standart2Point +
          standart_first_txt2Point +
          standart_second2Point +
          standart_third2Point;

        console.log(
          answearTask1_1,
          answearTask1_2,
          answearTask2_1,
          answearTask2_2,
          answearTask2_3,
          answearTask2_4,
          answearTask2_5,
          answearTask2_6,
          answearTask2_7,
          answearTask2_8
        );

        document.querySelector(
          '.middle_content[lesson="' + linkId + '"] .tasks_done'
        ).innerHTML = tasksDone;

        var tasksPoints =
          answearTask1_1 +
          answearTask1_2 +
          answearTask2_1 +
          answearTask2_2 +
          answearTask2_3 +
          answearTask2_4 +
          answearTask2_5 +
          answearTask2_6 +
          answearTask2_7 +
          answearTask2_8;
        document.querySelector(
          '.middle_content[lesson="' + linkId + '"] .right_answears'
        ).innerHTML = tasksPoints;

        var pointsTarget = 13;
        var pointspercentProgress = (100 / pointsTarget) * tasksPoints;
        pointspercentProgress = Math.round(pointspercentProgress);

        document.querySelector(
          '.middle_content[lesson="' + linkId + '"] .percent_aswear'
        ).innerHTML = pointspercentProgress;

        // -----------------
      } catch (error) {
        console.error(error);
      }
    })();
    // }
    // counter1 = counter1 + 1;
  }

  function tenthLesson(linkId) {
    (async () => {
      try {
        var firstLessonInfo = await getLessonInfo("6546a14212815d6340defd76");

        var tab1BDVal = firstLessonInfo.fieldData.tab1;

        function tuskDonePoint(point) {
          if (point === "" || point === undefined) {
            point = 0;
          } else {
            point = 1;
          }
          return point;
        }

        function pointsCounter(data, valuesToCheck) {
          if (data !== "" && data !== undefined) {
            var counter = 0;
            valuesToCheck.forEach(function (value) {
              if (data.includes(value)) {
                counter++;
              }
            });
          } else {
            counter = 0;
          }
          return counter;
        }

        if (tab1BDVal !== "" && tab1BDVal !== undefined) {
          var tab1BDParts = tab1BDVal.split("|/|");

          var open_rateAnswear = tab1BDParts[1];
          var open_ratePoint = open_rateAnswear;
          open_ratePoint = tuskDonePoint(open_ratePoint);
          if (open_rateAnswear !== "" || open_rateAnswear !== undefined) {
            var answearTask1_1;
            if (open_rateAnswear === "12.5") {
              answearTask1_1 = 1;
            } else {
              answearTask1_1 = 0;
            }
          } else {
            answearTask1_1 = 0;
          }

          var email_conversionAnswear = tab1BDParts[2];
          var email_conversionPoint = email_conversionAnswear;
          email_conversionPoint = tuskDonePoint(email_conversionPoint);
          var task1_2 = ["three"];
          var answearTask1_2 = pointsCounter(email_conversionAnswear, task1_2);

          var detailsAnswear = tab1BDParts[3];
          var detailsPoint = detailsAnswear;
          detailsPoint = tuskDonePoint(detailsPoint);

          var main_problemAnswear = tab1BDParts[4];
          var main_problemPoint = main_problemAnswear;
          main_problemPoint = tuskDonePoint(main_problemPoint);
          var task1_4 = ["two"];
          var answearTask1_4 = pointsCounter(main_problemAnswear, task1_4);

          var best_resultsAnswear = tab1BDParts[5];
          var best_resultsPoint = best_resultsAnswear;
          best_resultsPoint = tuskDonePoint(best_resultsPoint);
          var task1_5 = ["one"];
          var answearTask1_5 = pointsCounter(best_resultsAnswear, task1_5);

          var url_utmAnswear = tab1BDParts[6];
          var url_utmPoint = url_utmAnswear;
          url_utmPoint = tuskDonePoint(url_utmPoint);
          var task1_6 = ["one"];
          var answearTask1_6 = pointsCounter(url_utmAnswear, task1_6);

          var ab_testAnswear = tab1BDParts[7];
          var ab_testPoint = ab_testAnswear;
          ab_testPoint = tuskDonePoint(ab_testPoint);
          var task1_7 = ["three"];
          var answearTask1_7 = pointsCounter(ab_testAnswear, task1_7);

          var utm_chooseAnswear = tab1BDParts[8];
          var utm_choosePoint = utm_chooseAnswear;
          utm_choosePoint = tuskDonePoint(utm_choosePoint);
          var task1_8 = ["three"];
          var answearTask1_8 = pointsCounter(utm_chooseAnswear, task1_8);

          var analyticsAnswear = tab1BDParts[9];
          var analyticsPoint = analyticsAnswear;
          analyticsPoint = tuskDonePoint(analyticsPoint);

          var manager_analysAnswear = tab1BDParts[10];
          var manager_analysPoint = manager_analysAnswear;
          manager_analysPoint = tuskDonePoint(manager_analysPoint);
          var task1_10 = ["two"];
          var answearTask1_10 = pointsCounter(manager_analysAnswear, task1_10);

          var meeting_formatAnswear = tab1BDParts[11];
          var meeting_formatPoint = meeting_formatAnswear;
          meeting_formatPoint = tuskDonePoint(meeting_formatPoint);
          var task1_11 = ["one", "two", "three"];
          if (meeting_formatAnswear === "four") {
            meeting_formatAnswear = "one,two,three";
          }
          var answearTask1_11 = pointsCounter(meeting_formatAnswear, task1_11);

          var cost_blogerAnswear = tab1BDParts[12];
          var cost_blogerPoint = cost_blogerAnswear;
          cost_blogerPoint = tuskDonePoint(cost_blogerPoint);
          var task1_12 = ["three"];
          var answearTask1_12 = pointsCounter(cost_blogerAnswear, task1_12);

          var middle_coastAnswear = tab1BDParts[13];
          var middle_coastPoint = middle_coastAnswear;
          middle_coastPoint = tuskDonePoint(middle_coastPoint);
          if (middle_coastAnswear !== "" || middle_coastAnswear !== undefined) {
            var answearTask1_13;
            if (middle_coastAnswear === "25.67") {
              answearTask1_13 = 1;
            } else {
              answearTask1_13 = 0;
            }
          } else {
            answearTask1_13 = 0;
          }

          var canal_economyAnswear = tab1BDParts[14];
          var canal_economyPoint = canal_economyAnswear;
          canal_economyPoint = tuskDonePoint(canal_economyPoint);
          var task1_14 = ["four"];
          var answearTask1_14 = pointsCounter(canal_economyAnswear, task1_14);

          var budget_cutAnswear = tab1BDParts[15];
          var budget_cutPoint = budget_cutAnswear;
          budget_cutPoint = tuskDonePoint(budget_cutPoint);
          var task1_15 = ["three"];
          var answearTask1_15 = pointsCounter(budget_cutAnswear, task1_15);
        } else {
          open_ratePoint = 0;
          email_conversionPoint = 0;
          detailsPoint = 0;
          main_problemPoint = 0;
          best_resultsPoint = 0;
          url_utmPoint = 0;
          ab_testPoint = 0;
          utm_choosePoint = 0;
          analyticsPoint = 0;
          manager_analysPoint = 0;
          meeting_formatPoint = 0;
          cost_blogerPoint = 0;
          middle_coastPoint = 0;
          canal_economyPoint = 0;
          budget_cutPoint = 0;
          answearTask1_1 = 0;
          answearTask1_2 = 0;
          answearTask1_4 = 0;
          answearTask1_5 = 0;
          answearTask1_6 = 0;
          answearTask1_7 = 0;
          answearTask1_8 = 0;
          answearTask1_10 = 0;
          answearTask1_11 = 0;
          answearTask1_12 = 0;
          answearTask1_13 = 0;
          answearTask1_14 = 0;
          answearTask1_15 = 0;
        }

        var tasksDone =
          open_ratePoint +
          email_conversionPoint +
          detailsPoint +
          main_problemPoint +
          best_resultsPoint +
          url_utmPoint +
          ab_testPoint +
          utm_choosePoint +
          analyticsPoint +
          manager_analysPoint +
          meeting_formatPoint +
          cost_blogerPoint +
          middle_coastPoint +
          canal_economyPoint +
          budget_cutPoint;
        document.querySelector(
          '.middle_content[lesson="' + linkId + '"] .tasks_done'
        ).innerHTML = tasksDone;

        var tasksPoints =
          answearTask1_1 +
          answearTask1_2 +
          answearTask1_4 +
          answearTask1_5 +
          answearTask1_6 +
          answearTask1_7 +
          answearTask1_8 +
          answearTask1_10 +
          answearTask1_11 +
          answearTask1_12 +
          answearTask1_13 +
          answearTask1_14 +
          answearTask1_15;
        document.querySelector(
          '.middle_content[lesson="' + linkId + '"] .right_answears'
        ).innerHTML = tasksPoints;

        var pointsTarget = 15;
        var pointspercentProgress = (100 / pointsTarget) * tasksPoints;
        pointspercentProgress = Math.round(pointspercentProgress);

        document.querySelector(
          '.middle_content[lesson="' + linkId + '"] .percent_aswear'
        ).innerHTML = pointspercentProgress;

        // -----------------
      } catch (error) {
        console.error(error);
      }
    })();
    // }
    // counter1 = counter1 + 1;
  }

  function ninthLesson(linkId) {
    (async () => {
      try {
        var firstLessonInfo = await getLessonInfo("653baae8a73b64de22ff788b");

        var tab1BDVal = firstLessonInfo.fieldData.tab1;
        var tab2BDVal = firstLessonInfo.fieldData.tab2;

        function tuskDonePoint(point) {
          if (point === "" || point === undefined) {
            point = 0;
          } else {
            point = 1;
          }
          return point;
        }

        function pointsCounter(data, valuesToCheck) {
          if (data !== "" && data !== undefined) {
            var counter = 0;
            valuesToCheck.forEach(function (value) {
              if (data.includes(value)) {
                counter++;
              }
            });
          } else {
            counter = 0;
          }
          return counter;
        }

        if (tab1BDVal !== "" && tab1BDVal !== undefined) {
          var tab1BDParts = tab1BDVal.split("|/|");

          var changesAnswer = tab1BDParts[1];
          var changesPoint = changesAnswer;
          changesPoint = tuskDonePoint(changesPoint);
          var task1_1 = ["six"];
          var answearTask1_1 = pointsCounter(changesAnswer, task1_1);

          var changes_stageAnswer = tab1BDParts[2];
          var changes_stagePoint = changes_stageAnswer;
          changes_stagePoint = tuskDonePoint(changes_stagePoint);
          var task1_2 = ["five"];
          var answearTask1_2 = pointsCounter(changes_stageAnswer, task1_2);

          var paybackAnswer = tab1BDParts[3];
          var paybackPoint = paybackAnswer;
          paybackPoint = tuskDonePoint(paybackPoint);
          var task1_3 = ["two"];
          var answearTask1_3 = pointsCounter(paybackAnswer, task1_3);

          var arppu_calcAnswer = tab1BDParts[4];
          var arppu_calcPoint = arppu_calcAnswer;
          arppu_calcPoint = tuskDonePoint(arppu_calcPoint);
          if (arppu_calcAnswer !== "" || arppu_calcAnswer !== undefined) {
            var answearTask1_4;
            if (arppu_calcAnswer === "43.1" || arppu_calcAnswer === "43.2") {
              answearTask1_4 = 1;
            } else {
              answearTask1_4 = 0;
            }
          } else {
            answearTask1_4 = 0;
          }

          var payback_cohortAnswer = tab1BDParts[5];
          var payback_cohortPoint = payback_cohortAnswer;
          payback_cohortPoint = tuskDonePoint(payback_cohortPoint);
          var task1_5 = ["two"];
          var answearTask1_5 = pointsCounter(payback_cohortAnswer, task1_5);

          var resultsAnswer = tab1BDParts[6];
          var resultsPoint = resultsAnswer;
          resultsPoint = tuskDonePoint(resultsPoint);
          var task1_6 = ["one"];
          var answearTask1_6 = pointsCounter(resultsAnswer, task1_6);

          var everyoneAnswer = tab1BDParts[7];
          var everyonePoint = everyoneAnswer;
          everyonePoint = tuskDonePoint(everyonePoint);
          var task1_7 = ["two"];
          var answearTask1_7 = pointsCounter(everyoneAnswer, task1_7);

          var cpo_calcAnswer = tab1BDParts[8];
          var cpo_calcPoint = cpo_calcAnswer;
          cpo_calcPoint = tuskDonePoint(cpo_calcPoint);
          if (cpo_calcAnswer !== "" || cpo_calcAnswer !== undefined) {
            var answearTask1_8;
            if (cpo_calcAnswer === "43.1" || cpo_calcAnswer === "43.2") {
              answearTask1_8 = 1;
            } else {
              answearTask1_8 = 0;
            }
          } else {
            answearTask1_8 = 0;
          }

          var low_metricAnswer = tab1BDParts[9];
          var low_metricPoint = low_metricAnswer;
          low_metricPoint = tuskDonePoint(low_metricPoint);
          var task1_9 = ["four"];
          var answearTask1_9 = pointsCounter(low_metricAnswer, task1_9);

          var proxyAnswer = tab1BDParts[10];
          var proxyPoint = proxyAnswer;
          proxyPoint = tuskDonePoint(proxyPoint);
          var task1_10 = ["two", "three", "four", "five"];
          var answearTask1_10 = pointsCounter(proxyAnswer, task1_10);
        } else {
          changesPoint = 0;
          changes_stagePoint = 0;
          paybackPoint = 0;
          arppu_calcPoint = 0;
          payback_cohortPoint = 0;
          resultsPoint = 0;
          everyonePoint = 0;
          cpo_calcPoint = 0;
          low_metricPoint = 0;
          proxyPoint = 0;
          answearTask1_1 = 0;
          answearTask1_2 = 0;
          answearTask1_3 = 0;
          answearTask1_4 = 0;
          answearTask1_5 = 0;
          answearTask1_6 = 0;
          answearTask1_7 = 0;
          answearTask1_8 = 0;
          answearTask1_9 = 0;
          answearTask1_10 = 0;
        }

        if (tab2BDVal !== "" && tab2BDVal !== undefined) {
          var tab2BDParts = tab2BDVal.split("|/|");

          var media_planAnswer = tab2BDParts[1];
          var media_planPoint = media_planAnswer;
          media_planPoint = tuskDonePoint(media_planPoint);
          var task2_1 = ["two"];
          var answearTask2_1 = pointsCounter(media_planAnswer, task2_1);

          var media_textAnswer = tab2BDParts[2];
          var media_textPoint = media_textAnswer;
          media_textPoint = tuskDonePoint(media_textPoint);

          var count_funnelAnswer = tab2BDParts[3];
          var count_funnelPoint = count_funnelAnswer;
          count_funnelPoint = tuskDonePoint(count_funnelPoint);
          var task2_3 = ["one"];
          var answearTask2_3 = pointsCounter(count_funnelAnswer, task2_3);

          var breakdownAnswer = tab2BDParts[4];
          var breakdownPoint = breakdownAnswer;
          breakdownPoint = tuskDonePoint(breakdownPoint);
          var task2_4 = ["three"];
          var answearTask2_4 = pointsCounter(breakdownAnswer, task2_4);

          var media_plan_textAnswer = tab2BDParts[5];
          var media_plan_textPoint = media_plan_textAnswer;
          media_plan_textPoint = tuskDonePoint(media_plan_textPoint);

          var ctlAnswer = tab2BDParts[6];
          var ctlPoint = ctlAnswer;
          ctlPoint = tuskDonePoint(ctlPoint);
          var task2_6 = ["three"];
          var answearTask2_6 = pointsCounter(ctlAnswer, task2_6);

          var mediaplan_doneAnswer = tab2BDParts[7];
          var mediaplan_donePoint = mediaplan_doneAnswer;
          mediaplan_donePoint = tuskDonePoint(mediaplan_donePoint);
          var task2_7 = ["two"];
          var answearTask2_7 = pointsCounter(mediaplan_doneAnswer, task2_7);

          var mediaplan_done_textAnswer = tab2BDParts[8];
          var mediaplan_done_textPoint = mediaplan_done_textAnswer;
          mediaplan_done_textPoint = tuskDonePoint(mediaplan_done_textPoint);

          var mediaplan_finalAnswer = tab2BDParts[9];
          var mediaplan_finalPoint = mediaplan_finalAnswer;
          mediaplan_finalPoint = tuskDonePoint(mediaplan_finalPoint);
          var task2_9 = ["one"];
          var answearTask2_9 = pointsCounter(mediaplan_finalAnswer, task2_9);

          var budget_testAnswer = tab2BDParts[10];
          var budget_testPoint = budget_testAnswer;
          budget_testPoint = tuskDonePoint(budget_testPoint);
          var task2_10 = ["two"];
          var answearTask2_10 = pointsCounter(budget_testAnswer, task2_10);

          var budget_test_percentAnswer = tab2BDParts[11];
          var budget_test_percentPoint = budget_test_percentAnswer;
          budget_test_percentPoint = tuskDonePoint(budget_test_percentPoint);
          if (
            budget_testAnswer !== "" &&
            budget_testAnswer !== undefined &&
            budget_testAnswer !== 0
          ) {
            var answearTask2_11 = 1;
          }
        } else {
          media_planPoint = 0;
          media_textPoint = 0;
          count_funnelPoint = 0;
          breakdownPoint = 0;
          media_plan_textPoint = 0;
          ctlPoint = 0;
          mediaplan_donePoint = 0;
          mediaplan_done_textPoint = 0;
          mediaplan_finalPoint = 0;
          budget_testPoint = 0;
          budget_test_percentPoint = 0;
          answearTask2_1 = 0;
          answearTask2_3 = 0;
          answearTask2_4 = 0;
          answearTask2_6 = 0;
          answearTask2_7 = 0;
          answearTask2_9 = 0;
          answearTask2_10 = 0;
          answearTask2_11 = 0;
        }

        var tasksDone =
          changesPoint +
          changes_stagePoint +
          paybackPoint +
          arppu_calcPoint +
          payback_cohortPoint +
          resultsPoint +
          everyonePoint +
          cpo_calcPoint +
          low_metricPoint +
          proxyPoint +
          media_planPoint +
          media_textPoint +
          count_funnelPoint +
          breakdownPoint +
          media_plan_textPoint +
          ctlPoint +
          mediaplan_donePoint +
          mediaplan_done_textPoint +
          mediaplan_finalPoint +
          budget_testPoint +
          budget_test_percentPoint;
        document.querySelector(
          '.middle_content[lesson="' + linkId + '"] .tasks_done'
        ).innerHTML = tasksDone;

        var tasksPoints =
          answearTask1_1 +
          answearTask1_2 +
          answearTask1_3 +
          answearTask1_4 +
          answearTask1_5 +
          answearTask1_6 +
          answearTask1_7 +
          answearTask1_8 +
          answearTask1_9 +
          answearTask1_10 +
          answearTask2_1 +
          answearTask2_3 +
          answearTask2_4 +
          answearTask2_6 +
          answearTask2_7 +
          answearTask2_9 +
          answearTask2_10 +
          answearTask2_11;
        document.querySelector(
          '.middle_content[lesson="' + linkId + '"] .right_answears'
        ).innerHTML = tasksPoints;

        var pointsTarget = 21;
        var pointspercentProgress = (100 / pointsTarget) * tasksPoints;
        pointspercentProgress = Math.round(pointspercentProgress);

        document.querySelector(
          '.middle_content[lesson="' + linkId + '"] .percent_aswear'
        ).innerHTML = pointspercentProgress;

        // -----------------
      } catch (error) {
        console.error(error);
      }
    })();
    // }
    // counter1 = counter1 + 1;
  }

  function eighthLesson(linkId) {
    (async () => {
      try {
        var firstLessonInfo = await getLessonInfo("65326a3ca55b6cc596333e33");

        var tab1BDVal = firstLessonInfo.fieldData.tab1;
        var tab2BDVal = firstLessonInfo.fieldData.tab2;
        var tab3BDVal = firstLessonInfo.fieldData.tab3;
        var tab4BDVal = firstLessonInfo.fieldData.tab4;

        function tuskDonePoint(point) {
          if (point === "" || point === undefined) {
            point = 0;
          } else {
            point = 1;
          }
          return point;
        }

        function pointsCounter(data, valuesToCheck) {
          if (data !== "" && data !== undefined) {
            var counter = 0;
            valuesToCheck.forEach(function (value) {
              if (data.includes(value)) {
                counter++;
              }
            });
          } else {
            counter = 0;
          }
          return counter;
        }

        if (tab1BDVal !== "" && tab1BDVal !== undefined) {
          var tab1BDParts = tab1BDVal.split("|/|");

          var delegate_noAnswear = tab1BDParts[1];
          var delegate_noPoint = delegate_noAnswear;
          delegate_noPoint = tuskDonePoint(delegate_noPoint);
          var task1_1 = ["two", "three", "five"];
          var answearTask1_1 = pointsCounter(delegate_noAnswear, task1_1);

          var delegate_yesAnswear = tab1BDParts[2];
          var delegate_yesPoint = delegate_yesAnswear;
          delegate_yesPoint = tuskDonePoint(delegate_yesPoint);
          var task1_2 = ["one", "two", "four", "five"];
          var answearTask1_2 = pointsCounter(delegate_yesAnswear, task1_2);

          var calendarAnswear = tab1BDParts[3];
          var calendarPoint = calendarAnswear;
          calendarPoint = tuskDonePoint(calendarPoint);

          var meeting_formatAnswear = tab1BDParts[4];
          var meeting_formatPoint = meeting_formatAnswear;
          meeting_formatPoint = tuskDonePoint(meeting_formatPoint);
          var task1_4 = ["one", "two", "five", "seven"];
          var answearTask1_4 = pointsCounter(meeting_formatAnswear, task1_4);

          var meeting_noAnswear = tab1BDParts[5];
          var meeting_noPoint = meeting_noAnswear;
          meeting_noPoint = tuskDonePoint(meeting_noPoint);
          var task1_5 = ["three"];
          var answearTask1_5 = pointsCounter(meeting_noAnswear, task1_5);
        } else {
          delegate_noPoint = 0;
          delegate_yesPoint = 0;
          calendarPoint = 0;
          meeting_formatPoint = 0;
          meeting_noPoint = 0;
          answearTask1_1 = 0;
          answearTask1_2 = 0;
          answearTask1_4 = 0;
          answearTask1_5 = 0;
        }

        if (tab2BDVal !== "" && tab2BDVal !== undefined) {
          var tab2BDParts = tab2BDVal.split("|/|");

          var faultAnswear = tab2BDParts[1];
          var faultPoint = faultAnswear;
          faultPoint = tuskDonePoint(faultPoint);
          var task2_1 = ["one"];
          var answearTas2_1 = pointsCounter(faultAnswear, task2_1);

          var aidAnswear = tab2BDParts[2];
          var aidPoint = aidAnswear;
          aidPoint = tuskDonePoint(aidPoint);
          var task2_2 = ["three"];
          var answearTas2_2 = pointsCounter(aidAnswear, task2_2);

          var designer_feedbackAnswear = tab2BDParts[3];
          var designer_feedbackPoint = designer_feedbackAnswear;
          designer_feedbackPoint = tuskDonePoint(designer_feedbackPoint);
          var task2_3 = ["two"];
          var answearTas2_3 = pointsCounter(designer_feedbackAnswear, task2_3);

          var nat_speechAnswear = tab2BDParts[4];
          var nat_speechPoint = nat_speechAnswear;
          nat_speechPoint = tuskDonePoint(nat_speechPoint);
        } else {
          faultPoint = 0;
          aidPoint = 0;
          designer_feedbackPoint = 0;
          nat_speechPoint = 0;
          answearTas2_1 = 0;
          answearTas2_2 = 0;
          answearTas2_3 = 0;
        }

        if (tab3BDVal !== "" && tab3BDVal !== undefined) {
          var tab3BDParts = tab3BDVal.split("|/|");
          // var tab1Progress = tab1BDParts[0];
          var meeting_not_requiredAnswear = tab3BDParts[1];
          var meeting_not_requiredPoint = meeting_not_requiredAnswear;
          meeting_not_requiredPoint = tuskDonePoint(meeting_not_requiredPoint);
          var task3_1 = ["three"];
          var answearTas3_1 = pointsCounter(
            meeting_not_requiredAnswear,
            task3_1
          );

          var planing_meetingAnswear = tab3BDParts[2];
          var planing_meetingPoint = planing_meetingAnswear;
          planing_meetingPoint = tuskDonePoint(planing_meetingPoint);
          var task3_2 = ["one", "three"];
          var answearTas3_2 = pointsCounter(planing_meetingAnswear, task3_2);

          var motivation_problemsAnswear = tab3BDParts[3];
          var motivation_problemsPoint = motivation_problemsAnswear;
          motivation_problemsPoint = tuskDonePoint(motivation_problemsPoint);
          var task3_3 = ["two"];
          var answearTas3_3 = pointsCounter(
            motivation_problemsAnswear,
            task3_3
          );

          var burnout_indicatorsAnswear = tab3BDParts[4];
          var burnout_indicatorsPoint = burnout_indicatorsAnswear;
          burnout_indicatorsPoint = tuskDonePoint(burnout_indicatorsPoint);
          var task3_4 = ["one", "four", "five"];
          var answearTas3_4 = pointsCounter(burnout_indicatorsAnswear, task3_4);

          var cause_of_burnoutAnswear = tab3BDParts[5];
          var cause_of_burnoutPoint = cause_of_burnoutAnswear;
          cause_of_burnoutPoint = tuskDonePoint(cause_of_burnoutPoint);
          var task3_5 = ["four"];
          var answearTas3_5 = pointsCounter(cause_of_burnoutAnswear, task3_5);

          var motivationAnswear = tab3BDParts[6];
          var motivationPoint = motivationAnswear;
          motivationPoint = tuskDonePoint(motivationPoint);
          var task3_6 = ["two", "three", "five", "six"];
          var answearTas3_6 = pointsCounter(motivationAnswear, task3_6);

          var motivation_moneyAnswear = tab3BDParts[7];
          var motivation_moneyPoint = motivation_moneyAnswear;
          motivation_moneyPoint = tuskDonePoint(motivation_moneyPoint);
          var task3_7 = ["one"];
          var answearTas3_7 = pointsCounter(motivation_moneyAnswear, task3_7);

          var motivation_growthAnswear = tab3BDParts[8];
          var motivation_growthPoint = motivation_growthAnswear;
          motivation_growthPoint = tuskDonePoint(motivation_growthPoint);
          var task3_8 = ["one"];
          var answearTas3_8 = pointsCounter(motivation_growthAnswear, task3_8);

          var motivation_statusAnswear = tab3BDParts[9];
          var motivation_statusPoint = motivation_statusAnswear;
          motivation_statusPoint = tuskDonePoint(motivation_statusPoint);
          var task3_9 = ["one", "four"];
          var answearTas3_9 = pointsCounter(motivation_statusAnswear, task3_9);

          var motivation_powerAnswear = tab3BDParts[10];
          var motivation_powerPoint = motivation_powerAnswear;
          motivation_powerPoint = tuskDonePoint(motivation_powerPoint);
          var task3_10 = ["two", "three", "four"];
          var answearTas3_10 = pointsCounter(motivation_powerAnswear, task3_10);
        } else {
          meeting_not_requiredPoint = 0;
          planing_meetingPoint = 0;
          motivation_problemsPoint = 0;
          burnout_indicatorsPoint = 0;
          cause_of_burnoutPoint = 0;
          motivationPoint = 0;
          motivation_moneyPoint = 0;
          motivation_growthPoint = 0;
          motivation_statusPoint = 0;
          motivation_powerPoint = 0;
          answearTas3_1 = 0;
          answearTas3_2 = 0;
          answearTas3_3 = 0;
          answearTas3_4 = 0;
          answearTas3_5 = 0;
          answearTas3_6 = 0;
          answearTas3_7 = 0;
          answearTas3_8 = 0;
          answearTas3_9 = 0;
          answearTas3_10 = 0;
        }

        if (tab4BDVal !== "" && tab4BDVal !== undefined) {
          var tab4BDParts = tab4BDVal.split("|/|");

          var teamAnswear = tab4BDParts[1];
          var teamPoint = teamAnswear;
          teamPoint = tuskDonePoint(teamPoint);
          var task4_1 = [
            "one",
            "two",
            "three",
            "four",
            "six",
            "seven",
            "eight",
          ];
          var answearTas4_1 = pointsCounter(teamAnswear, task4_1);

          var aarrrAnswear = tab4BDParts[2];
          var aarrrPoint = aarrrAnswear;
          aarrrPoint = tuskDonePoint(aarrrPoint);
          var task4_2 = ["one", "four", "five", "six"];
          var answearTas4_2 = pointsCounter(aarrrAnswear, task4_2);

          var middleAnswear = tab4BDParts[3];
          var middlePoint = middleAnswear;
          middlePoint = tuskDonePoint(middlePoint);
        } else {
          teamPoint = 0;
          aarrrPoint = 0;
          middlePoint = 0;
          answearTas4_1 = 0;
          answearTas4_2 = 0;
        }

        var tasksDone =
          delegate_noPoint +
          delegate_yesPoint +
          calendarPoint +
          meeting_formatPoint +
          meeting_noPoint +
          faultPoint +
          aidPoint +
          designer_feedbackPoint +
          nat_speechPoint +
          meeting_not_requiredPoint +
          planing_meetingPoint +
          motivation_problemsPoint +
          burnout_indicatorsPoint +
          cause_of_burnoutPoint +
          motivationPoint +
          motivation_moneyPoint +
          motivation_growthPoint +
          motivation_statusPoint +
          motivation_powerPoint +
          teamPoint +
          aarrrPoint +
          middlePoint;

        document.querySelector(
          '.middle_content[lesson="' + linkId + '"] .tasks_done'
        ).innerHTML = tasksDone;

        var tasksPoints =
          answearTask1_1 +
          answearTask1_2 +
          answearTask1_4 +
          answearTask1_5 +
          answearTas2_1 +
          answearTas2_2 +
          answearTas2_3 +
          answearTas3_1 +
          answearTas3_2 +
          answearTas3_3 +
          answearTas3_4 +
          answearTas3_5 +
          answearTas3_6 +
          answearTas3_7 +
          answearTas3_8 +
          answearTas3_9 +
          answearTas3_10 +
          answearTas4_1 +
          answearTas4_2;
        document.querySelector(
          '.middle_content[lesson="' + linkId + '"] .right_answears'
        ).innerHTML = tasksPoints;

        var pointsTarget = 45;
        var pointspercentProgress = (100 / pointsTarget) * tasksPoints;
        pointspercentProgress = Math.round(pointspercentProgress);

        document.querySelector(
          '.middle_content[lesson="' + linkId + '"] .percent_aswear'
        ).innerHTML = pointspercentProgress;

        // -----------------
      } catch (error) {
        console.error(error);
      }
    })();
    // }
    // counter1 = counter1 + 1;
  }

  function seventhLesson(linkId) {
    (async () => {
      try {
        var firstLessonInfo = await getLessonInfo("652ac15c622571ba14ac33f5");

        var tab1BDVal = firstLessonInfo.fieldData.tab1;

        function tuskDonePoint(point) {
          if (point === "" || point === undefined) {
            point = 0;
          } else {
            point = 1;
          }
          return point;
        }

        function pointsCounter(data, valuesToCheck) {
          if (data !== "" && data !== undefined) {
            var counter = 0;
            valuesToCheck.forEach(function (value) {
              if (data.includes(value)) {
                counter++;
              }
            });
          } else {
            counter = 0;
          }
          return counter;
        }

        if (tab1BDVal !== "" && tab1BDVal !== undefined) {
          var tab1BDParts = tab1BDVal.split("|/|");
          // var tab1Progress = tab1BDParts[0];

          var firmstyleAnswear = tab1BDParts[1];
          var firmstylePoint = firmstyleAnswear;
          firmstylePoint = tuskDonePoint(firmstylePoint);
          var task1_1 = ["two"];
          var answearTask1_1 = pointsCounter(firmstyleAnswear, task1_1);

          var designerAnswear = tab1BDParts[2];
          var designerPoint = designerAnswear;
          designerPoint = tuskDonePoint(designerPoint);
          var task1_2 = ["three"];
          var answearTask1_2 = pointsCounter(designerAnswear, task1_2);

          var identityAnswear = tab1BDParts[3];
          var identityPoint = identityAnswear;
          identityPoint = tuskDonePoint(identityPoint);
          var task1_3 = ["four", "five", "seven", "eight"];
          var answearTask1_3 = pointsCounter(identityAnswear, task1_3);

          var redesignAnswear = tab1BDParts[4];
          var redesignPoint = redesignAnswear;
          redesignPoint = tuskDonePoint(redesignPoint);
          var task1_4 = ["three"];
          var answearTask1_4 = pointsCounter(redesignAnswear, task1_4);

          var metaphorAnswear = tab1BDParts[5];
          var metaphorPoint = metaphorAnswear;
          metaphorPoint = tuskDonePoint(metaphorPoint);
          var task1_5 = ["one"];
          var answearTask1_5 = pointsCounter(metaphorAnswear, task1_5);

          var metaphor_textareaAnswear = tab1BDParts[6];
          var metaphor_textareaPoint = metaphor_textareaAnswear;
          metaphor_textareaPoint = tuskDonePoint(metaphor_textareaPoint);

          var feedbackAnswear = tab1BDParts[7];
          var feedbackPoint = feedbackAnswear;
          feedbackPoint = tuskDonePoint(feedbackPoint);
          var task1_7 = ["two", "three", "five", "eight"];
          var answearTask1_7 = pointsCounter(feedbackAnswear, task1_7);

          var opinionAnswear = tab1BDParts[8];
          var opinionPoint = opinionAnswear;
          opinionPoint = tuskDonePoint(opinionPoint);
          var task1_8 = ["two", "three", "five", "eight"];
          var answearTask1_8 = pointsCounter(opinionAnswear, task1_8);

          var do_workAnswear = tab1BDParts[9];
          var do_workPoint = do_workAnswear;
          do_workPoint = tuskDonePoint(do_workPoint);
          var task1_9 = ["two"];
          var answearTask1_9 = pointsCounter(do_workAnswear, task1_9);

          var variant_textareaAnswear = tab1BDParts[10];
          var variant_textareaPoint = variant_textareaAnswear;
          variant_textareaPoint = tuskDonePoint(variant_textareaPoint);

          var colorsAnswear = tab1BDParts[11];
          var colorsPoint = colorsAnswear;
          colorsPoint = tuskDonePoint(colorsPoint);
          var task1_11 = ["three"];
          var answearTask1_11 = pointsCounter(colorsAnswear, task1_11);

          var feedback_textareaAnswear = tab1BDParts[12];
          var feedback_textareaPoint = feedback_textareaAnswear;
          feedback_textareaPoint = tuskDonePoint(feedback_textareaPoint);

          var gidelineAnswear = tab1BDParts[13];
          var gidelinePoint = gidelineAnswear;
          gidelinePoint = tuskDonePoint(gidelinePoint);
          var task1_13 = ["one", "four", "five", "six"];
          var answearTask1_13 = pointsCounter(gidelineAnswear, task1_13);

          var logo_reviewAnswear = tab1BDParts[14];
          var logo_reviewPoint = logo_reviewAnswear;
          logo_reviewPoint = tuskDonePoint(logo_reviewPoint);
        } else {
          firmstylePoint = 0;
          designerPoint = 0;
          identityPoint = 0;
          redesignPoint = 0;
          metaphorPoint = 0;
          metaphor_textareaPoint = 0;
          feedbackPoint = 0;
          opinionPoint = 0;
          do_workPoint = 0;
          variant_textareaPoint = 0;
          colorsPoint = 0;
          feedback_textareaPoint = 0;
          gidelinePoint = 0;
          logo_reviewPoint = 0;
          answearTask1_1 = 0;
          answearTask1_2 = 0;
          answearTask1_3 = 0;
          answearTask1_4 = 0;
          answearTask1_5 = 0;
          answearTask1_7 = 0;
          answearTask1_8 = 0;
          answearTask1_9 = 0;
          answearTask1_11 = 0;
          answearTask1_13 = 0;
        }

        var tasksDone =
          firmstylePoint +
          designerPoint +
          identityPoint +
          redesignPoint +
          metaphorPoint +
          metaphor_textareaPoint +
          feedbackPoint +
          opinionPoint +
          do_workPoint +
          variant_textareaPoint +
          colorsPoint +
          feedback_textareaPoint +
          gidelinePoint +
          logo_reviewPoint;

        document.querySelector(
          '.middle_content[lesson="' + linkId + '"] .tasks_done'
        ).innerHTML = tasksDone;

        var tasksPoints =
          answearTask1_1 +
          answearTask1_2 +
          answearTask1_3 +
          answearTask1_4 +
          answearTask1_5 +
          answearTask1_7 +
          answearTask1_8 +
          answearTask1_9 +
          answearTask1_11 +
          answearTask1_13;
        document.querySelector(
          '.middle_content[lesson="' + linkId + '"] .right_answears'
        ).innerHTML = tasksPoints;

        var pointsTarget = 20;
        var pointspercentProgress = (100 / pointsTarget) * tasksPoints;
        pointspercentProgress = Math.round(pointspercentProgress);

        document.querySelector(
          '.middle_content[lesson="' + linkId + '"] .percent_aswear'
        ).innerHTML = pointspercentProgress;

        // -----------------
      } catch (error) {
        console.error(error);
      }
    })();
    // }
    // counter1 = counter1 + 1;
  }

  function sixthLesson(linkId) {
    // if (counter1 < 1) {
    (async () => {
      try {
        var firstLessonInfo = await getLessonInfo("6522b0ddc5a8a5ff923de4e8");

        var tab1BDVal = firstLessonInfo.fieldData.tab1;
        var tab2BDVal = firstLessonInfo.fieldData.tab2;
        // var tab3BDVal = firstLessonInfo.fieldData.tab3;

        function tuskDonePoint(point) {
          if (point === "" || point === undefined) {
            point = 0;
          } else {
            point = 1;
          }
          return point;
        }

        function pointsCounter(data, valuesToCheck) {
          if (data !== "" && data !== undefined) {
            var counter = 0;
            valuesToCheck.forEach(function (value) {
              if (data.includes(value)) {
                counter++;
              }
            });
          } else {
            counter = 0;
          }
          return counter;
        }

        if (tab1BDVal !== "" && tab1BDVal !== undefined) {
          var tab1BDParts = tab1BDVal.split("|/|");

          var cjmAnswear = tab1BDParts[1];
          var cjmPoint = cjmAnswear;
          cjmPoint = tuskDonePoint(cjmPoint);
          var task1_1 = ["three"];
          var answearTask1_1 = pointsCounter(cjmAnswear, task1_1);

          var before_buyAnswear = tab1BDParts[2];
          var before_buyPoint = before_buyAnswear;
          before_buyPoint = tuskDonePoint(before_buyPoint);
          var task1_2 = ["two"];
          var answearTask1_2 = pointsCounter(before_buyAnswear, task1_2);

          var whats_nextAnswear = tab1BDParts[3];
          var whats_nextPoint = whats_nextAnswear;
          whats_nextPoint = tuskDonePoint(whats_nextPoint);
          var task1_3 = ["five"];
          var answearTask1_3 = pointsCounter(whats_nextAnswear, task1_3);

          var task_doneAnswear = tab1BDParts[4];
          var task_donePoint = task_doneAnswear;
          task_donePoint = tuskDonePoint(task_donePoint);
          var task1_4 = ["two"];
          var answearTask1_4 = pointsCounter(task_doneAnswear, task1_4);

          var canalsAnswear = tab1BDParts[5];
          var canalsPoint = canalsAnswear;
          canalsPoint = tuskDonePoint(canalsPoint);
          var task1_5 = ["two", "three", "four", "six"];
          var answearTask1_5 = pointsCounter(canalsAnswear, task1_5);

          var bonus_canalsAnswear = tab1BDParts[6];
          var bonus_canalsPoint = bonus_canalsAnswear;
          bonus_canalsPoint = tuskDonePoint(bonus_canalsPoint);
          var task1_6 = ["two", "five"];
          var answearTask1_6 = pointsCounter(bonus_canalsAnswear, task1_6);

          var coworkAnswear = tab1BDParts[7];
          var coworkPoint = coworkAnswear;
          coworkPoint = tuskDonePoint(coworkPoint);
          var task1_7 = ["three"];
          var answearTask1_7 = pointsCounter(coworkAnswear, task1_7);

          var bloger_integrationAnswear = tab1BDParts[8];
          var bloger_integrationPoint = bloger_integrationAnswear;
          bloger_integrationPoint = tuskDonePoint(bloger_integrationPoint);
          var task1_8 = ["three"];
          var answearTask1_8 = pointsCounter(
            bloger_integrationAnswear,
            task1_8
          );

          var blogerAnswear = tab1BDParts[9];
          var blogerPoint = blogerAnswear;
          blogerPoint = tuskDonePoint(blogerPoint);
          var task1_9 = ["one"];
          var answearTask1_9 = pointsCounter(blogerAnswear, task1_9);

          var remarketing_bannerAnswear = tab1BDParts[10];
          var remarketing_bannerPoint = remarketing_bannerAnswear;
          remarketing_bannerPoint = tuskDonePoint(remarketing_bannerPoint);
          var task1_10 = ["three"];
          var answearTask1_10 = pointsCounter(
            remarketing_bannerAnswear,
            task1_10
          );

          var collabAnswear = tab1BDParts[11];
          var collabPoint = collabAnswear;
          collabPoint = tuskDonePoint(collabPoint);
          var task1_11 = ["two", "three"];
          var answearTask1_11 = pointsCounter(collabAnswear, task1_11);
        } else {
          cjmPoint = 0;
          before_buyPoint = 0;
          whats_nextPoint = 0;
          task_donePoint = 0;
          canalsPoint = 0;
          bonus_canalsPoint = 0;
          coworkPoint = 0;
          bloger_integrationPoint = 0;
          blogerPoint = 0;
          remarketing_bannerPoint = 0;
          answearTask1_1 = 0;
          answearTask1_2 = 0;
          answearTask1_3 = 0;
          answearTask1_4 = 0;
          answearTask1_5 = 0;
          answearTask1_6 = 0;
          answearTask1_7 = 0;
          answearTask1_8 = 0;
          answearTask1_9 = 0;
          answearTask1_10 = 0;
          answearTask1_11 = 0;
        }

        if (tab2BDVal !== "" && tab2BDVal !== undefined) {
          var tab2BDParts = tab2BDVal.split("|/|");

          var collab_audienceAnswear = tab2BDParts[1];
          var collab_audiencePoint = collab_audienceAnswear;
          collab_audiencePoint = tuskDonePoint(collab_audiencePoint);
          var task2_1 = ["two"];
          var answearTask2_1 = pointsCounter(collab_audienceAnswear, task2_1);

          var collab_ideaAnswear = tab2BDParts[2];
          var collab_ideaPoint = collab_ideaAnswear;
          collab_ideaPoint = tuskDonePoint(collab_ideaPoint);

          var conclusionsAnswear = tab2BDParts[3];
          var conclusionsPoint = conclusionsAnswear;
          conclusionsPoint = tuskDonePoint(conclusionsPoint);
        } else {
          collab_audiencePoint = 0;
          collab_ideaPoint = 0;
          conclusionsPoint = 0;
          answearTask2_1 = 0;
        }

        var tasksDone =
          cjmPoint +
          before_buyPoint +
          whats_nextPoint +
          task_donePoint +
          canalsPoint +
          bonus_canalsPoint +
          coworkPoint +
          bloger_integrationPoint +
          blogerPoint +
          remarketing_bannerPoint +
          collabPoint +
          collab_audiencePoint +
          collab_ideaPoint +
          conclusionsPoint;

        document.querySelector(
          '.middle_content[lesson="' + linkId + '"] .tasks_done'
        ).innerHTML = tasksDone;

        var tasksPoints =
          answearTask1_1 +
          answearTask1_2 +
          answearTask1_3 +
          answearTask1_4 +
          answearTask1_5 +
          answearTask1_6 +
          answearTask1_7 +
          answearTask1_8 +
          answearTask1_9 +
          answearTask1_10 +
          answearTask1_11 +
          answearTask2_1;
        document.querySelector(
          '.middle_content[lesson="' + linkId + '"] .right_answears'
        ).innerHTML = tasksPoints;

        var pointsTarget = 17;
        var pointspercentProgress = (100 / pointsTarget) * tasksPoints;
        pointspercentProgress = Math.round(pointspercentProgress);

        document.querySelector(
          '.middle_content[lesson="' + linkId + '"] .percent_aswear'
        ).innerHTML = pointspercentProgress;

        // -----------------
      } catch (error) {
        console.error(error);
      }
    })();
    // }
    // counter1 = counter1 + 1;
  }

  function fivethLesson(linkId) {
    // if (counter1 < 1) {
    (async () => {
      try {
        var firstLessonInfo = await getLessonInfo("6517f3b8afa18ec4281d2852");

        var tab1BDVal = firstLessonInfo.fieldData.tab1;
        var tab2BDVal = firstLessonInfo.fieldData.tab2;
        // var tab3BDVal = firstLessonInfo.fieldData.tab3;

        function tuskDonePoint(point) {
          if (point === "" || point === undefined) {
            point = 0;
          } else {
            point = 1;
          }
          return point;
        }

        function pointsCounter(data, valuesToCheck) {
          if (data !== "" && data !== undefined) {
            var counter = 0;
            valuesToCheck.forEach(function (value) {
              if (data.includes(value)) {
                counter++;
              }
            });
          } else {
            counter = 0;
          }
          return counter;
        }

        if (tab1BDVal !== "" && tab1BDVal !== undefined) {
          var tab1BDParts = tab1BDVal.split("|/|");
          // var tab1Progress = tab1BDParts[0];

          var brand_strategyAnswear = tab1BDParts[1];
          var brand_strategyPoint = brand_strategyAnswear;
          brand_strategyPoint = tuskDonePoint(brand_strategyPoint);
          var task1_1 = ["two"];
          var answearTask1_1 = pointsCounter(brand_strategyAnswear, task1_1);

          var marketing_structureAnswear = tab1BDParts[2];
          var marketing_structurePoint = marketing_structureAnswear;
          marketing_structurePoint = tuskDonePoint(marketing_structurePoint);
          var task1_2 = ["three"];
          var answearTask1_2 = pointsCounter(
            marketing_structureAnswear,
            task1_2
          );

          var structure_laterAnswear = tab1BDParts[3];
          var structure_laterPoint = structure_laterAnswear;
          structure_laterPoint = tuskDonePoint(structure_laterPoint);
          var task1_3 = ["one"];
          var answearTask1_3 = pointsCounter(structure_laterAnswear, task1_3);

          var specialistsAnswear = tab1BDParts[4];
          var specialistsPoint = specialistsAnswear;
          specialistsPoint = tuskDonePoint(specialistsPoint);

          var ecvisition_managerAnswear = tab1BDParts[5];
          var ecvisition_managerPoint = ecvisition_managerAnswear;
          ecvisition_managerPoint = tuskDonePoint(ecvisition_managerPoint);
          var task1_5 = ["four"];
          var answearTask1_5 = pointsCounter(
            ecvisition_managerAnswear,
            task1_5
          );

          var ecvisition_calcAnswear = tab1BDParts[6];
          var ecvisition_calcPoint = ecvisition_calcAnswear;
          ecvisition_calcPoint = tuskDonePoint(ecvisition_calcPoint);
          if (
            ecvisition_calcAnswear !== "" ||
            ecvisition_calcAnswear !== undefined
          ) {
            var task1_6 = "96000";
            var answearTask1_6;
            if (task1_6 === ecvisition_calcAnswear) {
              answearTask1_6 = 1;
            } else {
              answearTask1_6 = 0;
            }
          } else {
            answearTask1_6 = 0;
          }

          var manager_lvlAnswear = tab1BDParts[7];
          var manager_lvlPoint = manager_lvlAnswear;
          manager_lvlPoint = tuskDonePoint(manager_lvlPoint);
          var task1_7 = ["three"];
          var answearTask1_7 = pointsCounter(manager_lvlAnswear, task1_7);

          var ecvisition_quantityAnswear = tab1BDParts[8];
          var ecvisition_quantityPoint = ecvisition_quantityAnswear;
          ecvisition_quantityPoint = tuskDonePoint(ecvisition_quantityPoint);
          var task1_8 = ["two"];
          var answearTask1_8 = pointsCounter(
            ecvisition_quantityAnswear,
            task1_8
          );

          var ecvisition_budgetAnswear = tab1BDParts[9];
          var ecvisition_budgetPoint = ecvisition_budgetAnswear;
          ecvisition_budgetPoint = tuskDonePoint(ecvisition_budgetPoint);

          //
        } else {
          brand_strategyPoint = 0;
          marketing_structurePoint = 0;
          structure_laterPoint = 0;
          specialistsPoint = 0;
          ecvisition_managerPoint = 0;
          ecvisition_calcPoint = 0;
          manager_lvlPoint = 0;
          ecvisition_quantityPoint = 0;
          ecvisition_budgetPoint = 0;
          answearTask1_1 = 0;
          answearTask1_2 = 0;
          answearTask1_3 = 0;
          answearTask1_5 = 0;
          answearTask1_6 = 0;
          answearTask1_7 = 0;
          answearTask1_8 = 0;
        }

        if (tab2BDVal !== "" && tab2BDVal !== undefined) {
          var tab2BDParts = tab2BDVal.split("|/|");

          var requirementsAnswear = tab2BDParts[1];
          var requirementsPoint = requirementsAnswear;
          requirementsPoint = tuskDonePoint(requirementsPoint);
          var task2_1 = ["two"];
          var answearTask2_1 = pointsCounter(requirementsAnswear, task2_1);

          var canalsAnswear = tab2BDParts[2];
          var canalsPoint = canalsAnswear;
          canalsPoint = tuskDonePoint(canalsPoint);
          var task2_2 = ["one", "two", "three"];
          var answearTask2_2 = pointsCounter(canalsAnswear, task2_2);

          var test_taskAnswear = tab2BDParts[3];
          var test_taskPoint = test_taskAnswear;
          test_taskPoint = tuskDonePoint(test_taskPoint);

          var call_startAnswear = tab2BDParts[4];
          var call_startPoint = call_startAnswear;
          call_startPoint = tuskDonePoint(call_startPoint);
          var task2_4 = ["three", "five"];
          var answearTask2_4 = pointsCounter(call_startAnswear, task2_4);

          var skills_reviewAnswear = tab2BDParts[5];
          var skills_reviewPoint = skills_reviewAnswear;
          skills_reviewPoint = tuskDonePoint(skills_reviewPoint);
          var task2_5 = ["two", "four", "five"];
          var answearTask2_5 = pointsCounter(skills_reviewAnswear, task2_5);

          var valuesAnswear = tab2BDParts[6];
          var valuesPoint = valuesAnswear;
          valuesPoint = tuskDonePoint(valuesPoint);
          var task2_6 = ["one", "two", "four"];
          var answearTask2_6 = pointsCounter(valuesAnswear, task2_6);

          var dmytro_hireAnswear = tab2BDParts[7];
          var dmytro_hirePoint = dmytro_hireAnswear;
          dmytro_hirePoint = tuskDonePoint(dmytro_hirePoint);
          var task2_7 = ["two"];
          var answearTask2_7 = pointsCounter(dmytro_hireAnswear, task2_7);

          var analytics_interviewAnswear = tab2BDParts[8];
          var analytics_interviewPoint = analytics_interviewAnswear;
          analytics_interviewPoint = tuskDonePoint(analytics_interviewPoint);
          var task2_8 = ["three"];
          var answearTask2_8 = pointsCounter(
            analytics_interviewAnswear,
            task2_8
          );

          var mail_yesAnswear = tab2BDParts[9];
          var mail_yesPoint = mail_yesAnswear;
          mail_yesPoint = tuskDonePoint(mail_yesPoint);
          var task2_9 = ["one"];
          var answearTask2_9 = pointsCounter(mail_yesAnswear, task2_9);

          var mail_noAnswear = tab2BDParts[10];
          var mail_noPoint = mail_noAnswear;
          mail_noPoint = tuskDonePoint(mail_noPoint);
          var task2_10 = ["two"];
          var answearTask2_10 = pointsCounter(mail_noAnswear, task2_10);

          var hiring_conclusionsAnswear = tab2BDParts[11];
          var hiring_conclusionsPoint = hiring_conclusionsAnswear;
          hiring_conclusionsPoint = tuskDonePoint(hiring_conclusionsPoint);
        } else {
          requirementsPoint = 0;
          canalsPoint = 0;
          test_taskPoint = 0;
          call_startPoint = 0;
          skills_reviewPoint = 0;
          valuesPoint = 0;
          dmytro_hirePoint = 0;
          analytics_interviewPoint = 0;
          mail_yesPoint = 0;
          mail_noPoint = 0;
          hiring_conclusionsPoint = 0;
          answearTask2_1 = 0;
          answearTask2_2 = 0;
          answearTask2_4 = 0;
          answearTask2_5 = 0;
          answearTask2_6 = 0;
          answearTask2_7 = 0;
          answearTask2_8 = 0;
          answearTask2_9 = 0;
          answearTask2_10 = 0;
        }

        var tasksDone =
          brand_strategyPoint +
          marketing_structurePoint +
          structure_laterPoint +
          specialistsPoint +
          ecvisition_managerPoint +
          ecvisition_calcPoint +
          manager_lvlPoint +
          ecvisition_quantityPoint +
          ecvisition_budgetPoint +
          requirementsPoint +
          canalsPoint +
          test_taskPoint +
          call_startPoint +
          skills_reviewPoint +
          valuesPoint +
          dmytro_hirePoint +
          analytics_interviewPoint +
          mail_yesPoint +
          mail_noPoint +
          hiring_conclusionsPoint;
        document.querySelector(
          '.middle_content[lesson="' + linkId + '"] .tasks_done'
        ).innerHTML = tasksDone;

        var tasksPoints =
          answearTask1_1 +
          answearTask1_2 +
          answearTask1_3 +
          answearTask1_5 +
          answearTask1_6 +
          answearTask1_7 +
          answearTask1_8 +
          answearTask2_1 +
          answearTask2_2 +
          answearTask2_4 +
          answearTask2_5 +
          answearTask2_6 +
          answearTask2_7 +
          answearTask2_8 +
          answearTask2_9 +
          answearTask2_10;

        document.querySelector(
          '.middle_content[lesson="' + linkId + '"] .right_answears'
        ).innerHTML = tasksPoints;

        var pointsTarget = 23;
        var pointspercentProgress = (100 / pointsTarget) * tasksPoints;
        pointspercentProgress = Math.round(pointspercentProgress);

        document.querySelector(
          '.middle_content[lesson="' + linkId + '"] .percent_aswear'
        ).innerHTML = pointspercentProgress;

        // console.log(tasksPoints);

        // -----------------
      } catch (error) {
        console.error(error);
      }
    })();
    // }
    // counter1 = counter1 + 1;
  }

  function fourthLesson(linkId) {
    // if (counter1 < 1) {
    (async () => {
      try {
        var firstLessonInfo = await getLessonInfo("6517f3b8afa18ec4281d283c");

        var tab1BDVal = firstLessonInfo.fieldData.tab1;
        var tab2BDVal = firstLessonInfo.fieldData.tab2;
        var tab3BDVal = firstLessonInfo.fieldData.tab3;

        function tuskDonePoint(point) {
          if (point === "" || point === undefined) {
            point = 0;
          } else {
            point = 1;
          }
          return point;
        }

        function pointsCounter(data, valuesToCheck) {
          if (data !== "" && data !== undefined) {
            var counter = 0;
            valuesToCheck.forEach(function (value) {
              if (data.includes(value)) {
                counter++;
              }
            });
          } else {
            counter = 0;
          }
          return counter;
        }

        if (tab1BDVal !== "" && tab1BDVal !== undefined) {
          var tab1BDParts = tab1BDVal.split("|/|");
          // var tab1Progress = tab1BDParts[0];

          var importantAnswear = tab1BDParts[1];
          var importantPoint = importantAnswear;
          importantPoint = tuskDonePoint(importantPoint);
          var task1_1 = ["two"];
          var answearTask1_1 = pointsCounter(importantAnswear, task1_1);

          var focusAnswear = tab1BDParts[2];
          var focusPoint = focusAnswear;
          focusPoint = tuskDonePoint(focusPoint);
          var task1_2 = ["three"];
          var answearTask1_2 = pointsCounter(focusAnswear, task1_2);

          var pricingAnswear = tab1BDParts[3];
          var pricingPoint = pricingAnswear;
          pricingPoint = tuskDonePoint(pricingPoint);
          var task1_3 = ["one"];
          var answearTask1_3 = pointsCounter(pricingAnswear, task1_3);

          var pricing_strategyAnswear = tab1BDParts[4];
          var pricing_strategyPoint = pricing_strategyAnswear;
          pricing_strategyPoint = tuskDonePoint(pricing_strategyPoint);
          var task1_4 = ["four"];
          var answearTask1_4 = pointsCounter(pricing_strategyAnswear, task1_4);

          var competitors_pricesAnswear = tab1BDParts[5];
          var competitors_pricesPoint = competitors_pricesAnswear;
          competitors_pricesPoint = tuskDonePoint(competitors_pricesPoint);
          var task1_5 = ["one", "two", "three", "four", "five"];
          var answearTask1_5 = pointsCounter(
            competitors_pricesAnswear,
            task1_5
          );

          var ab_pricingAnswear = tab1BDParts[6];
          var ab_pricingPoint = ab_pricingAnswear;
          ab_pricingPoint = tuskDonePoint(ab_pricingPoint);
          var task1_6 = ["four"];
          var answearTask1_6 = pointsCounter(ab_pricingAnswear, task1_6);

          var pricing_hypothesisAnswear = tab1BDParts[7];
          var pricing_hypothesisPoint = pricing_hypothesisAnswear;
          pricing_hypothesisPoint = tuskDonePoint(pricing_hypothesisPoint);
          var task1_7 = ["five"];
          var answearTask1_7 = pointsCounter(
            pricing_hypothesisAnswear,
            task1_7
          );

          var pricing_rangeAnswear = tab1BDParts[8];
          var pricing_rangePoint = pricing_rangeAnswear;
          pricing_rangePoint = tuskDonePoint(pricing_rangePoint);
          var task1_8 = ["three"];
          var answearTask1_8 = pointsCounter(pricing_rangeAnswear, task1_8);

          var pricing_calcAnswear = tab1BDParts[9];
          var pricing_calcPoint = pricing_calcAnswear;
          pricing_calcPoint = tuskDonePoint(pricing_calcPoint);
          if (pricing_calcAnswear !== "" || pricing_calcAnswear !== undefined) {
            var task1_9 = "30";
            var answearTask1_9;
            if (task1_9 === pricing_calcAnswear) {
              answearTask1_9 = 1;
            } else {
              answearTask1_9 = 0;
            }
          } else {
            answearTask1_9 = 0;
          }

          var ab_resultsAnswear = tab1BDParts[10];
          var ab_resultsPoint = ab_resultsAnswear;
          ab_resultsPoint = tuskDonePoint(ab_resultsPoint);
          var task1_10 = ["three"];
          var answearTask1_10 = pointsCounter(ab_resultsAnswear, task1_10);

          var ab_results_moreAnswear = tab1BDParts[11];
          var ab_results_morePoint = ab_results_moreAnswear;
          ab_results_morePoint = tuskDonePoint(ab_results_morePoint);
          var task1_11 = ["one"];
          var answearTask1_11 = pointsCounter(ab_results_moreAnswear, task1_11);
        } else {
          importantPoint = 0;
          focusPoint = 0;
          pricingPoint = 0;
          pricing_strategyPoint = 0;
          competitors_pricesPoint = 0;
          ab_pricingPoint = 0;
          pricing_hypothesisPoint = 0;
          pricing_rangePoint = 0;
          pricing_calcPoint = 0;
          ab_resultsPoint = 0;
          ab_results_morePoint = 0;
          answearTask1_1 = 0;
          answearTask1_2 = 0;
          answearTask1_3 = 0;
          answearTask1_4 = 0;
          answearTask1_5 = 0;
          answearTask1_6 = 0;
          answearTask1_7 = 0;
          answearTask1_8 = 0;
          answearTask1_9 = 0;
          answearTask1_10 = 0;
          answearTask1_11 = 0;
        }

        if (tab2BDVal !== "" && tab2BDVal !== undefined) {
          var tab2BDParts = tab2BDVal.split("|/|");

          var positioningAnswear = tab2BDParts[1];
          var positioningPoint = positioningAnswear;
          positioningPoint = tuskDonePoint(positioningPoint);
          var task2_1 = ["one"];
          var answearTask2_1 = pointsCounter(positioningAnswear, task2_1);

          var positioning_howAnswear = tab2BDParts[2];
          var positioning_howPoint = positioning_howAnswear;
          positioning_howPoint = tuskDonePoint(positioning_howPoint);
          var task2_2 = ["one"];
          var answearTask2_2 = pointsCounter(positioning_howAnswear, task2_2);

          var employeesAnswear = tab2BDParts[3];
          var employeesPoint = employeesAnswear;
          employeesPoint = tuskDonePoint(employeesPoint);
          var task2_3 = ["two", "three"];
          var answearTask2_3 = pointsCounter(employeesAnswear, task2_3);

          var timingAnswear = tab2BDParts[4];
          var timingPoint = timingAnswear;
          timingPoint = tuskDonePoint(timingPoint);
          var task2_4 = ["three"];
          var answearTask2_4 = pointsCounter(timingAnswear, task2_4);

          var you_doAnswear = tab2BDParts[5];
          var you_doPoint = you_doAnswear;
          you_doPoint = tuskDonePoint(you_doPoint);
          var task2_5 = ["two"];
          var answearTask2_5 = pointsCounter(you_doAnswear, task2_5);

          var competitors_sitesAnswear = tab2BDParts[6];
          var competitors_sitesPoint = competitors_sitesAnswear;
          competitors_sitesPoint = tuskDonePoint(competitors_sitesPoint);
          var task2_6 = ["two", "four"];
          var answearTask2_6 = pointsCounter(competitors_sitesAnswear, task2_6);

          var target_audienceAnswear = tab2BDParts[7];
          var target_audiencePoint = target_audienceAnswear;
          target_audiencePoint = tuskDonePoint(target_audiencePoint);
          var task2_7 = ["two"];
          var answearTask2_7 = pointsCounter(target_audienceAnswear, task2_7);

          var whatAnswear = tab2BDParts[8];
          var whatPoint = whatAnswear;
          whatPoint = tuskDonePoint(whatPoint);
          var task2_8 = ["two"];
          var answearTask2_8 = pointsCounter(whatAnswear, task2_8);

          var what_auditAnswear = tab2BDParts[9];
          var what_auditPoint = what_auditAnswear;
          what_auditPoint = tuskDonePoint(what_auditPoint);
          var task2_9 = ["one"];
          var answearTask2_9 = pointsCounter(what_auditAnswear, task2_9);

          var howAnswear = tab2BDParts[10];
          var howPoint = howAnswear;
          howPoint = tuskDonePoint(howPoint);
          var task2_10 = ["two"];
          var answearTask2_10 = pointsCounter(howAnswear, task2_10);

          var whyAnswear = tab2BDParts[11];
          var whyPoint = whyAnswear;
          whyPoint = tuskDonePoint(whyPoint);
          var task2_11 = ["one"];
          var answearTask2_11 = pointsCounter(whyAnswear, task2_11);

          var positioning_textAnswear = tab2BDParts[12];
          var positioning_textPoint = positioning_textAnswear;
          positioning_textPoint = tuskDonePoint(positioning_textPoint);

          var visionAnswear = tab2BDParts[13];
          var visionPoint = visionAnswear;
          visionPoint = tuskDonePoint(visionPoint);
          var task2_13 = ["two"];
          var answearTask2_13 = pointsCounter(visionAnswear, task2_13);

          var positioning_whyAnswear = tab2BDParts[14];
          var positioning_whyPoint = positioning_whyAnswear;
          positioning_whyPoint = tuskDonePoint(positioning_whyPoint);
          var task2_14 = ["three"];
          var answearTask2_14 = pointsCounter(positioning_whyAnswear, task2_14);

          var values_listAnswear = tab2BDParts[15];
          var values_listPoint = values_listAnswear;
          values_listPoint = tuskDonePoint(values_listPoint);
          var task2_15 = ["three", "five", "six"];
          var answearTask2_15 = pointsCounter(values_listAnswear, task2_15);

          var strategyAnswear = tab2BDParts[16];
          var strategyPoint = strategyAnswear;
          strategyPoint = tuskDonePoint(strategyPoint);

          var archetypeAnswear = tab2BDParts[17];
          var archetypePoint = archetypeAnswear;
          archetypePoint = tuskDonePoint(archetypePoint);
          var task2_17 = ["two"];
          var answearTask2_17 = pointsCounter(archetypeAnswear, task2_17);

          var archetype_textareaAnswear = tab2BDParts[18];
          var archetype_textareaPoint = archetype_textareaAnswear;
          archetype_textareaPoint = tuskDonePoint(archetype_textareaPoint);

          var emotional_characteristicsAnswear = tab2BDParts[19];
          var emotional_characteristicsPoint = emotional_characteristicsAnswear;
          emotional_characteristicsPoint = tuskDonePoint(
            emotional_characteristicsPoint
          );
          var task2_19 = ["one", "three"];
          var answearTask2_19 = pointsCounter(
            emotional_characteristicsAnswear,
            task2_19
          );

          var positioning_textareaAnswear = tab2BDParts[20];
          var positioning_textareaPoint = positioning_textareaAnswear;
          positioning_textareaPoint = tuskDonePoint(positioning_textareaPoint);
        } else {
          positioningPoint = 0;
          positioning_howPoint = 0;
          employeesPoint = 0;
          timingPoint = 0;
          you_doPoint = 0;
          competitors_sitesPoint = 0;
          target_audiencePoint = 0;
          whatPoint = 0;
          what_auditPoint = 0;
          howPoint = 0;
          whyPoint = 0;
          positioning_textPoint = 0;
          visionPoint = 0;
          positioning_whyPoint = 0;
          values_listPoint = 0;
          strategyPoint = 0;
          archetypePoint = 0;
          archetype_textareaPoint = 0;
          emotional_characteristicsPoint = 0;
          positioning_textareaPoint = 0;
          answearTask2_1 = 0;
          answearTask2_2 = 0;
          answearTask2_3 = 0;
          answearTask2_4 = 0;
          answearTask2_5 = 0;
          answearTask2_6 = 0;
          answearTask2_7 = 0;
          answearTask2_8 = 0;
          answearTask2_9 = 0;
          answearTask2_10 = 0;
          answearTask2_11 = 0;
          answearTask2_13 = 0;
          answearTask2_14 = 0;
          answearTask2_15 = 0;
          answearTask2_17 = 0;
          answearTask2_19 = 0;
        }

        if (tab3BDVal !== "" && tab3BDVal !== undefined) {
          var tab3BDParts = tab3BDVal.split("|/|");

          var retention_monthAnswear = tab3BDParts[1];
          var retention_monthPoint = retention_monthAnswear;
          retention_monthPoint = tuskDonePoint(retention_monthPoint);
          if (
            retention_monthAnswear !== "" ||
            retention_monthAnswear !== undefined
          ) {
            var task3_1 = "647";
            var answearTask3_1;
            if (task3_1 === retention_monthAnswear) {
              answearTask3_1 = 1;
            } else {
              answearTask3_1 = 0;
            }
          } else {
            answearTask3_1 = 0;
          }

          var priceAnswear = tab3BDParts[2];
          var pricePoint = priceAnswear;
          pricePoint = tuskDonePoint(pricePoint);
          var task3_2 = ["three"];
          var answearTask3_2 = pointsCounter(priceAnswear, task3_2);

          var retention_textareaAnswear = tab3BDParts[3];
          var retention_textareaPoint = retention_textareaAnswear;
          retention_textareaPoint = tuskDonePoint(retention_textareaPoint);
        } else {
          retention_monthPoint = 0;
          pricePoint = 0;
          retention_textareaPoint = 0;
          answearTask3_1 = 0;
          answearTask3_2 = 0;
        }

        var tasksDone =
          importantPoint +
          focusPoint +
          pricingPoint +
          pricing_strategyPoint +
          competitors_pricesPoint +
          ab_pricingPoint +
          pricing_hypothesisPoint +
          pricing_rangePoint +
          pricing_calcPoint +
          ab_resultsPoint +
          ab_results_morePoint +
          positioningPoint +
          positioning_howPoint +
          employeesPoint +
          timingPoint +
          you_doPoint +
          competitors_sitesPoint +
          target_audiencePoint +
          whatPoint +
          what_auditPoint +
          howPoint +
          whyPoint +
          positioning_textPoint +
          visionPoint +
          positioning_whyPoint +
          values_listPoint +
          strategyPoint +
          archetypePoint +
          archetype_textareaPoint +
          emotional_characteristicsPoint +
          positioning_textareaPoint +
          retention_monthPoint +
          pricePoint +
          retention_textareaPoint;

        document.querySelector(
          '.middle_content[lesson="' + linkId + '"] .tasks_done'
        ).innerHTML = tasksDone;

        var tasksPoints =
          answearTask1_1 +
          answearTask1_2 +
          answearTask1_3 +
          answearTask1_4 +
          answearTask1_5 +
          answearTask1_6 +
          answearTask1_7 +
          answearTask1_8 +
          answearTask1_9 +
          answearTask1_10 +
          answearTask1_11 +
          answearTask2_1 +
          answearTask2_2 +
          answearTask2_3 +
          answearTask2_4 +
          answearTask2_5 +
          answearTask2_6 +
          answearTask2_7 +
          answearTask2_8 +
          answearTask2_9 +
          answearTask2_10 +
          answearTask2_11 +
          answearTask2_13 +
          answearTask2_14 +
          answearTask2_15 +
          answearTask2_17 +
          answearTask2_19 +
          answearTask3_1 +
          answearTask3_2;

        document.querySelector(
          '.middle_content[lesson="' + linkId + '"] .right_answears'
        ).innerHTML = tasksPoints;

        var pointsTarget = 38;
        var pointspercentProgress = (100 / pointsTarget) * tasksPoints;
        pointspercentProgress = Math.round(pointspercentProgress);

        document.querySelector(
          '.middle_content[lesson="' + linkId + '"] .percent_aswear'
        ).innerHTML = pointspercentProgress;

        // console.log(tasksPoints);

        // -----------------
      } catch (error) {
        console.error(error);
      }
    })();
    // }
    // counter1 = counter1 + 1;
  }

  function thirdLesson(linkId) {
    // if (counter1 < 1) {
    (async () => {
      try {
        var firstLessonInfo = await getLessonInfo("6517f3b8afa18ec4281d2823");

        var tab1BDVal = firstLessonInfo.fieldData.tab1;
        var tab2BDVal = firstLessonInfo.fieldData.tab2;
        var tab3BDVal = firstLessonInfo.fieldData.tab3;

        function tuskDonePoint(point) {
          if (point === "" || point === undefined) {
            point = 0;
          } else {
            point = 1;
          }
          return point;
        }

        function pointsCounter(data, valuesToCheck) {
          if (data !== "" && data !== undefined) {
            var counter = 0;
            valuesToCheck.forEach(function (value) {
              if (data.includes(value)) {
                counter++;
              }
            });
          } else {
            counter = 0;
          }
          return counter;
        }

        if (tab1BDVal !== "" && tab1BDVal !== undefined) {
          var tab1BDParts = tab1BDVal.split("|/|");
          // var tab1Progress = tab1BDParts[0];

          var ta_infoAnswear = tab1BDParts[1];
          var ta_infoPoint = ta_infoAnswear;
          ta_infoPoint = tuskDonePoint(ta_infoPoint);
          var task1_1 = ["three"];
          var answearTask1_1 = pointsCounter(ta_infoAnswear, task1_1);

          var start_researchAnswear = tab1BDParts[2];
          var start_researchPoint = start_researchAnswear;
          start_researchPoint = tuskDonePoint(start_researchPoint);
          var task1_2 = ["one"];
          var answearTask1_2 = pointsCounter(start_researchAnswear, task1_2);

          var castdevsAnswear = tab1BDParts[3];
          var castdevsPoint = castdevsAnswear;
          castdevsPoint = tuskDonePoint(castdevsPoint);
          var task1_3 = ["one"];
          var answearTask1_3 = pointsCounter(castdevsAnswear, task1_3);

          var interviewAnswear = tab1BDParts[4];
          var interviewPoint = interviewAnswear;
          interviewPoint = tuskDonePoint(interviewPoint);
          var task1_4 = ["three"];
          var answearTask1_4 = pointsCounter(interviewAnswear, task1_4);

          var retention_3_calcAnswear = tab1BDParts[5];
          var retentionPoint = retention_3_calcAnswear;
          retentionPoint = tuskDonePoint(retentionPoint);
          if (
            retention_3_calcAnswear !== "" ||
            retention_3_calcAnswear !== undefined
          ) {
            var task1_5 = "462";
            var answearTask1_5;
            if (task1_5 === retention_3_calcAnswear) {
              answearTask1_5 = 1;
            } else {
              answearTask1_5 = 0;
            }
          } else {
            answearTask1_5 = 0;
          }

          var fine_questionsAnswear = tab1BDParts[6];
          var fine_questionsPoint = fine_questionsAnswear;
          fine_questionsPoint = tuskDonePoint(fine_questionsPoint);
          var task1_6 = ["one", "two", "three", "four"];
          var answearTask1_6 = pointsCounter(fine_questionsAnswear, task1_6);

          var segment_interviewAnswear = tab1BDParts[7];
          var segment_interviewPoint = segment_interviewAnswear;
          segment_interviewPoint = tuskDonePoint(segment_interviewPoint);
          var task1_7 = ["two"];
          var answearTask1_7 = pointsCounter(segment_interviewAnswear, task1_7);
        } else {
          ta_infoPoint = 0;
          start_researchPoint = 0;
          castdevsPoint = 0;
          interviewPoint = 0;
          retentionPoint = 0;
          fine_questionsPoint = 0;
          segment_interviewPoint = 0;
          answearTask1_1 = 0;
          answearTask1_2 = 0;
          answearTask1_3 = 0;
          answearTask1_4 = 0;
          answearTask1_5 = 0;
          answearTask1_6 = 0;
          answearTask1_7 = 0;
        }

        if (tab2BDVal !== "" && tab2BDVal !== undefined) {
          var tab2BDParts = tab2BDVal.split("|/|");
          // var tab2Progress = tab2BDParts[0];

          var common_charAnswear = tab2BDParts[1];
          var common_charPoint = common_charAnswear;
          common_charPoint = tuskDonePoint(common_charPoint);
          var task2_1 = ["one", "three", "four", "five"];
          var answearTask2_1 = pointsCounter(common_charAnswear, task2_1);

          var mail_inviteAnswear = tab2BDParts[2];
          var mail_invitePoint = mail_inviteAnswear;
          mail_invitePoint = tuskDonePoint(mail_invitePoint);
          var task2_2 = ["three"];
          var answearTask2_2 = pointsCounter(mail_inviteAnswear, task2_2);

          var anket_problemAnswear = tab2BDParts[3];
          var anket_problemPoint = anket_problemAnswear;
          anket_problemPoint = tuskDonePoint(anket_problemPoint);
          var task2_3 = ["two", "three", "five"];
          var answearTask2_3 = pointsCounter(anket_problemAnswear, task2_3);

          var right_fixAnswear = tab2BDParts[4];
          var right_fixPoint = right_fixAnswear;
          right_fixPoint = tuskDonePoint(right_fixPoint);
          var task2_4 = ["two"];
          var answearTask2_4 = pointsCounter(right_fixAnswear, task2_4);

          var sample_calcAnswear = tab2BDParts[5];
          var sample_calcPoint = sample_calcAnswear;
          sample_calcPoint = tuskDonePoint(sample_calcPoint);
          if (sample_calcAnswear !== "" || sample_calcAnswear !== undefined) {
            var task2_5 = "364";
            var answearTask2_5;
            if (task2_5 === sample_calcAnswear) {
              answearTask2_5 = 1;
            } else {
              answearTask2_5 = 0;
            }
          } else {
            answearTask2_5 = 0;
          }
        } else {
          common_charPoint = 0;
          mail_invitePoint = 0;
          anket_problemPoint = 0;
          right_fixPoint = 0;
          sample_calcPoint = 0;
          answearTask2_1 = 0;
          answearTask2_2 = 0;
          answearTask2_3 = 0;
          answearTask2_4 = 0;
          answearTask2_5 = 0;
        }

        if (tab3BDVal !== "" && tab3BDVal !== undefined) {
          var tab3BDParts = tab3BDVal.split("|/|");

          var next_researchAnswear = tab3BDParts[1];
          var next_researchPoint = next_researchAnswear;
          next_researchPoint = tuskDonePoint(next_researchPoint);
          var task3_1 = ["one"];
          var answearTask3_1 = pointsCounter(next_researchAnswear, task3_1);

          var audienceAnswear = tab3BDParts[2];
          var audiencePoint = audienceAnswear;
          audiencePoint = tuskDonePoint(audiencePoint);
          var task3_2 = ["two", "four"];
          var answearTask3_2 = pointsCounter(audienceAnswear, task3_2);

          var portretAnswear = tab3BDParts[3];
          var portretPoint = portretAnswear;
          portretPoint = tuskDonePoint(portretPoint);
          var task3_3 = ["one", "two", "three", "five", "six"];
          var answearTask3_3 = pointsCounter(portretAnswear, task3_3);
        } else {
          next_researchPoint = 0;
          audiencePoint = 0;
          portretPoint = 0;
          answearTask3_1 = 0;
          answearTask3_2 = 0;
          answearTask3_3 = 0;
        }

        var tasksDone =
          ta_infoPoint +
          start_researchPoint +
          castdevsPoint +
          interviewPoint +
          retentionPoint +
          fine_questionsPoint +
          segment_interviewPoint +
          common_charPoint +
          mail_invitePoint +
          anket_problemPoint +
          right_fixPoint +
          sample_calcPoint +
          next_researchPoint +
          audiencePoint +
          portretPoint;

        if (user_email === "aliona.diatlovskaya@gmail.com" && tasksDone === 0) {
          tasksDone = 15;
        }
        document.querySelector(
          '.middle_content[lesson="' + linkId + '"] .tasks_done'
        ).innerHTML = tasksDone;

        var tasksPoints =
          answearTask1_1 +
          answearTask1_2 +
          answearTask1_3 +
          answearTask1_4 +
          answearTask1_5 +
          answearTask1_6 +
          answearTask1_7 +
          answearTask2_1 +
          answearTask2_2 +
          answearTask2_3 +
          answearTask2_4 +
          answearTask2_5 +
          answearTask3_1 +
          answearTask3_2 +
          answearTask3_3;

        if (
          user_email === "aliona.diatlovskaya@gmail.com" &&
          tasksPoints === 0
        ) {
          tasksPoints = "26";
        }

        document.querySelector(
          '.middle_content[lesson="' + linkId + '"] .right_answears'
        ).innerHTML = tasksPoints;

        var pointsTarget = 28;
        var pointspercentProgress = (100 / pointsTarget) * tasksPoints;
        pointspercentProgress = Math.round(pointspercentProgress);

        document.querySelector(
          '.middle_content[lesson="' + linkId + '"] .percent_aswear'
        ).innerHTML = pointspercentProgress;

        // console.log(tasksPoints);

        // -----------------
      } catch (error) {
        console.error(error);
      }
    })();
    // }
    // counter1 = counter1 + 1;
  }

  function secondLesson(linkId) {
    // if (counter1 < 1) {
    (async () => {
      try {
        var firstLessonInfo = await getLessonInfo("6517f3b8afa18ec4281d2807");

        var tab1BDVal = firstLessonInfo.fieldData.tab1;
        var tab2BDVal = firstLessonInfo.fieldData.tab2;

        function tuskDonePoint(point) {
          if (point === "" || point === undefined) {
            point = 0;
          } else {
            point = 1;
          }
          return point;
        }

        function pointsCounter(data, valuesToCheck) {
          if (data !== "" && data !== undefined) {
            var counter = 0; // Початкове значення лічильника
            valuesToCheck.forEach(function (value) {
              if (data.includes(value)) {
                counter++; // Збільшуємо лічильник на 1, якщо знайдено співпадіння
              }
            });
          } else {
            counter = 0;
          }
          return counter;
        }

        if (tab1BDVal !== "" && tab1BDVal !== undefined) {
          var tab1BDParts = tab1BDVal.split("|/|");
          var tab1Progress = tab1BDParts[0];

          var unicornAnswear = tab1BDParts[1];
          var unicornPoint = unicornAnswear;
          unicornPoint = tuskDonePoint(unicornPoint);
          var task1_1 = ["three"];
          var answearTask1_1 = pointsCounter(unicornAnswear, task1_1);

          var indexesAnswear = tab1BDParts[2];
          var indexesPoint = indexesAnswear;
          indexesPoint = tuskDonePoint(indexesPoint);
          var task1_2 = ["one", "two", "three"];
          var answearTask1_2 = pointsCounter(indexesAnswear, task1_2);

          var tam_choiceAnswear = tab1BDParts[3];
          var tam_choicePoint = tam_choiceAnswear;
          tam_choicePoint = tuskDonePoint(tam_choicePoint);
          var task1_3 = ["three"];
          var answearTask1_3 = pointsCounter(tam_choiceAnswear, task1_3);

          var find_unicornAnswear = tab1BDParts[4];
          var find_unicornPoint = find_unicornAnswear;
          find_unicornPoint = tuskDonePoint(find_unicornPoint);
          var task1_4 = ["three"];
          var answearTask1_4 = pointsCounter(find_unicornAnswear, task1_4);

          var conflictAnswears = tab1BDParts[5];

          var conflictFirstAnswear;
          var conflictSecondAnswear;
          var conflictThirdAnswear;

          if (conflictAnswears !== "" && conflictAnswears !== undefined) {
            var conflictAnswearsVal = conflictAnswears.split("*");
            conflictFirstAnswear = conflictAnswearsVal[0];
            conflictSecondAnswear = conflictAnswearsVal[1];
            conflictThirdAnswear = conflictAnswearsVal[2];
          }
          var conflictFirstPoint = conflictFirstAnswear;
          conflictFirstPoint = tuskDonePoint(conflictFirstPoint);
          var conflictSecondPoint;
          var conflictThirdPoint;
          if (conflictFirstAnswear === "two") {
            conflictSecondPoint = conflictSecondAnswear;
            conflictSecondPoint = tuskDonePoint(conflictSecondPoint);
            conflictThirdPoint = conflictThirdAnswear;
            conflictThirdPoint = tuskDonePoint(conflictThirdPoint);
          } else {
            conflictSecondPoint = 1;
            conflictThirdPoint = 1;
          }

          var tam_calcAnswear = tab1BDParts[6];
          var tam_calcPoint = tam_calcAnswear;
          tam_calcPoint = tuskDonePoint(tam_calcPoint);
          if (tam_calcAnswear !== "" || tam_calcAnswear !== undefined) {
            var task1_8 = "5823341";
            var answearTask1_8;
            if (task1_8 === tam_calcAnswear) {
              answearTask1_8 = 1;
            } else {
              answearTask1_8 = 0;
            }
          } else {
            answearTask1_8 = 0;
          }

          var samAnswear = tab1BDParts[7];
          var samPoint = samAnswear;
          samPoint = tuskDonePoint(samPoint);
          var task1_9 = ["two"];
          var answearTask1_9 = pointsCounter(samAnswear, task1_9);

          var sam_calcAnswear = tab1BDParts[8];
          var sam_calcPoint = sam_calcAnswear;
          sam_calcPoint = tuskDonePoint(sam_calcPoint);
          if (tam_calcAnswear !== "" || sam_calcAnswear !== undefined) {
            var task1_10 = "2891606";
            var answearTask1_10;
            if (task1_10 === sam_calcAnswear) {
              answearTask1_10 = 1;
            } else {
              answearTask1_10 = 0;
            }
          } else {
            answearTask1_10 = 0;
          }

          var sam_ukAnswear = tab1BDParts[9];
          var sam_ukPoint = sam_ukAnswear;
          sam_ukPoint = tuskDonePoint(sam_ukPoint);
          var task1_11 = ["three"];
          var answearTask1_11 = pointsCounter(sam_ukAnswear, task1_11);

          var unicorn_ukAnswear = tab1BDParts[10];
          var unicorn_ukPoint = unicorn_ukAnswear;
          unicorn_ukPoint = tuskDonePoint(unicorn_ukPoint);
          var task1_12 = ["two"];
          var answearTask1_12 = pointsCounter(unicorn_ukAnswear, task1_12);

          var macroAnswear = tab1BDParts[11];
          var macroPoint = macroAnswear;
          macroPoint = tuskDonePoint(macroPoint);
          var task1_13 = ["three"];
          var answearTask1_13 = pointsCounter(macroAnswear, task1_13);

          var macro_factorsAnswear = tab1BDParts[12];
          var macro_factorsPoint = macro_factorsAnswear;
          macro_factorsPoint = tuskDonePoint(macro_factorsPoint);
          var task1_14 = ["one", "two", "three"];
          var answearTask1_14 = pointsCounter(macro_factorsAnswear, task1_14);

          var on_businessAnswear = tab1BDParts[13];
          var on_businessPoint = on_businessAnswear;
          on_businessPoint = tuskDonePoint(on_businessPoint);
          var task1_15 = ["three"];
          var answearTask1_15 = pointsCounter(on_businessAnswear, task1_15);

          var for_olluAnswear = tab1BDParts[14];
          var for_olluPoint = for_olluAnswear;
          for_olluPoint = tuskDonePoint(for_olluPoint);

          // var for_olluAnswear = tab1BDVal[14];
        } else {
          tab1Progress = 0;
          unicornPoint = 0;
          indexesPoint = 0;
          tam_choicePoint = 0;
          find_unicornPoint = 0;
          conflictFirstPoint = 0;
          conflictSecondPoint = 0;
          conflictThirdPoint = 0;
          tam_calcPoint = 0;
          samPoint = 0;
          sam_calcPoint = 0;
          sam_ukPoint = 0;
          unicorn_ukPoint = 0;
          macroPoint = 0;
          macro_factorsPoint = 0;
          on_businessPoint = 0;
          for_olluPoint = 0;
          answearTask1_1 = 0;
          answearTask1_2 = 0;
          answearTask1_3 = 0;
          answearTask1_4 = 0;
          answearTask1_8 = 0;
          answearTask1_9 = 0;
          answearTask1_10 = 0;
          answearTask1_11 = 0;
          answearTask1_12 = 0;
          answearTask1_13 = 0;
          answearTask1_14 = 0;
          answearTask1_15 = 0;
        }

        if (tab2BDVal !== "" && tab2BDVal !== undefined) {
          var tab2BDParts = tab2BDVal.split("|/|");
          var tab2Progress = tab2BDParts[0];

          var comp_unicornAnswear = tab2BDParts[1];
          var comp_unicornPoint = comp_unicornAnswear;
          comp_unicornPoint = tuskDonePoint(comp_unicornPoint);
          var task2_1 = ["two"];
          var answearTask2_1 = pointsCounter(comp_unicornAnswear, task2_1);

          var comp_chooseAnswear = tab2BDParts[2];
          var comp_choosePoint = comp_chooseAnswear;
          comp_choosePoint = tuskDonePoint(comp_choosePoint);
          var task2_2 = ["one", "five", "six", "seven"];
          var answearTask2_2 = pointsCounter(comp_chooseAnswear, task2_2);

          var metricsAnswear = tab2BDParts[3];
          var metricsPoint = metricsAnswear;
          metricsPoint = tuskDonePoint(metricsPoint);
          var task2_3 = ["one"];
          var answearTask2_3 = pointsCounter(metricsAnswear, task2_3);

          var ollu_compAnswear = tab2BDParts[4];
          var ollu_compPoint = ollu_compAnswear;
          ollu_compPoint = tuskDonePoint(ollu_compPoint);
          var task2_4 = ["two"];
          var answearTask2_4 = pointsCounter(ollu_compAnswear, task2_4);

          var ollu_moneyAnswear = tab2BDParts[5];
          var ollu_moneyPoint = ollu_moneyAnswear;
          ollu_moneyPoint = tuskDonePoint(ollu_moneyPoint);
          var task2_5 = ["two"];
          var answearTask2_5 = pointsCounter(ollu_moneyAnswear, task2_5);

          var countryAnswear = tab2BDParts[6];
          var countryPoint = countryAnswear;
          countryPoint = tuskDonePoint(countryPoint);
          var task2_6 = ["two"];
          var answearTask2_6 = pointsCounter(countryAnswear, task2_6);

          var conclusionsAnswear = tab2BDParts[7];
          var conclusionsPoint = conclusionsAnswear;
          conclusionsPoint = tuskDonePoint(conclusionsPoint);

          var charactersAnswear = tab2BDParts[8];
          var charactersPoint = charactersAnswear;
          charactersPoint = tuskDonePoint(charactersPoint);
          var task2_8 = ["one", "two", "five", "seven"];
          var answearTask2_8 = pointsCounter(charactersAnswear, task2_8);

          var fichAnswear = tab2BDParts[9];
          var fichPoint = fichAnswear;
          fichPoint = tuskDonePoint(fichPoint);
          var task2_9 = [
            "one",
            "two",
            "three",
            "four",
            "five",
            "six",
            "seven",
            "eight",
            "nine",
            "ten",
          ];
          var answearTask2_9 = pointsCounter(fichAnswear, task2_9);

          var last_opinionAnswear = tab2BDParts[10];
          var last_opinionPoint = last_opinionAnswear;
          last_opinionPoint = tuskDonePoint(last_opinionPoint);

          // var last_opinionAnswear = tab2BDVal[10];
        } else {
          tab2Progress = 0;
          comp_unicornPoint = 0;
          comp_choosePoint = 0;
          metricsPoint = 0;
          ollu_compPoint = 0;
          ollu_moneyPoint = 0;
          countryPoint = 0;
          conclusionsPoint = 0;
          charactersPoint = 0;
          fichPoint = 0;
          last_opinionPoint = 0;
          answearTask2_1 = 0;
          answearTask2_2 = 0;
          answearTask2_3 = 0;
          answearTask2_4 = 0;
          answearTask2_5 = 0;
          answearTask2_6 = 0;
          answearTask2_8 = 0;
          answearTask2_9 = 0;
        }

        var tasksDone =
          unicornPoint +
          indexesPoint +
          tam_choicePoint +
          find_unicornPoint +
          conflictFirstPoint +
          conflictSecondPoint +
          conflictThirdPoint +
          tam_calcPoint +
          samPoint +
          sam_calcPoint +
          sam_ukPoint +
          unicorn_ukPoint +
          macroPoint +
          macro_factorsPoint +
          on_businessPoint +
          for_olluPoint +
          comp_unicornPoint +
          comp_choosePoint +
          metricsPoint +
          ollu_compPoint +
          ollu_moneyPoint +
          countryPoint +
          conclusionsPoint +
          charactersPoint +
          fichPoint +
          last_opinionPoint;

        document.querySelector(
          '.middle_content[lesson="' + linkId + '"] .tasks_done'
        ).innerHTML = tasksDone;

        var tasksPoints =
          answearTask1_1 +
          answearTask1_2 +
          answearTask1_3 +
          answearTask1_4 +
          answearTask1_8 +
          answearTask1_9 +
          answearTask1_10 +
          answearTask1_11 +
          answearTask1_12 +
          answearTask1_13 +
          answearTask1_14 +
          answearTask1_15 +
          answearTask2_1 +
          answearTask2_2 +
          answearTask2_3 +
          answearTask2_4 +
          answearTask2_5 +
          answearTask2_6 +
          answearTask2_8 +
          answearTask2_9;
        document.querySelector(
          '.middle_content[lesson="' + linkId + '"] .right_answears'
        ).innerHTML = tasksPoints;

        var pointsTarget = 39;
        var pointspercentProgress = (100 / pointsTarget) * tasksPoints;
        pointspercentProgress = Math.round(pointspercentProgress);

        document.querySelector(
          '.middle_content[lesson="' + linkId + '"] .percent_aswear'
        ).innerHTML = pointspercentProgress;

        // console.log(tasksPoints);

        // -----------------
      } catch (error) {
        console.error(error);
      }
    })();
    // }
    // counter1 = counter1 + 1;
  }
  function firstLesson(linkId) {
    // if (counter1 < 1) {
    (async () => {
      try {
        var firstLessonInfo = await getLessonInfo("6517f3b8afa18ec4281d27f0");

        var introBDVal = firstLessonInfo.fieldData.intro;
        var tab1BDVal = firstLessonInfo.fieldData.tab1;
        var tab2BDVal = firstLessonInfo.fieldData.tab2;
        // console.log(introBDVal)

        function tuskDonePoint(point) {
          if (point === "" || point === undefined) {
            point = 0;
          } else {
            point = 1;
          }
          return point;
        }

        function pointsCounter(data, valuesToCheck) {
          if (data !== "" && data !== undefined) {
            var counter = 0; // Початкове значення лічильника
            valuesToCheck.forEach(function (value) {
              if (data.includes(value)) {
                counter++; // Збільшуємо лічильник на 1, якщо знайдено співпадіння
              }
            });
          } else {
            counter = 0;
          }
          return counter;
        }

        if (introBDVal !== "" && introBDVal !== undefined) {
          var introBDParts = introBDVal.split("|/|");
          var introProgress = introBDParts[0];
          var reportAnswear = introBDParts[1];
          var reportPoint = reportAnswear;
          reportPoint = tuskDonePoint(reportPoint);
          var task1_1 = ["two", "three", "four", "five"];
          var answearTask1_1 = pointsCounter(reportAnswear, task1_1);
        } else {
          introProgress = 0;
          reportPoint = 0;
          answearTask1_1 = 0;
        }
        if (tab1BDVal !== "" && tab1BDVal !== undefined) {
          var tab1BDParts = tab1BDVal.split("|/|");
          var tab1Progress = tab1BDParts[0];

          var profileAnswear = tab1BDParts[1];
          var profilePoint = profileAnswear;
          profilePoint = tuskDonePoint(profilePoint);
          var task2_1 = ["one", "two", "three", "four", "five", "six"];
          var answearTask2_1 = pointsCounter(profileAnswear, task2_1);

          var photoLiAnswear = tab1BDParts[2];
          var photoLiPoint = photoLiAnswear;
          photoLiPoint = tuskDonePoint(photoLiPoint);
          var task2_2 = ["two", "six"];
          var answearTask2_2 = pointsCounter(photoLiAnswear, task2_2);

          var imgAnswear = tab1BDParts[3];
          var imgPoint = imgAnswear;
          imgPoint = tuskDonePoint(imgPoint);
          var task2_3 = ["two"];
          var answearTask2_3 = pointsCounter(imgAnswear, task2_3);

          var headingAnswear = tab1BDParts[4];
          var headingPoint = headingAnswear;
          headingPoint = tuskDonePoint(headingPoint);
          var task2_4 = ["three", "four"];
          var answearTask2_4 = pointsCounter(headingAnswear, task2_4);

          var bioAnswear = tab1BDParts[5];
          var bioPoint = bioAnswear;
          bioPoint = tuskDonePoint(bioPoint);
          var task2_5 = ["one"];
          var answearTask2_5 = pointsCounter(bioAnswear, task2_5);

          var workInfoAnswear = tab1BDParts[6];
          var workInfoPoint = workInfoAnswear;
          workInfoPoint = tuskDonePoint(workInfoPoint);
          var task2_6 = ["one", "two", "three"];
          var answearTask2_6 = pointsCounter(workInfoAnswear, task2_6);

          var imgProfileAnswear = tab1BDParts[7];
          var imgProfilePoint = imgProfileAnswear;
          imgProfilePoint = tuskDonePoint(imgProfilePoint);
          var task2_7 = ["one"];
          var answearTask2_7 = pointsCounter(imgProfileAnswear, task2_7);

          var positiveAnswear = tab1BDParts[8];
          var positivePoint = positiveAnswear;
          positivePoint = tuskDonePoint(positivePoint);
          var task2_8 = ["one", "two", "three", "four", "five"];
          var answearTask2_8 = pointsCounter(positiveAnswear, task2_8);

          var teamAnswear = tab1BDParts[9];
          var teamPoint = teamAnswear;
          teamPoint = tuskDonePoint(teamPoint);
          var task2_9 = ["three"];
          var answearTask2_9 = pointsCounter(teamAnswear, task2_9);

          var linkedInAnswear = tab1BDParts[10];
          var linkedInPoint = linkedInAnswear;
          linkedInPoint = tuskDonePoint(linkedInPoint);

          var aboutYouAnswear = tab1BDParts[11];
          var aboutYouPoint = aboutYouAnswear;
          aboutYouPoint = tuskDonePoint(aboutYouPoint);
          var task2_11 = ["three", "four", "five"];
          var answearTask2_11 = pointsCounter(aboutYouAnswear, task2_11);

          var aboutTimeAnswear = tab1BDParts[12];
          var aboutTimePoint = aboutTimeAnswear;
          aboutTimePoint = tuskDonePoint(aboutTimePoint);
          var task2_12 = ["four"];
          var answearTask2_12 = pointsCounter(aboutTimeAnswear, task2_12);

          var selfPresentationAnswear = tab1BDParts[13];
          var selfPresentationPoint = selfPresentationAnswear;
          selfPresentationPoint = tuskDonePoint(selfPresentationPoint);

          var failSituationAnswear = tab1BDParts[14];
          var failSituationPoint = failSituationAnswear;
          failSituationPoint = tuskDonePoint(failSituationPoint);
          var task2_14 = ["three"];
          var answearTask2_14 = pointsCounter(failSituationAnswear, task2_14);

          var modelAnswear = tab1BDParts[15];
          var modelPoint = modelAnswear;
          modelPoint = tuskDonePoint(modelPoint);
        } else {
          tab1Progress = 0;
          profilePoint = 0;
          photoLiPoint = 0;
          imgPoint = 0;
          headingPoint = 0;
          bioPoint = 0;
          workInfoPoint = 0;
          imgProfilePoint = 0;
          positivePoint = 0;
          teamPoint = 0;
          linkedInPoint = 0;
          aboutYouPoint = 0;
          aboutTimePoint = 0;
          selfPresentationPoint = 0;
          failSituationPoint = 0;
          modelPoint = 0;
          answearTask2_1 = 0;
          answearTask2_2 = 0;
          answearTask2_3 = 0;
          answearTask2_4 = 0;
          answearTask2_5 = 0;
          answearTask2_6 = 0;
          answearTask2_7 = 0;
          answearTask2_8 = 0;
          answearTask2_9 = 0;
          answearTask2_11 = 0;
          answearTask2_12 = 0;
          answearTask2_14 = 0;
        }
        if (tab2BDVal !== "" && tab2BDVal !== undefined) {
          var tab2BDParts = tab2BDVal.split("|/|");
          var tab2Progress = tab2BDParts[0];

          var yearCoastAnswear = tab2BDParts[1];
          var yearCoastPoint = yearCoastAnswear;
          yearCoastPoint = tuskDonePoint(yearCoastPoint);
          if (yearCoastAnswear !== "" || yearCoastAnswear !== undefined) {
            var task3_1 = "390785";
            var answearTask3_1;
            if (task3_1 === yearCoastAnswear) {
              answearTask3_1 = 1;
            } else {
              answearTask3_1 = 0;
            }
          } else {
            answearTask3_1 = 0;
          }
          var romiAnswear = tab2BDParts[2];
          var romiPoint = romiAnswear;
          romiPoint = tuskDonePoint(romiPoint);
          if (romiAnswear !== "" && romiAnswear !== undefined) {
            var task3_2 = "-79";
            var answearTask3_2;

            if (task3_2 === romiAnswear) {
              answearTask3_2 = 1;
            } else {
              answearTask3_2 = 0;
            }
          } else {
            answearTask3_2 = 0;
          }
          var reportMounthAnswear = tab2BDParts[3];
          var reportMountPoint = reportMounthAnswear;
          reportMountPoint = tuskDonePoint(reportMountPoint);
          var task3_3 = ["one"];
          var answearTask3_3 = pointsCounter(reportMounthAnswear, task3_3);

          var presentationAnswear = tab2BDParts[4];
          var presentationPoint = presentationAnswear;
          presentationPoint = tuskDonePoint(presentationPoint);
          var task3_4 = ["two"];
          var answearTask3_4 = pointsCounter(presentationAnswear, task3_4);

          var successesAnswear = tab2BDParts[5];
          var successesPoint = successesAnswear;
          successesPoint = tuskDonePoint(successesPoint);
          var task3_5 = ["three"];
          var answearTask3_5 = pointsCounter(successesAnswear, task3_5);

          var problemsAnswear = tab2BDParts[6];
          var problemsPoint = problemsAnswear;
          problemsPoint = tuskDonePoint(problemsPoint);
          var task3_6 = ["two", "three", "four"];
          var answearTask3_6 = pointsCounter(problemsAnswear, task3_6);

          var moneyAnswear = tab2BDParts[7];
          var moneyPoint = moneyAnswear;
          moneyPoint = tuskDonePoint(moneyPoint);
          var task3_7 = ["four"];
          var answearTask3_7 = pointsCounter(moneyAnswear, task3_7);

          var questionsAnswear = tab2BDParts[8];
          var questionsPoint = questionsAnswear;
          questionsPoint = tuskDonePoint(questionsPoint);
          var task3_8 = ["one"];
          var answearTask3_8 = pointsCounter(questionsAnswear, task3_8);
        } else {
          tab2Progress = 0;
          yearCoastPoint = 0;
          romiPoint = 0;
          reportMountPoint = 0;
          presentationPoint = 0;
          successesPoint = 0;
          problemsPoint = 0;
          moneyPoint = 0;
          questionsPoint = 0;
          answearTask3_1 = 0;
          answearTask3_2 = 0;
          answearTask3_3 = 0;
          answearTask3_4 = 0;
          answearTask3_5 = 0;
          answearTask3_6 = 0;
          answearTask3_7 = 0;
          answearTask3_8 = 0;
        }
        var tasksDone =
          reportPoint +
          profilePoint +
          photoLiPoint +
          imgPoint +
          headingPoint +
          bioPoint +
          workInfoPoint +
          imgProfilePoint +
          positivePoint +
          teamPoint +
          linkedInPoint +
          aboutYouPoint +
          aboutTimePoint +
          selfPresentationPoint +
          failSituationPoint +
          modelPoint +
          yearCoastPoint +
          romiPoint +
          reportMountPoint +
          presentationPoint +
          successesPoint +
          problemsPoint +
          moneyPoint +
          questionsPoint;
        document.querySelector(
          '.middle_content[lesson="' + linkId + '"] .tasks_done'
        ).innerHTML = tasksDone;

        var tasksPoints =
          answearTask1_1 +
          answearTask2_1 +
          answearTask2_2 +
          answearTask2_3 +
          answearTask2_4 +
          answearTask2_5 +
          answearTask2_6 +
          answearTask2_7 +
          answearTask2_8 +
          answearTask2_9 +
          answearTask2_11 +
          answearTask2_12 +
          answearTask2_14 +
          answearTask3_1 +
          answearTask3_2 +
          answearTask3_3 +
          answearTask3_4 +
          answearTask3_5 +
          answearTask3_6 +
          answearTask3_7 +
          answearTask3_8;
        document.querySelector(
          '.middle_content[lesson="' + linkId + '"] .right_answears'
        ).innerHTML = tasksPoints;

        var pointsTarget = 40;
        var pointspercentProgress = (100 / pointsTarget) * tasksPoints;
        pointspercentProgress = Math.round(pointspercentProgress);

        document.querySelector(
          '.middle_content[lesson="' + linkId + '"] .percent_aswear'
        ).innerHTML = pointspercentProgress;

        // console.log(tasksPoints);

        // -----------------
      } catch (error) {
        console.error(error);
      }
    })();
    // }
    // counter1 = counter1 + 1;
  }

  var side_links = document.querySelectorAll(".side_bar_links_block");
  side_links.forEach((side_link) => {
    side_link.addEventListener("click", () => {
      side_links.forEach((element) => {
        element.classList.remove("active");
      });
      side_link.classList.add("active");
      var link = side_link.querySelector(".side_bar_link");
      var linkId = link.getAttribute("id");
      // console.log(linkId);
      if (linkId === "first-lesson") {
        firstLesson(linkId);
      } else if (linkId === "second-lesson") {
        secondLesson(linkId);
      } else if (linkId === "third-lesson") {
        thirdLesson(linkId);
      } else if (linkId === "fourth-lesson") {
        fourthLesson(linkId);
      } else if (linkId === "fiveth-lesson") {
        fivethLesson(linkId);
      } else if (linkId === "sixth-lesson") {
        sixthLesson(linkId);
      } else if (linkId === "seventh-lesson") {
        seventhLesson(linkId);
      } else if (linkId === "eighth-lesson") {
        eighthLesson(linkId);
      } else if (linkId === "ninth-lesson") {
        ninthLesson(linkId);
      } else if (linkId === "tenth-lesson") {
        tenthLesson(linkId);
      } else if (linkId === "eleventh-lesson") {
        eleventhLesson(linkId);
      } else if (linkId === "twelfth-lesson") {
        twelfthLesson(linkId);
      } else if (linkId === "thirteenth-lesson") {
        thirteenthLesson(linkId);
      } else if (linkId === "fourteenth-lesson") {
        fourteenthLesson(linkId);
      } 
      // else if (linkId === "eleventh-lesson") {
      //   eleventhLesson(linkId);
      // }
      var alls = document.querySelectorAll(".middle_content");
      alls.forEach((element) => {
        element.style.display = "none";
      });
      document.querySelector(
        '.middle_content[lesson="' + linkId + '"]'
      ).style.display = "flex";
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  });
} else {
  // if (url.includes("video-lectures")) {
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
      document.querySelector(
        '.middle_content[lesson="' + linkId + '"]'
      ).style.display = "flex";
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  });
  var videoIframe = document.querySelector("#first_lesson_video iframe");
  var firstLessonURL = [
    "https://www.youtube.com/embed/LGb8ZSq2MgQ?rel=0&controls=1&autoplay=1&start=0",
    "https://www.youtube.com/embed/LGb8ZSq2MgQ?rel=0&controls=1&autoplay=1&start=425",
    "https://www.youtube.com/embed/LGb8ZSq2MgQ?rel=0&controls=1&autoplay=1&start=653",
    "https://www.youtube.com/embed/LGb8ZSq2MgQ?rel=0&controls=1&autoplay=1&start=1318",
    "https://www.youtube.com/embed/LGb8ZSq2MgQ?rel=0&controls=1&autoplay=1&start=2235",
    "https://www.youtube.com/embed/LGb8ZSq2MgQ?rel=0&controls=1&autoplay=1&start=3295",
    "https://www.youtube.com/embed/LGb8ZSq2MgQ?rel=0&controls=1&autoplay=1&start=5415",
    "https://www.youtube.com/embed/LGb8ZSq2MgQ?rel=0&controls=1&autoplay=1&start=6435",
    "https://www.youtube.com/embed/LGb8ZSq2MgQ?rel=0&controls=1&autoplay=1&start=6630",
    "https://www.youtube.com/embed/LGb8ZSq2MgQ?rel=0&controls=1&autoplay=1&start=7595",
    "https://www.youtube.com/embed/LGb8ZSq2MgQ?rel=0&controls=1&autoplay=1&start=7975",
    "https://www.youtube.com/embed/LGb8ZSq2MgQ?rel=0&controls=1&autoplay=1&start=8320",
    "https://www.youtube.com/embed/LGb8ZSq2MgQ?rel=0&controls=1&autoplay=1&start=8595",
    "https://www.youtube.com/embed/LGb8ZSq2MgQ?rel=0&controls=1&autoplay=1&start=8845",
  ];

  var buttons = document.querySelectorAll(".timestamp_but1");

  buttons.forEach(function (button, index) {
    button.addEventListener("click", function () {
      if (index < firstLessonURL.length) {
        videoIframe.src = firstLessonURL[index];
      }
    });
  });

  var videoIframe2 = document.querySelector("#second_lesson_video iframe");
  var firstLessonURL2 = [
    "https://www.youtube.com/embed/VyEZfzOWGQQ?rel=0&controls=1&autoplay=1&start=0",
    "https://www.youtube.com/embed/VyEZfzOWGQQ?rel=0&controls=1&autoplay=1&start=125",
    "https://www.youtube.com/embed/VyEZfzOWGQQ?rel=0&controls=1&autoplay=1&start=400",
    "https://www.youtube.com/embed/VyEZfzOWGQQ?rel=0&controls=1&autoplay=1&start=2220",
    "https://www.youtube.com/embed/VyEZfzOWGQQ?rel=0&controls=1&autoplay=1&start=3115",
    "https://www.youtube.com/embed/VyEZfzOWGQQ?rel=0&controls=1&autoplay=1&start=4135",
    "https://www.youtube.com/embed/VyEZfzOWGQQ?rel=0&controls=1&autoplay=1&start=5416",
  ];

  var buttons2 = document.querySelectorAll(".timestamp_but2");

  buttons2.forEach(function (button, index) {
    button.addEventListener("click", function () {
      if (index < firstLessonURL2.length) {
        videoIframe2.src = firstLessonURL2[index];
      }
    });
  });

  var videoIframe3 = document.querySelector("#third_lesson_video iframe");
  var firstLessonURL3 = [
    "https://www.youtube.com/embed/UVM0wwtcMuA?rel=0&controls=1&autoplay=1&start=0",
    "https://www.youtube.com/embed/UVM0wwtcMuA?rel=0&controls=1&autoplay=1&start=330",
    "https://www.youtube.com/embed/UVM0wwtcMuA?rel=0&controls=1&autoplay=1&start=710",
    "https://www.youtube.com/embed/UVM0wwtcMuA?rel=0&controls=1&autoplay=1&start=840",
    "https://www.youtube.com/embed/UVM0wwtcMuA?rel=0&controls=1&autoplay=1&start=912",
    "https://www.youtube.com/embed/UVM0wwtcMuA?rel=0&controls=1&autoplay=1&start=3350",
    "https://www.youtube.com/embed/UVM0wwtcMuA?rel=0&controls=1&autoplay=1&start=5265",
    "https://www.youtube.com/embed/UVM0wwtcMuA?rel=0&controls=1&autoplay=1&start=6770",
    "https://www.youtube.com/embed/UVM0wwtcMuA?rel=0&controls=1&autoplay=1&start=7240",
  ];

  var buttons3 = document.querySelectorAll(".timestamp_but3");

  buttons3.forEach(function (button, index) {
    button.addEventListener("click", function () {
      if (index < firstLessonURL3.length) {
        videoIframe3.src = firstLessonURL3[index];
      }
    });
  });

  var videoIframe4 = document.querySelector("#fourth_lesson_video iframe");
  var firstLessonURL4 = [
    "https://www.youtube.com/embed/1aM099GcaS0?rel=0&controls=1&autoplay=1&start=0",
    "https://www.youtube.com/embed/1aM099GcaS0?rel=0&controls=1&autoplay=1&start=500",
    "https://www.youtube.com/embed/1aM099GcaS0?rel=0&controls=1&autoplay=1&start=2700",
    "https://www.youtube.com/embed/1aM099GcaS0?rel=0&controls=1&autoplay=1&start=4735",
    "https://www.youtube.com/embed/1aM099GcaS0?rel=0&controls=1&autoplay=1&start=4865",
  ];

  var buttons4 = document.querySelectorAll(".timestamp_but4");

  buttons4.forEach(function (button, index) {
    button.addEventListener("click", function () {
      if (index < firstLessonURL4.length) {
        videoIframe4.src = firstLessonURL4[index];
      }
    });
  });

  var videoIframe5 = document.querySelector("#fiveth_lesson_video iframe");
  var firstLessonURL5 = [
    "https://www.youtube.com/embed/g_hqxn2U6EE?rel=0&controls=1&autoplay=1&start=0",
    "https://www.youtube.com/embed/g_hqxn2U6EE?rel=0&controls=1&autoplay=1&start=115",
    "https://www.youtube.com/embed/g_hqxn2U6EE?rel=0&controls=1&autoplay=1&start=1885",
    "https://www.youtube.com/embed/g_hqxn2U6EE?rel=0&controls=1&autoplay=1&start=3570",
    "https://www.youtube.com/embed/g_hqxn2U6EE?rel=0&controls=1&autoplay=1&start=3970",
    "https://www.youtube.com/embed/g_hqxn2U6EE?rel=0&controls=1&autoplay=1&start=4218",
    "https://www.youtube.com/embed/g_hqxn2U6EE?rel=0&controls=1&autoplay=1&start=5835",
    "https://www.youtube.com/embed/g_hqxn2U6EE?rel=0&controls=1&autoplay=1&start=6187",
    "https://www.youtube.com/embed/g_hqxn2U6EE?rel=0&controls=1&autoplay=1&start=6541",
  ];

  var buttons5 = document.querySelectorAll(".timestamp_but5");

  buttons5.forEach(function (button, index) {
    button.addEventListener("click", function () {
      if (index < firstLessonURL5.length) {
        videoIframe5.src = firstLessonURL5[index];
      }
    });
  });

  var videoIframe6 = document.querySelector("#sixth_lesson_video iframe");
  var firstLessonURL6 = [
    "https://www.youtube.com/embed/dtIpHIn6beE?rel=0&controls=1&autoplay=1&start=0",
    "https://www.youtube.com/embed/dtIpHIn6beE?rel=0&controls=1&autoplay=1&start=260",
    "https://www.youtube.com/embed/dtIpHIn6beE?rel=0&controls=1&autoplay=1&start=668",
    "https://www.youtube.com/embed/dtIpHIn6beE?rel=0&controls=1&autoplay=1&start=1801",
    "https://www.youtube.com/embed/dtIpHIn6beE?rel=0&controls=1&autoplay=1&start=2421",
    "https://www.youtube.com/embed/dtIpHIn6beE?rel=0&controls=1&autoplay=1&start=3306",
  ];

  var buttons6 = document.querySelectorAll(".timestamp_but6");

  buttons6.forEach(function (button, index) {
    button.addEventListener("click", function () {
      if (index < firstLessonURL6.length) {
        videoIframe6.src = firstLessonURL6[index];
      }
    });
  });

  var videoIframe7 = document.querySelector("#seventh_lesson_video iframe");
  var firstLessonURL7 = [
    "https://www.youtube.com/embed/TM0LXV2Mc7k?rel=0&controls=1&autoplay=1&start=0",
    "https://www.youtube.com/embed/TM0LXV2Mc7k?rel=0&controls=1&autoplay=1&start=250",
    "https://www.youtube.com/embed/TM0LXV2Mc7k?rel=0&controls=1&autoplay=1&start=515",
    "https://www.youtube.com/embed/TM0LXV2Mc7k?rel=0&controls=1&autoplay=1&start=1338",
    "https://www.youtube.com/embed/TM0LXV2Mc7k?rel=0&controls=1&autoplay=1&start=1872",
    "https://www.youtube.com/embed/TM0LXV2Mc7k?rel=0&controls=1&autoplay=1&start=4630",
  ];

  var buttons7 = document.querySelectorAll(".timestamp_but7");

  buttons7.forEach(function (button, index) {
    button.addEventListener("click", function () {
      if (index < firstLessonURL7.length) {
        videoIframe7.src = firstLessonURL7[index];
      }
    });
  });

  var videoIframe8 = document.querySelector("#eighth_lesson_video iframe");
  var firstLessonURL8 = [
    "https://www.youtube.com/embed/dT_fM4M9wxM?rel=0&controls=1&autoplay=1&start=0",
    "https://www.youtube.com/embed/dT_fM4M9wxM?rel=0&controls=1&autoplay=1&start=785",
    "https://www.youtube.com/embed/dT_fM4M9wxM?rel=0&controls=1&autoplay=1&start=3215",
    "https://www.youtube.com/embed/dT_fM4M9wxM?rel=0&controls=1&autoplay=1&start=4385",
    "https://www.youtube.com/embed/dT_fM4M9wxM?rel=0&controls=1&autoplay=1&start=5757",
    "https://www.youtube.com/embed/dT_fM4M9wxM?rel=0&controls=1&autoplay=1&start=6430",
    "https://www.youtube.com/embed/dT_fM4M9wxM?rel=0&controls=1&autoplay=1&start=6771",
  ];

  var buttons8 = document.querySelectorAll(".timestamp_but8");

  buttons8.forEach(function (button, index) {
    button.addEventListener("click", function () {
      if (index < firstLessonURL8.length) {
        videoIframe8.src = firstLessonURL8[index];
      }
    });
  });

  var videoIframe9 = document.querySelector("#ninth_lesson_video iframe");
  var firstLessonURL9 = [
    "https://www.youtube.com/embed/AViyZstTh-w?rel=0&controls=1&autoplay=1&start=0",
    "https://www.youtube.com/embed/AViyZstTh-w?rel=0&controls=1&autoplay=1&start=129",
    "https://www.youtube.com/embed/AViyZstTh-w?rel=0&controls=1&autoplay=1&start=2980",
    "https://www.youtube.com/embed/AViyZstTh-w?rel=0&controls=1&autoplay=1&start=5410",
    "https://www.youtube.com/embed/AViyZstTh-w?rel=0&controls=1&autoplay=1&start=7556",
    "https://www.youtube.com/embed/AViyZstTh-w?rel=0&controls=1&autoplay=1&start=7780",
  ];

  var buttons9 = document.querySelectorAll(".timestamp_but9");

  buttons9.forEach(function (button, index) {
    button.addEventListener("click", function () {
      if (index < firstLessonURL9.length) {
        videoIframe9.src = firstLessonURL9[index];
      }
    });
  });

  var videoIframe10 = document.querySelector("#tenth_lesson_video iframe");
  var firstLessonURL10 = [
    "https://www.youtube.com/embed/Esd2LVmhOxk?rel=0&controls=1&autoplay=1&start=0",
    "https://www.youtube.com/embed/Esd2LVmhOxk?rel=0&controls=1&autoplay=1&start=256",
    "https://www.youtube.com/embed/Esd2LVmhOxk?rel=0&controls=1&autoplay=1&start=768",
    "https://www.youtube.com/embed/Esd2LVmhOxk?rel=0&controls=1&autoplay=1&start=1185",
    "https://www.youtube.com/embed/Esd2LVmhOxk?rel=0&controls=1&autoplay=1&start=2332",
    "https://www.youtube.com/embed/Esd2LVmhOxk?rel=0&controls=1&autoplay=1&start=2949",
    "https://www.youtube.com/embed/Esd2LVmhOxk?rel=0&controls=1&autoplay=1&start=3529",
    "https://www.youtube.com/embed/Esd2LVmhOxk?rel=0&controls=1&autoplay=1&start=4016",
    "https://www.youtube.com/embed/Esd2LVmhOxk?rel=0&controls=1&autoplay=1&start=5592",
    "https://www.youtube.com/embed/Esd2LVmhOxk?rel=0&controls=1&autoplay=1&start=6387",
    "https://www.youtube.com/embed/Esd2LVmhOxk?rel=0&controls=1&autoplay=1&start=7033",
    "https://www.youtube.com/embed/Esd2LVmhOxk?rel=0&controls=1&autoplay=1&start=7176",
    "https://www.youtube.com/embed/Esd2LVmhOxk?rel=0&controls=1&autoplay=1&start=7798",
  ];

  var buttons10 = document.querySelectorAll(".timestamp_but10");

  buttons10.forEach(function (button, index) {
    button.addEventListener("click", function () {
      if (index < firstLessonURL10.length) {
        videoIframe10.src = firstLessonURL10[index];
      }
    });
  });

  var videoIframe11 = document.querySelector("#eleventh_lesson_video iframe");
  var firstLessonURL11 = [
    "https://www.youtube.com/embed/ATqYd6agY8k?rel=0&controls=1&autoplay=1&start=0",
    "https://www.youtube.com/embed/ATqYd6agY8k?rel=0&controls=1&autoplay=1&start=104",
    "https://www.youtube.com/embed/ATqYd6agY8k?rel=0&controls=1&autoplay=1&start=2726",
    "https://www.youtube.com/embed/ATqYd6agY8k?rel=0&controls=1&autoplay=1&start=4426",
    "https://www.youtube.com/embed/ATqYd6agY8k?rel=0&controls=1&autoplay=1&start=6314",
    "https://www.youtube.com/embed/ATqYd6agY8k?rel=0&controls=1&autoplay=1&start=7683",
    "https://www.youtube.com/embed/ATqYd6agY8k?rel=0&controls=1&autoplay=1&start=8105",
  ];

  var buttons11 = document.querySelectorAll(".timestamp_but11");

  buttons11.forEach(function (button, index) {
    button.addEventListener("click", function () {
      if (index < firstLessonURL11.length) {
        videoIframe11.src = firstLessonURL11[index];
      }
    });
  });

  var videoIframe12 = document.querySelector("#twelfth_lesson_video iframe");
  var firstLessonURL12 = [
    "https://www.youtube.com/embed/Ll1Bd3WxiZU?rel=0&controls=1&autoplay=1&start=0",
    "https://www.youtube.com/embed/Ll1Bd3WxiZU?rel=0&controls=1&autoplay=1&start=237",
    "https://www.youtube.com/embed/Ll1Bd3WxiZU?rel=0&controls=1&autoplay=1&start=655",
    "https://www.youtube.com/embed/Ll1Bd3WxiZU?rel=0&controls=1&autoplay=1&start=878",
    "https://www.youtube.com/embed/Ll1Bd3WxiZU?rel=0&controls=1&autoplay=1&start=1670",
    "https://www.youtube.com/embed/Ll1Bd3WxiZU?rel=0&controls=1&autoplay=1&start=1755",
    "https://www.youtube.com/embed/Ll1Bd3WxiZU?rel=0&controls=1&autoplay=1&start=2063",
    "https://www.youtube.com/embed/Ll1Bd3WxiZU?rel=0&controls=1&autoplay=1&start=3591",
    "https://www.youtube.com/embed/Ll1Bd3WxiZU?rel=0&controls=1&autoplay=1&start=4704",
    "https://www.youtube.com/embed/Ll1Bd3WxiZU?rel=0&controls=1&autoplay=1&start=5460",
    "https://www.youtube.com/embed/Ll1Bd3WxiZU?rel=0&controls=1&autoplay=1&start=5749",
    "https://www.youtube.com/embed/Ll1Bd3WxiZU?rel=0&controls=1&autoplay=1&start=6052",
    "https://www.youtube.com/embed/Ll1Bd3WxiZU?rel=0&controls=1&autoplay=1&start=6496",
    "https://www.youtube.com/embed/Ll1Bd3WxiZU?rel=0&controls=1&autoplay=1&start=7590",
  ];

  var buttons12 = document.querySelectorAll(".timestamp_but12");

  buttons12.forEach(function (button, index) {
    button.addEventListener("click", function () {
      if (index < firstLessonURL12.length) {
        videoIframe12.src = firstLessonURL12[index];
      }
    });
  });

  var videoIframe13 = document.querySelector("#thirteenth_lesson_video iframe");
  var firstLessonURL13 = [
    "https://www.youtube.com/embed/oCqQDr-LSzM?rel=0&controls=1&autoplay=1&start=0",
    "https://www.youtube.com/embed/oCqQDr-LSzM?rel=0&controls=1&autoplay=1&start=127",
    "https://www.youtube.com/embed/oCqQDr-LSzM?rel=0&controls=1&autoplay=1&start=370",
    "https://www.youtube.com/embed/oCqQDr-LSzM?rel=0&controls=1&autoplay=1&start=2199",
    "https://www.youtube.com/embed/oCqQDr-LSzM?rel=0&controls=1&autoplay=1&start=4740",
    "https://www.youtube.com/embed/oCqQDr-LSzM?rel=0&controls=1&autoplay=1&start=5860",
    "https://www.youtube.com/embed/oCqQDr-LSzM?rel=0&controls=1&autoplay=1&start=7060",
    "https://www.youtube.com/embed/oCqQDr-LSzM?rel=0&controls=1&autoplay=1&start=7865",
  ];

  var buttons13 = document.querySelectorAll(".timestamp_but13");

  buttons13.forEach(function (button, index) {
    button.addEventListener("click", function () {
      if (index < firstLessonURL13.length) {
        videoIframe13.src = firstLessonURL13[index];
      }
    });
  });

  var videoIframe14 = document.querySelector("#fourteenth_lesson_video iframe");
  var firstLessonURL14 = [
    "https://www.youtube.com/embed/VAG7mHMmMlo?rel=0&controls=1&autoplay=1&start=0",
    "https://www.youtube.com/embed/VAG7mHMmMlo?rel=0&controls=1&autoplay=1&start=245",
    "https://www.youtube.com/embed/VAG7mHMmMlo?rel=0&controls=1&autoplay=1&start=2329",
    "https://www.youtube.com/embed/VAG7mHMmMlo?rel=0&controls=1&autoplay=1&start=3160",
    "https://www.youtube.com/embed/VAG7mHMmMlo?rel=0&controls=1&autoplay=1&start=5330",
    "https://www.youtube.com/embed/VAG7mHMmMlo?rel=0&controls=1&autoplay=1&start=6320",
  ];

  var buttons14 = document.querySelectorAll(".timestamp_but14");

  buttons14.forEach(function (button, index) {
    button.addEventListener("click", function () {
      if (index < firstLessonURL14.length) {
        videoIframe14.src = firstLessonURL14[index];
      }
    });
  });
}
