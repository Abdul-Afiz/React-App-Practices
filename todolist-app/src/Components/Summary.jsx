import React from "react";

const Summary = ({
  selectedStatus,
  onClickStatus,
  onClickCLearCompleted,
  itemsLeft,
}) => {
  const statuses = ["all", "active", "completed"];
  return (
    <div className="summary">
      <span>{itemsLeft} items left</span>
      <div className="statuses">
        {statuses.map((status, statusIndex) => (
          <span
            onClick={() => onClickStatus(status)}
            className={selectedStatus === status ? "selected" : ""}
            key={`status-${statusIndex}`}
          >
            {status}
          </span>
        ))}
      </div>
      <span onClick={onClickCLearCompleted} className="clear">
        Clear completed
      </span>
    </div>
  );
};

export default Summary;
