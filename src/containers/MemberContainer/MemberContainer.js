import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

class MembersContainer extends Component {
    constructor(){
        super();
        this.state = {
            birthday: ""
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
        return (
            <form className="member-component">
      
                
                    <div class="row">
                        <div class="col-sm-12 col-md-2">
                            <div className="form-group">
                                {/* <label htmlFor="firstName">Fist Name</label> */}
                                <input type="text" className="form-control" placeholder="Fist Name" name="firstName" id=""/>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-2">
                            <div className="form-group">
                                {/* <label htmlFor="firstName">Middle Name</label> */}
                               <input type="text" className="form-control" placeholder="Middle Name" name="middleName" id=""/>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-2">
                            <div className="form-group">
                                {/* <label htmlFor="firstName">Last Name</label> */}
                             <input type="text" className="form-control" defaultValue={this.props.familyName} placeholder="Last Name" name="lastName" id=""/>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-2">
                            <div className="form-group">
                                {/* <label htmlFor="firstName">Member Role</label> */}
                                <select className="form-control" name="" id="">
                                    <option selected value="" disabled>Select Role</option>
                                    <option value="Father">Father</option>
                                    <option value="Mother">Mother</option>
                                    <option value="Children">Children</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-2">
                            <div className="form-group">
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
                             
                                {/* <label htmlFor="firstName">Gender</label> */}
                                {/* <select className="form-control" name="" id="">
                                    <option selected value="" disabled>Select Gender</option>
                                    <option value="M">Male</option>
                                    <option value="F">Female</option>
                                </select> */}
                            </div>
                        </div>
                        <div class="col col-sm-12 col-md-2">
                            <div className="form-group">
                                {/* <label htmlFor="firstName">Gender</label> */}
                                <DatePicker className="form-control" onChange={this.handleDatePickerChange} selected={this.state.birthday}/>
                            </div>
                        </div>
                    </div>
         
            </form>
        )
    }
}


export default MembersContainer;