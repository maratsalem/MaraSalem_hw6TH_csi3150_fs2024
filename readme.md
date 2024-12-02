# Quiz App Demo Tutorial

## Quiz App

The purpose of this application is to provide a web quiz application that tests the user’s knowledge from a select topic.

## Functional Features

- The application must be able to display questions on a browser, and react to the user selecting an answer.
- The application must be able to determine the correct answer and display it after the user has submitted their answer.
- The application must be able to time the user's response time towards each quiz question.

## Pre-requisites

- This project will be built using HTML, JavaScript, and CSS.
- If you want to test your App development as you progress, make sure you have a live server available for use.
- Recommended development software: Visual Studio Code.
  - Recommended development extensions for Visual Studio Code: Live Server, JavaScript (ES6) code snippets, HTML CSS Support

## Tutorial Steps

### Step 1: Project directory setup

1. Create a project folder in your desired project path. Then, create a new project in Visual Studio Code with the project folder you have created.
2. Inside the folder, create an `index.html` file, and two new folders: `JS` and `CSS`. Inside the `CSS` folder, create a `style.css` file. Inside the `JS` folder, create `questions.js` and `quizApp.js` files.

Note: This step can be done manually through the UI, or through bash. The choice is up to you.

- Your project directory should look like this:

```
  Project Folder
    CSS
        style.css
    JS
        questions.js
        quizApp.js
  index.html
```

As you work through the project, to test the functionality of the code as you work, run `index.html` with Live Server.

### Step 2: Inserting quiz questions into questions.js

- The `questions.js` file functions as our 'backend' in this project. This JavaScript file will hold our quiz questions and answers, which we can then import to our `quizApp.js` for further use.

- Inside of this JS file, we create an array `questions` that contains objects with the following members: question number, questions, options, and answers. The questions provided involve coding languages, but feel free to modify the questions, answers, and options to your liking.

1. Inside of the `./JS/questions.js` file, insert the following code:

```javascript
// creating an array of objects
let questions = [
  {
    numb: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language",
    ],
  },
  {
    numb: 2,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet",
    ],
  },
  {
    numb: 3,
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor",
    ],
  },
  {
    numb: 4,
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language",
    ],
  },
  {
    numb: 5,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language",
    ],
  },
  // Duplicate the object declaration and initialization above for more questions
];
```

### Step 3: Build HTML UI

- HTML is our user interface, and deals with the way our website is structured. To ensure functionality between our HTML, CSS, and JS files, we add links and scripts to our HTML.

In the below HTML code, you will see:

```
    a. <!-- CSS FILE -->
      <link rel="stylesheet" href="./css/style.css">

    b. <!-- Add questions list -->
      <script src="./js/questions.js" defer></script>

    c. <!-- Main logic of the app -->
      <script src="./js/quizApp.js" defer></script>
```

- This code is placed inside the header of our `index.html`.
  - 1. These lines link the CSS stylesheet to the HTML file, which ensures that our styling is applied to HTML elements.
  - 2. These lines load our questions that are stored inside our `questions.js` file. It is important we load this script first, so that our `quizApp.js` is able to access the data from it.
  - 3. These lines load our `quizApp.js`, which stores the logic and functionality for our application. It is important that this is loaded after the `questions.js`, since it needs to utilize the data inside the file.

Note: The use of <i>defer</i> in the script elements means that the script will be loaded AFTER the page itself has been loaded. Then, the order that a script is loaded would rely on their order of linking within the HTML file.

