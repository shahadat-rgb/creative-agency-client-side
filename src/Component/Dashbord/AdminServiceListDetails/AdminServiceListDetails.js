import React from 'react';
import { Table } from 'react-bootstrap';

const AdminServiceListDetails = ({order}) => {
    return (
      <Table responsive="xs" className="admin-services-list-table">
        <thead className="admin-services-list-table-header">
          <tr>
            <th style={{ width: "20%" }}>Name</th>
            <th style={{ width: "20%" }}>Email ID</th>
            <th style={{ width: "20%" }}>Service</th>
            <th style={{ width: "25%" }}>Project Details</th>
            <th style={{ width: "10%" }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {order.map((order) => (
            <tr>
              <td> {order.order.name}</td>
              <td> {order.order.email}</td>
              <td>{order.order.projectName}</td>
              <td>{order.order.projectDetails}</td>
              <td>
                <select  name="status">
                  <option>Pending</option>
                  <option>Done</option>
                  <option>On going</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
};

export default AdminServiceListDetails;