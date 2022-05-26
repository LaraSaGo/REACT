import React, {useState} from "react";
import './form.css'
import 'antd/dist/antd.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Select,Button, Modal } from 'antd';
const { Option } = Select;
const invitados = [{nombre: 'Alex', id: 1},{nombre: 'Alex2', id: 2},{nombre: 'Alex3', id: 3}];
const asistentes = [{nombre: 'Juan', id: 1},{nombre: 'Juan2', id: 2},{nombre: 'Juan3', id: 3}]

const Formulario = () => {
   
    const [titulo, setTitulo] = useState("");
    const [equipos, setEquipos] = useState("");
    const [ubicacion, setUbicacion] = useState("");
    const [fecha, setFecha] = useState("");
    const [canal, setCanal] = useState("");
    const [asistente, setAsistentes] = useState("");
    const [invitado, setInvitados] = useState("");
    const [orden, setOrden] = useState("");
    const [notas, setNotas] = useState("");
    const [mostrar,setMostrar] = useState(false);
    const esconderModal = () => setMostrar(false);
    const ok = () => setMostrar(false);
    const mostrarModal = () => setMostrar(true);

    

//useEffect(() => {
//  console.log(equipos);
//}, [equipos])

    return (      
        <center>
        <div className="index">
            <form>
                <div className="titulo"> 
                    <p><label className="titulo-label">Título de la reunión</label></p>
                    <p><input className="titulo-respuesta"
                        type="text"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        placeholder="Inserte el título de acta de la reunión"
                        />
                    </p>
                </div>
                <div className="equipos">
                    <p><label for="equipos">Elige el equipo</label></p>
                    <select id="equipos" 
                        className="equipos-menu" 
                        value={equipos}
                        onChange={(e) => setEquipos(e.target.value)}
                    >
                        <option value="it">Equipo Técnico</option>
                        <option value="rrss">Relacciones laborales</option>
                        <option value="seguridad">Seguridad</option>
                        <option value="desarrollo">Desarrollo Proyectos</option>
                    </select>
                </div>
                <div className="canal">
                    <p><label for="canal">Elige canal</label></p>
                    <select name="canal" 
                        id="canal" 
                        className="canal-menu"
                        value={canal}
                        onChange={(e) => setCanal(e.target.value)}
                    >
                        <option value="it">General</option>
                        <option value="teams">Teams</option>
                    </select>
                </div>
                <div className="fecha">
                    <p><label>Fecha del acta</label></p>
                    <p><input className="fecha-respuesta"
                        type="date"  
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}/></p>
                </div>
                <div className="ubicacion">
                    <p><label>Ubicación</label></p>
                    <p><input className="ubicacion-respuesta" 
                        type="text"
                        value={ubicacion} 
                        onChange={(e) => setUbicacion(e.target.value)}/></p>
                </div>
                <div className="asistentes">
                    <p><label>Asistentes</label></p>
                <>
                    <Select
                    mode="multiple"
                    allowClear
                    style={{
                        width: '100%',
                    }}
                    placeholder="Seleccione asistentes"
                    >
                    {asistentes.map((a) => {
                        return <Option key={a.id}>{a.nombre}</Option>
                    })}
                    value={asistente}
                    onChange={(e) => setAsistentes(e.target.value)}
                    </Select>
                </>
                </div>

                <div className="invitados">
                    <p><label>Invitados</label></p>
                <>
                    <Select
                    mode="multiple"
                    allowClear
                    style={{
                        width: '100%',
                      }}
                    placeholder="Seleccione invitados"
                    >
                    {invitados.map((a) => {
                        return <Option key={a.id}>{a.nombre}</Option>
                    })}
                    value={invitado}
                    onChange={(e) => setInvitados(e.target.value)}
                    </Select>
                </>
                </div>
                <div className="orden">
                    <p><label className="titulo-label">Orden de la reunión</label></p>
                    <CKEditor
                        editor={ ClassicEditor }
                        value={orden}
                        onChange={ ( event, editor,e) => {
                            const data = editor.getData();
                            console.log( { event, editor, data } );
                            setOrden(event.target.value)
                        } }   
                    />
                </div>

                <div className="orden">
                    <p className="titulo-label"><label>Notas de la reunión</label></p>
                    <CKEditor
                        editor={ ClassicEditor }
                        value = {notas}
                        onChange={ ( event, editor) => {
                            const data = editor.getData();
                            console.log( { event, editor, data } );
                            setNotas(event.target.value)
                    } }
                    />
                </div> 
            </form>
                <div>
                    <Button className="boton" 
                            type="primary"
                            htmlType="submit"
                            onClick={mostrarModal}
                    >       
                            Guardar
                    </Button>
                </div>
            
                    <Modal title="Nuevo compromiso" visible={mostrar} onOk={ok} onCancel={esconderModal}>
                        <p>Vencimiento {fecha} </p>
                        <p></p>
                        <p>Some contents...</p>
                    </Modal>
        
                
           
        </div>
        </center> 
    )
}

export default Formulario;   
// <CKEditor
//editor={ ClassicEditor }
//onReady={ editor => {
//console.log( 'Editor is ready to use!', editor );
// } }
// onChange={ ( event, editor ) => {
// const data = editor.getData();
// console.log( { event, editor, data } );
// } }
// onBlur={ ( event, editor ) => {
// console.log( 'Blur.', editor );
// } }
// onFocus={ ( event, editor ) => {
// console.log( 'Focus.', editor );
// } }