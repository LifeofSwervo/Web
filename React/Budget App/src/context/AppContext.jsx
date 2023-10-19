import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

// 5. The reducer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
            };
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(
                    (expense) => expense.id !== action.payload
                ),
            };
        case 'SET_BUDGET':
            return {
                ...state,
                budget: action.payload,
            };
        default:
            return state;
    }   
};

// 1. Initial state upon app loading
const intitalState = {
    budget: 2000,
	expenses: [
		{ id: uuidv4(), name: 'Savings $600', cost: 600 },
		{ id: uuidv4(), name: 'Supplements $115', cost: 115 },
		{ id: uuidv4(), name: 'Transportation $0', cost: 0 },
		{ id: uuidv4(), name: 'Food $120', cost: 120 },
		{ id: uuidv4(), name: 'Snacks $20', cost: 20 },
    ],
};

// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext(); // Create context object

// 3. Provider component - wraps the components we want to give access to the state
// Accepts child elements, which are the nested(wrapped) components
export const AppProvider = (props) => {
    // 4. Sets up the app state. Takes a reducer, and an initial state
    const [state, dispatch] = useReducer(AppReducer, intitalState);

    // 5. Returns our context. Pass in the values we want to expose
    return (
        <AppContext.Provider 
            value ={{
                expenses: state.expenses,
                budget: state.budget,
                dispatch,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};