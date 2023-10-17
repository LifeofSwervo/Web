import { useState } from "react";


const AddExpenseForm = () => {
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        const expense = {
                id: uuiv4(),
                name,
                cost: parseInt(cost),
        };

        dispatch({
                type: 'ADD_EXPENSE',
                payload: expense,
        });

        setName('');
        setCost('');
    };

    return(
        <form onSubmit={onSubmit}>
            <div className='row'>
                <div className='col-sm col-lg-4'>
                    <label for='name'>Name</label>
                    <input required='required' type='text' 
                           className='form-control' id='name' 
                           value={name} 
                           onChange={(event) => setName(event.target.value)}
                           ></input>
                </div>
                <div className='col-sm col-lg-4'>
                    <label for='cost'>Cost</label>
                    <input required='required' type='text' 
                           className='form-control' id='cost'
                           value={cost}
                           onChange={(event) => setCost(event.target.value)}
                        />
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-sm'>
                    <button type='submit' className='btn btn-primary mt-3'>
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
};

export default AddExpenseForm;