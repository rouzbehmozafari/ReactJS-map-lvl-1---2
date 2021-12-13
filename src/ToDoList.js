import ToDoItem from "./ToDoItem";
import ToDoData  from './ToDoData';



const ToDoList = () => {
    return ( 
        <div className="ToDoList">
            {ToDoData.map(i =>
                <ToDoItem
                id = {i.id}
                check = {i.completed}
                txt = {i.task} />)} 
        </div>
     );
}
 
export default ToDoList;