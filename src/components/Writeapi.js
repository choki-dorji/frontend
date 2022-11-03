import React, { Component, } from 'react';


class Create extends Component {
  
    constructor(props) {
        super(props);
        // this.show = this.show.bind(this);
      }
    
    

    
    fetchApi() {
    

        var a =  document.getElementById('cid').value
        var b =  document.getElementById('name').value
        var c =  document.getElementById('age').value
        var d =  document.getElementById('dia').value

        var e =  document.getElementById('medicine').value
        var f =  document.getElementById('physician').value
        var g =  document.getElementById('description').value

        var h =  document.getElementById('thram').value
        var i =  document.getElementById('contact').value
        var j =  document.getElementById('email').value
        
        console.log(a)
        console.log(b)
        console.log(c)
        // console.log(d)
        console.log(e)
        console.log(f)
        console.log(g)
        console.log(h)
        console.log(i)
        console.log(j)



        fetch('https://restframeworkchoki.herokuapp.com/curd/createmale/', {
            method: "post",
            headers: {
                "Accept": "application/json",
                'X-Requested-With': 'XMLHttpRequest',
                "Content-Type": "application/json",
        
            },
        
            body: JSON.stringify(
              {
                CID: a,
                Name: b,
                DOB: c,
                profile: d,
                Village: e,
                Chiwog: f,
                ThramNo: g, 
                HouseHoldNo: h,
                contact_number: i,
                email: j,
                
            
            })
        })
           .then(res => res.json())
            .then(data => console.log(data));
    
      }
    

    render() {
        return (
            <div>
        
            <div className="input-group mb-3">
            <span className="input-group-text" >Citizen Identity</span>
            <input type="integer" className="form-control"  aria-label="Username" aria-describedby="basic-addon1" id="cid"/>
            </div>

            
            <label for="basic-url" className="form-label">Patients Details</label>
            <div className="input-group mb-3">
            <span className="input-group-text">Name</span>
            <input type="text" className="form-control" id="name" aria-describedby="basic-addon3"/>
            </div>

            <div className="input-group mb-3">
            <span className="input-group-text">DOB</span>
            <input type="date" className="form-control"  aria-label="Username" id='age'/>
            </div>

            <div>
           
            <div className="input-group mb-3">
            <span className="input-group-text" >profile</span>
            <input type="file" className="form-control" id="dia" aria-describedby="basic-addon3" accept='image/*'/>
            </div>
            </div>

            <div className="input-group mb-3">
            <span className="input-group-text">village</span>
            <input type="text" className="form-control" id="medicine" aria-describedby="basic-addon3"/>
            </div>

            <div className="input-group mb-3">
            <span className="input-group-text">Chiwog</span>
            <input type="text" className="form-control" id="physician" aria-describedby="basic-addon3"/>
            </div>


            <div className="input-group">
            <span className="description">ThramNo</span>
            <textarea className="form-control" aria-label="With textarea" id = "description"></textarea>
            </div>
            <br></br>

            <div className="input-group mb-3">
            <span className="input-group-text">HouseHoldNo</span>
            <input type="text" className="form-control" id="thram" aria-describedby="basic-addon3"/>
            </div>

            <div className="input-group mb-3">
            <span className="input-group-text">contact</span>
            <input type="text" className="form-control" id="contact" aria-describedby="basic-addon3"/>
            </div>


            <div className="input-group">
            <span className="description">email</span>
            <textarea className="form-control" aria-label="With textarea" id = "email"></textarea>
            </div>
            <br></br>

            <a className='btn btn-success' onClick={this.fetchApi} href="#">Enter</a>
         
            </div>
        );
    }
}

export default Create;