1. Inside `index.html`, include the following code:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Quiz App Demo</title>

    <!-- CSS FILE -->
    <!-- Styles for the layout and design of the Quiz App -->
    <link rel="stylesheet" href="./css/style.css" />

    <!-- Linking JavaScript files -->
    <!-- Make sure to link the questions file first, as it contains the question data used by quizApp.js -->
    <script src="./js/questions.js" defer></script>
    <!-- Main logic of the app. Interacts with the elements below to create quiz functionality -->
    <script src="./js/quizApp.js" defer></script>
  </head>
  <body>
    <!-- Quiz START Button -->
    <!-- Clicking this button triggers the logic in quizApp.js to show the instruction box -->
    <div class="start_btn"><button>Start Quiz</button></div>

    <!-- Instruction box wrapper -->
    <!-- Displayed when the quiz starts. The "Continue" button calls quizApp.js logic to start the quiz -->
    <div class="info_box">
      <div class="info-title"><span>Some Rules of this Quiz</span></div>
      <div class="info-list">
        <div class="info">
          1. You will have only <span>15 seconds</span> per each question.
        </div>
        <div class="info">
          2. Once you select your answer, it can't be undone.
        </div>
        <div class="info">
          3. You can't select any option once time goes off.
        </div>
        <div class="info">
          4. You can't exit from the Quiz while you're playing.
        </div>
        <div class="info">
          5. You'll get points on the basis of your correct answers.
        </div>
      </div>
      <div class="buttons">
        <!-- Clicking "Exit Quiz" exits the instructions, while "Continue" starts the quiz -->
        <button class="quit">Exit Quiz</button>
        <button class="restart">Continue</button>
      </div>
    </div>

    <!-- Quiz Box -->
    <!-- Main quiz container. Dynamically populated by quizApp.js using data from questions.js -->
    <div class="quiz_box">
      <header>
        <div class="title">Demo Quiz App in JavaScript</div>
        <div class="timer">
          <div class="time_left_txt">Time Left</div>
          <!-- Timer value dynamically updated by quizApp.js -->
          <div class="timer_sec">15</div>
        </div>
        <div class="time_line"></div>
      </header>
      <!-- Note that all html for the display of que_text and option_list is declared within quizApp.js -->
      <!-- The styling for dynamically added html is within style.css -->
      <section>
        <!-- Question text dynamically inserted here from questions.js by quizApp.js -->
        <div class="que_text"></div>
        <!-- Answer options dynamically inserted here from questions.js by quizApp.js -->
        <div class="option_list"></div>
      </section>

      <!-- Footer of Quiz Box -->
      <footer>
        <div class="total_que">
          <!-- Current question count dynamically inserted by quizApp.js -->
        </div>
        <!-- Clicking "Next Que" moves to the next question via quizApp.js logic -->
        <button class="next_btn">Next Que</button>
      </footer>
    </div>

    <!-- Result Box -->
    <!-- Displayed at the end of the quiz. Dynamically updated with the user's score from quizApp.js -->
    <div class="result_box">
      <div class="icon">
        <i class="fas fa-crown"></i>
      </div>
      <div class="complete_text">You've completed the Quiz!</div>
      <div class="score_text">
        <!-- User's final score dynamically inserted here by quizApp.js -->
      </div>
      <div class="buttons">
        <!-- "Replay Quiz" resets the quiz, and "Quit Quiz" ends it. Both handled by quizApp.js -->
        <button class="restart">Replay Quiz</button>
        <button class="quit">Quit Quiz</button>
      </div>
    </div>
  </body>
</html>

```

### Step 4: Insert code into style.css and quizApp.js

1. Inside `./CSS/style.css`, insert the following code (you can customize this as per your styling preference).
```
/* importing google fonts */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");

/* Reset the browser defaults */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  background: #a020f0;
}

/* Selection color styling */
::selection {
  color: #fff;
  background: #a020f0;
}

/* Core containers for the app */
.start_btn,
.info_box,
.quiz_box,
.result_box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

/* Styles for dynamic visibility, aka things created in quizApp.js */
.info_box.activeInfo,
.quiz_box.activeQuiz,
.result_box.activeResult {
  opacity: 1;
  z-index: 5;
  pointer-events: auto;
  transform: translate(-50%, -50%) scale(1);
}

/* Start button appearance */
.start_btn button {
  font-size: 25px;
  font-weight: 500;
  color: #a020f0;
  padding: 15px 30px;
  outline: none;
  border: none;
  border-radius: 5px;
  background: #fff;
  cursor: pointer;
}

