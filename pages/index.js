import Head from "next/head";
import Header from "./components/header";
import { useState } from "react";
import QuestionForm from "./components/questionForm";
import responses from "../data";
import QuestionTable from "./components/QuestionTable";
import EightBall from "./components/eightBall";
import Footer from "./components/footer";

const Home = () => {
  const [counter, setCounter] = useState(0);
  const [answerLest, setAnswerLest] = useState([]);
  const [latestAnswer, setLatestAnswer] = useState("");
  const formHandler = (e) => {
    e.preventDefault();
    setCounter(counter + 1);
    // console.log(counter);
    const randomReply = responses[Math.floor(Math.random() * responses.length)];
    let answer = {
      question: e.target.question.value,
      id: answerLest.length,
      reply: randomReply,
    };
    setAnswerLest([...answerLest, answer]);
    setLatestAnswer(randomReply);
    // console.log("12222", answerLest);
  };
  // console.log("answerLest");

  return (
    <>
      <Head>
        <title>Magic 8 Ball</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header counter={counter} />
      {answerLest.length <= 5 ? (
        <QuestionForm formHandler={formHandler} />
      ) : (
        <></>
      )}
      <EightBall latestAnswer={latestAnswer} />
      <QuestionTable answerLest={answerLest} />
      <Footer result={latestAnswer} />
    </>
  );
};

export default Home;
