import React, { Component } from 'react'
import ListDisplay from './ListDisplay'
const empList=[
            {eid:"P1A2R3A4S5",ename:"Paras Saxena",department:"JavaScript",phone:"9310414915",email:"parassaxena@gmail.com",design:"table-primary"},
            {eid:"T1U2S3H4A5R6",ename:"Tushar Saxena",department:"Android",phone:"9876543210",email:"tusharsaxena@gmail.com",design:"table-success"},
            {eid:"P1R2A3T4E5E6K7",ename:"Prateek Saxena",department:"Python",phone:"9876543210",email:"prateeksaxena@gmail.com",design:"table-info"},
            {eid:"S1A2K3S4H5A6M7",ename:"Saksham Garg",department:"Front-end",phone:"8976540321",email:"sakshamgarg@gmail.com",design:"table-warning"},
            {eid:"R1I2H3A4N5",ename:"Rihan Malik",department:"c++",phone:"4321098765",email:"rihanmailk@gmail.com",design:"table-danger"},
            {eid:"V1A2N3S4H5",ename:"Vansh Swami",department:"linux",phone:"4109876532",email:"vanshwahi@gmail.com",design:"table-secondary"},            {eid:"P1A2R3A4S5",ename:"Paras Saxena",department:"JavaScript",phone:"9310414915",email:"parassaxena@gmail.com",design:"table-primary"},
            {eid:"T1U2S3H4A5R6",ename:"Tushar Saxena",department:"Android",phone:"9876543210",email:"tusharsaxena@gmail.com",design:"table-success"},
            {eid:"P1R2A3T4E5E6K7",ename:"Prateek Saxena",department:"Python",phone:"9876543210",email:"prateeksaxena@gmail.com",design:"table-info"},
            {eid:"S1A2K3S4H5A6M7",ename:"Saksham Garg",department:"Front-end",phone:"8976540321",email:"sakshamgarg@gmail.com",design:"table-warning"},
            {eid:"R1I2H3A4N5",ename:"Rihan Malik",department:"c++",phone:"4321098765",email:"rihanmailk@gmail.com",design:"table-danger"},
            {eid:"V1A2N3S4H5",ename:"Vansh Swami",department:"linux",phone:"4109876532",email:"vanshwahi@gmail.com",design:"table-secondary"}
        ]
export class List extends Component {
    render() {
        return (
            <div className="text-center mt-2">
                <h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#008fe4" className="  bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg> List Of The Top Employees <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#008fe4" className="  bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                </h1>
                <ListDisplay emp={empList} />
            </div>
        )
    }
}

export default List
