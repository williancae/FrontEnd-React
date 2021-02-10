import React, { Component } from 'react';
import Menu from './sections/Menu'
import Header from './sections/Header'
import Differential from './sections/Differential'
import Projects from './sections/Projects'
import Acting from './sections/Acting'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

class Home extends Component {
   constructor() {
     super();
     this.state = {
        className: 'nav-menu'
     }
   }
   handleScroll() { 
    if (document.documentElement.scrollTop > 500) {
       this.setState({
         className: 'show'
       })
     } 
    if (document.documentElement.scrollTop < 500) {
        this.setState({
          className: 'nav-menu'
        })
      } 
   }
 
   componentDidMount() {
     window.onscroll = () => this.handleScroll()
   }
   render() {
     return(
       <div>
        <Menu className={this.state.className} />
        <Header />
        <Differential/>
        <Acting />
        {/* <Projects/>  */}
        <Contact />
        <Footer />
       </div>
     )
   }
}
export default Home;
