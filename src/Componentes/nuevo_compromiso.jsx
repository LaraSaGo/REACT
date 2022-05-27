import React, {useState} from "react";
import './nuevo_compromiso.css';
import 'antd/dist/antd.css';
import {  Modal } from 'antd';
const NuevoCompromiso = () => {
    
    const [mostrar,setMostrar] = useState(false);
    const esconderModal = () => setMostrar(false);
    const ok = () => setMostrar(false);
   // const mostrarModal = () => setMostrar(true);

    return (
        <Modal title="Nuevo compromiso"
        visible={mostrar}
        onOk={ok}
        onCancel={esconderModal}>
        <dir className="modal1">
        <p><label className="modal1__lb">Vencimiento</label></p>
        <p><input className="modal1__in" type="date"></input></p>
        </dir>
        <dir className="modal2">
        <p><label className="modal2__lb">Título</label></p>
        <p><textarea className="modal2__in"
        type="text"
        maxLength="50">
        </textarea></p>
        </dir>
        <dir className="modal3">
        <p><label className="modal3__lb">Descripción</label></p>
        <p><textarea className="modal3__in"
        type="text"
        maxLength="200">
        </textarea></p>                
        </dir>
        <dir className="modal4">
        </dir>
        <dir className="modal5">
        </dir>
        </Modal>
    )
}

export default NuevoCompromiso;
