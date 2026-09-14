# EXPERIMENTO 1: SPA e Navegação por Rotas
* **Conceito**: Single Page Application (SPA) [1].
* **Objetivo Mínimo**: Demonstrar a substituição dinâmica de conteúdo no navegador sem recarregar a página por completo [1, 28].
* **Escopo da POC**:
  * Aplicação simples com 2 a 3 telas estáticas (ex.: *Home* e *Sobre*) [6].
  * Configuração de rotas simples (`/` e `/sobre`) em React (React Router), Vue (Vue Router) ou Angular (Angular Router) [3, 25, 52].
  * Exibição de textos estáticos ou consumo de uma única requisição GET mockada [4].
* **Entregável no GitHub**: Repositório com as rotas funcionando e um GIF no `README.md` mostrando a navegação sem *refresh* do navegador.

# O que entendi:
> <p> A **SPA (Single Page Application)** é uma aplicação que possibilita a navegação entre telas sem a necessidade fazer o "reload" (apresentar tela branca ou sumir o conteúdo, visualmente falando.) para baixar os conteúdos de uma outra tela.</p> <p>Falando de forma técnica, a SPA permite que o client (Navegador) faça o download do HTML principal (o template) e este download acontece apenas da primeira vez. o DOM deste template vai ser modificado pelos arquivos de JavaScript que vão ser baixados sobre demanda conforme as rotas de tela para telas são acionadas.</p><p>O DOM (Document Object Mode) é um modelo de objeto utilizado pelos navegadores para intepretar a marcação do HTML. A estrutura é organizada em forma de árvore, assim quando uma deteminada div precisa ser modificada por exemplo, o Js consegue localizar a partir de um indentificador (classe, id, etc...).</p><p>A princípio, ignorando o funcionamento dos frameworks como o Angular que foi usado nesta experiência, o template possui uma parte "estática" e outra "dinâmica". A estática é a que é carregada pela primeira vez e não há de ser modificada. A dinâmica é um componente do html que vai ser modificado pelo JS. Supondo que tenhamos que temos 3 telas, o conteúdo destas vão ser construídas na parte dinâmica do template. O JS identifica o nó a ser modificado e insere neste o conteúdo da tela.</p>

