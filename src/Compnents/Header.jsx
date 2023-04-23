import React ,{Component}from 'react';
export default class Header extends Component
{
	render()
	{
	return(
	  <>
	  
	    <div className='ha'>
		  <nav>
		    <ul>
			  <li><a href='#home' style={{color:'white',textDecoration:'none'}}>Home</a></li>
			  <li><a href='#latestjobs' style={{color:'white',textDecoration:'none'}}>Latest Jobs</a></li>
			  <li><a href='#syllabus' style={{color:'white',textDecoration:'none'}}>Syllabus</a></li>
			  <li><a href='#admit' style={{color:'white',textDecoration:'none'}}>Admit Card</a></li>
			  <li><a href='#results' style={{color:'white',textDecoration:'none'}}>Results</a></li>
			  <li><a href='#answer key' style={{color:'white',textDecoration:'none'}}>Answer Key</a></li>
			  <li><a href='#search' style={{color:'white',textDecoration:'none'}}>Search</a></li>
			  <li><a href='#contact' style={{color:'white',textDecoration:'none'}}>Contact Us</a></li>
			  <li><a href='#mobile' style={{color:'white',textDecoration:'none'}}>Moblie</a>
			  
			    <ul>
				  <li><a href='andorid app' style={{color:'white',textDecoration:'none'}}>Andorid App</a></li>
				  <li><a href='apple ios app' style={{color:'white',textDecoration:'none'}}>Apple IOS App</a></li>
				  <li><a href='window app' style={{color:'white',textDecoration:'none'}}>Window App</a></li>
				</ul>
				
			  </li>
			  
			  <li style={{borderRight:'none'}}><a href='#more' style={{color:'white',textDecoration:'none'}}>More</a>
			    <ul>
				  <li><a href='upsssc' style={{color:'white',textDecoration:'none'}}>UPSSSC</a></li>
				  <li><a href='ibps' style={{color:'white',textDecoration:'none'}}>IBPS</a></li>
				  <li><a href='ssc' style={{color:'white',textDecoration:'none'}}>SSC</a></li>
				  <li><a href='rail way' style={{color:'white',textDecoration:'none'}}>Rail Way</a></li>
				  <li><a href='uppcs' style={{color:'white',textDecoration:'none'}}>UPPCS</a></li>
				  <li><a href='tet' style={{color:'white',textDecoration:'none'}}>TET</a></li>
				</ul>
			  </li>
		    </ul>
		  </nav>
		</div>
	  </>
	);
	}
}