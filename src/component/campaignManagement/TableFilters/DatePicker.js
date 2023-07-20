import React from 'react';
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;
const App = () => {
  const handleDate = (a) => {
    console.log(a);
  };
  return (
    <>
      <RangePicker
        format="YYYY-MM-DD"
        onChange={(a) => {
          handleDate(a);
        }}
        placement="bottomRight"
        size="large"
        className="filter-item"
      />
    </>
  );
};
export default App;
