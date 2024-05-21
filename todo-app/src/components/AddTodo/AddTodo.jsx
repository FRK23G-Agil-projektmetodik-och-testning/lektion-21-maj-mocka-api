import './AddTodo.css';

function AddTodo(props) {
    const { updateTodos } = props;

    let todo = {
        title: '',
        completed: false
    }

    function handleInput(event) {
        todo.title = event.target.value;
    }

    function handleCheckbox(event) {
        console.log(event.target.checked);
        todo.completed = event.target.checked;
    }

    function addTodo() {
        updateTodos(todo);
    }

    
    return (
        <section className='add-todo'>
            <input type='text' className='add-todo__input' onKeyUp={ handleInput } />
            <section>
                <label htmlFor="done">Status:</label>
                <input type="checkbox" id="done" onChange={ handleCheckbox } />
            </section>
            <button className='add-todo__button' onClick={ addTodo }>Lägg till todo</button>
        </section>
    )
}

// const input = document.querySelector('input');

// input.addEventListener('keyup', (event) => {
//     console.log(event.target.value);
// });

export default AddTodo;