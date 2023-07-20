import React from 'react';
import { Form, Input, DatePicker, TimePicker } from 'antd';
import SelectFrequency from './SelectFrequency';
import SelectCampaigntype from './SelectCampaignType';
import { useDispatch, useSelector } from 'react-redux';
import { setCampaignName, setMessageType, setFrequecny } from '../../../reducers/campaign';
import { weekDays, monthDays } from '../../../config/data';
import Moment from 'moment';
const Detail = () => {
  const { campaignName, messageType, selectedFrequency } = useSelector((state) => state.campaignSlice);
  const dispatch = useDispatch();
  const handleCampaignName = (v) => {
    console.log(v.target.value);
    dispatch(setCampaignName(v.target.value));
  };
  const handleMessageType = (v) => {
    dispatch(setMessageType(v.target.value));
    console.log(v.target.value);
  };
  const handleFrequencyType = (v) => {
    dispatch(setFrequecny(v.target.value));
  };
  const handleStartDate = () => {};
  const handleEndDate = () => {};
  const handleTime = () => {};
  const handleFrequencyDays = () => {};
  const disabledDate = (current) => {
    let data = false;
    if (current && current <= Moment().startOf('day')) {
      data = true;
    }
    if (current && current >= Moment().add(6, 'months')) {
      data = true;
    }
    return data;
  };
  const frequencyData = {
    everyDay: { label: 'Every', name: 'Every', placeholder: '', option: [] },
    weekDay: { label: 'Week', name: 'Week', placeholder: 'Select Day', option: weekDays },
    monthDay: { label: 'Month', name: 'Month', placeholder: 'Select Month Day', option: monthDays }
  };

  return (
    <>
      <div className="details-form">
        <h1>Campaign details</h1>
        <Form name="validateOnly" layout="vertical" autoComplete="off">
          <SelectCampaigntype />
          <Form.Item
            name="Campaig Name"
            label="Campaign Name"
            type="string"
            rules={[
              {
                required: true
              }
            ]}
          >
            <Input
              defaultValue={campaignName}
              onChange={(v) => handleCampaignName(v)}
              placeholder="Enter campaign name here"
              className="detailsInput"
            />
          </Form.Item>

          <Form.Item
            name="name"
            label="Message Type"
            rules={[
              {
                required: true
              }
            ]}
          >
            {[
              { name: 'OneTime', value: 'onetime' },
              { name: 'Recursive', value: 'recursive' }
            ].map((message, index) => {
              return (
                <>
                  <input
                    type="radio"
                    className="deatils-readio"
                    onChange={(v) => handleMessageType(v)}
                    id={message['value']}
                    name={message['name']}
                    value={message['value']}
                    checked={message['value'] === messageType ? true : false}
                  />
                  <label className="radio">{message['name']}</label>
                </>
              );
            })}
          </Form.Item>
          <Form.Item
            name="Startingdate"
            label="Starting Date"
            rules={[
              {
                required: true
              }
            ]}
          >
            <DatePicker disabledDate={disabledDate} className="detailsInput" placeholder="Enter Starting Date" />
          </Form.Item>

          {messageType !== 'onetime' && (
            <Form.Item
              name="Endingdate"
              label="Ending Date"
              rules={[
                {
                  required: true
                }
              ]}
            >
              <DatePicker disabledDate={disabledDate} className="detailsInput" placeholder="Enter Ending Date" />
            </Form.Item>
          )}

          <Form.Item
            name="time"
            label="Time"
            rules={[
              {
                required: true
              }
            ]}
          >
            <TimePicker format="h A" className="detailsInput" />
          </Form.Item>

          {messageType !== 'onetime' && (
            <Form.Item
              name="Frequency"
              label="Frequency"
              rules={[
                {
                  required: true
                }
              ]}
            >
              {[
                { name: 'Everyday', value: 'everyDay' },
                { name: 'Any week day', value: 'weekDay' },
                { name: 'Any month day', value: 'monthDay' }
              ].map((message, index) => {
                return (
                  <>
                    <input
                      type="radio"
                      className="deatils-readio"
                      onChange={(v) => handleFrequencyType(v)}
                      id={message['value']}
                      name={message['name']}
                      value={message['value']}
                      checked={message['value'] === selectedFrequency ? true : false}
                    />
                    <label className="radio">{message['name']}</label>
                  </>
                );
              })}
            </Form.Item>
          )}
        </Form>
        {messageType !== 'onetime' && (
          <>
            {' '}
            {selectedFrequency !== 'everyDay' && <SelectFrequency frequencyData={frequencyData[selectedFrequency]} />}
          </>
        )}

        <div className="details-btn">
          <button className="cancel-btn">Cancel</button>
          <button className="cancel-btn" style={{ marginLeft: '13px' }}>
            Delete
          </button>
          <button className="save-btn">Save as Draft</button>
          <button className="conti-btn">Continue</button>
        </div>
      </div>
    </>
  );
};
export default Detail;
