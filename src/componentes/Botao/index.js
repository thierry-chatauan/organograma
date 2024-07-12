import "./Botao.css"

const Botao = (props) => {
    return (
       
         <button className="botao">
            {/* {props.texto} */}
            {props.children}
         </button>
        
    )
}

export default Botao