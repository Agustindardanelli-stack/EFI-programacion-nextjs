import React from 'react'

const Materias = () => {
  const listadoMaterias = ['Matematica', 'Ingles', 'redes']
  return (
    <section>
      <h1 className='text-center text-4xl font-bold text-gray-700 py-6'>Materias</h1>
      <div class='overflow-x-auto relative shadow-md sm:rounded-lg'>
        <table class='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead class='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' class='py-3 px-6'>
                Materia
              </th>
              <th scope='col' class='py-3 px-6'>
                Año
              </th>
              <th scope='col' class='py-3 px-6'>
                Docente
              </th>
              <th scope='col' class='py-3 px-6'>
                Código
              </th>
              <th scope='col' class='py-3 px-6'>
                Correlativas
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class='bg-white border-b dark:bg-gray-900 dark:border-gray-700'>
              <th
                scope='row'
                class='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'
              >
                Matematica y Logica
              </th>
              <td class='py-4 px-6'>1.ero</td>
              <td class='py-4 px-6'>Pablo Bunader</td>
              <td class='py-4 px-6'>1</td>
              <td class='py-4 px-6'>-</td>
            </tr>
            <tr class='bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700'>
              <th
                scope='row'
                class='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'
              >
                Sistemas y Organizaciones
              </th>
              <td class='py-4 px-6'>1.ero</td>
              <td class='py-4 px-6'>Muñoz Maria Jose</td>
              <td class='py-4 px-6'>2</td>
              <td class='py-4 px-6'>-</td>
            </tr>
            <tr class='bg-white border-b dark:bg-gray-900 dark:border-gray-700'>
              <th
                scope='row'
                class='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'
              >
                Arquitectura de las Computadoras
              </th>
              <td class='py-4 px-6'>1.ero</td>
              <td class='py-4 px-6'>Sosa Jorge</td>
              <td class='py-4 px-6'>3</td>
              <td class='py-4 px-6'>-</td>
            </tr>
            <tr class='bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700'>
              <th
                scope='row'
                class='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'
              >
                Programación 1
              </th>
              <td class='py-4 px-6'>1.ero</td>
              <td class='py-4 px-6'>Kaniefsky Pablo</td>
              <td class='py-4 px-6'>4</td>
              <td class='py-4 px-6'>-</td>
            </tr>
            <tr class='bg-white border-b dark:bg-gray-900 dark:border-gray-700'>
              <th
                scope='row'
                class='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'
              >
                Inglés
              </th>
              <td class='py-4 px-6'>1.ero</td>
              <td class='py-4 px-6'>Lemo Pedro</td>
              <td class='py-4 px-6'>5</td>
              <td class='py-4 px-6'>-</td>
            </tr>
            <tr class='bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700'>
              <th
                scope='row'
                class='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'
              >
                Lengua y Comunicación
              </th>
              <td class='py-4 px-6'>1.ero</td>
              <td class='py-4 px-6'>Pomini Ariadna</td>
              <td class='py-4 px-6'>6</td>
              <td class='py-4 px-6'>-</td>
            </tr>
            <tr class='bg-white border-b dark:bg-gray-900 dark:border-gray-700'>
              <th
                scope='row'
                class='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'
              >
                Matematica y Logica
              </th>
              <td class='py-4 px-6'>1.ero</td>
              <td class='py-4 px-6'>Pablo Bunader</td>
              <td class='py-4 px-6'>1</td>
              <td class='py-4 px-6'>-</td>
            </tr>
            <tr class='bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700'>
              <th
                scope='row'
                class='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'
              >
                Sistemas y Organizaciones
              </th>
              <td class='py-4 px-6'>1.ero</td>
              <td class='py-4 px-6'>Muñoz Maria Jose</td>
              <td class='py-4 px-6'>2</td>
              <td class='py-4 px-6'>-</td>
            </tr>
            <tr class='bg-white border-b dark:bg-gray-900 dark:border-gray-700'>
              <th
                scope='row'
                class='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'
              >
                Arquitectura de las Computadoras
              </th>
              <td class='py-4 px-6'>1.ero</td>
              <td class='py-4 px-6'>Sosa Jorge</td>
              <td class='py-4 px-6'>3</td>
              <td class='py-4 px-6'>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Materias
