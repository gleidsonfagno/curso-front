
  # DOM
  - Document object model
  - estrutura de um arquivo na web 
  - Representacao documento HTML OU XML
  - Interface de progamacao
  - Nao e uma linguagem de progamacao
  - E essencial para o js entender o modelo de pagina web

  ## para que serve?
  - Alterar a estrutura 
  - Rotinas e estilo
  - Alterar o conteudo

  ## como?
  - Disponibilizar API ( appliication Programming Interface)
  - Rotinase padroes estabelecidos 
  - metodos (funcoes)
  - Arvore de elementos
  - Seletores
  - objetos (nos)

  ## Exemplo htmll
<html>
<heade></header>
<body></body>
</htm>

  ## Exemplo obj

objeto = {
    html : {
        header : {},
        body : {
            h1 ; {

            }
        }
    }
}

 ## DOM x JS
 - O DOM POe ser usado por outras linguagens
 - sem o DOM o JS nao teria nocao da pagina

 ### Vantagem de usar o jaascript
 - Codigo e execucao por navegadores
 - Tornar as paginas dinamicas 
 - evutar requsicoes desnessesaria (perfomace)
 - Reagir rapidamente de acoes dos usuarios
 - SPA (single page applications)

 ### Desvatagem de usar o jaascript
 - Codigo e execucao por navegadores
 - O conteudo Nao ficar visivel para indexadores de busca
 - Alteracoe em tempo de execucao nao ficam salvas no documento

 ### Exemplos
 selecionar o objeto e disponobiliza (metodos/ funcoes).callback

 - document.getElementById(id)
 - document.getElementsByTagName('div)
 - document.createElement('div')
 - parentNode.appendChild(node) //html.appendChild('body')
 - element,innerHTML
 - element.style
 - element.setAttribute('name')
 - element.getAttribute('name')
 - element.addEventListener()
 - window.location
 - window.onload
 - console.log()

 ## Seletores
 - Tipos de Seletores: tag, ID, class, Name, query
 - Callback
 - getElementsByTagName()
 - getElementById()
 - getElementsName()
 - getElementsByclassName()

 ## Formulario
 - precisamos evitar que o usuarios passe dados incorretos
 - Ou seja para direcionar melhor o uso do nosso sistema
 - protesa a injecao de codigo malicioso
 - evitar erros de processamentoss
 - Formatar dadaos para faciçitar o processamento
 - Rogex (expressoes regulares)

 ### Referencia

 https://dom.spec.whatwg.org/


