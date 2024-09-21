'use client'; // For Next.js app router
import { IDKitWidget, VerificationLevel } from '@worldcoin/idkit';
import React from 'react';

const serverPort = 3001;
const WorldcoinVerification = ({ onVerifySuccess }) => {
    const onSuccess = async (responseData) => {
        // Handle the success data from the backend if needed
        console.log("Verification Successful:", responseData);
        // window.location.href = "/success"; // Redirect to a success page
        onVerifySuccess(true);
    };

    const handleVerify = async (proof) => {
        console.log(proof);
        const res = await fetch(`http://localhost:${serverPort}/api/verify`, { // Route to your backend
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(proof),
        });

        if (!res.ok) {
            throw new Error("Verification failed."); // IDKit will handle this error
        }
    };

    return (
        <IDKitWidget
            app_id="app_staging_d2fdb1622a1a3f396abdecf1eef2efad" // obtained from Developer Portal
            action="vote-for-moolah" // obtained from Developer Portal
            onSuccess={onSuccess}
            handleVerify={handleVerify}
            verification_level={VerificationLevel.Device}
        >
            {({ open }) => 
                <button onClick={open}>Verify with World ID</button>
            }
        </IDKitWidget>
    );
};

export default WorldcoinVerification;
