# Portfólio — Gustavo C. Schimidt

Site pessoal e portfólio profissional de Gustavo C. Schimidt, desenvolvido com HTML, CSS e JavaScript. O projeto apresenta perfil, formação, experiência, projetos, links profissionais e formas de contato em uma página responsiva.

🌐 **Site publicado:** [gustavocsdev.com.br](https://www.gustavocsdev.com.br/)  
💻 **Repositório:** [Gucs1/personal-website](https://github.com/Gucs1/personal-website)

## Visão geral

O site é uma aplicação estática de página única. A navegação lateral alterna entre as seções sem recarregar a página. O layout adapta a navegação e os componentes a telas menores e oferece personalização visual por paleta de cores e modo claro/escuro.

As informações apresentadas incluem:

- apresentação e perfis sociais;
- resumo profissional e informações de contato;
- formação acadêmica e histórico de experiência;
- cursos e certificações;
- portfólio com categorias e links para projetos;
- formulário de contato, com opções de envio por e-mail e WhatsApp na interface;
- currículo para download.

## Funcionalidades

### Navegação e apresentação

- **Navegação por seções:** Início, Sobre, Portfólio e Contato. As seções são alternadas por JavaScript com transições visuais.
- **Menu responsivo:** o botão de menu abre e fecha a navegação em telas menores; ao escolher uma seção, o menu móvel fecha.
- **Texto animado:** alterna em loop entre frases de apresentação com a biblioteca `ityped` incluída em `js/ityped.min.js`.
- **Preloader:** exibe um indicador durante o carregamento e o remove após o evento `load`.
- **Links sociais:** atalhos para os perfis configurados no HTML.

### Perfil, currículo e trajetória

- Resumo profissional, dados de contato e botão para baixar o currículo em PDF.
- Ação “Contrate-me”, que leva à seção de contato.
- Linha do tempo com formação e experiências profissionais.
- Listas de cursos e certificações organizadas por grupo.

### Portfólio

- Projetos agrupados por categoria.
- Botões de filtro para exibir todos os itens ou somente os itens de uma categoria.
- **Lightbox:** abre a imagem do item selecionado, mostra a categoria e a posição do item na coleção e permite avançar ou voltar. O lightbox fecha pelo botão ou clicando fora da imagem.
- Projetos de cliente podem apresentar uma descrição e uma área de link sobreposta ao cartão.

### Aparência e responsividade

- Paletas de cores alternativas: rosa (padrão), azul, verde, laranja e amarelo.
- Modo claro/escuro.
- Regras responsivas para telas de até 900 px, 576 px e 360 px, incluindo ajustes de colunas, tipografia, retrato e botões.

## Estrutura do projeto

```text
personal-website/
├── index.html
├── css/
│   ├── style.css
│   ├── styleSwitcher.css
│   └── skins/
│       ├── pink.css
│       ├── blue.css
│       ├── green.css
│       ├── orange.css
│       └── yellow.css
├── documents/
│   └── GustavoCoelhoSchimidt_CV.pdf
├── images/
│   ├── about.jpg
│   └── ... imagens do portfólio e recursos visuais
└── js/
    ├── ityped.min.js
    ├── script.js
    └── styleSwitcher.js
```

> Os nomes acima refletem os arquivos referenciados pelo HTML e os diretórios presentes no repositório. Os arquivos de imagem adicionais devem ser consultados diretamente na pasta `images/`.

### Arquivos principais

| Caminho | Responsabilidade |
| --- | --- |
| `index.html` | Conteúdo, seções, formulário, estrutura do portfólio e estilos adicionais específicos da página. |
| `css/style.css` | Estilos principais e estrutura visual do site. |
| `css/skins/*.css` | Cores e estilos das paletas disponíveis. |
| `css/styleSwitcher.css` | Interface do painel de personalização. |
| `js/script.js` | Menu, navegação, texto animado, filtro, lightbox e submissão do formulário. |
| `js/styleSwitcher.js` | Troca de paleta, modo claro/escuro e abertura/fechamento do painel de estilo. |
| `js/ityped.min.js` | Biblioteca local usada para animar as frases da apresentação. |
| `images/` | Retrato e imagens dos projetos. |
| `documents/` | Currículo disponibilizado para download. |

## Tecnologias e dependências

- HTML5
- CSS3
- JavaScript (sem framework)
- [Font Awesome 6.5.0](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css), carregado por CDN
- `ityped`, incluído localmente em `js/ityped.min.js`

Não há `package.json` nem etapa de compilação indicada no repositório. O front-end pode ser servido como arquivos estáticos.

## Executar localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/Gucs1/personal-website.git
   cd personal-website
   ```

2. Abra `index.html` no navegador ou inicie um servidor HTTP estático na raiz do projeto. Por exemplo, com Python:

   ```bash
   python -m http.server 8000
   ```

3. Acesse [http://localhost:8000](http://localhost:8000).

Um servidor HTTP local é recomendado para que caminhos relativos e recursos sejam carregados de maneira consistente. Os ícones do Font Awesome dependem de conexão com a internet; a biblioteca `ityped` é carregada do próprio projeto.

## Configuração e manutenção

- **Conteúdo textual, links, formação, experiência, projetos e contatos:** editar `index.html`.
- **Cores disponíveis:** editar as folhas de estilo em `css/skins/` e manter os títulos dos links `.alternate-style` coerentes com os nomes usados pelo seletor.
- **Frases animadas:** alterar o array `strings` em `js/script.js`.
- **Imagens e currículo:** substituir os arquivos em `images/` e `documents/`, preservando ou atualizando os caminhos referenciados no HTML.
- **Links sociais:** substituir os endereços existentes pelos perfis corretos; remover links com `href="#"` que não serão usados.

## Formulário de contato: comportamento atual

O HTML contém validação dos campos e mensagens de erro. A interface apresenta opções de envio por e-mail e WhatsApp. Além disso, `js/script.js` intercepta o submit de `#contactForm` e faz uma requisição `POST` para `http://localhost:3000/send`, enviando `nome`, `email`, `assunto` e `mensagem` como JSON.

**Essa rota depende de um serviço Node.js local que não está incluído neste repositório.** Assim, o envio por essa requisição não funcionará em uma publicação estática nem em outro computador sem o backend correspondente. Para habilitar envio em produção, será necessário implementar/configurar uma API acessível por HTTPS e atualizar o endereço no JavaScript, ou usar somente os fluxos `mailto:`/WhatsApp implementados na interface. Não envie dados reais de visitantes enquanto essa integração não estiver configurada.

## Publicação

O repositório informa deployments de produção e o site também é disponibilizado em domínio próprio. Como não há configuração de build ou workflow de publicação visível na estrutura principal, a hospedagem deve servir os arquivos estáticos da raiz preservando os caminhos de `css/`, `js/`, `images/` e `documents/`.

Ao publicar em um novo domínio ou plataforma, confira:

1. se o domínio e a descrição do repositório apontam para o endereço atual do site;
2. se o PDF e todas as imagens carregam;
3. se os links de projeto, rede social, e-mail e WhatsApp estão atualizados;
4. se o formulário usa um backend realmente implantado, caso o fluxo de API seja mantido;
5. se a CDN do Font Awesome está acessível ou se os ícones foram hospedados localmente.

## Acessibilidade e observações

O retrato possui texto alternativo e o layout tem ajustes para dispositivos móveis. Como melhoria contínua, recomenda-se validar navegação por teclado e leitores de tela, conferir contraste das paletas, fornecer rótulos acessíveis para controles que hoje dependem de ícones e tratar erros de rede/HTTP da API de contato com mensagens inline.

---

Desenvolvido por **Gustavo C. Schimidt**.
