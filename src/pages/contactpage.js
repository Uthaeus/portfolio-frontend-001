import contactImage from '../assets/images/login.jpg';

function Contactpage() {
  return (
    <div className="contact-page-container">
      <div className="contact-page-info-wrapper">
        <h1 className="contact-page-title">Contact Me</h1>

        <div className='contact-items-wrapper'>
          <h2 className='contact-name'>Homer J</h2>

          <p className='contact-item'><i className="bi bi-envelope-at-fill"></i>: <a href='mail-to:example@hello.net' className='contact-email'>homerj@springfieldnuclear.org</a></p>

          <p className='contact-item'><i className="bi bi-phone-fill"></i>: <a href='sms:555-555-5555' className='contact-phone'>(555) 555-5555</a></p>

          <p className='contact-item'><i className="bi bi-house-door-fill">: </i><span className='contact-address'>742 Evergreen Terrace, Springfield, USA</span></p>
        </div>

        <div className='contact-social-wrapper'>
          <a href='https://www.facebook.com' target='_blank' rel='noreferrer' className='contact-social-link'><i className="bi bi-facebook"></i></a>
          <a href='https://www.twitter.com' target='_blank' rel='noreferrer' className='contact-social-link'><i className="bi bi-twitter"></i></a>
          <a href='https://www.instagram.com' target='_blank' rel='noreferrer' className='contact-social-link'><i className="bi bi-instagram"></i></a>
          <a href='https://www.linkedin.com' target='_blank' rel='noreferrer' className='contact-social-link'><i className="bi bi-linkedin"></i></a>
          <a href='https://www.github.com' target='_blank' rel='noreferrer' className='contact-social-link'><i className="bi bi-github"></i></a>
        </div>
      </div>

      <div className='contact-page-image-wrapper'>
        <img src={contactImage} alt='Homer J' className='contact-page-image' />
      </div>
    </div>
  );
}

export default Contactpage;