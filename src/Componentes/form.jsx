import React, {useState} from "react";
import './form.css'
import 'antd/dist/antd.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Select } from 'antd';
const { Option } = Select;
const asistentes = [];
const children = [];

//for (let i = 10; i < 36; i++) {
//  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
//}

asistentes.push(<Option key={1}>juan</Option>);
asistentes.push(<Option key={2}>juanito</Option>);
asistentes.push(<Option key={3}>juancho</Option>);
asistentes.push(<Option key={4}>juanchi</Option>);

const handleChange = (value) => {
  console.log(`selected ${value}`);
};


const Formulario = () => {
   
    const [titulo, setTitulo] = useState("");
    const [equipos, setEquipos] = useState("");
    const [ubicacion, setUbicacion] = useState("");
    const [fecha, setFecha] = useState("");
    

//useEffect(() => {
//  console.log(equipos);
//}, [equipos])

    return (      
        <center>
        <div className="index">
            <form>
                <div className="titulo"> 
                    <p><label className="titulo-label">Título de la reunión</label></p>
                    <p><input className="titulo-respuesta" type="text"  value={titulo}
                        onChange={(e) => setTitulo(e.target.value)} placeholder="Inserte el título de acta de la reunión"/></p>
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
                    >
                        <option value="it">General</option>
                        <option value="teams">Teams</option>
                    </select>
                </div>
                <div className="fecha">
                    <p><label>Fecha del acta</label></p>
                    <p><input className="fecha-respuesta"  value={fecha}
                        onChange={(e) => setFecha(e.target.value)}type="date"/></p>
                </div>
                <div className="ubicacion">
                    <p><label>Ubicación</label></p>
                    <p><input className="ubicacion-respuesta" value={ubicacion} 
                        onChange={(e) => setUbicacion(e.target.value)} type="text"/></p>
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
                    onChange={handleChange}
                    >
                    {asistentes}
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
                    onChange={handleChange}
                    >
                    {children}
                    </Select>
                </>
                </div>
                <div className="orden">
                    <p className="titulo-label"><label>Orden de la reunión</label></p>
                    <CKEditor
                        editor={ ClassicEditor }
                        onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }   
                    />
                </div>

                <div className="orden">
                    <p className="titulo-label"><label>Notas de la reunión</label></p>
                    <CKEditor
                        editor={ ClassicEditor }
                        onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    />
                </div> 
                </form>
         
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