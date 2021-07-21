
import "./header.css"
import React, { Component } from 'react'
import logo from "./logo.png"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
export default class header extends Component {
  render() {
          return (
            <div class="topnav" >
            <div >
              <link rel="stylesheet" 
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css"/>
              
                <Col ><img src= {logo} id = "logo"/></Col>
                <Col >
                  <div class="topnavi">
                   <a href="#banking_and_Finance">Banking & Finance</a>          
                   <a href="#sales_and_marketing">Sales & Marketing</a>
                   <a href="#contact">Consulting</a>
                   <a href="#hr_and_ir">HR & IR</a>
                   <a href="#it_and_system">IT & System</a>
                   <a href="#s_and_o">SCM & Operations</a>
                   <a href="#legal">Legal</a>
                   <a href="#bpo">BPO</a>
                   <a href="#courses">Courses</a>
                   </div>
                </Col>
                <Col >
                    <div class="topnavii">
                      <a  ><i class="fa fa-fw fa-stream"></i>Menu</a>
                      <a  ><i class="fa fa-fw fa-search"></i></a>
                      <a ><i class="fa fa-fw fa-bell"></i></a>
                    </div>
                </Col>
            </div>
            </div>
     
    )
    }
};
