import {useState} from "react";
import SummaryInfo from "../components/firm/SummaryInfo";
import FirmService from "../API/FirmService";
import Loader from "../components/UI/loader/Loader";
import ContactList from "../components/firm/ContactList";
import Rank from "../components/firm/Rank";
import Activity from "../components/firm/Activity";
import DocumentList from "../components/firm/DocumentList";
import {Button, Form} from "react-bootstrap";

function FirmInfo() {

    const [firm, setFirm] = useState({});
    const [firmVisible, setFirmVisible] = useState(false);
    const [isFirmLoading, setIsFirmLoading] = useState(false);
    const [atiId, setAtiId] = useState(0);
    const [mode, setMode] = useState('');
    const [successSave, setSuccessSave] = useState(false);
    const [successFind, setSuccessFind] = useState(true);
    const [error, setError] = useState('');

    async function findFirm(e, atiId) {
        e.preventDefault()
        try {
            setIsFirmLoading(true)
            const firm = await FirmService.findByAtiId(atiId);
            if (typeof firm !== 'undefined') {
                setFirm(firm)
                setFirmVisible(true)
                setSuccessFind(true)
                setError('')
            }
            setIsFirmLoading(false)
        } catch (e) {
            setSuccessFind(false)
            setFirm({})
            setIsFirmLoading(false)
            setError("Фирма не найдена!")
            console.log(e.response.data.message);
        }
    }

    async function saveFirm() {
        if (firm !== null) {
            try {
                await FirmService.save(firm)
                setSuccessSave(true)
                window.location.reload();
            } catch (e) {
                console.log(e)
                setError("Не удалось сохранить фирму!")
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

    return (
        <div className="App">
            <div>
                <Form>
                    <Form.Control
                        style={{margin: "15px 0 10px"}}
                        onChange={event => setAtiId(event.target.value)}
                        type="number"
                        placeholder="Введите номер ATI..."/>
                    <div className="d-grid gap-2">
                        <Button variant={"outline-primary"} size={"lg"} onClick={(e) => {
                            findFirm(e, atiId)
                        }}>
                            Поиск
                        </Button>
                    </div>
                    {successFind && error === ''
                        ? <span></span>
                        : <span style={{color: "red"}}>{error}</span>
                    }
                </Form>

                <hr style={{margin: "10px 0 15px 0"}}/>

                <div className={"buttonBox"}>
                    <Button className={"buttonBox-item"} variant={"primary"} onClick={() => {
                        setMode("summary")
                    }}>Основная информация</Button>
                    <Button className={"buttonBox-item"} variant={"primary"} onClick={() => {
                        setMode("contacts")
                    }}>Контакты</Button>
                    <Button className={"buttonBox-item"} variant={"primary"} onClick={() => {
                        setMode("rank")
                    }}>Рейтинг</Button>
                    <Button className={"buttonBox-item"} variant={"primary"} onClick={() => {
                        setMode("activity")
                    }}>Активность</Button>
                    <Button className={"buttonBox-item"} variant={"primary"} onClick={() => {
                        setMode("documents")
                    }}>Документы фирмы</Button>
                </div>

                {isFirmLoading
                    ? <div style={{display: "flex", justifyContent: "center", marginTop: "50px"}}><Loader/></div>
                    : getComponent(mode)
                }

                <Button variant={"outline-success"}
                        style={{marginTop: "5px"}}
                        onClick={saveFirm}
                >Сохранить фирму</Button>
                {!successSave
                    ? <span></span>
                    : <span style={{color: "red"}}>{error}</span>
                }
            </div>
        </div>
    );
}

export default FirmInfo;
