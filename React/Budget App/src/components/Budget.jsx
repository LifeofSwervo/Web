import { useContext, useState } from "react";
import EditBudget from "./EditBudget";
import ViewBudget from "./ViewBudget";
import { AppContext } from "../context/AppContext";


const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    const [isEditing, setIsEditing] = useState(false);

    // Helpers
    const handleEditClick = () => {
        setIsEditing(true); // Sets "setIsEditing" to true
    };

    const handleSaveClick = value => {
        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        });
        setIsEditing(false); // Sets "setIsEditing" to false
    };

    return (
        <div className="alert alert-secondary p-3 d-flex align-items-center justify-content-between">
            {isEditing ? ( // If isEditing is true render EditBudget, if not - ViewBudget.
                <EditBudget handleSaveClick={handleSaveClick} budget={budget} />
            ) : (
                // For part 1 render component inline rather than create a separate one
                <ViewBudget handleEditClick={handleEditClick} budget={budget} />
            )}
        </div>
    );
};

export default Budget;