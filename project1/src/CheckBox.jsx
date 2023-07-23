import React from "react";
import styles from "./Form.module.scss";

function CheckBox() {
  return (
    <div>
      <div className={styles.option}>
        <input type="checkbox"></input>
        <div className={styles.optionText}>옵션1</div>
        <button className={styles.optionDelete}>X</button>
      </div>

      <div className={styles.option}>
        <input type="checkbox"></input>
        <div className={styles.optionText}>옵션 추가 또는 '기타' 추가</div>
      </div>
    </div>
  );
}

export default CheckBox;
