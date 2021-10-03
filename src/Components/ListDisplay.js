import React, { Component } from 'react'
import Starts from './Starts'

export class ListDisplay extends Component {
    render() {
        return (
            <><table className="table table-hover  table-borderless text-center mt-4">
            <thead>
                <tr className="table-dark">
                    <th>Emp. ID</th>
                    <th>Emp Name</th>
                    <th>Department</th>
                    <th>Mobile no.</th>
                    <th>E-mail Address</th>
                    <th>Rating</th>
                </tr>
            </thead>

            <tbody className="fw-bold">
            {this.props.emp.map((val,i)=>
                <tr key={i} className={val.design}>
                    <td>{val.eid}</td>
                    <td>{val.ename}</td>
                    <td>{val.department}</td>
                    <td>{val.phone}</td>
                    <td className="fst-italic fw-normal">{val.email}</td>
                    <td><Starts /></td>
                </tr>
              )}
            </tbody>
        </table>
                
            </>
        )
    }
}

export default ListDisplay
