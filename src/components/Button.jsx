import React, { useState } from 'react'
import Web3 from "web3"
const Button = ({ title }) => {
    const [web3, setWeb3] = useState(null);
    const [accounts, setAccounts] = useState([]);

    const connectMetamask = async () => {
        try {
            if (window.ethereum) {
                const web3Instance = new Web3(window.ethereum);
                setWeb3(web3Instance);
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                setAccounts(accounts);
            } else {
                console.error('Metamask not detected. Please install it.');
            }
        } catch (error) {
            console.error('Error connecting Metamask:', error);
        }
    };
    return (
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={connectMetamask}
        >
            {title}
        </button>
    )
}

export default Button;