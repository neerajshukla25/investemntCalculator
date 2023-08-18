import { useState } from "react";
import Header from "./Header/Header";
import ResultTable from "./ResultTable/ResultTable";
import UserInput from "./UserInput/UserInput";
function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = []; // per-year results

  if (userInput) {
    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution
      });
    }

    // console.log(yearlyData);
  }

  return (
    <div>
      <Header />

      <UserInput onCalculate={calculateHandler} />
      {!userInput && <p>No investment calculated yet.</p>}
      {userInput && (
        <ResultTable
          data={yearlyData}
          initialinvestment={userInput["current-savings"]}
        />
      )}

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
    </div>
  );
}

export default App;
