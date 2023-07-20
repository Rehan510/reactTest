import React from 'react';
import { Select, Space, Form } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedCampaignType } from '../../../reducers/campaign';
const { Option } = Select;
const Selectcampaigntype = () => {
  const dispatch = useDispatch();
  const { campaignTypes } = useSelector((state) => state.communicationSlice);
  const { selectedCampaignType } = useSelector((state) => state.campaignSlice);
  const handleChange = (a) => {
    dispatch(setSelectedCampaignType(a));
  };
  return (
    <div>
      <Form.Item
        name="Campaign Type"
        label="Campaign Type"
        rules={[
          {
            required: true
          }
        ]}
      >
        <Select
          size="large"
          defaultValue={selectedCampaignType}
          value={selectedCampaignType}
          placeholder="Enter campaign type"
          className="detailsInput"
          popupClassName="select-compaign"
          onChange={(a) => handleChange(a)}
        >
          {campaignTypes.map((data, index) => {
            return (
              <Option key={`type${index}`} value={data['campaignTypeId']} label={data['description']}>
                <Space>{data['description']}</Space>
              </Option>
            );
          })}
        </Select>
      </Form.Item>
    </div>
  );
};

export default Selectcampaigntype;
