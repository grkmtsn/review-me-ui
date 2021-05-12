import React from 'react';
import { Story, Meta } from '@storybook/react';
import Form, { FormProps } from './Form';
import { Col, Input, Row, Button, Radio, Checkbox } from '../..';

export default {
  title: 'Atoms/Form',
  component: Form,
} as Meta;
const onSubmit = (data: any) => {
  console.log({ data });
};

const Template: Story<FormProps> = (args) => {
  const form = Form.useForm({
    defaultValues: {
      username: 'Görkem',
      password: '123',
      confirm: true,
      gender: 'female',
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
          <Checkbox name="confirm" text="Are you confirm?" disabled />
        </Col>
        <Col xs={12}>
          <Radio name="gender" text="Female" value="female" disabled />
          <Radio name="gender" text="Male" value="male" disabled />
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
