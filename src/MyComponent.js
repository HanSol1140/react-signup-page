import React from 'react';
import { useState } from 'react';
import './App.css';
import './reset.css';

function MyComponent() {
    // 비밀번호 
const [password, setPassword] = useState('');
const [passwordAlert, setPasswordAlert] = useState({
  message: '안전하지 않은 비밀번호',
  className: 'passwordalert1',
});
const validatePassword = (password) => {
  // 영문 대소문자, 숫자, 특수문자 중 2가지 이상 조합 검사
  const check1 = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  const check2 = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9])[a-zA-Z0-9!@#$%^&*]{8,}$/;

  // 아이디와 4자리 이상 동일하거나, 4자리 이상 반복되는 문자 검사
  const check3 = /(.)\1{3,}/;

if((check1.test(password) || check2.test(password)) &&
!check3.test(password) &&
password.length >= 8 &&
password.length <= 16
) {
  setPasswordAlert({
    message: '안전한 비밀번호입니다.',
    className: 'passwordalert2',
  });
} else {
  setPasswordAlert({
    message: '안전하지 않은 비밀번호',
    className: 'passwordalert1',
  });
}
};

const handlePasswordChange = (e) => {
  const newPassword = e.target.value;
  setPassword(newPassword);
  validatePassword(newPassword);
};


// 이메일 선택하기
const [emailDomain, setEmailDomain] = useState('');

const handleSelectChange = e => {
  setEmailDomain(e.target.value);
};

return (
  <div className="App">

    <section className="header">
      <ul>
        <li>회원가입</li>
      </ul>
    </section>

    <section className="main">

      <article className="warningtext">
        <ul>
          <li>회원정보 입력</li>
          <li>이용 약관과 개인정보처리방침에 대한 안내를 읽고 동의해주세요. </li>
        </ul>
      </article>

      <article className="memberinfo">
        <ul>
          <li>
            <p>이름&nbsp;<b>*</b></p>
            <div>
              <input placeholder='성함을 입력해주세요.' type='text'></input>
            </div>
          </li>
          <li>
            <p>주민등록번호&nbsp;<b>*</b></p>
            <div>
              <input placeholder='000000' type='number'/>&nbsp;-&nbsp;<input placeholder='0000000' type='number'/>
            </div>
          </li>
          <li>
            <p>아이디&nbsp;<b>*</b></p>
            <div>
              <input placeholder='ID' type='text'/>
              <button>중복확인</button>
            </div>
          </li>
          <li className='password'>
            <p>비밀번호&nbsp;<b>*</b></p>
            <div>
              <input
                placeholder='비밀번호를 입력해주세요.'
                type='password'
                value={password}
                onChange={handlePasswordChange}
              />
              <p className={passwordAlert.className}>※&nbsp;{passwordAlert.message}</p>
              <p className='passwordnotice'>※&nbsp;영문 대소문자,숫자,특수문자 중 2가지 이상 조합하여 설정해주세요.</p>
              <p className='passwordnotice'>※&nbsp;아이디와 4자리 이상 동일하거나, 4자리 이상 반복되는 문자는 사용이 불가능합니다.</p>
            </div>
          </li>
          <li>
            <p>휴대폰 번호&nbsp;<b>*</b></p>
            <div>
              <input placeholder='' type='number'/>
              &nbsp;-&nbsp;
              <input placeholder='' type='number'/>
              &nbsp;-&nbsp;
              <input placeholder='' type='number'/>
            </div>
          </li>
          <li>
            <p>이메일&nbsp;<b>*</b></p>
            <div>
              <input placeholder='' type='text'/>
              &nbsp;@&nbsp;
              <input placeholder='' type='text' name="adress" value={emailDomain} />
              <select name="language" id="language" onChange={handleSelectChange}>
                  <optgroup label="이메일 선택">
                      <option value="">직접입력</option>
                      <option value="naver.com">naver.com</option>
                      <option value="hanmail.net">hanmail.net</option>
                      <option value="nate.com">nate.com</option>
                  </optgroup>
              </select>
            </div>
          </li>
          <li>
            <button>취소</button>
            <button>회원가입 완료</button>
          </li>
        </ul>
      </article>

    </section>
    
    <section className='footer'>

      <article>
        <ul>유치원 알리미
          <li>(주)유치원 | 소유자 :  유영재 김민선 김동균 송한솔 | 사업자 등록번호 : 220-87-42885</li>
          <li>통신판매업신고 : 강남-14221호 | 메일 : YOUCH@gmaeil.com 고객센터 : 1644-1346 (오전 9시 - 익일 새벽 3시)</li>
          <li>(주)유치원 은 통신판매 중개자로서 통신판매의 당사자가 아니며 상품의 예약, 이용 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.</li>
          <li>(주)유치원 이 소유/운영/관리하는 웹사이트 및 앱 내의 상품/판매자/이벤트 정보, 디자인 및 화면의 구성 UI를 포함하여</li>
          <li>일체의 콘텐츠에 대한 무단 복제, 배포, 방송 또는 전송, 스크래핑 등의 행위는저작권법 및 콘텐츠산업 진흥법 등 관련 법령에 의하여 엄격히 금지 됩니다.</li>
        </ul>
      </article>

    </section>
  </div>
);
};

export default MyComponent;
