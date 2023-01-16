const poll = {
  question: "What is your favorite progamming language?",
  option: ["0:Javscipt", "1:HTML", "2:css", "3:c++"],
  answer: new Array(4).fill(0),
  myFc() {
    const answer = prompt(`${this.question}\n${this.option.join("\n")}`);

    typeof answer === "number" &&
      answer < this.answer.length &&
      this.answer[answer]++;
    console.log(answer.length);
    this.displayResults();
    this.displayResults("string");
  },
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answer);
    } else if (type === "string") {
      console.log(`Poll results: ${this.answer.join(",")}`);
    }
  },
};
// poll.myFc();
const answer = document.querySelector(".answer");
answer.addEventListener("click", poll.myFc.bind(poll));
