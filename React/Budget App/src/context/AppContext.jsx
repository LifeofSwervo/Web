import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

// 5. The reducer - this is used to update teh state, based on the action
export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'Add_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
            };

        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expense.filter(
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
}

// 1. Initial state upon app loading
const intitalState = {
    budget: 2000,
	expenses: [
		{ id: uuidv4(), name: 'Shopping', cost: 50 },
		{ id: uuidv4(), name: 'Holiday', cost: 300 },
		{ id: uuidv4(), name: 'Transportation', cost: 70 },
		{ id: uuidv4(), name: 'Fuel', cost: 40 },
		{ id: uuidv4(), name: 'Child Care', cost: 500 },
    ],
};

// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext();

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