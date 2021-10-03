import React, { Component } from 'react'
const regForName=RegExp(/^[A-Za-z]{4,29}$/);
const regForEmail=RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const regForPhone =RegExp(/^[7-9][0-9]{9}$/);
const regForAge =RegExp(/^[1-9][0-9]$/);
const regForPan=RegExp(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/);
const regForAdhar =RegExp(/^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/);
const regForPass =RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/);
const regForPin =RegExp(/^[0-9]{6}$/);
const countryList=['india','united kingdom','france','us'];
const cityList=['delhi','mumbia','pune','chandighar','london','oxford','paris','new york','boston'];
export class From extends Component {
    constructor(props){
        super(props);
        this.state={
            fname:"",
            lname:"",
            email:"",
            phone:"",
            age:"",
            gender:"",
            pan:"",
            adhar:"",
            pass1:"",
            pass2:"",
            country:"",
            city:"",
            pin:"",
            errors:{
                fname:"",
                lname:"",
                email:"",
                phone:"",
                age:"",
                pan:"",
                adhar:"",
                pass1:"",
                pass2:"",
                country:"",
                city:"",
                pin:""
            }
        }
        
    }
    handle(event){
        const {name,value}=event.target;
            let errors=this.state.errors;
            switch(name){
                case 'fname':
                    errors.fname=regForName.test(value)?'':'Enter a vaild Name';
                    break;
                case 'lname':
                    errors.lname=regForName.test(value)?'':'Use Alphabates Only';
                    break;
                case 'email':
                    errors.email=regForEmail.test(value)?'':'Enter A Valid Email Address';
                    break;
                case 'phone':
                    errors.phone=regForPhone.test(value)?'':'Enter A Valid Mobile Number';
                    break;
                case 'age':
                    errors.age=regForAge.test(value)?'':'Enter Age Between 10-99';
                    break;
                case 'pan':
                    errors.pan=regForPan.test(value)?'':'Enter A Valid PAN Number ';
                    break;
                case 'adhar':
                    errors.adhar=regForAdhar.test(value)?'':'Enter A Valid Aadhar Number ';
                    break;
                case 'pass1':
                    errors.pass1=regForPass.test(value)?'':'6-16 Digit Password Atleast One Uppercase Lowercase & Special Character ';
                    break;
                case 'pass2':
                    errors.pass2=this.state.pass1!=value?"Password Didn't Match!!!":'';
                    break;
                case 'country':
                    errors.country=(countryList.indexOf(value)+1)?'':'Our Service Is Not Avilable In Your Country';
                    break;
                case 'country':
                    errors.country=(countryList.indexOf(value)+1)?'':'Our Service Is Not Avilable In Your Country';
                    break;
                case 'city':
                    errors.city=(cityList.indexOf(value)+1)?'':'Our Service Is Not Avilable In Your City';
                    break;
                case 'pin':
                    errors.pin=regForPin.test(value)?'':'Enter A Valid PIN';
                    break;   
                break;
            }
            this.setState({errors,[name]:value
            })
    }
    validate(event){
        event.preventDefault();
        let{fanme,lname,email,age,gender,pass1,pass2,adhar,pan,pin,country,city}=this.state;
        if(fanme==''||lname==''||email==''||age==''||gender==''||pass1==''||pass2==''||adhar==''||pan==''||pin==''||country==''||city=='')
        {
            alert("Fill The Complete Form");
        }
        else if(this.valid(this.state.errors))
        {
            alert("Valid Form Submited");
        }
        else {
            alert("Invalid Form");
        }
     }
      valid(errors){
         let valid=true;
         Object.values(errors).forEach((val)=> val.length>0 && (valid=false));
         return valid;
     }
    
    render() {
        return (
            <div className="bg-danger p-3" style={{minHeight:"fit-content"}}>
                <form className="text-center bg-danger text-white" autoComplete="off" onSubmit={this.validate.bind(this)}>
                    <input type="text" style={{width:"39%"}} placeholder="First Name" name="fname"  onChange={this.handle.bind(this)} />
                    <input type="text" style={{width:"39%"}} placeholder="Last Name" name="lname" onChange={this.handle.bind(this)} />
                    <div className="d-flex justify-content-between mx-auto" style={{width:"80%"}}><span  style={{fontSize:"small"}}>{this.state.errors.fname}</span>
                    <span style={{fontSize:"small"}}>{this.state.errors.lname}</span></div>
                    <input type="text" placeholder="E-mail" name="email" onChange={this.handle.bind(this)} />
                    <p>{this.state.errors.email}</p>
                    <input type="tel" placeholder="Mobile No." name="phone" onChange={this.handle.bind(this)} />
                    <p>{this.state.errors.phone}</p>
                    <input type="text" placeholder="Age" style={{width:"60%"}} name="age" onChange={this.handle.bind(this)} />
                    <input type="radio" name="gender" style={{width:"2%", display:"inline"}} value="male" onChange={this.handle.bind(this)}/> : Male
                    <input type="radio" name="gender" style={{width:"2%", display:"inline"}} value="female" onChange={this.handle.bind(this)} /> : Female<br/>
                    <p>{this.state.errors.age}</p>
                    <input type="text" placeholder="PAN Card" name="pan"  onChange={this.handle.bind(this)} />
                    <p>{this.state.errors.pan}</p>
                    <input type="text" placeholder="Aadhar Card" name="adhar" autoComplete="on" onChange={this.handle.bind(this)} />
                    <p>{this.state.errors.adhar}</p>
                    <input type="password" placeholder="Create A Password" name="pass1" onChange={this.handle.bind(this)} />
                    <p>{this.state.errors.pass1}</p>
                    <input type="password" placeholder="Re- Write The Password" name="pass2" onChange={this.handle.bind(this)} />
                    <p>{this.state.errors.pass2}</p>
                    <input type="text" placeholder="Country" name="country" className="text-capitalize" onChange={this.handle.bind(this)} />
                    <p>{this.state.errors.country}</p>
                    <input type="text" style={{width:"58%",textTransform:"capitalize"}} placeholder="City" name="city" onChange={this.handle.bind(this)} />
                    <input type="text" style={{width:"20%"}} placeholder="PIN Code" name="pin" onChange={this.handle.bind(this)} />
                    <div className="d-flex justify-content-between mx-auto" style={{width:"80%"}}><span  style={{fontSize:"small"}}>{this.state.errors.city}</span>
                    <span style={{fontSize:"small"}}>{this.state.errors.pin}</span></div>
                    <br/>
                    <button className="btn-grad" type="submit">Submit the form</button>
                </form>
            </div>
        )
    }
}

export default From
