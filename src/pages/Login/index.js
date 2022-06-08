import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button, Form } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';



export default function Login() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const onLogin = (e) => {
        const userInfo = { userName: 'admin', password: 'admin' }
        const userData = {
            name,
            password,
        };
        if (userData.name === userInfo.userName && userData.password === userInfo.password) {
            localStorage.setItem('token-login', JSON.stringify(true));
            setName('');
            setPassword('');
            setTimeout(() => {
                navigate('/home')
            }, 500);
        }
        else {
            alert('Incorrect username or password');
        }
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    };

    const handleUsernameChange = (e) => {
        setName(e.target.value)
    }

    const [form] = Form.useForm();
    const [, forceUpdate] = useState({});

    useEffect(() => {
        forceUpdate({});
    }, []);

    const onFinish = (values) => {
        console.log('Finish:', values);
    };
    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>

            <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />}
                        onChange={handleUsernameChange}
                        value={name}
                        placeholder="User name" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                        onChange={handlePasswordChange}
                        value={password}
                    />
                </Form.Item>
                <Form.Item shouldUpdate>
                    {() => (
                        <Button
                            type="primary"
                            htmlType="submit"
                            disabled={
                                !form.isFieldsTouched(true) ||
                                !!form.getFieldsError().filter(({ errors }) => errors.length).length
                            }
                            onClick={onLogin}
                        >
                            Log in
                        </Button>
                    )}
                </Form.Item>
            </Form>
        </div>
    )
}