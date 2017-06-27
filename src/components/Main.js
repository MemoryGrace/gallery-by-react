require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let imageDatas = require('../data/imageDatas.json');

function genImageURL(imgDataArr) {
    for(let i=0,j=imgDataArr.length;i<j;i++){
        var singleImageData = imgDataArr[i];
        singleImageData.imageURL = require('../images/'+singleImageData.fileName);
        imgDataArr[i] = singleImageData;
    }
    return imgDataArr;
}

imageDatas = genImageURL(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
        <section className='stage'>
            <section className='img-sec'>
                {imageDatas.fileName}
            </section>
            <nav className='controller-nav'>

            </nav>
        </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
