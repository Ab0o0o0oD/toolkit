import {TradingViewWidget} from "../component/widgets/TradingViewWidget.tsx";
import {Modal} from "../component/ui/Modal.tsx";
import {USDNOKWidget} from "../component/widgets/USDNOKWidget.tsx";
import {useState} from "react";
import {ButtonOutline} from "../component/ui/buttons/ButtonOutline.tsx";

export const InvestorPage = () => {
    const [isOpenGoldModal, setIsOpenGoldModal] = useState(false)
    const [isOpenUsDNokModal, setIsOpenUsDNokModal] = useState(false)

    return (<>
            <Modal title={"USD / NOK chart"} isOpen={isOpenUsDNokModal} setOpenModal={setIsOpenUsDNokModal}>
                <USDNOKWidget/>
            </Modal>
            <Modal title={'Gold price live chart'} isOpen={isOpenGoldModal} setOpenModal={setIsOpenGoldModal}>
                <TradingViewWidget/>
            </Modal>
            <div className="flex items-start justify-start flex-col gap-4">
            <h1 className="text-2xl font-bold">Investor Page</h1>
            <ButtonOutline text={'USD/NOK chart'} onClick={() => setIsOpenUsDNokModal(true)}/>
            <ButtonOutline text={'Gold price chart'} onClick={() => setIsOpenGoldModal(true)}/>
            </div>
        </>
    )

}