import React from 'react'
import { Carousel, Button } from 'react-bootstrap'

const HeaderSlider = () => {
  return (
    <>
    <Carousel interval={500}variant="dark">
        <Carousel.Item>
            <img className="d-block w-100"
                style={{  height: "100vh", objectFit: "cover" }}
                src="./pexels-ashithosh-u-1413420.png"
                alt="pic1"
            />
            <Carousel.Caption className="bg-white">
                <h5>Beautiful Blue</h5>
                <p>Novus Ordo Seclorum</p>
                <div className="mb-3">
                    <Button variant="dark">Shop Now</Button>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100"
                style={{  height: "100vh", objectFit: "cover" }}
                src="./manonmoto.png"
                alt="pic2"
            />
            <Carousel.Caption className="bg-white">
                <h5>Manly Man</h5>
                <p>Novus Ordo Seclorum</p>
                <div className="mb-3">
                    <Button variant="dark">Shop Now</Button>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100"
                style={{  height: "100vh", objectFit: "cover" }}
                src="./pexels-karol-d-325153.png"
                alt="pic3"
            />
            <Carousel.Caption className="bg-white">
                <h5>Electric</h5>
                <p>Novus Ordo Seclorum</p>
                <div className="mb-3">
                    <Button variant="dark">Shop Now</Button>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100"
                style={{  height: "100vh", objectFit: "cover" }}
                src="./wmnwall.png"
                alt="pic1"
            />
            <Carousel.Caption className="bg-white">
                <h5>Fabulous Fashion</h5>
                <p>Novus Ordo Seclorum</p>
                <div className="mb-3">
                    <Button variant="dark">Shop Now</Button>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    </>
  )
}

export default HeaderSlider