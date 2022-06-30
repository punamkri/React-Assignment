import React from 'react'
import "../Component/CardText.css"
import Img2 from "../assets/cardimage/g1.png"
import Img1 from '../assets/cardimage/g4.png'
import Img3 from '../assets/cardimage/g5.png'
import Img4 from '../assets/cardimage/g3.png'
import Img5 from '../assets/cardimage/g2.png'
import Img6 from '../assets/cardimage/img.png'
import { color } from '@mui/system'






export default function CardText() {
    return (
        <>
            <div class="container-fluid card-fluid ">
                <div className='container'>
                    <div className='row clsrow py-5'>
                        <div className='col-sm-4 col-md-4 col-lg-4 '>
                            {/* <div className='cardlist '>
                            <h2>Card Image</h2>
                            <p>Image at the top</p> */}
                            <div class="Clscrd">
                                <img className="card-img-top" src={Img1} alt="Card image"></img>
                                <div class="card-body">
                                    <div style={{textAlign:"center"}}><button className='Card-border-text'>Upcoming</button></div>
                                    <h4 class="card-title text-center">Data Scince Bootcamp-<br /> Graded Datathon</h4>
                                    <p class="card-text text-center">Start in</p>
                                    <h5 className='card-time text-center'>00 : 15 : 22</h5>
                                    <h6 className='card-day text-center'> Days Hours Mins</h6>

                                   
                                    <div style={{textAlign:"center"}}><button class="btn btn-success ">Participate</button></div>
                                </div>
                            </div>
                            {/* </div> */}
                        </div>

                        <div className='col-sm-4 col-md-4 col-lg-4 '>
                           
                            <div class="Clscrd">
                                <img className="card-img-top" src={Img2} alt="Card image"></img>
                                <div class="card-body">
                                <div style={{textAlign:"center"}}><button className='Card-border-text'>Upcoming</button></div>


                                    <h4 class="card-title text-center">Data Sprint 72-butterfly<br />Identification</h4>
                                    <p class="card-text text-center">Start in</p>
                                    <h5 className='card-time text-center'>00 : 17 : 10</h5>
                                    <h6 className='card-day text-center'> Days Hours Mins</h6>
                                    <div style={{textAlign:"center"}}><button class="btn btn-success ">Participate</button></div>

                                </div>
                            </div>
                        </div>

                        <div className='col-sm-4 col-md-4 col-lg-4 '>

                            <div class="Clscrd">
                                <img className="card-img-top" src={Img3} alt="Card image"></img>
                                <div class="card-body">
                                <div style={{textAlign:"center"}}><button className='Card-border-text'>Active</button></div>


                                    <h4 class="card-title text-center">Data Sprint 71-Weather<br/>Recongnition</h4>
                                    <p class="card-text text-center">Ends in</p>
                                    <h5 className='card-time text-center'>00 : 17 : 10</h5>
                                    <h6 className='card-day text-center'> Days Hours Mins</h6>

                                    <div style={{textAlign:"center"}}><button class="btn btn-success ">Participate</button></div>

                                </div>
                            </div>
                        </div>

                        <div className='col-sm-4 col-md-4 col-lg-4 '>

                            <div class="Clscrd">
                                <img className="card-img-top" src={Img4} alt="Card image"></img>
                                <div class="card-body">
                                <div style={{textAlign:"center"}}><button className='Card-border-text'>Active</button></div>


                                    <h4 class="card-title text-center">Data Scince 70-Airline<br/>Paaenger Satisfication</h4>
                                    <p class="card-text text-center">Ends in</p>
                                    <h5 className='card-time text-center'>00 : 11 : 27</h5>
                                    <h6 className='card-day text-center'> Days Hours Mins</h6>
                                    <div style={{textAlign:"center"}}><button class="btn btn-success ">Participate</button></div>

                                </div>
                            </div>
                        </div>
                        <div className='col-sm-4 col-md-4 col-lg-4 '>

                            <div class="Clscrd">
                                <img className="card-img-top" src={Img5} alt="Card image"></img>
                                <div class="card-body">
                                <div style={{textAlign:"center"}}><button className='Card-border-text'>Past</button></div>


                                    <h4 class="card-title text-center">Engineering Graduates<br/>Employment Outcomes</h4>
                                    <p class="card-text text-center">Ended in</p>
                                    <h5 className='card-time text-center'>16th May 22 09:00 PM</h5>
                                    <h6 className='card-day text-center'> Days Hours Mins</h6>
                                    <div style={{textAlign:"center"}}><button class="btn btn-success ">Participate</button></div>

                                </div>
                            </div>
                        </div>

                        <div className='col-sm-4 col-md-4 col-lg-4 '>

                            <div class="Clscrd">
                                <img className="card-img-top" src={Img6} alt="Card image"></img>
                                <div class="card-body">
                                <div style={{textAlign:"center"}}><button className='Card-border-text'>Past</button></div>


                                    <h4 class="card-title text-center">Travel Insurance Claim<br/>Predicition</h4>
                                    <p class="card-text text-center">Ended in</p>
                                    <h5 className='card-time text-center'>16th May 22 09:00 PM</h5>
                                    <h6 className='card-day text-center'> Days Hours Mins</h6>
                                    <div style={{textAlign:"center"}}><button class="btn btn-success ">Participate</button></div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
