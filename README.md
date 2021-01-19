# Wiser Educação - Squad Agency ™

Boilerplate Landing page

## Índice

1. [Scripts do projeto](#Scripts-do-projeto)
2. [Convenção e Boas Práticas](#Convenção-e-Boas-Práticas)

---

## Scripts do projeto

Para executar qualquer um dos scripts abaixo, presumi-se que o Node.js e o NPM estejam préviamente instalados no ambiente em questão. Caso contrário, você pode fazer a instalação do Node.js clicando no link de download abaixo.

- [https://nodejs.org/en/download/](Node.js)

**NOTA:** O gerenciador de dependência NPM já vem instalado por padrão no Node.js. Entretanto, se você preferir trabalhar com o YARN, basta rodar o seguinte comando no terminal após concluir a instalação do Node.js. Para mais detalhes, acesse sua documentação.

    npm i -g yarn

[Documentação de instalação do Yarn](https://classic.yarnpkg.com/en/docs/install#debian-stable)

### Modo Desenvolvimento - Dev

Este script executa um servidor de desenvolvimento(SSR) contemplado pelo Next.js.
Os arquivos do código fonte da aplicação estão contidos dentro do diretório ./src. Após concluir a instalação de todas as dependências da aplicação, é possível executar o seguinte comando de desenvolvimento no terminal:

    npm run dev

Depois de executar o comando acima, abra [http://localhost:3000](http://localhost:3000) para renderizar a aplicação no seu browser preferido. A página será recarregada(Hot reload) sempre que fizer edições no seu código fonte, você também verá quaisquer eventuais erros do código no seu console e no próprio browser.

### Construção - Build

Este comando cria os arquivos de produção dentro do diretório ./build. A construção cria uma versão otimizada e transpila os arquivos fonte para a versão ES5 do JS. Para construir a aplicação **Wise-up Online Corporate ®** em modo produção, execute o seguinte comando:

    npm run build

### Limpeza - Clean

Este comando faz uma limpeza nos arquivos criados localmente. Alguns arquivos são criados automaticamente pelo próprio NextJS e o Node.js. Se você precisar dar um reset/limpar o projeto, execute o seguinte comando no terminal:

    npm run clean

---

#### Template de um componente

    import React from 'react';
    import PropTypes from 'prop-types';

    // Styles
    import { StyleMyComponent } from './StyleSuccess'; // Isso importa6 um componente de estilo.

    const MyComponent = (props) => {

        const { titlePage } = props;

        return(
            <>
                <h1>{titlePage}</h1>
                <StyleMyComponent>Content page</StyleMyComponent>
            </>
        );
    }

    <!-- // Esse é um exemplo de checagem de tipos com o PropTypes, Onde nos exigimos receber a prop titlePage com uma string. -->
    MyComponent.propTypes = {
    titlePage: PropTypes.string.isRequired,
    };

    <!-- // Esse é um exemplo nós criamos um valor padrão para a props titlePage, e caso o componente pai nao passe nenhum valor p titlePage, ela tera o valor 'Success Page' definida por padrão. -->
    MyComponent.defaultProps = {
    titlePage: 'Success Page',
    };

    export default MyComponent; // Isso exporta o módulo padrão.
    export { MyComponent }; // Isso exporta um ou vários módulos específicos.

## Convenção e Boas Práticas

### Componentes

Para adicionar um componente, hook ou qualquer outra funcionalidade/código neste projeto, é importante se atentar ao padrão e estrutura que estamos utilizando ao mesmo.

#### Reutilização e Componentização

Toda trecho de código que é utilizado mais de uma vez, é fortemente recomendável que se crie um novo componente. Desta forma, o mesmo poderá ser reutilizado por qualquer outro componente do projeto, conforme futuras necessidades de escalabilidade forem surgindo.

#### Separação de responśabilidades

Para que possamos manter um código legível e limpo e de fácil manutenção, sugerimos que cada trecho de código seja fragmentado, uu seja, cada função deve ter uma única responsábilidade.
Exemplo: um componente padrão React, provavelmente implementa um estilo(CSS, SCSS, SASS, Styled-componente), seja ele qual for, neste caso, é preciso criar um novo arquivo de estilo e importar o mesmo no componente que irá contemplar o estilo.

#### Checagem de tipos

Por padrão, nós utilizamos a checagem de tipos provido pela bibliotéca **PropTypes**, visando 'garantir' que um componente, hook, serviço ou qualquer outro trecho de código, recebam seus devidos parâmetros em sua utilização.
