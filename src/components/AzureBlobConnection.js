// src/components/AzureBlobConnection.js
import React, { useState, useEffect } from 'react';
import { BlobServiceClient } from '@azure/storage-blob';
const AzureBlobConnection = ({ sasUrl }) => {
    const [connectionStatus, setConnectionStatus] = useState('Connecting...');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const connectToAzureBlob = async () => {
            try {
                const blobServiceClient = new BlobServiceClient(sasUrl);
                await blobServiceClient.getAccountInfo();
                setConnectionStatus('Connection success');
            } catch (error) {
                setConnectionStatus('Connection failed');
                setErrorMessage(error.message);
            }
        };

        connectToAzureBlob();
    }, [sasUrl]);

    return (
        <div>
            {connectionStatus}
            {errorMessage && <p>Error details: {errorMessage}</p>}
        </div>
    );
};
export default AzureBlobConnection;