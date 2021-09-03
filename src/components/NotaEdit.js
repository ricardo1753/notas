import React, { useContext } from 'react'
import { NotaContext } from './App'

export default function NotaEdit({ nota }) {
  const { handleNotaChange, handleNotaSelect } = useContext(NotaContext)

  function handleChange(changes) {
    handleNotaChange(nota.id, { ...nota, ...changes })
  }

  return (
    <div className="nota-edit">
      <div className="nota-edit__remove-button-container">
        <button
          className="btn nota-edit__remove-button"
          onClick={()=>handleNotaSelect(undefined)}
        >
          &times;
        </button>
      </div>
      <div className="nota-edit__details-grid">
        <label
          htmlFor="name"
          className="nota-edit__label"
        >
          Name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={nota.name}
          onInput={e => handleChange({ name: e.target.value })}
          className="nota-edit__input"
        />
        <label
          htmlFor="date"
          className="nota-edit__label"
        >
          Date:
        </label>
        <input
          type="text"
          name="date"
          id="date"
          value={nota.date}
          onInput={e => handleChange({ date: e.target.value })}
          className="nota-edit__input"
        />
        <label
          htmlFor="session"
          className="nota-edit__label"
        >
          Session:
        </label>
        <input
          type="text"
          name="session"
          id="session"
          value={nota.session}
          onInput={e => handleChange({ session: e.target.value })}
          className="nota-edit__input"
        />
        <label
          htmlFor="nota"
          className="nota-edit__label"
        >
          Note:
        </label>
        <textarea
          name="nota"
          id="nota"
          value={nota.notes}
          onInput={e => handleChange({ notes: e.target.value })}
          className="nota-edit__input"
        />
      </div>
      <br />
    </div>
  )
}
