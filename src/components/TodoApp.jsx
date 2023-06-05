import Header from '@/components/Header.jsx';
import TodosLogic from '@/components/TodosLogic.jsx';

const TodoApp = () => {
  return (
    <div className="wrapper">
      <div className="todos">
        <Header />
        <TodosLogic />
      </div>
    </div>
  );
};
export default TodoApp;
