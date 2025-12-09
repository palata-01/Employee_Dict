import axios from 'axios';

const API_BASE_URL = 'http://localhost:5001/api/employees';

const EmployeeService = {
  // Get all employees with optional filters
  getEmployees: async (name = '', department = '') => {
    try {
      const params = new URLSearchParams();
      if (name) params.append('name', name);
      if (department) params.append('department', department);

      const url = `${API_BASE_URL}${params.toString() ? '?' + params.toString() : ''}`;
      console.log('Fetching from:', url);
      const response = await axios.get(url);
      console.log('Response:', response.data);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching employees:', error);
      console.error('Error message:', error.message);
      console.error('Error response:', error.response);
      throw error;
    }
  },

  // Get single employee by ID
  getEmployeeById: async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/${id}`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching employee:', error);
      throw error;
    }
  },

  // Create a new employee
  createEmployee: async (employeeData) => {
    try {
      const response = await axios.post(API_BASE_URL, employeeData);
      return response.data.data;
    } catch (error) {
      console.error('Error creating employee:', error);
      throw error;
    }
  },

  // Update an employee
  updateEmployee: async (id, employeeData) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/${id}`, employeeData);
      return response.data.data;
    } catch (error) {
      console.error('Error updating employee:', error);
      throw error;
    }
  },

  // Delete an employee
  deleteEmployee: async (id) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting employee:', error);
      throw error;
    }
  }
};

export default EmployeeService;
