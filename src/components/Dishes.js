import React, { Component } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'

class Dishes extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        }
        return (
            <Wrap>
                <Slider {...settings}>
                    {
                        [
                            <Card key="1">
                                <DishesCard />
                            </Card>,
                            <Card key="2">
                                <DishesCard />
                            </Card>
                        ]
                    }
                </Slider>
            </Wrap>
        )
    }
}

export default Dishes

const Wrap = styled.div`
  height: 100%;
  padding-bottom: 90px;
  .slick-dots {
    bottom: -40px;
    li.slick-active button:before {
      opacity: .9;
      color: white;
    }
    li button:before {
      opacity: .4;
      color: white;
    }
  }
`

const Card = styled.div`
  padding: 35px;
  padding-top: 5px;
  padding-bottom: 0;
  height: 100%;
`

const DishesCard = styled.div`
  height: 70vh;
  background: white;
`