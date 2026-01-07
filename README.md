# Portfólio do Marcos 🚀

[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

> Template de portfólio estático pronto para GitHub Pages — leve, responsivo e fácil de customizar. Este repositório contém HTML, CSS (Sass), JavaScript e assets para você montar seu portfólio pessoal.

---

![Preview do site](images/preview.png "Substitua por uma captura de tela real do seu site")

## Conteúdo

- ✅ Sobre
- ✨ Funcionalidades
- 🛠️ Como rodar localmente
- ⚙️ Como personalizar
- 🧩 Estrutura do projeto
- 📄 Licença e contato

---

## Sobre

Site estático de portfólio (template) pensado para profissionais que desejam apresentar experiência, projetos e contato de forma simples e elegante.

Não esqueça de me seguir e clicar na estrela.

## Funcionalidades principais

- ✅ Layout responsivo (mobile-first)
- ✅ Preparado para usar com Gulp (compilação de Sass e minificação de JS)
- ✅ Estrutura de seções: Lead, Sobre, Experiência, Educação, Projetos, Skills, Contato, Footer
- ✅ Fácil customização de cores via variáveis Sass

## Demo

O site está disponível para visualação em: https://dataengineer.net.br e refere-se ao meu portifólio pessoal.

---

## Rodando localmente 🧭

Pré-requisitos: Node.js e npm instalados.

1. Clone o repositório

```bash
git clone https://github.com/<seu-usuario>/dataengineer.github.io.git
cd dataengineer.github.io
```

2. Instale dependências

```bash
npm install
```

3. Rodar em modo desenvolvimento (compila Sass e minifica JS automaticamente):

```bash
npm run watch
# ou, se tiver gulp instalado globalmente
gulp watch
```

4. Abra `index.html` no navegador ou use um servidor local (ex.: Live Server no VS Code).

Dica: Para gerar versões finais otimizadas, rode o script de build (se existir) ou compile manualmente as versões minificadas do CSS/JS.

---

## Como personalizar ✍️

- Cores: edite as variáveis no arquivo Sass (ex.: `$base-color`, `$background`).
- Seções: adicione/remoção seções no `index.html` e mantenha ids consistentes para navegação.
- Imagens: substitua os placeholders em `images/` (ex.: `lead-bg.jpg`, `project.jpg`).
- Formulário de contato: utiliza Formspree (exemplo no README original). Configure o `action` com seu e-mail do Formspree.

> Observação: os scripts estão em `js/scripts.js` e são minificados em `js/scripts.min.js`.

---

## Estrutura do repositório 📁

- `index.html` — página principal
- `css/` — arquivos CSS gerados
- `js/` — scripts (originais e minificados)
- `images/` — imagens e capturas
- `libs/` — bibliotecas (Font Awesome etc.)
- `package.json` — scripts e dependências
- `LICENSE` — licença do projeto

---

## Boas práticas e sugestões 💡

- Adicione uma captura de tela real em `images/preview.png` para deixar o README mais atrativo.
- Configure GitHub Pages em *Settings → Pages* para publicar automaticamente a branch `main` (ou `gh-pages`).
- Use imagens otimizadas (WebP/AVIF ou JPEG com compressão) para melhorar performance.

---

## Contribuições

Contribuições são bem-vindas! Abra uma issue para discutir mudanças ou envie um pull request com melhorias.

---

## Licença 📜

Este projeto está licenciado sob a licença MIT — consulte o arquivo `LICENSE` para detalhes.

---

## Contato ✉️

Se quiser, adicione seu e-mail e links das suas redes (GitHub, LinkedIn, Twitter) na seção de rodapé do site para facilitar contato.


---
