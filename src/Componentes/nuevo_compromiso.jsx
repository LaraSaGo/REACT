import React, {useState} from "react";
import './nuevo_compromiso.css';
import 'antd/dist/antd.css';
import {  Modal, Button } from 'antd';


const NuevoCompromiso = ({mostrar,setMostrar,asist}) => {

    const [vencimiento, setVencimiento] = useState("");
    const [titulo2, setTitulo2] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const esconderModal = () => setMostrar(false);
    const ok = () => setMostrar(false);

    const [asignados,setAsignados] = useState(false);
    const mostrarAsignados = () => setAsignados(true);
    const esconderModal2 = () => setAsignados(false);
    const ok2 = () => setAsignados(false);


    return (
        <Modal title="Nuevo compromiso"
            className="modal__nuevo"
            visible={mostrar}
            onOk={ok}
            onCancel={esconderModal}
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
                <p><textarea className="modal3__in"
                    type="text"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                >
                </textarea></p>                
            </div>
            <div className="modal4">
                <Button className="modal4__bt1" 
                type="block"
                onClick={mostrarAsignados}
                >
                    Asignados
                </Button>               
            </div>

            <Modal title="Asignar"
                visible={asignados}
                onOk={ok2}
                onCancel={esconderModal2}
            >
                <p>Asignados</p>
                 
                <p>Sin Asignar</p>  
            </Modal>
                
            <div className="modal5">
                <Button className="modal5__bt1" block>Sin asignar</Button>
            </div>
        </Modal>
    );
};
export default NuevoCompromiso;
