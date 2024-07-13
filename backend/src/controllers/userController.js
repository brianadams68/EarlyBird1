const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Example: User registration
exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Create new user instance
    user = new User({ username, email, password });

    // Hash password before saving to database
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Save user to database
    await user.save();

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, 'earlybird', { expiresIn: '1h' });

    // Respond with success message and token
    res.status(201).json({ message: 'User created successfully', token });
  } catch (error) {
    console.error('User registration error:', error);
    res.status(500).json({ error: 'User registration failed' });
  }
};

// Example: User login
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });

    // Check if user exists and password is correct
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, 'earlybird', { expiresIn: '1h' });

    // Respond with token
    res.json({ token });
  } catch (error) {
    console.error('User login error:', error);
    res.status(500).json({ error: 'User login failed' });
  }
};
