import React, { useEffect, useState } from 'react';

import Partial_Main from '../Partial/Main';

import Background from '@assets/images/menu_background.jpeg';

import './Introduce.scss';

type IntroducePropsType = {
    closeComponent: Function,
    currentPageName: string,
};
type IntroduceStateType = {};

const Introduce = (props: IntroducePropsType) => {
    if (props.currentPageName === 'ref_introduce') {
        return (
            <div id='Content__Introduce'>
                <Partial_Main closeComponent={props.closeComponent} title='ABOUT' contentData={IntroduceContent()} />
            </div>
        );
    } else {
        return <></>;
    }

    function IntroduceContent() {
        return (
            <div className='Content__Introduce__Main'>
                <div className='Content__Introduce__MySelf'>
                    <div className='Content__Introduce__Picture'>
                        <img src={Background}></img>
                    </div>
                    <div className='Content__Introduce__Text'>
                        <h4>신은규 申銀圭</h4>
                        <h3>SHIN EUN GYU</h3>
                        <p>─</p>
                        <p>1994.04.27 성남 출생</p>
                        <p>2015-2017 숭실대학교 학점은행제 정보보안학과 재학/졸업</p>
                        <p>2017-2020 숭실대학교 정보통신공학과 대학원 재학/졸업</p>
                    </div>
                </div>
                <div className='Content__Introduce__Characteristic'>
                    <div className='Content__Introduce__Characteristic__wrap'>
                        <div className='hexagon'></div>
                    </div>
                    <div className='Content__Introduce__Characteristic__wrap'>
                        <div className='hexagon'></div>
                    </div>
                    <div className='Content__Introduce__Characteristic__wrap'>
                        <div className='hexagon'></div>
                    </div>
                    <div className='Content__Introduce__Characteristic__wrap'>
                        <div className='hexagon'></div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Introduce;