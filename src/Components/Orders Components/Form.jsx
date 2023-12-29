import React, {useState} from 'react'
import './Form.css'
import {useFormik} from 'formik'
import {useAlert} from "react-alert"

const Form = () => {
    let alert = useAlert()
    function display(){
        console.log(document.getElementById("form1"))
        console.log("Hello ")
        const scriptURL = 'https://script.google.com/macros/s/AKfycbwLgGHkSN2kiSqAWfRDV1Z7PVh8lbDwXxPAFfFNA2bwyan2W5GSIQwJ1huh8Ck1Z_cX/exec'
        var form = document.getElementById("form1")
      console.log(form)
      form.addEventListener('submit', (e) => {
        e.preventDefault()
        fetch(scriptURL, {method: 'POST', body: new FormData(form) })
        .then((response) => alert("Thanks your Order! We will connect you soon."))
        setTimeout(
            function refresh() {
                alert("Thanks your Order! We will connect you soon.")
                window.location.reload(false)
            }, .5
            )
        })
    }
    var [total, setTotal] = useState(0)
    var [prevFace, setprevFace] = useState("f")
    var [prevType, setprevType] = useState("t")
    var [prevSize, setprevSize] = useState("s")
    let price = {
                    "Single Face": 50, 
                    "Double Face": 100,
                    "Realistic Pencil Sketch": 150,
                    "Color Pencil Sketch": 200,
                    "A4": 500,
                    "A3": 800,
                    "None": 0
                }
    function calculate(e) {
        // let arr = ["NumberOfFaces", "ArtType", "ArtSize"]
        // if (arr.includes(e.target.name)){
            console.log("Yes it calculates the price ")
                if (e.target.value === "Double Face" && prevFace ==="Single Face") {
                    setTotal(total +  price[e.target.value] - price["Single Face"])
                    console.log(total)
                    setprevFace(e.target.value)
                    return
                } else if (e.target.value === "Single Face" && prevFace === "Double Face") {
                    setTotal(total +  price[e.target.value] - price["Double Face"])
                    console.log(total)
                    setprevFace(e.target.value)
                    return
                }
                else if (e.target.value === "Single Face" || e.target.value === "Double Face" ){
                    setTotal(total + price[e.target.value])
                    setprevFace(e.target.value)
                    return 
                }
                console.log("Previous Face", prevFace)

                console.log("Current Face", e.target.value) 

                if (e.target.value === "Realistic Pencil Sketch" && prevType === "Color Pencil Sketch") {
                    setTotal(total +  price[e.target.value] - price["Color Pencil Sketch"])
                    console.log(total)
                    setprevType(e.target.value)
                    return
                } else if (e.target.value === "Color Pencil Sketch" && prevType === "Realistic Pencil Sketch") {
                    setTotal(total +  price[e.target.value] - price["Realistic Pencil Sketch"])
                    console.log(total)
                    setprevType(e.target.value)
                    return 
                } 
                else if (e.target.value === "Color Pencil Sketch" || e.target.value === "Realistic Pencil Sketch") {
                    setTotal(total + price[e.target.value])
                    console.log("Else is working")
                    setprevType(e.target.value)
                    return 
                }
                console.log("Previous Type", prevType)
                console.log("Current Type", e.target.value)

                
                if (e.target.value === "A4" && prevSize === "A3") {
                    setTotal(total +  price[e.target.value] - price["A3"])
                    console.log(total)
                    setprevSize(e.target.value)
                    return 
                } else if (e.target.value === "A3" && prevSize === "A4") {
                    setTotal(total +  price[e.target.value] - price["A4"])
                    console.log(total)
                    setprevSize(e.target.value)
                    return 
                }
                else if (e.target.value === "A3" || e.target.value === "A4"){
                    setTotal(total + price[e.target.value])
                    console.log("Else is working")
                    setprevSize(e.target.value)
                    return 
                }
                console.log("Previous Size", prevSize)
                console.log("Current Size", e.target.value)
    }

    function refresh() {
        window.location.reload(false)
    }


    const formik = useFormik(
        {
            initialValues: {name:'', email: '', mobile: '', NumberOfFaces: '', ArtType: '', ArtSize: '', totalPrice: ''},

            onSubmit: async (values) => {
                
                try {
                  const scriptUrl = 'https://script.google.com/macros/s/AKfycbwEMO-kWStUFeJUxu6o_jU2GsiZnk1GRbWs2Khia9Wrwom-CWmkIj6s6CjZGpwDvoQ1/exec';
                  const response = await fetch(scriptUrl, {
                    method: 'POST',
                    mode: "no-cors",
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                  });
          
                  if (response) {
                    alert.success("Form submitted Successfully")
                    console.log('Form submitted successfully', response);
                    // Handle success as needed
                  } else {
                      alert.error("An error occurred")
                      console.error('Failed to submit form', response);
                      // Handle failure as needed
                    }
                } catch (error) {
                    alert.error("An error occurred")
                  console.error('An error occurred during form submission', error);
                  // Handle error as needed
                }
              },
            validate: (values) => {
                let errors = {}
                
                if (values.NumberOfFaces === ""){
                    errors.NumberOfFaces = "Select any one above"
                    return errors
                }
                if(values.ArtType === "" || values.ArtType  === "None") {
                    errors.ArtType = "Please select the Art Type"
                    return errors
                } 
                if(values.ArtSize === "" || values.ArtSize  === "None") {
                    errors.ArtSize = "Please select the Art Size"
                    return errors
                } 
                if (!values.name) {
                    errors.name = 'Name is Required'
                    return errors
                }
                if (!values.email) {
                    errors.email = 'Email is required'
                    return errors
                } if( !values.email.includes("@gmail.com")) {
                    errors.email = "Valid email required"
                    return errors
                }
                if (!values.mobile) {
                    errors.mobile = 'Mobile number is required'
                    return errors
                } 
                const regex = /^[0-9]{10}$/;
                if (!regex.test(values.mobile)) {
                    errors.mobile = "Valid Mobile number required"
                    return errors
                }
            }
        }
    )
    console.log(formik.values);
    formik.values.totalPrice = total
    return (
        <div className="form-container">
            <button onClick={()=> alert.error(`Thank you ${formik.values.name}, We will contact you soon...`)}>Produce alert</button>
            <form id="form1" onChange={formik.handleChange} onSubmit={formik.handleSubmit} method='post'>
            {/* <form id="form1" onChange={formik.handleChange} action='https://script.google.com/macros/s/AKfycbykYi-YxG5FtE-NxbC5bK-1BPa7CvdeQo2ZHiaMaUqpCGBAYFOTpp2NqLy6ZqeihAP8/exec' method='post'> */}
            <div onChange={calculate} className="form-container_0">
                <div className="form-container_1">
                    <h3>Number of Faces(s)*</h3>
                    <input type='radio' name='NumberOfFaces' value="Single Face" ></input>
                    <label>Single Face</label>
                    <br></br>
                    <input type="radio" name="NumberOfFaces" value="Double Face"></input>
                    <label>Double Faces</label>
                    {formik.errors.NumberOfFaces?<div className="error-color">{formik.errors.NumberOfFaces}</div>:null}
                </div>
                <div className="form-container_2">
                    <h3>Choose Your Art Type (s)*</h3>
                    <select name='ArtType' required>
                        <option className="ArtsType_option op_1" value="None">--- Select ---</option>
                        <option className="ArtsType_option opp_2" value='Realistic Pencil Sketch' defaultChecked >Realistic Pencil Sketch</option>
                        <option className="ArtsType_option op_3" value='Color Pencil Sketch'>Color Pencil Sketch</option>
                    </select>
                    {formik.errors.ArtType?<div className='error-color'>{formik.errors.ArtType}</div>:null}

                </div>
                <div className="form-container_3">
                    <h3>Choose your Art size in inches</h3>
                    <select name='ArtSize' required>
                        <option value="None">--- Select ---</option>
                        <option value='A4' >A4 Size</option>
                        <option value='A3'>A3 Size</option>
                    </select>
                    {formik.errors.ArtSize?<div className='error-color'>{formik.errors.ArtSize}</div>:null}
                    <h3>Total Price (₹)</h3>
                    <h1 id = "hiddenPrice" style={{color: "green", display: "inline", marginRight: "10px"}} >₹ {total} /-<input  type= "number" name="totalPrice" style={{display:"none"}}></input></h1>
                    {total > 500?<span style={{textDecoration: 'line-through', color:"red"}}>₹ {total + total*(25/100)>>0} /-</span>:null}

                </div>
                    
                </div>
                <input className="name ip" style={formik.errors.name?{borderColor: "red"}:{borderColor: "green"}}type='text' name='name' placeholder='Enter Name' value={formik.values.name}></input>
                {formik.errors.name?<div className='error-color'>{formik.errors.name}</div>:null}
                <br></br>
                <input className="email ip" style={formik.errors.email?{borderColor: "red"}:{borderColor: "green"}} type='text' name='email' placeholder='Enter Email' value={formik.values.email} ></input>
                {formik.errors.email?<div className='error-color'>{formik.errors.email}</div>:null}
                <br></br>
                <input className="mobile ip" style={formik.errors.mobile?{borderColor: "red"}:{borderColor: "green"}} type='number' name='mobile' placeholder='Enter Phone Number' value={formik.values.mobile}></input>
                {formik.errors.mobile?<div className='error-color'>{formik.errors.mobile}</div>:null}
                <br></br>
                <button type="submit ip" onClick={formik.errors.name || formik.errors.email || formik.errors.mobile?()=>{alert.error("Sorry Errors occured"); console.log("Working")}:null}>Submit</button>
            </form>
        </div>
    )
}

export default Form
