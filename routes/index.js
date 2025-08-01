const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const username = req.query.name || 'Guest'; // fallback to Guest
  res.render('index', { title: 'Home', username});
});
router.get('/about', (req, res) => res.render('about', { title: 'About Me' }));
router.get('/projects', (req, res) => {
  const projects = [
    {
      title: 'Simple task manager',
      description: 'Built with Node.js to run in the terminal.',
      link: 'https://github.com/MacroDonner/taskManager.git'
    },
    {
      title: 'Real-Time Chat',
      description: 'A basic real-time chat app using Socket.io and Express.',
      link: 'https://github.com/MacroDonner/realTimeChat.git'
    },
    {
      title: 'Portfolio Website',
      description: 'This website — built with Express, EJS, and some love.',
      link: 'https://github.com/MacroDonner/MacroDonner.github.io.git'
    }
  ];

  res.render('project', {projects});
});
// Show contact form
router.get('/contact', (req, res) => {
  res.render('contact');
});

// Handle contact form submission (for now, just log)
router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`New message from ${name} (${email}): ${message}`);
  res.send('Thank you! I’ll get back to you soon.');
});

module.exports = router;
