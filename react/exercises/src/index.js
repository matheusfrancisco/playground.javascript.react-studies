import React from 'react'
import ReactDOM from 'react-dom'

import Primeiro from './componentes/frist'
import BomDia from './componentes/second'
import {BoaTarde, BoaNoite} from './componentes/multiplosComponentes'
import Saudacao from'./componentes/saudacao'
import Pai from './componentes/componentPai'
import Filho from './componentes/componentFilho'

//ReactDOM.render(<Primeiro/> , document.getElementById("root"))
//ReactDOM.render(<BomDia nome="Matheus Francisco"/> , document.getElementById("root"))

//ReactDOM.render(
//    <div>
//       <BoaTarde nome="Chico"/>
//       <BoaNoite nome="Matheus"/>
//   </div>
//, document.getElementById('root'))

//ReactDOM.render(
//   <div>
//       <Saudacao tipo="Bom dia" nome="Matheus F"/>
//  </div>
//, document.getElementById('root'))

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro"/>
            <Filho nome="Joao"/>
            <Filho nome="Caio"/>
        </Pai>
    </div>
, document.getElementById('root'))
