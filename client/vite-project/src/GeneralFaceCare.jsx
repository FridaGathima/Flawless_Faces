import React from 'react'

const faceitems = [
    {id: 1, title: 'Micellar water'},
    {id: 2, title: 'CeraVe Face Wash'},
    {id: 3, title: 'Gold Touch Beauty Cream'},
    {id: 4, title: 'African Black Soap'},
    {id: 5, title: 'Garnier Lemon Moisturizer'},

]

function GeneralFaceCare() {
    const faceItemsList = faceitems.map(item =>
        <li key={item.id}  >
            {item.title}
        </li>)
  return (
    <ul>{faceItemsList}</ul>
  )
}

export default GeneralFaceCare