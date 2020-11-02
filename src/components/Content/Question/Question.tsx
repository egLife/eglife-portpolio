import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons/faPhoneAlt';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons/faAddressCard';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';

import Partial_Main from '../Partial/Main';

import email from '@app/config/emailjs';

import './Question.scss';

type QuestionPropsType = {
    closeComponent: Function,
    currentPageName: string,
};
type QuestionStateType = {
    name: string,
    email: string,
    message: string
    my_email: string;
    my_kakao: string,
    my_phone_number: string
};

const Question = (props: QuestionPropsType) => {
    let email_send_button_status: boolean = false;
    const my_email: QuestionStateType['my_email'] = 'tlsdmsrb0427@naver.com';
    const my_kakao: QuestionStateType['my_kakao'] = 'tlsdmsrb0427';
    const my_phone_number: QuestionStateType['my_phone_number'] = '+82 10 5622 1191';
    const [whether_success_fail, change_whether_success_fail] = useState(false);
    const ref_whether_success_fail: React.RefObject<HTMLDivElement> = React.createRef();

    if (props.currentPageName === 'ref_question') {
        return (
            <div id='Content__Question'>
                <Partial_Main closeComponent={props.closeComponent} title='CONTACT' contentData={QuestionContent()} />
            </div>
        );
    } else {
        return <></>;
    }

    function QuestionContent() {
        return (
            <div className='Cotent__Question__Main'>
                <div className='question_subtitle'>질문이 있으시거나 원하시는게 있나여?</div>
                <div className='question_email'>
                    <form className='contact-form' onSubmit={sendEmail}>
                        <input className='input_contact_data' placeholder='Name' type='text' name='user_name' required/>
                        <input className='input_contact_data' placeholder='Enter Email' type='email' name='user_email' required/>
                        <textarea placeholder='Your Message' name='message' />
                        <input className='submit_contact_data' type='submit' value='Send' disabled={email_send_button_status} />
                        <div className='whether_success_fail'
                            ref={ref_whether_success_fail}>
                            <p>
                            {
                                whether_success_fail
                                ? 'Your message was sent successfully, Thanks!'
                                : 'Failed to send your message, Sorry!'
                            }
                            </p>
                            <i><FontAwesomeIcon icon={faTimes} onClick={closeMessage}/></i>
                        </div>
                    </form>
                </div>
                <div className='question_myinformation'>
                    <ul>
                        <li>
                            <i className='circle'>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </i>
                            <p>{my_email}</p>
                        </li>
                        <li>
                            <i className='circle'>
                                <FontAwesomeIcon icon={faPhoneAlt} />
                            </i>
                            <p>{my_phone_number}</p>
                        </li>
                        <li>
                            <i className='circle'>
                                <FontAwesomeIcon icon={faAddressCard} />
                            </i>
                            <p>KAKAO ID: {my_kakao}</p>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }

    function sendEmail(e: any) {
        e.preventDefault();

        email_send_button_status = true;

        emailjs.sendForm(email.service_id, email.template_id, e.target, email.user_id)
        .then((result: any) => {
            ref_whether_success_fail.current.style.backgroundColor = 'green';
            ref_whether_success_fail.current.style.height = '50px';
            change_whether_success_fail(true);
            email_send_button_status = false;
        }, (error: any) => {
            ref_whether_success_fail.current.style.backgroundColor = 'red';
            ref_whether_success_fail.current.style.height = '50px';
            change_whether_success_fail(false);
            email_send_button_status = false;
        });
    }

    function closeMessage() {
        ref_whether_success_fail.current.style.height = '0px';
    }
};

export default Question;