import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'; // Import cors
import dotenv from 'dotenv';
dotenv.config();
import { verifyCloudProof } from '@worldcoin/idkit';// Adjust this import if necessary

const app = express();
const PORT = process.env.PORT || 3001; // Use a different port if needed

// Middleware to parse JSON bodies
app.use(cors({
    origin: 'http://localhost:3000', // Allow only your frontend
    methods: ['GET', 'POST', 'OPTIONS'], // Allow the methods your frontend needs
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow the headers your frontend sends
    credentials: true // If you're using cookies or credentials
}));

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Worldcoin API'); // A simple message for the root route
});

// Define the /api/verify endpoint
app.post(`/api/verify`, async (req, res) => {
    console.log("Incoming request method:", req.method);
    console.log("APP_ID:", process.env.APP_ID);
    console.log("ACTION_ID:", process.env.ACTION_ID);
    // res.send('Welcome to the Worldcoin API verify!');
    const proof = req.body;
    const app_id = process.env.APP_ID; // Ensure these are set in your .env
    const action = process.env.ACTION_ID;
    res.send
    try {
        const verifyRes = await verifyCloudProof(proof, app_id, action);

        if (verifyRes.success) {
            // Perform any actions if the verification succeeds
            res.status(200).json(verifyRes);
        } else {
            res.status(400).json(verifyRes); // Handle verification errors
        }
    } catch (error) {
        console.error("Verification error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
