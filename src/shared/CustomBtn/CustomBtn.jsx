const CustomBtn = ({ text, onClick, className }) => {
  return (
    <button className={className} type="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomBtn;
