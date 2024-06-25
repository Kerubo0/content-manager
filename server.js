const express = require('express');
const axios = require('axios');
const path = require('path');
//const apiKey = process.env.OMNISEND_API_KEY;


const app = express();


require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

/*app.get('/join', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'form.html'));
}); */

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

const apiKey = ' 660fbceee4ddc6b3ebfc8286-rcEV5E5T5dn4FnVPSaH0FHnCdqq4BV1iUvRQzY01MeoNb9gEYB'
app.post('/submit-form', async (req, res) => {
    try {
        const { name, email } = req.body;

        const data = {
            identifiers: [{
                channels: {
                    email: {
                        status: 'subscribed',
                        statusDate: new Date().toISOString()
                    }
                },
                id: email,
                type: 'email',
                sendWelcomeMessage: true
            }],
            //firstName: name,
            'customProperties': {
                'landingpage': 'oscar'
              }
            
        };

        const response = await axios.post(
            'https://api.omnisend.com/v3/contacts',
            data,
            {
                headers: {
                    'X-API-KEY': apiKey,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        );

        console.log('Data sent to Omnisend successfully:', response.data);
        res.status(200).send('Form submitted successfully');
    } catch (error) {
        console.error('Error sending data to Omnisend:', error.response.data);
        res.status(500).send('Error submitting form');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
