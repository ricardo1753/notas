import React, { useContext } from 'react'
import { NotaContext } from './App'

export default function Nota(props) {
  const { handleNotaDelete, handleNotaSelect } = useContext(NotaContext)
  const {
    id,
    name,
    date,
    session,
    notes
  } = props
  
  return (
    <div className="nota">
      <div className="nota__header"> 
        <h3 className="nota__title">{name}</h3>
      </div>
        <div>
        <button
          className="btn btn--primary mr-1"
          onClick={() => handleNotaSelect(id)}
        >
          Edit
        </button>
          <button
            className="btn btn--danger"
            onClick={() => handleNotaDelete(id)}
          >
            Delete
          </button>
        </div>
      <div className="nota__row"> 
        <span className="nota__label">Dia:</span>
        <span className="nota__value">{date}</span>
      </div>
      <div className="nota__row"> 
        <span className="nota__label">Sesión:</span>
        <span className="nota__value">{session}</span>
      </div>
      <div className="nota__row"> 
        <span className="nota__label">Nota:</span>
        <div className="nota__value nota__instructions nota__value--indented">
          {notes}
        </div>
      </div>
    </div>
  )
}
