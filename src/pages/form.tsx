import React, { useState } from 'react';
import '../App.css';
import { Layout, Space, Divider, Form, Input,Button,DatePicker,Select,Col,Row,Radio } from 'antd';
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
const { Header, Footer, Content } = Layout;

function FormPage(){
    const [formData, setFormData]=useState(null) 
    
    const onFinish = (formdata: any) => {
        console.log(formdata)
        setFormData(formdata)
    }
    
    return(
        <div className="Form">
            <Layout className='background'>
                <Header className='background header'><h2>Form & Table</h2></Header>
                <Content className='background'>
                    <Form
                     name="basic"
                     labelCol={{ span: 8 }}
                     wrapperCol={{ span: 16 }}
                     style={{ maxWidth: 800 }}
                     initialValues={{ remember: true }}
                     onFinish={onFinish}
                     autoComplete="off">
                        <Row>
                        <Form.Item style={{width:"240px"}} label="คำนำหน้า:" name="prefix"
                         rules={[{ required: true, message: 'Please input your prefix!' }]}
                        >
                        <Select>
                            <Select.Option value="นาย">นาย</Select.Option>
                            <Select.Option value="นาง">นาง</Select.Option>
                            <Select.Option value="นางสาว">นางสาว</Select.Option>
                        </Select>
                        </Form.Item>
                        <Form.Item
                        style={{}}
                        label="ชื่อจริง"
                        name="name"
                        rules={[{ required: true, message: 'Please input your name!' }]}
                        >
                        <Input />
                        </Form.Item>
                        <Form.Item
                        style={{}}
                        label="นามสกุล"
                        name="surname"
                        rules={[{ required: true, message: 'Please input your surname!' }]}
                        >
                        <Input />
                        </Form.Item>
                        </Row>
                        
                        <Row>
                        <Form.Item
                        style={{}}
                        label="วันเกิด"
                        name="dateofbirth"
                        rules={[{ required: true, message: 'Please input your surname!' }]}
                        >
                        <DatePicker />
                        </Form.Item>

                        <Form.Item style={{width:"300px",}} label="สัญชาติ:" name="nationality"
                         rules={[{ required: true, message: 'Please input your nationality!' }]}
                        >
                        <Select>
                            <Select.Option value="ไทย">ไทย</Select.Option>
                        </Select>
                        </Form.Item>
                        </Row>
                        
                        
                        <Row>
                            <Col span={24}>
                            <Form.Item
                        
                        label="หมายเลขบัตรประชาชน"
                        name="name"
                        rules={[{ required: true, message: 'Please input your Persoonal ID!' }]}
                        >
                        <Input style={{width:"50px"}}/> - <Input style={{width:"70px"}} /> - <Input style={{width:"70px"}} /> - <Input style={{width:"50px"}} /> - <Input style={{width:"50px"}} />
                        </Form.Item>
                            </Col>
                        
                        </Row>
                        <Form.Item
                        name="gender"
                        label="เพศ"
                        rules={[{ required: true, message: 'Please pick an gender!' }]}
                        >
                            <Radio.Group>
                            <Radio value={"ชาย"}>ชาย</Radio>
                            <Radio value={"หญิง"}>หญิง</Radio>
                            <Radio value={"ไม่ระบุ"}>ไม่ระบุ</Radio>
                            </Radio.Group>
                        </Form.Item>
                        

                        <Form.Item
                        name="phone"
                        label="หมายเลขโทรศัพท์"
                        rules={[{ required: true, message: 'Please input your phone number!' }]}
                    >
                        <Input style={{width:"80%"}}/>
                    </Form.Item>

                    <Form.Item
                        name="passport"
                        label="หนังสือเดินทาง"
                    >
                        <Input style={{width:"80%"}}/>
                    </Form.Item>

                    <Form.Item
                        name="salary"
                        label="เงินเดือนที่คาดหวัง"
                        rules={[{ required: true, message: 'Please input your Expect salary!!' }]}
                    >
                        <Input style={{width:"80%"}}/>
                    </Form.Item>
                        
                        
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form>
                </Content>
                <Footer className='background'></Footer>
            </Layout>
        </div>
    );
}

export default FormPage;