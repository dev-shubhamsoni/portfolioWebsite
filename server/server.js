require('dotenv').config();

const express = require('express');
const knex = require('knex');
const cors = require('cors');
const axios = require('axios');
const db = knex({
    client: 'pg',
    connection: {
        host: process.env.PGHOST,
        port: process.env.PGPORT,
        user: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE
    }
});

const app = express();

app.use(express.json());
app.use(cors());

const secretKeyCaptcha = '6LfX1kkpAAAAAM0tqK6t43j8-BXG6U180DBJunLQ';

app.post('/api/v1/contactSubmission', async (req, res) => {
    try {
        const { name, email, selectExpertise, message, captchaValue } = req.body;

        // Verify reCAPTCHA token
        const recaptchaResponse = await axios.post(
            `https://www.google.com/recaptcha/api/siteverify?secret=${secretKeyCaptcha}&response=${captchaValue}`
        );

        if (recaptchaResponse.data.success) {
            // Process contact submission
            const response = await db('enquiry')
                .returning('*')
                .insert({
                    name: name,
                    email: email,
                    message: message,
                    needexpertisein: selectExpertise,
                    date: new Date(),
                });

            res.json(response[0]);
        } else {
            res.status(400).json({ message: 'Recaptcha verification failed!' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Unable to register', error: error.message });
    }
});

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});
