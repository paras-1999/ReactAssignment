import React, { Component } from 'react'
import json from '../Product.json'
import Bill from './Bill';
import Starts from './Starts';
let arr=[];
export class Shoping extends Component {
    constructor(props){
        super(props)
        this.state={
            l:0,
            s:true
        };
    }
    componentDidMount(){
        if(sessionStorage.getItem('mycart')!=undefined){
            
            arr=JSON.parse(sessionStorage.getItem('mycart'));
            this.setState({l:arr.length});
        }
        
    }

    addToCart(i){
        var check=0;
        if(sessionStorage.getItem('mycart')!=undefined){
            arr=JSON.parse(sessionStorage.getItem('mycart'));
            arr.map((obj)=>
            {if(obj.id==i.id){
                obj.quantity++
                sessionStorage.setItem('mycart',JSON.stringify(arr));
                check=1;
            
            }})
            if(check==0){
                arr.push(i);
                sessionStorage.setItem('mycart',JSON.stringify(arr));
            }
            
        }
        else{
            arr.push(i);
            sessionStorage.setItem('mycart',JSON.stringify(arr));
        }
        console.log(arr);
        this.counter();
    }
    counter(){
        let arr=JSON.parse(sessionStorage.getItem('mycart'));
        this.setState({l:arr.length});

    }
    change(x){
        this.setState({
            s:!x
        })
        console.log(this.state.s);
    }
    render() {
        return (
            
                <>
                    <nav className="nav my-4 mx-auto text-center">
                        <a className="nav-link active"   onClick={()=>this.change(this.state.s)} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="Black" className="bi bi-house" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                                <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                            </svg> <span className="abc text-info">Home</span>
                        </a>
                        <a className="nav-link" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="Black" className="bi bi-heart" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                            </svg> <span className="abc text-info">Wishlist</span>
                        </a>
                        <button style={{background:'transparent',border:"none"}} className="nav-link" href="#" onClick={()=>this.change(this.state.s)} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="Black" className="bi bi-cart3" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg> <span className="abc text-info">Cart</span>
                            {this.state.l?<span className="badge bg-primary rounded-pill">{this.state.l}</span>:null} 
                        </button>
                        <a className="nav-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="Black" className="bi bi-info-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                            </svg> <span className="abc text-info">About</span>
                        </a>
                    </nav>
                    {this.state.s?
                    <div className=" container-fluid row g-4">
                            {json.product.map((item,i)=>
                                <div className="col-sm-3" key={i}>
                                    <div className="card text-center p-3 border border-info" >
                                        <img src={`${item.images}`} height="150px" className="card-img-top" alt="car"/>
                                        <div className="card-body">
                                            <h5 className="card-title">{item.pname}</h5>
                                            <p className="card-text">Price : $ {item.price}</p>
                                            <Starts />
                                            <button onClick={()=>this.addToCart(item)} className="btn btn-info text-white w-100 rounded-pill my-1"> Add to cart</button>
                                        </div>
                                    </div>
                                </div>)
                            }

                    </div>:
                    <Bill />}
                </>
            )
        }
    }

export default Shoping
