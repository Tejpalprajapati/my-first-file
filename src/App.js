import React,{Component} from 'react';
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import Ufooter from './Compnents/Ufooter';
import Header from './Compnents/Header';
import Home from './Compnents/Home';
import Footer from './Compnents/Footer';
import Syllabus from './Compnents/Syllabus';
import LatestJobs from './Compnents/LatestJobs';
import Admit from './Compnents/Admit';
import Contact from './Compnents/Contact';
import EditUser from './Compnents/EditUser';
import {route} from './Router';


export default class App extends Component
{
	constructor(props)
	{
		super(props)
	    this.view={
		home:<Home/>,
		latestjobs:<LatestJobs/>,
		syllabus:<Syllabus/>,
		admit:<Admit/>,
		contact:<Contact/>,
		['editUser']:<EditUser/>,

	}
	}
	render(){
	return(
	 <>
	   <div className='contai	ner-fluid'>
		<Ufooter/>
		<Header/>
		
		
	    {this.amazon()}
		<Footer/>
		
</div>
	
	 </>
	);
	}
	amazon=()=>{
		return this.view[route]
	}
}