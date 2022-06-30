import React, { Component } from 'react'
import '../Component/Main.css'
import Img2 from "../assets/cardimage/g1.png"

export default class Main extends Component {
  render() {
    return (
      <section className='container-fluid'>
        <div className='row '>
          <div className='col-sm-8 col-md-8 col-lg-8 d-flex'>
            <div className='clsline  '></div>

            <div className=' clspara  ' >

              <h1>Accelerate Innovation <br />
                With Global AI Challenges
              </h1>

              <p className='clsmsg'>AI Challenges at DPhi simulate real-world problems. it is a <br />
                great place to put your AI/Data science skills to test on<br />
                diverse datasets allowing you to faster learning through<br />
                competitions.</p>
              <button data-toggle="modal" data-target=".bd-example-modal-xl">Create Challenges</button>
            </div>
          </div>

        </div>




       



        <div class="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
              <div class="modal-header " style={{background:"lightgray"}}>
                <h5 class="modal-title " id="exampleModalLabel">Challenges Details</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true"></span>
                </button>
              </div>

              <div class="modal-content">
                <form>
                  <div class="form-group">
                    <div class="form-group col-md-6">

                      <label for="exampleInputChallenge1">Challenges Name</label>
                      <input type="Challenge" class="form-control" aria-describedby="ChallengeHelp" />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-group col-md-6">
                      <label for="exampleInputDate1">Start Date</label>
                      <input type="Date" class="form-control" />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-group col-md-6">

                      <label for="exampleInputDate1">End Date</label>
                      <input type="Date" class="form-control" />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlTextarea1">Description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
                  </div>
                  <div class="form-group">
                    <div class="form-group col-md-4">
                      <label for="exampleFormControlTextarea1">Image</label>

                      <img className='picture-group' src={Img2} alt='picture'></img>
                    </div>

                  </div>
                 
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                  </div>
                  <button className="submit btn btn-success" data-toggle="modal" data-target=".bd-example-modal-xxl">Create Challenge</button>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary">Create Challenge</button>
              </div>
            </div>
          </div>
        </div>

        
<div class="modal fade bd-example-modal-xxl" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xxl">
    <div class="modal-content">
    <img className='picture-group' src={Img2} alt='picture'></img>
   

    </div>
  </div>
</div>

      </section>

    )
  }
}
