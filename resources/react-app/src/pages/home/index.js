import React, { useEffect, useState } from 'react';
import logo from '../../logo.svg';
import './style.css';
import {fetchTickets} from '../../store/actions/ticketsAction';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import {Button} from "reactstrap";

function Home(props) {
    const {tickets, fetchTickets} = props;
    const [isTitle, setIsTitle] = useState(true);

    useEffect(()=>{
        fetchTickets();
    },[])


    const mappingTable = () => {
        return tickets.map((item, index)=>{
            return(
                <tr key={index}>
                    <th scope="row">{item.id}</th>
                    <td>{item.name}</td>
                    <td>{item.content}</td>
                    <td>{item.created_at}</td>
                    <td>
                        <button className="btn btn-warning"><Link to={"/product"}>Edit</Link></button>
                        <button className="btn btn-danger ml-2">Delete</button>
                    </td>
                </tr>
            )
        })
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
            </header>
            <div className="flex-center position-ref full-height">
                <div className="content">
                    <div className="table-responsive-sm">
                        <Button className={`btn btn-success pull-right mb-2`}><Link to={`/product`}>Add</Link></Button>
                        <table className="table table-success table-striped">
                            <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Content</th>
                                <th scope="col">Create</th>
                                <th>Event</th>
                            </tr>
                            </thead>
                            <tbody>
                            {mappingTable()}
                            </tbody>
                        </table>
                    </div>


                </div>
            </div>
        </div>
    );
}
const mapStateToProps = (state) =>{
    const {tickets} = state
    return {tickets};
}
export default connect(mapStateToProps, {fetchTickets})(Home);
