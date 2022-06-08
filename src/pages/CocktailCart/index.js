import React from 'react'
import { useSelector } from 'react-redux'
import { Layout, Image, Typography, Button } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

import { useNavigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
const { Title } = Typography;


export default function CocktailCart() {
    const cocktail = useSelector(state => state.GlobalReducer.cocktail);
    const quantity = useSelector(state => state.GlobalReducer.quantity);
    const navigate = useNavigate();

    const onChangeToHome = () => {
        navigate('/home')
    }
    console.log((cocktail))
    return (
        <div>
            <Button
                type='primary'
                icon={<HomeOutlined />}
                size='large'
                onClick={onChangeToHome}
            >
            </Button>
            {cocktail.map(item => (
                <Layout key={item.idDrink}>
                    <Sider><Image
                        width={200}
                        src={item.strDrinkThumb}
                    />
                    </Sider>
                    <Layout>
                        <Header><Title type="success" level={2}>{item.strDrink}</Title></Header>
                        <Content>Quantity:{quantity}</Content>
                    </Layout>
                </Layout>
            ))
            }
        </div >
    )
}
