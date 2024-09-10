// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'JWT_SECRET=0468408d9b48ef9dcb36c735386a2144941076792fa5a4cb5aeffebfd5e01b1abefc8c58c35aa4d1d835fc87c1190791abf3b0b6016f054b2fa44ed8a034f71a';

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'No token provided, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; 
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token, authorization denied' });
  }
};

module.exports = authMiddleware;
