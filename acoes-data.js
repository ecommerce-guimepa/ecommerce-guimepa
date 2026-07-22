// Base gerada a partir de Ações(1).xlsx.
// Para incluir novas ações, mantenha os campos abaixo e use datas no formato YYYY-MM-DD.
const acoesData = [
  {
    "id": 1043,
    "inicio": "2026-07-17",
    "final": "2026-07-17",
    "acao": "TROCA DE ORÇAMENTO DIÁRIO - CAMPANHAS ADS MERCADO LIVRE",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 1042,
    "inicio": "2026-07-17",
    "final": "2026-07-17",
    "acao": "REMOÇÃO ITENS QUE SÓ GASTAM NÍVEL 4 ADS MERCADO LIVRE 5 MLB",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 1041,
    "inicio": "2026-07-17",
    "final": "2026-07-17",
    "acao": "REMOÇÃO ITENS QUE SÓ GASTAM NÍVEL 3 ADS MERCADO LIVRE 5 MLB",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 1040,
    "inicio": "2026-07-17",
    "final": "2026-07-17",
    "acao": "REMOÇÃO ITENS QUE SÓ GASTAM NÍVEL 2 ADS MERCADO LIVRE 4 MLB",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 1039,
    "inicio": "2026-07-17",
    "final": "2026-07-17",
    "acao": "REMOÇÃO ITENS QUE SÓ GASTAM NÍVEL 1 ADS MERCADO LIVRE 5 MLB",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 1038,
    "inicio": "2026-07-16",
    "final": "2026-07-16",
    "acao": "UNIÃO ESTOQUE NEGRÃO PR + SC",
    "local": "HARDNESS",
    "setor": "Vendas"
  },
  {
    "id": 1037,
    "inicio": "2026-07-14",
    "final": "2026-07-14",
    "acao": "CAMPANHA DA BOSCH COM DESCONTO MASTER COM EMB SUB",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 1036,
    "inicio": "2026-07-09",
    "final": "2026-07-09",
    "acao": "CAMPANHA GIRO ESTOQUE TABELA",
    "local": "HARDNESS",
    "setor": "Campanhas"
  },
  {
    "id": 1035,
    "inicio": "2026-07-07",
    "final": "2026-07-07",
    "acao": "CONTA SHOPEE GUIMEPA STORE LIBERADA",
    "local": "ANYMARKET",
    "setor": "Marketplaces"
  },
  {
    "id": 1034,
    "inicio": "2026-07-07",
    "final": "2026-07-07",
    "acao": "LISTA DE 19 SKUS COM PREÇOS NEGOCIADOS COM SHOPEE",
    "local": "ANYMARKET",
    "setor": "Campanhas"
  },
  {
    "id": 1033,
    "inicio": "2026-07-07",
    "final": "2026-07-07",
    "acao": "6% + 6% CAMPANHA NEGOCIADA LEROY MERLIN PARA JULHO",
    "local": "ANYMARKET",
    "setor": "Campanhas"
  },
  {
    "id": 1032,
    "inicio": "2026-07-07",
    "final": "2026-07-07",
    "acao": "AJUSTE MARKUP - 400 SKUS ADEQUAÇÃO POR FAIXA MAGALU GUIMEPA",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 1031,
    "inicio": "2026-07-07",
    "final": "2026-07-07",
    "acao": "VERIFICAÇÃO CONTA MAGALU GUIMEPA REATIVAÇÃO ITENS VONDER",
    "local": "ANYMARKET",
    "setor": "Marketplaces"
  },
  {
    "id": 1030,
    "inicio": "2026-06-26",
    "final": "2026-06-26",
    "acao": "ATIVAÇÃO ADS MERCADO LIVRE 4 CAMPANHAS",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 1029,
    "inicio": "2026-06-24",
    "final": "2026-06-24",
    "acao": "ATIVAÇÃO BOSCH COM IMPULSO DE 5%",
    "local": "FORNECEDORES",
    "setor": "Vendas"
  },
  {
    "id": 1028,
    "inicio": "2026-06-23",
    "final": "2026-06-23",
    "acao": "REDUÇÃO GERAL DE IPV",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 1027,
    "inicio": "2026-06-22",
    "final": "2026-06-22",
    "acao": "AUMENTO 5% MARKUP - SHOPEE",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 1026,
    "inicio": "2026-06-22",
    "final": "2026-06-22",
    "acao": "AUMENTO 5% MARKUP - LL LOYALTY",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 1025,
    "inicio": "2026-06-22",
    "final": "2026-06-22",
    "acao": "AUMENTO 5% MARKUP - WEB CONTINENTAL",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 1024,
    "inicio": "2026-06-18",
    "final": "2026-06-24",
    "acao": "ATUALIZAÇÃO TABELA BRASPRESS SC",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 1023,
    "inicio": "2026-06-17",
    "final": "2026-06-17",
    "acao": "REDUÇÃO 2% AMAZON - REATIVAÇÃO CONTA",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 1022,
    "inicio": "2026-06-16",
    "final": "2026-06-18",
    "acao": "AJUSTE TABELA DE FRETE AMAZON",
    "local": "MARKETPLACES",
    "setor": "Transportadoras"
  },
  {
    "id": 1021,
    "inicio": "2026-06-13",
    "final": "2026-06-13",
    "acao": "CONTA AMAZON REATIVADA",
    "local": "MARKETPLACES",
    "setor": "Marketplaces"
  },
  {
    "id": 1020,
    "inicio": "2026-06-10",
    "final": "2026-06-10",
    "acao": "ENCERRAMENTO TRAPP",
    "local": "FORNECEDORES",
    "setor": "Vendas"
  },
  {
    "id": 1019,
    "inicio": "2026-06-10",
    "final": "2026-06-10",
    "acao": "AUMENTO EM PRODUTOS DE 0 A 500",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 1018,
    "inicio": "2026-06-09",
    "final": "2026-06-18",
    "acao": "ATUALIZAÇÃO TABELA MAGALOG SC - REDUÇÃO DE ABRANGÊNCIA",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 1017,
    "inicio": "2026-06-03",
    "final": "2026-06-03",
    "acao": "CAMPANHA DE PRODUTOS PARADOS MAIS AGRESSIVA 15%",
    "local": "HARDNESS",
    "setor": "Campanhas"
  },
  {
    "id": 1016,
    "inicio": "2026-06-03",
    "final": "2026-06-03",
    "acao": "AJUSTE E PADRONIZAÇÃO DE IPVS POR FAIXAS",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 1015,
    "inicio": "2026-06-03",
    "final": "2026-06-03",
    "acao": "AUMENTO EM PRODUTOS BARATOS",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 1014,
    "inicio": "2026-06-02",
    "final": "2026-06-02",
    "acao": "AUMENTO TIKTOK 5% PARA ATIVAR AFILIADO DE 8%",
    "local": "MARKETPLACES",
    "setor": "Vendas"
  },
  {
    "id": 1013,
    "inicio": "2026-05-29",
    "final": "2026-05-29",
    "acao": "ATUALIZAÇÃO DEXPARA ANYMARKET - UNKNOWN EM TRANSPORTADORAS INATIVAS",
    "local": "ANYMARKET",
    "setor": "Transportadoras"
  },
  {
    "id": 1012,
    "inicio": "2026-05-26",
    "final": "2026-05-26",
    "acao": "BLOQUEIO DA LINHA DA TRADESTAR",
    "local": "FORNECEDORES",
    "setor": "Vendas"
  },
  {
    "id": 1011,
    "inicio": "2026-05-26",
    "final": "2026-05-26",
    "acao": "AUMENTO NOS PREÇOS GERAL DE 0,10 NO IPV",
    "local": "FORNECEDORES",
    "setor": "Preços"
  },
  {
    "id": 1010,
    "inicio": "2026-05-13",
    "final": "2026-05-22",
    "acao": "ATIVAÇÃO TABELA RPJ",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 1009,
    "inicio": "2026-05-12",
    "final": "2026-05-13",
    "acao": "ATUALIZAÇÃO TABELA RODONAVES SC",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 1008,
    "inicio": "2026-05-08",
    "final": "2026-05-11",
    "acao": "ATUALIZAÇÃO TABELA MAGALOG SC - REDUÇÃO DE ABRANGÊNCIA",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 1007,
    "inicio": "2026-05-08",
    "final": "2026-05-08",
    "acao": "MTX E TRAMONTINA - REDUÇÃO FAIXA ACIMA DE 100",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 1005,
    "inicio": "2026-05-07",
    "final": "2026-05-07",
    "acao": "MERCADO_LIVRE_REDUCAO 5% TODA LOJA GUIMEPA STORE",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 1004,
    "inicio": "2026-05-07",
    "final": "2026-05-07",
    "acao": "MERCADO_LIVRE_REDUCAO 3% LOJA TODA",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 1003,
    "inicio": "2026-05-07",
    "final": "2026-05-07",
    "acao": "MERCADO_LIVRE_REDUCAO 5% LOJA TODA",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 1002,
    "inicio": "2026-05-07",
    "final": "2026-05-07",
    "acao": "SHOPPING_LIVELO_ BRITANIA E TOYAMA",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 1001,
    "inicio": "2026-05-07",
    "final": "2026-05-07",
    "acao": "REDUÇÃO MARKUP OVD WEB CONTINENTAL",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 1000,
    "inicio": "2026-05-06",
    "final": "2026-05-06",
    "acao": "AJUSTE MARKUP LOJA MELI STORE - FORÇAR AINDA MAIS O PREÇO PARA PUXAR A LOJA",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 999,
    "inicio": "2026-05-06",
    "final": "2026-05-06",
    "acao": "AJUSTE MARKUP LOJA MELI DELTATOP - FORÇAR AINDA MAIS O PREÇO PARA PUXAR A LOJA",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 998,
    "inicio": "2026-05-04",
    "final": "2026-05-04",
    "acao": "AJUSTE REGRAS CROSS POR FAIXA DE PREÇO",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 1006,
    "inicio": "2026-04-28",
    "final": "2026-05-08",
    "acao": "ATUALIZAÇÃO TABELA LOGGI SC - AUMENTO DE ABRANGÊNCIA",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 997,
    "inicio": "2026-04-20",
    "final": "2026-04-24",
    "acao": "ATIVAÇÃO TABELA ORIGEM SC ALFA",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 996,
    "inicio": "2026-04-17",
    "final": "2026-04-17",
    "acao": "ATUALIZAÇÃO TABELA MAGALOG SC - REDUÇÃO DE ABRANGÊNCIA",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 995,
    "inicio": "2026-04-17",
    "final": "2026-04-17",
    "acao": "REDUÇÃO CROSS DOCKING TRAMONTINA 7>4 DIAS",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 994,
    "inicio": "2026-04-17",
    "final": "2026-04-17",
    "acao": "CAMPANHA TRADESTAR REDUÇÃO IPV",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 993,
    "inicio": "2026-04-17",
    "final": "2026-04-17",
    "acao": "CAMPANHA LYNUS REDUÇÃO IPV",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 992,
    "inicio": "2026-04-16",
    "final": "2026-04-16",
    "acao": "MIGRAÇÃO LOJA GUIMEPA SHOP PARA PRAZO DE DISPONIBILIDADE 2 DIAS",
    "local": "ANYMARKET",
    "setor": "Operações"
  },
  {
    "id": 991,
    "inicio": "2026-04-16",
    "final": "2026-04-16",
    "acao": "AJUSTE CROSS MTX 5>3 DIAS",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 990,
    "inicio": "2026-04-16",
    "final": "2026-04-16",
    "acao": "AJUSTE MARKUP AMAZON - AUMENTAR VOLUME - REDUÇÃO",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 989,
    "inicio": "2026-04-16",
    "final": "2026-04-16",
    "acao": "AJUSTE MARKUP SHOPEE - AUMENTAR VOLUME - REDUÇÃO",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 988,
    "inicio": "2026-04-15",
    "final": "2026-04-15",
    "acao": "AJUSTE MARKUP SHOPHUB - AUMENTAR VOLUME - REDUÇÃO",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 987,
    "inicio": "2026-04-15",
    "final": "2026-04-15",
    "acao": "AJUSTE MARKUP WEB CONTINENTAL - AUMENTAR VOLUME - REDUÇÃO",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 986,
    "inicio": "2026-04-15",
    "final": "2026-04-15",
    "acao": "AJUSTE MARKUP LL LOYALTY - AUMENTAR VOLUME - REDUÇÃO",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 985,
    "inicio": "2026-04-14",
    "final": "2026-04-17",
    "acao": "REGRAS DE REDUÇÃO DO ACRÉSCIMO % DE FRETE POR ESTADO NO MELI",
    "local": "INTELIPOST",
    "setor": "Preços"
  },
  {
    "id": 984,
    "inicio": "2026-04-14",
    "final": "2026-04-16",
    "acao": "REGRA DE CAMPANHA DE FRETE GRÁTIS SUL E SP;>R$ 1000;<7 KG",
    "local": "INTELIPOST",
    "setor": "Campanhas"
  },
  {
    "id": 983,
    "inicio": "2026-04-14",
    "final": "2026-04-14",
    "acao": "REATIVAÇÃO LOJA GUIMEPA SHOP MERCADOLIVRE",
    "local": "MARKETPLACES",
    "setor": "Vendas"
  },
  {
    "id": 982,
    "inicio": "2026-04-13",
    "final": "2026-04-13",
    "acao": "ALTERAÇÃO COTAÇÃO FRETE INTELIPOST MENOR PRAZO ATÉ 10% DE MARGEM",
    "local": "INTELIPOST",
    "setor": "Operações"
  },
  {
    "id": 981,
    "inicio": "2026-04-07",
    "final": "2026-04-07",
    "acao": "PMA NOVO BALMER - IPV MAIS AGRESSIVO 1,60",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 980,
    "inicio": "2026-04-03",
    "final": "2026-04-03",
    "acao": "PRIMEIRO PEDIDO RETOMADA LOJA MELI DELTATOP FERRAMENTAS",
    "local": "MARKETPLACES",
    "setor": "Vendas"
  },
  {
    "id": 979,
    "inicio": "2026-04-01",
    "final": "2026-04-13",
    "acao": "ATUALIZAÇÃO DA TABELA DE FRETE LOGGI ORIGEM SC NO INTELIPOST",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 978,
    "inicio": "2026-03-24",
    "final": "2026-04-08",
    "acao": "ATIVAÇÃO TABELA ORIGEM SC TECMAR",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 977,
    "inicio": "2026-03-18",
    "final": "2026-03-31",
    "acao": "ATUALIZAÇÃO DA TABELA DE FRETE MAGALOG ORIGEM SC NO INTELIPOST",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 976,
    "inicio": "2026-03-18",
    "final": "2026-03-18",
    "acao": "MARKUP SHOPEE - AJUSTE DE MARKUPS POR FAIXA - MARGEM",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 975,
    "inicio": "2026-03-18",
    "final": "2026-03-18",
    "acao": "MARKUP SHOPHUB - AJUSTE DE MARKUPS POR FAIXA - MARGEM",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 974,
    "inicio": "2026-03-18",
    "final": "2026-03-18",
    "acao": "MARKUP WEB CONTINENTAL - AJUSTE DE MARKUPS POR FAIXA - MARGEM",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 973,
    "inicio": "2026-03-18",
    "final": "2026-03-18",
    "acao": "MARKUP LL LOYALTY - AJUSTE DE MARKUPS POR FAIXA - MARGEM",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 972,
    "inicio": "2026-03-17",
    "final": "2026-03-17",
    "acao": "TABELA DE FRETE AMAZON REAJUSTADA PARA VOLUMES MENORES TAMBÉM",
    "local": "MARKETPLACES",
    "setor": "Operações"
  },
  {
    "id": 971,
    "inicio": "2026-03-16",
    "final": "2026-03-16",
    "acao": "AJUSTE MARKUP MAGALU LOJA GUIMEPA - TENTATIVA FINAL",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 970,
    "inicio": "2026-03-16",
    "final": "2026-03-16",
    "acao": "AJUSTE MARKUP SEM ADIÇÃO FRETE - DBA LOTE 02 + VOLUME",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 969,
    "inicio": "2026-03-16",
    "final": "2026-03-16",
    "acao": "DESLIGAMENTO LOJA MAGALU STORE - MAGALU ENTREGAS",
    "local": "MARKETPLACES",
    "setor": "Operações"
  },
  {
    "id": 968,
    "inicio": "2026-03-13",
    "final": "2026-03-13",
    "acao": "AJUSTE PRECOS ACIMA TICKET ALTO - REDUÇÕES DE ATÉ 3%",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 967,
    "inicio": "2026-03-13",
    "final": "2026-03-13",
    "acao": "MARKUP SEM ADIÇÃO DE FRETE - DBA",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 966,
    "inicio": "2026-03-13",
    "final": "2026-03-13",
    "acao": "SAÍDA PROGRAMA DBA - TESTE",
    "local": "MARKETPLACES",
    "setor": "Marketplaces"
  },
  {
    "id": 965,
    "inicio": "2026-03-12",
    "final": "2026-03-12",
    "acao": "DIVISÃO SETORES LIDERES EXPEDIÇÃO SC",
    "local": "EQUIPE",
    "setor": "Operações"
  },
  {
    "id": 961,
    "inicio": "2026-03-06",
    "final": "2026-03-06",
    "acao": "ALTERAÇÃO DE X PARA CORREIOS PARA UNKNOW NA ANYMARKET",
    "local": "ANYMARKET",
    "setor": "Transportadoras"
  },
  {
    "id": 963,
    "inicio": "2026-03-05",
    "final": "2026-03-05",
    "acao": "AJUSTE CROSS GERAL OUTRAS MARCAS - REDUÇÃO DESTRAVA FINANCEIRA",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 964,
    "inicio": "2026-03-02",
    "final": "2026-03-11",
    "acao": "ATUALIZAÇÃO DA TABELA DE FRETE LOGGI ORIGEM SC NO INTELIPOST",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 960,
    "inicio": "2026-03-02",
    "final": "2026-03-02",
    "acao": "AJUSTE CROSS TRAPP, BRITANIA E PRESTO +5 DIAS",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 959,
    "inicio": "2026-02-27",
    "final": "2026-02-27",
    "acao": "AUMENTO MARKUP SHOPEE - PRODUTOS COM TETO DE COMISSÃO QUE NAO EXISTE MAIS",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 958,
    "inicio": "2026-02-26",
    "final": "2026-02-26",
    "acao": "AJUSTE MARKUP MERCADLI LIVRE ME1 - TICKET ACIMA DE 50 -3%",
    "local": "MARKETPLACES",
    "setor": "Preços"
  },
  {
    "id": 957,
    "inicio": "2026-02-26",
    "final": "2026-02-26",
    "acao": "AUMENTO 5% MARKUP MERCADLI LIVRE ME1 - TICKET 0 a 50",
    "local": "MARKETPLACES",
    "setor": "Preços"
  },
  {
    "id": 956,
    "inicio": "2026-02-26",
    "final": "2026-02-26",
    "acao": "AJUSTE MARKUP MAGALU - 3 LOJAS TICKET ACIMA DE 200",
    "local": "MARKETPLACES",
    "setor": "Preços"
  },
  {
    "id": 955,
    "inicio": "2026-02-23",
    "final": "2026-02-23",
    "acao": "ATIVADO MERCADO LIVRE GUIMEPA STORE - RECURSO CONTA VERDE",
    "local": "MARKETPLACES",
    "setor": "Vendas"
  },
  {
    "id": 954,
    "inicio": "2026-02-23",
    "final": "2026-02-23",
    "acao": "AUMENTO TIKTOK 5% - TICKETS MENORES 25%",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 953,
    "inicio": "2026-02-12",
    "final": "2026-02-12",
    "acao": "AJUSTE CROSS MAKITA PRODUTOS BAIXO DE 200.00 17 > 12",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 952,
    "inicio": "2026-02-12",
    "final": "2026-02-12",
    "acao": "AJUSTE CROSS MAKITA PRODUTOS ACIMA DE 200.00 12 > 7",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 951,
    "inicio": "2026-02-10",
    "final": "2026-02-10",
    "acao": "AUMENTO MARKUP LL LOYALTY - FAIXA A BAIXO DE 100,00",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 950,
    "inicio": "2026-02-09",
    "final": "2026-02-09",
    "acao": "AJUSTE CROSS +5 DIAS FORNECEDORES AJUSTE FINANCEIRO",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 949,
    "inicio": "2026-02-04",
    "final": "2026-02-04",
    "acao": "AUMENTO MAGALU SHOP - GMK8 - MARGEM BAIXA",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 948,
    "inicio": "2026-02-04",
    "final": "2026-02-04",
    "acao": "AUMENTO OLIST - MARGEM BAIXA",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 947,
    "inicio": "2026-02-04",
    "final": "2026-02-04",
    "acao": "AUMENTO MAGALU STORE - MARGEM BAIXA",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 946,
    "inicio": "2026-02-03",
    "final": "2026-02-03",
    "acao": "CORREÇÃO - AUMENTO PRODUTOS MTX - TICKET A BAIXO DE 40",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 945,
    "inicio": "2026-01-28",
    "final": "2026-01-28",
    "acao": "AJUSTE VONDER - 170 PRODUTOS FAIXA TICKE ABAIXO DE 50 - REDUÇÃO DE 15% - IPV MENOR 1,80",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 944,
    "inicio": "2026-01-28",
    "final": "2026-01-28",
    "acao": "ENCERRAMENTO MADEIRA MADEIRA",
    "local": "MARKETPLACES",
    "setor": "Operações"
  },
  {
    "id": 943,
    "inicio": "2026-01-28",
    "final": "2026-01-28",
    "acao": "ENCERRAMENTO LOJA AMAZON GMK8",
    "local": "MARKETPLACES",
    "setor": "Operações"
  },
  {
    "id": 942,
    "inicio": "2026-01-28",
    "final": "2026-01-28",
    "acao": "AUMENTO CROSS TRAVA FINANCEIRO MAKITA",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 941,
    "inicio": "2026-01-26",
    "final": "2026-01-26",
    "acao": "AUMENTO CROSS TRAVA FINANCEIRO WAP , MAKITA , GARTHEN",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 940,
    "inicio": "2026-01-26",
    "final": "2026-01-26",
    "acao": "INICIO TESTE ATIVAÇÃO ME2 CROSS APENAS DURANTE O DIA",
    "local": "HARDNESS",
    "setor": "Vendas"
  },
  {
    "id": 939,
    "inicio": "2026-01-23",
    "final": "2026-01-23",
    "acao": "REDUÇÃO CROSS DOCKING LIBERAÇÃO FINANCEIRO",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 938,
    "inicio": "2026-01-20",
    "final": "2026-01-20",
    "acao": "CORREÇÃO MARGEM - AJUSTE DE IPVS 120 PRODUTOS DIMENSÃO ELEVADA TICKET A BAIXO DE 300,00",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 937,
    "inicio": "2026-01-20",
    "final": "2026-01-20",
    "acao": "CORREÇÃO MARGEM - AJUSTE DE IPVS 86 PRODUTOS PESADOS E TICKET A BAIXO DE 150",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 936,
    "inicio": "2026-01-16",
    "final": "2026-01-16",
    "acao": "AUMENTO MARKUP OLIST - CONTER MARGENS BAIXAS - TABELA DE FRETE MAIS CARO",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 935,
    "inicio": "2026-01-16",
    "final": "2026-01-16",
    "acao": "AUMENTO MARKUP LOJA MAGALU GUIMEPA STORE - MAGALU ENTREGAS",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 934,
    "inicio": "2026-01-15",
    "final": "2026-01-15",
    "acao": "AUMENTO IPV MAKITA 10%",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 933,
    "inicio": "2026-01-15",
    "final": "2026-01-15",
    "acao": "AUMENTO IPV MARCAS TRAVADAS 5%",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 932,
    "inicio": "2026-01-13",
    "final": "2026-01-13",
    "acao": "AUMENTO CROSSDOCKING MARCAS TRAVADAS FINANCEIRO",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 931,
    "inicio": "2026-01-08",
    "final": "2026-01-08",
    "acao": "ALTERAÇÃO TAB MAGALOG ID 709007 (AJUSTE PERCENTUAL GRISS/SEGURO)",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 930,
    "inicio": "2025-12-23",
    "final": "2025-12-23",
    "acao": "CHECKUP MARKUP AMAZON - TODAS AS CONTAS",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 929,
    "inicio": "2025-12-23",
    "final": "2025-12-23",
    "acao": "CHECKUP MARKUP LIVELO",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 928,
    "inicio": "2025-12-23",
    "final": "2025-12-23",
    "acao": "CHECKUP MARKUP WEB CONTINENTAL",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 927,
    "inicio": "2025-12-23",
    "final": "2025-12-23",
    "acao": "CHECKUP MARKUP SHOPHUB",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 926,
    "inicio": "2025-12-23",
    "final": "2025-12-23",
    "acao": "CHECKUP MARKUP LL LOYALTY",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 925,
    "inicio": "2025-12-23",
    "final": "2025-12-23",
    "acao": "CHECKUP MARKUP SHOPEE",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 924,
    "inicio": "2025-12-23",
    "final": "2025-12-23",
    "acao": "CHECKUP MARKUP MERCADO LIVRE - TODAS AS CONTAS",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 923,
    "inicio": "2025-12-23",
    "final": "2025-12-23",
    "acao": "CROSS REGRESSIVO LOTE REDUÇÃO",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 922,
    "inicio": "2025-12-17",
    "final": "2025-12-17",
    "acao": "INICIO CROSS REGRESSIVO PARALIZAÇÕES DE ALGUMAS MARCAS",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 901,
    "inicio": "2025-12-05",
    "final": "2025-12-05",
    "acao": "AJUSTE IPV BETA 1,78 PARA 1,73",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 900,
    "inicio": "2025-12-05",
    "final": "2025-12-05",
    "acao": "AJUSTE IPV BONEVAU 1,78 PARA 1,73",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 899,
    "inicio": "2025-12-05",
    "final": "2025-12-05",
    "acao": "AJUSTE IPV MODULATTO 1,78 PARA 1,73",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 898,
    "inicio": "2025-12-05",
    "final": "2025-12-05",
    "acao": "AJUSTE IPV NEGRAO 1,78 PARA 1,73",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 897,
    "inicio": "2025-12-05",
    "final": "2025-12-05",
    "acao": "AJUSTE IPV TEKNA 1,78 PARA 1,73",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 896,
    "inicio": "2025-12-05",
    "final": "2025-12-05",
    "acao": "AJUSTE IPV TOYAMA 1,78 PARA 1,73",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 895,
    "inicio": "2025-12-05",
    "final": "2025-12-05",
    "acao": "AJUSTE IPV CSM 1,78 PARA 1,73",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 894,
    "inicio": "2025-12-05",
    "final": "2025-12-05",
    "acao": "AJUSTE IPV TRAPP 1,78 PARA 1,73",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 893,
    "inicio": "2025-12-05",
    "final": "2025-12-05",
    "acao": "AJUSTE IPV BALMER 1,78 PARA 1,73",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 892,
    "inicio": "2025-12-05",
    "final": "2025-12-05",
    "acao": "AJUSTE IPV PRESTO 1,78 PARA 1,73",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 891,
    "inicio": "2025-12-05",
    "final": "2025-12-05",
    "acao": "AJUSTE IPV CCM 1,78 PARA 1,73",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 890,
    "inicio": "2025-12-05",
    "final": "2025-12-05",
    "acao": "AJUSTE IPV CHIAPERINI 1,78 PARA 1,73",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 889,
    "inicio": "2025-12-05",
    "final": "2025-12-05",
    "acao": "AJUSTE IPV BRANCO 1,78 PARA 1,73",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 888,
    "inicio": "2025-12-05",
    "final": "2025-12-05",
    "acao": "AJUSTE IPV GMEG 1,78 PARA 1,73",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 887,
    "inicio": "2025-12-05",
    "final": "2025-12-05",
    "acao": "AJUSTE IPV BUFFALO 1,78 PARA 1,73",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 886,
    "inicio": "2025-12-05",
    "final": "2025-12-05",
    "acao": "AJUSTE IPV LYNUS 1,78 PARA 1,73",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 885,
    "inicio": "2025-11-28",
    "final": "2025-11-28",
    "acao": "CAMPANHAS DE ESTOQUE PARADO MAIS AGRESSIVAS FDS BLACK",
    "local": "HARDNESS",
    "setor": "Campanhas"
  },
  {
    "id": 884,
    "inicio": "2025-11-27",
    "final": "2025-11-27",
    "acao": "531 PRODUTOS TICKET BAIXO A 1,60 VOLUME",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 883,
    "inicio": "2025-11-27",
    "final": "2025-11-27",
    "acao": "TRADESTAR 1,80 a 1,75 IPV AJUSTE - ACIMA DE 50",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 882,
    "inicio": "2025-11-26",
    "final": "2025-12-02",
    "acao": "ATUALIZAÇÃO TABELAS PR E SC BRASPRESS PARA RESTRINGIR PACOTES COM NO MÁXIMO 1,19 CM",
    "local": "INTELIPOST",
    "setor": "Operações"
  },
  {
    "id": 881,
    "inicio": "2025-11-26",
    "final": "2025-11-26",
    "acao": "FRETE GRATIS SC - ACIMA DE 300 - PESO MAXIMO 200 - CORREÇÃO 08h58 - REGRA ESTAVA COM BUG",
    "local": "INTELIPOST",
    "setor": "Operações"
  },
  {
    "id": 880,
    "inicio": "2025-11-26",
    "final": "2025-11-26",
    "acao": "TROCA DE TABELA RODONAVES ORIGEM PR",
    "local": "INTELIPOST",
    "setor": "Operações"
  },
  {
    "id": 879,
    "inicio": "2025-11-26",
    "final": "2025-11-26",
    "acao": "TROCA DE TABELA RODONAVES ORIGEM SC",
    "local": "INTELIPOST",
    "setor": "Operações"
  },
  {
    "id": 878,
    "inicio": "2025-11-25",
    "final": "2025-11-25",
    "acao": "AUMENTO CORREÇÃO MARGEM OLIST 0,05 - MARKUP LOJA TODA",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 877,
    "inicio": "2025-11-25",
    "final": "2025-11-25",
    "acao": "AUMENTO CORREÇÃO MARGEM DBA - 2 LOJAS 0,05 - MARKUP PRODUTOS ATE 22KG",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 876,
    "inicio": "2025-11-25",
    "final": "2025-11-25",
    "acao": "AUMENTO CORREÇÃO MARKUP BASE MERCADO ENVIOS 5% EM TODAS AS REGRAS",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 875,
    "inicio": "2025-11-24",
    "final": "2025-11-24",
    "acao": "FRETE GRATIS SC - ACIMA DE 300 - PESO MAXIMO 200",
    "local": "INTELIPOST",
    "setor": "Operações"
  },
  {
    "id": 874,
    "inicio": "2025-11-24",
    "final": "2025-11-24",
    "acao": "IPV 1,78 ITENS ACIMA DE 1000 - REDUCAO VOLUME - LOTE 2 AJUSTE FINAL",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 873,
    "inicio": "2025-11-24",
    "final": "2025-11-24",
    "acao": "IPV ITENS ACIMA MUITO BARATOS - REDUCAO VOLUME PADRÃO 1,80 PARA TODAS AS FAIXAS - 8.000 SKUS",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 872,
    "inicio": "2025-11-19",
    "final": "2025-12-04",
    "acao": "ATUALIZAÇÃO DA TABELA ORIGEM PR TNT FEDEX",
    "local": "INTELIPOST",
    "setor": "Operações"
  },
  {
    "id": 871,
    "inicio": "2025-11-19",
    "final": "2025-12-03",
    "acao": "ATUALIZAÇÃO DA TABELA ORIGEM SC TNT FEDEX",
    "local": "INTELIPOST",
    "setor": "Operações"
  },
  {
    "id": 870,
    "inicio": "2025-11-19",
    "final": "2025-11-19",
    "acao": "NOVOS IPV PADRÃO 1,80 - TODAS AS FAIXAS - REDUÇÃO REGRESSIVA DE 20% APENAS - 10.661 skus",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 869,
    "inicio": "2025-11-17",
    "final": "2025-11-17",
    "acao": "REAJUSTE TABELA GZLOG - TAXAS DIFAL POR ESTADO",
    "local": "INTELIPOST",
    "setor": "Preços"
  },
  {
    "id": 868,
    "inicio": "2025-11-17",
    "final": "2025-11-17",
    "acao": "REAJUSTE TABELA TNT - TAXAS DIFAL POR ESTADO",
    "local": "INTELIPOST",
    "setor": "Preços"
  },
  {
    "id": 867,
    "inicio": "2025-11-17",
    "final": "2025-11-17",
    "acao": "REAJUSTE TABELA RODONAVES - TAXAS DIFAL POR ESTADO",
    "local": "INTELIPOST",
    "setor": "Preços"
  },
  {
    "id": 866,
    "inicio": "2025-11-17",
    "final": "2025-11-17",
    "acao": "RECURSO CONTA PRINCIPAL VERDE CLARO",
    "local": "MARKETPLACES",
    "setor": "Vendas"
  },
  {
    "id": 865,
    "inicio": "2025-11-17",
    "final": "2025-11-17",
    "acao": "NOVAS CAMPANHAS DE ESTOQUE PARADO 10 A 30 DIAS - FAIXAS IPV 1,6 a 1,90 e 1,90 a 100",
    "local": "HARDNESS",
    "setor": "Campanhas"
  },
  {
    "id": 864,
    "inicio": "2025-11-14",
    "final": "2025-11-14",
    "acao": "REAJUSTE TABELA BRASPRESS - TAXAS DIFAL POR ESTADO",
    "local": "INTELIPOST",
    "setor": "Preços"
  },
  {
    "id": 863,
    "inicio": "2025-11-14",
    "final": "2025-11-14",
    "acao": "REAJUSTE TABELA MAGALOG - TAXAS DIFAL POR ESTADO",
    "local": "INTELIPOST",
    "setor": "Preços"
  },
  {
    "id": 862,
    "inicio": "2025-11-13",
    "final": "2025-11-13",
    "acao": "Menu de Cupons no site",
    "local": "SITE",
    "setor": "Shopify"
  },
  {
    "id": 861,
    "inicio": "2025-11-12",
    "final": "2025-11-12",
    "acao": "REAJUSTE TABELA LOGGI - TAXAS DIFAL POR ESTADO",
    "local": "INTELIPOST",
    "setor": "Preços"
  },
  {
    "id": 860,
    "inicio": "2025-11-12",
    "final": "2025-11-12",
    "acao": "AUMENTO IPV OVD - TODOS os produtos: 12.245 skus - Aumentos de 10% a 25% - DIFAL",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 859,
    "inicio": "2025-11-11",
    "final": "2025-11-11",
    "acao": "CORREÇÃO MARGEM - VIA VAREJO - 0 a 100 AUMENTO 10% - ACIMA 100 AUMENTO 5%",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 858,
    "inicio": "2025-11-11",
    "final": "2025-11-11",
    "acao": "AUMENTO TOTAL DE 10.887 PRODUTOS A BAIXO DE 100,00 FAIXAS DE 1% A 12% NO IPV",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 857,
    "inicio": "2025-11-11",
    "final": "2025-11-11",
    "acao": "AUMENTO DE 1% - 32 PRODUTOS NA FAIXA ABAIXO DE 100,00",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 856,
    "inicio": "2025-11-11",
    "final": "2025-11-11",
    "acao": "AUMENTO DE 2% - 98 PRODUTOS NA FAIXA ABAIXO DE 100,00",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 855,
    "inicio": "2025-11-11",
    "final": "2025-11-11",
    "acao": "AUMENTO DE 3% - 1788 PRODUTOS NA FAIXA ABAIXO DE 100,00",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 854,
    "inicio": "2025-11-11",
    "final": "2025-11-11",
    "acao": "AUMENTO DE 4% - 1311 PRODUTOS NA FAIXA ABAIXO DE 100,00",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 853,
    "inicio": "2025-11-11",
    "final": "2025-11-11",
    "acao": "AUMENTO DE 5% - 411 PRODUTOS NA FAIXA ABAIXO DE 100,00",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 852,
    "inicio": "2025-11-11",
    "final": "2025-11-11",
    "acao": "AUMENTO DE 6% - 380 PRODUTOS NA FAIXA ABAIXO DE 100,00",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 851,
    "inicio": "2025-11-11",
    "final": "2025-11-11",
    "acao": "AUMENTO DE 7% - 1379 PRODUTOS NA FAIXA ABAIXO DE 100,00",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 850,
    "inicio": "2025-11-11",
    "final": "2025-11-11",
    "acao": "AUMENTO DE 8% - 931 PRODUTOS NA FAIXA ABAIXO DE 100,00",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 849,
    "inicio": "2025-11-11",
    "final": "2025-11-11",
    "acao": "AUMENTO DE 9% - 994 PRODUTOS NA FAIXA ABAIXO DE 100,00",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 848,
    "inicio": "2025-11-11",
    "final": "2025-11-11",
    "acao": "AUMENTO DE 10% - 325 PRODUTOS NA FAIXA ABAIXO DE 100,00",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 847,
    "inicio": "2025-11-11",
    "final": "2025-11-11",
    "acao": "AUMENTO DE 11% - 3214 PRODUTOS NA FAIXA ABAIXO DE 100,00",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 846,
    "inicio": "2025-11-11",
    "final": "2025-11-11",
    "acao": "AUMENTO DE 12% - 24 PRODUTOS NA FAIXA ABAIXO DE 100,00",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 845,
    "inicio": "2025-11-11",
    "final": "2025-11-11",
    "acao": "CORREÇÃO MARGEM - WEB CONTINENTAL GUIMEPA SHOP - 0 a 100 AUMENTO 8% - ACIMA 100 AUMENTO 4%",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 844,
    "inicio": "2025-11-11",
    "final": "2025-11-11",
    "acao": "CORREÇÃO MARGEM - AMAZON LOJA GUIMEPA SHOP (GMK8) - 0 a 200 AUMENTO 15% - ACIMA 200 AUMENTO 5%",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 843,
    "inicio": "2025-11-11",
    "final": "2025-11-11",
    "acao": "CORREÇÃO MARGEM - AMAZON LOJA GUIMEPA - 0 a 200 AUMENTO 15% - ACIMA 200 AUMENTO 5%",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 921,
    "inicio": "2025-11-10",
    "final": "2025-11-25",
    "acao": "MENU NOVO COM PRODUTOS INTERATIVOS",
    "local": "SITE",
    "setor": "Vendas"
  },
  {
    "id": 842,
    "inicio": "2025-11-10",
    "final": "2025-11-10",
    "acao": "ENTRADA MAYKEL EQUIPE",
    "local": "EQUIPE",
    "setor": "Operações"
  },
  {
    "id": 841,
    "inicio": "2025-11-04",
    "final": "2025-11-04",
    "acao": "CAMPANHAS LOJA OLIST COPARTICIPADP 5+5 ou 7+5 ITENS BARATOS",
    "local": "MARKETPLACES",
    "setor": "Vendas"
  },
  {
    "id": 840,
    "inicio": "2025-11-03",
    "final": "2025-11-03",
    "acao": "CAMPANHAS MERCADO LIVRE",
    "local": "MARKETPLACES",
    "setor": "Vendas"
  },
  {
    "id": 839,
    "inicio": "2025-10-23",
    "final": "2025-10-23",
    "acao": "Faturamento Automático Ligado: Regras das 00:00 às 18h00 - AOS FINAIS DE SEMANA NAO",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 838,
    "inicio": "2025-10-22",
    "final": "2025-10-22",
    "acao": "PEQUENO AUMENTO MARKUP - AJUSTE MARKUP PRODUTOS TETO COMISSÃO 100,00",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 837,
    "inicio": "2025-10-15",
    "final": "2025-10-15",
    "acao": "TEKNA - REDUÇÃO IPV TICKET MAIORES PARA 1,50",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 836,
    "inicio": "2025-10-15",
    "final": "2025-10-15",
    "acao": "TRAPP - REDUÇÃO IPV TICKET MAIORES PARA 1,50",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 835,
    "inicio": "2025-10-15",
    "final": "2025-10-15",
    "acao": "BOVENAU - REDUÇÃO IPV TICKET MAIORES PARA 1,50",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 834,
    "inicio": "2025-10-15",
    "final": "2025-10-15",
    "acao": "LYNUS - REDUÇÃO IPV TICKET MAIORES PARA 1,50",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 833,
    "inicio": "2025-10-15",
    "final": "2025-10-15",
    "acao": "GMEG - REDUÇÃO IPV TICKET MAIORES PARA 1,50",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 832,
    "inicio": "2025-10-15",
    "final": "2025-10-15",
    "acao": "BALMER - REDUÇÃO IPV TICKET MAIORES PARA 1,50",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 831,
    "inicio": "2025-10-15",
    "final": "2025-10-15",
    "acao": "CSM - REDUÇÃO IPV TICKET MAIORES PARA 1,50",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 830,
    "inicio": "2025-10-15",
    "final": "2025-10-15",
    "acao": "CHIAPERINI - REDUÇÃO IPV TICKET MAIORES PARA 1,50",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 829,
    "inicio": "2025-10-15",
    "final": "2025-10-15",
    "acao": "BUFFALO - REDUÇÃO IPV TICKET MAIORES PARA 1,50",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 828,
    "inicio": "2025-10-15",
    "final": "2025-10-15",
    "acao": "BRANCO - REDUÇÃO IPV TICKET MAIORES PARA 1,50",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 827,
    "inicio": "2025-10-15",
    "final": "2025-10-15",
    "acao": "BETA - REDUÇÃO IPV TICKET MAIORES PARA 1,50",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 826,
    "inicio": "2025-10-15",
    "final": "2025-10-15",
    "acao": "BEL FIX - REDUÇÃO IPV TICKET MAIORES PARA 1,50",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 825,
    "inicio": "2025-10-15",
    "final": "2025-10-15",
    "acao": "MAGALU - COLOCAR OVD NA REGRA DE ACRESCIMO DE 3 DIAS PRAZO ADICIONAL",
    "local": "INTELIPOST",
    "setor": "Operações"
  },
  {
    "id": 824,
    "inicio": "2025-10-15",
    "final": "2025-10-15",
    "acao": "AUMENTO FAIXA ABAIXO DE 100 SHOPEE - TAXA FIXA",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 823,
    "inicio": "2025-10-14",
    "final": "2025-10-14",
    "acao": "RETORNO PARA 2 DIAS PRAZO DE DESPACHO PARA PRODUTOS COM ESTOQUE LIQUIDO",
    "local": "HARDNESS",
    "setor": "Vendas"
  },
  {
    "id": 822,
    "inicio": "2025-10-14",
    "final": "2025-10-14",
    "acao": "AMERICANAS ENCERRADA",
    "local": "MARKETPLACES",
    "setor": "Vendas"
  },
  {
    "id": 821,
    "inicio": "2025-10-13",
    "final": "2025-10-13",
    "acao": "TODAS AS TABELAS ATIVAS PADRONIZADOS COM 40% DE ACRESCIMO",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 820,
    "inicio": "2025-10-13",
    "final": "2025-10-13",
    "acao": "AUMENTO CROSS WAP 15 > 20 DIAS",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 819,
    "inicio": "2025-10-13",
    "final": "2025-10-13",
    "acao": "MAGALU PREÇOS DE POR CONFIGURADOS VIA ANYMARKET MARKUP MAIS ALTO REGRAS DE PREÇOS",
    "local": "ANYMARKET",
    "setor": "Marketplaces"
  },
  {
    "id": 818,
    "inicio": "2025-10-07",
    "final": "2025-10-07",
    "acao": "ACRESCIMO RODONAVES AJUSTADO 60% > 40%",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 817,
    "inicio": "2025-10-07",
    "final": "2025-10-07",
    "acao": "ACRESCIMO TNT AJUSTADO 40% > 30%",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 816,
    "inicio": "2025-10-07",
    "final": "2025-10-07",
    "acao": "LIGADO ACRESCIMO DE 30% MAGALOG",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 815,
    "inicio": "2025-10-07",
    "final": "2025-10-07",
    "acao": "ATIVAÇÃO LOJA OFICIAL VONDER - GUIMEPA SHOP MERCADO LIVRE",
    "local": "ANYMARKET",
    "setor": "Vendas"
  },
  {
    "id": 814,
    "inicio": "2025-10-03",
    "final": "2025-10-03",
    "acao": "AUMENTO DE ME2 CROSS CUSTO ACIMA 30,00 OVD",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 813,
    "inicio": "2025-10-02",
    "final": "2025-10-02",
    "acao": "PROBLEMA COM LOCAÇOES, CASO TENHAMOS ALGUM BO NO ESTOQUE",
    "local": "HARDNESS",
    "setor": "Melhorias"
  },
  {
    "id": 920,
    "inicio": "2025-09-30",
    "final": "2025-09-30",
    "acao": "ATIVACAO MAGALOG",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 812,
    "inicio": "2025-09-26",
    "final": "2025-09-26",
    "acao": "AUMENTO PRAZO CROSS WAP PROBLEMAS COM LOGISTICA TROCA DE CD 12>15",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 811,
    "inicio": "2025-09-17",
    "final": "2025-09-17",
    "acao": "ATIVADO 4 MIL SKUS ENVVIAS - CASAS BAHIA - OVD PRAZO 1 DIA",
    "local": "MARKETPLACES",
    "setor": "Vendas"
  },
  {
    "id": 810,
    "inicio": "2025-09-17",
    "final": "2025-09-17",
    "acao": "ATIVADO GZLOG NOVAMENTE OPERACAO",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 809,
    "inicio": "2025-09-05",
    "final": "2025-09-05",
    "acao": "Lançado Formulário de Cadastro Fornecedores",
    "local": "SITE",
    "setor": "Shopify"
  },
  {
    "id": 808,
    "inicio": "2025-09-05",
    "final": "2025-09-05",
    "acao": "REDUCAO ACRESCIMO BRASPRESS 70% > 60% - TABELA TROCADA COM VALORES",
    "local": "INTELIPOST",
    "setor": "Operações"
  },
  {
    "id": 807,
    "inicio": "2025-09-02",
    "final": "2025-09-02",
    "acao": "Ativar Cálculo de Frete no Carrinho",
    "local": "SITE",
    "setor": "Shopify"
  },
  {
    "id": 806,
    "inicio": "2025-09-02",
    "final": "2025-09-02",
    "acao": "INICIO ME2 CROSS",
    "local": "MARKETPLACES",
    "setor": "Vendas"
  },
  {
    "id": 805,
    "inicio": "2025-08-29",
    "final": "2025-08-29",
    "acao": "REDUÇÃO MARKUP - RETOMADA OLIST PRAZO DE 3 DIAS",
    "local": "MARKETPLACES",
    "setor": "Vendas"
  },
  {
    "id": 804,
    "inicio": "2025-08-29",
    "final": "2025-08-29",
    "acao": "AUMENTO ACRESCIMO BRASPRESS 60% > 70% - AUMENTO TABELA BRASPRESS",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 803,
    "inicio": "2025-08-28",
    "final": "2025-08-28",
    "acao": "GZ LOGISTICA - ATIVA TABELA",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 910,
    "inicio": "2025-08-21",
    "final": "2025-08-21",
    "acao": "51 PRODUTOS - PRIMEIRA REGRA DA WINNER BOX",
    "local": "PLATAFORMAS",
    "setor": "Preços"
  },
  {
    "id": 909,
    "inicio": "2025-08-18",
    "final": "2025-08-18",
    "acao": "REATIVACAO CNOVA - VIA VAREJO - ENNVIAS ESTOQUE LIQUIDO",
    "local": "MARKETPLACES",
    "setor": "Marketplaces"
  },
  {
    "id": 908,
    "inicio": "2025-08-18",
    "final": "2025-08-18",
    "acao": "AJUSTE MARKUP MAKITA",
    "local": "ANYMARKET",
    "setor": "Marketplaces"
  },
  {
    "id": 907,
    "inicio": "2025-08-18",
    "final": "2025-08-18",
    "acao": "AJUTE MARKUP POUCOS PRODUTOS BEL FIX",
    "local": "ANYMARKET",
    "setor": "Marketplaces"
  },
  {
    "id": 906,
    "inicio": "2025-08-15",
    "final": "2025-08-15",
    "acao": "Importar Produtos na Coleção de Promoções",
    "local": "SITE",
    "setor": "Shopify"
  },
  {
    "id": 905,
    "inicio": "2025-08-15",
    "final": "2025-08-15",
    "acao": "Incluído no Menu Superior opção Promoções",
    "local": "SITE",
    "setor": "Shopify"
  },
  {
    "id": 903,
    "inicio": "2025-08-14",
    "final": "2025-08-14",
    "acao": "Apontamento do e-mail lojavirtual@guimepa.com.br configurações CNAME",
    "local": "SITE",
    "setor": "Shopify"
  },
  {
    "id": 802,
    "inicio": "2025-08-11",
    "final": "2025-08-11",
    "acao": "Criado Coleção Máquinas para Jardinagem",
    "local": "SITE",
    "setor": "Coleções"
  },
  {
    "id": 801,
    "inicio": "2025-08-11",
    "final": "2025-08-11",
    "acao": "BOVENAU AUMENTO AJUSTE CROSS DE 8>12 DIAS",
    "local": "FORNECEDORES",
    "setor": "Operações"
  },
  {
    "id": 800,
    "inicio": "2025-08-11",
    "final": "2025-08-11",
    "acao": "TRAPP AUMENTO AJUSTE CROSS DE 9>14 DIAS",
    "local": "FORNECEDORES",
    "setor": "Operações"
  },
  {
    "id": 799,
    "inicio": "2025-08-11",
    "final": "2025-08-11",
    "acao": "TEKNA REDUCAO AJUSTE CROSS DE 4>3 DIAS",
    "local": "FORNECEDORES",
    "setor": "Operações"
  },
  {
    "id": 798,
    "inicio": "2025-08-11",
    "final": "2025-08-11",
    "acao": "BUFFALO REDUCAO AJUSTE CROSS DE 4>3 DIAS",
    "local": "FORNECEDORES",
    "setor": "Operações"
  },
  {
    "id": 797,
    "inicio": "2025-08-11",
    "final": "2025-08-11",
    "acao": "BRITANIA/PHILCO REDUCAO AJUSTE CROSS DE 15>8 DIAS",
    "local": "FORNECEDORES",
    "setor": "Operações"
  },
  {
    "id": 796,
    "inicio": "2025-08-11",
    "final": "2025-08-11",
    "acao": "WAP REDUCAO AJUSTE CROSS DE 18>12 DIAS",
    "local": "FORNECEDORES",
    "setor": "Operações"
  },
  {
    "id": 795,
    "inicio": "2025-08-11",
    "final": "2025-08-11",
    "acao": "CSM REDUCAO AJUSTE CROSS DE 4>3 DIAS",
    "local": "FORNECEDORES",
    "setor": "Operações"
  },
  {
    "id": 794,
    "inicio": "2025-08-11",
    "final": "2025-08-11",
    "acao": "LYNUS REDUCAO AJUSTE CROSS DE 4>3 DIAS",
    "local": "FORNECEDORES",
    "setor": "Operações"
  },
  {
    "id": 793,
    "inicio": "2025-08-11",
    "final": "2025-08-11",
    "acao": "GARTHEN REDUCAO AJUSTE CROSS DE 4>3 DIAS",
    "local": "FORNECEDORES",
    "setor": "Operações"
  },
  {
    "id": 792,
    "inicio": "2025-08-11",
    "final": "2025-08-11",
    "acao": "TOYAMA REDUCAO AJUSTE CROSS DE 5>3 DIAS",
    "local": "FORNECEDORES",
    "setor": "Operações"
  },
  {
    "id": 791,
    "inicio": "2025-08-11",
    "final": "2025-08-11",
    "acao": "MAKITA REDUCAO AJUSTE CROSS DE 6>4 DIAS",
    "local": "FORNECEDORES",
    "setor": "Operações"
  },
  {
    "id": 790,
    "inicio": "2025-08-11",
    "final": "2025-08-11",
    "acao": "CHIAPERINI REDUCAO AJUSTE CROSS DE 7>5 DIAS",
    "local": "FORNECEDORES",
    "setor": "Operações"
  },
  {
    "id": 789,
    "inicio": "2025-08-11",
    "final": "2025-08-11",
    "acao": "BRANCO REDUCAO AJUSTE CROSS DE 6>3 DIAS",
    "local": "FORNECEDORES",
    "setor": "Operações"
  },
  {
    "id": 788,
    "inicio": "2025-08-11",
    "final": "2025-08-11",
    "acao": "BALMER REDUCAO AJUSTE CROSS DE 8>3 DIAS",
    "local": "FORNECEDORES",
    "setor": "Operações"
  },
  {
    "id": 787,
    "inicio": "2025-08-08",
    "final": "2025-08-08",
    "acao": "Plugado Pinterest",
    "local": "SITE",
    "setor": "Aplicativos"
  },
  {
    "id": 786,
    "inicio": "2025-07-29",
    "final": "2025-07-29",
    "acao": "Label Cupom Dia dos Pais",
    "local": "SITE",
    "setor": "Label"
  },
  {
    "id": 785,
    "inicio": "2025-07-29",
    "final": "2025-07-29",
    "acao": "Label Cupom Makita",
    "local": "SITE",
    "setor": "Label"
  },
  {
    "id": 784,
    "inicio": "2025-07-29",
    "final": "2025-07-29",
    "acao": "Lably - Etiqueta e Sticker nos produtos e home",
    "local": "SITE",
    "setor": "Aplicativos"
  },
  {
    "id": 919,
    "inicio": "2025-07-25",
    "final": "2025-07-25",
    "acao": "REVISÃO E AJUSTE IPVS BEL FIX - FAIXAS DE PREÇO",
    "local": "FORNECEDORES",
    "setor": "Preços"
  },
  {
    "id": 918,
    "inicio": "2025-07-25",
    "final": "2025-07-25",
    "acao": "NOVO AJUSTE CCM PARA REATIVAÇÃO",
    "local": "FORNECEDORES",
    "setor": "Preços"
  },
  {
    "id": 917,
    "inicio": "2025-07-25",
    "final": "2025-07-25",
    "acao": "LOJA AMAZON GMK8 DBA DESPACHO 0 DIAS - ATIVO",
    "local": "MARKETPLACES",
    "setor": "Operações"
  },
  {
    "id": 916,
    "inicio": "2025-07-24",
    "final": "2025-07-24",
    "acao": "LOJA DA WEB CONTINENTAL DESLIGADA TEMPORARIAMENTE",
    "local": "MARKETPLACES",
    "setor": "Operações"
  },
  {
    "id": 915,
    "inicio": "2025-07-23",
    "final": "2025-07-23",
    "acao": "AUMENTO AMAZON GUIMEPA - GMK8 - TICKET BAIXO - MARGEM BAIXA",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 914,
    "inicio": "2025-07-23",
    "final": "2025-07-23",
    "acao": "AJUSTE SHOPEE PRODUTOS BARATOS - TAXAS FIXAS",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 913,
    "inicio": "2025-07-22",
    "final": "2025-07-22",
    "acao": "INATIVAÇÃO LOJA MAGALU DELTATOP",
    "local": "MARKETPLACES",
    "setor": "Operações"
  },
  {
    "id": 912,
    "inicio": "2025-07-22",
    "final": "2025-07-22",
    "acao": "INATIVAÇÃO LOJA AMAZON DELTATOP",
    "local": "MARKETPLACES",
    "setor": "Operações"
  },
  {
    "id": 911,
    "inicio": "2025-07-22",
    "final": "2025-07-22",
    "acao": "AUMENTO OLIST NOTA BAIXA - ATÉ MELHORIA DE 3 DIAS DE DESPACHO",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 904,
    "inicio": "2025-07-15",
    "final": "2025-07-15",
    "acao": "REATIVAÇÃO CMB",
    "local": "FORNECEDORES",
    "setor": "Vendas"
  },
  {
    "id": 902,
    "inicio": "2025-07-14",
    "final": "2025-07-14",
    "acao": "REATIVAÇÃO CCM",
    "local": "FORNECEDORES",
    "setor": "Vendas"
  },
  {
    "id": 783,
    "inicio": "2025-07-11",
    "final": "2025-07-11",
    "acao": "RETORNO A PLATINUM",
    "local": "MARKETPLACES",
    "setor": "Vendas"
  },
  {
    "id": 782,
    "inicio": "2025-07-11",
    "final": "2025-07-11",
    "acao": "AJUSTE CROSS NORDTECH 5 > 4 DIAS",
    "local": "FORNECEDORES",
    "setor": "Operações"
  },
  {
    "id": 781,
    "inicio": "2025-07-11",
    "final": "2025-07-11",
    "acao": "AJUSTE CROSS GMEG de 5 > 4 DIAS",
    "local": "FORNECEDORES",
    "setor": "Operações"
  },
  {
    "id": 780,
    "inicio": "2025-07-11",
    "final": "2025-07-11",
    "acao": "AJUSTE CROSS LYNUS de 6 > 4 DIAS",
    "local": "FORNECEDORES",
    "setor": "Operações"
  },
  {
    "id": 779,
    "inicio": "2025-07-11",
    "final": "2025-07-11",
    "acao": "AJUSTE CROSS BUFFALO PRODUTOS ACIMA DE 200.00 6 > 4",
    "local": "FORNECEDORES",
    "setor": "Operações"
  },
  {
    "id": 778,
    "inicio": "2025-07-11",
    "final": "2025-07-11",
    "acao": "AJUSTE CROSS MAKITA PRODUTOS ACIMA DE 200.00 8 > 6",
    "local": "FORNECEDORES",
    "setor": "Operações"
  },
  {
    "id": 777,
    "inicio": "2025-07-09",
    "final": "2025-07-09",
    "acao": "AUMENTO IPV FAIXA ATÉ 50.00",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 776,
    "inicio": "2025-07-04",
    "final": "2025-07-04",
    "acao": "AUMENTO IPV FAIXA 30.00",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 775,
    "inicio": "2025-07-01",
    "final": "2025-07-01",
    "acao": "TABELA NOVA DE FRETES NATIVA",
    "local": "INTELIPOST",
    "setor": "Operações"
  },
  {
    "id": 774,
    "inicio": "2025-06-30",
    "final": "2025-06-30",
    "acao": "REATIVAÇÃO E ACRESCIMO TNT INSERIDO EM 40%",
    "local": "INTELIPOST",
    "setor": "Operações"
  },
  {
    "id": 770,
    "inicio": "2025-06-27",
    "final": "2025-06-27",
    "acao": "Revisão dos IPVs Gerais + TICKET BAIXO",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 769,
    "inicio": "2025-06-27",
    "final": "2025-06-27",
    "acao": "PRIMEIRA VENDA SITE NOVO SHOPIFY",
    "local": "HARDNESS",
    "setor": "Vendas"
  },
  {
    "id": 767,
    "inicio": "2025-06-25",
    "final": "2025-06-25",
    "acao": "MIGRAÇÃO DO SITE PARA SHOPIFY",
    "local": "PLATAFORMAS",
    "setor": "Vendas"
  },
  {
    "id": 755,
    "inicio": "2025-06-18",
    "final": "2025-06-18",
    "acao": "MARKUP SENFF_SHOPPING_MARKUP-NOVO 1,05 PARA LOJA TODA",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 754,
    "inicio": "2025-06-18",
    "final": "2025-06-18",
    "acao": "SHOPHUB MARKUP TICKET BAIXO - 1,03 acima 200 - 1,04 100 a 200 - 1,07 50 a 100 - 1,10 0 a 50",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 753,
    "inicio": "2025-06-18",
    "final": "2025-06-18",
    "acao": "MAKUP AMAZON 3 LOJAS - TICKET A BAIXO DE 80.00 - 0,08 + 4,50 Frete DBA 0 a 30 - 0,08 + 8,00 Frete DBA 30 a 80 - 0,05 + Taxa Frete DBA acima 80",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 750,
    "inicio": "2025-06-17",
    "final": "2025-06-17",
    "acao": "REFORMULAÇÃO DOS MARKUPS SHOPEE TETO 100.00 DE COMISSÃO",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 746,
    "inicio": "2025-06-17",
    "final": "2025-06-17",
    "acao": "AJUSTE PRECOS ANUNCIOS NO FULL MUITO TEMPO PARADO GERANDO CUSTO",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 745,
    "inicio": "2025-06-12",
    "final": "2025-06-12",
    "acao": "LIVELO NOVA FAIXA DE MARKUPS 1,03 acima 200 - 1,05 20 a 200 - 1,15 0 a 20",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 744,
    "inicio": "2025-06-12",
    "final": "2025-06-12",
    "acao": "MERCADO LIVRE GUIMEPA SHOP - TAXAS MAIS COMPETITIVAS",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 743,
    "inicio": "2025-06-12",
    "final": "2025-06-12",
    "acao": "OLIST MARKUP - AJUSTE TABELA DE TAXA DE FRETE NIVEL 50% DE DESCONTO",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 742,
    "inicio": "2025-06-11",
    "final": "2025-06-11",
    "acao": "REATIVAÇÃO TODAS AS MARCAS LOJA OFICIAL SHOPEE GUIMEPA",
    "local": "MARKETPLACES",
    "setor": "Vendas"
  },
  {
    "id": 741,
    "inicio": "2025-06-11",
    "final": "2025-06-11",
    "acao": "AJUSTE ACRESCIMO RODONAVES 90% PARA 60%",
    "local": "INTELIPOST",
    "setor": "Operações"
  },
  {
    "id": 740,
    "inicio": "2025-06-11",
    "final": "2025-06-11",
    "acao": "Reativação RODONAVES - Tabela SC e PR",
    "local": "INTELIPOST",
    "setor": "Operações"
  },
  {
    "id": 739,
    "inicio": "2025-06-10",
    "final": "2025-06-10",
    "acao": "ALTERAÇÃO PRAZO CROSS DOCKING LOCAL DE ESTOQUE SC - TAB+LIQ",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 738,
    "inicio": "2025-06-10",
    "final": "2025-06-10",
    "acao": "AMAZON_GLOBAL_API 3 LOJAS MARKUP - AUMENTO FAIXAS MAIORES - AJUSTE FAIXAS SEM DBA",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 737,
    "inicio": "2025-06-09",
    "final": "2025-06-09",
    "acao": "WEB CONTINENTAL - 1,07 acima 1000 - 1,10 80 a 200 - 1,15 20 a 80 - 1,18 0 a 20",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 736,
    "inicio": "2025-06-09",
    "final": "2025-06-09",
    "acao": "SHOPHUB MARKUP - 1,03 acima 200 - 1,05 80 a 200 - 1,10 20 a 80 - 1,15 0 a 20",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 735,
    "inicio": "2025-06-09",
    "final": "2025-06-09",
    "acao": "LOJA DO MECANICO MARKUP - 1,05 acima 200 - - 1,10 30 a 200 - 1,30 0 a 30",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 734,
    "inicio": "2025-06-09",
    "final": "2025-06-09",
    "acao": "MADEIRA MADEIRA MARKUP - 1,05 acima 200 - 1,08 50 a 200 - 1,12 20 a 50 - abaixo 20 por SKU",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 733,
    "inicio": "2025-06-09",
    "final": "2025-06-09",
    "acao": "LEROY MERLIN MARKUP - 1,05 acima 200 - 1,10 30 a 200 - 1,30 0 a 30",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 732,
    "inicio": "2025-06-06",
    "final": "2025-06-06",
    "acao": "MAGALU 3 LOJAS - FAIXA MAIS COMPETITIVA 1,07 acima 1000 - 1,09 80 a 1000 - 1,15 50 a 80 - 1,20 20 a 50 - 1,25 0 a 20",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 731,
    "inicio": "2025-06-06",
    "final": "2025-06-06",
    "acao": "SHOPEE GUIMEPA AJUSTE MARKUP - PRIMEIRA FASE + ATRATIVO",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 730,
    "inicio": "2025-06-06",
    "final": "2025-06-06",
    "acao": "ME2 - AJUSTE DOS MARKUPS PADRÃO",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 729,
    "inicio": "2025-06-06",
    "final": "2025-06-06",
    "acao": "ME1 - MERCADO_LIVRE_ IMPULSAO LOJA AMARELA - REFORMULAÇÃO DE MARKUP MINIMO 1.04 CLASSICO e 1.07 PREMIUM + TAXAS MINIMAS FAIXA ABAIXO DE 80.00 - ME2 É CALCULADO PELO SISTEMA",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 771,
    "inicio": "2025-05-28",
    "final": "2025-05-28",
    "acao": "REDUÇÃO GERAL DE IPV DE 3%",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 764,
    "inicio": "2025-05-23",
    "final": "2025-05-23",
    "acao": "REDUÇÃO GERAL DE IPV DE 5%",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 728,
    "inicio": "2025-05-05",
    "final": "2025-05-05",
    "acao": "AJUSTE MARKUP MAGALU DELTATOP E GUIMEPA - MAIO TAXA FIXA 5",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 727,
    "inicio": "2025-05-05",
    "final": "2025-05-05",
    "acao": "AJUSTE MARKUP MAGALU GMK8 - MAIO TAXA FIXA 5",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 773,
    "inicio": "2025-04-29",
    "final": "2025-04-29",
    "acao": "AJUSTE Markup GUIMEPA SC - Ajuste ESTOQUE LIQUIDO SC",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 772,
    "inicio": "2025-04-29",
    "final": "2025-04-29",
    "acao": "FAIXA ACIMA 1 MIL - NOVO IPV - 1,60",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 763,
    "inicio": "2025-04-23",
    "final": "2025-04-23",
    "acao": "ATUAL CARGAS PAUSADA",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 762,
    "inicio": "2025-04-22",
    "final": "2025-04-22",
    "acao": "REDUÇÃO DE MARKUP MAGALU 3 LOJAS - AJUSTES E PEQUENAS REDUÇÕES",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 749,
    "inicio": "2025-04-14",
    "final": "2025-04-14",
    "acao": "AJUSTE MARKUP BASE PREMIUM 1.12 para 1.10",
    "local": "ANYMARKET",
    "setor": "Marketplaces"
  },
  {
    "id": 748,
    "inicio": "2025-04-14",
    "final": "2025-04-14",
    "acao": "AJUSTE MARKUP BASE CLÁSSICO 1.07 para 1.05",
    "local": "ANYMARKET",
    "setor": "Marketplaces"
  },
  {
    "id": 747,
    "inicio": "2025-04-14",
    "final": "2025-04-14",
    "acao": "AUMENTO OLIST + MARGEM E TAXA FRETE",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 726,
    "inicio": "2025-04-09",
    "final": "2025-04-09",
    "acao": "SEPARAÇÃO DE ESTOQUE - ESTOQUE SC CUSTO AMAZON 3 LOJAS DBA",
    "local": "ANYMARKET",
    "setor": "Operações"
  },
  {
    "id": 725,
    "inicio": "2025-04-08",
    "final": "2025-04-08",
    "acao": "TABELA NOVA DE FRETES LOGGI",
    "local": "INTELIPOST",
    "setor": "Preços"
  },
  {
    "id": 724,
    "inicio": "2025-04-08",
    "final": "2025-04-08",
    "acao": "AJUSTE COTAÇÃO LOGGI FATOR DE CUBAGEM 100% CORRETO E LIMITES POR PESO CUBADO",
    "local": "INTELIPOST",
    "setor": "Operações"
  },
  {
    "id": 723,
    "inicio": "2025-04-03",
    "final": "2025-04-03",
    "acao": "SEPARAÇÃO DE ESTOQUE - CUSTO - ESTOQUE SC - LOJAS MELI GUIMEPA SC, B2W DELTATOP, SHOPEE GUIMEPA SHOP",
    "local": "ANYMARKET",
    "setor": "Operações"
  },
  {
    "id": 722,
    "inicio": "2025-04-03",
    "final": "2025-04-03",
    "acao": "SEPARAÇÃO DE ESTOQUE - CUSTO - ESTOQUE PR - MAGAZINE_LUIZA_2 LOJAS PARANA",
    "local": "ANYMARKET",
    "setor": "Operações"
  },
  {
    "id": 721,
    "inicio": "2025-04-03",
    "final": "2025-04-03",
    "acao": "SEPARAÇÃO DE ESTOQUE - ESTOQUE SC LOJA OLIST",
    "local": "ANYMARKET",
    "setor": "Operações"
  },
  {
    "id": 720,
    "inicio": "2025-04-03",
    "final": "2025-04-03",
    "acao": "FRETE GRÁTIS SHOPEE DESATIVADO - NOVA COMISSÃO 14%",
    "local": "MARKETPLACES",
    "setor": "Vendas"
  },
  {
    "id": 719,
    "inicio": "2025-04-03",
    "final": "2025-04-03",
    "acao": "AUMENTO - SHOPEE_ FAIXAS ABAIXO DE 500 - AJUTE MARKUP QUE ESTAVAM MAIS ALTO MAIS ATRATIVO FAIXA ACIMA de 500 - NOVA COMISSÃO DE 14%",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 718,
    "inicio": "2025-04-02",
    "final": "2025-04-02",
    "acao": "AUMENTO TAXA FRETE - AMAZON_GLOBAL_API GMK8",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 717,
    "inicio": "2025-04-02",
    "final": "2025-04-02",
    "acao": "5% SHOPEE TETO COMISSÃO FAIXA 700 a 1000 mil",
    "local": "ANYMARKET",
    "setor": "Campanhas"
  },
  {
    "id": 716,
    "inicio": "2025-04-02",
    "final": "2025-04-02",
    "acao": "3% SHOPEE TETO COMISSÃO FAIXA 526 a 700 mil",
    "local": "ANYMARKET",
    "setor": "Campanhas"
  },
  {
    "id": 715,
    "inicio": "2025-04-02",
    "final": "2025-04-02",
    "acao": "12% SHOPEE TETO COMISSÃO FAIXA acima 2 mil",
    "local": "ANYMARKET",
    "setor": "Campanhas"
  },
  {
    "id": 714,
    "inicio": "2025-04-02",
    "final": "2025-04-02",
    "acao": "10% SHOPEE TETO COMISSÃO FAIXA 1 mil a 2 mil",
    "local": "ANYMARKET",
    "setor": "Campanhas"
  },
  {
    "id": 713,
    "inicio": "2025-04-01",
    "final": "2025-04-01",
    "acao": "AUMENTO TAXA FRETE - AMAZON_GLOBAL_API DELTATOP",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 712,
    "inicio": "2025-04-01",
    "final": "2025-04-01",
    "acao": "AUMENTO TAXA FRETE - AMAZON_GLOBAL_API GUIMEPA",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 768,
    "inicio": "2025-03-26",
    "final": "2025-03-26",
    "acao": "REMOÇÃO - SÃO PAULO PARA ATUAL CARGAS (TEMPORÁRIO)",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 766,
    "inicio": "2025-03-25",
    "final": "2025-03-25",
    "acao": "AJUSTA TABELA DE FRETE AUMENTO BRASPRESS 2 ORIGENS Reajuste geral De 12,98%",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 765,
    "inicio": "2025-03-24",
    "final": "2025-03-24",
    "acao": "AUMENTO ABRANGENCIA NATIVA",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 761,
    "inicio": "2025-03-21",
    "final": "2025-03-21",
    "acao": "AUMENTO ACRESCIMO LOGGI 40% > 50%",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 760,
    "inicio": "2025-03-21",
    "final": "2025-03-21",
    "acao": "AUMENTO ACRESCIMO NATIVA 30% > 50%",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 759,
    "inicio": "2025-03-20",
    "final": "2025-03-20",
    "acao": "CORREIOS REATIVADO CONTRATO ATIVO NOVAMENTE",
    "local": "PLATAFORMAS",
    "setor": "Transportadoras"
  },
  {
    "id": 758,
    "inicio": "2025-03-19",
    "final": "2025-03-19",
    "acao": "CORREIOS INATIVADO POR CONTRATO PARALIZADO",
    "local": "PLATAFORMAS",
    "setor": "Transportadoras"
  },
  {
    "id": 757,
    "inicio": "2025-03-19",
    "final": "2025-03-19",
    "acao": "AJUSTE MARKUPS AMAZON GUIMEPA ROTINA DE CORREÇÃO",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 756,
    "inicio": "2025-03-19",
    "final": "2025-03-19",
    "acao": "AJUSTE MARKUPS LOJAS MAGALU DELTATOP SIMPLES ROTINA DE CORREÇÃO",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 752,
    "inicio": "2025-03-18",
    "final": "2025-03-18",
    "acao": "AJUSTE E REVISÃO MARKUPS OVD GERAL - FAIXA 0 a 200 R$",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 751,
    "inicio": "2025-03-18",
    "final": "2025-03-18",
    "acao": "AUMENTO MARKUPs COM 1 - OVD - ROTINA DE CORREÇÃO",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 711,
    "inicio": "2025-03-14",
    "final": "2025-03-14",
    "acao": "CORREÇÃO AJUSTE DE POLITICA DESCONTOS CAMPANHA ESTOQUE PARADO - 1 DIA DEPOIS",
    "local": "HARDNESS",
    "setor": "Campanhas"
  },
  {
    "id": 710,
    "inicio": "2025-03-13",
    "final": "2025-03-13",
    "acao": "AUMENTO ACRESCIMO LOGGI 30% > 40% (RETORNANDO PARA 40%)",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 709,
    "inicio": "2025-03-13",
    "final": "2025-03-13",
    "acao": "AJUSTE DE POLITICA DESCONTOS CAMPANHA ESTOQUE PARADO",
    "local": "HARDNESS",
    "setor": "Campanhas"
  },
  {
    "id": 708,
    "inicio": "2025-03-12",
    "final": "2025-03-12",
    "acao": "AJUSTE CROSS TOYAMA 7 > 5 DIAS",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 707,
    "inicio": "2025-03-12",
    "final": "2025-03-12",
    "acao": "AJUSTE CROSS TEKNA 7 > 5 DIAS",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 706,
    "inicio": "2025-03-12",
    "final": "2025-03-12",
    "acao": "AJUSTE CROSS BUFFALO 7 > 6 DIAS",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 705,
    "inicio": "2025-03-12",
    "final": "2025-03-12",
    "acao": "AJUSTE CROSS LYNUS 7 > 6 DIAS",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 704,
    "inicio": "2025-03-12",
    "final": "2025-03-12",
    "acao": "AJUSTE CROSS TOYAMA 7 > 5 DIAS",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 703,
    "inicio": "2025-03-12",
    "final": "2025-03-12",
    "acao": "AJUSTE CROSS BOVENAU 9 > 8 DIAS",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 702,
    "inicio": "2025-03-12",
    "final": "2025-03-12",
    "acao": "AJUSTE CROSS NEGRÃO 13 > 7 DIAS",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 701,
    "inicio": "2025-03-12",
    "final": "2025-03-12",
    "acao": "AJUSTE CROSS WAP 20 > 18 DIAS",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 700,
    "inicio": "2025-03-12",
    "final": "2025-03-12",
    "acao": "AJUSTE CROSS BEL FIX DISPONIVEIS 8 > 6 DIAS",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 699,
    "inicio": "2025-03-12",
    "final": "2025-03-12",
    "acao": "AJUSTE CROSS BEL FIX PRODUZIDOS 20 > 15 DIAS",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 698,
    "inicio": "2025-03-11",
    "final": "2025-03-11",
    "acao": "CAMPANHA FULL PARA PRODUTOS SEM VENDAS 30 DIAS ATÉ 7% SELLER e ATÉ 5% REDUÇÃO - VALORES DIFERENTES POR SKU",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 697,
    "inicio": "2025-03-10",
    "final": "2025-03-10",
    "acao": "AUMENTO 5% NEGRÃO IPV",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 696,
    "inicio": "2025-03-10",
    "final": "2025-03-10",
    "acao": "AJUSTE MARKUPS FAIXA ACIMA DE 700,00 - SHOPEE_MARKUP DE 1,02 - 3782 SKUS",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 695,
    "inicio": "2025-03-07",
    "final": "2025-03-07",
    "acao": "LOJA OLIST ATIVA + 7 MIL SKUS APENAS VONDER",
    "local": "ANYMARKET",
    "setor": "Marketplaces"
  },
  {
    "id": 962,
    "inicio": "2025-03-06",
    "final": "2025-03-06",
    "acao": "AJUSTE IPV MAKITA - PEQUENOS AJUSTES, IPV BASE 1,70",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 694,
    "inicio": "2025-03-06",
    "final": "2025-03-06",
    "acao": "AUMENTO MARKUP SHOPEE 2 LOJAS TAXA 4 + FRETE 12,50",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 693,
    "inicio": "2025-03-05",
    "final": "2025-03-05",
    "acao": "REDUÇÃO - MERCADO_LIVRE_ ANUNCIOS FULL COM ESTOQUE PARADO - 5% a 7%",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 692,
    "inicio": "2025-03-05",
    "final": "2025-03-05",
    "acao": "ATIVAÇÃO LOJA GUIMEPA SHOP - SHOPEE",
    "local": "MARKETPLACES",
    "setor": "Operações"
  },
  {
    "id": 691,
    "inicio": "2025-03-05",
    "final": "2025-03-05",
    "acao": "REFORMULAÇÃO MARKUP LL LOYALTY ANTES DE ATIVAR",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 690,
    "inicio": "2025-02-28",
    "final": "2025-02-28",
    "acao": "REDUÇÃO DE PREÇOS PRODUTOS SELECIONADOS 1456 PRODUTOS",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 689,
    "inicio": "2025-02-26",
    "final": "2025-02-26",
    "acao": "AJUSTE CROSS OVD ACIMA DE 50 5 > 4",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 688,
    "inicio": "2025-02-26",
    "final": "2025-02-26",
    "acao": "AJUSTE CROSS OVD ATÉ 50,00 6 > 5",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 687,
    "inicio": "2025-02-26",
    "final": "2025-02-26",
    "acao": "AJUSTE CROSS OVD - ALTERADO FAIXAS DE CORTE PARA PRAZO",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 686,
    "inicio": "2025-02-24",
    "final": "2025-02-24",
    "acao": "REGRA DE 10 DIAS AUMENTADA PARA 15 DIAS (MARCAS: WAP, BRITNIA, PHILCO E WAAW)",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 685,
    "inicio": "2025-02-24",
    "final": "2025-02-24",
    "acao": "BRITANIA - MIGRADA PARA COTAÇÃO COM ACRESCIMO 6 > 15 DIAS - MAGALU",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 684,
    "inicio": "2025-02-24",
    "final": "2025-02-24",
    "acao": "BELFIX, MENEGOTTI, LYNUS, CSM - MGRADA PARA COTAÇÃO COM ACRESCIMO DE 6 > 8 DIAS - MAGALU",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 683,
    "inicio": "2025-02-24",
    "final": "2025-02-24",
    "acao": "OVD, NORDTECH, TOYAMA, GMEG - MIGRADA PARA COTAÇÃO COM ACRESCIMO DE 5 > 7 DIAS - MAGALU",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 682,
    "inicio": "2025-02-24",
    "final": "2025-02-24",
    "acao": "REDUÇÃO IPV FAIXA 90 a 200 = 1445 PRODUTOS",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 681,
    "inicio": "2025-02-20",
    "final": "2025-02-20",
    "acao": "REDUÇÃO ACRESCIMO LOGGI 40% > 30%",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 680,
    "inicio": "2025-02-20",
    "final": "2025-02-20",
    "acao": "AUMENTO ACRESCIMO BRASPRESS 50% > 60%",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 679,
    "inicio": "2025-02-20",
    "final": "2025-02-20",
    "acao": "AJUSTE CROSS BRITANIA 9 > 15 DIAS",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 678,
    "inicio": "2025-02-12",
    "final": "2025-02-12",
    "acao": "AUMENTO MARKUP TAXA FIXA MAGALU - AJUSTES - LOTE 3 - TAXA MINIMA 10,00",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 677,
    "inicio": "2025-02-12",
    "final": "2025-02-12",
    "acao": "AUMENTO MARKUP TAXA FIXA MAGALU - AJUSTES - LOTE 2 - TAXA MINIMA 10,00",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 676,
    "inicio": "2025-02-12",
    "final": "2025-02-12",
    "acao": "AUMENTO MARKUP TAXA FIXA MAGALU - AJUSTES - LOTE 1 - TAXA MINIMA 10,00",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 675,
    "inicio": "2025-02-11",
    "final": "2025-02-11",
    "acao": "AUMENTO FAIXA DE PRODUTOS CUSOS DE 1 a 30 LOTE 2 - PROGRESSIVO",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 674,
    "inicio": "2025-02-10",
    "final": "2025-02-10",
    "acao": "AUMENTO FAIXA DE PRODUTOS CUSOS DE 1 a 30 LOTE 1 - PROGRESSIVO",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 673,
    "inicio": "2025-02-05",
    "final": "2025-02-05",
    "acao": "AUMENTO MARKUP OLIST_NEW_API_AJUSTE MARKUP COBRANDO FRETES + 0,08 = acima 80 - 1,12 = 0 a 80",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 672,
    "inicio": "2025-01-31",
    "final": "2025-01-31",
    "acao": "AUMENTO MARKUP MERCADO_LIVRE GUIMEPA PRINCIPAL 0 a 20 2,27 Clássico 2,37 Premium até Taxa 6 20 a 90 1,17 Clássico 1,27 Premium até Taxa 6 acima 90 1,07 Clássico 1,12 Premium ME2 Frete por SKU",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 671,
    "inicio": "2025-01-30",
    "final": "2025-01-30",
    "acao": "AUMENTO MARKUP MERCADO_LIVRE GUIMEPA SC - FRETE ME2",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 670,
    "inicio": "2025-01-30",
    "final": "2025-01-30",
    "acao": "AUMENTO MARKUP LEROY_MERLIN_ 0 a 20 = 1,25 - 20 a 80 = 1,15 - 80 a 200 = 1,12 - acima 200 = 1,10",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 669,
    "inicio": "2025-01-30",
    "final": "2025-01-30",
    "acao": "AUMENTO MARKUP MADEIRA_MADEIRA_AJUSTE MARKUP - abaixo 25 por sku - 25 a 50 = 1,20 - 50 a 500 = 1,09 - acima 500 = 1,07",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 668,
    "inicio": "2025-01-30",
    "final": "2025-01-30",
    "acao": "AUMENTO MARKUP NEXTSHOP - 0 a 20 = 1,20 - 20 a 50 = 1,15 - acima 50 = 1,11",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 667,
    "inicio": "2025-01-30",
    "final": "2025-01-30",
    "acao": "AUMENTO MARKUP SHOPHUB_MIN 1,12",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 666,
    "inicio": "2025-01-30",
    "final": "2025-01-30",
    "acao": "AUMENTO MARKUP LOJA_DO_MECANICO-AUMENTO MARKUP- MIN 1,07 - 1,08 E AUMENTO NA FAIXA ABAIXO DE 100",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 665,
    "inicio": "2025-01-28",
    "final": "2025-01-28",
    "acao": "AUMENTO MARKUP LIVELO - AJUSTE DE MARKUP 1,05 PARA 1,08 - APENAS A 3.100 SKUS - RESTANTE JA ESTAVA ENQUADRADO",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 664,
    "inicio": "2025-01-27",
    "final": "2025-01-27",
    "acao": "AUMENTO MARKUP SHOPEE - AJUTE DE TAXAS E SUBIR DESCONTO PARA USAR CAMPANHA DE CORTE NO CANAL",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 663,
    "inicio": "2025-01-23",
    "final": "2025-01-23",
    "acao": "AUMENTO GERAL DE IPV - RÉGUA DE 1,65 IPV MINIMO",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 662,
    "inicio": "2025-01-23",
    "final": "2025-01-23",
    "acao": "ENCERRAMENTO CAMPANHAS BLACK FRIDAY MAIS AGRESSIVAS",
    "local": "HARDNESS",
    "setor": "Campanhas"
  },
  {
    "id": 661,
    "inicio": "2025-01-21",
    "final": "2025-01-21",
    "acao": "DESATIVADO TABELAS JADLOG",
    "local": "INTELIPOST",
    "setor": "Operações"
  },
  {
    "id": 660,
    "inicio": "2025-01-15",
    "final": "2025-01-15",
    "acao": "DESATIVAÇÃO REGRAS DE FRETE GRÁTIS - CANAL DE VENDAS - FRETE GRATIS SKU 1140770",
    "local": "INTELIPOST",
    "setor": "Operações"
  },
  {
    "id": 659,
    "inicio": "2025-01-15",
    "final": "2025-01-15",
    "acao": "DESATIVAÇÃO REGRAS DE FRETE GRÁTIS - CANAL DE VENDAS - CAMPANHA FRETE GRATÍS - SUL/SP",
    "local": "INTELIPOST",
    "setor": "Operações"
  },
  {
    "id": 658,
    "inicio": "2025-01-14",
    "final": "2025-01-14",
    "acao": "CORTADO ESTOQUE DE PRODUTOS QUE NÃO ATINGIM CUSTO DE FRETE CIF OU PEDIDO MINIMO FORNECEDOR TRAPP",
    "local": "FORNECEDORES",
    "setor": "Operações"
  },
  {
    "id": 657,
    "inicio": "2025-01-14",
    "final": "2025-01-14",
    "acao": "CORTADO ESTOQUE DE PRODUTOS QUE NÃO ATINGIM CUSTO DE FRETE CIF OU PEDIDO MINIMO FORNECEDOR BRANCO",
    "local": "FORNECEDORES",
    "setor": "Operações"
  },
  {
    "id": 656,
    "inicio": "2025-01-14",
    "final": "2025-01-14",
    "acao": "CORTADO ESTOQUE DE PRODUTOS QUE NÃO ATINGIM CUSTO DE FRETE CIF OU PEDIDO MINIMO FORNECEDOR CHIAPERINI",
    "local": "FORNECEDORES",
    "setor": "Operações"
  },
  {
    "id": 655,
    "inicio": "2025-01-14",
    "final": "2025-01-14",
    "acao": "CORTADO ESTOQUE DE PRODUTOS QUE NÃO ATINGIM CUSTO DE FRETE CIF OU PEDIDO MINIMO FORNECEDOR BOVENAU",
    "local": "FORNECEDORES",
    "setor": "Operações"
  },
  {
    "id": 654,
    "inicio": "2025-01-14",
    "final": "2025-01-14",
    "acao": "CORTADO ESTOQUE DE PRODUTOS QUE NÃO ATINGIM CUSTO DE FRETE CIF OU PEDIDO MINIMO FORNECEDOR BALMER",
    "local": "FORNECEDORES",
    "setor": "Operações"
  },
  {
    "id": 653,
    "inicio": "2025-01-14",
    "final": "2025-01-14",
    "acao": "CORTADO ESTOQUE DE PRODUTOS QUE NÃO ATINGIM CUSTO DE FRETE CIF OU PEDIDO MINIMO FORNECEDOR MENEGOTTI",
    "local": "FORNECEDORES",
    "setor": "Operações"
  },
  {
    "id": 652,
    "inicio": "2025-01-14",
    "final": "2025-01-14",
    "acao": "PAUSADO PARCERIA COM PUMA",
    "local": "FORNECEDORES",
    "setor": "Operações"
  },
  {
    "id": 651,
    "inicio": "2025-01-14",
    "final": "2025-01-14",
    "acao": "PAUSADO PARCERIA COM FLACH",
    "local": "FORNECEDORES",
    "setor": "Operações"
  },
  {
    "id": 650,
    "inicio": "2025-01-14",
    "final": "2025-01-14",
    "acao": "PAUSADO PARCERIA COM MODULATTO",
    "local": "FORNECEDORES",
    "setor": "Operações"
  },
  {
    "id": 649,
    "inicio": "2025-01-13",
    "final": "2025-01-13",
    "acao": "AUMENTO MARKUP MAGAZINE_LUIZA_AJUSTE-MARKUP-TICKET acima 1000 = 1,04 - 200 a 1000 = 1,05 80 a 200 - 1,10 - 50 a 80 = 1,15 - 20 a 50 = 1,20 - 0 a 20 = 1,35",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 648,
    "inicio": "2025-01-07",
    "final": "2025-01-07",
    "acao": "AUMENTO MARKUP AMAZON 3 LOJAS - ITENS TICKE ABAIXO DE 79,00 - PARA COBRAR AO MENOS 15,00 DE TAXA (FRETE COBRADO DO CLIENTE)",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 647,
    "inicio": "2025-01-07",
    "final": "2025-01-07",
    "acao": "AJUSTE MARKUP LIVELO - TICKET 1 a 20 = 1,25 - 20 a 50 = 1,15 - 50 a 100 = 1,10 - 100 a 500 = 1,08 - acima 500 = 1,05",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 646,
    "inicio": "2025-01-07",
    "final": "2025-01-07",
    "acao": "AJUSTE MARKUP MADEIRA MADEIRA - TICKET 1 a 50 = 1,18 - 50 a 100 = 1,08 - acima de 100 = 1,05",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 645,
    "inicio": "2025-01-07",
    "final": "2025-01-07",
    "acao": "AJUSTE CROSS MARCAS LYNUS, GMEG, BETA, FLACH, MENEGOTTI, MAKITA, CSM E MODULATTO - VOLTA DO RECESSO",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 644,
    "inicio": "2025-01-07",
    "final": "2025-01-07",
    "acao": "AJUSTE CROSS PADRÃO CHIAPERINI ODONTOLOGICOS 11>14",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 643,
    "inicio": "2025-01-07",
    "final": "2025-01-07",
    "acao": "AJUSTE CROSS PADRÃO CSM 3>4",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 642,
    "inicio": "2025-01-06",
    "final": "2025-01-06",
    "acao": "AUMENTO MARKUP SHOPHUB - CANAL COM FLUXO DE PAGAMENTOS LONGO - TICKET 1 a 50 = 1,18 - 50 a 100 = 1,12 - 100 a 500 = 1,10 - acima de 500 = 1,08",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 641,
    "inicio": "2025-01-06",
    "final": "2025-01-06",
    "acao": "PROBLEMAS GRAVES DE INTEGRAÇÃO DE PEDIDOS - PEDIDOS SEM COMENTÁRIOS - PREENCHIMENTO MANUAL DE +50 PEDIDOS",
    "local": "HARDNESS",
    "setor": "Integradores"
  },
  {
    "id": 640,
    "inicio": "2025-01-06",
    "final": "2025-01-06",
    "acao": "PROBLEMAS GRAVES DE INTEGRAÇÃO DE PEDIDOS - PEDIDOS NÃO INTEGRAM POR TEMPO EXCEDIDO",
    "local": "HARDNESS",
    "setor": "Integradores"
  },
  {
    "id": 639,
    "inicio": "2025-01-02",
    "final": "2025-01-02",
    "acao": "PROBLEMAS GRAVES DE INTEGRAÇÃO DE PEDIDOS - PEDIDOS SEM COMENTÁRIOS - PREENCHIMENTO MANUAL DE +200 PEDIDOS",
    "local": "HARDNESS",
    "setor": "Integradores"
  },
  {
    "id": 638,
    "inicio": "2025-01-02",
    "final": "2025-01-02",
    "acao": "PROBLEMAS GRAVES DE INTEGRAÇÃO DE PEDIDOS - PEDIDOS NÃO INTEGRAM POR TEMPO EXCEDIDO",
    "local": "HARDNESS",
    "setor": "Integradores"
  },
  {
    "id": 637,
    "inicio": "2024-12-26",
    "final": "2024-12-26",
    "acao": "20% CAMPANHA ITENS ACIMA 30 DIAS IPV CAMPANHA DE 1,70 a 1,98 - 261 - SKUS",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 636,
    "inicio": "2024-12-26",
    "final": "2024-12-26",
    "acao": "18% CAMPANHA ITENS ACIMA 30 DIAS IPV CAMPANHA DE 1,67 a 1,67 - 32 - SKUS",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 635,
    "inicio": "2024-12-26",
    "final": "2024-12-26",
    "acao": "15% CAMPANHA ITENS ACIMA 30 DIAS IPV CAMPANHA DE 1,51 a 1,65 - 133 - SKUS",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 634,
    "inicio": "2024-12-26",
    "final": "2024-12-26",
    "acao": "12% CAMPANHA ITENS ACIMA 30 DIAS IPV CAMPANHA DE 1,46 a 1,5 - 268 - SKUS",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 633,
    "inicio": "2024-12-26",
    "final": "2024-12-26",
    "acao": "8% CAMPANHA ITENS ACIMA 30 DIAS IPV CAMPANHA DE 1,41 a 1,45 - 97 - SKUS",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 632,
    "inicio": "2024-12-26",
    "final": "2024-12-26",
    "acao": "7% CAMPANHA ITENS ACIMA 30 DIAS IPV CAMPANHA DE 1,37 a 1,40 - 173 SKUS",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 631,
    "inicio": "2024-12-26",
    "final": "2024-12-26",
    "acao": "5% CAMPANHA ITENS ACIMA 30 DIAS IPV CAMPANHA DE 1,30 a 1,35 - 197 SKUS",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 630,
    "inicio": "2024-12-26",
    "final": "2024-12-26",
    "acao": "REAJUSTE IPV OVD EQUILIBRAR AUMENTOS E BUSCA MAIS VOLUME",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 629,
    "inicio": "2024-12-23",
    "final": "2024-12-23",
    "acao": "AUMENTO PREÇOS OVD 1.614 SKUS ACIMA DE 150 REAIS DE CUSTO",
    "local": "FORNECEDORES",
    "setor": "Preços"
  },
  {
    "id": 628,
    "inicio": "2024-12-23",
    "final": "2024-12-23",
    "acao": "AUMENTO PREÇOS OVD 8.971 SKUS DE 1 A 150 REAIS DE CUSTO",
    "local": "FORNECEDORES",
    "setor": "Preços"
  },
  {
    "id": 627,
    "inicio": "2024-12-20",
    "final": "2025-01-04",
    "acao": "CAMPANHA FORTE DE VONDER NO MERCADO LIVRE",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 626,
    "inicio": "2024-12-19",
    "final": "2024-12-19",
    "acao": "AJUSTE MARKUP PARA IMPULSIONAR LOJA-MERCADO_LIVRE_GUIMEPA-SC",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 625,
    "inicio": "2024-12-19",
    "final": "2024-12-19",
    "acao": "BLOQUEIO DE VARIOS FORNECEDORES POR FÉRIAS COLETIVAS",
    "local": "FORNECEDORES",
    "setor": "Publicações"
  },
  {
    "id": 624,
    "inicio": "2024-12-18",
    "final": "2024-12-18",
    "acao": "DOLAR BATEU 6,26",
    "local": "FORNECEDORES",
    "setor": "Preços"
  },
  {
    "id": 623,
    "inicio": "2024-12-17",
    "final": "2024-12-17",
    "acao": "CARREFOUR_Reajuste-MARKUP",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 622,
    "inicio": "2024-12-17",
    "final": "2024-12-17",
    "acao": "ANGELONI_Reajuste-MARKUP",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 621,
    "inicio": "2024-12-17",
    "final": "2024-12-17",
    "acao": "TROCA DE 1 DIA DO MANUSEIO PARA 1 DIA NO CROSS",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 620,
    "inicio": "2024-12-10",
    "final": "2024-12-10",
    "acao": "LOTE 5 - TODOS_MARKETPLACES_AJUSTE MARKUP ITENS ACIMA DE 250 - Enquadramento de MARKUP BASE POR LOJA",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 619,
    "inicio": "2024-12-10",
    "final": "2024-12-10",
    "acao": "LOTE 4 - TODOS_MARKETPLACES_AJUSTE MARKUP ITENS ACIMA DE 250 - Enquadramento de MARKUP BASE POR LOJA",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 618,
    "inicio": "2024-12-10",
    "final": "2024-12-10",
    "acao": "LOTE 3 - TODOS_MARKETPLACES_AJUSTE MARKUP ITENS ACIMA DE 250 - Enquadramento de MARKUP BASE POR LOJA",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 617,
    "inicio": "2024-12-10",
    "final": "2024-12-10",
    "acao": "LOTE 2 - TODOS_MARKETPLACES_AJUSTE MARKUP ITENS ACIMA DE 250 - Enquadramento de MARKUP BASE POR LOJA",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 616,
    "inicio": "2024-12-10",
    "final": "2024-12-10",
    "acao": "LOTE 1 - TODOS_MARKETPLACES_AJUSTE MARKUP ITENS ACIMA DE 250 - Enquadramento de MARKUP BASE POR LOJA",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 615,
    "inicio": "2024-12-05",
    "final": "2024-12-05",
    "acao": "ATIVAÇÃO MERCHANT CENTER 14,7 MIL PRODUTOS",
    "local": "PLATAFORMAS",
    "setor": "Melhorias"
  },
  {
    "id": 614,
    "inicio": "2024-12-05",
    "final": "2024-12-05",
    "acao": "AUMENTO IPV PRODUTOS ACIMA 750 - IPV FIXO 1,60 REENQUADRO DE ALGUNS",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 613,
    "inicio": "2024-12-05",
    "final": "2024-12-05",
    "acao": "AUMENTO IPV PRODUTOS 500 ATÉ 750 - IPV FIXO 1,62",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 612,
    "inicio": "2024-12-05",
    "final": "2024-12-05",
    "acao": "AUMENTO IPV PRODUTOS 350 ATÉ 500 - IPV FIXO 1,63",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 611,
    "inicio": "2024-12-05",
    "final": "2024-12-05",
    "acao": "AUMENTO IPV PRODUTOS 200 ATÉ 350 - IPV FIXO 1,64",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 610,
    "inicio": "2024-12-05",
    "final": "2024-12-05",
    "acao": "AUMENTO IPV PRODUTOS 120 ATÉ 200,00 - 3% BRUTO NO PREÇO FINAL",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 609,
    "inicio": "2024-12-05",
    "final": "2024-12-05",
    "acao": "AUMENTO IPV PRODUTOS 100 ATÉ 120,00 - 6% BRUTO NO PREÇO FINAL",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 608,
    "inicio": "2024-12-05",
    "final": "2024-12-05",
    "acao": "AUMENTO IPV PRODUTOS 50 ATÉ 100,00 - 10% BRUTO NO PREÇO FINAL",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 607,
    "inicio": "2024-12-03",
    "final": "2024-12-03",
    "acao": "AUMENTO IPV PRODUTOS 20,00 ATÉ 50,00 - 20% BRUTO NO PREÇO FINAL",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 606,
    "inicio": "2024-12-03",
    "final": "2024-12-03",
    "acao": "AUMENTO IPV PRODUTOS ATÉ 20,00 - 35% BRUTO NO PREÇO FINAL",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 604,
    "inicio": "2024-11-27",
    "final": "2024-12-02",
    "acao": "ACRESCIMO 1 DIA PRAZO DE ENTREGA/PRAZO MANUSEIO TODAS TRANSPORTADORAS",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 605,
    "inicio": "2024-11-27",
    "final": "2024-11-27",
    "acao": "ACRESCIMO 1 DIA PRAZO CROSSDOCKING TODOS FORNECEDORES ATIVOS",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 603,
    "inicio": "2024-11-27",
    "final": "2024-11-27",
    "acao": "ALTERAÇÃO DE CROSS BEL FIX ROTINA DIÁRIA DE AJUSTE COM MACRO",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 602,
    "inicio": "2024-11-27",
    "final": "2024-11-27",
    "acao": "ACRESCIMO DE FRETE LOGGI 30>60%",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 601,
    "inicio": "2024-11-26",
    "final": "2024-11-26",
    "acao": "TERCEIRA MIGRAÇÃO PRODUTOS VONDER LOJA OFICIAL GUIMEPA <> VONDER (TROCA DE MLBS MAIS VENDIDOS)",
    "local": "MARKETPLACES",
    "setor": "Vendas"
  },
  {
    "id": 600,
    "inicio": "2024-11-26",
    "final": "2024-11-26",
    "acao": "REDUÇÃO MARKUP ITENS SELECIONADOS QUEIMA ESTOQUE BLACK",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 599,
    "inicio": "2024-11-26",
    "final": "2024-11-26",
    "acao": "ATUALIZADO GRUPO DE PRODUTOS FRETE GRATIS SUL/SP",
    "local": "INTELIPOST",
    "setor": "Campanhas"
  },
  {
    "id": 598,
    "inicio": "2024-11-26",
    "final": "2024-11-26",
    "acao": "AJUSTE NO SELETOR, RETIRADO FRETE GRATIS SUDESTE GERAL PARA SUL/SP",
    "local": "INTELIPOST",
    "setor": "Campanhas"
  },
  {
    "id": 597,
    "inicio": "2024-11-25",
    "final": "2024-11-25",
    "acao": "PRAZO ADC 5 DIAS TRANSPORTADORA MOVVI (ATRASOS NA ENTREGA)",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 596,
    "inicio": "2024-11-18",
    "final": "2024-11-18",
    "acao": "ACRESCIMO DE CROSS O.V.D PRODUTOS TICKET BAIXO DE 100 A 150 REAIS 3>4",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 595,
    "inicio": "2024-11-18",
    "final": "2024-11-18",
    "acao": "ACRESCIMO DE CROSS O.V.D PRODUTOS TICKET BAIXO O.V.D DE 1 A 100 REAIS 4>5",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 594,
    "inicio": "2024-11-18",
    "final": "2024-11-18",
    "acao": "AUMENTO IPV PRODUTOS DE 1 A 40",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 593,
    "inicio": "2024-11-14",
    "final": "2024-11-14",
    "acao": "SEGUNDA MIGRAÇÃO MASSIVA ANUNCIOS LOJA OFICIAL",
    "local": "MARKETPLACES",
    "setor": "Vendas"
  },
  {
    "id": 592,
    "inicio": "2024-11-14",
    "final": "2024-11-14",
    "acao": "REDUÇÃO ADS PFV238",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 591,
    "inicio": "2024-11-08",
    "final": "2024-11-08",
    "acao": "AJUSTE MARKUP MLBs ATIVOS LOJA OFICIAL VONDER",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 590,
    "inicio": "2024-11-08",
    "final": "2024-11-08",
    "acao": "PRIMEIRA VENDA LOJA OFICIAL VONDER",
    "local": "MARKETPLACES",
    "setor": "Vendas"
  },
  {
    "id": 589,
    "inicio": "2024-11-08",
    "final": "2024-11-08",
    "acao": "PRIMEIRA MIGRAÇÃO MASSIVA ANUNCIOS LOJA OFICIAL",
    "local": "MARKETPLACES",
    "setor": "Vendas"
  },
  {
    "id": 588,
    "inicio": "2024-11-07",
    "final": "2024-11-07",
    "acao": "INATIVAÇÃO KARCHER",
    "local": "FORNECEDORES",
    "setor": "Vendas"
  },
  {
    "id": 587,
    "inicio": "2024-11-07",
    "final": "2024-11-07",
    "acao": "INATIVAÇÃO B2B",
    "local": "FORNECEDORES",
    "setor": "Vendas"
  },
  {
    "id": 586,
    "inicio": "2024-11-07",
    "final": "2024-11-07",
    "acao": "INATIVAÇÃO NOVA MOTORES",
    "local": "FORNECEDORES",
    "setor": "Vendas"
  },
  {
    "id": 585,
    "inicio": "2024-11-07",
    "final": "2024-11-07",
    "acao": "INATIVAÇÃO VULCAN",
    "local": "FORNECEDORES",
    "setor": "Vendas"
  },
  {
    "id": 584,
    "inicio": "2024-11-07",
    "final": "2024-11-07",
    "acao": "INATIVAÇÃO PDR",
    "local": "FORNECEDORES",
    "setor": "Vendas"
  },
  {
    "id": 583,
    "inicio": "2024-11-05",
    "final": "2024-11-05",
    "acao": "CONVITE LOJA OFICIAL VONDER",
    "local": "FORNECEDORES",
    "setor": "Marketplaces"
  },
  {
    "id": 582,
    "inicio": "2024-11-04",
    "final": "2024-11-04",
    "acao": "REDUÇÃO 5% SHOPEE | TETO COMISSÃO 100,00 (Comissão aprox: 10% a 14%%)",
    "local": "ANYMARKET",
    "setor": "Marketplaces"
  },
  {
    "id": 581,
    "inicio": "2024-11-04",
    "final": "2024-11-04",
    "acao": "REDUÇÃO 3% SHOPEE | TETO COMISSÃO 100,00 (Comissão aprox: 14%, 15%, 16%)",
    "local": "ANYMARKET",
    "setor": "Marketplaces"
  },
  {
    "id": 580,
    "inicio": "2024-11-04",
    "final": "2024-11-04",
    "acao": "REDUÇÃO 2% SHOPEE | TETO COMISSÃO 100,00 (Comissão aprox: 17%, 18%)",
    "local": "ANYMARKET",
    "setor": "Marketplaces"
  },
  {
    "id": 579,
    "inicio": "2024-11-04",
    "final": "2024-11-04",
    "acao": "REDUÇÃO 12% SHOPEE | TETO COMISSÃO 100,00 (Comissão aprox: 0% a 7%)",
    "local": "ANYMARKET",
    "setor": "Marketplaces"
  },
  {
    "id": 578,
    "inicio": "2024-11-04",
    "final": "2024-11-04",
    "acao": "REDUÇÃO 10% SHOPEE | TETO COMISSÃO 100,00 (Comissão aprox: 07% a 10%)",
    "local": "ANYMARKET",
    "setor": "Marketplaces"
  },
  {
    "id": 577,
    "inicio": "2024-11-04",
    "final": "2024-11-04",
    "acao": "SHOPEE - AJUSTE MARKUP PRODUTOS COM TETO DE COMISSÃO",
    "local": "ANYMARKET",
    "setor": "Marketplaces"
  },
  {
    "id": 576,
    "inicio": "2024-10-28",
    "final": "2024-10-28",
    "acao": "PROMO FAIXAS DE PREÇOS - AJUSTE DE DESCONTOS POR MLB",
    "local": "PLATAFORMAS",
    "setor": "Preços"
  },
  {
    "id": 575,
    "inicio": "2024-10-25",
    "final": "2024-10-25",
    "acao": "AJUSTE CSM IPV IMPUSÃO FINAL DE ANO 5%",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 574,
    "inicio": "2024-10-25",
    "final": "2024-10-25",
    "acao": "AJUSTE TRAPP IPV IMPUSÃO FINAL DE ANO 5%",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 573,
    "inicio": "2024-10-25",
    "final": "2024-10-25",
    "acao": "AJUSTE TOYAMA IPV IMPUSÃO FINAL DE ANO 5%",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 572,
    "inicio": "2024-10-25",
    "final": "2024-10-25",
    "acao": "AJUSTE CHIAPERINI IPV IMPUSÃO FINAL DE ANO 5%",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 571,
    "inicio": "2024-10-25",
    "final": "2024-10-25",
    "acao": "AJUSTE GMEG IPV IMPUSÃO FINAL DE ANO 5%",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 570,
    "inicio": "2024-10-25",
    "final": "2024-10-25",
    "acao": "AJUSTE TEKNA IPV IMPUSÃO FINAL DE ANO 5%",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 569,
    "inicio": "2024-10-25",
    "final": "2024-10-25",
    "acao": "AJUSTE LYNUS IPV IMPUSÃO FINAL DE ANO 5%",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 568,
    "inicio": "2024-10-25",
    "final": "2024-10-25",
    "acao": "AJUSTE MENEGOTTI IPV IMPUSÃO FINAL DE ANO 5%",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 567,
    "inicio": "2024-10-25",
    "final": "2024-10-25",
    "acao": "AJUSTE PRESTO IPV IMPUSÃO FINAL DE ANO 5%",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 566,
    "inicio": "2024-10-24",
    "final": "2024-10-24",
    "acao": "REMOÇÃO COTAÇÃO BRASPRESS PARA RS (PROBLEMAS COM A FILIAL)",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 565,
    "inicio": "2024-10-23",
    "final": "2024-10-23",
    "acao": "AUMENTO IPV INCLUINDO MAIS TAXAS DE VENDAS FIXAS FAIXAS 1 A 90",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 564,
    "inicio": "2024-10-22",
    "final": "2024-10-22",
    "acao": "INICIO ENTRADA AUTOMATICA DE PEDIDOS",
    "local": "HARDNESS",
    "setor": "Vendas"
  },
  {
    "id": 563,
    "inicio": "2024-10-18",
    "final": "2024-10-18",
    "acao": "AUMENTO IPV PRODUTOS DE 6 A 40",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 562,
    "inicio": "2024-10-18",
    "final": "2024-10-18",
    "acao": "AUMENTO IPV PRODUTOS A BAIXO DE 6",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 561,
    "inicio": "2024-10-17",
    "final": "2024-10-17",
    "acao": "REAJUSTE ACRESCIMO DE FRETE NATIVA TRANSP 30>20%",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 560,
    "inicio": "2024-10-17",
    "final": "2024-10-17",
    "acao": "REAJUSTE ACRESCIMO DE FRETE JADLOG 40>55%",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 559,
    "inicio": "2024-10-17",
    "final": "2024-10-17",
    "acao": "REAJUSTE ACRESCIMO DE FRETE ATUAL CARGAS 20>35%",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 558,
    "inicio": "2024-10-17",
    "final": "2024-10-17",
    "acao": "REAJUSTE ACRESCIMO DE FRETE BRASPRESS 25>40%",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 557,
    "inicio": "2024-10-11",
    "final": "2024-10-11",
    "acao": "DESATIVAÇÃO CCM",
    "local": "FORNECEDORES",
    "setor": "Vendas"
  },
  {
    "id": 556,
    "inicio": "2024-10-10",
    "final": "2024-10-10",
    "acao": "AJUSTE DE CROSS BALMER 5>7",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 555,
    "inicio": "2024-10-10",
    "final": "2024-10-10",
    "acao": "AJUSTE DE CROSS PUMA 5>4",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 554,
    "inicio": "2024-10-10",
    "final": "2024-10-10",
    "acao": "AJUSTE DE CROSS TOYAMA 3>6",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 553,
    "inicio": "2024-10-10",
    "final": "2024-10-10",
    "acao": "AJUSTE DE CROSS BUFFALO 4>5",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 552,
    "inicio": "2024-10-10",
    "final": "2024-10-10",
    "acao": "AJUSTE DE CROSS MENEGOTTI 4>6",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 551,
    "inicio": "2024-10-10",
    "final": "2024-10-10",
    "acao": "AJUSTE DE CROSS BELFIX PRODUZIDOS 8>7",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 550,
    "inicio": "2024-10-08",
    "final": "2024-10-08",
    "acao": "5% UP MARCAS COM VENDAS FRACAS SET PARA OUTUBRO",
    "local": "ANYMARKET",
    "setor": "Campanhas"
  },
  {
    "id": 549,
    "inicio": "2024-10-07",
    "final": "2024-10-07",
    "acao": "AJUSTE MARKUP SHOPEE FAIXA ACIMA DE 750 FIXADO EM MARKUP 1 DEVIDO TETO DE COMISSÃO 100,00",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 548,
    "inicio": "2024-10-07",
    "final": "2024-10-07",
    "acao": "ALTERAÇÃO DE PRECIFICAÇÃO BRADESCO COM PREÇO DE PREÇO POR",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 547,
    "inicio": "2024-10-02",
    "final": "2024-10-02",
    "acao": "ENTRADA DO FlÁVIO",
    "local": "EQUIPE",
    "setor": "Operações"
  },
  {
    "id": 546,
    "inicio": "2024-10-02",
    "final": "2024-10-02",
    "acao": "LANÇAMENTO DA FURADEIRA",
    "local": "MARKETPLACES",
    "setor": "Vendas"
  },
  {
    "id": 545,
    "inicio": "2024-09-23",
    "final": "2024-09-23",
    "acao": "AUMENTO MARKUP SHOPEE REAJUSTE TESTES ITENS MAIS BARATOS",
    "local": "MARKETPLACES",
    "setor": "Preços"
  },
  {
    "id": 544,
    "inicio": "2024-09-20",
    "final": "2024-09-20",
    "acao": "AUMENTO MARKUP AMAZON 3%",
    "local": "MARKETPLACES",
    "setor": "Preços"
  },
  {
    "id": 543,
    "inicio": "2024-09-16",
    "final": "2024-09-16",
    "acao": "EXPANSÃO DOS PRODUTOS COM FRETE GRÁTIS SUL E SUDESTE",
    "local": "INTELIPOST",
    "setor": "Campanhas"
  },
  {
    "id": 542,
    "inicio": "2024-09-13",
    "final": "2024-09-13",
    "acao": "AJUSTE MARKUP SHOPEE IMPULSÂO",
    "local": "MARKETPLACES",
    "setor": "Preços"
  },
  {
    "id": 541,
    "inicio": "2024-09-13",
    "final": "2024-09-13",
    "acao": "REATIVAÇÃO SHOPEE GUIMEPA",
    "local": "MARKETPLACES",
    "setor": "Vendas"
  },
  {
    "id": 540,
    "inicio": "2024-09-12",
    "final": "2024-09-12",
    "acao": "REATIVADO KARCHER",
    "local": "FORNECEDORES",
    "setor": "Vendas"
  },
  {
    "id": 539,
    "inicio": "2024-09-06",
    "final": "2024-09-30",
    "acao": "CAMPANHAS MAGALU GUIMEPA COMPARTILHADA DESCONTOS À VISTA 6% + 4%",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 538,
    "inicio": "2024-09-06",
    "final": "2024-09-30",
    "acao": "CAMPANHA Itens selecionados Ticket alto",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 536,
    "inicio": "2024-09-06",
    "final": "2024-09-30",
    "acao": "CAMPANHAS MAGALU GMK8 COMPARTILHADA DESCONTOS À VISTA 6% + 4%",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 535,
    "inicio": "2024-09-06",
    "final": "2024-09-30",
    "acao": "CAMPANHAS MAGALU DELTATOP COMPARTILHADA DESCONTOS À VISTA 4% + 4%",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 537,
    "inicio": "2024-09-06",
    "final": "2024-09-06",
    "acao": "BLOQUEIOS TABELAS BRITANIA tabela 310 e 296 | LINHA MARROM E BRANCA IMPORTADAS",
    "local": "FORNECEDORES",
    "setor": "Vendas"
  },
  {
    "id": 534,
    "inicio": "2024-09-06",
    "final": "2024-09-06",
    "acao": "BLOQUEIO MARCA BOXER",
    "local": "FORNECEDORES",
    "setor": "Vendas"
  },
  {
    "id": 533,
    "inicio": "2024-09-06",
    "final": "2024-09-06",
    "acao": "ATUALIZADA TABELA DE FRETE CSM +1 DIA PRAZO DE ENTREGA",
    "local": "INTELIPOST",
    "setor": "Marketplaces"
  },
  {
    "id": 532,
    "inicio": "2024-09-05",
    "final": "2024-09-05",
    "acao": "ATUALIZADO LIMITE DE PESO FRETE GRATIS SITE DE 100KG PARA 199KG",
    "local": "INTELIPOST",
    "setor": "Campanhas"
  },
  {
    "id": 531,
    "inicio": "2024-09-05",
    "final": "2024-09-05",
    "acao": "ATUALIZADO GRUPO DE PRODUTOS FRETE GRATIS SUL/SUDESTE",
    "local": "INTELIPOST",
    "setor": "Campanhas"
  },
  {
    "id": 530,
    "inicio": "2024-09-03",
    "final": "2024-09-03",
    "acao": "INICIO DO JONE",
    "local": "EQUIPE",
    "setor": "Operações"
  },
  {
    "id": 529,
    "inicio": "2024-08-30",
    "final": "2024-08-30",
    "acao": "3 LOJAS ATUALIZAÇÃO MARKUP AMAZON LOJA COM MARCAS SEPARADAS, IMPULSÃO SETEMBRO",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 528,
    "inicio": "2024-08-27",
    "final": "2024-08-27",
    "acao": "ATUALIZAÇÃO PREÇOS NOVA MOTORES",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 527,
    "inicio": "2024-08-27",
    "final": "2024-08-27",
    "acao": "AJUSTE DE MARKUP SHOPEE - AUMENTO",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 526,
    "inicio": "2024-08-20",
    "final": "2024-08-20",
    "acao": "ATUALIZAÇÃO PREÇOS TEKNA",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 525,
    "inicio": "2024-08-19",
    "final": "2024-08-19",
    "acao": "ATUALIZAÇÃO PREÇOS CHIAPERINI",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 524,
    "inicio": "2024-08-19",
    "final": "2024-08-19",
    "acao": "ATUALIZAÇÃO PREÇOS BALMER",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 523,
    "inicio": "2024-08-16",
    "final": "2024-08-16",
    "acao": "ATUALIZAÇÃO PREÇOS MAKITA",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 522,
    "inicio": "2024-08-16",
    "final": "2024-08-16",
    "acao": "ATUALIZAÇÃO PREÇOS CSM",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 521,
    "inicio": "2024-08-15",
    "final": "2024-08-15",
    "acao": "FINALIZADA SEPARAÇÃO DE MARCAS POR LOJA DA AMAZON",
    "local": "ANYMARKET",
    "setor": "Marketplaces"
  },
  {
    "id": 520,
    "inicio": "2024-08-12",
    "final": "2024-08-12",
    "acao": "CROSS AJUSTE MAKITA 6>5",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 519,
    "inicio": "2024-08-09",
    "final": "2024-08-09",
    "acao": "MARKUP AUMENTO | MERCADO LIVRE MÉDIA DE 3%",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 518,
    "inicio": "2024-08-09",
    "final": "2024-08-09",
    "acao": "MARKUP AUMENTO | MADEIRA MADEIRA MÉDIA DE 3%",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 517,
    "inicio": "2024-08-09",
    "final": "2024-08-09",
    "acao": "ATUALIZAÇÃO PREÇOS BOXER",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 516,
    "inicio": "2024-08-09",
    "final": "2024-08-09",
    "acao": "MARKUP AUMENTO | ANGELONI MÉDIA DE 3%",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 515,
    "inicio": "2024-08-09",
    "final": "2024-08-09",
    "acao": "MARKUP AUMENTO | SHOPPING LEVELO MÉDIA DE 3%",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 514,
    "inicio": "2024-08-09",
    "final": "2024-08-09",
    "acao": "MARKUP AUMENTO | LEROY MERLIN MÉDIA DE 3%",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 513,
    "inicio": "2024-08-09",
    "final": "2024-08-09",
    "acao": "MARKUP AUMENTO | LOJA DO MECÂNICO MÉDIA DE 3%",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 512,
    "inicio": "2024-08-09",
    "final": "2024-08-09",
    "acao": "MARKUP AUMENTO | SHOPHUB MÉDIA DE 3%",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 511,
    "inicio": "2024-08-09",
    "final": "2024-08-09",
    "acao": "MARKUP AUMENTO | WEBCONTINENTAL MÉDIA DE 3%",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 510,
    "inicio": "2024-08-08",
    "final": "2024-08-08",
    "acao": "ATUALIZAÇÃO PREÇOS VULCAN",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 509,
    "inicio": "2024-08-07",
    "final": "2024-08-07",
    "acao": "ATUALIZAÇÃO PREÇOS TEKNA",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 508,
    "inicio": "2024-08-07",
    "final": "2024-08-07",
    "acao": "PRESTO CROSS DOCKING 15>10",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 507,
    "inicio": "2024-08-05",
    "final": "2024-08-05",
    "acao": "ATIVAÇÃO TRANSPORTADORA LOGGI",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 506,
    "inicio": "2024-08-05",
    "final": "2024-08-05",
    "acao": "LOJA B2W GMK8 DESATIVADA",
    "local": "MARKETPLACES",
    "setor": "Vendas"
  },
  {
    "id": 505,
    "inicio": "2024-08-05",
    "final": "2024-08-05",
    "acao": "PRIMEIRA VENDA BONENAU",
    "local": "FORNECEDORES",
    "setor": "Vendas"
  },
  {
    "id": 504,
    "inicio": "2024-08-02",
    "final": "2024-08-02",
    "acao": "REATIVAÇÃO CARREFOUR",
    "local": "MARKETPLACES",
    "setor": "Vendas"
  },
  {
    "id": 503,
    "inicio": "2024-08-02",
    "final": "2024-08-02",
    "acao": "SAÍDA MARCIO",
    "local": "EQUIPE",
    "setor": "Operações"
  },
  {
    "id": 502,
    "inicio": "2024-08-02",
    "final": "2024-08-02",
    "acao": "BUFFALO CROSS DOCKING 6>4",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 501,
    "inicio": "2024-08-01",
    "final": "2024-08-01",
    "acao": "ATUALIZAÇÃO PREÇOS BRANCO",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 500,
    "inicio": "2024-08-01",
    "final": "2024-08-01",
    "acao": "AUMENTO BETA IPV 1,5>1,6",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 499,
    "inicio": "2024-08-01",
    "final": "2024-08-01",
    "acao": "AUMENTO FLACH IPV 1,51>1,6",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 498,
    "inicio": "2024-08-01",
    "final": "2024-08-01",
    "acao": "AUMENTO TRAPP IPV 1,57>1,6",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 497,
    "inicio": "2024-08-01",
    "final": "2024-08-01",
    "acao": "AUMENTO PUMA IPV 1,56>1,6",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 496,
    "inicio": "2024-08-01",
    "final": "2024-08-01",
    "acao": "AUMENTO LYNUS IPV 1,57>1,6",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 495,
    "inicio": "2024-08-01",
    "final": "2024-08-01",
    "acao": "AUMENTO VULCAN IPV 1,58>1,6",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 494,
    "inicio": "2024-08-01",
    "final": "2024-08-01",
    "acao": "AUMENTO MENEGOTTI IPV 1,55>1,6",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 493,
    "inicio": "2024-08-01",
    "final": "2024-08-01",
    "acao": "AUMENTO BRITANIA IPV 1,59>1,6",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 492,
    "inicio": "2024-08-01",
    "final": "2024-08-01",
    "acao": "AUMENTO BRANCO IPV 1,56>1,6",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 491,
    "inicio": "2024-08-01",
    "final": "2024-08-01",
    "acao": "AUMENTO PRESTO IPV 1,62>1,6",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 490,
    "inicio": "2024-08-01",
    "final": "2024-08-01",
    "acao": "AUMENTO CSM IPV 1,55>1,6",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 489,
    "inicio": "2024-08-01",
    "final": "2024-08-01",
    "acao": "AUMENTO PDR IPV 1,55>1,6",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 488,
    "inicio": "2024-08-01",
    "final": "2024-08-01",
    "acao": "AUMENTO GMEG IPV 1,56>1,6",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 487,
    "inicio": "2024-08-01",
    "final": "2024-08-01",
    "acao": "AUMENTO CMB IPV 1,56>1,6",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 486,
    "inicio": "2024-08-01",
    "final": "2024-08-01",
    "acao": "AUMENTO MAKITA IPV 1,56>1,6",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 485,
    "inicio": "2024-08-01",
    "final": "2024-08-01",
    "acao": "AUMENTO TEKNA IPV 1,56>1,6",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 484,
    "inicio": "2024-08-01",
    "final": "2024-08-01",
    "acao": "AUMENTO BALMER IPV 1,55>1,6",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 483,
    "inicio": "2024-08-01",
    "final": "2024-08-01",
    "acao": "AUMENTO TOYAMA IPV 1,6>1,6",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 482,
    "inicio": "2024-08-01",
    "final": "2024-08-01",
    "acao": "AUMENTO NEGRAO IPV 1,56>1,6",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 481,
    "inicio": "2024-08-01",
    "final": "2024-08-01",
    "acao": "AUMENTO WAP IPV 1,6>1,6",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 480,
    "inicio": "2024-08-01",
    "final": "2024-08-01",
    "acao": "AUMENTO BUFFALO IPV 1,56>1,6",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 479,
    "inicio": "2024-08-01",
    "final": "2024-08-01",
    "acao": "AUMENTO BOXER IPV 1,51>1,6",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 478,
    "inicio": "2024-08-01",
    "final": "2024-08-01",
    "acao": "AUMENTO CHIAPERINI IPV 1,56>1,6",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 477,
    "inicio": "2024-08-01",
    "final": "2024-08-01",
    "acao": "AUMENTO BELFIX IPV 1,59>1,6",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 476,
    "inicio": "2024-08-01",
    "final": "2024-08-01",
    "acao": "AUMENTO NOVA IPV 1,55>1,6",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 475,
    "inicio": "2024-08-01",
    "final": "2024-08-01",
    "acao": "AUMENTO CCM IPV 1,56>1,6",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 474,
    "inicio": "2024-08-01",
    "final": "2024-08-01",
    "acao": "AUMENTO MODULATTO IPV 1,56>1,6",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 473,
    "inicio": "2024-07-31",
    "final": "2024-07-31",
    "acao": "PRESTO CROSS DOCKING 10>15",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 472,
    "inicio": "2024-07-30",
    "final": "2024-07-30",
    "acao": "AUMENTO 1 DIA REGRA: CANAL DE VENDAS - PRAZO ADICIONAL 7 DIAS CROSS MAGALU | 7>8",
    "local": "INTELIPOST",
    "setor": "Operações"
  },
  {
    "id": 471,
    "inicio": "2024-07-30",
    "final": "2024-07-30",
    "acao": "AUMENTO 1 DIA REGRA: CANAL DE VENDAS - PRAZO ADICIONAL 6 DIAS CROSS MAGALU | 6>7",
    "local": "INTELIPOST",
    "setor": "Operações"
  },
  {
    "id": 470,
    "inicio": "2024-07-30",
    "final": "2024-07-30",
    "acao": "AUMENTO 1 DIA REGRA: CANAL DE VENDAS - PRAZO ADICIONAL 5 DIAS CROSS MAGALU | 5>6",
    "local": "INTELIPOST",
    "setor": "Operações"
  },
  {
    "id": 469,
    "inicio": "2024-07-30",
    "final": "2024-07-30",
    "acao": "AUMENTO 2 DIAS REGRA: CANAL DE VENDAS - PRAZO ADICIONAL 4 DIAS CROSS MAGALU | 4>6",
    "local": "INTELIPOST",
    "setor": "Operações"
  },
  {
    "id": 468,
    "inicio": "2024-07-30",
    "final": "2024-07-30",
    "acao": "AUMENTO 2 DIAS REGRA: CANAL DE VENDAS - PRAZO ADICIONAL 3 DIAS CROSS MAGALU | 3>5",
    "local": "INTELIPOST",
    "setor": "Operações"
  },
  {
    "id": 467,
    "inicio": "2024-07-25",
    "final": "2024-07-25",
    "acao": "DISCORD GUIMEPA (PEDIDOS)",
    "local": "PLATAFORMAS",
    "setor": "Melhorias"
  },
  {
    "id": 466,
    "inicio": "2024-07-25",
    "final": "2024-07-25",
    "acao": "CROSS AJUSTE MAKITA 4>6",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 465,
    "inicio": "2024-07-24",
    "final": "2024-07-24",
    "acao": "ATIVAÇÃO MARKETPLACE CSM VENDAS DIRETAS NO SITE DA CSM",
    "local": "PLATAFORMAS",
    "setor": "Vendas"
  },
  {
    "id": 464,
    "inicio": "2024-07-24",
    "final": "2024-07-24",
    "acao": "REDUÇÃO DE IPV OVD ITENS DE 10 A 110",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 463,
    "inicio": "2024-07-19",
    "final": "2024-07-19",
    "acao": "REATIVAÇÃO IMPULSÃO NEGRÂO",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 462,
    "inicio": "2024-07-19",
    "final": "2024-07-19",
    "acao": "REATIVAÇÃO IMPULSÃO FLACH",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 461,
    "inicio": "2024-07-19",
    "final": "2024-07-19",
    "acao": "REAJUSTE MERCADO LIVRE IMPULSÃO ITENS MAIS BARATOS",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 460,
    "inicio": "2024-07-19",
    "final": "2024-07-19",
    "acao": "REDUÇÃO WEB CONTINENTAL ATÉ 3%",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 459,
    "inicio": "2024-07-19",
    "final": "2024-07-19",
    "acao": "CAMPANHA CHIAPERINI",
    "local": "HARDNESS",
    "setor": "Campanhas"
  },
  {
    "id": 458,
    "inicio": "2024-07-19",
    "final": "2024-07-19",
    "acao": "CAMPANHA TOYAMA",
    "local": "HARDNESS",
    "setor": "Campanhas"
  },
  {
    "id": 457,
    "inicio": "2024-07-19",
    "final": "2024-07-19",
    "acao": "CAMPANHA BEL FIX",
    "local": "ANYMARKET",
    "setor": "Campanhas"
  },
  {
    "id": 456,
    "inicio": "2024-07-16",
    "final": "2024-07-16",
    "acao": "AJUSTE CROSS OVD ACIMA DE R$ 80,00 | 3 DIAS",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 455,
    "inicio": "2024-07-16",
    "final": "2024-07-16",
    "acao": "AJUSTE CROSS OVD R$ 30,00 A R$ 80,00 | 3>4 DIAS",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 454,
    "inicio": "2024-07-16",
    "final": "2024-07-16",
    "acao": "AJUSTE CROSS OVD R$ 0 A R$ 30,00 | 4>5 DIAS",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 453,
    "inicio": "2024-07-16",
    "final": "2024-07-16",
    "acao": "INICIO MELHORIA MARCIO IPV-MARGEM-INTELIPOST",
    "local": "HARDNESS",
    "setor": "Melhorias"
  },
  {
    "id": 452,
    "inicio": "2024-07-15",
    "final": "2024-07-15",
    "acao": "AUMENTO IPV FAIXA 0 a 80 OVD 5%",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 451,
    "inicio": "2024-07-15",
    "final": "2024-07-15",
    "acao": "ATUALIZAÇÃO PREÇOS NACIONAIS GMEG",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 450,
    "inicio": "2024-07-15",
    "final": "2024-07-15",
    "acao": "INATIVAÇÂO CASAS BAHIA",
    "local": "ANYMARKET",
    "setor": "Vendas"
  },
  {
    "id": 449,
    "inicio": "2024-07-15",
    "final": "2024-07-15",
    "acao": "REATIVAÇÃO TRANSP BRASPRESS",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 448,
    "inicio": "2024-07-11",
    "final": "2024-07-11",
    "acao": "REATIVAÇÃO IMPERMEABILIZANTES PELA TRANSP NATIVA",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 447,
    "inicio": "2024-07-11",
    "final": "2024-07-11",
    "acao": "ATUALIZAÇÃO PREÇOS NEGRÃO",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 446,
    "inicio": "2024-07-11",
    "final": "2024-07-11",
    "acao": "ATUALIZAÇÃO PREÇOS TOYAMA SC",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 445,
    "inicio": "2024-07-10",
    "final": "2024-07-10",
    "acao": "PAUSA TRANSPORTADORA BRASPRESS",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 444,
    "inicio": "2024-07-10",
    "final": "2024-07-10",
    "acao": "IPV AUMENTO MAGAZINE LUIZA-GUIMEPA 4%",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 443,
    "inicio": "2024-07-10",
    "final": "2024-07-10",
    "acao": "IPV AUMENTO MAGAZINE LUIZA-GMK8 4%",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 442,
    "inicio": "2024-07-10",
    "final": "2024-07-10",
    "acao": "IPV AUMENTO LOJA DO MEGANICO 2%",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 441,
    "inicio": "2024-07-10",
    "final": "2024-07-10",
    "acao": "IPV AUMENTO ANGELONI-GUIMEPA 3%",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 440,
    "inicio": "2024-07-10",
    "final": "2024-07-10",
    "acao": "IPV AUMENTO AMAZON GLOBAL API-GUIMEPA 2%",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 439,
    "inicio": "2024-07-10",
    "final": "2024-07-10",
    "acao": "LIBERAÇÃO DO IMPERMEABILIZANTE 18 LITROS",
    "local": "HARDNESS",
    "setor": "Vendas"
  },
  {
    "id": 438,
    "inicio": "2024-07-10",
    "final": "2024-07-10",
    "acao": "ATUALIZAÇÃO CAMPANHAS SC VULCAN",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 437,
    "inicio": "2024-07-10",
    "final": "2024-07-10",
    "acao": "ATUALIZAÇÃO PREÇOS PRESTO",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 436,
    "inicio": "2024-07-09",
    "final": "2024-07-09",
    "acao": "AJUSTE CROSS TRAPP DE 7>5 | ALINHADO COM FORNECEDOR",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 435,
    "inicio": "2024-07-09",
    "final": "2024-07-09",
    "acao": "AUMENTO MARKUP AMAZON 3 LOJAS ITENS R$ 0 A 100",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 434,
    "inicio": "2024-07-09",
    "final": "2024-07-09",
    "acao": "AUMENTO MARKUP DELTATOP GMK8 3% a 8%",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 433,
    "inicio": "2024-07-09",
    "final": "2024-07-09",
    "acao": "AUMENTO CROSS OVD PRECO ESPECIAL ABAIXO DE 100,00 3>4",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 432,
    "inicio": "2024-07-09",
    "final": "2024-07-09",
    "acao": "REDUÇÃO ACRESCIMO FRETE ATUAL CARGAS 30>20%",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 431,
    "inicio": "2024-07-09",
    "final": "2024-07-09",
    "acao": "REMOÇÃO ACRESCIMO FRETE ATUAL +45% NORDESTE",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 430,
    "inicio": "2024-07-05",
    "final": "2024-07-05",
    "acao": "ATUALIZAÇÃO PREÇOS CAMPANHAS BRANCO",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 429,
    "inicio": "2024-07-05",
    "final": "2024-07-05",
    "acao": "ATUALIZAÇÃO PREÇOS CAMPANHAS TOYAMA",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 428,
    "inicio": "2024-07-04",
    "final": "2024-07-04",
    "acao": "ATUALIZAÇÃO PREÇOS TEKNA",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 427,
    "inicio": "2024-07-04",
    "final": "2024-07-04",
    "acao": "ATUALIZAÇÃO PREÇOS MODULLATO",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 426,
    "inicio": "2024-07-03",
    "final": "2024-07-03",
    "acao": "ATUALIZAÇÃO PREÇOS BRITÂNIA",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 425,
    "inicio": "2024-07-03",
    "final": "2024-07-03",
    "acao": "ATUALIZAÇÃO PREÇOS CCM SC",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 424,
    "inicio": "2024-07-03",
    "final": "2024-07-03",
    "acao": "REAJUSTE MARKUPS - IMPULSÃO ATÉ DIA 10/07",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 423,
    "inicio": "2024-07-03",
    "final": "2024-07-03",
    "acao": "AJUSTE TAXAS MINIMAS EM PRODUTOS ABAIXO D 80,00 MERCADO LIVRE",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 422,
    "inicio": "2024-07-02",
    "final": "2024-07-02",
    "acao": "INICIO STYVE NO TRANSPORTE",
    "local": "EQUIPE",
    "setor": "Operações"
  },
  {
    "id": 421,
    "inicio": "2024-07-02",
    "final": "2024-07-02",
    "acao": "ATUALIZAÇÃO PREÇOS NOVA MOTORES",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 420,
    "inicio": "2024-07-02",
    "final": "2024-07-02",
    "acao": "PRIMEIRA VENDA FLACH",
    "local": "FORNECEDORES",
    "setor": "Vendas"
  },
  {
    "id": 419,
    "inicio": "2024-07-01",
    "final": "2024-07-01",
    "acao": "ATUALIZAÇÃO PREÇOS PDR",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 418,
    "inicio": "2024-07-01",
    "final": "2024-07-01",
    "acao": "INICIO MARCIO NO TI",
    "local": "EQUIPE",
    "setor": "Operações"
  },
  {
    "id": 417,
    "inicio": "2024-07-01",
    "final": "2024-07-01",
    "acao": "LOJA OFICIAL MERCADO LIVRE APROVADA",
    "local": "MARKETPLACES",
    "setor": "Marketplaces"
  },
  {
    "id": 416,
    "inicio": "2024-07-01",
    "final": "2024-07-01",
    "acao": "ATUALIZAÇÃO PREÇOS LYNUS",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 415,
    "inicio": "2024-07-01",
    "final": "2024-07-01",
    "acao": "ATUALIZAÇÃO PREÇOS GMEG",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 414,
    "inicio": "2024-06-28",
    "final": "2024-06-28",
    "acao": "AJUTE IPV OVD FAIXA DE 200 a 2000",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 413,
    "inicio": "2024-06-28",
    "final": "2024-06-28",
    "acao": "AJUTE IPV OVD FAIXA DE 0 a 100",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 412,
    "inicio": "2024-06-27",
    "final": "2024-06-27",
    "acao": "INICIO PROJETO EXPEDIÇÃO",
    "local": "HARDNESS",
    "setor": "Melhorias"
  },
  {
    "id": 411,
    "inicio": "2024-06-27",
    "final": "2024-06-27",
    "acao": "LIBERAÇÃO MELHORIA INVENTÁRIO",
    "local": "HARDNESS",
    "setor": "Melhorias"
  },
  {
    "id": 410,
    "inicio": "2024-06-24",
    "final": "2024-06-24",
    "acao": "ALTERAÇÃO FOCO ATIVIDADES LEANDRO PARA ATRIBUTOS",
    "local": "EQUIPE",
    "setor": "Operações"
  },
  {
    "id": 409,
    "inicio": "2024-06-24",
    "final": "2024-06-24",
    "acao": "ACRESCIMO DE FRETE +30% NATIVA TRANSPORTES",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 408,
    "inicio": "2024-06-24",
    "final": "2024-06-24",
    "acao": "ATIVAÇÃO DE TABELA NATIVA TRANSPORTES",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 407,
    "inicio": "2024-06-20",
    "final": "2024-06-20",
    "acao": "TESTE AMAZON ADS GUIMEPA | GMK8 | DELTATOP",
    "local": "MARKETPLACES",
    "setor": "Vendas"
  },
  {
    "id": 406,
    "inicio": "2024-06-19",
    "final": "2024-06-19",
    "acao": "ATUALIZAÇÃO TABELA BRITÂNIA",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 405,
    "inicio": "2024-06-17",
    "final": "2024-06-17",
    "acao": "AJUSTE PRAZO DE CROSS PRESTO 6>10",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 404,
    "inicio": "2024-06-17",
    "final": "2024-06-17",
    "acao": "LIMPEZA DE ANÚNCIOS QUE NÃO IREMOS REPOR",
    "local": "MARKETPLACES",
    "setor": "Full Meli"
  },
  {
    "id": 403,
    "inicio": "2024-06-17",
    "final": "2024-06-17",
    "acao": "AJUSTE IPV NEGRÃO 1,60 > 1,55 ACIMA DE 30 a 1000",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 402,
    "inicio": "2024-06-17",
    "final": "2024-06-17",
    "acao": "AJUSTE IPV NEGRÃO 1,60 > 1,65 ACIMA DE 0 a 30",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 401,
    "inicio": "2024-06-17",
    "final": "2024-06-17",
    "acao": "AJUSTE IPV NEGRÃO 1,60 > 1,53 ACIMA DE 1000",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 400,
    "inicio": "2024-06-17",
    "final": "2024-06-17",
    "acao": "CRIAÇÃO TELAS BI",
    "local": "PLATAFORMAS",
    "setor": "Operações"
  },
  {
    "id": 399,
    "inicio": "2024-06-14",
    "final": "2024-06-14",
    "acao": "PROMOÇÕES ENCERRADAS DA TOYAMA",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 398,
    "inicio": "2024-06-14",
    "final": "2024-06-14",
    "acao": "PROMOÇÕES ENCERRADAS DA TOYAMA | 80 SKUS AUMENTO",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 397,
    "inicio": "2024-06-14",
    "final": "2024-06-14",
    "acao": "AUMENTO TABELA NOVA MOTORES ALTA DO COBRE",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 396,
    "inicio": "2024-06-14",
    "final": "2024-06-14",
    "acao": "REDUÇÃO PRAZO DE CROSS MAKITA 6>4",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 395,
    "inicio": "2024-06-13",
    "final": "2024-06-13",
    "acao": "PROBLEMA COM PREÇOS WEBCONTINENTAL LOJA INATIVA DO DIA 11/06 a 12/06",
    "local": "ANYMARKET",
    "setor": "Marketplaces"
  },
  {
    "id": 394,
    "inicio": "2024-06-12",
    "final": "2024-06-12",
    "acao": "INICIO WESLEY",
    "local": "EQUIPE",
    "setor": "Operações"
  },
  {
    "id": 393,
    "inicio": "2024-06-12",
    "final": "2024-06-12",
    "acao": "REUNIÃO ALINHAMENTO VONDER",
    "local": "FORNECEDORES",
    "setor": "Vendas"
  },
  {
    "id": 392,
    "inicio": "2024-06-12",
    "final": "2024-06-12",
    "acao": "REDUÇÃO PRAZO DE CROSS LYNUS 5>4",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 391,
    "inicio": "2024-06-12",
    "final": "2024-06-12",
    "acao": "REDUÇÃO PRAZO DE CROSS BOXER 5>3",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 390,
    "inicio": "2024-06-12",
    "final": "2024-06-12",
    "acao": "REDUÇÃO PRAZO DE CROSS NOVA MOTORES 5>3",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 389,
    "inicio": "2024-06-12",
    "final": "2024-06-12",
    "acao": "REDUÇÃO PRAZO DE CROSS PUMA 8>5",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 388,
    "inicio": "2024-06-12",
    "final": "2024-06-12",
    "acao": "REDUÇÃO PRAZO DE CROSS PDR 8>3",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 387,
    "inicio": "2024-06-12",
    "final": "2024-06-12",
    "acao": "REDUÇÃO PRAZO DE CROSS MODULATTO 8>5",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 386,
    "inicio": "2024-06-11",
    "final": "2024-06-11",
    "acao": "REDUÇÃO PRAZO DE CROSS CCM 6>4",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 385,
    "inicio": "2024-06-11",
    "final": "2024-06-11",
    "acao": "REDUÇÃO PRAZO DE CROSS TRAPP 14>7",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 384,
    "inicio": "2024-06-11",
    "final": "2024-06-11",
    "acao": "REDUÇÃO PRAZO DE CROSS PRESTO 10>6",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 383,
    "inicio": "2024-06-11",
    "final": "2024-06-11",
    "acao": "REDUÇÃO PRAZO DE CROSS BUFFALO 8>6",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 382,
    "inicio": "2024-06-11",
    "final": "2024-06-11",
    "acao": "REDUÇÃO PRAZO DE CROSS MAKITA 10>6",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 381,
    "inicio": "2024-06-11",
    "final": "2024-06-11",
    "acao": "ENCERRADAS - Campanha Reanimar B2W 3 Lojas 10% 0 a 100",
    "local": "ANYMARKET",
    "setor": "Campanhas"
  },
  {
    "id": 380,
    "inicio": "2024-06-11",
    "final": "2024-06-11",
    "acao": "ENCERRADAS - Campanha Reanimar B2W 3 Lojas 5% 100 a 3000",
    "local": "ANYMARKET",
    "setor": "Campanhas"
  },
  {
    "id": 377,
    "inicio": "2024-06-06",
    "final": "2024-06-28",
    "acao": "Campanha Reanimar B2W 3 Lojas 10% 0 a 100",
    "local": "ANYMARKET",
    "setor": "Campanhas"
  },
  {
    "id": 376,
    "inicio": "2024-06-06",
    "final": "2024-06-28",
    "acao": "Campanha Reanimar B2W 3 Lojas 5% 100 a 3000",
    "local": "ANYMARKET",
    "setor": "Campanhas"
  },
  {
    "id": 379,
    "inicio": "2024-06-06",
    "final": "2024-06-10",
    "acao": "Campanha Reanimar AMAZON 3 Lojas 10% 0 a 100",
    "local": "ANYMARKET",
    "setor": "Campanhas"
  },
  {
    "id": 378,
    "inicio": "2024-06-06",
    "final": "2024-06-10",
    "acao": "Campanha Reanimar AMAZON 3 Lojas 5% 100 a 3000",
    "local": "ANYMARKET",
    "setor": "Campanhas"
  },
  {
    "id": 375,
    "inicio": "2024-06-06",
    "final": "2024-06-06",
    "acao": "CAMPANHAS EMB MASTER REDIRECIONADAS PARA CAMPANHAS HARDNESS",
    "local": "HARDNESS",
    "setor": "Campanhas"
  },
  {
    "id": 374,
    "inicio": "2024-06-05",
    "final": "2024-06-05",
    "acao": "REUNIÃO DE ALINHAMENTO MENEGOTTI",
    "local": "FORNECEDORES",
    "setor": "Vendas"
  },
  {
    "id": 373,
    "inicio": "2024-06-05",
    "final": "2024-06-05",
    "acao": "REDUÇÃO NO PRAZO DE CROSS MENEGOTTI 7>4",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 372,
    "inicio": "2024-06-04",
    "final": "2024-06-04",
    "acao": "REMOÇÃO PRAZO DE 1 DIA MANUZEIO TRANSPORTADORAS",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 371,
    "inicio": "2024-06-04",
    "final": "2024-06-04",
    "acao": "ALTERAÇÃO PRAZO DE CROSS OVD 2>3 DIAS",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 370,
    "inicio": "2024-05-31",
    "final": "2024-05-31",
    "acao": "AUMENTO TABELA LYNUS",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 369,
    "inicio": "2024-05-31",
    "final": "2024-05-31",
    "acao": "PADRONIZAÇÃO DE MARKUPS TODAS AS LOJAS",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 368,
    "inicio": "2024-05-28",
    "final": "2024-05-28",
    "acao": "MUDANÇA REPRESENTANTE BRITÂNIA/PHILCO",
    "local": "FORNECEDORES",
    "setor": "Operações"
  },
  {
    "id": 367,
    "inicio": "2024-05-28",
    "final": "2024-05-28",
    "acao": "REDUÇÃO PRAZO DE CROSS CSM 7>4",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 366,
    "inicio": "2024-05-27",
    "final": "2024-05-31",
    "acao": "CAMPANHA IMPUSÃO PLATINUM 5% CUPOM - MIN R$ 50 - MAX R$ 200",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 365,
    "inicio": "2024-05-23",
    "final": "2024-05-23",
    "acao": "SAÍDA DOUGLAS DA EQUIPE",
    "local": "EQUIPE",
    "setor": "Operações"
  },
  {
    "id": 364,
    "inicio": "2024-05-20",
    "final": "2024-05-20",
    "acao": "REAJUSTE MÉDIO 6% TABELA VONDER",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 363,
    "inicio": "2024-05-20",
    "final": "2024-05-20",
    "acao": "LOJA DO MERCADO LIVRE RETORNO PLATINUM",
    "local": "MARKETPLACES",
    "setor": "Vendas"
  },
  {
    "id": 362,
    "inicio": "2024-05-08",
    "final": "2024-05-08",
    "acao": "ENCONTRADO ERRO NO SITE DELTATOP NO CADASTRO",
    "local": "MAGENTO",
    "setor": "Vendas"
  },
  {
    "id": 361,
    "inicio": "2024-05-08",
    "final": "2024-05-08",
    "acao": "REDUÇÃO CROSS OVD 3 > 2 / ABAIXO DE R$ 40 4 > 3",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 359,
    "inicio": "2024-05-06",
    "final": "2024-05-27",
    "acao": "FÉRIAS BRUNO",
    "local": "EQUIPE",
    "setor": "Operações"
  },
  {
    "id": 360,
    "inicio": "2024-05-06",
    "final": "2024-05-06",
    "acao": "ENTRADA DA JOCELI",
    "local": "EQUIPE",
    "setor": "Operações"
  },
  {
    "id": 358,
    "inicio": "2024-05-03",
    "final": "2024-05-03",
    "acao": "ACRESCIMO +7 DIAS NO PRAZO DE ENTREGA PARA RS (ALAGAMENTOS)",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 357,
    "inicio": "2024-05-01",
    "final": "2024-05-01",
    "acao": "ENCHENTE RIO GRANDE DO SUL",
    "local": "FORNECEDORES",
    "setor": "Operações"
  },
  {
    "id": 356,
    "inicio": "2024-04-26",
    "final": "2024-04-26",
    "acao": "RETORNO LOJA AMAZON DELTATOP PARA DBA",
    "local": "MARKETPLACES",
    "setor": "Operações"
  },
  {
    "id": 355,
    "inicio": "2024-04-26",
    "final": "2024-04-26",
    "acao": "RETORNO LOJA AMAZON GMK8 PARA DBA",
    "local": "MARKETPLACES",
    "setor": "Operações"
  },
  {
    "id": 354,
    "inicio": "2024-04-24",
    "final": "2024-04-24",
    "acao": "ALINHAMENTO PRECIFICA",
    "local": "PLATAFORMAS",
    "setor": "Melhorias"
  },
  {
    "id": 353,
    "inicio": "2024-04-24",
    "final": "2024-04-24",
    "acao": "AJUSTE MARKUP AMAZON GMK8 REANIMAR LOJA PADRÃO 1 PARA RETA FINAL DE MÊS",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 352,
    "inicio": "2024-04-24",
    "final": "2024-04-24",
    "acao": "AJUSTE MARKUP AMAZON DELTATOP REANIMAR LOJA PADRÃO 1,02",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 351,
    "inicio": "2024-04-24",
    "final": "2024-04-24",
    "acao": "AJUSTE MARKUP VIA VAREJO REANIMAR LOJA PADRÃO 1,03",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 350,
    "inicio": "2024-04-24",
    "final": "2024-04-24",
    "acao": "REAJUSTE CROSS OVD ACIMA DE 30,00 5>4",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 349,
    "inicio": "2024-04-24",
    "final": "2024-04-24",
    "acao": "REAJUSTE CROSS OVD ACIMA DE 30,00 4>3",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 348,
    "inicio": "2024-04-23",
    "final": "2024-04-23",
    "acao": "INICIO PROJETO IPV - MARGEM",
    "local": "HARDNESS",
    "setor": "Melhorias"
  },
  {
    "id": 347,
    "inicio": "2024-04-23",
    "final": "2024-04-23",
    "acao": "AUMENTO 3% MARKUP OVD FAIXA | 50 A 100",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 346,
    "inicio": "2024-04-23",
    "final": "2024-04-23",
    "acao": "AUMENTO 8% MARKUP OVD FAIXA | 0 A 50",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 345,
    "inicio": "2024-04-22",
    "final": "2024-04-22",
    "acao": "REUNIAO DE ALINHAMENTO CMB",
    "local": "FORNECEDORES",
    "setor": "Vendas"
  },
  {
    "id": 344,
    "inicio": "2024-04-17",
    "final": "2024-04-17",
    "acao": "REUNIÃO DE ALINHAMENTO GRUPO UNITA",
    "local": "FORNECEDORES",
    "setor": "Vendas"
  },
  {
    "id": 343,
    "inicio": "2024-04-17",
    "final": "2024-04-17",
    "acao": "REUNIÃO DE ALINHAMENTO BOVENAU",
    "local": "FORNECEDORES",
    "setor": "Vendas"
  },
  {
    "id": 342,
    "inicio": "2024-04-16",
    "final": "2024-04-16",
    "acao": "REUNIAO DE ALINHAMENTO API BETA",
    "local": "FORNECEDORES",
    "setor": "Vendas"
  },
  {
    "id": 341,
    "inicio": "2024-04-16",
    "final": "2024-04-16",
    "acao": "LOJA DELTATOP AMAZON DEIXOU DE SER DBA",
    "local": "MARKETPLACES",
    "setor": "Operações"
  },
  {
    "id": 340,
    "inicio": "2024-04-15",
    "final": "2024-04-15",
    "acao": "INICIO DOUGLAS NA EQUIPE",
    "local": "EQUIPE",
    "setor": "Melhorias"
  },
  {
    "id": 339,
    "inicio": "2024-04-12",
    "final": "2024-04-12",
    "acao": "REAJUSTE ACRÉSCIMO DE FRETE RODONAVES",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 338,
    "inicio": "2024-04-11",
    "final": "2024-04-11",
    "acao": "REUNIAO DE ALINHAMENTO CORTAG",
    "local": "FORNECEDORES",
    "setor": "Vendas"
  },
  {
    "id": 337,
    "inicio": "2024-04-09",
    "final": "2024-04-09",
    "acao": "AUMENTO IPV OVD FAIXA 1000 a 2000 | 1,58 > 1,60",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 336,
    "inicio": "2024-04-09",
    "final": "2024-04-09",
    "acao": "AUMENTO IPV OVD FAIXA 500 a 1000 | 1,64 > 1,65",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 335,
    "inicio": "2024-04-09",
    "final": "2024-04-09",
    "acao": "AUMENTO IPV OVD FAIXA 200 a 500 | 1,65 > 1,68",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 334,
    "inicio": "2024-04-09",
    "final": "2024-04-09",
    "acao": "AUMENTO IPV OVD FAIXA 100 a 200 | 1,75 > 1,80",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 333,
    "inicio": "2024-04-09",
    "final": "2024-04-09",
    "acao": "AUMENTO IPV OVD FAIXA 0 a 100 | 1,85 > 1,95",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 332,
    "inicio": "2024-04-08",
    "final": "2024-04-08",
    "acao": "REUNIAO DE ALINHAMENTO CCM",
    "local": "FORNECEDORES",
    "setor": "Vendas"
  },
  {
    "id": 331,
    "inicio": "2024-04-05",
    "final": "2024-04-05",
    "acao": "ENVIO DA MASTER PARA ITAJAI",
    "local": "EQUIPE",
    "setor": "Operações"
  },
  {
    "id": 330,
    "inicio": "2024-04-04",
    "final": "2024-04-04",
    "acao": "FEICON",
    "local": "FORNECEDORES",
    "setor": "Vendas"
  },
  {
    "id": 329,
    "inicio": "2024-04-02",
    "final": "2024-04-02",
    "acao": "REUNIAO DE ALINHAMENTO BRITANIA",
    "local": "FORNECEDORES",
    "setor": "Vendas"
  },
  {
    "id": 328,
    "inicio": "2024-04-01",
    "final": "2024-04-01",
    "acao": "REUNIAO DE ALINHAMENTO BRANCO",
    "local": "FORNECEDORES",
    "setor": "Vendas"
  },
  {
    "id": 327,
    "inicio": "2024-04-01",
    "final": "2024-04-01",
    "acao": "BRANCO | AJUSTE CROSSDOCKING 10>4 DIAS",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 326,
    "inicio": "2024-03-28",
    "final": "2024-03-28",
    "acao": "AUMENTO IPV FAIXA 0 a 200",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 325,
    "inicio": "2024-03-27",
    "final": "2024-03-27",
    "acao": "DESATIVADO - REDUÇÃO -2 PRAZO DE ENTREGA MELI SP CAPITAL PRODUTOS SELECIONADOS",
    "local": "INTELIPOST",
    "setor": "Marketplaces"
  },
  {
    "id": 324,
    "inicio": "2024-03-27",
    "final": "2024-03-27",
    "acao": "LOJA GMK8 AMAZON DEIXOU DE SER DBA",
    "local": "MARKETPLACES",
    "setor": "Operações"
  },
  {
    "id": 322,
    "inicio": "2024-03-19",
    "final": "2024-03-20",
    "acao": "REAJUSTE IPV GERAL TODAS AS MARCAS",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 323,
    "inicio": "2024-03-19",
    "final": "2024-03-19",
    "acao": "REDUÇÃO NO PRAZO ADC MAGALU 9>7",
    "local": "INTELIPOST",
    "setor": "Marketplaces"
  },
  {
    "id": 321,
    "inicio": "2024-03-15",
    "final": "2024-03-15",
    "acao": "REDUÇÃO -2 PRAZO DE ENTREGA MELI SP CAPITAL PRODUTOS SELECIONADOS",
    "local": "INTELIPOST",
    "setor": "Marketplaces"
  },
  {
    "id": 320,
    "inicio": "2024-03-15",
    "final": "2024-03-15",
    "acao": "REDUÇÃO CROSS DOCKING MENEGOTTI 8>7 DIAS",
    "local": "HARDNESS",
    "setor": "HARDNESS"
  },
  {
    "id": 319,
    "inicio": "2024-03-15",
    "final": "2024-03-15",
    "acao": "REDUÇÃO CROSS DOCKING LYNUS 6>5 DIAS",
    "local": "HARDNESS",
    "setor": "HARDNESS"
  },
  {
    "id": 318,
    "inicio": "2024-03-14",
    "final": "2024-03-14",
    "acao": "REDUÇÃO CROSS DOCKING BEL PRODUZIDOS 14>8 DIAS",
    "local": "HARDNESS",
    "setor": "HARDNESS"
  },
  {
    "id": 317,
    "inicio": "2024-03-14",
    "final": "2024-03-14",
    "acao": "REDUÇÃO CROSS DOCKING BEL 8>4 DIAS",
    "local": "HARDNESS",
    "setor": "HARDNESS"
  },
  {
    "id": 316,
    "inicio": "2024-03-14",
    "final": "2024-03-14",
    "acao": "PREÇOS AGRESSIVOS LYNUS E GMEG",
    "local": "FORNECEDORES",
    "setor": "Preços"
  },
  {
    "id": 315,
    "inicio": "2024-03-07",
    "final": "2024-03-07",
    "acao": "REDUÇÃO DE DESCONTO NOS NÍVEIS DE ESTOQUE PARADO | ESTOQUE LIQ ACIMA 150 de 30%>25%",
    "local": "HARDNESS",
    "setor": "Campanhas"
  },
  {
    "id": 314,
    "inicio": "2024-03-07",
    "final": "2024-03-07",
    "acao": "CROSS DOCKING OVD 2>4 DIAS ITENS ABAIXO DE 100",
    "local": "HARDNESS",
    "setor": "HARDNESS"
  },
  {
    "id": 313,
    "inicio": "2024-03-07",
    "final": "2024-03-07",
    "acao": "CROSS DOCKING OVD 2>3 DIAS ITENS ACIMA DE 100",
    "local": "HARDNESS",
    "setor": "HARDNESS"
  },
  {
    "id": 312,
    "inicio": "2024-03-07",
    "final": "2024-03-07",
    "acao": "AUMENTO 1% MARKUP OVD EM TODA SAS LOJAS ACIMA DE R$ 50",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 311,
    "inicio": "2024-03-07",
    "final": "2024-03-07",
    "acao": "AUMENTO 5% MARKUP OVD EM TODAS AS LOJAS 0 a R$ 50",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 310,
    "inicio": "2024-03-06",
    "final": "2024-03-06",
    "acao": "AJUSTE TAXA DE FRETE GRÁTIS SUL SUDESTE SKUS SELECIONADOS",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 309,
    "inicio": "2024-03-06",
    "final": "2024-03-06",
    "acao": "AJUSTE MARKUP PRODUTOS FULL",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 308,
    "inicio": "2024-03-06",
    "final": "2024-03-06",
    "acao": "AJUSTE MARKUP GERAL TAXAS FIXAS E NÍVEIS DE COMISSÃO",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 307,
    "inicio": "2024-03-06",
    "final": "2024-03-06",
    "acao": "AUMENTO IPV OUTRAS MARCAS ACIMA DE 1000 - 1%",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 306,
    "inicio": "2024-03-06",
    "final": "2024-03-06",
    "acao": "AUMENTO IPV OUTRAS MARCAS 300 a 1000 - 2%",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 305,
    "inicio": "2024-03-06",
    "final": "2024-03-06",
    "acao": "AUMENTO IPV OUTRAS MARCAS 100 a 300 - 2%",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 304,
    "inicio": "2024-03-06",
    "final": "2024-03-06",
    "acao": "AUMENTO IPV OUTRAS MARCAS 50 a 100 - 3%",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 303,
    "inicio": "2024-03-06",
    "final": "2024-03-06",
    "acao": "AUMENTO IPV OUTRAS MARCAS 0 a 50 - 10%",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 302,
    "inicio": "2024-03-06",
    "final": "2024-03-06",
    "acao": "AUMENTO IPV OVD ACIMA DE 1000 - 2%",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 301,
    "inicio": "2024-03-06",
    "final": "2024-03-06",
    "acao": "AUMENTO IPV OVD 300 a 1000 - 3%",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 300,
    "inicio": "2024-03-06",
    "final": "2024-03-06",
    "acao": "AUMENTO IPV OVD 100 a 300 - 4%",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 299,
    "inicio": "2024-03-06",
    "final": "2024-03-06",
    "acao": "AUMENTO IPV OVD 50 a 100 - 5%",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 298,
    "inicio": "2024-03-06",
    "final": "2024-03-06",
    "acao": "AUMENTO IPV OVD 0 a 50 - 15%",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 297,
    "inicio": "2024-03-06",
    "final": "2024-03-06",
    "acao": "REDUÇÃO NO PRAZO CROSS DOCKING TEKNA 6-3",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 296,
    "inicio": "2024-03-05",
    "final": "2024-03-05",
    "acao": "INICIANDO PROJETO COM WELLYTON DE ACOMPANHAMENTO TEMPO LOGISTICO",
    "local": "EQUIPE",
    "setor": "Operações"
  },
  {
    "id": 295,
    "inicio": "2024-03-05",
    "final": "2024-03-05",
    "acao": "INICIO RETIRA GMEG, TOYAMA E NORDTECH",
    "local": "FORNECEDORES",
    "setor": "Vendas"
  },
  {
    "id": 294,
    "inicio": "2024-03-05",
    "final": "2024-03-05",
    "acao": "REDUÇÃO NO PRAZO CROSS DOCKING GMEG 7-3 E TOYAMA 6-3",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 293,
    "inicio": "2024-03-01",
    "final": "2024-03-01",
    "acao": "REAJUSTE ACRESCIMO DE FRETE TNT 70%",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 292,
    "inicio": "2024-03-01",
    "final": "2024-03-01",
    "acao": "REAJUSTE ACRESCIMO DE FRETE TOTAL EXPRESS 50%",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 291,
    "inicio": "2024-03-01",
    "final": "2024-03-01",
    "acao": "REAJUSTE ACRESCIMO DE FRETE ATUALCARGAS 15% NORDESTE",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 290,
    "inicio": "2024-03-01",
    "final": "2024-03-01",
    "acao": "REAJUSTE ACRESCIMO DE FRETE RODONAVES 60%",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 289,
    "inicio": "2024-03-01",
    "final": "2024-03-01",
    "acao": "REAJUSTE ACRESCIMO DE FRETE JADLOG 40%",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 286,
    "inicio": "2024-02-29",
    "final": "2024-03-04",
    "acao": "OVD CROSS 2 DIAS FINAL DE SEMANA",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 288,
    "inicio": "2024-02-29",
    "final": "2024-02-29",
    "acao": "INICIO USO CONFERENCIA CEGA NO RECEBIMENTO ITAJAI",
    "local": "HARDNESS",
    "setor": "Melhorias"
  },
  {
    "id": 287,
    "inicio": "2024-02-29",
    "final": "2024-02-29",
    "acao": "AUMENTO MARKUP WEBCONTINENTAL 10% Abaixo de R$ 80 E 3% ACIMA",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 285,
    "inicio": "2024-02-27",
    "final": "2024-02-27",
    "acao": "OVD | 146 ITENS CAROS SEM VENDAS COM CROSS 2 DIAS",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 284,
    "inicio": "2024-02-23",
    "final": "2024-02-23",
    "acao": "FRETE GRATIS SAO PAULO MADEIRA MADEIRA ACIMA DE R$150 ATÉ 5KG",
    "local": "INTELIPOST",
    "setor": "Marketplaces"
  },
  {
    "id": 283,
    "inicio": "2024-02-22",
    "final": "2024-02-22",
    "acao": "DESATIVADA REGRA NA REDUÇÃO DO PRAZO MELI",
    "local": "INTELIPOST",
    "setor": "Marketplaces"
  },
  {
    "id": 282,
    "inicio": "2024-02-19",
    "final": "2024-02-19",
    "acao": "REDUÇÃO NO PRAZO DE ENTREGA -3 DIAS MELI",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 281,
    "inicio": "2024-02-19",
    "final": "2024-02-19",
    "acao": "AJUSTE CROSS TUDO COM 3 DIAS OVD MERCADO LIVRE",
    "local": "INTELIPOST",
    "setor": "Operações"
  },
  {
    "id": 280,
    "inicio": "2024-02-16",
    "final": "2024-02-16",
    "acao": "INICIO DAS COMPRAS COMO RETIRA OVD ITAJAI",
    "local": "FORNECEDORES",
    "setor": "Vendas"
  },
  {
    "id": 279,
    "inicio": "2024-02-16",
    "final": "2024-02-16",
    "acao": "AUMENTO NO PRAZO ADICIONAL DE ENTREGA 3 LOJAS MAGALU DE 8 PARA 9 DIAS",
    "local": "INTELIPOST",
    "setor": "Marketplaces"
  },
  {
    "id": 278,
    "inicio": "2024-02-15",
    "final": "2024-02-15",
    "acao": "PAUSA NA CAMPANHA DE FRETE GRATIS SUL/SUDESTE",
    "local": "INTELIPOST",
    "setor": "Marketplaces"
  },
  {
    "id": 277,
    "inicio": "2024-02-14",
    "final": "2024-02-14",
    "acao": "AUMENTO MARKUP 3 LOJAS MAGALU | ACIMA de 500 - 7%",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 276,
    "inicio": "2024-02-14",
    "final": "2024-02-14",
    "acao": "AUMENTO MARKUP 3 LOJAS MAGALU | FAIXA 200 a 500 - 8%",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 275,
    "inicio": "2024-02-14",
    "final": "2024-02-14",
    "acao": "AUMENTO MARKUP 3 LOJAS MAGALU | FAIXA 100 a 200 - 10%",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 274,
    "inicio": "2024-02-14",
    "final": "2024-02-14",
    "acao": "AUMENTO MARKUP 3 LOJAS MAGALU | FAIXA 0 a 100 - 15%",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 273,
    "inicio": "2024-02-08",
    "final": "2024-02-08",
    "acao": "AUMENTO CROSSDOCKING OVD DE 5 PARA 6 - FAIXA ACIMA DE R$ 100",
    "local": "HARDNESS",
    "setor": "Vendas"
  },
  {
    "id": 272,
    "inicio": "2024-02-02",
    "final": "2024-02-02",
    "acao": "SAÍDA IVAN",
    "local": "EQUIPE",
    "setor": "Operações"
  },
  {
    "id": 271,
    "inicio": "2024-02-01",
    "final": "2024-02-01",
    "acao": "FRETE GRATIS SUL/SUDESTE ACIMA DE 400 BALAROTI",
    "local": "INTELIPOST",
    "setor": "Marketplaces"
  },
  {
    "id": 270,
    "inicio": "2024-01-30",
    "final": "2024-01-30",
    "acao": "AJUSTE NO PRAZO ADICIONAL MAGALU 3 LOJAS DE 6 DIAS PARA 8 DIAS",
    "local": "INTELIPOST",
    "setor": "Marketplaces"
  },
  {
    "id": 269,
    "inicio": "2024-01-30",
    "final": "2024-01-30",
    "acao": "ADIÇÃO de 963 SKUS na campanha de frete grátis SUL/SUDESTE",
    "local": "INTELIPOST",
    "setor": "Campanhas"
  },
  {
    "id": 268,
    "inicio": "2024-01-29",
    "final": "2024-01-29",
    "acao": "Alteração de Endereço de Coleta B2W ENTREGAS loja B2W DELTATOP",
    "local": "MARKETPLACES",
    "setor": "Operações"
  },
  {
    "id": 267,
    "inicio": "2024-01-24",
    "final": "2024-01-24",
    "acao": "OVD | Aumento IPV em 20% PRODUTOS de 50,00 a 100,00",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 266,
    "inicio": "2024-01-24",
    "final": "2024-01-24",
    "acao": "OVD | Aumento IPV em 30% PRODUTOS de 0 a 50,00",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 265,
    "inicio": "2024-01-24",
    "final": "2024-01-24",
    "acao": "AUMENTO CROSSDOCKING OVD produtos abaixo de 100,00 de 6 para 8 dias",
    "local": "HARDNESS",
    "setor": "Vendas"
  },
  {
    "id": 264,
    "inicio": "2024-01-22",
    "final": "2024-01-22",
    "acao": "DEMISSÃO CELSO E FELLIPE",
    "local": "EQUIPE",
    "setor": "Operações"
  },
  {
    "id": 263,
    "inicio": "2024-01-20",
    "final": "2024-01-20",
    "acao": "MUDANÇA CD ITAJAÍ",
    "local": "EQUIPE",
    "setor": "Operações"
  },
  {
    "id": 262,
    "inicio": "2024-01-17",
    "final": "2024-01-17",
    "acao": "Configurado grupo de produtos \"iscas\" na Intelipost",
    "local": "INTELIPOST",
    "setor": "Marketplaces"
  },
  {
    "id": 261,
    "inicio": "2024-01-17",
    "final": "2024-01-17",
    "acao": "Acrescimo de +10% frete canal Shopee",
    "local": "INTELIPOST",
    "setor": "Marketplaces"
  },
  {
    "id": 260,
    "inicio": "2024-01-16",
    "final": "2024-01-16",
    "acao": "RETOMADA MELHORIA EXPEDIÇÃO",
    "local": "HARDNESS",
    "setor": "Melhorias"
  },
  {
    "id": 259,
    "inicio": "2024-01-16",
    "final": "2024-01-16",
    "acao": "Configurado 18 Produtos na Campanha ISCAS de Fornecedor com dificuldade para comprar",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 258,
    "inicio": "2024-01-16",
    "final": "2024-01-16",
    "acao": "Remoção de Itens que não serão repostos (25 produtos)",
    "local": "MARKETPLACES",
    "setor": "Full Meli"
  },
  {
    "id": 257,
    "inicio": "2024-01-16",
    "final": "2024-01-16",
    "acao": "Redução de preços de Produtos com estoque acima de 30 dias (44 produtos)",
    "local": "MARKETPLACES",
    "setor": "Full Meli"
  },
  {
    "id": 256,
    "inicio": "2024-01-16",
    "final": "2024-01-16",
    "acao": "Redução de preços de Produtos com estoque execedente (8 produtos)",
    "local": "MARKETPLACES",
    "setor": "Full Meli"
  },
  {
    "id": 255,
    "inicio": "2024-01-15",
    "final": "2024-01-15",
    "acao": "OVD | AUMENTO 2% FAIXA ACIMA DE 100",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 254,
    "inicio": "2024-01-15",
    "final": "2024-01-15",
    "acao": "OVD | AUMENTO 5% FAIXA 50 A 100",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 253,
    "inicio": "2024-01-15",
    "final": "2024-01-15",
    "acao": "OVD | AUMENTO 15% FAIXA 0 a 50,00",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 252,
    "inicio": "2024-01-12",
    "final": "2024-01-12",
    "acao": "Acréscimo de 2 dias no prazo de entrega Magalu GMP/DELTATOP (REGRA EM 6 DIAS)",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 251,
    "inicio": "2024-01-11",
    "final": "2024-01-11",
    "acao": "OVD | AJUSTES IPV FAIXA ACIMA 100 - SKUs COM IPV ACIMA DE 1,65 - ITENS FORA PROMOCOES",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 250,
    "inicio": "2024-01-11",
    "final": "2024-01-11",
    "acao": "OVD | AUMENTO 5% FAIXA 0 a 100 - SKUs QUE NÃO ESTAVAM COM IPV ACIMA DE 2 - ITENS FORA PROMOCOES",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 249,
    "inicio": "2024-01-10",
    "final": "2024-01-10",
    "acao": "CAMPANHA FRETE GRATIS SUL/SUDESTE ACIMA DE 300 OI PLACE",
    "local": "INTELIPOST",
    "setor": "Marketplaces"
  },
  {
    "id": 248,
    "inicio": "2024-01-09",
    "final": "2024-01-09",
    "acao": "AJUSTE PRECOS FULL - ADEQUAÇÃO DE FRETES | MENOS ITENS QUEIMA DE ESTOQUE E ISCAS",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 247,
    "inicio": "2024-01-09",
    "final": "2024-01-09",
    "acao": "OVD | AUMENTO MARKUP DE FAIXAS A BAIXO DE 500 | 5% ITENS ATÉ 20,00 - 2% RESTANTE TODOS CANAIS MENOS FULL",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 246,
    "inicio": "2024-01-08",
    "final": "2024-01-08",
    "acao": "OVD | AUMENTO IPV FAIXAS DE 2% A 5% DE MAIS BAIXO PARA MAIS ALTO",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 245,
    "inicio": "2024-01-03",
    "final": "2024-01-03",
    "acao": "AUMENTO DE 1 DIAS EM TODOS OS PRAZOS DE DESPACHO (Inversão com prazo de MANUSEIO)",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 244,
    "inicio": "2024-01-03",
    "final": "2024-01-03",
    "acao": "REDUÇÃO DO PRAZO DE MANUSEIO DAS TRANSPORTADORAS DE 2 PARA 1 DIA",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 243,
    "inicio": "2023-12-27",
    "final": "2023-12-27",
    "acao": "ENTRADA EQUIPE LEANDRO",
    "local": "EQUIPE",
    "setor": "Operações"
  },
  {
    "id": 242,
    "inicio": "2023-12-21",
    "final": "2023-12-21",
    "acao": "AUMENTO DE 2 DIAS NO PRAZO ADICIONAL DAS TRANSPORTADORAS",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 241,
    "inicio": "2023-12-20",
    "final": "2023-12-20",
    "acao": "AUMENTO DE MARKUP WEB CONTINENTAL 10% ITENS ABAIXO DE 100 E 0,5% ACIMA",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 240,
    "inicio": "2023-12-15",
    "final": "2023-12-15",
    "acao": "ÍNICIO PROJETO LOGÍSTICA (ENTRADAS E EXPEDIÇÃO)",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 239,
    "inicio": "2023-12-14",
    "final": "2023-12-14",
    "acao": "Aumento IPV Faixa de 0 a 80 (10%)",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 238,
    "inicio": "2023-12-13",
    "final": "2023-12-13",
    "acao": "Aumento Geral IPVs Geral Faixas de (15% 0 a 50) (10% 50 a 100) (4% 100 a 500) e (3% acima de 500)",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 237,
    "inicio": "2023-12-08",
    "final": "2023-12-08",
    "acao": "Acréscimo de 2 dias no prazo de entrega Magalu GMP/DELTATOP",
    "local": "INTELIPOST",
    "setor": "Marketplaces"
  },
  {
    "id": 236,
    "inicio": "2023-12-07",
    "final": "2023-12-07",
    "acao": "Desativado tabela JET EXPRESS",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 235,
    "inicio": "2023-12-07",
    "final": "2023-12-07",
    "acao": "Frete gratís sul e sudeste itens pequenos e com boa frequencia de venda",
    "local": "INTELIPOST",
    "setor": "Marketplaces"
  },
  {
    "id": 234,
    "inicio": "2023-12-01",
    "final": "2023-12-01",
    "acao": "Frete gratís pedidos acima de R$ 300,00 PR,SC e RS - ANGELONI",
    "local": "INTELIPOST",
    "setor": "Marketplaces"
  },
  {
    "id": 233,
    "inicio": "2023-11-30",
    "final": "2023-11-30",
    "acao": "Acrescimo de +30% fretes J&T Express",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 232,
    "inicio": "2023-11-30",
    "final": "2023-11-30",
    "acao": "Desabilitado Flag Controle MS por ANY",
    "local": "ANYMARKET",
    "setor": "Integradores"
  },
  {
    "id": 231,
    "inicio": "2023-11-29",
    "final": "2023-11-29",
    "acao": "ENTRADA GUSTAVO EQUIPE TI",
    "local": "EQUIPE",
    "setor": "Operações"
  },
  {
    "id": 230,
    "inicio": "2023-11-29",
    "final": "2023-11-29",
    "acao": "Primeira Entrada de materiais CD Novo SC",
    "local": "EQUIPE",
    "setor": "Operações"
  },
  {
    "id": 229,
    "inicio": "2023-11-27",
    "final": "2023-11-27",
    "acao": "AJUSTE CROSS OVD POS BF",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 228,
    "inicio": "2023-11-27",
    "final": "2023-11-27",
    "acao": "Aposentadoria das Silgas OC CLIENTE",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 227,
    "inicio": "2023-11-24",
    "final": "2023-11-30",
    "acao": "CROSS BF OVD 6 DIAS PARA ABAIXO de 50,00",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 226,
    "inicio": "2023-11-24",
    "final": "2023-11-30",
    "acao": "CROSS BF OVD 4 DIAS PARA ACIMAS de 50,00",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 225,
    "inicio": "2023-11-23",
    "final": "2023-11-23",
    "acao": "Ajuste Desconto OVD 3,22 para 2,15",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 224,
    "inicio": "2023-11-22",
    "final": "2023-11-22",
    "acao": "CAMPANHA MELI BF 5% 24 a 30 /11",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 223,
    "inicio": "2023-11-22",
    "final": "2023-11-22",
    "acao": "AJUSTE MARKUPS VARIOS CANAIS PARA BF - PEQUENAS REDUÇÕES EM ITENS COM MARKUPS ALTOS",
    "local": "ANYMARKET",
    "setor": "Campanhas"
  },
  {
    "id": 222,
    "inicio": "2023-11-08",
    "final": "2023-11-08",
    "acao": "Migração SITE MERCADO SHOPS",
    "local": "PLATAFORMAS",
    "setor": "Vendas"
  },
  {
    "id": 221,
    "inicio": "2023-10-31",
    "final": "2023-10-31",
    "acao": "CRIADO REGRA PARA FRETE GRATIS ACIMA DE R$ 300,00 PR,SC E RS WEBCONTINENTAL",
    "local": "INTELIPOST",
    "setor": "Marketplaces"
  },
  {
    "id": 220,
    "inicio": "2023-10-30",
    "final": "2023-10-30",
    "acao": "CRIADO REGRA PARA FRETE GRATIS ACIMA DE R$ 400,00 PR E SC ANGELONI",
    "local": "INTELIPOST",
    "setor": "Marketplaces"
  },
  {
    "id": 219,
    "inicio": "2023-10-30",
    "final": "2023-10-30",
    "acao": "ADEQUAÇÃO MARKUP ANGELONI",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 218,
    "inicio": "2023-10-30",
    "final": "2023-10-30",
    "acao": "AUMENTO OI PLACE 5%",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 217,
    "inicio": "2023-10-30",
    "final": "2023-10-30",
    "acao": "AJUSTE GERAL CROSS DOCKING NOVEMBRO (ADEQUAÇÃO MAIOR MOVIMENTO)",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 216,
    "inicio": "2023-10-30",
    "final": "2023-10-30",
    "acao": "SELECIONADOS MM NOVE 10 SKUS",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 215,
    "inicio": "2023-10-24",
    "final": "2023-10-24",
    "acao": "CRIADAS REGRAS DE ACRÉSCIMO SOBRE TDA CONFORME FAIXA DE CEPS INFORMADOS PELA ATUAL CARGAS",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 214,
    "inicio": "2023-10-24",
    "final": "2023-10-24",
    "acao": "ACRÉSCIMO DE 15% FRETES ATUAL CARGAS",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 213,
    "inicio": "2023-10-24",
    "final": "2023-10-24",
    "acao": "ATIVAÇÃO DE TABELA TRANSPORTADORA ATUAL CARGAS",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 212,
    "inicio": "2023-10-19",
    "final": "2023-10-19",
    "acao": "CRIADOS GRUPOS DE PRODUTOS COM ID WEBCONTINENTAL PARA CORREÇÃO DAS COTAÇÕES",
    "local": "INTELIPOST",
    "setor": "Marketplaces"
  },
  {
    "id": 211,
    "inicio": "2023-10-18",
    "final": "2023-10-18",
    "acao": "ACRÉSCIMO FIXO DE R$ 180,00 PARA TDA/TDE CONFORME FAIXA DE CEPS INFORMADOS PELA TRANSPORTADORA",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 210,
    "inicio": "2023-10-18",
    "final": "2023-10-18",
    "acao": "ACRÉSCIMO DE 15% FRETES MOVVI",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 209,
    "inicio": "2023-10-18",
    "final": "2023-10-18",
    "acao": "ATIVAÇÃO DE TABELA TRANSPORTADORA MOVVI",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 208,
    "inicio": "2023-10-18",
    "final": "2023-10-18",
    "acao": "20% ITENS DE 0 A 50 - AUMENTO MARKUP",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 207,
    "inicio": "2023-10-18",
    "final": "2023-10-18",
    "acao": "10% ITENS DE 50 A 100 - AUMENTO MARKUP",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 206,
    "inicio": "2023-10-18",
    "final": "2023-10-18",
    "acao": "5% ITENS DE 100 A 150 - AUMENTO MARKUP",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 205,
    "inicio": "2023-10-18",
    "final": "2023-10-18",
    "acao": "3% ITEMS DE 150 A 200 - AUMENTO MARKUP",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 204,
    "inicio": "2023-10-18",
    "final": "2023-10-18",
    "acao": "AUMENTO MARKUPS TODOS OS CANAIS A BAIXO DE R$ 200,00",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 203,
    "inicio": "2023-10-17",
    "final": "2023-10-17",
    "acao": "AJUSTE DE ACRESCIMO J&T EXPRESS DE 15% PARA 30%",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 202,
    "inicio": "2023-10-16",
    "final": "2023-10-16",
    "acao": "Entrada Lucas Setor Comercial E-commerce",
    "local": "EQUIPE",
    "setor": "Operações"
  },
  {
    "id": 201,
    "inicio": "2023-10-16",
    "final": "2023-10-16",
    "acao": "AUMENTO 5% de 00,00 a 120,00 OVD",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 200,
    "inicio": "2023-10-16",
    "final": "2023-10-16",
    "acao": "AUMENTO 4% de 120,00 a 150,00 OVD",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 199,
    "inicio": "2023-10-16",
    "final": "2023-10-16",
    "acao": "AUMENTO 3% de 150,00 a 200,00 OVD",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 198,
    "inicio": "2023-10-12",
    "final": "2023-10-12",
    "acao": "AUMENTO DE 5% a 10% EM DESCONTOS NAS FAIXAS DE 30 a 60 e 60 a 90 IPVS ALTOS",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 194,
    "inicio": "2023-10-11",
    "final": "2023-10-31",
    "acao": "20% VIA VAREJO 7133 SKUS (10% SELLER)",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 193,
    "inicio": "2023-10-11",
    "final": "2023-10-31",
    "acao": "AMERICANAS 10% (6% SELLER) À VISTA",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 197,
    "inicio": "2023-10-11",
    "final": "2023-10-11",
    "acao": "ATIVADO ACRÉSCIMO DE FRETE +15% JET EXPRESS",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 196,
    "inicio": "2023-10-11",
    "final": "2023-10-11",
    "acao": "ATIVAÇÃO DA TABELA JET EXPRESS ORIGEM PR",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 195,
    "inicio": "2023-10-11",
    "final": "2023-10-11",
    "acao": "AUMENTO 9% AMAZON GMK8 ITENS ABAIXO 100,00",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 190,
    "inicio": "2023-10-10",
    "final": "2023-10-31",
    "acao": "BALAROTI ATIVAÇÃO DE FRETE GRATIS PARA PEDIDOS ACIMA DE 300,00 NO ESTADO DO PR",
    "local": "INTELIPOST",
    "setor": "Campanhas"
  },
  {
    "id": 192,
    "inicio": "2023-10-10",
    "final": "2023-10-10",
    "acao": "AUMENTO DE 5% TICKET A BAIXO DE 100,00 OVD",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 191,
    "inicio": "2023-10-10",
    "final": "2023-10-10",
    "acao": "BALAROTI - AJUSTE MARKUP AUMENTO DE 5% ITENS ACIMA DE 300,00",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 189,
    "inicio": "2023-10-06",
    "final": "2023-10-06",
    "acao": "AUMENTO CROSSDOCKING BELFIX ATRASOS FIM DO ANO",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 188,
    "inicio": "2023-10-06",
    "final": "2023-10-06",
    "acao": "AUMENTO DO PRAZO DE MANUSEIO DE 1 PARA 2 (Época do ano muito conturbada)",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 187,
    "inicio": "2023-10-06",
    "final": "2023-10-06",
    "acao": "AUMENTO MARKUP AMAZON GMK8 - 30% ITENS <R$100, TAXA 20 MAIORES",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 186,
    "inicio": "2023-10-05",
    "final": "2023-10-31",
    "acao": "5% ANGELONI (5% SELLER) Geral - MARKUP Aumentado para 1,1 CAMPANHA CONFIG ANY PARA TER DE/POR DE PREÇOS",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 185,
    "inicio": "2023-10-05",
    "final": "2023-10-05",
    "acao": "Ajustado acréscimo de frete Braspress de 15% para 30%",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 184,
    "inicio": "2023-10-05",
    "final": "2023-10-05",
    "acao": "Compra para estoque WAP, acompanhar melhora na linha devido prazo de despacho",
    "local": "FORNECEDORES",
    "setor": "Vendas"
  },
  {
    "id": 183,
    "inicio": "2023-10-04",
    "final": "2023-10-04",
    "acao": "8% WC 18 SKUS SELECIONADOS (4% SELLER)",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 182,
    "inicio": "2023-10-04",
    "final": "2023-10-04",
    "acao": "AUMENTO IPV VONDER Ticket de 50 a 99 = 0,10",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 181,
    "inicio": "2023-10-04",
    "final": "2023-10-04",
    "acao": "AUMENTO IPV VONDER Ticket de 0 a 50 = 0,20",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 180,
    "inicio": "2023-10-04",
    "final": "2023-10-04",
    "acao": "AJUSTE CROSS DOCKING ITENS Ticket Abaixo 100,00 para 7 dias",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 179,
    "inicio": "2023-10-04",
    "final": "2023-10-04",
    "acao": "Compra para estoque PRESTO, acompanhar melhora na linha devido prazo de despacho",
    "local": "FORNECEDORES",
    "setor": "Vendas"
  },
  {
    "id": 178,
    "inicio": "2023-10-04",
    "final": "2023-10-04",
    "acao": "Aumento de Desconto 10% em campanhas de Estoque LIQ acima de 150 dias",
    "local": "HARDNESS",
    "setor": "Campanhas"
  },
  {
    "id": 177,
    "inicio": "2023-10-04",
    "final": "2023-10-04",
    "acao": "Aumento de Desconto 5% em campanhas de Estoque LIQ de 120 a 150 dias",
    "local": "HARDNESS",
    "setor": "Campanhas"
  },
  {
    "id": 176,
    "inicio": "2023-10-04",
    "final": "2023-10-04",
    "acao": "Criada regra com prazo adicional de 2 dias aos produtos OVD nas lojas Magalu GMP/DELTA",
    "local": "INTELIPOST",
    "setor": "Marketplaces"
  },
  {
    "id": 175,
    "inicio": "2023-10-02",
    "final": "2023-10-31",
    "acao": "5% AMAZON GMK8 (5% SELLER) Acima de 50,00",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 174,
    "inicio": "2023-10-02",
    "final": "2023-10-31",
    "acao": "5% AMAZON DELTATOP (5% SELLER) Acima de 20,00",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 173,
    "inicio": "2023-10-02",
    "final": "2023-10-31",
    "acao": "4% AMAZON GUIMEPA (4% SELLER) Acima de 50,00",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 172,
    "inicio": "2023-10-01",
    "final": "2023-10-31",
    "acao": "12% B2W TODAS AS LOJAS CASHBACK (7% SELLER)",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 171,
    "inicio": "2023-10-01",
    "final": "2023-10-31",
    "acao": "10% LEROY MERLIN (6% SELLER) Geral à vista",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 170,
    "inicio": "2023-10-01",
    "final": "2023-10-31",
    "acao": "5% MM à vista (5% SELLER)",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 169,
    "inicio": "2023-10-01",
    "final": "2023-10-31",
    "acao": "10% Magalu GMK8 (8% Seller) à vista",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 168,
    "inicio": "2023-10-01",
    "final": "2023-10-31",
    "acao": "5% Magalu GUIMEPA (5% Seller) à vista",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 167,
    "inicio": "2023-10-01",
    "final": "2023-10-31",
    "acao": "10% Magalu DELTATOP (8% Seller) à vista",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 166,
    "inicio": "2023-09-28",
    "final": "2023-09-28",
    "acao": "Campanha Impusão final de mês MELI 8% OVD TICKET ATÉ 100,00",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 165,
    "inicio": "2023-09-26",
    "final": "2023-09-26",
    "acao": "Acréscimo de 20% fretes Total Express destino ES e PA",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 164,
    "inicio": "2023-09-26",
    "final": "2023-09-26",
    "acao": "Reduzido o prazo de manueio de todas as transportadora de 2 dias uteis para 1 dia util",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 163,
    "inicio": "2023-09-26",
    "final": "2023-09-26",
    "acao": "Ativação da tabela Braspress",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 162,
    "inicio": "2023-09-26",
    "final": "2023-09-26",
    "acao": "Acréscimo de frete RTE +5% para os estados RJ,RS,DF,MT,ES",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 161,
    "inicio": "2023-09-26",
    "final": "2023-09-26",
    "acao": "Ajuste no acréscimo de frete RTE de 38% para 43%",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 160,
    "inicio": "2023-09-20",
    "final": "2023-09-20",
    "acao": "Criado grupos de produtos e regras de cotação restringindo os embarques de acordo com o perfil de carga de cada transportadora",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 159,
    "inicio": "2023-09-15",
    "final": "2023-09-15",
    "acao": "Ajuste IPVs Marcas (menos OVD) Reduções de 1% a 12% (por faixa de preço)",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 158,
    "inicio": "2023-09-15",
    "final": "2023-09-15",
    "acao": "Atualizado e criado todos os grupos de marcas SC para remover das tabelas de transportadoras origem PR",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 157,
    "inicio": "2023-09-15",
    "final": "2023-09-15",
    "acao": "Atualizado e criado todos os grupos de marcas PR para remover das tabelas de transportadoras origem SC",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 156,
    "inicio": "2023-09-15",
    "final": "2023-09-15",
    "acao": "Ajustado nome de exibição das transportadoras no momento da cotação",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 155,
    "inicio": "2023-09-13",
    "final": "2023-09-13",
    "acao": "Excluida modo de retorno na cotação onde estava configurado para exibir somente o frete mais barato",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 154,
    "inicio": "2023-09-12",
    "final": "2023-09-12",
    "acao": "Reativação Loja SHOPEE GUIMEPA",
    "local": "MARKETPLACES",
    "setor": "Vendas"
  },
  {
    "id": 153,
    "inicio": "2023-09-12",
    "final": "2023-09-12",
    "acao": "Primeira Venda Oi Place",
    "local": "MARKETPLACES",
    "setor": "Vendas"
  },
  {
    "id": 152,
    "inicio": "2023-09-12",
    "final": "2023-09-12",
    "acao": "AJUSTE DE 6 PARA 5 DIAS CROSS OVD ITENS A BAIXO DE R$ 100",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 151,
    "inicio": "2023-09-11",
    "final": "2023-09-11",
    "acao": "REAJUSTE MARKUP 5% VIA VAREJO",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 150,
    "inicio": "2023-09-04",
    "final": "2023-09-04",
    "acao": "Redução Jadlog estados RS e SC 19% para 16%",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 149,
    "inicio": "2023-09-04",
    "final": "2023-09-04",
    "acao": "Redução Acréscimo Total Express 22% para 18%",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 148,
    "inicio": "2023-09-04",
    "final": "2023-09-04",
    "acao": "Redução Itens Grandes TNT de 62% para 58%",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 147,
    "inicio": "2023-09-01",
    "final": "2023-10-06",
    "acao": "B2W 3 Lojas 10% (3% MKP) Construção à vista",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 145,
    "inicio": "2023-09-01",
    "final": "2023-09-30",
    "acao": "6% AM DELTATOP DESCONTO ACIMA DE R$ 100 (6% SELLER)",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 144,
    "inicio": "2023-09-01",
    "final": "2023-09-30",
    "acao": "4% AM GUIMEPA DESCONTO ACIMA R$ 30 (4% SELLER)",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 141,
    "inicio": "2023-09-01",
    "final": "2023-09-30",
    "acao": "5% MM DESCONTO À VISTA (5% SELLER)",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 143,
    "inicio": "2023-09-01",
    "final": "2023-09-05",
    "acao": "5% MAGALU GMK8 DESCONTO À VISTA (5% MKP)",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 142,
    "inicio": "2023-09-01",
    "final": "2023-09-05",
    "acao": "5% MAGALU GUIMEPA DESCONTO À VISTA (5% MKP)",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 146,
    "inicio": "2023-09-01",
    "final": "2023-09-01",
    "acao": "Aumento Acréscimo Correios 30% para 40%",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 140,
    "inicio": "2023-08-30",
    "final": "2023-08-30",
    "acao": "Redução MARKUP MELI",
    "local": "MARKETPLACES",
    "setor": "Preços"
  },
  {
    "id": 139,
    "inicio": "2023-08-30",
    "final": "2023-08-30",
    "acao": "Configurações parciais de ME2, Flag, Callback cores",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 138,
    "inicio": "2023-08-25",
    "final": "2023-08-25",
    "acao": "Aumento Markups Geral readequação 5%",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 137,
    "inicio": "2023-08-24",
    "final": "2023-08-24",
    "acao": "Ajustado prioridade nas regras de cotação na Intelipost para envios TNT/RTE",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 136,
    "inicio": "2023-08-23",
    "final": "2023-08-31",
    "acao": "Selecionado lista de 30 skus Furadeiras 5% à vista LEROY (1% SELLER)",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 135,
    "inicio": "2023-08-21",
    "final": "2023-09-01",
    "acao": "5% MAGALU DELTATOP DESCONTO À VISTA (5% MKP)",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 134,
    "inicio": "2023-08-21",
    "final": "2023-08-21",
    "acao": "Criado Quadro de Despachos Manuais",
    "local": "EQUIPE",
    "setor": "Operações"
  },
  {
    "id": 133,
    "inicio": "2023-08-17",
    "final": "2023-08-17",
    "acao": "Criado grupo de itens grandes na Intelipost",
    "local": "INTELIPOST",
    "setor": "Integradores"
  },
  {
    "id": 132,
    "inicio": "2023-08-16",
    "final": "2023-08-16",
    "acao": "Criado regra de acréscimo de 20% no frete para produtos grandes",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 131,
    "inicio": "2023-08-16",
    "final": "2023-08-16",
    "acao": "Inclusão das paleteiras no grupo de produtos que a TNT não carrega",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 130,
    "inicio": "2023-08-14",
    "final": "2023-08-14",
    "acao": "Alteração do modo de exibição das transportadoras cotadas no Site",
    "local": "INTELIPOST",
    "setor": "Integradores"
  },
  {
    "id": 129,
    "inicio": "2023-08-11",
    "final": "2023-08-11",
    "acao": "Nova Tela de Notas de todas as lojas acompanhadas",
    "local": "EQUIPE",
    "setor": "Operações"
  },
  {
    "id": 128,
    "inicio": "2023-08-11",
    "final": "2023-08-11",
    "acao": "Flag Decrementação de estoque físico Anymarket pedidos pendentes ATIVA",
    "local": "PLATAFORMAS",
    "setor": "Integradores"
  },
  {
    "id": 124,
    "inicio": "2023-08-09",
    "final": "2023-08-31",
    "acao": "LEROY MERLIN 10% (5% Seller) Campanha AGOSTO - O.V.D, PRESTO, MENEGOTTI, GMEG",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 126,
    "inicio": "2023-08-09",
    "final": "2023-08-20",
    "acao": "6% MAGALU GMK8 SUBSIDIADO PELO CANAL",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 125,
    "inicio": "2023-08-09",
    "final": "2023-08-20",
    "acao": "5% MAGALU GUIMEPA SUBSIDIADO PELO CANAL",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 127,
    "inicio": "2023-08-09",
    "final": "2023-08-09",
    "acao": "Novo Formato de Check-List de Dados Comerciais",
    "local": "FORNECEDORES",
    "setor": "Operações"
  },
  {
    "id": 123,
    "inicio": "2023-08-03",
    "final": "2023-08-20",
    "acao": "6% MAGALU DELTATOP SUBSIDIADO PELO CANAL",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 121,
    "inicio": "2023-08-01",
    "final": "2023-08-31",
    "acao": "BALAROTI 12% (Seller 9%) Itens Selecionados com IPV e Markups altos",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 120,
    "inicio": "2023-08-01",
    "final": "2023-08-31",
    "acao": "AMAZON DUAS LOJAS 5% ACIMA DE R$ 50,00",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 119,
    "inicio": "2023-08-01",
    "final": "2023-08-31",
    "acao": "MM GUIMEPA - 5% Geral à vista",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 108,
    "inicio": "2023-08-01",
    "final": "2023-08-15",
    "acao": "SHOPHUB - 5% Geral (5% Seller)",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 118,
    "inicio": "2023-08-01",
    "final": "2023-08-14",
    "acao": "MAGALU GUIMEPA 11% (Seller 6%) Geral à vista",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 117,
    "inicio": "2023-08-01",
    "final": "2023-08-14",
    "acao": "MAGALU DELTATOP 10% (Seller 5%) Geral à vista",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 116,
    "inicio": "2023-08-01",
    "final": "2023-08-14",
    "acao": "MAGALU GMK8 11% (Seller 6%) Geral à vista",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 122,
    "inicio": "2023-08-01",
    "final": "2023-08-01",
    "acao": "Acréscimo 40% Regra ANYMARKET e INATIVAÇÃO BLACK+DECKER LEROY MERLIN",
    "local": "PLATAFORMAS",
    "setor": "Preços"
  },
  {
    "id": 115,
    "inicio": "2023-08-01",
    "final": "2023-08-01",
    "acao": "AUMENTO 3% Markup - BALAROTI",
    "local": "MARKETPLACES",
    "setor": "Preços"
  },
  {
    "id": 114,
    "inicio": "2023-08-01",
    "final": "2023-08-01",
    "acao": "AUMENTO 5% Markup - Selecionados Ticket A baixo de 30,00 - MERCADO LIVRE",
    "local": "MARKETPLACES",
    "setor": "Preços"
  },
  {
    "id": 113,
    "inicio": "2023-08-01",
    "final": "2023-08-01",
    "acao": "AUMENTO 2% Markup - MADEIRA MADEIRA",
    "local": "MARKETPLACES",
    "setor": "Preços"
  },
  {
    "id": 112,
    "inicio": "2023-08-01",
    "final": "2023-08-01",
    "acao": "AUMENTO 3% Markup - LOJAS AMAZON",
    "local": "MARKETPLACES",
    "setor": "Preços"
  },
  {
    "id": 111,
    "inicio": "2023-08-01",
    "final": "2023-08-01",
    "acao": "AUMENTO 5% Markup - B2W DELTATOP",
    "local": "MARKETPLACES",
    "setor": "Preços"
  },
  {
    "id": 110,
    "inicio": "2023-08-01",
    "final": "2023-08-01",
    "acao": "AUMENTO 4% Markup - Tickets Acima de R$ 20,00 - 40% Tickets R$ 0 a R$ 20,00 - LEROY MERLIN",
    "local": "MARKETPLACES",
    "setor": "Preços"
  },
  {
    "id": 109,
    "inicio": "2023-08-01",
    "final": "2023-08-01",
    "acao": "AUMENTO 5% Markup - LOJAS MAGALU",
    "local": "MARKETPLACES",
    "setor": "Preços"
  },
  {
    "id": 107,
    "inicio": "2023-07-31",
    "final": "2023-08-01",
    "acao": "Ocorrência no e-mail Lojavirtual (Ficou inativado)",
    "local": "PLATAFORMAS",
    "setor": "Operações"
  },
  {
    "id": 106,
    "inicio": "2023-07-31",
    "final": "2023-07-31",
    "acao": "Acréscimo de 5 dias no prazo de entrega para pedidos da Loja do Mecanico",
    "local": "INTELIPOST",
    "setor": "Marketplaces"
  },
  {
    "id": 105,
    "inicio": "2023-07-27",
    "final": "2023-07-27",
    "acao": "Acréscimo geral de 10% fretes TNT via regra na Intelipost",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 104,
    "inicio": "2023-07-25",
    "final": "2023-07-25",
    "acao": "Configurado Regra de Estoque Mínimo para enviar 0 quando chegar em 1. Duas Lojas AMAZON",
    "local": "ANYMARKET",
    "setor": "Integradores"
  },
  {
    "id": 103,
    "inicio": "2023-07-24",
    "final": "2023-07-24",
    "acao": "Atualizado tabelas de frete Total Express origens PR e SC na Intelipost",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 102,
    "inicio": "2023-07-20",
    "final": "2023-07-31",
    "acao": "LEROY MERLIN 12% (7% Seller) Campanha TESTE JULHO - Redução de Comissão de 5% do Canal",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 101,
    "inicio": "2023-07-19",
    "final": "2023-07-19",
    "acao": "Criado Grupo com Leroy Merlin (Entrada em vendas acompanhadas)",
    "local": "MARKETPLACES",
    "setor": "Vendas"
  },
  {
    "id": 100,
    "inicio": "2023-07-17",
    "final": "2023-08-02",
    "acao": "MAGALU GUIMEPA 10% (Seller 7%) Geral à vista",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 98,
    "inicio": "2023-07-17",
    "final": "2023-08-02",
    "acao": "MAGALU GMK8 10% (Seller 7%) Geral à vista",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 99,
    "inicio": "2023-07-17",
    "final": "2023-07-31",
    "acao": "MAGALU DELTATOP 10% (Seller 7%) Geral à vista",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 97,
    "inicio": "2023-07-11",
    "final": "2023-07-11",
    "acao": "Ajuste IPVs massivos acréscimos de 0,05 itens entre R$ 0 a R$ 80",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 96,
    "inicio": "2023-07-11",
    "final": "2023-07-11",
    "acao": "Ajuste IPVs massivos de 1,60 para 1,63 itens entre R$ 60 a R$ 100",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 95,
    "inicio": "2023-07-11",
    "final": "2023-07-11",
    "acao": "Ajuste IPVs massivos de 1,53 a 1,55 para 1,56",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 94,
    "inicio": "2023-07-10",
    "final": "2023-08-10",
    "acao": "Ajuste CrossDocking OVD 4 para 6 dias Itens a baixo de R$ 40,00",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 93,
    "inicio": "2023-07-10",
    "final": "2023-08-10",
    "acao": "VIA VAREJO Campanha à vista geral 10% (Seller 7%)",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 92,
    "inicio": "2023-07-07",
    "final": "2023-07-07",
    "acao": "Criado regras de cotação na Intelipost para compensação de frete JADLOG para os estados RS,SC,MS,MT,RO,DF,AM,SE,AC,RR",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 91,
    "inicio": "2023-07-06",
    "final": "2023-07-04",
    "acao": "Primeira Etapa do BI RMA",
    "local": "HARDNESS",
    "setor": "Melhorias"
  },
  {
    "id": 89,
    "inicio": "2023-07-03",
    "final": "2023-08-04",
    "acao": "B2W Todas as lojas 10% (6% Seller) Ferramentas à vista",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 88,
    "inicio": "2023-07-03",
    "final": "2023-07-12",
    "acao": "MAGALU DELTATOP 10% (Seller 5%) Geral à vista",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 90,
    "inicio": "2023-07-03",
    "final": "2023-07-03",
    "acao": "Flag Conferência Pedidos (Aguardando e Pronto)",
    "local": "HARDNESS",
    "setor": "Melhorias"
  },
  {
    "id": 87,
    "inicio": "2023-07-02",
    "final": "2023-07-10",
    "acao": "MAGALU GMK8 11% (Seller 7%) Geral à vista",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 86,
    "inicio": "2023-07-02",
    "final": "2023-07-10",
    "acao": "MAGALU GUIMEPA 8% (Seller 5%) Geral à vista",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 85,
    "inicio": "2023-07-01",
    "final": "2023-07-31",
    "acao": "AMAZON DELTATOP 4% acima de R$ 20 Geral",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 84,
    "inicio": "2023-07-01",
    "final": "2023-07-31",
    "acao": "AMAZON GUIMEPA 3% acima de R$ 20 Geral",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 83,
    "inicio": "2023-07-01",
    "final": "2023-07-31",
    "acao": "MM 10% Selecionados Ferramentas 28 skus",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 82,
    "inicio": "2023-07-01",
    "final": "2023-07-31",
    "acao": "MM Geral à vista 5% (4% Seller)",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 81,
    "inicio": "2023-06-29",
    "final": "2023-06-29",
    "acao": "Reajuste da taxa de combustivel Jadlog de 5,31 para 0,41",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 80,
    "inicio": "2023-06-28",
    "final": "2023-06-28",
    "acao": "Visita Branco Motores",
    "local": "FORNECEDORES",
    "setor": "Vendas"
  },
  {
    "id": 77,
    "inicio": "2023-06-27",
    "final": "2023-07-11",
    "acao": "Campanha Loja Nova Guimepa SC - 10% à vista",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 79,
    "inicio": "2023-06-27",
    "final": "2023-06-27",
    "acao": "Reajuste do Acréscimo Correios de 50% para 30%",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 78,
    "inicio": "2023-06-27",
    "final": "2023-06-27",
    "acao": "Retirado linha da BLACK DECKER da fábrica, somente estoque",
    "local": "MARKETPLACES",
    "setor": "Vendas"
  },
  {
    "id": 76,
    "inicio": "2023-06-27",
    "final": "2023-06-27",
    "acao": "Mudança no formato de observações dentro do sistema",
    "local": "HARDNESS",
    "setor": "Melhorias"
  },
  {
    "id": 75,
    "inicio": "2023-06-27",
    "final": "2023-06-27",
    "acao": "Ativação da Loja Mercado Livre SC",
    "local": "MARKETPLACES",
    "setor": "Vendas"
  },
  {
    "id": 74,
    "inicio": "2023-06-20",
    "final": "2023-06-20",
    "acao": "Ajuste Cross OVD 5 para 4 dias (skus que estavam com 5)",
    "local": "HARDNESS",
    "setor": "Operações"
  },
  {
    "id": 73,
    "inicio": "2023-06-20",
    "final": "2023-06-20",
    "acao": "Camapanha Reta Final MM 15% (10% Seller) (176 skus)",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 72,
    "inicio": "2023-06-20",
    "final": "2023-06-20",
    "acao": "Campanha HArdness CSM Impulsão IPV 1,55",
    "local": "HARDNESS",
    "setor": "Campanhas"
  },
  {
    "id": 71,
    "inicio": "2023-06-20",
    "final": "2023-06-20",
    "acao": "Campanha Hardness Branco Estoque Liq 1,42",
    "local": "HARDNESS",
    "setor": "Campanhas"
  },
  {
    "id": 70,
    "inicio": "2023-06-16",
    "final": "2023-06-16",
    "acao": "Redução IPVs Ticket 0 a 100 Massiva (Ipvs acima de 1,75 fixado a 1,68",
    "local": "MARKETPLACES",
    "setor": "Preços"
  },
  {
    "id": 69,
    "inicio": "2023-06-16",
    "final": "2023-06-16",
    "acao": "Primeira Venda CSM",
    "local": "HARDNESS",
    "setor": "Vendas"
  },
  {
    "id": 68,
    "inicio": "2023-06-15",
    "final": "2023-06-15",
    "acao": "Conclusão da tela de transportes",
    "local": "HARDNESS",
    "setor": "Melhorias"
  },
  {
    "id": 67,
    "inicio": "2023-06-14",
    "final": "2023-06-30",
    "acao": "MAGALU GUIMEPA Geral à vista 8% (5% Seller)",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 66,
    "inicio": "2023-06-13",
    "final": "2023-06-13",
    "acao": "Entrada na lista de lojas Oficiais B2W - GUIMEPA",
    "local": "MARKETPLACES",
    "setor": "Vendas"
  },
  {
    "id": 64,
    "inicio": "2023-06-09",
    "final": "2023-07-10",
    "acao": "VIA Desconto Ferramentas 15% (8% Seller)",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 65,
    "inicio": "2023-06-09",
    "final": "2023-06-09",
    "acao": "Regras Preços Anymarket 5% Desconto Marcas Ativas LDM",
    "local": "PLATAFORMAS",
    "setor": "Preços"
  },
  {
    "id": 63,
    "inicio": "2023-06-07",
    "final": "2023-06-30",
    "acao": "B2W GMK8 7% À VISTA GERAL",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 62,
    "inicio": "2023-06-07",
    "final": "2023-06-30",
    "acao": "B2W DELTATOP 5% À VISTA GERAL",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 61,
    "inicio": "2023-06-07",
    "final": "2023-06-30",
    "acao": "B2W GUIMEPA 5% À VISTA GERAL",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 60,
    "inicio": "2023-06-05",
    "final": "2023-06-05",
    "acao": "Primeira venda TRAPP",
    "local": "HARDNESS",
    "setor": "Vendas"
  },
  {
    "id": 59,
    "inicio": "2023-06-05",
    "final": "2023-06-05",
    "acao": "INICIO PROJETO RESERVA ITENS RMA",
    "local": "HARDNESS",
    "setor": "Melhorias"
  },
  {
    "id": 58,
    "inicio": "2023-06-05",
    "final": "2023-06-05",
    "acao": "INICIO PROJETO EXPEDIÇAO",
    "local": "HARDNESS",
    "setor": "Melhorias"
  },
  {
    "id": 57,
    "inicio": "2023-06-05",
    "final": "2023-06-05",
    "acao": "ENTRADA NOVOS EQUIPE, WALLYTON, KARIN, JAQUELINE",
    "local": "EQUIPE",
    "setor": "Operações"
  },
  {
    "id": 55,
    "inicio": "2023-06-02",
    "final": "2023-06-30",
    "acao": "MM Geral à vista 7%",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 54,
    "inicio": "2023-06-02",
    "final": "2023-06-30",
    "acao": "MAGALU Geral à vista 5% DELTATOP",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 53,
    "inicio": "2023-06-02",
    "final": "2023-06-30",
    "acao": "MAGALU Geral à vista 10% GMK8",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 52,
    "inicio": "2023-06-02",
    "final": "2023-06-30",
    "acao": "AMAZON Geral acima R$ 50 3% 2 lojas",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 56,
    "inicio": "2023-06-02",
    "final": "2023-06-02",
    "acao": "ENTREGA MELHORIA ABERTURA RMA POR PEDIDOS E NOTAS",
    "local": "HARDNESS",
    "setor": "Melhorias"
  },
  {
    "id": 51,
    "inicio": "2023-06-01",
    "final": "2023-06-15",
    "acao": "MAGALU Selecionados Feirão Ferramentas GUIMEPA 5%",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 50,
    "inicio": "2023-05-29",
    "final": "2023-05-29",
    "acao": "Ativação CSM",
    "local": "MARKETPLACES",
    "setor": "Publicações"
  },
  {
    "id": 49,
    "inicio": "2023-05-29",
    "final": "2023-05-29",
    "acao": "Ativação Lançamentos Wap",
    "local": "MARKETPLACES",
    "setor": "Publicações"
  },
  {
    "id": 48,
    "inicio": "2023-05-29",
    "final": "2023-05-29",
    "acao": "Ativação Lançamentos GMEG",
    "local": "MARKETPLACES",
    "setor": "Publicações"
  },
  {
    "id": 47,
    "inicio": "2023-05-29",
    "final": "2023-05-29",
    "acao": "Ativação marca Trapp",
    "local": "MARKETPLACES",
    "setor": "Publicações"
  },
  {
    "id": 46,
    "inicio": "2023-05-29",
    "final": "2023-05-29",
    "acao": "Saída da Beatriz, Gabriel assumiu projetos RMA",
    "local": "HARDNESS",
    "setor": "Melhorias"
  },
  {
    "id": 45,
    "inicio": "2023-05-26",
    "final": "2023-05-31",
    "acao": "Geral à vista 10% LU GMK8",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 44,
    "inicio": "2023-05-26",
    "final": "2023-05-31",
    "acao": "Geral à vista 5% MM",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 43,
    "inicio": "2023-05-24",
    "final": "2023-05-24",
    "acao": "Retomada Campanhas e proximidade com Shophub",
    "local": "MARKETPLACES",
    "setor": "Marketplaces"
  },
  {
    "id": 42,
    "inicio": "2023-05-23",
    "final": "2023-05-23",
    "acao": "Acréscimo de 5% para estados do NORTE + PI, SE, PB",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 41,
    "inicio": "2023-05-23",
    "final": "2023-05-23",
    "acao": "Aumento Acréscimo TNT de 32% para 42%",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 40,
    "inicio": "2023-05-23",
    "final": "2023-05-23",
    "acao": "Aumento Acréscimo Rodonaves de 28% para 38%",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 39,
    "inicio": "2023-05-22",
    "final": "2023-05-22",
    "acao": "Inserção tabela BUFFALO em SC e retirado corte de estoque",
    "local": "HARDNESS",
    "setor": "Preços"
  },
  {
    "id": 38,
    "inicio": "2023-05-18",
    "final": "2023-05-18",
    "acao": "Implantação Quadro Trello GUIMEPA <> ANYMARKET",
    "local": "ANYMARKET",
    "setor": "Integradores"
  },
  {
    "id": 37,
    "inicio": "2023-05-17",
    "final": "2023-05-17",
    "acao": "Transferência Est. Fisico Vonder GUIMEPA > DELTATOP",
    "local": "HARDNESS",
    "setor": "Vendas"
  },
  {
    "id": 36,
    "inicio": "2023-05-16",
    "final": "2023-05-16",
    "acao": "Redução Regra Intelipost Total Express de 32% para 22%",
    "local": "INTELIPOST",
    "setor": "Transportadoras"
  },
  {
    "id": 35,
    "inicio": "2023-05-16",
    "final": "2023-05-16",
    "acao": "Configuração de campanhas estoque liquido",
    "local": "HARDNESS",
    "setor": "Campanhas"
  },
  {
    "id": 34,
    "inicio": "2023-05-15",
    "final": "2023-05-15",
    "acao": "Inativação Marketplace Kabum",
    "local": "ANYMARKET",
    "setor": "Marketplaces"
  },
  {
    "id": 33,
    "inicio": "2023-05-15",
    "final": "2023-05-15",
    "acao": "Primeira venda Balmer",
    "local": "HARDNESS",
    "setor": "Vendas"
  },
  {
    "id": 32,
    "inicio": "2023-05-15",
    "final": "2023-05-15",
    "acao": "Melhoria dividir produtos de embalagem automaticamente",
    "local": "HARDNESS",
    "setor": "Melhorias"
  },
  {
    "id": 31,
    "inicio": "2023-05-15",
    "final": "2023-05-15",
    "acao": "Primeira venda FULL",
    "local": "HARDNESS",
    "setor": "Vendas"
  },
  {
    "id": 30,
    "inicio": "2023-05-15",
    "final": "2023-05-15",
    "acao": "Ajuste Markup WebContinental 1,08 para 1,05",
    "local": "ANYMARKET",
    "setor": "Preços"
  },
  {
    "id": 29,
    "inicio": "2023-05-12",
    "final": "2023-05-12",
    "acao": "Ativação Marketplace Ri Happy",
    "local": "ANYMARKET",
    "setor": "Marketplaces"
  },
  {
    "id": 28,
    "inicio": "2023-05-12",
    "final": "2023-05-12",
    "acao": "Melhoria alterar locação em massa dos produtos",
    "local": "HARDNESS",
    "setor": "Melhorias"
  },
  {
    "id": 27,
    "inicio": "2023-05-12",
    "final": "2023-05-12",
    "acao": "Ação de mercado envios para elevar reputação",
    "local": "ANYMARKET",
    "setor": "Vendas"
  },
  {
    "id": 26,
    "inicio": "2023-05-12",
    "final": "2023-05-12",
    "acao": "Melhorado botões de marcas cabeçalho Site",
    "local": "MAGENTO",
    "setor": "Melhorias"
  },
  {
    "id": 25,
    "inicio": "2023-05-11",
    "final": "2023-05-11",
    "acao": "Pausa estrela 10",
    "local": "MARKETPLACES",
    "setor": "Concorrências"
  },
  {
    "id": 24,
    "inicio": "2023-05-09",
    "final": "2023-05-09",
    "acao": "Saída da Kelly",
    "local": "EQUIPE",
    "setor": "Operações"
  },
  {
    "id": 23,
    "inicio": "2023-05-09",
    "final": "2023-05-09",
    "acao": "Criado Acesso Udemy para Equipe",
    "local": "PLATAFORMAS",
    "setor": "Treinamentos"
  },
  {
    "id": 22,
    "inicio": "2023-05-09",
    "final": "2023-05-09",
    "acao": "Reunião ANYMARKET para alinhamento de API",
    "local": "ANYMARKET",
    "setor": "Melhorias"
  },
  {
    "id": 21,
    "inicio": "2023-05-08",
    "final": "2023-05-08",
    "acao": "Ativação Vendas PJ Via Varejo",
    "local": "MARKETPLACES",
    "setor": "Marketplaces"
  },
  {
    "id": 20,
    "inicio": "2023-05-08",
    "final": "2023-05-08",
    "acao": "Início Allan no setor e-commerce",
    "local": "EQUIPE",
    "setor": "Operações"
  },
  {
    "id": 19,
    "inicio": "2023-05-05",
    "final": "2023-05-31",
    "acao": "Skus (1969 transm.) com IPV entre 1,5 e 1,7 5,2% ML",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 18,
    "inicio": "2023-05-05",
    "final": "2023-05-31",
    "acao": "Skus (4498 transm.) com IPV entre 1,7 e 2,0 10% ML",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 17,
    "inicio": "2023-05-05",
    "final": "2023-05-31",
    "acao": "Skus (8556 transm.) com IPV acima de 2,0 12% ML",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 16,
    "inicio": "2023-05-05",
    "final": "2023-05-05",
    "acao": "Melhoria de novos links do BI para RMA",
    "local": "HARDNESS",
    "setor": "Melhorias"
  },
  {
    "id": 15,
    "inicio": "2023-05-05",
    "final": "2023-05-05",
    "acao": "Pausa Marcas Loja do Mecânico",
    "local": "ANYMARKET",
    "setor": "Vendas"
  },
  {
    "id": 14,
    "inicio": "2023-05-04",
    "final": "2023-05-31",
    "acao": "Geral acima R$ 600 2% AM 2 LOJAS",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 13,
    "inicio": "2023-05-04",
    "final": "2023-05-31",
    "acao": "Geral acima R$ 300 2% AM 2 LOJAS",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 12,
    "inicio": "2023-05-02",
    "final": "2023-06-07",
    "acao": "Especial | Desconto à vista | PIX | 15% OFF | Esporte, Moda Esportiva, Suplementos & Construção | Americanas S.A. l Todos os Canais | 7,5% AMER + 7,5% Seller - Abril 10% B2W 3 LOJAS",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 11,
    "inicio": "2023-05-02",
    "final": "2023-06-07",
    "acao": "Desconto à vista | 10% OFF | UTILIDADES DOMÉSTICAS e CAMA, MESA E BANHO | americanas s.a | Todos os canais | 4% AMER + 6% Seller - Maio 10% B2W 3 LOJAS",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 10,
    "inicio": "2023-05-02",
    "final": "2023-06-07",
    "acao": "Desconto à vista | 10% OFF | MÓVEIS E DECORAÇÃO | americanas. s.a. | Todos os Canais | 4% AMER + 6% Seller - Maio 10% B2W 3 LOJAS",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 9,
    "inicio": "2023-05-02",
    "final": "2023-06-07",
    "acao": "Desconto à vista | 10% OFF | ELETROPORTÁTEIS | americanas s.a | Todos os canais | 4% AMER + 6% Seller - Maio 10% B2W 3 LOJAS",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 7,
    "inicio": "2023-05-02",
    "final": "2023-06-07",
    "acao": "Especial | Desconto à vista | 15% OFF | AGRO, INDÚSTRIA E COMÉRCIO | Americanas | Todos os canais | 7,5% AMER + 7,5% Seller - Maio 15% B2W 3 LOJAS",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 8,
    "inicio": "2023-05-02",
    "final": "2023-06-06",
    "acao": "Especial | Desconto à vista | 10% OFF | Automotivo | Todos os Canais | 4% AMER + 6% Seller - MAIO 10% B2W 3 LOJAS",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 6,
    "inicio": "2023-05-01",
    "final": "2023-06-06",
    "acao": "Ferramentas à vista (aumento de markup para amortizar) 15% VIA",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 5,
    "inicio": "2023-05-01",
    "final": "2023-05-31",
    "acao": "6000 skus 11% BL",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 4,
    "inicio": "2023-05-01",
    "final": "2023-05-31",
    "acao": "10 skus 10% MM",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 2,
    "inicio": "2023-05-01",
    "final": "2023-05-31",
    "acao": "Geral à vista 5% LU DELTAOP",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 1,
    "inicio": "2023-05-01",
    "final": "2023-05-31",
    "acao": "Geral à vista 10% LU GUIMEPA",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  },
  {
    "id": 3,
    "inicio": "2023-05-01",
    "final": "2023-05-21",
    "acao": "Geral à vista 10% LU GMK8",
    "local": "MARKETPLACES",
    "setor": "Campanhas"
  }
];
