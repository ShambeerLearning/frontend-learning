import {QRCodeSVG} from "qrcode.react";
import {useState} from "react";
import "./QrCode.scss"

function QrCode(){
    const [link, setLink] = useState("");
    const [current, setCurrent] = useState("");

    function click() {
        setCurrent(link);
        setLink("");
    }

    return(
        <>
            <div className="daun">
                <input type="text" value={link} onChange={(event) => setLink(event.target.value)}/>
                <input type="submit" onClick={click}/>
                <QRCodeSVG value={current} height={500} width={500}/>
            </div>

        </>
    )
}

export default QrCode