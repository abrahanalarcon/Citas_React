const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    const{ nombre, propietario, email, fecha, sintomas, id } = paciente

    const handleEliminar = () => {
      const respuesta = confirm('Deseas eliminar este paciente?');

      if(respuesta) {
          eliminarPaciente(id)
      }
  }
    return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
         {/* first p */}
         <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
           <span className="font-normal normal-case">{nombre}</span>
         </p>
         {/* second p */}
         <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
           <span className="font-normal normal-case">{propietario}</span>
         </p>
         {/* third p */}
         <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
           <span className="font-normal normal-case">{email}</span>
         </p>
         {/* 4p */}
         <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
           <span className="font-normal normal-case">{fecha}</span>
         </p>
         {/* 5 p */}
         <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
           <span className="font-normal normal-case">{sintomas}</span>
         </p>

         <div className="flex justify-between"> 
             {/* boton 1 */}
              <button
                 type="button"
                 className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white
                 font-bold uppercase rounded-lg"
                 onClick={() => setPaciente(paciente)}
              >Editar</button>
              {/* boton 2 */}
              <button
                 type="button"
                 className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white
                 font-bold uppercase rounded-lg"
                 onClick={handleEliminar}
              >Eliminar</button>
         </div>


    </div>

    
    
  )
}

export default Paciente