/* Info box container and title */
.info_box {
  width: 540px;
  background: #fff;
  border-radius: 5px;
  transform: translate(-50%, -50%) scale(0.9);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
}

.info_box .info-title {
  height: 60px;
  width: 100%;
  border-bottom: 1px solid lightgrey;
  display: flex;
  align-items: center;
  padding: 0 30px;
  border-radius: 5px 5px 0 0;
  font-size: 20px;
  font-weight: 600;
}

/* Rules list inside the info box */
.info_box .info-list {
  padding: 15px 30px;
}

.info_box .info-list .info {
  margin: 5px 0;
  font-size: 17px;
}

.info_box .info-list .info span {
  font-weight: 600;
  color: #a020f0;
}

/* Button styling inside info box */
.info_box .buttons button {
  margin: 0 5px;
  height: 40px;
  width: 100px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 5px;
  border: 1px solid #a020f0;
  transition: all 0.3s ease;
}

/* Quiz box main container */
.quiz_box {
  width: 550px;
  background: #fff;
  border-radius: 5px;
  transform: translate(-50%, -50%) scale(0.9);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
}

/* Timer inside the quiz header */
.quiz_box header .timer {
  color: #682a8f;
  background: #cce5ff;
  border: 1px solid #b8daff;
  height: 45px;
  padding: 0 8px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 145px;
}

/* Dynamic time left indicator */
.quiz_box header .time_line {
  position: absolute;
  bottom: 0px;
  left: 0px;
  height: 3px;
  background: #a020f0;
}

/* Section where questions and options are displayed */
section .option_list .option {
  background: aliceblue;
  border: 1px solid #84c5fe;
  border-radius: 5px;
  padding: 8px 15px;
  font-size: 17px;
  margin-bottom: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Feedback styling for correct and incorrect options */
.option_list .option.correct {
  color: #155724;
  background: #d4edda;
  border: 1px solid #c3e6cb;
}

.option_list .option.incorrect {
  color: #721c24;
  background: #f8d7da;
  border: 1px solid #f5c6cb;
}

/* Buttons for navigating the quiz */
footer button {
  height: 40px;
  padding: 0 13px;
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;
  border: none;
  outline: none;
  color: #fff;
  border-radius: 5px;
  background: #a020f0;
  border: 1px solid #a020f0;
  line-height: 10px;
  opacity: 0;
  pointer-events: none;
  transform: scale(0.95);
  transition: all 0.3s ease;
}

/* Results box with score display */
.result_box {
  background: #fff;
  border-radius: 5px;
  display: flex;
  padding: 25px 30px;
  width: 450px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  transform: translate(-50%, -50%) scale(0.9);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
}

/* Buttons in results box */
.result_box .buttons button {
  margin: 0 10px;
  height: 45px;
  padding: 0 20px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 5px;
  border: 1px solid #a020f0;
  transition: all 0.3s ease;
}

```
2. Inside the `quizApp.js` file, insert the necessary logic to handle the quiz functionality, including question display, answer checking, timer functionality, score tracking, and result display. 
```
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

```




### Step 5: Final Testing

After completing all the steps above, it's important to test the functionality of your quiz app. Here's how you can test it:

1. **Testing Locally**:
   - Open the `index.html` file in your browser.
   - You can use Visual Studio Code's *Live Server* extension to preview and test the app. This ensures all changes reflect in real-time as you work.

2. **Host the Application**:
   - If you want to share your quiz app with others, you can host it using services like [GitHub Pages](https://pages.github.com/).
   - Follow this [GitHub Pages tutorial](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) to set up a live version of your project.

### **Step 6: Optional Improvements**

Once the basic quiz app is functioning, consider these improvements to enhance user experience and functionality:

1. **Multiple Categories**: Implement functionality where users can select different categories of questions (e.g., General Knowledge, Science, History).
2. **Responsive Design**: Improve the app’s responsiveness for mobile and tablet views by adding media queries in `style.css`.
3. Try redesigning the `quizApp.js` JavaScript functionality by adding more options for questions, or by adding more questions. 
