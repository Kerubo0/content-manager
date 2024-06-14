const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse the form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// Handle form submission
app.post('/submit-form', async (req, res) => {
    const { name, email } = req.body;
    const formData = {
        name: name,
        identifiers: [
            {
                type: 'email',
                channels: {
                    email: {
                        status: 'subscribed',
                        statusDate: new Date().toISOString()
                    }
                },
                id: email,
                sendWelcomeMessage: true
            },
        ]
    };

    try {
        const omnisendApiUrl = 'https://api.omnisend.com/v3/contacts';
        const omnisendApiKey = '6465033e71a2f8c907941509-t4xU2dZFtTDbjBheXP70DO7UP1GUUaXWhsX22AaQdWEq1EkUp9';

        const response = await axios.post(omnisendApiUrl, formData, {
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': omnisendApiKey
            }
        });

        res.status(200).send('Form submitted successfully!');
    } catch (error) {
        // Log the detailed error response from Omnisend
        if (error.response) {
            console.error('Error response from Omnisend:', error.response.data);
            res.status(500).send(`Error: ${error.response.data.error}`);
        } else {
            console.error('Error submitting the form:', error.message);
            res.status(500).send('Error submitting the form');
        }
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
