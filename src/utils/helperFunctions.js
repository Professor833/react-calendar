// create digits from 1 to 9
const createNumbers = ({ className, onClickFunc }) => {
  let numbers = [];
  for (let i = 1; i <= 9; i++) {
    const btnElm = (
      <button
        className={className}
        key={i}
        onClick={(e) => onClickFunc(i.toString())}
      >
        {i}
      </button>
    );
    numbers.push(btnElm);
  }
  return numbers;
};

// export all functions
export { createNumbers };
