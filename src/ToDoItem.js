const ToDoItem = (props) => {
    return ( 
        <div className="ToDoItem">
            <input type="checkbox" />
            <span>{props.txt}</span>
        </div>
     );
}
 
export default ToDoItem;