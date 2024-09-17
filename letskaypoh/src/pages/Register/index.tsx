import React, { useState } from 'react'
import '../../App.css'
import './styles.css'
import '../commonStyles.css'
import { Button, Form, FormProps, Input, message, Radio, Select } from 'antd'
import { useNavigate } from 'react-router-dom';
import { UserInterface } from '../../models/interfaces'
import { navigateToRoute } from '../../components/utils'

type FieldType = {
    name: string;
    nric: string;
    email: string;
    mobile: string;
    age: number;
    gender: string;
    languages: string[];
    address: string;
    postalCode: string;
  };

const Register = () => {
    const { Option } = Select;

    const [loading, setLoading] = useState<boolean>(false)

    const navigate = useNavigate(); 

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
          <Select style={{ width: 70 }} >
            <Option value="65">+65</Option>
          </Select>
        </Form.Item>
      );

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Received values of form: ', values);
        setLoading(true)

        const newUserDetails: UserInterface = (
            {
                name: values.name,
                nric: values.nric,
                email: values.email,
                mobile: values.mobile,
                age: values.age,
                gender: values.gender,
                languages: values.languages,
                address: values.address,
                postalCode: values.postalCode,
            }
        )

        console.log('newUserDetails:', newUserDetails)

        // add api endpoint - register user
        // when api successful then route change

        setLoading(false)
        console.log('loading', loading)

        message.success('Registration success')

        navigateToRoute('/register-success', navigate)
    };

    return (
        <div className={'container'}>
            <div className={'header'}>
                <h1>let's kaypoh!</h1>
                <h3>Register to be a kaypoh!</h3>
                <p>Thank you for your interest in volunteering with us!</p>
                <p>Just a couple more questions...</p>
            </div>

            <div className={'form'}>
                <Form
                    scrollToFirstError
                    onFinish={onFinish}
                    initialValues={{
                        prefix: '+65'
                    }}
                    name="register"
                    layout="horizontal"
                    labelCol={{span: 10}}
                    wrapperCol={{ span: 14}}
                    className='formInput'
                >
                    <Form.Item label="Full Name" name="name" rules={[{ required: true, message: 'Please input your full name!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Last 4 digits of NRIC/FIN"
                        name="nric"
                        rules={[{ required: true, message: 'Please input the last 4 digits of NRIC' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Mobile No."
                        name="mobile"
                        rules={[{ required: true, message: 'Please input your mobile number' }]}
                    >
                        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                    </Form.Item>
                    <Form.Item
                        label="Age"
                        name="age"
                        rules={[{ required: true, message: 'Please input your age' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Gender"
                        name="gender"
                        rules={[{ required: true, message: 'Please input your gender' }]}
                    >
                        <Radio.Group>
                            <Radio value="a">Male</Radio>
                            <Radio value="b">Female</Radio>
                            <Radio value="c">Prefer not to say</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item
                        label="Spoken Languages"
                        name="languages"
                        rules={[{ required: true, message: 'Please select your spoken languages' }]}
                    >
                        <Select mode="multiple" placeholder="Please select spoken languages">
                            <Option value="english">English</Option>
                            <Option value="mandarin">Mandarin</Option>
                            <Option value="malay">Malay</Option>
                            <Option value="indonesian">Indonesian</Option>
                            <Option value="tamil">Tamil</Option>
                            <Option value="Hindi">Hindi</Option>
                            <Option value="hokkien">Hokkien</Option>
                            <Option value="cantonese">Cantonese</Option>
                            <Option value="teochew">Teo Chew</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Address"
                        name="address"
                        rules={[{ required: true, message: 'Please input your area'}]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Postal Code"
                        name="postalCode"
                        rules={[{ required: true, message: 'Please input your postal code' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Button htmlType='submit'>
                        Register
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Register