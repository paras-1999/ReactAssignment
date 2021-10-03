import React, { Component } from 'react'
let items=[];
export class Bill extends Component {
    constructor(props){
        super(props)
        this.state={
            total:0
        }
    }
    totalBill(){
        let {total}=this.state;
        items.map((obj)=>
        total+=obj.price*obj.quantity)
        this.setState({
            total:total
        })

        
    }
    componentDidMount() {
        this.totalBill();
      }
    render() {
        if(sessionStorage.getItem('mycart')!=undefined){
            items=JSON.parse(sessionStorage.getItem('mycart'));
        }
        
        return (
            <>
                <table className="table">
                            <thead className="table-dark">
                                <tr>
                                <th>Car ID</th>
                                <th>Car Name</th>
                                <th>Rate</th>
                                <th>quantity</th>
                                <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((obj)=>
                                
                                    <tr key={obj.pname}>
                                        <td>{obj.id}</td>
                                        <td>{obj.pname}</td>
                                        <td>$ {obj.price}</td>
                                        <td>{obj.quantity}</td>
                                        <td>$ {obj.price*obj.quantity}</td>
                                    </tr>
                                       
                                )}
                            </tbody>
                        </table>
                        
                        <h1 className="text-info ">Grand Total = $ {this.state.total}</h1>
            </>
        )
    }
}

export default Bill
