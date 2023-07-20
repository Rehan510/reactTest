import React from 'react';
import { Select, Space, Form } from 'antd';

const { Option } = Select;
const RejectedCompaignType = () => {
    const campaignType =  [
      {
        campaignTypeId: 1,
        campaignType: 'PROMOTIONAL_SMS',
        description: 'Promotinal SMS'
      },

      {
        campaignTypeId: 2,
        campaignType: 'NEWS_AND_UPDATES',
        description: 'New and Updates'
      },

      {
        campaignTypeId: 3,
        campaignType: 'PUSH_NOTIFICATIONS',
        description: 'Push Notifications'
      },

      {
        campaignTypeId: 4,
        campaignType: 'FLASH_POP_UP',
        description: 'Flash Pop Up'
      },

      {
        campaignTypeId: 5,
        campaignType: 'SUCCESSFUL_COMPLETION',
        description: 'Successful Completion'
      }
    ];
 
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
        //   defaultValue={selectedCampaignType}
        //   value={selectedCampaignType}
          placeholder="Enter campaign type"
          className="detailsInput"
          popupClassName="select-compaign"
        //   onChange={(a) => handleChange(a)}
        >
          {campaignType.map((data, index) => {
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

export default RejectedCompaignType;
