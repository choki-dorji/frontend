import axios from 'axios';
import { useState } from 'react';


function Submitted() {
    const [image, setImage] = useState('');

    const handleChange = (e) => {
        console.log(e.target.files)
        setImage(e.target.files[0])
        console.log("image", e.target.files[0])
    }

    const handleAPI = () => {
        var cid = document.getElementById('cid').value;
		var name1 = document.getElementById('name').value;
		var gender = document.getElementById('gender').value;
		var dob = document.getElementById('DOB').value;
        
		var village = document.getElementById('village').value;
		var chiwog = document.getElementById('chiwog').value;

		var thram = document.getElementById('thram').value;
		var house = document.getElementById('house').value;
		var phone = document.getElementById('phone').value;

		var email = document.getElementById('email').value;

        console.log(cid, name1, gender, dob, village, chiwog, image,thram , house, phone, email)

        const url = 'https://restframeworkchoki.herokuapp.com/curd/createmale/'

        const formData = {
            CID: cid,
            Name: name1,
            DOB: dob,
            profile: image,
            Village: village,
            Chiwog: chiwog,
            ThramNo: thram, 
            HouseHoldNo: house,
            contact_number: phone,
            email: email
        }
        console.log('hhsdj')
        try{
            console.log('jdfdvkdf')
            axios.post(url, formData)
            .then((res) =>{
                console.log('jdfd')
                console.log(res)
            })
            console.log("jvfkdfjk")
        }
        catch(err){
            console.log('error')
            console.log("error", err)
        }
    }
    
    // const click = () => {
    //     var cid = document.getElementById('cid').value;
	// 	var name1 = document.getElementById('name').value;
	// 	var gender = document.getElementById('gender').value;
	// 	var dob = document.getElementById('DOB').value;

	// 	// profile = document.getElementById('profile').value;
	// 	var village = document.getElementById('village').value;
	// 	var chiwog = document.getElementById('chiwog').value;

	// 	var thram = document.getElementById('thram').value;
	// 	var house = document.getElementById('house').value;
	// 	var phone = document.getElementById('phone').value;

	// 	var email = document.getElementById('email').value;

    //     var profile = this.onchange();

    
    //     const url = "https://restframeworkchoki.herokuapp.com/curd/createmale/"
    //     const formData = {
    //         // files:e.target.result,
    //         CID: cid,
    //         Name: name1,
    //         DOB: dob,
    //         profile: e.target.result,
    //         Village: village,
    //         Chiwog: chiwog,
    //         ThramNo: thram, 
    //         HouseHoldNo: house,
    //         contact_number: phone,
    //         email: email,
        
    //     }
    //     const response = await axios.post(url, formData)
    //     .then(response => console.log("result", response))
    //     return console.log("result", response);
    




 
         return (
            <div>
                <form>
                <input type="integer" name="" placeholder="cid" id="cid" /><br />
                <input type="text" name="" placeholder="name" id="name" /><br />
                <input type="date" name="" placeholder="DOB" id="DOB" /><br />

                <label htmlFor="cars">Gender:</label>
                <select id="gender" name="cars">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select><br />

                <input type="file" accept="image/*" name="" placeholder="profile" id="profile" onChange={handleChange}/><br />

                <input type="text" name="" placeholder="village" id="village" /><br />
                <input type="text" name="" placeholder="chiwog" id="chiwog" /><br />
                <input type="text" name="" placeholder="thram number" id="thram" /><br />
                <input type="text" name="" placeholder="Houisehold  No" id="house" /><br />
                <input type="integer" name="" placeholder="phone number" id="phone" /><br />

                <input type="email" name="" placeholder="email" id="email" /><br />

                <button onClick={ handleAPI }>submit</button>


                </form>
                
            </div>
        )
         }


export default Submitted;