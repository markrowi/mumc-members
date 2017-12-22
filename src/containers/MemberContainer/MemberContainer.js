import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

class MembersContainer extends Component {
    constructor(props){
        super(props);
       
        this.state = {
            
            ...props.value
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleDatePickerChange = this.handleDatePickerChange.bind(this);
    }

    handleDatePickerChange(date){
        this.setState({birthday:date})

    }
   
    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        let self = this;
        this.setState({
            [name]: value
          }, ()=> {
              self.props.onChange(self.state);
        });
       
    }

    render(){

        let {firstName, lastName} = this.state;
        const ministries = [
            "BS",
            "SS",
            "CG",
            "DG",
            "WS",
            "CHOIR",
            "O",
            "PT",
            "PT*",
            "VT",
            "MT",
            "ETC",
        ]
        return (
            <form className="member-component">
                <div className="header">
                    <h4 className="title">{firstName||"Member"}</h4>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <div className="form-group">
                            <label htmlFor="firstName">Fist Name</label>
                            <input type="text" className="form-control" onChange={this.handleInputChange} placeholder="Fist Name" name="firstName" id=""/>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <div className="form-group">
                            <label htmlFor="middleName">Middle Name</label>
                            <input type="text" className="form-control" placeholder="Middle Name" name="middleName" id=""/>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" className="form-control" defaultValue={lastName} placeholder="Last Name" name="lastName" id=""/>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-1">
                        <div className="form-group">
                            <label htmlFor="">Gender</label>
                            <select defaultValue="" className="form-control" name="" id="">
                                <option value="" className="text-muted"  disabled></option>
                                <option value="Father">M</option>
                                <option value="Mother">F</option>
                            </select>
                                                      
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-2">
                        <div className="form-group">
                            <label htmlFor="firstName">Relationship</label>
                            <select defaultValue="" className="form-control" name="" id="">
                                <option value="" className="text-muted"  disabled>Select...</option>
                                <option value="Father">Father</option>
                                <option value="Mother">Mother</option>
                                <option value="Children">Children</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="col col-sm-12 col-md-2">
                        <div className="form-group">
                            <label htmlFor="firstName">Date of Birth</label>
                            <DatePicker className="form-control" onChange={this.handleDatePickerChange} selected={this.state.birthday}/>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <div className="form-group">
                            <label htmlFor="firstName">Membership Status</label>
                            <select defaultValue="" className="form-control" name="" id="">
                                <option value="" className="text-muted" disabled>Select...</option>
                                <option value="P">Professing</option>
                                <option value="B">Baptized</option>
                                <option value="AFM">Affilliate Member</option>
                                <option value="ASM">Associate Member</option>
                                <option value="CR">Constituency Roll</option>
                            </select>
                        </div>
                    </div>
                    <div className="col col-sm-12 col-md-2">
                        <div className="form-group">
                            <label htmlFor="firstName">Membership Date</label>
                            <DatePicker className="form-control" onChange={this.handleDatePickerChange} selected={this.state.birthday}/>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <div className="form-group">
                            <label htmlFor="firstName">How</label>
                            <select defaultValue="" className="form-control" name="" id="">
                                <option value="" className="text-muted" disabled>Select...</option>
                                <option value="P">Disfellow</option>
                                <option value="B">Transferred</option>
                        
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    
                    <div className="col-sm-12 col-md-12">
                        <div className="form-group">
                            <label htmlFor="firstName">Ministry Involvement</label>
                            <div className="form-group">
                                {
                                    ministries.map(function(m, i){
                                       
                                        return (
                                            <div key={i} className="form-check form-check-inline">
                                                <label className="form-check-label">
                                                    <input className="form-check-input" name="" type="checkbox" id="inlineCheckbox1" value={m}/> {m}
                                                </label>
                                            </div>
                                        )
                                    })
                                }
                                
                                
                            </div>
                        </div>
                        
                    </div>

                </div>
                <div className="row">
                    
                    <div className="col-sm-12 col-md-12">
                        <div className="form-group">
                            <label htmlFor="firstName">Changes / Remarks</label>
                            <input type="text" className="form-control" name="remarks" id=""/>
                        </div>
                        
                    </div>

                </div>

         
            </form>
        )
    }
}


export default MembersContainer;