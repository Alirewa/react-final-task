function Select({ value, onChange, options }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="textField__input py-3 text-xs"
    >
      {options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
