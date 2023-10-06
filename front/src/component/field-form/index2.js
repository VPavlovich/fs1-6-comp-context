//before 25:18  UseState - помилка в відлачику в файлі field-form/index.js на строчці 47 
import { useState, memo, useContext } from "react";
import "./index.css";
// import { App } from '../../App.js';
// import { ThemeContext } from (App);
import { ThemeContext } from "../../App";
// export default function Component({ placeholder, button, onSubmit }) {
function Component({ placeholder, button, onSubmit }) {
  const [value, setValue] = useState("");
  
  const handleChange = (e) => setValue(e.target.value);

  const handleSubmit = () => {
    if (value.length === 0) return null;

    if (onSubmit) {
      onSubmit(value);
    } else {
      throw new Error("onSubmit props is undefined");
    }

    setValue("");
  };

  const isDisabled = value.length === 0;

  const theme = useContext(ThemeContext);

  console.log(theme);

  return (
    <div className="field-form">
      <textarea
        onChange={handleChange}
        value={value}
        rows={2}
        placeholder={placeholder}
        className="field-form__field"
      ></textarea>
      <button
        disabled={isDisabled}
        onClick={handleSubmit}
        className={`field-form__button`}
      >
        {button}
      </button>
      <button onClick={theme.toggle()}  className={`field-form__button`}>
{/* // Помилка ТУТ - на 47 стр. Нижче списана помилка з відладчику */}
      {/* React 5
    handleChangeTheme App.js:17
    Component index.js:47
    React 10
    workLoop scheduler.development.js:266 */}
        Change theme
      </button>      
    </div>
  );
}

export default memo(Component);

// <button
// // onClick={() => theme.setTheme(theme.currentTheme === theme.THEME_TYPE.DARK ? theme.THEME_TYPE.LIGHT : theme.THEME_TYPE.DARK)}
// onClick={theme.toggle()}  className={`field-form__button`}
// // className={`field-form__button  field-form__button--${theme.currentTheme}`}
// >