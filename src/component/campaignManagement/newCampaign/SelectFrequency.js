import React from 'react';
import { Space, Form, Select } from 'antd';
const { Option } = Select;
import tagcross from '../../../assets/images/tagcross.svg';
import CircleCheck from '../../../assets/images/Circle_Check.png';
import UnCircleCheck from '../../../assets/images/Circle.png';
const FormDaySelected = ({ frequencyData }) => {
  const handleFrequeny = (a) => {
    console.log(a);
  };
  return (
    <div className="day-selected">
      <label>{frequencyData['label']}</label>
      <Select
        size="large"
        placeholder={frequencyData['placeholder']}
        popupClassName="select-day"
        value={frequencyData['placeholder']}
        onChange={(a) => handleFrequeny(a)}
      >
        {frequencyData['option'].map((data, index) => {
          return (
            <Option key={data['label']} value={data['value']} label={data['label']}>
              <Space>
                <span role="img" aria-label="China">
                  <img src={data['isCheck'] ? CircleCheck : UnCircleCheck} alt="BigCo Inc. logo" />
                </span>
                {data['label']}
              </Space>
            </Option>
          );
        })}
      </Select>
      <div className="selected-tags">
        <div className="selected-item">
          <p>Tuesday</p>

          <img src={tagcross} />
        </div>
        <div className="selected-item">
          <p>Tuesday</p>
          <img src={tagcross} />
        </div>
      </div>
    </div>
  );
};

export default FormDaySelected;
