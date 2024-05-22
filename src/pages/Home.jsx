import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {useState} from "react"
import Card from "../components/Card"
import { styled } from 'styled-components';

const CardWrapper = styled.div `
    display: flex;
    flex-wrap:wrap;
    align-items: center;
    padding-right: 10px;
`

const Home = () => {
    const[userInfo, setUserInfo]=useState({
        avatar:"",
        email:"",
        first_name:"",
        id:0,
        last_name:"",
    });

    useEffect(() => {
        axios
            .get('https://reqres.in/api/users?page=1&per_page=9')
            .then((res) => {
                setUserInfo(res.data.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    return (
        <> 
            <h1>Home Page</h1>
            <CardWrapper>
                {Object.keys(userInfo).map((key) => (
                    <Card
                        id={userInfo[key].id}
                        img={userInfo[key].avatar}
                        name={`${userInfo[key].first_name} ${userInfo[key].last_name}`}
                    />
                ))}
            </CardWrapper>

            <Link to="/menu">메뉴페이지로 고고</Link>
        </>
    );
};

export default Home;

