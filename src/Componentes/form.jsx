import { Dropdown } from "bootstrap";
import React from "react";
import './form.css'

//import { CKEditor } from '@ckeditor/ckeditor5-react';
//import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Formulario = () => {
    //const [equipos,setequipo]=useState(false);
    //const abircerrarDrop = () => {
    //    setequipo(!equipos);
    //}
//isOpen={equipos} toggle={abircerrarDrop}
    return (       
        <div className="index">
            <form>
                <div> 
                    <p><label className="titulo">Título de la reunión</label></p>
                    <input className="respuesta" type="text" name="titulo-reunion"/>
                </div>
                <div> 
                    <p><label>Ubicación</label></p>
                    <input type="text" name="ubicacion-reunion"/>
                </div>  
            </form>
            <Dropdown>
                    <Dropdown.Toggle variant="success" >Equipos</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="1">IT</Dropdown.Item>
                        <Dropdown.Item href="2">Personas</Dropdown.Item>
                        <Dropdown.Item href="3">Recursos humanos</Dropdown.Item>
                    </Dropdown.Menu>
            </Dropdown>
            <button type="button" >Enviar</button>
        </div>
    )
}

export default Formulario;   
//<CKEditor
//editor={ ClassicEditor }
//data="<p></p>"
//onReady={ editor => {
//console.log( 'Editor is ready to use!', editor );
//} }
//onChange={ ( event, editor ) => {
//const data = editor.getData();
//console.log( { event, editor, data } );
//} }
//onBlur={ ( event, editor ) => {
//console.log( 'Blur.', editor );
//} }
//onFocus={ ( event, editor ) => {
//console.log( 'Focus.', editor );
//} }
///>
   