import React from 'react'
import '../styles/join-modal.css'
import modalgif from '../images/modal-gif.gif'

function JoinModal() {
  return (
    <>
    <div class="modal fade join-modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div  class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-center w-100" id="exampleModalLabel">Join to Our Community</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body"> 
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
          <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Name:</label>
            <input type="text" class="form-control" id="recipient-name" placeholder='Enter name'/>
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Final Education:</label>
            <input type="text" class="form-control" id="recipient-name" placeholder='Education'/>
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Email Address</label>
            <input type="text" class="form-control" id="recipient-name" placeholder=' Ex: Example@bepraticle.cim'/>
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Mobile Number:</label>
            <input type="tel" class="form-control" id="recipient-name" placeholder='Type Your Number'/>
            <div className="form-group mt-3 w-100 submit">
            <button type="button" class="btn btn-primary">Sumbit</button>
            <button type="button" class="btn btn-secondary mt-3" data-bs-dismiss="modal">Cancel</button>
            </div>
          </div>
        </form>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div className="gif-container">
            <img src={modalgif} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        
        
      
      </div>
    </div>
    </div>
    </div>
    </>

  )
}

export default JoinModal
