import React,{useEffect, useState} from 'react'

const Formulario = () => {
    const [numManillas, setNumManillas] = useState(1);
    const [material, setMaterial] = useState('');
    const [dije, setDije] = useState('');
    const [tipo, setTipo] = useState('');
    const [divisa, setDivisa] = useState('')
    let precio = 0
    let total = 0
    
    const calcularValorUnitario = () =>{
        if (material === "cuero") {
            if (dije === "martillo" && tipo === "oro") {
              precio = 100;
            } else if (dije === "martillo" && tipo === "plata") {
              precio = 80;
            } else if (dije === "martillo" && tipo === "niquel") {
              precio = 70;
            } else if (dije === "ancla" && tipo === "oro") {
              precio = 120;
            } else if (dije === "ancla" && tipo === "plata") {
              precio = 100;
            } else if (dije === "ancla" && tipo === "niquel") {
              precio = 90;
            }
          } else if (material === "cuerda") {
            if (dije === "martillo" && tipo === "oro") {
              precio = 90;
            } else if (dije === "martillo" && tipo === "plata") {
              precio = 70;
            } else if (dije === "martillo" && tipo === "niquel") {
              precio = 50;
            } else if (dije === "ancla" && tipo === "oro") {
              precio = 110;
            } else if (dije === "ancla" && tipo === "plata") {
              precio = 90;
            } else if (dije === "ancla" && tipo === "niquel") {
              precio = 80;
            }
          }
    }
    calcularValorUnitario()
    const calcularTotal = () =>{
        if(divisa === 'COP'){
            total = precio * numManillas * 5000
        }else{
            total = precio * numManillas
        }
    }

    calcularTotal()
    return (
        <div>
            <div className="container col-4 mt-3">
                <h1>Compra de Manillas</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="material" className="form-label">Material</label>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="material" id="cuero" value="cuero" required checked={material === 'cuero'} onChange={(e) => setMaterial(e.target.value)} />
                            <label className="form-check-label" htmlFor="cuero">Cuero</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="material" id="cuerda" value="cuerda" checked={material === 'cuerda'} onChange={(e) => setMaterial(e.target.value)} />
                            <label className="form-check-label" htmlFor="cuerda">Cuerda</label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dije" className="form-label">Dije</label>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="dije" id="martillo" value="martillo" required checked={dije === 'martillo'} onChange={(e) => setDije(e.target.value)} />
                            <label className="form-check-label" htmlFor="martillo">Martillo</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="dije" id="ancla" value="ancla" checked={dije === 'ancla'} onChange={(e) => setDije(e.target.value)} />
                            <label className="form-check-label" htmlFor="ancla">Ancla</label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tipo" className="form-label">Tipo de Dije</label>
                        <select className="form-select" id="tipo" name="tipo" required value={tipo} onChange={(e) => setTipo(e.target.value)}>
                            <option value="" disabled>Seleccione una opción</option>
                            <option value="oro">Oro</option>
                            <option value="oro">Oro Rosado</option>
                            <option value="plata">Plata</option>
                            <option value="niquel">Níquel</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="numManillas" className="form-label">Valor unirario</label>
                        <input type="number" className="form-control" id="numManillas" name="numManillas" required value={precio}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="numManillas" className="form-label">Número de Manillas a Comprar</label>
                        <input type="number" className="form-control" id="numManillas" name="numManillas" required value={numManillas} onChange={(e) => setNumManillas(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="numManillas" className="form-label">Total</label>
                        <input type="number" className="form-control" id="numManillas" name="numManillas" required value={total}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="divisa" className="form-label">Divisa</label>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="divisa" id="cop" value="COP" required checked={divisa === 'COP'} onChange={(e) => setDivisa(e.target.value)} />
                            <label className="form-check-label" htmlFor="divisa">COP</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="divisa" id="usd" value="USD" checked={divisa === 'USD'} onChange={(e) => setDivisa(e.target.value)} />
                            <label className="form-check-label" htmlFor="divisa">USD</label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary">Comprar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Formulario