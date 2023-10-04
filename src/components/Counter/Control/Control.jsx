const Control = ({ onIncrement, OnDecrement, step }) => {
  return (
    <div className="buttonControl">
      <button type="button" onClick={onIncrement}>
        Increment by {step}
      </button>
      <button type="button" onClick={OnDecrement}>
        Decrement by {step}
      </button>
    </div>
  );
};

export { Control };
