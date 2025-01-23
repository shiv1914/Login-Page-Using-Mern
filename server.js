const express = require ('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();


app.use(cors());
app.use(bodyParser.json());


mongoose
  .connect('mongodb+srv://shivakachare1914:Shiva5450@cluster0.em92u.mongodb.net/Zeal', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));


const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);


app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;


  try {
    const newUser = new User({ email, password });
    await newUser.save();
    res.status(200).json({ message: 'User logged in successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error logging in user' });
  }
});


const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});