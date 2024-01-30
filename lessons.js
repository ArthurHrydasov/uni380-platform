+(function() {
  var accordeonHeaderClickHandler = function(e) {
    var clickedAccordeonSection = e.target.closest(".spoiler_block");
    var allAccordeonSections = document.querySelectorAll(".spoiler_block");

    allAccordeonSections.forEach(function(section) {
      var bottomEl = section.querySelector(".spoiler_block_bottom");
      if (section !== clickedAccordeonSection) {
        bottomEl.style.maxHeight = "0px";
        // section.classList.remove("active_accord");
      }
    });

    var insideElHeight = clickedAccordeonSection.querySelector(
      ".spoiler_block_bottom > *"
    ).clientHeight;
    var bottomEl = clickedAccordeonSection.querySelector(
      ".spoiler_block_bottom"
    );

    if (bottomEl.style.maxHeight === insideElHeight + "px") {
      bottomEl.style.maxHeight = "0px";
      // clickedAccordeonSection.classList.remove("active_accord");
    } else {
      bottomEl.style.maxHeight = insideElHeight + "px";
      // clickedAccordeonSection.classList.add("active_accord");
    }
  };

  document.querySelectorAll(".spoiler_block").forEach(function(section) {
    section.addEventListener("click", accordeonHeaderClickHandler);
  });
})();

var starratings = document.querySelectorAll(".fs_starrating-1_icon");
starratings.forEach(function(element) {
  element.insertAdjacentHTML(
    "beforeend",
    '<svg width="100%" height="100%" viewBox="0 0 22 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.9424 8.31402C21.7982 7.84852 21.4034 7.51821 20.9353 7.47485L14.5858 6.87287L12.0754 0.741009C11.8896 0.29081 11.4679 0 10.9998 0C10.5317 0 10.1101 0.290781 9.92427 0.742254L7.41385 6.87287L1.06317 7.47485C0.596277 7.51949 0.202724 7.84852 0.0572795 8.31402C-0.0869426 8.77824 0.046278 9.28837 0.3995 9.60976L5.19917 14.0021L3.78385 20.5076C3.67996 20.9859 3.85838 21.4807 4.23849 21.7677C4.4426 21.922 4.68219 21.9998 4.92297 21.9998C5.13074 21.9998 5.3373 21.9411 5.52307 21.8263L10.9998 18.4097L16.4754 21.8263C16.8763 22.0776 17.3811 22.0546 17.7599 21.7677C18.1413 21.4795 18.3185 20.9846 18.2146 20.5076L16.7993 14.0021L21.6002 9.61105C21.9522 9.28838 22.0878 8.77952 21.9424 8.31402Z" fill="currentColor"/></svg>'
  );
});
