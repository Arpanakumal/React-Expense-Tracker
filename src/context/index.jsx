import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [formData, setFormData] = useState({
    type: "expense",
    amount: 0,
    description: "",
  });

  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  // Load transactions from localStorage when the app starts
  const [allTransactions, setAllTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("transactions");
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });

  // Save transactions to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(
      "transactions",
      JSON.stringify(allTransactions)
    );
  }, [allTransactions]);

  function handleFormSubmit(currentFormData) {
    if (!currentFormData.description || !currentFormData.amount) return;

    const newTransaction = {
      ...currentFormData,
      id: Date.now(),
    };

    setAllTransactions((prevTransactions) => [
      ...prevTransactions,
      newTransaction,
    ]);
  }

  return (
    <GlobalContext.Provider
      value={{
        formData,
        setFormData,
        totalIncome,
        setTotalIncome,
        totalExpense,
        setTotalExpense,
        allTransactions,
        setAllTransactions,
        handleFormSubmit,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}