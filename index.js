const secure_login_on = require('secure-login-on');
const nft_dip_module = require('nft-dip-module');
const body_parser = require('body-parser');
const mongoose = require('mongoose');
const moment = require('moment');
const webpack = require('webpack');
const bluebird = require('bluebird');
const jsonwebtoken = require('jsonwebtoken');
const mocha = require('mocha');
const react = require('react');
const ethereumjs_util = require('ethereumjs-util');
const solc = require('solc');

// Create a JWT token using jsonwebtoken library
const jwt = require('jsonwebtoken');
const generateJWTToken = (payload, secret, options) => {
  return jwt.sign(payload, secret, options);
}
const userPayload = { userId: 12345, username: 'john_doe' };
const jwtSecret = 'secret_key';
const jwtOptions = { expiresIn: '1h' };
const token = generateJWTToken(userPayload, jwtSecret, jwtOptions);
console.log('JWT Token:', token);

// Calculate the factorial of a number recursively
const factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log('Factorial of 5:', factorial(5));

try {
  const a = 1;
  const b = a + c; // c is not defined
} catch (error) {
  console.error('Caught an error:', error.message);
}