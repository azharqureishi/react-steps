import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }

  function handleNext() {
    if (step < 3) setStep(step + 1);
  }

  return (
    <div className=" w-2/6 my-24 mx-auto py-20 px-24 bg-slate-300 shadow-lg rounded-lg">
      <div className=" flex justify-between items-center mb-8 ">
        <div
          className={`${
            step >= 1 ? "bg-indigo-500" : ""
          } flex justify-center items-center h-10 w-10 bg-slate-500 rounded-full text-lg`}
        >
          1
        </div>
        <div
          className={`${
            step >= 2 ? "bg-indigo-500" : ""
          } flex justify-center items-center h-10 w-10 bg-slate-500 rounded-full text-lg`}
        >
          2
        </div>
        <div
          className={`${
            step >= 3 ? "bg-indigo-500" : ""
          } flex justify-center items-center h-10 w-10 bg-slate-500 rounded-full text-lg`}
        >
          3
        </div>
      </div>
      <div className=" flex justify-center items-center flex-col  font-bold my-14 text-xl">
        <p>{messages[step - 1]}</p>
      </div>
      <div className=" flex justify-between items-center mt-24">
        <button
          className=" cursor-pointer border-none text-sm font-bold bg-indigo-500 py-2 px-4 rounded-lg"
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          className=" cursor-pointer border-none text-sm font-bold bg-indigo-500 py-2 px-4 rounded-lg"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
