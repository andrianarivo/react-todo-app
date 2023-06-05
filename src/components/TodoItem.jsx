const TodoItem = ({ itemProp, handleChange, delTodo }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={itemProp.completed}
        onChange={() => handleChange(itemProp.id)}
      />
      {itemProp.title}
      <button onClick={() => delTodo(itemProp.id)}>Delete</button>
    </li>
  );
};
export default TodoItem;
