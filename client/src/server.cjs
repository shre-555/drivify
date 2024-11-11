const express = require('express');
const mongodb = require('mongodb');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5050;
const MongoClient = mongodb.MongoClient;

app.use(cors());
app.use(bodyParser.json());

const url = 'mongodb://localhost:27017'; // MongoDB URL
const dbName = 'drivingLicenceDB'; // Database name
let db;

// Connect to MongoDB
MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to Database');
        db = client.db(dbName);
    })
    .catch(error => console.error('Connection Error:', error));

// API to save application data
app.post('/api/save-application', async (req, res) => {
    try {
        const applicationData = req.body;
        console.log('Hooray! ');
        console.log(applicationData);
        const result = await db.collection('applications').insertOne(applicationData); // Collection created if it doesn't exist
        res.status(201).json({ message: 'Application saved', id: result.insertedId });
    } catch (error) {
        console.error('Error inserting application:', error);
        res.status(500).json({ error: 'Failed to save application' });
    }
});

app.get('/api/get-application', async(req, res) => {
    try {
        console.log('Hooray Get! ');
        const name = req.query.applicationId;
        console.log(name);
        const result = await db.collection('applications').findOne({fullName:name}); // Collection created if it doesn't exist
        console.log(result);
        res.status(201).json(result);
    } catch (error) {
        console.error('Error finding application:', error);
        res.status(500).json({ error: 'Failed to find application' });
    }

});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
