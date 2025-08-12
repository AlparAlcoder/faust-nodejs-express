const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/signup', [
  body('email').isEmail().withMessage('Please enter a valid email'),
  body('password').trim().isLength({ min: 5 })
], userController.signup);

router.post('/login', userController.login);

module.exports = router;