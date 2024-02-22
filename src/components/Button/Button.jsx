import styles from "./Button.module.css";
const Button = ({ isOutline, icon, text }) => {
  return (
    <div>
      <button className={isOutline ? styles.outLine : styles.primary_btn}>
        {icon}
        {text}
      </button>
    </div>
  );
};

export default Button;
