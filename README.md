# ⚛️ React Native: Tela de avaliação dos jogos para o App MatrizKIDS

Essa é a aplicação do Fábio Mori após concluir o projeto do curso **Utilizando Hooks** da formação em **React Native** na [Alura](https://www.alura.com.br/).

## 📱 Projeto

Neste projeto foi aplicado todo aprendizado para fazer uma tela de avaliação dos jogos criados com o Scratch, para o aplicativo do MatrizKIDS, uma edtech que ensina crianças a programarem através do Scratch.

|<img src="https://user-images.githubusercontent.com/101336111/176433209-f48c2ef9-cdb7-4387-bf69-596fb4f4aaea.png" width="300" height="600">|<img src="https://user-images.githubusercontent.com/101336111/176433221-55babb81-2310-4070-b49e-04817fc5b60a.png" width="300" height="600">|<img src="https://user-images.githubusercontent.com/101336111/176433230-9d190ab4-582d-4eda-b1b5-aed946676bd4.png" width="300" height="600">|

## 🧑‍💻 Técnicas e Tecnologias

As técnicas e tecnologias ensinadas pela [Alura](https://www.alura.com.br/) no projeto são:

- Hooks
- React Native CLI
- CTS (Compatibility Teste Suite)
- CLI (Command-Line Interface)
- DOM (Document Object Model)

Pré-requisitos para começar este trabalho com React Native na sua máquina:
- Instalar o Node, o JDK, o Android Studio, as SDKs, o Xcode (para iOS). Também é necessário criar o projeto e o emulador.

Como fazer a migração do Expo para o React Native CLI:
- Navegue até a raiz do seu projeto Expo.
- Abra o terminal na pasta do projeto e digite ``expo eject``.
- Ele vai criar duas pastas: uma pasta Android e outra iOS e alguns outros aplicativos.
- Quando todo processo terminar, você já terá sua aplicação migrada para o React-Native.

Diferenças entre Expo CLI e o React Native CLI:
- A grande diferença é que se você deseja integrar uma biblioteca nativa de terceiros ou estender a funcionalidade do aplicativo com código nativo, você simplesmente não consegue fazer isso com o Expo. Um exemplo de funcionalidade que ainda não está disponível é o Bluetooth (até o momento que escrevo aqui). Se o seu aplicativo precisar dele, será necessário fazer um projeto sem o Expo.

## 📲 O aprendizado do aluno Fábio Mori
### Introdução da história

A aplicação do conteúdo ensinado neste curso da [Alura](https://www.alura.com.br/) para o aplicativo MatrizKIDS foi a criação de uma página onde os alunos avaliarão cada jogo criado com Scratch. Desta forma os alunos interagem com o conteúdo que criamos e assim podemos entender quais são os jogos que possuem mais alunos e as melhores avaliações pelos jogadores, nos direcionando para os próximos desenvolvimentos.

### Tags e comandos React Native

- ``npx``: você roda pacotes na sua máquina sem precisar instalá-los previamente.
- ``npm``: você precisa instalar os pacotes antes de rodar na sua máquina.
- ``componentDidMount()``: é executado quando o componente termina de renderizar.
- ``componentDidUpdate()``: é executado quando o componente recebe uma atualização e não é executado na primeira vez que o componente carrega.
- ``componentDidCatch()``: é chamado quando a aplicação encontra algum erro durante a renderização em algum método do ciclo de vida ou no construtor de componentes filhos.
- ``useEffect()``: é uma função que vem do React que, se o segundo parâmetro for uma lista vazia ([ ]), faz uma ação (apenas uma vez) quando um componente é carregado. Ele possui a vantagem de não ter que criar uma classe inteira para chamar uma função.

### Conceitos aprendidos

- Expo: é uma ferramenta que facilita no desenvolvimento de aplicativos Mobile com React Native, já que ele abstrai todas as partes complexas de configuração do ambiente e te permite acesso rápido e fácil a várias APIs nativas. Além disso é possível programar para iOS sem precisar de um macOS, apenas um dispositivo físico com iOS. Isso tudo porque o Expo disponibiliza um aplicativo móvel, que pode ser baixado tanto na Play Store como na Apple Store.
- Hooks
   - São uma nova adição do React Native que nos permite fazer ações de classe dentro dos componentes de função.
   - Ele permite que você use o state e outros recursos do React sem escrever uma classe.
   - Utilizar os Hooks é mais simples e deixa o seu código mais entendível.
   - Hooks básicos:
      - ``useState``: para gerenciar estados.
      - ``useEffect``: para gerar efeitos colaterais a certas atualizações.
      - ``useContext``: para gerenciar contextos entre componentes distintos.
   - Hooks adicionais:
      - ``useRender``: alternativa ao ``useState`` quando há lógicas complexas.
      - ``useCallback``: memoriza uma função, que só é atualizada quando os valores recebidos como argumentos são utilizados.
      - ``useMemo``: semelhante ao ``useCallback``, mas ao invés de função, armazena um valor.
      - ``useRef``: para acessar propriedades de componentes filhos.
      - ``useImperativeHandle``: para personalizar o valor da instância que será acessível aos componentes "pais".
      - ``useLayoutEffect``: semelhante ao ``useEffect``, porém é disparado na mesma fase que o ``componentDidMount`` e ``componentDidUpdate``.
      - ``useDebugValue``: usado para definir um "label" em hooks customizados que irá aparecer somente em ferramenta de debug.
- React Native CLI 
   - É a interface de linha de comando do React Native puro, é como um programa, mas no terminal. Usando CLI não teremos as mesmas facilidades do Expo, como ambiente simplificado, pois teremos que gerar os arquivos nativos direto na nossa máquina.
   - Diferentemente do Expo CLI, aqui temos nos arquivos gerados as pastas android e ios, que possuem os códigos nativos
- Simulador Android Studio:
   - Clique em AVD Manager
   - Crie o seu próprio emulador
- CTS (Compatibility Teste Suite): é um conjunto de testes gratuitos de nível comercial, disponíveis para download como binário ou como fonte Android Open Source Project (AOSP). O CTS representa o mecanismo de compatibilidade.
- CLI, sigla em inglês que significa *command-line interface* ou interface de linha de comando: é uma forma de processar comandos que serão enviados para um programa de computador na forma de linhas de texto.
- Mocks: Não é uma boa prática deixar os textos nos códigos dos componentes criados, o ideal é deixarmos os textos salvos em outro lugar específico, isso facilita muito o entendimento e também ajuda em casos onde o texto tenha que passar por uma revisão ou tradução, já que todos estarão concentrados no mesmo lugar e não será necessário entender o código para encontrá-los em seus locais. Por isso utilizamos os mocks para salvá-los, simulando uma API para receber dados como se fosse um serviço externo.
- Estados: são variáveis que estão dentro do nosso componente que quando atualizamos ela, automaticamente onde ela está sendo utilizada vai ser atualizada também. Para fazer isso, precisamos de um método específico para atualizar essa variável, que é o ``set.state``.
- Ciclo de vida
   - Métodos em cada estágio
     - Montagem:
        - ``constructor()``
        - ``static getDerivedStateFromProps()``
        - ``render()``
        - ``componentDidMount``
     - Atualizando
        - ``static getDerivedStateFromProps()``
        - ``shouldComponentUpdate()``
        - ``render()``
        - ``getSnapshotBeforeUpdate()``
        - ``componentDidUpdate``
     - Desmontando
        - ``componentWillUnmount()``
   - Tratando erros
      - ``static getDerivedStateFromError()``
      - ``componentDidCatch``
   - Cada componente também fornece outras APIs
      - ``setState()``
      - ``forceUpdate()``
   - Importante
      - A função ``render()`` não modifica o state, ou seja, ela não interage diretamente com o browser, para isso, deve-se usar o ``componentDidMount()``
      - ``setState()`` enfileira mudanças ao state do componente e diz ao React que este componente e seus componentes filhos precisam ser re-renderizados com a atualização do state. 
- DOM (Document Object Model): é uma interface de programação que os navegadores utilizam para representar páginas na web. Ele possibilita a manipulação e modificação de elementos de um documento web ao conectar as linguagens de programação à página em questão. Ele é neutro em termos de linguagem, então pode ser executado com qualquer uma delas, ainda que seja mais popular utilizá-lo com o Java Script.
- Classes: são receitas de um objeto, onde tem características e comportamentos, permitindo assim armazenar propriedades e métodos dentro dela. Ela é a receita, a especificação do objeto, defini-la implica em especificar os seus atributos (dados) e seus métodos (funções).
- Objetos: possuem características próprias, denotadas por atributos, além de funções (comportamentos específicos), dados por métodos.


### ▶️ Rodando o Projeto

Com a pasta do projeto no computador no terminal, digite para iniciar o projeto:
```
npx react-native start
```

Em seguida abra outro terminal no mesmo local e digite para conectar com o emulador:
```
npx react-native run-android
```
Lembrar de habilitar o Android Studio antes de rodar este terminal.
