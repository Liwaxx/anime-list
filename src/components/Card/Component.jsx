import React from 'react';
import './style.css'
import ModalImage from 'react-modal-image'

//SEKELETON
import ppSkl from '../../asset/images/pp-skl.png'
import titleSkl from '../../asset/images/title-skl.png'
import btnSkl from '../../asset/images/btn-skl.png'
import imgSkl from '../../asset/images/img-skl.png'

class Component extends React.Component {
  render() {
    if (this.props.status == 0) {
      return (
        /* SEKELETON */
        <div className="crd p-3 m-3">
            <div className="crd-header mb-3">
              <div className="header-img">
                <img src={ppSkl} alt="" className="img-fluid"/>
              </div>
              <div className="header-title">
                <img src={titleSkl} alt="" className="img-fluid"/>
              </div>
              <div className="header-menu">
              </div>
            </div>
            <div className="crd-body mt-3">
              <img src={imgSkl}  alt="" className="img-fluid"/>
            </div>
            <div className="crd-footer mt-3">
            <img src={btnSkl} alt="" className="img-fluid"/>
            </div>
        </div>
      );    
    }else{
      const data = this.props.data
      return (
            <div className="crd p-3 m-3 d-inline-block">
              <div className="crd-header mb-3">
                <div className="header-title">
                  {
                    data.title.length > 30 ?
                    data.title.substring(0,30)+"..." :
                    data.title
                  }
                </div>
              </div>
              <div className="crd-body mt-3">
                <ModalImage
                  small={data.image_url}
                  large={data.image_url}
                  alt={data.title}
                  hideZoom='false'
                  hideDownload='false'
                />
                <div class="overlay">
                  <div class="text">
                    Rank : {data.rank} <br/>
                    Type : {data.type}
                  </div>
                </div>
              </div>
              <div className="crd-footer mt-3">
                  <a href={data.url} className="btn btn-purple w-100" target="_blank">
                    Detail
                  </a>
              </div>
            </div> 
      );
    }
  }
}

export default Component;