import React from 'react';

const EmployeeCard = ({ employee, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-800">{employee.name}</h3>
        <p className="text-gray-600 text-sm">{employee.role}</p>
      </div>
      
      <div className="space-y-2 mb-6">
        <p className="text-gray-700">
          <span className="font-semibold">Department:</span> {employee.department}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Email:</span> <a href={`mailto:${employee.email}`} className="text-blue-500 hover:underline">{employee.email}</a>
        </p>
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => onEdit(employee)}
          className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(employee._id)}
          className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;
