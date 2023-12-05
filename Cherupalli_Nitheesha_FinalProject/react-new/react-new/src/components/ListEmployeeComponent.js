// ListEmployeeComponent.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import './ListEmployeeComponent.css'; // Custom CSS file

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getAllEmployees();
    }, []);

    const getAllEmployees = () => {
        EmployeeService.getAllEmployees().then((response) => {
            setEmployees(response.data);
            setLoading(false);
        }).catch(error => {
            console.error("Error fetching data: ", error);
            setError(error);
            setLoading(false);
        });
    }

    const deleteEmployee = (employeeId) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this employee?");
        if (confirmDelete) {
            EmployeeService.deleteEmployee(employeeId).then(() => {
                getAllEmployees();
            }).catch(error => {
                console.error("Error deleting employee: ", error);
            });
        }
    }

    if (loading) return <p>Loading employees...</p>;
    if (error) return <p>Error loading employees!</p>;

    return (
        <div className="list-employee-container">
                       
            <h2 className="text-center"> List Employees </h2>
            <Link to="/add-employee" className="btn btn-primary mb-2"> Add Employee </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th> Employee Id </th>
                        <th> Employee First Name </th>
                        <th> Employee Last Name </th>
                        <th> Employee Email Id </th>
                        <th> Actions </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(employee =>
                            <tr key={employee.id}>
                                <td> {employee.id} </td>
                                <td> {employee.firstName} </td>
                                <td> {employee.lastName} </td>
                                <td> {employee.emailId} </td>
                                <td>
                                    <Link className="btn btn-info" to={`/edit-employee/${employee.id}`}>Update</Link>
                                    <button className="btn btn-danger" onClick={() => deleteEmployee(employee.id)}
                                    style={{marginLeft: "10px"}}> Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ListEmployeeComponent;
