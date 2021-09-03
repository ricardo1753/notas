import React, { useState, useEffect } from "react";
import NotaList from "./NotaList";
import NotaEdit from './NotaEdit'

import '../css/app.css'

export const NotaContext = React.createContext()
const LOCAL_STORAGE_KEY = 'cookingWithReact.notas'

function App() {
  const [selectedNotaId, setSelectedNotaId] = useState()
  const [notas, setNotas] = useState(sampleNotas)
  const selectedNota = notas.find(nota => nota.id === selectedNotaId)
  console.log("mi nota: " + selectedNota )

  useEffect(() => {
    const notaJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (notaJSON != null) setNotas(JSON.parse(notaJSON))
  },[])

  useEffect(() => {
    //cada vez que hay un rerender se llama la funcion que esta dentro
    //de useEffect
    //el segundo parametro de useEffect es un arreglo: si es vacio hace que
    //la funcion corra una sola vez (solo la primera vez que corre) si 
    //contiene un arreglo, cada vez que el arreglo cambia: corre la funcion
    //se pueden pasar arreglos, variables al mismo tiempo: ej, [casas, silla]
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notas))
  }, [notas])

/*   useEffect(() => {
        //si usamos un return dentro de useEffect. Cada vez que un componente
        //se desmonta (unmount) llama la seccion return de los useEffect
      console.log("Rendering")
      return () => {
      console.log("Desmontando")
    }
  })
 */
  const notaContextValue = {
    handleNotaAdd,
    handleNotaDelete,
    handleNotaSelect,
    handleNotaChange
  }

  function handleNotaSelect(id) {
    setSelectedNotaId(id)
  }

  function handleNotaAdd() {
    const newNota = {
      id: Date.now().toString(),
      name: '',
      date: '',
      session: '',
      notes: ''
    }
    setSelectedNotaId(newNota.id)
    setNotas([...notas, newNota])
  }

  function handleNotaChange(id, nota) {
    const newNotas = [...notas]
    const index = newNotas.findIndex(r => r.id === id)
    newNotas[index] = nota
    setNotas(newNotas)
  }

  function handleNotaDelete(id) {
    setNotas(notas.filter(nota => nota.id !== id))
  }

  return (
    <NotaContext.Provider value={notaContextValue}>
      <NotaList notas={notas} />
      {selectedNota && <NotaEdit nota={selectedNota} />}
    </NotaContext.Provider>
  )


}


const sampleNotas = [
  {
    id: 1,
    name: 'Tarea',
    date: '08/23/2021',
    session: 'mañana',
    notes: '1. Lavar la ropa\n2. Secar la ropa\n3. Guardar la ropa'
  },
  {
    id: 2,
    name: 'Recordatorio',
    date: '08/24/2021',
    session: 'noche',
    notes: '1. Llamar a Pedro\n2. Terminar la tarea de la escuela'
  }
]

export default App;
