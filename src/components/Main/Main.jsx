import { useState, useEffect } from "react";
import axios from "axios";

import Card from "../Card/Card";
import "./Main.css"

const Main = () => {
    const [cardanoStakeValue, setCardanoStakeValue] = useState(0);
    const [cardanoStakeRate, setCardanoStakeRate] = useState(0);
    const [polkadotStakeValue, setPolkadotStakeValue] = useState(0);
    const [kusamaStakeValue, setKusamaStakeValue] = useState(0);
    const [polkadotStakeRate, setPolkadotStakeRate] = useState(0);
    const [kusamaStakeRate, setKusamaStakeRate] = useState(0);
    useEffect(() => {
        axios({
            method: "get",
            url: "https://api-beta.stakingrewards.com/v1/assets/overview/polkadot",
            headers: {
                Authorization:
                    process.env.REACT_APP_API_key
            },
        })
            .then(function (response) {
                console.log(response.data.stakedValue);
                const roundedStakeRate = response.data.totalStaked.toFixed(2);
                const roundedStakeValue = response.data.stakedValue.toFixed(2);
                setPolkadotStakeValue(roundedStakeValue);
                setPolkadotStakeRate(roundedStakeRate);
                console.log(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
        axios({
            method: "get",
            url: "https://api-beta.stakingrewards.com/v1/assets/overview/kusama",
            headers: {
                Authorization:
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJuQ2xqdnZaTE5BUWtsVnlZdWNXNWdXdWZuY0kzIiwiaWF0IjoxNjkwOTU0MzUxLCJpc3MiOiJTdGFraW5ncmV3YXJkcyBQdWJsaWMgQVBJIn0.T_cPAE9MlVF7IJ9YD3NJS7YR0PlAl1hWTC0mk1_Vm-8",
            },
        })
            .then(function (response) {
                console.log(response.data.stakedValue);
                const roundedStakeRate = response.data.totalStaked.toFixed(2);
                const roundedStakeValue = response.data.stakedValue.toFixed(2);
                setKusamaStakeValue(roundedStakeValue);
                setKusamaStakeRate(roundedStakeRate);
                console.log(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
        axios({
            method: "get",
            url: "https://api-beta.stakingrewards.com/v1/assets/overview/cardano",
            headers: {
                Authorization:
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJuQ2xqdnZaTE5BUWtsVnlZdWNXNWdXdWZuY0kzIiwiaWF0IjoxNjkwOTU0MzUxLCJpc3MiOiJTdGFraW5ncmV3YXJkcyBQdWJsaWMgQVBJIn0.T_cPAE9MlVF7IJ9YD3NJS7YR0PlAl1hWTC0mk1_Vm-8",
            },
        })
            .then(function (response) {
                console.log(response.data.stakedValue);
                const roundedStakeRate = response.data.totalStaked.toFixed(2);
                const roundedStakeValue = response.data.stakedValue.toFixed(2);
                setCardanoStakeValue(roundedStakeValue);
                setCardanoStakeRate(roundedStakeRate);
                console.log(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, []);
    return (
        <div className="main">
            <div>
                <Card
                    Name="Polakadot"
                    supply={polkadotStakeRate}
                    stake={polkadotStakeValue}
                    validator="Luganode"
                    image="https://public.bnbstatic.com/static/academy/uploads-original/ee705c26cee74f3b962238e36ef563be.png"
                />
            </div>
            <div>
                <Card
                    Name="Cardaono"
                    supply={cardanoStakeRate}
                    stake={cardanoStakeValue}
                    validator="Luganode"
                    image="https://blockchainstock.blob.core.windows.net/article/E2D0F576946C39229347F83C8328640A1FFAA0550F3247FDB1335236F2D2B8C8.jpg"
                />
            </div>
            <div>
                <Card
                    Name="Kusama"
                    supply={kusamaStakeRate}
                    stake={kusamaStakeValue}
                    validator="Luganode"
                    image="https://img.freepik.com/premium-photo/kusama-cryptocurrency-coin-gold-3d-rendered-coin-with-kusama-symbol-isolated-white-background_154981-350.jpg?w=2000"
                />
            </div>
        </div>
    )
}

export default Main;