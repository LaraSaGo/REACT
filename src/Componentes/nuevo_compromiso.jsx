import React, {useState} from "react";
import './nuevo_compromiso.css';
import 'antd/dist/antd.css';
import {  Modal, Button } from 'antd';


const NuevoCompromiso = ({mostrar,setMostrar}) => {
    const [vencimiento, setVencimiento] = useState("");
    const [titulo2, setTitulo2] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const esconderModal = () => setMostrar(false);
    const ok = () => setMostrar(false);
   // const mostrarModal = () => setMostrar(true);

    return (
        <Modal title="Nuevo compromiso"
            visible={mostrar}
            onOk={ok}
            onCancel={esconderModal}
        >
            <dir className="modal1">
                <p><label className="modal1__lb">Vencimiento</label></p>
                <p><input className="modal1__in"
                    type="date"
                    value={vencimiento}
                    onChange={(e) => setVencimiento(e.target.value)}
                >
                </input></p>
            </dir>
            <dir className="modal2">
                <p><label className="modal2__lb">Título</label></p>
                <p><textarea className="modal2__in"
                    type="text"
                    value={titulo2}
                    onChange={(e) => setTitulo2(e.target.value)}
                >
                </textarea></p>
            </dir>
            <dir className="modal3">
                <p><label className="modal3__lb">Descripción</label></p>
                <p><textarea className="modal3__in"
                    type="text"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                >
                </textarea></p>                
            </dir>
            <dir className="modal4">
            <Button className="modal4__bt1" block>Asignados</Button>
            
            </dir>
            <dir className="modal5">
            <Button className="modal5__bt1" block>Sin asignar</Button>
            </dir>
        </Modal>
    )
}
export default NuevoCompromiso;
