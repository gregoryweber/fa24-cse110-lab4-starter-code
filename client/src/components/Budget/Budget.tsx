import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { fetchBudget } from "../../utils/budgent-utils";

const Budget = () => {
  const context = useContext(AppContext);

  useEffect(() => {
    loadBudget();
    } , []);

    const loadBudget = async () => {
      try {
        const budget = await fetchBudget();
        context.setBudget(budget);
      } catch (error) {
        console.error("Failed to fetch budget", error);
      }
    };

  return (
    <div className="alert alert-secondary p-3 d-flex align-items-center justify-content-between">
      <div>Budget: {context.budget}</div>
    </div>
  );
};

export default Budget;
