


document.addEventListener("DOMContentLoaded", function () {
  // Get the element with the ID "clickme" and add a click event listener

  // const clickMeButton = document.getElementById("clickme");

  // if (clickMeButton) {
  //   clickMeButton.addEventListener("click", function () {
  //     console.log('clicked button');
  //   });
  // }

  document.getElementById("clickme")
    .addEventListener("click", function btn() {
      console.log("button clicked ");
    });

});
