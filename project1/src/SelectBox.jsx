import React from "react";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Box from "@mui/joy/Box";

function SelectBox() {
  return (
    <Box sx={{ width: 200 }}>
      <Select defaultValue="단답형">
        <Option value="단답형">단답형</Option>
        <Option value="장문형">장문형</Option>
        <Option value="객관식 질문">객관식 질문</Option>
        <Option value="체크박스">체크박스</Option>
        <Option value="드롭다운">드롭다운</Option>
      </Select>
    </Box>
  );
}
export default SelectBox;
