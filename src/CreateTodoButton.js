import './CreateTodoButton.css'

function CreateTodoButton(){
    return(
    <button 
        className="CreateTodoButton" 
        onClick={
            (event) => {
                console.log('diste click')
                console.log(event)
                console.log(event.target)
    }
    }
    >Create</button>
    );
}
export { CreateTodoButton }