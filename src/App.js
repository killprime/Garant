import React from 'react';
import 'materialize-css';
import './index.css'
import { Button, Row, Col, Navbar, Icon, Footer } from 'react-materialize';

function App() {

  return (
    <div>

      <Navbar
    alignLinks="right"
    brand={<a className="brand-logo" href="#!">Гарант сервис</a>}
    centerChildren
    id="mobile-nav"
    menuIcon={<Icon>menu</Icon>}
    options={{
      draggable: true,
      edge: 'left',
      inDuration: 250,
      onCloseEnd: null,
      onCloseStart: null,
      onOpenEnd: null,
      onOpenStart: null,
      outDuration: 200,
      preventScrolling: true
    }}
  >
    <Button node="a">
      Воспользоваться гарантом
    </Button>

  </Navbar>

  <Row className="container">
    <Col >
      <h1 className="center-align">
        Сервис для проведения безопасных сделок
      </h1>
    </Col>
  </Row>
  <Row className="container">
    <Col className="s4">
      <div className="center promo promo-example">
          <Icon>assignment_turned_in</Icon>
        <p className="promo-caption">37 тыcяч сделок</p>
      <p className="light center">За нашими плечами тысячи довольных клиентов.</p>
      </div>
    </Col>
    <Col className="s4">
      <div className="center promo promo-example">
          <Icon>assessment</Icon>
          <p className="promo-caption">473 млн ₽</p>
        <p className="light center">Сумма сделок. Данная цифра повзоляет понять, что мы дорожим своей репутацией.</p>
      </div>
    </Col>
    <Col className="s4">
      <div className="center promo promo-example">
          <Icon>assistant</Icon>
          <p className="promo-caption">900 тыс ₽</p>
        <p className="light center">Максимальная сумма сделки. Да да и таковые бывают.</p>
      </div>
    </Col>
  </Row>

  <Row className="container">
    <Col >

      <div >
        <h2>Кто такой гарант и что он делает?</h2>
        <p>Гарант — это нейтральная сторона, не имеющая отношения и не покровительствующая ни одному из участников сделки. Гарант берёт на себя роль арбитра, контролирующего соблюдение условий договора.</p>
        <p>В фильме об агенте&nbsp;007 «Казино „Рояль“» роль гаранта выполнял швейцарский банк, державший внесённые участниками покерного турнира в общий призовой фонд средства до момента выявления победителя.</p>
        <p>Если речь идёт о купле-продаже, то сделка с участием сервиса-гаранта происходит по следующему сценарию:</p>
        <ol>
          <li>Продавец и покупатель передают гаранту согласованные условия сделки.</li>
          <li>Покупатель передаёт гаранту сумму, на которую заключена сделка.</li>
          <li>Продавец передаёт товар или оказывает услугу покупателю, согласно условиям сделки.</li>
          <li>Покупатель уведомляет гаранта, что продавец выполнил условия.</li>
          <li>Гарант, получив уведомление покупателя, передаёт продавцу деньги.</li>
        </ol>
        <p>Аналогично строятся отношения заказчиков и фрилансеров, лиц, покупающих и предоставляющих определённые услуги.</p>
        <p>Такая простая система исключает основные риски купли-продажи:</p>
        <ul>
          <li>Покупатель не может обмануть продавца и оставить деньги у себя, потому что деньги хранятся у гаранта.</li>
          <li>Продавец не может не выполнить свои обязательства, иначе гарант не передаст ему деньги.</li>
        </ul>
      </div>

    </Col>
  </Row>

  <Footer
  className="example"
  copyrights="Copyright © Гарант сервис 2020 Все права защищены"
>
  <h5 className="white-text">
    Гарант сервис
  </h5>
  <p className="grey-text text-lighten-4">
    Сохраним ваши средства в безопасности.
  </p>
</Footer>


    </div>

);
}

export default App;
