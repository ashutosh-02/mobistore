const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/mobiStoreUser')
.then(()=>console.log("Connection Established"))
.catch((err)=>console.log("Error Connecting: " + err));

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
});

const User = mongoose.model('User', userSchema);

app.post('/api/users', async (req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.json(savedUser);  
    } catch (error) { // Updated 'err' to 'error'
        res.status(400).json({ error: error.message }); // Updated 'err' to 'error'
    }
});

app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) { // Updated 'err' to 'error'
        res.status(400).json({ error: error.message }); // Updated 'err' to 'error'
    }
});

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
        res.json({ success: true, username: user.username });
    } else {
        res.status(401).json({ success: false, error: "Invalid credentials" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
