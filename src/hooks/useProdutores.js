import { useEffect, useState } from 'react';
import { carregaProdutores } from '../servicos/carregaDados';

export default function useProdutores(){

    const [titulo, setTitulo] = useState('');
    const [lista, setLista] = useState('');

    useEffect (() => {
        const retorno = carregaProdutores();
        retorno.lista.sort(
 //           (produtor1, produtor2) => produtor1.distancia - produtor2.distancia, //ordenar por ordem numérica crescente (aprendido na Alura)
              (a, b) => (a.nome > b.nome ? 1 : b.nome > a.nome ? -1 : 0)    //para ordenar por ordem alfabética crescente (aplicação do aluno)
        );
        setTitulo(retorno.titulo);
        setLista(retorno.lista)
    }, []);
    return [titulo, lista];
}