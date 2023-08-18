import { useState } from "react";
import classes from "./userinput.module.css";

const UserInput = (props) => {
  const initialState = {
    "current-savings": 1000,
    "yearly-contribution": 5000,
    "expected-return": 20,
    duration: 2
  };

  const [userInput, setUserInput] = useState(initialState);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // console.log("inside submit");

    props.onCalculate(userInput);
  };

  const ResetHandler = () => {
    setUserInput(initialState);
    // console.log("inside reset");
  };

  const InputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return { ...prevInput, [input]: value };
    });
    // console.log(input);
    // console.log(value);
  };

  return (
    <form onSubmit={onSubmitHandler} className={classes.form}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) =>
              InputChangeHandler("current-savings", event.target.value)
            }
            value={userInput["current-savings"]}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(event) =>
              InputChangeHandler("yearly-contribution", event.target.value)
            }
            value={userInput["yearly-contribution"]}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) =>
              InputChangeHandler("expected-return", event.target.value)
            }
            value={userInput["expected-return"]}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) =>
              InputChangeHandler("duration", event.target.value)
            }
            value={userInput["duration"]}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button
          onClick={ResetHandler}
          type="reset"
          className={classes.buttonAlt}
        >
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;
