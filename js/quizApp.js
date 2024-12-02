// Function to display the questions and options for the quiz
function showQuetions(index) {
  const que_text = document.querySelector(".que_text");

  // Creating a new span and div tag for question and option and passing the value using array index
  let que_tag =
    "<span>" +
    questions[index].numb +
    ". " +
    questions[index].question +
    "</span>";
  let option_tag =
    '<div class="option"><span>' +
    questions[index].options[0] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[1] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[2] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[3] +
    "</span></div>";
  que_text.innerHTML = que_tag; // Adding new span tag inside que_tag to display question
  option_list.innerHTML = option_tag; // Adding new div tags inside option_tag to display options

  const option = option_list.querySelectorAll(".option");

  // Set onclick attribute to all available options
  for (i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}

// Function to handle the logic when a user selects an option
function optionSelected(answer) {
  clearInterval(counter); // Clear timer
  clearInterval(counterLine); // Clear progress bar
  let userAns = answer.textContent; // Get selected option text
  let correcAns = questions[que_count].answer; // Get correct answer from array
  const allOptions = option_list.children.length; // Get total number of options

  // If the user's answer is correct
  if (userAns == correcAns) {
    userScore += 1; 
    answer.classList.add("correct"); // Highlight correct option
    answer.insertAdjacentHTML("beforeend", tickIconTag); // Add tick icon
  } else {
    answer.classList.add("incorrect"); // Highlight incorrect option
    answer.insertAdjacentHTML("beforeend", crossIconTag); // Add cross icon

    // Highlight the correct answer
    for (i = 0; i < allOptions; i++) {
      if (option_list.children[i].textContent == correcAns) {
        option_list.children[i].setAttribute("class", "option correct");
        option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
      }
    }
  }

  // Disable all options once an answer is selected
  for (i = 0; i < allOptions; i++) {
    option_list.children[i].classList.add("disabled");
  }
  next_btn.classList.add("show"); // Show "Next" button
}

// Function to display the result screen based on user performance
function showResult() {
  info_box.classList.remove("activeInfo");
  quiz_box.classList.remove("activeQuiz"); 
  result_box.classList.add("activeResult"); 

  const scoreText = result_box.querySelector(".score_text");

  if (userScore > 3) {
    let scoreTag =
      "<span>and congrats! , You got <p>" +
      userScore +
      "</p> out of <p>" +
      questions.length +
      "</p></span>";
    scoreText.innerHTML = scoreTag; // Add score text
  } else if (userScore > 1) {
    let scoreTag =
      "<span>and nice , You got <p>" +
      userScore +
      "</p> out of <p>" +
      questions.length +
      "</p></span>";
    scoreText.innerHTML = scoreTag;
  } else {
    let scoreTag =
      "<span>and sorry , You got only <p>" +
      userScore +
      "</p> out of <p>" +
      questions.length +
      "</p></span>";
    scoreText.innerHTML = scoreTag;
  }
}

// Function to start the timer for each question
function startTimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    timeCount.textContent = time; // Update timer display
    time--;
    if (time < 9) {
      let addZero = timeCount.textContent;
      timeCount.textContent = "0" + addZero; // Add leading zero
    }
    if (time < 0) {
      clearInterval(counter); // Stop timer
      timeText.textContent = "Time Off"; 
      const allOptions = option_list.children.length;
      let correcAns = questions[que_count].answer;

      // Highlight the correct answer if time runs out
      for (i = 0; i < allOptions; i++) {
        if (option_list.children[i].textContent == correcAns) {
          option_list.children[i].setAttribute("class", "option correct");
          option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
        }
      }
      for (i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
      }
      next_btn.classList.add("show"); // Show "Next" button
    }
  }
}

// Function to manage the progress bar for the timer
function startTimerLine(time) {
  counterLine = setInterval(timer, 29);
  function timer() {
    time += 1;
    time_line.style.width = time + "px"; // Update progress bar width
    if (time > 549) {
      clearInterval(counterLine); // Stop progress bar
    }
  }
}

// Function to update the question counter display
function queCounter(index) {
  let totalQueCounTag =
    "<span><p>" +
    index +
    "</p> of <p>" +
    questions.length +
    "</p> Questions</span>";
  bottom_ques_counter.innerHTML = totalQueCounTag; // Update counter
}
