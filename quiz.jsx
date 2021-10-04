import React, { Component } from "react";
import PicViewer from "./picViewer";
import Result from "./result";
import auth from "./authService";
class Quiz extends Component {
  state = {
    animals: [
      {
        image: "./animals/bear.jpg",
        options: ["Lion", "Buffalo", "Bear"],
        answer: "Bear",
      },
      {
        image: "./animals/buffalo.jpg",
        options: ["Tiger", "Buffalo", "Deer"],
        answer: "Buffalo",
      },
      {
        image: "./animals/camel.jpg",
        options: ["Camel", "Deer", "Tiger"],
        answer: "Camel",
      },
      {
        image: "./animals/cat.jpg",
        options: ["Dog", "Cat", "Mouse"],
        answer: "Cat",
      },
      {
        image: "./animals/cow.jpg",
        options: ["Buffalo", "Goat", "Cow"],
        answer: "Cow",
      },
      {
        image: "./animals/deer.jpg",
        options: ["Camel", "Deer", "Tiger"],
        answer: "Deer",
      },
      {
        image: "./animals/dog.jpg",
        options: ["Fox", "Dog", "Cat"],
        answer: "Dog",
      },
      {
        image: "./animals/elephant.jpg",
        options: ["Elephant", "Buffalo", "Bear"],
        answer: "Elephant",
      },
      {
        image: "./animals/fox.jpg",
        options: ["Dog", "Deer", "Fox"],
        answer: "Fox",
      },
      {
        image: "./animals/goat.jpg",
        options: ["Cow", "Goat", "Bear"],
        answer: "Goat",
      },
      {
        image: "./animals/lion.jpg",
        options: ["Lion", "Tiger", "Fox"],
        answer: "Lion",
      },
      {
        image: "./animals/mouse.jpg",
        options: ["Panda", "Mouse", "Cat"],
        answer: "Mouse",
      },
      {
        image: "./animals/panda.jpg",
        options: ["Bear", "Deer", "Panda"],
        answer: "Panda",
      },
      {
        image: "./animals/snake.jpg",
        options: ["Snake", "Mouse", "Goat"],
        answer: "Snake",
      },
      {
        image: "./animals/tiger.jpg",
        options: ["Lion", "Fox", "Tiger"],
        answer: "Tiger",
      },
    ],
    currentIndex: 0,
    wrong: 0,
    attempt: 0,
    msg:""
  };
  handleAnswer = (val) => {
    let s1 = { ...this.state };
    if (s1.animals[s1.currentIndex].answer !== val) {
      s1.wrong++;
      s1.msg="Wrong Answer";
    }
    else{
      s1.msg="";
      s1.currentIndex++;
    }
    this.setState(s1);
  };
  handleRestart = () => {
    let s1 = { ...this.state };
    s1.attempt = s1.attempt + 1;
    s1.animals =
      s1.attempt % 2 === 0
        ? s1.animals.sort((a1, a2) => a1.answer.localeCompare(a2.answer))
        : s1.animals.sort((a1, a2) => a2.answer.localeCompare(a1.answer));
    s1.currentIndex = 0;
    s1.wrong = 0;
    this.setState(s1);
  };
  render() {
    let { animals, currentIndex, wrong, attempt,msg } = this.state;
    return (
      <div className="container text-center">
        {currentIndex < 5 ? (
          <PicViewer
            pic={animals[currentIndex].image}
            checkAnswer={this.handleAnswer}
            animals={animals}
            index={currentIndex}
            msg={msg}
          />
        ) : (
          <Result
            name={auth.getUser()}
            wrong={wrong}
            attempt={attempt}
            restart={this.handleRestart}
          />
        )}
      </div>
    );
  }
}
export default Quiz;
