import React from "react";
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css'
import './App.css'

const categoryData=['Lorem','Lorem','Dolor','Ipsum','Dolor','Dolor'];

class App extends React.Component {

  constructor(props){
    super(props);
    this.state=({ index:0, category:['All', 'Lorem', 'Ipsum', 'Dolor'] })
  }

  componentDidMount(){
    this.swiper=new Swiper('.swiper-container',
    {
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // spaceBetween: 30,
    });
  }

  render() {
    return (
      <div className="App">
        {/* <div className="filterContainer">
          <div className="filterGoLeft"
          onClick={()=>{
            this.setState({index:this.state.index-1<0?this.state.category.length-1:this.state.index-1},
              ()=>this.swiper.update())
          }}>&lt;</div>
          <div className="filterData">{this.state.category[this.state.index]}</div>
          <div className="filterGoLeft"
          onClick={()=>{
            this.setState({index:(this.state.index+1)%this.state.category.length},
            ()=>this.swiper.update())
          }}
          >&gt;</div>
        </div> */}
        <div className="swiperMainContainer">
          {/* Here we will be adding swiper container */}
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {categoryData.map((el,index)=>{
                const currentSection=this.state.category[this.state.index]

                if(el===currentSection || currentSection==="All"){
                  return(
                    <div className="swiper-slide" key={index}>
                      {/* <div>{el}</div> */}
                      <div class="image-holder">
                        <img src="http://www.coxreps.com/rf/image_medium/Pub/Web/CoxReps/Images/smartlocal-hero.jpg" alt="smart, local media. national scale." title="smart, local media. national scale." />
                      </div>
                      <div class="content-holder">
                        <p class="headline">smart, local media. national scale.</p>
                        <div class="list-text">
                            <p>400+ best-in-class local broadcast television stations covering more than 87% of U.S. TV households</p>
                        </div>
                      </div>
                      {/* <div class="imgCardHolder">
                        <img src={`https://www.coxreps.com/rf/image_medium/Pub/Web/CoxReps/Images/experts-hero.jpg`} alt="images"/>
                      </div> */}
                      {/* <div>Demo Purposes</div> */}
                    </div>
                  )}
                  else{
                    return null
                  }
                }
              )}
            </div>
            {/* -- If we need pagination -- */}
            <div class="swiper-pagination"></div>
            {/* -- If we need navigation buttons -- */}
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;