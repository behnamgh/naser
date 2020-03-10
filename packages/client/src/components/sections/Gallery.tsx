import React from 'react';

import BIGFRAME from '../../images/-e-BigFrame-1.png'
// import FRAMEHOLDER from '../../images/-e-hanger.png'
import BOTTOMFRAME from '../../images/-e-SmallFrame.png'

// import FIRSTONE from '../../images/test.jpg'
// import SECONDONE from '../../images/test.jpg'
// import THIRDONE from '../../images/test.jpg'
// import FOURTHONE from '../../images/test.jpg'
// import FIFTHONE from '../../images/test.jpg'

export default function Gallery({ page }: any) {

  // const [ currentImageIdx, setCurrentImagIdx ] = useState(0);

  // const images = [FIRSTONE,SECONDONE,THIRDONE,FOURTHONE,FIFTHONE]

  return (
    <div className="gallery">
      <img src={BIGFRAME} className="gallery__container" alt=""/>
      {/* <img src={FRAMEHOLDER} className="gallery__holder" alt=""/> */}
      <img src={BOTTOMFRAME} className="gallery__bottom" alt=""/>
    </div>
  )
}
