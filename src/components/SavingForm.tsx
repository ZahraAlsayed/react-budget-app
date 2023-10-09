const SavingForm =()=> {
    return (
        <div>
        <form>

            <div>
                <label htmlFor='target'>Set Target </label>
                <input type='number' name='target' id='target'/>
                
            </div>
            <button>Reset </button>
        </form>
        <div>
            <p>Currunt Saving : </p>
            <p>Target  : </p>
            <progress max={100} value={5}/>
        </div>
    </div>
    )
    }
    export default SavingForm;