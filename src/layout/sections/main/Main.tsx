import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import styled from "styled-components";
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";
import vebChemodan from '../../../assets/images/veb-chemodan.png'
import React from "react";
import type {ScrollToSec} from "../../../App.tsx";

export const Main:React.FC<ScrollToSec> = ({scrollToSection}) => {
    return (
        <SMain id={'main'}>
            <Container>
                <FlexWrapper align={'center'} style={{height: '100vh', position: 'relative'}}>
                    <MainFigure>
                        <MainTextWrap>
                            <MainLargeText><span style={{color: '#07CEB8'}}>Практика</span> в государственной корпорации
                                ВЭБ.РФ</MainLargeText>
                            <MainSmallText>Мы предоставляем возможности, вы — создаете будущее</MainSmallText>
                        </MainTextWrap>
                        <MainButton onClick={() => scrollToSection('application')}>ПОДАТЬ ЗАЯВКУ</MainButton>
                    </MainFigure>
                    <MainImage src={vebChemodan}/>

                </FlexWrapper>


            </Container>
        </SMain>

    );
};

const MainImage = styled.img`
    width: 610px;
    height: 500px;
    object-fit: cover;
    position: absolute;
    right: -1.2vw;
    top: 6.9vh;
`

const SMain = styled.section`
    height: 100vh;
    background: white;
    color: white;
    overflow-y: hidden;
    width: 100vw;
    padding: 40px;

`

const MainFigure = styled.div`
    width: 95%;
    background: ${theme.colors.font};
    border-radius: 35px;
    margin: 0 auto;
    height: 52vh;
    padding: 8vh;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    //outline: 2px solid firebrick;
`

const MainLargeText = styled.h2`
    font-size: 6vh;
    font-weight: 500;
    text-align: left;
`

const MainTextWrap = styled.div`
    width: 45vw;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
`

export const MainSmallText = styled.p`
    font-size: 3vh;
    font-weight: 500;
    text-align: left;
`

export const MainButton = styled.button`
    background: white;
    width: 20vw;
    height: 8vh;
    font-weight: 500;
    color: ${theme.colors.font};
    border-radius: 22px;
    font-size: 15px;
    transition: box-shadow 0.3s ease-in-out;
    &:hover{
        color: #00E5E6;
        box-shadow: 0 0 15px #00E5E6;
        font-weight: 600;

    }

`

