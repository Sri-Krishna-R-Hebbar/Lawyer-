require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from different directories
app.use(express.static(path.join(__dirname)));
app.use('/Home', express.static(path.join(__dirname, 'Home')));
app.use('/Chatbot', express.static(path.join(__dirname, 'Chatbot')));
app.use('/Lawyer Filter', express.static(path.join(__dirname, 'Lawyer Filter')));
app.use('/Login', express.static(path.join(__dirname, 'Login')));
app.use('/Profile', express.static(path.join(__dirname, 'Profile')));

app.use(bodyParser.json());

// Setup Gemini AI
const MODEL_NAME = "gemini-pro";
const API_KEY = process.env.GEMINI_API_KEY;

async function runChat(userInput) {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });
  
  // Your chat logic here
  try {
    const result = await model.generateContent(userInput);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error in chat:', error);
    return 'Sorry, I encountered an error processing your request.';
  }
}

// Route to handle chat requests
app.post('/chat', async (req, res) => {
  try {
    const userInput = req.body.userInput;
    const response = await runChat(userInput);
    res.json({ response });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Serve index.html as the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Home', 'law-office-templates', 'index.html'));
});

// Error handling for 404
app.use((req, res) => {
  res.status(404).send('Page not found');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Root directory: ${__dirname}`);
  console.log(`Index path: ${path.join(__dirname, 'Home', 'law-office-templates', 'index.html')}`);
});