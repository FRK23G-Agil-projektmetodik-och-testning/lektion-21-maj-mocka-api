import './TodoItem.css';

function TodoItem(props) {
  const { task, done } = props; // Detta kallas objekt destructuring, där man plockar ut egenskaper från ett objekt som sin egen variabel

  let doneText = 'Ej klar';

  if (done) {
    doneText = 'Klar';
  }

  return (
    <li className='todo-item'>
      {task} - {doneText}
    </li>
  );
}

export default TodoItem;
