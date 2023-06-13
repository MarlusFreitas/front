import styles from "./Input.module.css";

function Input({ type, text, name, placeholder, handleOnclick, value }) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}:</label>
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        onChange={handleOnclick}
        value={value}
      />
    </div>
  );
}

export default Input;
