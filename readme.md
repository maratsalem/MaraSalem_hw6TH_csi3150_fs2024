# Quiz App Demo Tutorial

## Quiz App

The purpose of this application is to provide a web quiz application that tests the user’s knowledge from a select topic.

## Functional Features

- The application must be able to display questions on a browser, and react to the user selecting an answer.
- The application must be able to determine the correct answer and display it after the user has submitted their answer.
- The application must be able to time the user's response time towards each quiz question.
- The quiz timer should be an optional choice for the user.

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

Note: The use of `<i>defer</i>` in the script elements means that the script will be loaded AFTER the page itself has been loaded. Then, the order that a script is loaded would rely on their order of linking within the HTML file.

1. Inside `index.html`, include the following code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz App Demo</title>

    <!-- CSS FILE -->
    <link rel="stylesheet" href="./css/style.css">
    <!-- Font Awesome kit for icons, add your own kit link -->
    <script src="https://kit.fontawesome.com/4a4f4b55b0.js" crossorigin="anonymous"></script>

    <!-- Add questions list -->
    <script src="./js/questions.js" defer></script>

    <!-- Main logic of the app -->
    <script src="./js/quizApp.js" defer></script>
</head>
<body>
    <!-- Quiz START Button -->
    <div class="start_btn"><button>Start Quiz</button></div>

    <!-- Instruction box wrapper -->
    <div class="info_box">
        <div class="info-title"><span>Some Rules of this Quiz</span></div>
        <div class="info-list">
            <div class="info">1. You will have only <span>15 seconds</span> per each question.</div>
            <div class="info">2. Once you select your answer, it can't be undone.</div>
            <div class="info">3. You can't select any option once time goes off.</div>
            <div class="info">4. You can't exit from the Quiz while you're playing.</div>
            <div class="info">5. You'll get points on the basis of your correct answers.</div>
        </div>
        <div class="buttons">
            <button class="quit">Exit Quiz</button>
            <button class="restart">Continue</button>
        </div>
    </div>

    <!-- Quiz Box -->
    <div class="quiz_box">
        <header>
            <div class="title">Demo Quiz App in JavaScript</div>
            <div class="timer">
                <div class="time_left_txt">Time Left</div>
                <div class="timer_sec">15</div>
            </div>
            <div class="time_line"></div>
        </header>
        <section>
            <div class="que_text">
                <!-- Insert questions from ./js/questions.js -->
            </div>
            <div class="option_list">
                <!-- Insert options to questions from ./js/questions.js -->
            </div>
        </section>

        <!-- footer of Quiz Box -->
        <footer>
            <div class="total_que">
                <!-- Insert Question Count Number dynamically from JavaScript App logic -->
            </div>
            <button class="next_btn">Next Que</button>
        </footer>
    </div>

    <!-- Result Box -->
    <div class="result_box">
        <div class="icon">
            <i class="fas fa-crown"></i>
        </div>
        <div class="complete_text">You've completed the Quiz!</div>
        <div class="score_text">
            <!-- Insert dynamic user score as Result from JavaScript -->
        </div>
        <div class="buttons">
            <button class="restart">Replay Quiz</button>
            <button class="quit">Quit Quiz</button>
        </div>
    </div>

</body>
</html>
```

### Step 4: Insert code into style.css and quizApp.js

1. Inside `./CSS/style.css`, insert the following code (you can customize this as per your styling preference).
2. Inside the `quizApp.js` file, insert the necessary logic to handle the quiz functionality, including question display, answer checking, timer functionality, score tracking, and result display. 

### Step 5: Final Testing

After completing all the steps above, it's important to test the functionality of your quiz app. Here's how you can test it

:

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
3. **Try redesigning the `quizApp.js` JavaScript functionality.
