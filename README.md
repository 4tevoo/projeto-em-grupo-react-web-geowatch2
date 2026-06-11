# GeoWatch 2 (não tem o 1)

## Sobre o Projeto

Sabe o Geoguessr? Não temos nada haver com eles. Enfim, o GeoWatch 2 é um jogo de Geografia onde você anda pelas ruas de cidades aleatórias e precisa adivinhar onde você está.


## FAQ

### Posso jogar sem criar conta?
Sim, mas não salvará sua pontuação no ranking.

### Como funciona o jogo?
Você cai em um local aleatório, anda pelas ruas como no StreetView, procura dicas como placas de carros, placas nas ruas, estabelecimentos, e tente adivinhar. Quanto mais próximo do local, maior o ponto, com o máximo sendo 5000

### Quero trocar de foto
Depois de criar sua conta, vá em Perfil e selecione um dos avatares. Não tem como subir sua própria foto, para evitar que algum engraçadinho tente colocar algo como um cavalo estudando ou um cachorrinho deitado

### Só pego pontuação ruim, esse jogo é muito difícil
skill issue bruh

### Baixei/Clonei o projeto, como faço pra rodar em localhost?
Depois de clonar ou baixar, abra no terminal do seu editor de código (idealmente no cmd do vscode) e digite:

```bash
npm install
```
e depois
```bash
npm run dev
```

## Variável de Ambiente
Verifique se na raiz do seu projeto há um arquivo ```.env``` com as keys e links com os nomes das variáveis que há no ```.env.example```

```.env.example
# URL do MockAPI
VITE_MOCKAPI_URL=

# Chave da API do Google Maps Embed
VITE_GOOGLE_MAPS_API_KEY=

# Key para o tiling do mapa
VITE_MAPTILER_KEY=

# Key para o RestCountriesAPI
REST_COUNTRIES_KEY=
```

## Equipe desenvolvedora
* Estêvão Viana Cunha
* Patrick Nunes Pires Melo de Souza
* Mateus Tamaki Yoshisaki
* Yuri Dos Santos Martins
* Pedro Pinto Martins De Souza
* Gabriel Martins Chinelli Maia
