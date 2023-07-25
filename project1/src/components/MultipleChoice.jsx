import React from "react";
import Radio from "@mui/joy/Radio";
import styles from "./Form.module.scss";

function MultipleChoice() {
  return (
    <div>
      <div className={styles.option}>
        <Radio
          color="primary"
          orientation="vertical"
          size="md"
          variant="outlined"
        />
        <div className={styles.optionText}>옵션1</div>
        <button className={styles.optionDelete}>X</button>
      </div>
      <div className={styles.option}>
        <Radio
          color="primary"
          orientation="vertical"
          size="md"
          variant="outlined"
        />
        <div className={styles.optionText}>옵션 추가 또는 '기타' 추가</div>
      </div>
    </div>
  );
}

export default MultipleChoice;
