import './App.css'
import {JWTDecoder} from "./pages/JWTDecoder.tsx";
import {QRGenerator} from "./pages/QrCodeGenerator.tsx";
import {InvestorPage} from "./pages/InvestorPage.tsx";
import {Buttons} from "./component/ui/Buttons.tsx";
import {WhatsAppDashboard} from "./pages/chat/WhatsAppDashboard.tsx";

function App() {
    return (
        <div className={"App"}>
            <JWTDecoder/>
            <div className="flex justify-start">
            <QRGenerator/>
            </div>
            <InvestorPage/>
            <div>
            <Buttons/>
            </div>
            <div className="max-h-1">
                <WhatsAppDashboard/>
            </div>
        </div>
    )
}

export default App
