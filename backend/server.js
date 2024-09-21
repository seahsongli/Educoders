const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/success', (req, res) => {
    const token = req.query.token;
    // Handle the token as needed
    res.send(`Verification successful! Token: ${token}`);
    console.log('Verification successful:', result);
    // Handle the success (e.g., send the proof token to your server)
    const proofToken = result.proof; // Adjust this based on the actual structure of the result
    console.log(proofToken);
    // Now you can send this token to your server for verification
    // For example, using fetch or axios
    axios.post('/verify-world-id', { token: proofToken })
        .then(response => {
            console.log('Server verification response:', response.data);
        })
        .catch(error => {
            console.error('Error during server verification:', error);
        });
});

app.post('/verify-world-id', async (req, res) => {
  const { token } = req.body;

  // Log incoming requests
  console.log('Request Body:', req.body);

  try {
    const response = await axios.post(
      'https://developer.worldcoin.org/api/v2/verify/app_staging_d2fdb1622a1a3f396abdecf1eef2efad',
      {
        token: token,
        client_id: '0x0df29422e1d091da372a43ffeeb662102e5a8767ee907e26adb4f6ef79b4539f',
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.data.success) {
      res.status(200).json({ message: 'Verification success', data: response.data });
    } else {
      res.status(400).json({ error: response.data.error });
    }
  } catch (error) {
    console.error('Verification error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
