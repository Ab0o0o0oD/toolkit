import './App.css'
import {JWTDecoder} from "./pages/JWTDecoder.tsx";
import {TradingViewWidget} from "./pages/TradingViewWidget.tsx";

function App() {

    return (
        <div className={"App"}>
            <JWTDecoder/>
            <div style={{height: '800px'}}>
                <h2>Gold price live chart</h2>
                <TradingViewWidget/>
            </div>
        </div>
    )
}

export default App
