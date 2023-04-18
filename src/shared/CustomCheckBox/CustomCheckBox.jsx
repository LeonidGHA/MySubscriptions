const CustomCheckBox = ({
  id,
  name,
  value,
  className,
  classNameLabel,
  checked,
  onChange,
  labelText,
  required,
  children,
}) => {
  return (
    <label className={classNameLabel}>
      {labelText}
      <input
        className={className}
        id={id}
        onChange={onChange}
        type="checkbox"
        name={name}
        value={value}
        checked={checked === value}
        required={required}
      />
      {children}
    </label>
  );
};

export default CustomCheckBox;
