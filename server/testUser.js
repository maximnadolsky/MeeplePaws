// testUser.js 
// TODO: Remove this test file! 
console.log("Node.js is working!");

require('dotenv').config();
const connectDB = require('./db');
const User = require('./src/models/User');

async function createTestUser() {
  console.log("Connecting to MongoDB..."); // Debug message
  await connectDB(); // Connect to MongoDB
  console.log("Connected to MongoDB");

  const newUser = new User({
    username: 'testuser',
    email: 'testuser@example.com',
    password: 'securepassword',
  });

  try {
    const savedUser = await newUser.save();
    console.log('User created:', savedUser);
  } catch (error) {
    console.error('Error creating user:', error);
  }
}

createTestUser();