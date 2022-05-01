import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
        <Fade left><h2>Hizmetlerimiz</h2></Fade>
        <Fade left><p>
            Devlet ve özel sektördeki bir çok faaliyet alanlarımız aşağıda yer almaktadır.
          </p></Fade>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                  <Zoom left><i className={d.icon}></i></Zoom>
                  <div className='service-desc'>
                  <Fade left><h3>{d.name}</h3></Fade>
                  <Fade left><p>{d.text}</p></Fade>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
