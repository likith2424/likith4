import React from 'react'

import img from '../images/img1.jfif'
import img2 from '../images/img2.webp'
import img3 from '../images/img3.jfif'
import img4 from '../images/img4.jfif'



const Home = () =>{
  const pstyle={
    fontSize:"18px",
    lineHeight:"35px",
    textAlign:"justify",
    fontFamily:"arial"
  }
    return(
        <div className='Home'>

<div id="myCarousel" className="carousel slide" data-ride="carousel">
  {/* Indicators */}
  <ol className="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to={0} className="active" />
    <li data-target="#myCarousel" data-slide-to={1} />
    <li data-target="#myCarousel" data-slide-to={2} />
  </ol>
  {/* Wrapper for slides */}
  <div className="carousel-inner">
    <div className="item active">
      <img src={img} alt="Los Angeles" style={{width: '100%' , height:'700px'}}/>
    </div>
    <div className="item">
      <img src={img2} alt="Chicago" style={{width: '100%' , height:'700px'}}/>
    </div>
    <div className="item">
      <img src={img3} alt="New York" style={{width: '100%' , height:'700px'}} />
    </div>
  </div>
  {/* Left and right controls */}
  <a className="left carousel-control" href="#myCarousel" data-slide="prev">
    <span className="glyphicon glyphicon-chevron-left" />
    <span className="sr-only">Previous</span>
  </a>
  <a className="right carousel-control" href="#myCarousel" data-slide="next">
    <span className="glyphicon glyphicon-chevron-right" />
    <span className="sr-only">Next</span>
  </a>
</div>
<div className='container'>


<div className='row'>
  

    <div className='col-sm-8'>
      <p style={pstyle}>WebLorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum WebLorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum WebLorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum WebLorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum WebLorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum</p>
      
    </div>
    <div className='col-sm-4'>
      <img src={img4} style={{padding:20}} alt="img"></img>
    </div>

  </div>
  </div>



        </div>
    )
}
export default Home;