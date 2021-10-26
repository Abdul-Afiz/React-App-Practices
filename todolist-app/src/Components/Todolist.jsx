import CheckIcon from "./Vectors/Checkicon";
import CloseIcon from "./Vectors/Closeicon";
import Summary from "./Summary";

const Todolist = ({
  list,
  onClickToggle,
  onClickClose,
  selectedStatus,
  onClickStatus,
  onClickCLearCompleted,
  showSummary,
  itemsLeft,
}) => {
  return (
    <div className={`Todolist ${list.length ? "has-todo" : ""}`}>
      {list.map((item, itemIndex) => (
        <div className="todo-item" key={`todo-item_${itemIndex}`}>
          <div className="check" onClick={() => onClickToggle(itemIndex)}>
            {item.completed && <CheckIcon />}
          </div>
          <span className={item.completed ? "complete" : ""}>{item.text}</span>
          <CloseIcon onClick={() => onClickClose(itemIndex)} />
        </div>
      ))}
      {showSummary ? (
        <Summary
          itemsLeft={itemsLeft}
          onClickCLearCompleted={onClickCLearCompleted}
          selectedStatus={selectedStatus}
          onClickStatus={onClickStatus}
        />
      ) : null}
    </div>
  );
};

export default Todolist;
