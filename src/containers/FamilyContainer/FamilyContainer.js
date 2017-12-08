import React, { Component } from 'react';
import MemberContainer from 'Containers/MemberContainer/MemberContainer'

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';


class FamilyContainer extends Component {
    constructor(){
        super();
        this.state = {
            familyName:"",
            weddingAnniversary:null,
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
        let {members, familyName} = this.state;
        const member = {
            firstName:"",
            middleName:"",
            lastName:familyName,
            gender:"",
            birthday:null,
            familyRelationship:"",
            membershipStatus:""

        }
        this.setState({
            members:[...members , member]
        })
    }

    handleMemberChange(index, val){
        console.log(index, val);
        const newMem = this.state.members.map((mem, i) => i === index  ? val : mem);
        this.setState({members:newMem});
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
          });
    }

    // handle
    
    render(){
        let familyStyle = {

        }
        let self = this;
        let {familyName} = this.state;
        let members = this.state.members || []; 
 
        return (
            <div className="card family-component">
                <div className="card-body">
                    <h4 className="card-title">{familyName} Family</h4>
                    <p>{JSON.stringify(members)}</p>
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
                            members.map(function(val,i) {
                                console.log(val,i)
                                return <li className="list-group-item" key={i}>
                                    <MemberContainer onChange={self.handleMemberChange.bind(self,i)} value={val}/>
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
