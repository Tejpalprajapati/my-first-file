import React,{Component} from "react";
 import {route,redirect} from "../Router";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import {FiMail } from "react-icons/fi";

export default class EditUser extends Component{
	constructor(Props)
	{
		super(Props);
	this.state={
			name:"",
			email:"",
			mobile:"",
			Password:"",
			User:[],
			msg:""
		}
	
	}
	render()
	{
		return(
		<>
		<br/><br/><br/>
                
				 <div className="co1">
			  <h1 style={{textAlign:'center',lineHeight:'200px',color:'#37517e'}}>CONTACT</h1>
			 <div className="un"></div><br/>
			 <span style={{marginLeft:'140px'}}>
			 Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam 
			 </span><br/>
			 <span style={{marginLeft:'340px'}}>
			   cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.


			 </span>
			  </div>
			  <div className="co2">
			  <div className="co11">
			  <div className="con"><br/>
			    <a href='https://www.google.co.in/maps'> <CiLocationOn style={{fontSize:'40px',marginLeft:'50px',color:'#50b5e5'}} className="lo"/></a><span style={{fontSize:'28px',marginLeft:'25px',color:'#1b81b1',fontWeight:'bold'}}>Location<br/><h6 style={{marginLeft:'110px'}}>A108 Adam Street, Bearilly, NY 243504</h6></span>
			     <FiPhoneCall style={{fontSize:'35px',marginLeft:'50px',color:'#50b5e5'}} className="lo"/><span style={{color:'#1b81b1',fontSize:'20px',marginLeft:'20px'}}>+91 9027910626</span><br/><br/>
			     <FiMail style={{fontSize:'35px',marginLeft:'50px',color:'#50b5e5'}} className="lo"/><span style={{marginLeft:'20px',fontSize:'20px',color:'#1b81b1'}}>tejpal123@gmail.com</span>

			  </div>
			  <div className="con1">
			  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28464.955608827244!2d80.96662493193968!3d26.899703877268713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1674502389785!5m2!1sen!2sin" width="550" height="280" style={{border:'0', allowfullscreen:'', loading:"Fast", referrerpolicy:"no-referrer-when-downgrade",marginLeft:'40px',marginTop:'16px',borderRadius:'5px',boxShadow:'0px 0px 10px 10px white'}}></iframe>
			    
			  </div>
			  </div>
			  <div className="co12">
			  <form>
					   <h5>Name</h5>
					   <input type="text" className='form-control fs-5' placeholder='Enter your name...' style={{borderLeft:'none',borderRight:'none'}} value={this.state.name} onChange={(event)=>{this.setState({name:event.target.value})}}/><br/>
					   <h5>EmailId</h5>
					   <input type="email" className='form-control fs-5' placeholder='Enter your email...' style={{borderLeft:'none',borderRight:'none'}} value={this.state.email} onChange={(event)=>{this.setState({email:event.target.value})}}/><br/>
					   <h5>Mobile</h5>
					   <input type="text" className='form-control fs-5' placeholder='Enter your Mobile...' style={{borderLeft:'none',borderRight:'none'}} value={this.state.mobile} onChange={(event)=>{this.setState({mobile:event.target.value})}}/><br/>
					   <h5>Password</h5>
					   <input type="password" className='form-control fs-5' placeholder='Enter your password...' style={{borderLeft:'none',borderRight:'none'}} value={this.state.Password} onChange={(event)=>{this.setState({Password:event.target.value})}}/><br/>
					    <h5>Message</h5>
					   <textarea className='form-control'></textarea>

					  <br/>
					  <input type="button" className="btn btn-primary fs-5   form-control "value="Save" onClick={this.saveData}/>
					   </form>
			  </div>
			  </div>
			  <br/><br/><br/><br/><br/><br/>
				</>
				
		)
		return redirect('contact')
	}
	saveData=()=>
	{
				console.log(this.state);
			const url='http://localhost:5000/User/';
			
			let newObject={
			name:this.state.name,
			email:this.state.email,
			mobile:this.state.mobile,
			Password:this.state.Password,
		}

			let promise=fetch(url,{
				headers:
				{
					'Content-Type':'application/json',
				},
				method:'POST',
				body:JSON.stringify(newObject),
			});
			promise.then((response)=>{
				if(response.ok)
				{
					this.setState({
						name:this.state.name="",
						email:this.state.email="",
					    mobile:this.state.mobile="",
					    password:this.state.password="",
						msg:<i className="sccu">User created Successfully !</i>
					     
					})
					let ID1=setTimeout(()=>{
				   this.setState({
					   msg:""
				   })
			   },1000);
				}
			
			}).then((data)=>{return console.log(data)}).catch((error)=>{console.log(error)
			  
		 
			});
			
	}
	}