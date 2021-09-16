import './footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrap">
        <div className="socials">
          <a href="https://twitter.com/" className="socials__item">
            <div className="socials__item-icon" style={{ backgroundImage: 'url("https://teletype.in/static/images/twitter.e606565ef0ecdfde1ee538a6d098709f.svg")' }}></div>
          </a>
          <a href="https://instagram.com/" className="socials__item">
            <div className="socials__item-icon" style={{ backgroundImage: 'url("https://teletype.in/static/images/instagram.2bea8a046f9ca05ac732870f7b0198a2.svg")' }}></div>
          </a>
          <a href="https://vk.com/" className="socials__item">
            <div className="socials__item-icon" style={{ backgroundImage: 'url("https://teletype.in/static/images/vk.901b007f5e559c896f2ec193b9931f1b.svg")' }}></div>
          </a>
        </div>
      </div>
      <div className="footer__wrap">
        <img src="https://user49501.clients-cdnnow.ru/assets/images/header/skysmart.svg" alt="" />
        <div className="footer__links">
          <a href="mailto:support@chessninja.ru" target="_blank" rel="noreferrer" className="footer__links-item">Написать</a>
        </div>
      </div>
    </footer>
  )
}

export { Footer };

