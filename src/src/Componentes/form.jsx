import React, { useEffect, useState } from "react";
import './form.css'
import 'antd/dist/antd.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Select,Button } from 'antd';
import NuevoCompromiso from "./nuevo_compromiso.jsx";
import EditarCompromiso from "./editar_compromiso.jsx";
//import { Footer } from "antd/lib/layout/layout";
const { Option } = Select;
const invitados = [{nombre: 'Alex', id: 1},{nombre: 'Alex2', id: 2},{nombre: 'Alex3', id: 3}];
const asistentes = [{nombre: 'Juan', id: 4},{nombre: 'Juan2', id: 5},{nombre: 'Juan3', id: 6}];

const Formulario = () => {
   
    const [titulo, setTitulo] = useState("");
    const [equipos, setEquipos] = useState("");
    const [ubicacion, setUbicacion] = useState("");
    const [fecha, setFecha] = useState("");
    const [canal, setCanal] = useState("");
    const [asistente, setAsistente] = useState([]);
    const [responsables, setResponsables] = useState([])
    const [invitado, setInvitados] = useState([]);
    const [orden, setOrden] = useState("");
    const [notas, setNotas] = useState("");
    const [mostrar,setMostrar] = useState(false);
    const [datos, setDatos] = useState([]);

    
    //const esconderModal = () => setMostrar(false);
   // const ok = () => setMostrar(false);
   
    const mostrarModal = () => setMostrar(true);

    useEffect(() => {
      console.log(responsables)
    }, [responsables])
    
    

    return (      
        <center>
        <div className="index">
            <form>
                <div className="titulo"> 
                    <p><label className="titulo-label">Título de la reunión</label></p>
                    <p><input className="titulo-respuesta"
                        type="text"
                        maxlength="50"
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
                        value={asistente}
                        onChange={(values) =>{
                            setAsistente(values)
                           // console.log(asistentes)
                           // console.log(values)
                            const x  = asistentes.filter(a =>{
                                return values.includes("" + a.id)
                            })
                           // console.log(x)
                            setResponsables(x)
                        }}
                        
                    >
                    {asistentes.map((a) => {
                        return <Option key={a.id}>{a.nombre}</Option>
                    })}
                   
                    </Select>
                </>
                </div>

                <div className="invitados">
                    <p><label>Invitados</label></p>
                <React.Fragment>
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
                </React.Fragment>
                </div>
                <div className="orden">
                    <p><label className="titulo-label">Orden de la reunión</label></p>
                    <CKEditor
                        editor={ ClassicEditor }
                        value={orden}
                        onChange={ ( event, editor) => {
                            const data = editor.getData();
                            console.log( { event, editor, data } );
                            setOrden(data)
                        } }   
                    />
                </div>

                <div className="orden">
                    <p className="titulo-label"><label>Notas de la reunión</label></p>
                    <CKEditor
                        editor={ ClassicEditor }
                        value={notas}
                        onChange={ ( event, editor) => {
                            const data = editor.getData();
                            console.log( { event, editor, data } );
                            setNotas(data)
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
                            Confirmar
                    </Button>       

                    <NuevoCompromiso 
                        mostrar={mostrar}
                        setMostrar={setMostrar}
                        asist={asistentes}
                        respon={responsables}
                        submitValue={(v) => {
                            setDatos([...datos,v])
                          console.log(v)  
                        }}

                    />
                </div> 
                <div className="footer">
                    {datos.map((v) => {
                           return (
                               <div>
                               <ul>
                                    <li>Vencimiento: {v.fecha_nuevo.vencimiento}</li> 
                                    <li>Título: {v.titulo_nuevo.titulo2}</li>
                                    <li>Descripción: {v.descripcion_nuevo.descripcion}</li>
                                </ul>  
                                
                                    <button onClick={mostrarModal}>Editar Compormiso

                                     <EditarCompromiso
                                        setVencimiento={v.fecha_nuevo.vencimiento}
                                        setTitulo2={v.titulo_nuevo.titulo2}
                                        setDescripcion={v.descripcion_nuevo.descripcion}
                                    /> 
                                    </button>
                                </div>
                            )
                    })}
                </div>         
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