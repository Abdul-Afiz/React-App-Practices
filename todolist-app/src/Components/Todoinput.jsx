import CaretDown from "./Vectors/CaretDown";

const Todoinput = ({
  value,
  onchange,
  addTodo,
  showCaret = false,
  clickCaret = () => {},
}) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };
  return (
    <div className="todoinput">
      <CaretDown
        onClick={() => showCaret && clickCaret()}
        className={!showCaret ? "hidden" : ""}
      />
      <input
        type="text"
        value={value}
        onChange={onchange}
        placeholder="What needs to be done?"
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default Todoinput;
