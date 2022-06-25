import warx from '../assets/produtores/warx.png';
import quicklap from '../assets/produtores/quickLap.png';
import jumper from '../assets/produtores/jumper.png';
import scratchcup from '../assets/produtores/scratchCup.png';

const gerarNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random()*(max - min + 1) + min);
};

const produtores = {
    titulo: "Jogos do Scratch",
    lista: [
        {
            nome: "warX",
            imagem: warx,
            jogadores: gerarNumeroAleatorio(1, 50000)
        },
        {
            nome: "QuickLap",
            imagem: quicklap,
            jogadores: gerarNumeroAleatorio(1, 50000)
        },
        {
            nome: "Jumper",
            imagem: jumper,
            jogadores: gerarNumeroAleatorio(1, 50000)
        },
        {
            nome: "Scratch Cup",
            imagem: scratchcup,
            jogadores: gerarNumeroAleatorio(1, 50000)
        }
    ]
}

export default produtores