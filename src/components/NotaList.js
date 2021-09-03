import React, { useContext } from 'react'
import Nota from './Nota'
import { NotaContext } from './App'

export default function NotaList({ notas }) {
  const { handleNotaAdd } = useContext(NotaContext)

  return (
    <div className="nota-list">
      <div>
        {notas.map(nota => {
          return (
            <Nota key={nota.id} {...nota} />
          )
        })}
      </div>
      <div className="nota-list__add-nota-btn-container">
        <button
          className="btn btn--primary"
          onClick={handleNotaAdd}
        >
          Add Note
        </button>
      </div>
    </div>
  )
}
