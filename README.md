# Portfólio de Marcos Vasconcellos

Site pessoal de Marcos Vasconcellos de Andrade, com apresentação profissional, projetos, competências e formulário de contato.

**Acesse:** [marcos-data-engineer.github.io](https://marcos-data-engineer.github.io/dataengineer.github.io/)

## Conteúdo

- **Sobre:** experiência em infraestrutura de TI, suporte técnico Nível 2/3 e administração Linux.
- **Projetos:** automação de sistemas Linux, blog de tecnologia e IA, análise de ações e gestão de condomínios.
- **Competências:** suporte, Linux, scripting, bancos de dados, DataOps e inteligência artificial.
- **Contato:** formulário integrado ao Formspree e endereço de e-mail.

## Tecnologias

- HTML, CSS e JavaScript, sem framework de interface.
- Font Awesome e Google Fonts.
- Google Analytics, carregado somente após o aceite de cookies de análise.
- GitHub Pages, com o blog publicado em `/blog/`.

## Executar localmente

O site é estático e não requer instalação de dependências nem etapa de build. Com Python 3 instalado, execute na raiz do repositório:

```bash
python3 -m http.server 8000
```

Abra [http://localhost:8000](http://localhost:8000) no navegador. Para encerrar o servidor, pressione `Ctrl+C` no terminal.

Também é possível abrir `index.html` diretamente, mas servir o site por HTTP oferece uma experiência de teste mais próxima da publicação.

## Estrutura do repositório

```text
.
├── css/             # Estilos e regras responsivas
├── images/          # Fotos e imagens dos projetos
├── js/              # Interações, menu e preferências de cookies
├── libs/            # Bibliotecas locais, como Font Awesome
├── index.html       # Página principal
├── robots.txt       # Orientações para robôs de busca
├── schema.json      # Dados estruturados da pessoa
├── sitemap.xml      # Sitemap XML
```

## Preferências de cookies

O site usa o armazenamento local do navegador para lembrar a escolha entre aceitar ou recusar cookies de análise. O Google Analytics só é carregado depois do aceite. A escolha pode ser revista pelo botão **Preferências de cookies**, no rodapé.

## Publicação

O repositório contém os arquivos estáticos na raiz e é publicado pelo GitHub Pages em `https://marcos-data-engineer.github.io`. O arquivo `.htaccess` contém regras opcionais para hospedagens Apache; o GitHub Pages não aplica esse arquivo.

## Contato e licença

- **E-mail:** [contact.marcos.dataengineer@gmail.com](mailto:contact.marcos.dataengineer@gmail.com)
- **Licença:** [MIT](LICENSE)
