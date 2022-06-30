import React, { Component } from 'react'
import "../Component/Cardfile.css"

class Cardfile extends Component {
  render() {
    return (
      <div>
      <div className='container py-5'>
      <div className='text text-center py-3 '>
      <h1>Why Participate in<span className='clscolor'> AI Challenges?</span></h1>
      </div>
        <div class="row">
  <div class="col-sm-6 py-3">
    <div class="card">
    <div class="card-body">
    <i class='fas fa-edit'></i>


        <h5 class="card-title">Prove Your skills</h5>
        <p class="card-text">Gain substantial experiance by solving real-world problems<br/>and pit against others to come up with innovative solution .</p>
        <a href="#" class="btn btn-primary">Go click</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6 py-3">
    <div class="card">
      <div class="card-body">
      <i class='fas fa-users'></i>
        <h5 class="card-title">Learn from comunity</h5>
        <p class="card-text">One can look and analyze the solutions submitted by the<br/> other data Scientists in the community and Learnfrom them</p>
        <a href="#" class="btn btn-primary">Go Click</a>
      </div>
    </div>
  </div>

  <div class="col-sm-6 py-3">
    <div class="card">
      <div class="card-body">
      <i class='fas fa-id-card-alt'></i>

        <h5 class="card-title">Challenge Yourself</h5>
        <p class="card-text">There is nothing for you to lose by Participate in a<br/>Challenge.You can fail safe, learn out of the entrie<br/>experianceand bounce back harder.</p>
        <a href="#" class="btn btn-primary">Go Click</a>
      </div>
    </div>
  </div>

  <div class="col-sm-6 py-3">
    <div class="card">

      <div class="card-body">
      <i class="fa-solid fa-address-card"></i>

        <h5 class="card-title">Earn recognition</h5>
        <p class="card-text">You will stand out from the crowd if you do well in AI<br/>Challenge, it not only helps you shine in the community but<br/> also Earn rewards.</p>
        <a href="#" class="btn btn-primary">Go Click</a>
      </div>
    </div>
  </div>
</div>
</div>
      </div>
    )
  }
}
export default Cardfile;
