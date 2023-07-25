import React from "react";
import styles from "./Form.module.scss";

function DropDown() {
  return (
    <div>
      <div className={styles.option}>
        <div>1</div>
        <input
          type="text"
          className={styles.optionText}
          placeholder="옵션 1"
        ></input>

        <button className={styles.optionDelete}>X</button>
      </div>

      <div className={styles.option}>
        <div>옵션 추가</div>
        <div></div>
        <input type="text" className={styles.optionText}></input>
      </div>
    </div>
  );
}

export default DropDown;
