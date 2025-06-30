import './App.css'
import {JWTDecoder} from "./pages/JWTDecoder.tsx";
import {TradingViewWidget} from "./pages/TradingViewWidget.tsx";
import {USDNOKWidget} from "./pages/USDNOKWidget.tsx";
import {Modal} from "./component/ui/Modal.tsx";
import {useState} from "react";

function App() {
    const [openModal, setOpenModal] = useState(false)
    return (
        <div className={"App"}>
            <Modal title={"USD / NOK chart"} isOpen={openModal} setOpenModal={setOpenModal} >
                <USDNOKWidget/>
            </Modal>
            <button className="flex border-2 justify-center" onClick={() => setOpenModal(true)}>USD / NOK chart</button>
            <JWTDecoder/>
            <div style={{height: '800px'}}>
                <h2>Gold price live chart</h2>
                <TradingViewWidget/>
            </div>
        </div>
    )
}

export default App
