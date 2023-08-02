import Card from "../Card/Card";
import "./Main.css"

const Main = () => {
    return (
        <div className="main">
            <div>
                <Card
                    Name="Polakadot"
                    supply="12345"
                    stake="2erty5"
                    validator="Luganode"
                    image="https://public.bnbstatic.com/static/academy/uploads-original/ee705c26cee74f3b962238e36ef563be.png"
                />
            </div>
            <div>
                <Card
                    Name="Cardaono"
                    supply="12345"
                    stake="2erty5"
                    validator="Luganode"
                    image="https://blockchainstock.blob.core.windows.net/article/E2D0F576946C39229347F83C8328640A1FFAA0550F3247FDB1335236F2D2B8C8.jpg"
                />
            </div>
            <div>
                <Card
                    Name="Kusama"
                    supply="12345"
                    stake="2erty5"
                    validator="Luganode"
                    image="https://img.freepik.com/premium-photo/kusama-cryptocurrency-coin-gold-3d-rendered-coin-with-kusama-symbol-isolated-white-background_154981-350.jpg?w=2000"
                />
            </div>
        </div>
    )
}

export default Main;