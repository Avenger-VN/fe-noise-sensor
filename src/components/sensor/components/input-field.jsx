import React from "react"
import { Form, Input } from "antd"

export default function InputField({
  name,
  label,
  rules,
  onChange,
  placeholder,
}) {
  return (
    <Form.Item name={name} label={label} rules={rules}>
      <Input
        name={name}
        className="Modal-input"
        placeholder={placeholder}
        onChange={onChange}
      />
    </Form.Item>
  )
}
