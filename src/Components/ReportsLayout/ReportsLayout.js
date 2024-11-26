import React from 'react';
import './ReportsLayout.css';

function ReportsLayout() {
    const reports = [
        { id: 1, title: 'Blood Test Report', date: '2023-10-01' },
        { id: 2, title: 'X-Ray Report', date: '2023-09-15' },
        // Add more reports as needed
    ];

    return (
        <div className="reports-container">
            <h1>Your Reports</h1>
            <table className="reports-table">
                <thead>
                    <tr>
                        <th>Report Title</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {reports.map(report => (
                        <tr key={report.id}>
                            <td>{report.title}</td>
                            <td>{report.date}</td>
                            <td>
                                <a href={`/patient_report.pdf`} download>
                                    Download
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ReportsLayout;