#!/bin/bash

mkdir "examples/$1"

echo '<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="../../favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exemplo '$1' - WebAudio API</title>
  </head>

  <body>
    <header>
      <h1>WebAudio API</h1>
    </header>
    
    <main>
      <h2>Exemplo '$1'</h2>
      
      <audio controls>
        <source src="../../assets/stand-by-me.ogg" type="audio/ogg" />
        <source src="../../assets/stand-by-me.mp3" type="audio/mp3" />
        <p>Navegador muito antigo para suportar áudio HTML5? Que deprimente!</p>
      </audio>
      
      
    </main>


    <footer>
      <a href="/">Exemplos</a>
      <gui-seek></gui-seek>
    </footer>

    <script type="module" src="/src/stereo.ts"></script>
  </body>
</html>
' > "examples/$1/index.html"

echo "import './guiseek'

import './style.scss'
" > "src/$1.ts"