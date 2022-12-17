const choices = ["rock", "paper", "scissors", "lizard", "spock"];

const houseChoice = () => {
  const random = Math.floor(Math.random() * 5);

  return choices[random];
};

const evaluateResult = (choice: string) => {
  const oc = houseChoice();
  let result = "DRAW";
  if (choice === oc) return [result, oc];
  switch (choice) {
    case "spock":
      if (oc === "scissors" || oc === "rock") result = "WIN";
      else result = "LOSE";

      break;
    case "scissors":
      if (oc === "paper" || oc === "lizard") result = "WIN";
      else result = "LOSE";

      break;
    case "paper":
      if (oc === "rock" || oc === "spock") result = "WIN";
      else result = "LOSE";
      break;
    case "rock":
      if (oc === "lizard" || oc === "scissors") result = "WIN";
      else result = "LOSE";
      break;
    case "lizard":
      if (oc === "spock" || oc === "paper") result = "WIN";
      else result = "LOSE";
      break;
  }
  return [result, oc];
};

export default evaluateResult;
