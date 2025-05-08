import React, { useState } from 'react';

const App = () => {
  const [activeScreen, setActiveScreen] = useState('home');
  const [activeFaqItem, setActiveFaqItem] = useState(null);
  const [activeCategory, setActiveCategory] = useState('geral');

  // Cores principais do app
  const colors = {
    azul: '#2E5BBA',
    roxo: '#BA4DB9',
    verde: '#00A58C'
  };

  const categories = [
    { id: 'geral', name: 'Informações Gerais', icon: 'info', color: colors.azul },
    { id: 'valores', name: 'Valores e Procedimentos', icon: 'money', color: colors.verde },
    { id: 'gestao', name: 'Controle e Gestão', icon: 'settings', color: colors.roxo },
    { id: 'prazos', name: 'Prazos', icon: 'calendar', color: colors.azul },
    { id: 'casos', name: 'Casos Específicos', icon: 'user', color: colors.verde },
    { id: 'outros', name: 'Outras Informações', icon: 'more', color: colors.roxo },
  ];
  
  const faqs = {
    geral: [
      {
        id: 1,
        question: 'Quem tem direito ao crédito?',
        answer: 'Trabalhadores registrados, incluindo rurais e domésticos, além dos optantes do MEI com contrato ativo. As categorias elegíveis são: "101 – Empregado Geral contratado pela CLT", "104 – Empregado Doméstico" e "721 - Contribuinte individual - Diretor não empregado, com FGTS". Trabalhadores temporários e intermitentes não são elegíveis.'
      },
      {
        id: 2,
        question: 'Qualquer instituição deve ter essa modalidade de crédito?',
        answer: 'Para oferecer essa modalidade de crédito, as instituições financeiras devem estar habilitadas pelo Ministério do Trabalho e Emprego (MTE) e operar através da Plataforma Crédito do Trabalhador. Isso assegura controle e transparência nas operações.'
      },
      {
        id: 3,
        question: 'O trabalhador já pode fazer o empréstimo?',
        answer: 'Sim, o trabalhador já pode fazer o empréstimo. O sistema entrou em operação em 21 de março, permitindo simulações e contratos. Trabalhadores com consignado ativo podem migrar para a nova linha a partir de 25 de abril de 2025, e a portabilidade entre bancos estará disponível a partir de 6 de junho.'
      },
      {
        id: 4,
        question: 'Como o trabalhador interessado pode solicitar o crédito?',
        answer: 'Para solicitar o crédito, o trabalhador interessado deve: 1) Baixar o aplicativo da CTPS Digital; 2) Realizar o cadastro e selecionar sua empresa atual; 3) Escolher o valor do empréstimo e o número de parcelas desejadas; 4) Visualizar a simulação exibida pela CTPS; 5) Avançar para receber propostas personalizadas; 6) Escolher a proposta desejada e contratar o empréstimo; 7) Aguardar a averbação pela Dataprev para a liberação do dinheiro.'
      }
    ],
    valores: [
      {
        id: 5,
        question: 'Qual será o valor do empréstimo?',
        answer: 'O valor do empréstimo depende da análise dos bancos, com base na "Margem Consignável" do trabalhador. Essa margem é o limite máximo de desconto mensal permitido e corresponde a 35% da "Remuneração Disponível", que é o valor líquido após deduzir descontos obrigatórios, como INSS e IRPF.'
      },
      {
        id: 6,
        question: 'O valor do empréstimo precisa ser repassado na guia do FGTS Digital?',
        answer: 'Sim, o valor do empréstimo precisa ser repassado na guia do FGTS Digital, e isso é responsabilidade do empregador. As empresas devem usar as guias de recolhimento do FGTS Digital para pagar as parcelas dos empréstimos consignados contratados pelos trabalhadores.'
      },
      {
        id: 7,
        question: 'O que acontece se o empregador não realizar o pagamento na guia do FGTS Digital no prazo correto?',
        answer: 'As guias não poderão ser pagas fora do prazo. O empregador deve regularizar a situação diretamente com as instituições financeiras, assumindo a responsabilidade por juros e encargos devidos pelo atraso, segundo o Art. 28 da Portaria 435/25 MTE. Caso não regularize, estará sujeito a penalidades administrativas, civis e penais. Atenção: não é possível recalcular guia de FGTS digital em atraso existindo parcela de empréstimo.'
      },
      {
        id: 8,
        question: 'O empréstimo precisa ser escriturado no eSocial?',
        answer: 'Sim! Para incluir os débitos na guia do FGTS, os eventos relacionados ao empréstimo consignado devem estar devidamente escriturados no eSocial a partir das informações fornecidas pelo Portal Emprega Brasil.'
      }
    ],
    gestao: [
      {
        id: 9,
        question: 'Como saber quais trabalhadores solicitaram empréstimos e quais os valores de retenção?',
        answer: 'Para saber quais trabalhadores solicitaram empréstimos e os valores de retenção, o empregador deve acessar mensalmente o Portal Emprega Brasil na opção "Crédito do Trabalhador". Lá, é possível baixar o "Arquivo de empréstimos", que contém a relação dos trabalhadores e os valores a serem descontados na folha de pagamento referentes ao empréstimo consignado.'
      },
      {
        id: 10,
        question: 'Como lançar as informações referentes aos empréstimos no eSocial?',
        answer: 'O empregador deverá lançar essas informações nos eventos remuneratórios (S-1200, S-2299 ou S-2399) em rubrica cadastrada com natureza 9253 (evento S-1010). Os códigos de incidência de FGTS, contribuição previdenciária e imposto de renda da rubrica devem ser preenchidos com [31], [00] e [9], respectivamente. É fundamental indicar que se trata de desconto a título de empréstimo consignado, informar o código da instituição financeira e o número do contrato. A partir dessa informação, o valor descontado irá constar no evento S-5003 e será incluído na guia de recolhimento do FGTS Digital.'
      },
      {
        id: 11,
        question: 'Como informo o número do contrato e a instituição financeira?',
        answer: 'Nos eventos remuneratórios do eSocial (S-1200, S-2299 e S-2399), o grupo [descFolha] deve ser preenchido se houver uma rubrica com natureza de empréstimo consignado [9253]. Nesse grupo, é necessário informar: 1) Código da instituição financeira: conforme registrado pelo Banco Central; 2) Número do contrato: referente ao empréstimo. Há também um campo opcional de "observações" que o empregador pode usar conforme necessário.'
      },
      {
        id: 12, 
        question: 'O que preciso fazer caso o número do contrato tenha sido informado incorretamente e a parcela já tenha sido paga?',
        answer: 'Se o número do contrato foi informado incorretamente e a parcela já foi paga, o erro deve ser identificado e tratado pela Dataprev e pelas instituições financeiras consignatárias, que validam e vinculam as informações. O empregador deve contatar os canais de atendimento da instituição financeira para obter orientações sobre como regularizar a situação.'
      }
    ],
    prazos: [
      {
        id: 13,
        question: 'Quando o empregador deverá fazer o desconto da 1ª parcela do empréstimo?',
        answer: 'De acordo com o artigo 24 da Portaria MTE nº 435/2025, o empregador deve descontar a 1ª parcela do empréstimo na folha de pagamento do mês seguinte para contratos firmados entre o dia 21 do mês anterior e o dia 20 do mês atual.'
      },
      {
        id: 14,
        question: 'Qual o procedimento para a consignação do desconto em folha de pagamento referente ao empréstimo?',
        answer: 'Os empregadores serão notificados, por meio do DET, entre os dias 21 e 25 de cada mês. Ao receber uma notificação pelo DET, deve acessar o Portal Emprega Brasil, recuperar as informações dos contratos de empréstimo consignados firmados por seus empregados e processar com os devidos descontos em folha de pagamento, conforme informações recebidas. É crucial manter os cadastros atualizados no DET e acompanhar regularmente as comunicações na plataforma.'
      },
      {
        id: 15,
        question: 'E se o empregador não fizer o desconto?',
        answer: 'A retenção das parcelas de empréstimo consignado é obrigatória! Se o empregador não fizer o desconto das parcelas de empréstimo consignado, estará descumprindo a obrigatoriedade prevista no § 2º do art. 2º da Lei nº 10.820/2003. Nesse caso, estará sujeito a sanções administrativas, cíveis e penais conforme a legislação. Além disso, ao realizar antecipações salariais, o empregador deve garantir que haja saldo suficiente para o desconto do empréstimo consignado, providenciando a provisão do valor ao conceder o adiantamento.'
      },
      {
        id: 16,
        question: 'O que acontece em caso de demissão?',
        answer: 'Em caso de demissão, a lei permite descontar 35% das verbas rescisórias. Se houver saldo restante, as parcelas podem ser transferidas para o próximo empregador. Caso contrário, o trabalhador deve renegociar o contrato com o banco. Como garantia, ele pode usar até 10% do saldo do FGTS e 100% da multa rescisória.'
      }
    ],
    casos: [
      {
        id: 17,
        question: 'Minha empresa tem apenas trabalhadores temporários e empregados intermitentes. Preciso checar se houve contratação de empréstimo?',
        answer: 'Não há necessidade, trabalhadores temporários e intermitentes não são elegíveis para a contratação desta modalidade de empréstimo consignado. São elegíveis apenas as seguintes categorias: "101 – Empregado Geral contratado pela CLT", "104 – Empregado Doméstico" e "721 - Contribuinte individual - Diretor não empregado, com FGTS" que estejam com contrato ativo.'
      },
      {
        id: 18,
        question: 'Qual a diferença entre "Margem Consignável" e "Remuneração Disponível" para o desconto do empréstimo consignado?',
        answer: 'A Margem Consignável é o limite máximo de desconto mensal permitido no momento da contratação dos empréstimos consignados, correspondente a 35% da Remuneração Disponível. A margem consignável é calculada pela Plataforma Crédito do Trabalhador (Dataprev) que fornece essa informação no momento da contratação do empréstimo. A Remuneração Disponível é o valor líquido da remuneração do trabalhador após a subtração de descontos obrigatórios (como INSS e IRRF) e dos descontos com incidência de contribuição previdenciária. Sobre a remuneração disponível deve ser aplicado o percentual de 35% para o chegar ao limite máximo do que pode ser descontado como parcela do empréstimo consignado.'
      },
      {
        id: 19,
        question: 'Quando o empregador efetua adiantamento remuneratório ao trabalhador, a título de antecipação de férias ou de salário, e não restar saldo suficiente para o desconto do empréstimo, o que o empregador deverá fazer?',
        answer: 'Ao realizar qualquer antecipação remuneratória ao trabalhador o empregador deve assegurar-se de que haverá saldo disponível para o desconto do empréstimo consignado, devendo, se for o caso, fazer a provisão do valor relativo à parcela do empréstimo, no momento da concessão do adiantamento.'
      }
    ],
    outros: [
      {
        id: 20,
        question: 'A empresa pode emitir guia do FGTS apenas com a parcela do empréstimo descontado?',
        answer: 'Sim, é possível, lá mesmo pelo FGTS digital, separar o FGTS mensal da parcela de empréstimo. Esta é uma opção, em última instância, para empresas que costumam atrasar recolhimentos.'
      },
      {
        id: 21,
        question: 'Em caso de afastamento previdenciário?',
        answer: 'Se não há folha de pagamento, não há desconto e nem repasse pela guia do FGTS digital da Empresa. Trabalhador deve buscar o banco para solucionar. Importante: sempre que o valor da parcela deixar de ser descontado ou for descontado parcialmente, empregado deve ser avisado. Pelo próprio contracheque ele verifica isso e uma sugestão é colocar um aviso notificando disso no "rodapé" do recibo. Os sistemas de folha podem otimizar isso!'
      },
      {
        id: 22,
        question: 'O FGTS como garantia, é obrigatório?',
        answer: 'Não, é opcional quando empregado contrata o empréstimo. Está garantia permite valores e parcelas mais vantajosas. E ainda não está disponível, previsão entre junho e julho para liberação.'
      },
      {
        id: 23,
        question: 'Empregados de empregadores PF não estão conseguindo acesso ao empréstimo?',
        answer: 'Por enquanto está com problemas, a Dataprev já está corrigindo.'
      },
      {
        id: 24,
        question: 'O aprendiz tem direito ao Crédito do Trabalhador?',
        answer: 'Não, pois não está entre as categorias exigidas na portaria.'
      },
      {
        id: 25,
        question: 'Como acessar o leiaute do arquivo do empréstimo consignado?',
        answer: 'Para acessar o Leiaute: 1) Acessar Portal Emprega Brasil - https://servicos.mte.gov.br/empregador; 2) Crédito do Trabalhador; 3) Arquivos de empréstimos; 4) Clicar no ícone - Leiaute do arquivo.'
      }
    ]
  };

  const handleFaqClick = (faqId) => {
    setActiveFaqItem(activeFaqItem === faqId ? null : faqId);
  };

  const renderCategoryIcons = () => {
    const icons = {
      info: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
        </svg>
      ),
      money: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
        </svg>
      ),
      settings: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
        </svg>
      ),
      calendar: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
        </svg>
      ),
      user: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      ),
      more: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
        </svg>
      ),
      home: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>
      ),
      back: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
        </svg>
      ),
      whatsapp: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"/>
        </svg>
      )
    };

    return icons;
  };
  
  const icons = renderCategoryIcons();

  // Home Screen
  const HomeScreen = () => (
    <div className="home-screen">
      <div className="app-header">
        <div className="logo">
          <h1>Crédito do Trabalhador</h1>
          <h2>Perguntas e Respostas</h2>
        </div>
      </div>
      
      <div className="onboarding-slider">
        <div className="onboarding-slide active">
          <div className="slide-icon">
            <div className="icon-circle">
              <svg viewBox="0 0 24 24" fill="#ffffff" width="40" height="40">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
              </svg>
            </div>
          </div>
          <h3>Seu Guia Completo</h3>
          <p>Obtenha respostas rápidas para todas as suas dúvidas sobre o Crédito do Trabalhador.</p>
        </div>
      </div>
      
      <button className="primary-button" onClick={() => setActiveScreen('categories')}>
        Continuar
      </button>

      <div className="footer-info">
        <p>Desenvolvido pela</p>
        <p>oDos - Aceleradora de Negócios</p>
      </div>
    </div>
  );

  // Categories Screen
  const CategoriesScreen = () => (
    <div className="categories-screen">
      <div className="screen-header">
        <div className="header-title">
          <h2>Crédito do Trabalhador</h2>
        </div>
      </div>
      
      <div className="user-welcome">
        <h3>Olá!</h3>
        <p>Escolha uma categoria para explorar</p>
      </div>
      
      <div className="categories-grid">
        {categories.map(category => (
          <div 
            key={category.id} 
            className="category-item"
            onClick={() => {
              setActiveCategory(category.id);
              setActiveScreen('questions');
            }}
          >
            <div className="category-icon" style={{ backgroundColor: category.color }}>
              {icons[category.icon]}
            </div>
            <span>{category.name}</span>
          </div>
        ))}
      </div>
      
      <div className="contact-button" onClick={() => setActiveScreen('contact')}>
        <div className="contact-icon">
          {icons.whatsapp}
        </div>
        <span>Precisa de ajuda?</span>
      </div>
      
      <div className="navigation-bar">
        <div className="nav-item active">
          {icons.home}
          <span>Início</span>
        </div>
        <div className="nav-item" onClick={() => setActiveScreen('contact')}>
          {icons.whatsapp}
          <span>Contato</span>
        </div>
      </div>
    </div>
  );

  // Questions Screen
  const QuestionsScreen = () => {
    const currentCategory = categories.find(cat => cat.id === activeCategory);
    const currentQuestions = faqs[activeCategory];
    
    return (
      <div className="questions-screen">
        <div className="screen-header">
          <div className="back-button" onClick={() => setActiveScreen('categories')}>
            {icons.back}
          </div>
          <div className="header-title">
            <h2>{currentCategory ? currentCategory.name : 'Perguntas'}</h2>
          </div>
        </div>
        
        <div className="questions-list">
          {currentQuestions.map(faq => (
            <div key={faq.id} className="faq-item">
              <div 
                className={`faq-question ${activeFaqItem === faq.id ? 'active' : ''}`}
                onClick={() => handleFaqClick(faq.id)}
                style={{ color: currentCategory.color, borderColor: currentCategory.color }}
              >
                <span>{faq.question}</span>
                <div className="faq-toggle" style={{ color: currentCategory.color }}>
                  {activeFaqItem === faq.id ? '−' : '+'}
                </div>
              </div>
              {activeFaqItem === faq.id && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="navigation-bar">
          <div className="nav-item" onClick={() => setActiveScreen('categories')}>
            {icons.home}
            <span>Início</span>
          </div>
          <div className="nav-item" onClick={() => setActiveScreen('contact')}>
            {icons.whatsapp}
            <span>Contato</span>
          </div>
        </div>
      </div>
    );
  };

  // Contact Screen
  const ContactScreen = () => (
    <div className="contact-screen">
      <div className="screen-header">
        <div className="back-button" onClick={() => setActiveScreen('categories')}>
          {icons.back}
        </div>
        <div className="header-title">
          <h2>Fale Conosco</h2>
        </div>
      </div>
      
      <div className="contact-content">
        <div className="contact-icon-large">
          {icons.whatsapp}
        </div>
        <h3>Ainda tem dúvidas?</h3>
        <p>Entre em contato conosco para obter assistência personalizada sobre o Crédito do Trabalhador.</p>
        
        <a href="https://wa.me/5598984177288" className="whatsapp-button">
          {icons.whatsapp}
          <div className="button-text">
            <div>Fale conosco:</div>
            <div>(98) 98417-7288</div>
          </div>
        </a>
        
        <div className="other-links">
          <h4>Links Úteis</h4>
          <a href="https://servicos.mte.gov.br/empregador/#/" className="link-item">
            <span>Portal Emprega Brasil</span>
          </a>
          <a href="https://det.sit.trabalho.gov.br/login?r=%2Fservicos" className="link-item">
            <span>Domicílio Eletrônico Trabalhista</span>
          </a>
        </div>
      </div>
      
      <div className="navigation-bar">
        <div className="nav-item" onClick={() => setActiveScreen('categories')}>
          {icons.home}
          <span>Início</span>
        </div>
        <div className="nav-item active">
          {icons.whatsapp}
          <span>Contato</span>
        </div>
      </div>
    </div>
  );

  // Render the active screen
  const renderScreen = () => {
    switch (activeScreen) {
      case 'home':
        return <HomeScreen />;
      case 'categories':
        return <CategoriesScreen />;
      case 'questions':
        return <QuestionsScreen />;
      case 'contact':
        return <ContactScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="app-container">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
          background-color: #f5f5f5;
        }
        
        .app-container {
          max-width: 480px;
          margin: 0 auto;
          background-color: white;
          min-height: 100vh;
          position: relative;
          color: #333;
        }
        
        /* Home Screen */
        .home-screen {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          min-height: 100vh;
          text-align: center;
          background: linear-gradient(135deg, ${colors.azul}10, ${colors.roxo}10);
        }
        
        .app-header {
          margin-top: 40px;
          margin-bottom: 40px;
        }
        
        .logo h1 {
          color: ${colors.azul};
          font-size: 28px;
          margin-bottom: 5px;
        }
        
        .logo h2 {
          color: ${colors.roxo};
          font-size: 18px;
          font-weight: normal;
        }
        
        .onboarding-slider {
          width: 100%;
          padding: 20px;
          margin-bottom: 40px;
        }
        
        .onboarding-slide {
          background-color: white;
          border-radius: 16px;
          padding: 30px 20px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .slide-icon {
          margin-bottom: 20px;
        }
        
        .icon-circle {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background-color: ${colors.azul};
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
        }
        
        .onboarding-slide h3 {
          font-size: 22px;
          margin-bottom: 12px;
          color: ${colors.azul};
        }
        
        .onboarding-slide p {
          color: #666;
          line-height: 1.5;
        }
        
        .primary-button {
          background-color: ${colors.azul};
          color: white;
          border: none;
          border-radius: 25px;
          padding: 16px 40px;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          width: 80%;
          margin-bottom: 30px;
          box-shadow: 0 4px 12px rgba(46, 91, 186, 0.2);
        }
        
        .footer-info {
          margin-top: auto;
          color: #666;
          font-size: 14px;
          line-height: 1.5;
          padding: 20px;
        }
        
        /* Categories Screen */
        .categories-screen {
          padding: 20px;
          padding-bottom: 80px;
          background: linear-gradient(135deg, ${colors.azul}05, ${colors.roxo}05);
        }
        
        .screen-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          padding: 10px 0;
        }
        
        .header-title h2 {
          color: ${colors.azul};
          font-size: 22px;
        }
        
        .back-button {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${colors.azul};
          cursor: pointer;
        }
        
        .user-welcome {
          margin-bottom: 25px;
        }
        
        .user-welcome h3 {
          font-size: 24px;
          margin-bottom: 5px;
          color: ${colors.azul};
        }
        
        .user-welcome p {
          color: #666;
        }
        
        .categories-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-bottom: 30px;
        }
        
        .category-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          background-color: white;
          padding: 20px 10px;
          border-radius: 12px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        
        .category-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        }
        
        .category-icon {
          width: 60px;
          height: 60px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 15px;
          color: white;
        }
        
        .category-item span {
          font-size: 14px;
          text-align: center;
          color: #333;
          font-weight: 500;
        }
        
        .contact-button {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: ${colors.verde};
          color: white;
          padding: 15px;
          border-radius: 10px;
          margin-top: 20px;
          cursor: pointer;
          box-shadow: 0 4px 8px rgba(0, 165, 140, 0.2);
        }
        
        .contact-icon {
          margin-right: 10px;
        }
        
        .navigation-bar {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          max-width: 480px;
          margin: 0 auto;
          display: flex;
          justify-content: space-around;
          background-color: white;
          padding: 12px 0;
          box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
          z-index: 100;
        }
        
        .nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #999;
          cursor: pointer;
          padding: 8px 12px;
          border-radius: 8px;
          flex: 1;
        }
        
        .nav-item.active {
          color: ${colors.azul};
          background-color: rgba(46, 91, 186, 0.1);
        }
        
        .nav-item span {
          font-size: 12px;
          margin-top: 4px;
        }
        
        /* Questions Screen */
        .questions-screen {
          padding: 20px;
          padding-bottom: 80px;
          background: linear-gradient(135deg, ${colors.azul}05, ${colors.roxo}05);
        }
        
        .questions-list {
          margin-bottom: 20px;
        }
        
        .faq-item {
          margin-bottom: 12px;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
          background-color: white;
        }
        
        .faq-question {
          padding: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          font-weight: 500;
          background-color: #f9f9ff;
          border-left: 4px solid ${colors.azul};
        }
        
        .faq-question.active {
          border-bottom: 1px solid #eee;
        }
        
        .faq-toggle {
          font-size: 20px;
          font-weight: bold;
        }
        
        .faq-answer {
          padding: 16px;
          line-height: 1.5;
          color: #333;
          background-color: white;
        }
        
        /* Contact Screen */
        .contact-screen {
          padding: 20px;
          padding-bottom: 80px;
          background: linear-gradient(135deg, ${colors.azul}05, ${colors.verde}05);
        }
        
        .contact-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        
        .contact-icon-large {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background-color: ${colors.verde};
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 20px auto;
          color: white;
        }
        
        .contact-content h3 {
          font-size: 22px;
          margin-bottom: 12px;
          color: ${colors.azul};
        }
        
        .contact-content p {
          color: #666;
          line-height: 1.5;
          margin-bottom: 30px;
        }
        
        .whatsapp-button {
          display: flex;
          align-items: center;
          background-color: ${colors.verde};
          color: white;
          padding: 15px 30px;
          border-radius: 25px;
          margin-bottom: 30px;
          text-decoration: none;
          width: 100%;
          max-width: 300px;
          box-shadow: 0 4px 8px rgba(0, 165, 140, 0.2);
        }
        
        .button-text {
          display: flex;
          flex-direction: column;
          margin-left: 15px;
        }
        
        .button-text div:first-child {
          font-size: 14px;
          opacity: 0.9;
        }
        
        .button-text div:last-child {
          font-size: 16px;
          font-weight: bold;
        }
        
        .other-links {
          width: 100%;
          margin-top: 20px;
        }
        
        .other-links h4 {
          margin-bottom: 15px;
          color: ${colors.azul};
        }
        
        .link-item {
          display: block;
          padding: 16px;
          margin-bottom: 10px;
          border-radius: 8px;
          background-color: #f5f5f5;
          text-decoration: none;
          color: ${colors.azul};
          text-align: left;
          font-weight: 500;
          border-left: 4px solid ${colors.roxo};
        }
      `}</style>
      {renderScreen()}
    </div>
  );
};

export default App;