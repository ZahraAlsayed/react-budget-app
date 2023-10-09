const ExpensesForm =()=> {
    return (
        <div>
        <form>
            <div>
                <label htmlFor='source'>Expenses Source</label>
                <input type='text' name='source' id='source'/>

            </div>
        
            <div>
                <label htmlFor='amount'>Amount Of Expenses </label>
                <input type='number' name='amount' id='amount'/>
                
            </div>
            <div>
                <label htmlFor='date'>Date Of Expenses </label>
                <input type='date' name='date' id='date'/>
                
            </div>
            <button>ADD Epenses </button>

        </form>
        <ul>
            <li>Salary : </li>
            <li>Salary : </li>
        </ul>
    </div>
    )
    }
    export default ExpensesForm;