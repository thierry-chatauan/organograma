
import "./CampoTexto.css"

const CampoTexto = (props) => {
    const placeholderAlterada = `${props.placeholder} ,use assim para concatenar...`

    const aoDigitado = (evento) => {
       props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} 
              onChange={aoDigitado} 
              required={props.obrigatorio} 
              placeholder={placeholderAlterada}
            />
        </div>
    )
    }

export default CampoTexto