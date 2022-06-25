import React from 'react';
import Topo from './componentes/Topo';
import Produtores from './componentes/produtores';

export default function Home (){
    return <Produtores topo={Topo} />
}