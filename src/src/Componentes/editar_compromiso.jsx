import React, {useState} from "react";
import './nuevo_compromiso.css';
import 'antd/dist/antd.css';
import {Modal, Button} from 'antd';


const EditarCompromiso = ({mostrar}) => {

    const [vencimiento, setVencimiento] = useState("");
    const [titulo2, setTitulo2] = useState("");
    const [descripcion, setDescripcion] = useState("");

    return (
        <Modal title="Editar compromiso"
            className="modal__nuevo"
            visible={mostrar}
            onOk= {mostrar}
        >
        
            <div className="modal1">
                <p><label className="modal1__lb">Vencimiento</label></p>
                <p><input className="modal1__in"
                    type="date"
                    value={vencimiento}
                    onChange={(e) => setVencimiento(e.target.value)}
                >
                </input></p>
            </div>
            <div className="modal2">
                <p><label className="modal2__lb">Título</label></p>
                <p><textarea className="modal2__in"
                    type="text"
                    value={titulo2}
                    onChange={(e) => setTitulo2(e.target.value)}
                >
                </textarea></p>
            </div>
            <div className="modal3">
                <p><label className="modal3__lb">Descripción</label></p>
                <p>
                    <textarea className="modal3__in"
                    type="text"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                >
                    </textarea>
                </p>  
            </div>
        </Modal>
    );
};
export default EditarCompromiso;
