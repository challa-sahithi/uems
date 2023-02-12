import React from 'react'

function Inform (){
  return (
    <>
            <div class="mb-3">
              <label for="input-group-text" class="form-label"
                >Name of the Event</label
              >
              <input
                type="text"
                class="form-control"
                id="exampleEvent"
                aria-describedby="emailHelp"
              />
            </div>
            <input
                class="btn btn-primary px-4 mx-sm-5"
                type="button"
                value="Notify selected"
              />
              <input
                class="btn btn-primary px-4 mx-sm-5"
                type="button"
                value="Notify All"
            />

    </>
  )
}
export default Inform;