const atividadesData = [
  {
    "execucao": "ERP",
    "area": "ESTOQUE",
    "subarea": "ATUALIZAÇÃO",
    "rotina": "Diário",
    "responsavel": "Automático",
    "atividade": "Atualização de Estoque Fornecedores com API"
  },
  {
    "execucao": "ERP",
    "area": "PREÇO",
    "subarea": "ATUALIZAÇÃO",
    "rotina": "Diário",
    "responsavel": "Automático",
    "atividade": "Atualização de Preços Fornecedores com API"
  },
  {
    "execucao": "ERP",
    "area": "PEDIDOS",
    "subarea": "OPERAÇÃO",
    "rotina": "Diário",
    "responsavel": "Automático",
    "atividade": "Atualizar Id Anymarket Tela de Transporte"
  },
  {
    "execucao": "ERP",
    "area": "PEDIDOS",
    "subarea": "OPERAÇÃO",
    "rotina": "Diário",
    "responsavel": "Automático",
    "atividade": "Corrigir Pedidos Prazo 30 / 30 Dias"
  },
  {
    "execucao": "ERP",
    "area": "PEDIDOS",
    "subarea": "OPERAÇÃO",
    "rotina": "Diário",
    "responsavel": "Automático",
    "atividade": "Corrigir Telefones E Ddd (Shopee)"
  },
  {
    "execucao": "ERP",
    "area": "PEDIDOS",
    "subarea": "OPERAÇÃO",
    "rotina": "Diário",
    "responsavel": "Automático",
    "atividade": "Faturamento Automático de Pedidos Para Expedição"
  },
  {
    "execucao": "ERP",
    "area": "PEDIDOS",
    "subarea": "OPERAÇÃO",
    "rotina": "Diário",
    "responsavel": "Automático",
    "atividade": "Importação de Pedidos Webhook"
  },
  {
    "execucao": "ATIV",
    "area": "MARKETPLACE",
    "subarea": "SAÚDE DAS LOJAS",
    "rotina": "Diário",
    "responsavel": "Automático",
    "atividade": "Métrica Dos Marketplaces"
  },
  {
    "execucao": "ATIV",
    "area": "MARKETPLACE",
    "subarea": "VENDAS",
    "rotina": "Diário",
    "responsavel": "Automático",
    "atividade": "Monitoramento Transmissões Quantidades"
  },
  {
    "execucao": "ERP",
    "area": "COMPRAS",
    "subarea": "FOLLOW-UP",
    "rotina": "Diário",
    "responsavel": "Alexandre",
    "atividade": "Follow-Up Geral de Ocs Não Finalizadas | OC Parcial"
  },
  {
    "execucao": "BOARD",
    "area": "COMPRAS",
    "subarea": "FOLLOW-UP",
    "rotina": "Diário",
    "responsavel": "Alexandre",
    "atividade": "Monitorar Entrada de Notas | Aba Recebida e Conferindo"
  },
  {
    "execucao": "BOARD",
    "area": "COMPRAS",
    "subarea": "FOLLOW-UP",
    "rotina": "Diário",
    "responsavel": "Alexandre",
    "atividade": "Trello Entrada Notas | Expedição | Problemas com Recebimentos"
  },
  {
    "execucao": "ERP",
    "area": "COMPRAS",
    "subarea": "FOLLOW-UP",
    "rotina": "Diário",
    "responsavel": "Alexandre",
    "atividade": "Tratativa de Pedidos Sem Estoque Para Troca"
  },
  {
    "execucao": "BOARD",
    "area": "COMPRAS",
    "subarea": "FOLLOW-UP",
    "rotina": "Periódico",
    "responsavel": "Alexandre",
    "atividade": "Retorno Verificar Pendências com Fornecedor"
  },
  {
    "execucao": "ERP",
    "area": "COMPRAS",
    "subarea": "FOLLOW-UP",
    "rotina": "Periódico",
    "responsavel": "Alexandre",
    "atividade": "Verificar RMA | Todas tratativas"
  },
  {
    "execucao": "ERP",
    "area": "PEDIDOS",
    "subarea": "FOLLOW-UP",
    "rotina": "Diário",
    "responsavel": "Alexandre",
    "atividade": "Conferência de Pedidos Cancelados na Tela de Transporte"
  },
  {
    "execucao": "ERP",
    "area": "PEDIDOS",
    "subarea": "FOLLOW-UP",
    "rotina": "Periódico",
    "responsavel": "Alexandre",
    "atividade": "Monitoramento Pedidos com Status Verificando"
  },
  {
    "execucao": "ATIV",
    "area": "PEDIDOS",
    "subarea": "FOLLOW-UP",
    "rotina": "Periódico",
    "responsavel": "Alexandre",
    "atividade": "Verificar Pedidos Antigos Sem Compra | OC"
  },
  {
    "execucao": "ERP",
    "area": "PEDIDOS",
    "subarea": "OPERAÇÃO",
    "rotina": "Diário",
    "responsavel": "Alexandre",
    "atividade": "Rotinas Pedidos"
  },
  {
    "execucao": "ATIV",
    "area": "VENDAS",
    "subarea": "ATENDIMENTO",
    "rotina": "Diário",
    "responsavel": "Alexandre",
    "atividade": "Atendimento Max Comprar Site"
  },
  {
    "execucao": "ATIV",
    "area": "VENDAS",
    "subarea": "ATENDIMENTO",
    "rotina": "Diário",
    "responsavel": "Alexandre",
    "atividade": "E-Mail Cotações de Compras | B2B"
  },
  {
    "execucao": "BOARD",
    "area": "CATÁLOGO",
    "subarea": "PUBLICAÇÃO",
    "rotina": "Periódico",
    "responsavel": "Bruno",
    "atividade": "Correção Transmissões Marketplaces"
  },
  {
    "execucao": "CARD",
    "area": "CATÁLOGO",
    "subarea": "PUBLICAÇÃO",
    "rotina": "Periódico",
    "responsavel": "Bruno",
    "atividade": "Atualização Bases Dados Power BI"
  },
  {
    "execucao": "BOARD",
    "area": "MARKETPLACE",
    "subarea": "CAMPANHAS",
    "rotina": "Periódico",
    "responsavel": "Bruno",
    "atividade": "Campanhas Marketplaces"
  },
  {
    "execucao": "ERP",
    "area": "MARKETPLACE",
    "subarea": "VENDAS",
    "rotina": "Diário",
    "responsavel": "Bruno",
    "atividade": "Forçar Triagem Manual em Produtos Vendidos <2 Estoque Liquido | 08H00"
  },
  {
    "execucao": "ERP",
    "area": "MARKETPLACE",
    "subarea": "VENDAS",
    "rotina": "Diário",
    "responsavel": "Bruno",
    "atividade": "Verificar Triagem Automática ME2 ME1"
  },
  {
    "execucao": "ATIV",
    "area": "MARKETPLACE",
    "subarea": "VENDAS",
    "rotina": "Periódico",
    "responsavel": "Bruno",
    "atividade": "Afiliados do Vendedor Shopee"
  },
  {
    "execucao": "CARD",
    "area": "MARKETPLACE",
    "subarea": "VENDAS",
    "rotina": "Periódico",
    "responsavel": "Bruno",
    "atividade": "Criar Disparos de Transmissões No Chat Mercado Livre Cupons"
  },
  {
    "execucao": "CARD",
    "area": "MARKETPLACE",
    "subarea": "VENDAS",
    "rotina": "Periódico",
    "responsavel": "Bruno",
    "atividade": "Criar Disparos de Transmissões No Chat Shopee Cupons"
  },
  {
    "execucao": "ERP",
    "area": "PEDIDOS",
    "subarea": "OPERAÇÃO",
    "rotina": "Periódico",
    "responsavel": "Bruno",
    "atividade": "Monitorar Aba Any Pedidos Falha"
  },
  {
    "execucao": "BOARD",
    "area": "PREÇO",
    "subarea": "PREÇO VENDA",
    "rotina": "Periódico",
    "responsavel": "Bruno",
    "atividade": "Atualizar Markups Marketplaces"
  },
  {
    "execucao": "ERP",
    "area": "PREÇO",
    "subarea": "PREÇO VENDA",
    "rotina": "Periódico",
    "responsavel": "Bruno",
    "atividade": "Verificar SKUs com Prejuízo | Dash BI Produtos Negativos | Pedidos Baixos"
  },
  {
    "execucao": "ATIV",
    "area": "VENDAS",
    "subarea": "ATENDIMENTO",
    "rotina": "Diário",
    "responsavel": "Bruno",
    "atividade": "Acompanhar Mensagens Facebook | Instragram"
  },
  {
    "execucao": "CARD",
    "area": "VENDAS",
    "subarea": "OPERAÇÃO",
    "rotina": "Diário",
    "responsavel": "Bruno",
    "atividade": "Painel de Monitoramento Any"
  },
  {
    "execucao": "ATIV",
    "area": "VENDAS",
    "subarea": "OPERAÇÃO",
    "rotina": "Periódico",
    "responsavel": "Bruno",
    "atividade": "Atualizar Metas do E-Commerce"
  },
  {
    "execucao": "CARD",
    "area": "VENDAS",
    "subarea": "OPERAÇÃO",
    "rotina": "Periódico",
    "responsavel": "Bruno",
    "atividade": "Monitoramento Pedidos Pendentes Antigos Anymarket"
  },
  {
    "execucao": "ATIV",
    "area": "VENDAS",
    "subarea": "SITE",
    "rotina": "Periódico",
    "responsavel": "Bruno",
    "atividade": "Alteração de Flags Promocionais"
  },
  {
    "execucao": "ATIV",
    "area": "VENDAS",
    "subarea": "SITE",
    "rotina": "Periódico",
    "responsavel": "Bruno",
    "atividade": "Atualizar Carrossel Site"
  },
  {
    "execucao": "BOARD",
    "area": "CATÁLOGO",
    "subarea": "MELHORIA DE ANÚNCIOS",
    "rotina": "Diário",
    "responsavel": "Jone",
    "atividade": "Correção Anúncios Trello"
  },
  {
    "execucao": "BOARD",
    "area": "CATÁLOGO",
    "subarea": "MELHORIA DE ANÚNCIOS",
    "rotina": "Diário",
    "responsavel": "Jone",
    "atividade": "Mercado Livre | Catálogo Próximos à serem pausados"
  },
  {
    "execucao": "CARD",
    "area": "CATÁLOGO",
    "subarea": "MELHORIA DE ANÚNCIOS",
    "rotina": "Periódico",
    "responsavel": "Jone",
    "atividade": "Melhoria Anúncios com 01 Imagem"
  },
  {
    "execucao": "BOARD",
    "area": "ESTOQUE",
    "subarea": "ATUALIZAÇÃO",
    "rotina": "Periódico",
    "responsavel": "Jone",
    "atividade": "Atualizar Estoque Tabela Fornecedores"
  },
  {
    "execucao": "ERP",
    "area": "ESTOQUE",
    "subarea": "ATUALIZAÇÃO",
    "rotina": "Periódico",
    "responsavel": "Jone",
    "atividade": "Zerar Estoques O.V.D com Datas Estoque Antiga | Maiores de 30 Dias"
  },
  {
    "execucao": "BOARD",
    "area": "ESTOQUE",
    "subarea": "CROSS",
    "rotina": "Diário",
    "responsavel": "Jone",
    "atividade": "Atualizar Cross Docking | Prazo de Despacho"
  },
  {
    "execucao": "CARD",
    "area": "ESTOQUE",
    "subarea": "OPERAÇÃO",
    "rotina": "Diário",
    "responsavel": "Jone",
    "atividade": "Atualizar Estoques Desatualizados (1x Ao Dia)"
  },
  {
    "execucao": "ERP",
    "area": "ESTOQUE",
    "subarea": "OPERAÇÃO",
    "rotina": "Diário",
    "responsavel": "Jone",
    "atividade": "Atualizar Estoques E Preços Hardness > Any 8H/11H/14H/17H"
  },
  {
    "execucao": "CARD",
    "area": "ESTOQUE",
    "subarea": "OPERAÇÃO",
    "rotina": "Diário",
    "responsavel": "Jone",
    "atividade": "Verificação de APIs | Data Processamento E Divergencia de Estoque"
  },
  {
    "execucao": "ERP",
    "area": "ESTOQUE",
    "subarea": "OPERAÇÃO",
    "rotina": "Periódico",
    "responsavel": "Jone",
    "atividade": "Conferir Bloqueio | Estoque na Tela de Any Estoque Preço | Campo Obs"
  },
  {
    "execucao": "ERP",
    "area": "ESTOQUE",
    "subarea": "OPERAÇÃO",
    "rotina": "Periódico",
    "responsavel": "Jone",
    "atividade": "Conferir Bloqueios Sistêmico (Campo Observação)"
  },
  {
    "execucao": "ERP",
    "area": "ESTOQUE",
    "subarea": "OPERAÇÃO",
    "rotina": "Periódico",
    "responsavel": "Jone",
    "atividade": "Conferir Produtos Bloqueados Hard com Estoque na Any | Campo Obs"
  },
  {
    "execucao": "CARD",
    "area": "MARKETPLACE",
    "subarea": "SAÚDE DAS LOJAS",
    "rotina": "Periódico",
    "responsavel": "Jone",
    "atividade": "Produtos em Violação Shopee"
  },
  {
    "execucao": "ERP",
    "area": "PREÇO",
    "subarea": "ATUALIZAÇÃO",
    "rotina": "Diário",
    "responsavel": "Jone",
    "atividade": "Conferir Preços Vazios E-Com/S | Tela Unificada"
  },
  {
    "execucao": "ERP",
    "area": "PREÇO",
    "subarea": "ATUALIZAÇÃO",
    "rotina": "Diário",
    "responsavel": "Jone",
    "atividade": "Conferir Preços/Custo/Estoque Zero | Tela Anymarket"
  },
  {
    "execucao": "BOARD",
    "area": "PREÇO",
    "subarea": "ATUALIZAÇÃO",
    "rotina": "Periódico",
    "responsavel": "Jone",
    "atividade": "Atualizar Preço Tabela Fornecedores"
  },
  {
    "execucao": "BOARD",
    "area": "CATÁLOGO",
    "subarea": "PUBLICAÇÃO",
    "rotina": "Periódico",
    "responsavel": "Lucas",
    "atividade": "Ativar Produtos Anymarket"
  },
  {
    "execucao": "ATIV",
    "area": "MARKETPLACE",
    "subarea": "ATENDIMENTO",
    "rotina": "Diário",
    "responsavel": "Lucas",
    "atividade": "Acompanhar Desempenho IA Shopee"
  },
  {
    "execucao": "CARD",
    "area": "MARKETPLACE",
    "subarea": "ATENDIMENTO",
    "rotina": "Diário",
    "responsavel": "Lucas",
    "atividade": "Perguntas Amazon"
  },
  {
    "execucao": "CARD",
    "area": "MARKETPLACE",
    "subarea": "ATENDIMENTO",
    "rotina": "Diário",
    "responsavel": "Lucas",
    "atividade": "Perguntas Magalu"
  },
  {
    "execucao": "CARD",
    "area": "MARKETPLACE",
    "subarea": "ATENDIMENTO",
    "rotina": "Diário",
    "responsavel": "Lucas",
    "atividade": "Perguntas Mercado Livre"
  },
  {
    "execucao": "CARD",
    "area": "MARKETPLACE",
    "subarea": "ATENDIMENTO",
    "rotina": "Diário",
    "responsavel": "Lucas",
    "atividade": "Perguntas Tiktok"
  },
  {
    "execucao": "ATIV",
    "area": "MARKETPLACE",
    "subarea": "SAÚDE DAS LOJAS",
    "rotina": "Diário",
    "responsavel": "Lucas",
    "atividade": "Análise de Reclamações do Meli"
  },
  {
    "execucao": "ERP",
    "area": "CATÁLOGO",
    "subarea": "MELHORIA DE ANÚNCIOS",
    "rotina": "Periódico",
    "responsavel": "Indefinido",
    "atividade": "Verificar Itens em Bloqueio E com Estoque Líquido"
  },
  {
    "execucao": "ERP",
    "area": "CATÁLOGO",
    "subarea": "PUBLICAÇÃO",
    "rotina": "Diário",
    "responsavel": "Indefinido",
    "atividade": "Publicação | Etapa Atributos Anymarket E Ativação de Anúncios"
  },
  {
    "execucao": "CARD",
    "area": "CATÁLOGO",
    "subarea": "PUBLICAÇÃO",
    "rotina": "Periódico",
    "responsavel": "Indefinido",
    "atividade": "Vincular Anúncios Catálogo Mercado Livre"
  },
  {
    "execucao": "ATIV",
    "area": "MARKETPLACE",
    "subarea": "FULL",
    "rotina": "Diário",
    "responsavel": "Indefinido",
    "atividade": "Gestão de Estoque Full Meli"
  },
  {
    "execucao": "ATIV",
    "area": "MARKETPLACE",
    "subarea": "FULL",
    "rotina": "Diário",
    "responsavel": "Indefinido",
    "atividade": "Métrica Estoque Full"
  },
  {
    "execucao": "ATIV",
    "area": "MARKETPLACE",
    "subarea": "FULL",
    "rotina": "Diário",
    "responsavel": "Indefinido",
    "atividade": "Produtos Aptos Fora de Venda"
  },
  {
    "execucao": "ATIV",
    "area": "MARKETPLACE",
    "subarea": "FULL",
    "rotina": "Diário",
    "responsavel": "Indefinido",
    "atividade": "Produtos com Mais de 30 Dias Sem Venda"
  },
  {
    "execucao": "ATIV",
    "area": "MARKETPLACE",
    "subarea": "FULL",
    "rotina": "Diário",
    "responsavel": "Indefinido",
    "atividade": "Criar Carga de Envios E Alinhar com Todos Os Setores"
  },
  {
    "execucao": "ATIV",
    "area": "MARKETPLACE",
    "subarea": "FULL",
    "rotina": "Periódico",
    "responsavel": "Indefinido",
    "atividade": "Cadastramento Fiscal Dos Produtos com Fiscal"
  },
  {
    "execucao": "ATIV",
    "area": "MARKETPLACE",
    "subarea": "FULL",
    "rotina": "Periódico",
    "responsavel": "Indefinido",
    "atividade": "Com Tempo de Estoque"
  },
  {
    "execucao": "ATIV",
    "area": "MARKETPLACE",
    "subarea": "FULL",
    "rotina": "Periódico",
    "responsavel": "Indefinido",
    "atividade": "Compras Full"
  },
  {
    "execucao": "ATIV",
    "area": "MARKETPLACE",
    "subarea": "FULL",
    "rotina": "Periódico",
    "responsavel": "Indefinido",
    "atividade": "Conferir Pedidos Full Meli"
  },
  {
    "execucao": "ATIV",
    "area": "MARKETPLACE",
    "subarea": "FULL",
    "rotina": "Periódico",
    "responsavel": "Indefinido",
    "atividade": "Confrontar Produtos com Erro de Id Shopee X Anymarket"
  },
  {
    "execucao": "ATIV",
    "area": "MARKETPLACE",
    "subarea": "FULL",
    "rotina": "Periódico",
    "responsavel": "Indefinido",
    "atividade": "Produtos Excedem A Projeção de Venda"
  },
  {
    "execucao": "ATIV",
    "area": "MARKETPLACE",
    "subarea": "FULL",
    "rotina": "Periódico",
    "responsavel": "Indefinido",
    "atividade": "Separar Produtos Para Envio Lista Interna"
  },
  {
    "execucao": "ATIV",
    "area": "MARKETPLACE",
    "subarea": "FULL",
    "rotina": "Periódico",
    "responsavel": "Indefinido",
    "atividade": "Transmissão Anúncios Pausados Produtos Full"
  },
  {
    "execucao": "ATIV",
    "area": "MARKETPLACE",
    "subarea": "FULL",
    "rotina": "Periódico",
    "responsavel": "Indefinido",
    "atividade": "Triagem | Analisar Anúncios E Produtos Para Inclusão"
  },
  {
    "execucao": "CARD",
    "area": "MARKETPLACE",
    "subarea": "PUBLICAÇÃO",
    "rotina": "Periódico",
    "responsavel": "Indefinido",
    "atividade": "Categorização Shopify"
  },
  {
    "execucao": "CARD",
    "area": "MARKETPLACE",
    "subarea": "PUBLICAÇÃO",
    "rotina": "Periódico",
    "responsavel": "Indefinido",
    "atividade": "Preenchimento Metacampos Seo Site"
  },
  {
    "execucao": "ATIV",
    "area": "MARKETPLACE",
    "subarea": "SAÚDE DAS LOJAS",
    "rotina": "Diário",
    "responsavel": "Indefinido",
    "atividade": "Análise E Enviar Recursos de Penalizações Shopee"
  },
  {
    "execucao": "CARD",
    "area": "MARKETPLACE",
    "subarea": "VENDAS",
    "rotina": "Periódico",
    "responsavel": "Indefinido",
    "atividade": "Criar Campanhas de Ofertas Relâmpago Shopee"
  },
  {
    "execucao": "CARD",
    "area": "MARKETPLACE",
    "subarea": "VENDAS",
    "rotina": "Periódico",
    "responsavel": "Indefinido",
    "atividade": "Criar Campanhas de Ofertas Relâmpago Tiktok Shop"
  }
];
