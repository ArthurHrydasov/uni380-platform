var user_email = localStorage.getItem("webflowLog");
// console.log("webflowLog: " + user_email);

var nameInput = document.querySelector('input[name="name"]');
var secondNameInput = document.querySelector('input[name="second_name"]');
var checkBlock = document.querySelector(".task_input_check_block");
var photoLoad = document.querySelector(".photo-load");
var edit = document.getElementById("edit");
var send_data = document.getElementById("send_data");

var avatar_img = document.querySelector(".avatar_img");
var img_link = document.querySelector(".img_link");

function radioGetInfo(block, value) {
  var radioButton = block.querySelector(
    'input[type="radio"][value="' + value + '"]'
  );
  radioButton.checked = true;
  var divElement = radioButton.previousElementSibling;
  if (divElement && divElement.classList.contains("w-radio-input")) {
    divElement.classList.add("w--redirected-checked");
  }
}
function inputGethInfo(input, value) {
  input.placeholder = value;
}
function setAvatar(href) {
  avatar_img.classList.remove("noAvatar");
  avatar_img.textContent = "";
  avatar_img.style.backgroundImage = 'url("' + href + '")';
}

function userAvatar(name, avatar) {
  var userAvatars = document.querySelectorAll(".blop_icon.client");
  userAvatars.forEach((userAvatar) => {
    if (avatar !== "" && avatar !== undefined) {
      setAvatar(avatar);
    } else {
      userAvatar.classList.add("noAvatar");
      var str = name;
      var firstLetter = str[0];
      userAvatar.textContent = firstLetter;
    }
  });
}

setInterval(() => {
  var href = img_link.value;
  if (href !== "" && href !== undefined) {
    setAvatar(href);
  }
}, 1500);

function getUserInfo(customPass) {
  var data = {
    user_email: user_email
  };
  // console.log(data);
  fetch("https://uni380-ua-f2a8d215b9ab.herokuapp.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then((response) => response.json())
    .then((lessons) => {
      // console.log(lessons);
      var lessonspass;
      lessonspass = lessons.data.lessonspass;
      if (lessonspass > customPass) {
        lessonspass = customPass;
      }
      getSideProgress(lessonspass);

      if (lessons.data.sex !== "" && lessons.data.sex !== undefined) {
        var user_name = lessons.data.name;
        var user_second_name = lessons.data["second-name"];
        var user_sex = lessons.data.sex;
        var user_avatar = lessons.data.avatar;
        userAvatar(user_name, user_avatar);
        radioGetInfo(checkBlock, user_sex);
        inputGethInfo(nameInput, user_name);
        inputGethInfo(secondNameInput, user_second_name);
      } else {
        window.location.href = "/";
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

edit.addEventListener("click", () => {
  edit.style.display = "none";
  send_data.style.display = "flex";
  photoLoad.style.display = "flex";
  nameInput.classList.remove("blocked");
  secondNameInput.classList.remove("blocked");
  checkBlock.classList.remove("blocked");
});

function showSelectedOption() {
  const radioButtons = document.getElementsByName("sex");
  let selectedOption;
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      selectedOption = radioButton.value;
      break;
    }
  }
  if (selectedOption) {
    return selectedOption;
  }
}

send_data.addEventListener("click", () => {
  edit.style.display = "flex";
  send_data.style.display = "none";
  photoLoad.style.display = "none";
  nameInput.classList.add("blocked");
  secondNameInput.classList.add("blocked");
  checkBlock.classList.add("blocked");
  var href = img_link.value;
  var nameVal = nameInput.value;
  var second_nameVal = secondNameInput.value;

  var sex = showSelectedOption();

  // if (nameVal === "") {
  if (nameVal.trim() === "") {
    nameVal = undefined;
  }
  // if (second_nameVal === "" || nameVal.contains(" ")) {
  if (second_nameVal.trim() === "") {
    second_nameVal = undefined;
  }
  if (sex === "") {
    sex = undefined;
  }
  if (href === "") {
    href = undefined;
  }

  function dataSend(user_email) {
    var data = {
      user_email: user_email,
      user_name: nameVal,
      user_second_name: second_nameVal,
      user_sex: sex,
      user_avatar: href
    };
    // console.log(data);
    fetch("https://uni380-ua-f2a8d215b9ab.herokuapp.com/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      // .then((response) => response.json())
      // .then((patch) => {
      //   // console.log(patch);
      // })
      .catch((error) => {
        console.error(error);
      });
  }
  dataSend(user_email);
});
