'use client'

import { db } from "@/db/db.model";
import { Button, Form, Input, Space } from "antd"
import { useRouter } from 'next/navigation';
import { SubmitHandler } from "react-hook-form";
import yup from "yup";
import { schema } from "./validation";

type FormData = yup.InferType<typeof schema>;

const yupSync = {
  async validator({ field }: any, value: any) {
    await schema.validateSyncAt(field, { [field]: value });
  },
};

export default function MainContents() {
  const router = useRouter();
  const [form] = Form.useForm();
  
  // 操縦者データの登録処理
  const submitHandler: SubmitHandler<FormData> = async (data) => {
    db.pilots.add({
      pilotName: data.pilotName,
    });
    router.push("/");
  }
  
  // キャンセルボタンクリック時の処理
  const handleCancelClick = () => {
    router.push("/");
  };

  return (
    <Form 
      layout="horizontal" 
      autoComplete="off" 
      labelCol={{ flex: '100px' }}
      colon={false}
      form={form}
      onFinish={submitHandler}
    >
      <Form.Item
        hasFeedback
        label="操縦者名"
        name="pilotName"
        rules={[yupSync]}
      >
        <Input />
      </Form.Item>
      <Form.Item label=" ">
        <Space>
          <Button type="primary" htmlType="submit">
            登 録
          </Button>
          <Button type="default" htmlType="button" onClick={handleCancelClick}>
            キャンセル
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );

}