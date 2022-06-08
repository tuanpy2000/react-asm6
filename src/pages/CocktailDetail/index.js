import { Button, Col, Row, Image, Input, Space, Descriptions, Typography } from 'antd'
import React from 'react'
import { ArrowLeftOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';
import axios from 'axios'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { GlobalActions } from '../../redux/rootAction';


export default function CocktailDetail() {
    const [quantity, setQuantity] = useState(0);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { Title } = Typography;
    const { id } = useParams();
    const [drinkData, setDrinkData] = useState([])
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    const onChangeToHome = () => {
        navigate('/home')
    }
    const getDrinkData = (url) => {
        const dataReceive = axios.get(url)
            .then(response => {
                return response.data.drinks;
            })
            .catch(err => {
                console.log(err);
            })
        return dataReceive;
    }

    useEffect(() => {
        (async () => {
            const response = await getDrinkData(url);
            setDrinkData(response);
        })();
    }, [url])

    const onQuantityIncrease = () => {
        setQuantity(quantity + 1)
    }

    const onQuantityDecrease = () => {
        setQuantity(quantity - 1)

    }

    const onAddToCart = () => {
        dispatch(GlobalActions.addDrink(drinkData));
        dispatch(GlobalActions.addQuantity(quantity));
        alert('Your cocktail has been added to cart ')
    }

    const onChangeToCart = () => {
        navigate('/cart')
    }

    return (
        <div className='cocktaildetail-container'>
            <Button
                type='primary'
                icon={<ArrowLeftOutlined />}
                size='large'
                onClick={onChangeToHome}
            >
            </Button>
            <Button type='primary'
                size='large'
                shape='circle'
                icon={<ShoppingCartOutlined
                    onClick={onChangeToCart}
                />}></Button>
            <h1>Detail List Cocktail</h1>
            <div className='cocktaildetail'>
                {drinkData.map(item =>
                (
                    <div key={item.idDrink}>
                        <Row>
                            <Col span={18} push={6}>
                                <Descriptions title={<Title level={3}>{item.strDrink}</Title>}>
                                    <Descriptions.Item label={<Title level={5} mark>Category</Title>}>{item.strCategory}</Descriptions.Item>
                                    <Descriptions.Item label={<Title level={5} mark>Alcoholic</Title>}>{item.strAlcoholic}</Descriptions.Item>
                                    <Descriptions.Item label={<Title level={5} mark>Glass</Title>}>{item.strGlass}</Descriptions.Item>
                                    <Descriptions.Item label={<Title level={5} mark>Instructions</Title>} span={2}>{item.strInstructions}</Descriptions.Item>
                                    <Descriptions label={<Title level={5} mark>Ingredient</Title>}>
                                        {item.strIngredient1},
                                        {item.strIngredient2},
                                        {item.strIngredient3},
                                        {item.strIngredient4}
                                    </Descriptions>
                                </Descriptions>
                                <Space direction="horizontal">

                                    <Input suffix={<Button type="primary" shape="circle" onClick={onQuantityIncrease}>
                                        +
                                    </Button>} prefix={<Button type="primary" shape="circle" onClick={onQuantityDecrease}>
                                        -
                                    </Button>} value={quantity} />
                                    <Button type="primary" onClick={onAddToCart}>Add to cart</Button>
                                </Space>
                            </Col>
                            <Col span={6} pull={18}>
                                <Image
                                    width={200}
                                    src={item.strDrinkThumb}
                                />
                            </Col>
                        </Row>
                    </div>)
                )}
            </div>
        </div>
    )
}
