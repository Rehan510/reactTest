import React, { useState } from 'react';
import { Select, Space, Form, Input, Upload, message } from 'antd';
import Uploadicon from '../../../assets/images/Upload.svg';
import Crossicon from '../../../assets/images/Cross.svg';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedCustomeBase, setFileDetail } from '../../../reducers/campaign';
import Button from './Button';

const buttons = [
  {
    label: 'Back',
    className: 'cancel-btn'
  },
  {
    label: 'cancel',
    className: 'cancel-btn'
  },
  {
    label: 'Save as draft',
    className: 'save-btn'
  },
  {
    label: 'Continue',
    className: 'save-btn'
  }
];
const Addmessage = () => {
  const { userTypesBase, selectedCustomeBase, fileDetail } = useSelector((state) => state.campaignSlice);
  const dispatch = useDispatch();
  const { Option } = Select;
  const { TextArea } = Input;

  const handleChange = (value) => {
    dispatch(setSelectedCustomeBase(value));
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
  const handleFileChange = (info) => {
    if (info.file.status === 'uploading') {
      console.log('up');

      return;
    }
    if (info.file.status === 'done') {
      console.log('doen');
      console.log(info['file']);
      dispatch(setFileDetail({ name: info['file'].name, status: true }));
      getBase64(info.file.originFileObj, (url) => {
        // setLoading(false);
        // setImageUrl(url);
      });
    }
  };
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const handleClick = (button) => {
    console.log('Clicked:', button);
  };
  return (
    <div className="register add-message-form">
      <strong>Add Message</strong>
      <div className="form-wrapper">
        <div className="form-data">
          <div className="base-select">
            <p>Base</p>
            <Select
              size="large"
              placeholder="Select Base"
              className="detailsInput"
              defaultValue={selectedCustomeBase}
              value={selectedCustomeBase}
              popupClassName="select-compaign"
              onChange={(a) => {
                handleChange(a);
              }}
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

          {selectedCustomeBase === 9 && (
            <div className="form-dragger">
              <p>Upload Custom Base File</p>
              <Form.Item className="main-upload">
                <Form.Item name="dragger" valuePropName="fileList" noStyle>
                  <Upload.Dragger
                    name="files"
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    beforeUpload={beforeUpload}
                    onChange={handleFileChange}
                  >
                    <p className="ant-upload-drag-icon">
                      <img src={Uploadicon} alt="upload" />
                    </p>
                    <p className="ant-upload-text">
                      Click to upload <span>or drag and drop</span>
                    </p>
                    <p className="ant-upload-hint">.xlsv or .csv</p>
                  </Upload.Dragger>
                </Form.Item>
              </Form.Item>
            </div>
          )}
          {fileDetail && (
            <span className="uploaded-file">
              <p>{fileDetail['name']}</p>
              <img src={Crossicon} alt="crossIcon" />
            </span>
          )}
          <div className="btn-wrapper">
            {buttons.map((btn) => {
              return <Button onClick={() => handleClick(btn)} label={btn.label} className={btn.className} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Addmessage;
