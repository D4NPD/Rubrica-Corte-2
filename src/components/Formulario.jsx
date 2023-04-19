import React,{useState} from 'react'

const Formulario = () => {
    const [numManillas, setNumManillas] = useState('');
    const [material, setMaterial] = useState('');
    const [dije, setDije] = useState('');
    const [tipo, setTipo] = useState('');
    return (
        <div>
            <div className="mx-4 col-6 mt-3">
                <h1>Formulario de Compra de Manillas</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="numManillas" className="form-label">Número de Manillas a Comprar</label>
                        <input type="number" className="form-control" id="numManillas" name="numManillas" required value={numManillas} onChange={(e) => setNumManillas(e.target.value)} />
                    </div>
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
                        <label htmlFor="tipo" className="form-label">Tipo</label>
                        <select className="form-select" id="tipo" name="tipo" required value={tipo} onChange={(e) => setTipo(e.target.value)}>
                            <option value="" disabled>Seleccione una opción</option>
                            <option value="oro">Oro</option>
                            <option value="oro-rosado">Oro Rosado</option>
                            <option value="plata">Plata</option>
                            <option value="niquel">Níquel</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Formulario