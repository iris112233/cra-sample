const Input = ({ id, text, value, onChangeHandler }) => {
  return (
    <>
      {/* label的htmlFor 通常會對應 input的id */}
      <label htmlFor={id} className="">
        {text}
      </label>
      <input type="text" id={id} value={value} onChange={onChangeHandler} />
    </>
  );
};
export default Input;
// {}
