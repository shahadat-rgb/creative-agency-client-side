import React from 'react';
import { Table } from 'react-bootstrap';

const AdminServiceListDetails = ({allServiceList}) => {
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
          {allServiceList.map((allServiceList) => (
            <tr>
              <td> {allServiceList.name}</td>
              <td> {allServiceList.email}</td>
              <td>{allServiceList.serviceTitle}</td>
              <td>{allServiceList.projectDetails}</td>
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