import React, {useState} from "react";
import './nuevo_compromiso.css';
import 'antd/dist/antd.css';
import {  Select,Modal, Button } from 'antd';
const { Option } = Select;


const NuevoCompromiso = ({mostrar,setMostrar,respon, submitValue}) => {

    const [vencimiento, setVencimiento] = useState("");
    const [titulo2, setTitulo2] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const esconderModal = () => setMostrar(false);
    

    const [asignados,setAsignados] = useState(false);
    const mostrarAsignados = () => setAsignados(true);
    const esconderModal2 = () => setAsignados(false);
    const ok2 = () => setAsignados(false);

    return (
        <Modal title="Nuevo compromiso"
            className="modal__nuevo"
            visible={mostrar}
            onOk= {() => {
                submitValue({
                    fecha_nuevo:{vencimiento},
                    titulo_nuevo:{titulo2},
                    descripcion_nuevo:{descripcion}
                
                })
                setMostrar(false)
            }}
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
                <>
                    <Select
                    mode="multiple"
                    allowClear
                    style={{
                        width: '100%',
                    }}
                    placeholder="Asistentes añadidos"
                    >
                        {respon.map((a) => {
                        return <Option key={a.id}>{a.nombre}</Option>
                        })}
                        
                    </Select>
                </>  
            </Modal>  
        </Modal>

    );
};

export default NuevoCompromiso;
