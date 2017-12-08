import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

class MembersContainer extends Component {
    constructor(){
        super();
        this.state = {
            birthday: "",
            ministries:[
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
        
        this.setState({
            [name]: value
          });
    }
    
    render(){

        let {ministries} = this.state;
        return (
            <form className="member-component">
      
                
                <div class="row">
                    <div class="col-sm-12 col-md-4">
                        <div className="form-group">
                            <label htmlFor="firstName">Fist Name</label>
                            <input type="text" className="form-control" placeholder="Fist Name" name="firstName" id=""/>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-3">
                        <div className="form-group">
                            <label htmlFor="firstName">Middle Name</label>
                            <input type="text" className="form-control" placeholder="Middle Name" name="middleName" id=""/>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4">
                        <div className="form-group">
                            <label htmlFor="firstName">Last Name</label>
                            <input type="text" className="form-control" defaultValue={this.props.familyName} placeholder="Last Name" name="lastName" id=""/>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-1">
                        <div className="form-group">
                            <label htmlFor="">Gender</label>
                            <select className="form-control" name="" id="">
                                <option selected value="" className="text-muted"  disabled></option>
                                <option value="Father">M</option>
                                <option value="Mother">F</option>
                            </select>
                            {/* <div className="form-group">
                                <div class="form-check form-check-inline">
                                    <label class="form-check-label">
                                        <input class="form-check-input" type="radio" id="inlineCheckbox1" value="option1"/> M
                                    </label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <label class="form-check-label">
                                        <input class="form-check-input" type="radio" id="inlineCheckbox2" value="option2"/> F
                                    </label>
                                </div>
                            </div> */}
                            
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div class="col-sm-12 col-md-2">
                        <div className="form-group">
                            <label htmlFor="firstName">Relationship</label>
                            <select className="form-control" name="" id="">
                                <option selected value="" className="text-muted"  disabled>Select...</option>
                                <option value="Father">Father</option>
                                <option value="Mother">Mother</option>
                                <option value="Children">Children</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="col col-sm-12 col-md-2">
                        <div className="form-group">
                            <label htmlFor="firstName">Date of Birth</label>
                            <DatePicker className="form-control" onChange={this.handleDatePickerChange} selected={this.state.birthday}/>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-3">
                        <div className="form-group">
                            <label htmlFor="firstName">Membership Status</label>
                            <select className="form-control" name="" id="">
                                <option selected value="" className="text-muted" disabled>Select...</option>
                                <option value="P">Professing</option>
                                <option value="B">Baptized</option>
                                <option value="AFM">Affilliate Member</option>
                                <option value="ASM">Associate Member</option>
                                <option value="CR">Constituency Roll</option>
                            </select>
                        </div>
                    </div>
                    <div class="col col-sm-12 col-md-2">
                        <div className="form-group">
                            <label htmlFor="firstName">Membership Date</label>
                            <DatePicker className="form-control" onChange={this.handleDatePickerChange} selected={this.state.birthday}/>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-3">
                        <div className="form-group">
                            <label htmlFor="firstName">How</label>
                            <select className="form-control" name="" id="">
                                <option selected value="" className="text-muted" disabled>Select...</option>
                                <option value="P">Disfellow</option>
                                <option value="B">Transferred</option>
                        
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    
                    <div class="col-sm-12 col-md-12">
                        <div className="form-group">
                            <label htmlFor="firstName">Ministry Involvement</label>
                            <div className="form-group">
                                {
                                    ministries.map(function(m){
                                        return (
                                            <div class="form-check form-check-inline">
                                                <label class="form-check-label">
                                                    <input class="form-check-input" name="" type="checkbox" id="inlineCheckbox1" value={m}/> {m}
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
                    
                    <div class="col-sm-12 col-md-12">
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