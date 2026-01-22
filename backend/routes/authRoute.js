const express = require('express')
const router = express.Router();
const middleProtect = require('../middlewares/authMiddleware.js')
const {registerUser, loginUser, updateUser, deleteUser, getUser, logoutUser} = require('../controllers/authController.js')

router.post('/register', registerUser)
router.post('/login', loginUser)
router.put('/update', middleProtect, updateUser)
router.delete('/delete', middleProtect, deleteUser)
router.get('/getUserData', middleProtect, getUser)
router.post('/logout', middleProtect, logoutUser)

module.exports = router