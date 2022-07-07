import {useState} from "react";
import SummaryInfo from "../components/firm/SummaryInfo";
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import FirmService from "../API/FirmService";
import Loader from "../components/UI/loader/Loader";
import ContactList from "../components/firm/ContactList";
import Rank from "../components/firm/Rank";
import Activity from "../components/firm/Activity";
import DocumentList from "../components/firm/DocumentList";

function FirmInfo() {

    const [firm, setFirm] = useState({});
    const [firmVisible, setFirmVisible] = useState(false);
    const [isFirmLoading, setIsFirmLoading] = useState(false);
    const [atiId, setAtiId] = useState(0);
    const [mode, setMode] = useState('');
    const [successSave, setSuccessSave] = useState(false);
    const [successFind, setSuccessFind] = useState(true);

    async function getFirm(e, atiId) {
        e.preventDefault()
        try {
            setIsFirmLoading(true)
            const firm = await FirmService.getByAtiId(atiId);
            if (firm !== null) {
                setFirm(firm)
                setFirmVisible(true)
                setSuccessFind(true)
            }
            setIsFirmLoading(false)
        } catch (e) {
            setSuccessFind(false)
            setFirm({})
            console.log(e.message);
        }
    }

    async function saveFirm() {
        if (firm !== null) {
            try {
                await FirmService.save(firm)
                setSuccessSave(true)
            } catch (e) {
                console.log(e.message)
                setSuccessSave(false)
            }
        }
    }

    function getComponent(view) {
        switch (view) {
            case 'contacts':
                return <ContactList contacts={firm.contacts} visible={firmVisible}/>
            case 'rank':
                return <Rank firm={firm} visible={firmVisible}/>
            case 'activity':
                return <Activity firm={firm} visible={firmVisible}/>
            case 'documents':
                return <DocumentList documents={firm.firm_documents} visible={firmVisible}/>
            default:
                return <SummaryInfo firm={firm} visible={firmVisible}/>
        }
    }

    //todo исправить
    function viewSummary() {
        setMode("summary")
    }

    function viewContacts() {
        setMode("contacts")
    }

    function viewRank() {
        setMode("rank")
    }

    function viewDocuments() {
        setMode("documents")
    }

    function viewActivity() {
        setMode("activity")
    }

    return (
        <div className="App">
            <div>
                <form>
                    <MyInput
                        onChange={event => setAtiId(event.target.value)}
                        type="number"
                        placeholder="Введите номер ATI..."/>
                    <MyButton onClick={(e) => {
                        getFirm(e, atiId)
                    }} style={{marginLeft: 0}}>Поиск</MyButton>
                    {successFind
                        ? <span></span>
                        : <span style={{color: "red"}}> Фирма не найдена!</span>
                    }
                </form>

                <MyButton
                    style={{margin: "5px 0 0", border: "2px solid blue", color: "blue"}}
                    onClick={saveFirm}
                >Сохранить фирму</MyButton>
                {successSave
                    ? <span style={{color: "blue"}}> Фирма сохранена!</span>
                    : <span></span>
                }

                <hr style={{margin: "10px 0 15px 0"}}/>

                <MyButton onClick={viewSummary}>Основная информация</MyButton>
                <MyButton onClick={viewContacts}>Контакты</MyButton>
                <MyButton onClick={viewRank}>Рейтинг</MyButton>
                <MyButton onClick={viewActivity}>Активность</MyButton>
                <MyButton onClick={viewDocuments}>Документы фирмы</MyButton>

                {isFirmLoading
                    ? <div style={{display: "flex", justifyContent: "center", marginTop: "50px"}}><Loader/></div>
                    : getComponent(mode)
                }
            </div>
        </div>
    );
}

export default FirmInfo;
