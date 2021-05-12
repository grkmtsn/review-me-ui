import React from 'react';
import { Story, Meta } from '@storybook/react';
import Form, { FormProps } from './Form';
import { Col, Input, Row, Button, Radio, Checkbox, Switch, Space } from '../..';

type FormValues = {
  username: string;
  password: string;
  confirm: boolean;
  gender: string;
  theme: boolean;
};

export default {
  title: 'Atoms/Form',
  component: Form,
} as Meta;

const onSubmit = (data: FormValues) => {
  console.log({ data });
};

const Template: Story<FormProps<FormValues>> = (args) => {
  const form = Form.useForm({
    defaultValues: {
      username: 'Görkem',
      password: '123',
      confirm: true,
      gender: 'female',
      theme: true,
    },
  });

  return (
    <Form onSubmit={onSubmit} form={form}>
      <Row>
        <Col xs={12}>
          <Input
            name="username"
            label="Username"
            rules={{ required: { value: true, message: 'Zorunlu Alan' } }}
          />
        </Col>
        <Col xs={12}>
          <Input
            name="password"
            label="Password"
            rules={{ required: { value: true, message: 'Zorunlu Alan' } }}
            type="password"
          />
        </Col>
        <Col xs={12}>
          <Checkbox name="confirm" text="Are you confirm?" />
        </Col>
        <Col xs={12}>
          <Space>
            <Radio name="gender" text="Female" value="female" />
            <Radio name="gender" text="Male" value="male" />
          </Space>
        </Col>
        <Col xs={12}>
          <Switch name="theme" text="Switch Theme" />
        </Col>
        <Col xs={12}>
          <Button type="submit">Save</Button>
        </Col>
      </Row>
    </Form>
  );
};

export const Default = Template.bind({});
Default.args = {};
