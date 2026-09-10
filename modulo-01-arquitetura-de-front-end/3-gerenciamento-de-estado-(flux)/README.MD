### EXPERIMENTO 3: Gerenciamento de Estado com Arquitetura Flux
* **Conceito**: Padrão Flux para gerenciamento de estado global [35].
* **Objetivo Mínimo**: Centralizar o estado em uma *Store* e atualizá-lo exclusivamente através de *Actions* e *Reducers* [35, 36].
* **Escopo da POC**:
  * Uma única tela com um contador numérico ou uma lista simples de tarefas (To-Do List) [36].
  * **1 Store**: Para armazenar o valor atual do contador/lista [35].
  * **1 Action**: Função que retorna um objeto com a propriedade obrigatória `type` [36].
  * **1 Reducer**: Função pura que recebe a ação e calcula o novo estado [36].
* **Entregável no GitHub**: Código demonstrando o fluxo unidirecional sem alteração direta de estado.
