import React from 'react'
import 'antd/dist/antd.css';

import { useNavigate } from 'react-router';
import { Card, Image, Button } from 'antd';
import { PoweroffOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export default function DrinkList(props) {
    const navigate = useNavigate();

    const onChangeToLogin = () => {
        localStorage.removeItem('token-login');
        setTimeout(() => {
            navigate('/')
        }, 500);
    }

    return (
        <div>
            <Button
                type="primary"
                icon={<PoweroffOutlined />}
                danger
                onClick={onChangeToLogin}
            >
                Log out
            </Button>
            <h1>List Cocktail</h1>
            <Button type='primary'
                size='large'
                shape='circle'
                icon={<ShoppingCartOutlined />}></Button>
            {props.drinkDatas.map(item => (
                <div className="site-card-wrapper" key={item.idDrink}>
                    <Link to={`/${item.idDrink}`}>
                        <Card title={item.strDrink} hoverable >
                            <Image
                                width={200}
                                src={item.strDrinkThumb}
                            />
                            <p>Category: {item.strCategory}</p>
                        </Card>
                    </Link>
                </div>
            ))}
        </div>
    )
}
