# Quiz App

#### A Word Game, Created by React.js, Express.js and Chakra UI   

## Live Preview

[https://quizapp-0emu.onrender.com/](https://quizapp-0emu.onrender.com/)

## Description

The Quiz App is a responsive and progressive (installable) web application built with React.js for the front-end and Express.js for the back-end. The app allows users to take a quiz where they are presented with a series of questions and are required to select the correct answer. After completing the quiz, the app displays the user's score and rank based on their performance.


![Untitled-1](https://github.com/oayman0/quiz-app-react-express/assets/37955772/db7d530f-a92b-4e3c-bec1-669db3eb9c70)

![Untitled-2](https://github.com/oayman0/quiz-app-react-express/assets/37955772/d21ff763-b0c8-4630-8a61-efc32f092972)

![Untitled-3](https://github.com/oayman0/quiz-app-react-express/assets/37955772/ece0d169-0a9a-43c5-9951-f82616cde0cd)

## Wireframes  ([Figma](https://www.figma.com/file/DyJmaGRTZYCIBNdjmIY94v/Untitled?type=design&node-id=0%3A1&mode=design&t=XEuZPl9bcXyVpsVH-1))


![Frame 1](https://github.com/oayman0/quiz-app-react-express/assets/37955772/f7ff81a2-3210-4640-a9b0-a4548a94ed2b)

![Frame 3 (1)](https://github.com/oayman0/quiz-app-react-express/assets/37955772/59f10d6c-a17b-40c6-b2fc-c26e0c333e36)






## How to Run the Project Locally

To run the Quiz App on your local machine, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) and npm should be installed on your machine.

### Clone the Repository

Open your terminal or command prompt and run the following command to clone the repository to your local machine:

```sh
git clone https://github.com/oayman0/quiz-app-react-express.git
```

### Install Dependencies

Navigate to the project's root directory:

```sh
cd quiz-app-react-express
```

Install the required Node.js dependencies for both the React front-end and Express back-end:
```sh
cd react-app
npm install
```

```sh
cd ../express-app
npm install
```

### Start the Development Servers

To start both the React and Express development servers, open two separate terminals or command prompts:

**Terminal 1 (React Front-end):**

```sh
cd react-app
npm start
```


**Terminal 2 (Express Back-end):**

```sh
cd express-app
npm start
```



The React front-end should be running at `http://localhost:3000`, and the Express back-end at `http://localhost:8000`.

### Usage

1. Open your web browser and go to `http://localhost:3000`.
2. The landing page will appear, press the "Start Quiz" button to begin the quiz.
3. You will be presented with a series of questions. Click on one of the four answer options to select your answer.
4. After selecting an answer, press the "Submit" button to see feedback on whether your answer was correct or not.
5. Continue answering the questions until you complete the quiz.
6. Once the quiz is complete, your score will be displayed along with your rank.
7. If you wish to try the quiz again with same questions, press the "Try Again" button.
8. For new questions, press the 'New Game' button

## Running Jest Test Cases

To run the Jest test cases navigate to the desired app folder and run the following command:

```sh
npm test
```

Jest will run the test cases and display the results in the terminal.

## Author

- Omar Khalaf (oayman0) - Software Engineer

---

Feel free to reach out if you have any questions or encounter any issues with the Quiz App!

Happy quizzing! 🚀
