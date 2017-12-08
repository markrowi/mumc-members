import React, { Component } from 'react';
import MemberContainer from '../../containers/MemberContainer/MemberContainer'

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';


class FamilyContainer extends Component {
    constructor(){
        super();
        this.state = {
            familyName:"",
            weddingAnniversary:"",
            members:[
                // {},
                // {},
                // {}
            ]
        }
        this.handleAddMember = this.handleAddMember.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleDatePickerChange = this.handleDatePickerChange.bind(this);
    }

    handleDatePickerChange(date, event){
        console.log("Event",date)
        this.setState({weddingAnniversary:date})
    }

    handleAddMember(){
        let {members} = this.state;
        this.setState({
            members:[...members , {}]
        })
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
          });
    }
    
    render(){
        let familyStyle = {

        }
        let {familyName} = this.state;
        let members = this.state.members || []; 
        return (
            <div className="card family-component">
                <div class="card-body">
                    <h4 class="card-title">{familyName} Family</h4>
                    
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <div className="form-group">
                                <input type="text" className="form-control" name="" placeholder="Faminly CENSUS No."/>
                            </div>  
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="form-group">
                                <input type="text" className="form-control" name="" placeholder="CENSUS Date"/>
                            </div>  
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <div className="form-group">
                                <input type="text" onChange={this.handleInputChange} className="form-control" name="familyName" placeholder="Family Name or Surname"/>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="form-group">
                                {/* <input type="text" className="form-control"  placeholder="Wedding Anniversary" name="" id=""/> */}
                                <DatePicker className="form-control" calendarClassName="roo" name="" placeholderText="Wedding Anniversary" onChange={this.handleDatePickerChange} selected={this.state.weddingAnniversary}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Address" name="" id=""/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Telephone / Cellphone No. / Email Address" name="" id=""/>
                            </div>
                        </div>
                       
                    </div>
                </div>
                    
                    

                    <ul className="list-group list-group-flush list-of-members">
                        { 
                            members.map(function(val) {
                                return <li className="list-group-item">
                                    <MemberContainer familyName={familyName} />
                                    <div className="row justify-content-end">
                                        <div className="col-md-2 col-sm-12 text-right">
                                            <button className="btn btn-block btn-sm btn-secondary">X Remove</button>
                                        </div>
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                    
                    <a href="#" className="btn" onClick={this.handleAddMember}>+ Add Member</a>
                   

            </div>
        )
    }
}


export default FamilyContainer;
