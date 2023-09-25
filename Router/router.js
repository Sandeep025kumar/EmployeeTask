const express = require('express');
const { employeeData, getData, updateData, deleteData } = require('../Controller/employee');
const router = express.Router();
router.get('/employee',getData);
router.post('/employee/create',employeeData);
router.put('/employee/update/:id',updateData);
router.delete('/delete/:id',deleteData)
module.exports = router;