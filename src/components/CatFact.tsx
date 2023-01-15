import { ReactElement } from 'react'
import { CatFactInterface } from '../interfaces'

export default function CatFact({text}: CatFactInterface): ReactElement {
  return (
    <div className='catfact'>
       <p>{text}</p>
    </div>
  )
}
