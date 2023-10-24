import React from 'react';
import { Modal, Form, Input, Button } from 'antd';
import {  validateAddress, validateEmail, validateLocation, validateName, validatePassword, validatePhone, validateRole } from './ValidateInput';
 
const AddUserModal = ({ visible, handleCancel, form, onFinish }) => {
  return (
    <Modal className='modal-form-item' visible={visible} title="Add Data" onCancel={handleCancel} footer={null}>
       <Form form={form} onFinish={onFinish}>
            <Form.Item rules={[{validator:validateName}]} name="firstName" label="First Name">
              <Input className='Modal-input' />
            </Form.Item>
            <Form.Item rules={[{validator:validateName}]} name="lastName" label="Last Name">
              <Input className='Modal-input' />
            </Form.Item>
            <Form.Item rules={[{validator:validateEmail}]} name="email" label="Email">
              <Input className='Modal-input' />
            </Form.Item>
            <Form.Item rules={[{validator:validateRole}]} name="roleID" label="Role ID">
              <Input className='Modal-input' />
            </Form.Item>
            <Form.Item rules={[{validator:validatePassword}]} name="password" label="Password">
              <Input className='Modal-input' />
            </Form.Item>
            <Form.Item rules={[{validator:validateAddress}]} name="address" label="Address">
              <Input className='Modal-input' />
            </Form.Item>
            <Form.Item rules={[{validator:validatePhone}]} name="phone" label="Phone">
              <Input className='Modal-input' />
            </Form.Item>
            <Form.Item rules={[{validator:validateLocation}]} name="location" label="Location">
              <Input className='Modal-input' />
            </Form.Item>
            <Form.Item>
              <Button className="Modal-button" type="primary" htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </Form>
    </Modal>
  );
};

export default AddUserModal;
