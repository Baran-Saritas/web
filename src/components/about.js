import Zoom from 'react-reveal/Zoom';

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <Zoom left><img src="img/th.jpg" className="img-responsive" alt="" /></Zoom>{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
            <Zoom left><h2>Hakkımızda</h2></Zoom>
              <Zoom left><p>{props.data ? props.data.paragraph : "loading..."}</p></Zoom>
              <Zoom left><h3>Neden bizimle çalışmalısınız?</h3></Zoom>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                <Zoom left><ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul></Zoom>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                <Zoom left><ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul></Zoom>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
