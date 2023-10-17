
import { useContext, useEffect, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);

    const [filteredExpenses, setFilteredExpenses] = useState(expenses || []);

    useEffect(() => {
        setFilteredExpenses(expenses);
    }, [expenses])

    const handleChange = (event) => {
		const searchResults = expenses.filter((filteredExpense) =>
			filteredExpense.name.toLowerCase().includes(event.target.value)
		);
		setfilteredExpenses(searchResults);
	};

    return (
        <>
            <input
                type="text"
                class='form-control mb-2 mr-sm-2'
                placeholder={handleChange}
            />
            <ul className='list-group mt-3 mb-3'>
                {filteredExpenses.map((expenses) => (
                    <ExpenseItem id={expenses.id} 
                        name={expenses.name} 
                        cost={expenses.cost} 
                    />
                ))}
            </ul>
        </>
    );
};

export default ExpenseList;