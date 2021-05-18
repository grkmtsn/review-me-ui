import React from 'react';
import { Story, Meta } from '@storybook/react';
import Form, { FormProps } from './Form';
import { useDisclosure, useConfirm } from '../../../hooks';

import {
  Col,
  Input,
  Row,
  Button,
  Radio,
  Checkbox,
  Switch,
  Space,
  Pill,
  Text,
} from '../..';

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

const Template: Story<FormProps<FormValues>> = (args) => {
  const { isOpen, toggle } = useDisclosure();
  const { confirm } = useConfirm();
  const form = Form.useForm({
    defaultValues: {
      username: 'Görkem',
      password: '123',
      confirm: true,
      gender: 'female',
      theme: true,
    },
  });

  const onSubmit = (data: FormValues) => {
    confirm({
      cancelable: true,
      iconType: 'warning',
      title: 'Are you sure?',
      description:
        "There's no way of avoiding declaring the interface and the runtime values, because TS's types disappear at runtime, so you're only left with the runtime values. You can't generate one from the other.",
      okButtonProps: { children: 'Submit' },
      onOk: () => {
        alert(JSON.stringify(data));
      },
      onCancel: async () => {
        console.log('close');
      },
    });
  };

  const handleClick = () => {
    toggle();
  };

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
          <Button type="button" onClick={handleClick}>
            Show Languages
          </Button>
        </Col>
        {isOpen && (
          <Col xs={12}>
            <Space direction="vertical" align="start">
              <Text>Select Languages:</Text>
              <Space>
                <Pill text="C#" value="1" name="languageIds" />
                <Pill text="JavaScript" value="2" name="languageIds" />
                <Pill text="SwiftUI" value="3" name="languageIds" />
              </Space>
            </Space>
          </Col>
        )}
        <Col xs={12}>
          <Button type="submit">Save</Button>
        </Col>
      </Row>
    </Form>
  );
};

export const Default = Template.bind({});
Default.args = {};
