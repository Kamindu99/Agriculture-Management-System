import React, { Component } from 'react';
import '../App.css'
import AdminHeader from './AdminHeader';


class AdminHome extends Component {
    render() {
        return (
            <body>
                <AdminHeader/>
                <div className="pagemargin">
                <br/>
                
                <div className="Scontainer">
                    <br/>
                    <a href="/admin/agriequipment/all">
                    <button className="btn btn-primary mr-3 mb-3">Equipment Management</button>
                    </a>

                    <a href="/admin/agriplant/all">
                    <button className="btn btn-primary mr-3 mb-3">Plant Management</button>
                    </a>

                    <a href="/admin/agriseed/all">
                    <button className="btn btn-primary mr-3 mb-3">Seed Management</button>
                    </a>
                    <a href="/">
                    <button className="btn btn-primary mr-3 mb-3">Food Management</button>
                    </a>
                    
                </div>

                <div className="container2">
                    <a href="/admin/agrochemical/all">
                    <button className="btn btn-primary mr-3 mb-3">Agrochemical Management</button>
                    </a>
                    <a href="/admin/agrifertilizer/all">
                    <button className="btn btn-primary mr-3 mb-3">Fertilizer Management</button>
                    </a>
                    <a href="/">
                    <button className="btn btn-primary mr-3 mb-3">Payment Management</button>
                    </a>
                    <a href="/">
                    <button className="btn btn-primary mr-3 mb-3">User Management</button>
                    </a>
                </div>
                </div>
            </body>
        );
    }
}

export default AdminHome;
