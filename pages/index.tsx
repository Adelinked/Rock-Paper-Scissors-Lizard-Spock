import type { NextPage } from "next";
import Head from "next/head";

import { useEffect, useState, useRef } from "react";
import InitiaState from "../components/InitiaState";
import ResultState from "../components/ResultState";
import RulesComponent from "../components/RulesComponent";
import LogoBonus from "../components/LogoBonus";
import evaluateResult from "../utils/game";

const Home: NextPage = () => {
  const [score, setScore] = useState(0);
  const [showRules, setShowRules] = useState(false);
  const [choice, setChoice] = useState("");
  const [gameState, setGameState] = useState("Initial");
  const count = useRef(0);
  useEffect(() => {
    setScore(Number(localStorage.getItem("score")));
    count.current = 0;
  }, []);
  useEffect(() => {
    if (choice === "") return;
    setGameState("Result");
  }, [choice]);

  useEffect(() => {
    count.current++;
    console.log(count.current);
    let id: ReturnType<typeof setTimeout>;
    if (score === 0) {
      if (localStorage.getItem("score") && count.current > 1)
        id = setTimeout(() => {
          const loseEmojis = ["🙈", "😀", "🙉", "🙃"];
          const random = Math.floor(Math.random() * loseEmojis.length);
          alert(`Your score is zero ${loseEmojis[random]}, try again!`);
        }, 20);
    }
    if (score && score % 10 === 0) {
      const winEmojis = ["🎉", "😎", "👏", "💪"];
      const random = Math.floor(Math.random() * winEmojis.length);
      const highestScoreStored = localStorage.getItem("highestScore");
      const highestScore = highestScoreStored ? Number(highestScoreStored) : 0;
      if (count.current > 1 && score > highestScore) {
        localStorage.setItem("highestScore", String(score));
        id = setTimeout(() => {
          alert(`Well done ${winEmojis[random]} your score is: ${score}!`);
        }, 20);
      }
    }
    if (count.current > 1) localStorage.setItem("score", String(score));
    return () => clearTimeout(id);
  }, [score]);

  return (
    <div className="flex relative flex-col items-center justify-center overflow-hidden">
      <Head>
        <title>Rock Paper Scissors Lizard Spock</title>
        <link rel="icon" href="/images/favicon-32x32.png" />
        <meta
          name="description"
          content="A solution to Rock Paper Scissors Lizard Spock frontend mentor challenge"
        />
      </Head>
      <RulesComponent showRules={showRules} setShowRules={setShowRules} />

      <header className="flex justify-between border-4 border-headerOutline rounded-md w-80 sm:w-[36rem] lg:w-[44rem] mt-8  ">
        <div className=" flex items-center  p-6 sm:p-8 sm:py-5  ">
          <LogoBonus />
        </div>
        <div className="p-3 sm:p-6 flex items-center ">
          {" "}
          <div className="bg-white flex flex-col items-center px-6 sm:px-12 py-3 sm:py-6 rounded ">
            <p className=" text-scoreText tracking-widest text-xs sm:text-xl ">
              SCORE
            </p>
            <p className=" text-darkText text-3xl sm:text-7xl font-bold">
              {score}
            </p>
          </div>
        </div>
      </header>
      <div className="py-20 sm:py-10" />
      <main>
        {gameState === "Initial" ? (
          <div className="flex items-center justify-center  h-[20rem]  sm:h-[30rem]  ">
            <InitiaState setChoice={setChoice} />
          </div>
        ) : null}

        {gameState === "Result" ? (
          <div className="  h-[20rem] w-[310px] sm:w-[750px] lg:w-full   sm:h-[30rem]  ">
            {" "}
            <ResultState
              choice={choice}
              setChoice={setChoice}
              result={evaluateResult(choice)}
              setGameState={setGameState}
              setScore={setScore}
            />
          </div>
        ) : null}

        <div className="flex flex-col sm:flex-row items-center justify-end lg:w-[1100px] sm:pr-8  ">
          <div className="py-32 sm:p-0 " />
          <div className="flex flex-col sm:flex-row items-center justify-evenly    w-[20rem] h-[10rem]">
            <button
              onClick={() => setShowRules((rules) => !rules)}
              className="px-10 py-4 border-2 text-xl tracking-widest cursor-pointer rounded-lg border-headerOutline hover:text-headerOutline hover:bg-white"
            >
              RULES
            </button>
            {score !== 0 ? (
              <button
                onClick={() => {
                  const result = confirm("Reset the score to 0?");
                  if (result) {
                    count.current = 0;
                    setScore(0);
                    localStorage.setItem("score", "0");
                    const highestScoreStored =
                      localStorage.getItem("highestScore");
                    if (highestScoreStored)
                      localStorage.setItem("highestScore", "0");
                  }
                }}
                className=" px-10 py-4 border-2 text-xl tracking-widest cursor-pointer rounded-lg border-headerOutline hover:text-headerOutline hover:bg-white"
                title="reset score"
              >
                RESET
              </button>
            ) : null}
          </div>
        </div>
      </main>

      <footer role="contentinfo" className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://adelinked.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Adelinked
        </a>
        .
      </footer>
    </div>
  );
};

export default Home;
