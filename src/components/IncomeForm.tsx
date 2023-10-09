const IncomeForm =()=> {
return (
    <div>
        <form>
            <div>
                <label htmlFor='source'>Income Source</label>
                <input type='text' name='source' id='source'/>

            </div>
        
            <div>
                <label htmlFor='amount'>Amount Of Income </label>
                <input type='number' name='amount' id='amount'/>
                
            </div>
            <div>
                <label htmlFor='date'>Date Of Income </label>
                <input type='date' name='date' id='date'/>
                
            </div>
            <button>ADD Income </button>

        </form>
        <ul>
            <li>Salary : </li>
            <li>Salary : </li>
        </ul>
    </div>
)
}
export default IncomeForm;