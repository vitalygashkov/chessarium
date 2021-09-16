import './header.scss';

function Header() {
  return (
    <header className="header">
      <div className="header__main">
        <a href="https://chessninja.ru/" className="header__logo">
          <img src="https://user49501.clients-cdnnow.ru/assets/images/header/skysmart.svg" alt="" />
        </a>
      </div>
      <div className="header__nav">
        <div className="nav-links">
          <div className="nav-links__wrap">
            <div className="nav-links__list">
              <a href="/" className="nav-links__item">
                <div className="nav-links__item-text">
                  Главная
                </div>
              </a>
              <a href="/courses" className="nav-links__item">
                <div className="nav-links__item-text">
                  Курсы
                </div>
              </a>
              <a href="/textbook" className="nav-links__item">
                <div className="nav-links__item-text">
                  Учебник
                </div>
              </a>
              <a href="/workbook" className="nav-links__item">
                <div className="nav-links__item-text">
                  Задачник
                </div>
              </a>
              <a href="/contacts" className="nav-links__item">
                <div className="nav-links__item-text">
                  Контакты
                </div>
              </a>
              <a href="/about" className="nav-links__item">
                <div className="nav-links__item-text">
                  О нас
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="header__actions">
        <a href="#" className="action-link">+7 (495) 260-24-76</a>
        {/* <button className="action-button">Купить</button> */}
      </div>
    </header>
  )
}

export { Header };

