import React from 'react';
import { Select, Form, Input, DatePicker, Upload, TimePicker, Space, message } from 'antd';
import RejectedCompaignType from './RejectedCompaignType'
import Moment from 'moment';
import { setFrequecny } from '../../../reducers/campaign';
import Uploadicon from '../../../assets/images/Upload.svg';
import Crossicon from '../../../assets/images/Cross.svg';
import { weekDays, monthDays } from '../../../config/data';
import { useDispatch, useSelector } from 'react-redux';
import RejectFrequency from './RejectFrequency';
import Button from '../newCampaign/Button';
import CurrentInfo from '../newCampaign/CurrentInfo'

const Rejectedcampaign = () => {
  const buttons = [
    {
      label: 'Cacnel',
      className: 'cancelBtn'
    },
    {
      label: 'Submit for Approval',
      className: 'approveBtn'
    }
  ];
  const { Option } = Select;
  const { TextArea } = Input;

  const dispatch = useDispatch();
  const { userTypesBase, fileDetail } = useSelector((state) => state.campaignSlice);

  const { selectedFrequency } = useSelector((state) => state.campaignSlice);
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
  const handleFrequencyType = (v) => {
    dispatch(setFrequecny(v.target.value));
  };
  const frequencyData = {
    everyDay: { label: 'Every', name: 'Every', placeholder: '', option: [] },
    weekDay: { label: 'Week', name: 'Week', placeholder: 'Select Day', option: weekDays },
    monthDay: { label: 'Month', name: 'Month', placeholder: 'Select Month Day', option: monthDays }
  };
  const beforeUpload = (file) => {
    console.log(file.type);
    const isJpgOrPng = file.type === 'application/vnd.ms-excel' || file.type === 'text/csv';
    if (!isJpgOrPng) {
      message.error('You can only upload .xlsv/csv file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 5;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };
  const handleClick = (button) => {
    console.log('Clicked:', button);
  }
  return (
    <>
      <CurrentInfo />
      <div className="rejected-wrapper">
        <div className="details-wrapper">


          <Form name="validateOnly" layout="vertical" autoComplete="off">
            <RejectedCompaignType />
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
                // defaultValue={campaignName}
                // onChange={(v) => handleCampaignName(v)}
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
                      // onChange={(v) => handleMessageType(v)}
                      id={message['value']}
                      name={message['name']}
                      value={message['value']}
                    // checked={message['value'] === messageType ? true : false}
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

            {/* {messageType !== 'onetime' && ( */}
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
            {/* )} */}
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

            {selectedFrequency !== 'everyDay' && <RejectFrequency frequencyData={frequencyData[selectedFrequency]} />}
          </Form>
          <div className="register add-message-form">
            <div className="form-wrapper">
              <div className="form-data">
                <div className="base-select">
                  <p>Base</p>
                  <Select
                    size="large"
                    placeholder="Select Base"
                    className="detailsInput"
                    // defaultValue={selectedCustomeBase}
                    // value={selectedCustomeBase}
                    popupClassName="select-compaign"
                  // onChange={(a) => {
                  //   handleChange(a);
                  // }}
                  >
                    {userTypesBase.map((data, index) => {
                      return (
                        <Option key={`type${index}`} value={data['userTypeId']} label={data['description']}>
                          <Space>{data['description']}</Space>
                        </Option>
                      );
                    })}
                  </Select>
                </div>

                <div className="text-area">
                  <p>Message</p>
                  <Form.Item>
                    <TextArea className="textArea" rows={4} placeholder="Type text here" maxLength={250} />
                  </Form.Item>
                </div>

                {/* {selectedCustomeBase === 9 && ( */}
                <div className="form-dragger">
                  <p>Upload Custom Base File</p>

                </div>
                {/* )} */}
                {/* {fileDetail && ( */}
                <span className="uploaded-file">
                  {/* <p>{fileDetail['name']}</p> */}
                  <img src={Crossicon} alt="crossIcon" />
                </span>
                {/* )} */}
                <div className='btn-wrapper'>
                  {buttons.map((btn) => {
                    return <Button onClick={() => handleClick(btn)} label={btn.label} className={btn.className} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rejected-reason">
          <h1>Reason of Rejection</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur elit ex, ut tempor urna venenatis at. Integer augue metus, tempus sit amet quam a,
</p>
        </div>
      </div>
    </>
  );

}

export default Rejectedcampaign;
