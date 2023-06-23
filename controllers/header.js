const express = require('express');
const router = express.Router();

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function() {
  menu.classList.toggle('show');
});

module.exports = router;