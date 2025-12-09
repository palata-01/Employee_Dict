import React, { useState, useEffect } from 'react';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import SearchBar from './components/SearchBar';
import EmployeeService from './services/EmployeeService';

function App() {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchFilters, setSearchFilters] = useState({ name: '', department: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Fetch employees on mount
  useEffect(() => {
    fetchEmployees();
  }, []);

  // Filter employees when search filters change
  useEffect(() => {
    const filtered = employees.filter(emp => {
      const nameMatch = emp.name.toLowerCase().includes(searchFilters.name.toLowerCase());
      const deptMatch = emp.department.toLowerCase().includes(searchFilters.department.toLowerCase());
      return nameMatch && deptMatch;
    });
    setFilteredEmployees(filtered);
  }, [employees, searchFilters]);

  const fetchEmployees = async () => {
    setLoading(true);
    try {
      const data = await EmployeeService.getEmployees();
      setEmployees(data);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Failed to fetch employees');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (filters) => {
    setSearchFilters(prev => ({
      ...prev,
      ...filters
    }));
  };

  const handleAddEmployee = async (formData) => {
    try {
      await EmployeeService.createEmployee(formData);
      setSuccessMessage('Employee added successfully');
      setTimeout(() => setSuccessMessage(''), 3000);
      fetchEmployees();
    } catch (error) {
      setErrorMessage('Failed to add employee');
      console.error(error);
    }
  };

  const handleUpdateEmployee = async (formData) => {
    try {
      await EmployeeService.updateEmployee(editingEmployee._id, formData);
      setSuccessMessage('Employee updated successfully');
      setTimeout(() => setSuccessMessage(''), 3000);
      setEditingEmployee(null);
      fetchEmployees();
    } catch (error) {
      setErrorMessage('Failed to update employee');
      console.error(error);
    }
  };

  const handleDeleteEmployee = async (id) => {
    if (confirm('Are you sure you want to delete this employee?')) {
      try {
        await EmployeeService.deleteEmployee(id);
        setSuccessMessage('Employee deleted successfully');
        setTimeout(() => setSuccessMessage(''), 3000);
        fetchEmployees();
      } catch (error) {
        setErrorMessage('Failed to delete employee');
        console.error(error);
      }
    }
  };

  const handleEditEmployee = (employee) => {
    setEditingEmployee(employee);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setEditingEmployee(null);
  };

  const handleFormSubmit = (formData) => {
    if (editingEmployee) {
      handleUpdateEmployee(formData);
    } else {
      handleAddEmployee(formData);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Employee Directory</h1>
          <p className="text-gray-600">Manage and search your employee database</p>
        </div>

        {/* Messages */}
        {successMessage && (
          <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {errorMessage}
          </div>
        )}

        {/* Form Section */}
        <EmployeeForm
          onSubmit={handleFormSubmit}
          initialEmployee={editingEmployee}
          onCancel={handleCancelEdit}
        />

        {/* Search Section */}
        <SearchBar onSearch={handleSearch} />

        {/* Employees List */}
        <EmployeeList
          employees={filteredEmployees}
          onEdit={handleEditEmployee}
          onDelete={handleDeleteEmployee}
          loading={loading}
        />
      </div>
    </div>
  );
}

export default App;
