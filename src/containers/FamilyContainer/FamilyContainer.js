import React, { Component } from 'react';
import MemberContainer from '../../containers/MemberContainer/MemberContainer'

// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import moment from 'moment';
// var Member = (props) => {
//     this.date = moment();
//     console.log(this.date)
//     this.handleDatePickerChange = (date)=>{
 
//         this.date = date;
//     }
//     return (
//         <form className="member-component">
//             <div className="">
            
//                 <div class="row">
//                     <div class="col">
//                         <div className="form-group">
//                             {/* <label htmlFor="firstName">Fist Name</label> */}
//                             <input type="text" className="form-control" placeholder="Fist Name" name="firstName" id=""/>
//                         </div>
//                     </div>
//                     <div class="col">
//                         <div className="form-group">
//                             {/* <label htmlFor="firstName">Middle Name</label> */}
//                            <input type="text" className="form-control" placeholder="Middle Name" name="middleName" id=""/>
//                         </div>
//                     </div>
//                     <div class="col">
//                         <div className="form-group">
//                             {/* <label htmlFor="firstName">Last Name</label> */}
//                          <input type="text" className="form-control" defaultValue={props.familyName} placeholder="Last Name" name="lastName" id=""/>
//                         </div>
//                     </div>
//                     <div class="col">
//                         <div className="form-group">
//                             {/* <label htmlFor="firstName">Member Role</label> */}
//                             <select className="form-control" name="" id="">
//                                 <option selected value="" disabled>Select Role</option>
//                                 <option value="Father">Father</option>
//                                 <option value="Mother">Mother</option>
//                                 <option value="Children">Children</option>
//                             </select>
//                         </div>
//                     </div>
//                     <div class="col">
//                         <div className="form-group">
//                             {/* <label htmlFor="firstName">Gender</label> */}
//                             <select className="form-control" name="" id="">
//                                 <option selected value="" disabled>Select Gender</option>
//                                 <option value="M">Male</option>
//                                 <option value="F">Female</option>
//                             </select>
//                         </div>
//                     </div>
//                     <div class="col">
//                         <div className="form-group">
//                             {/* <label htmlFor="firstName">Gender</label> */}
//                             <DatePicker className="form-control" onChange={this.handleDatePickerChange.bind(this)} selected={this.date}/>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </form>
//     )
// }


class FamilyContainer extends Component {
    constructor(){
        super();
        this.state = {
            familyName:"",
            members:[
                // {},
                // {},
                // {}
            ]
        }
        this.handleAddMember = this.handleAddMember.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
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
                    <h4 class="card-title">Family</h4>
                    <p class="card-text"><input type="text" onChange={this.handleInputChange} className="form-control" name="familyName" placeholder="Enter Family Name..."/></p>
                
                    </div>   
                    <ul className="list-group list-group-flush list-of-members">
                        { 
                            members.map(function(val) {
                                return <li className="list-group-item"><MemberContainer familyName={familyName} /></li>
                            })
                        }
                    </ul>
                    
                    <a href="#" className="btn" onClick={this.handleAddMember}>+ Add Member</a>
                   

            </div>
        )
    }
}


export default FamilyContainer;
