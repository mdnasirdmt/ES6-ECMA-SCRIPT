


function eventattach() {
  
  let count =1;

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
        console.log("button clicked "+ count++);
      });
  
  });
}
eventattach();


// 1. Function that is passed on as argument to another function is called callback function.
// 2. setTimeout helps turn JS which is singleThreaded and synchronous into asynchronous.
// 3. Event listeners can also invoke closures with scope.
// 4. Event listeners consume a lot of memory which can potentially slow down the website 
// therefore it is good practice to remove if it is not used.