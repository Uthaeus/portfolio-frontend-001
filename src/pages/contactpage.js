import contactImage from '../assets/images/login.jpg';

function Contactpage() {
  return (
    <div className="contact-page-container">
      <div className="contact-page-info-wrapper">
        <h1 className="contact-page-title">Contact Me</h1>

        <div className='contact-items-wrapper'>
          <h2 className='contact-name'>Homer J</h2>
          <a href='mail-to:example@hello.net' className='contact-email'>homerj@springfieldnuclear.org</a>
          <p className='contact-phone'>(555) 555-5555</p>
          <p className='contact-address'>742 Evergreen Terrace, Springfield, USA</p>
        </div>
      </div>

      <div className='contact-page-image-wrapper'>
        <img src={contactImage} alt='Homer J' className='contact-page-image' />
      </div>
    </div>
  );
}

export default Contactpage;