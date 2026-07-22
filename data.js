// ============================================
// DASHBOARD - DADOS EDITÁVEIS
// Edite este arquivo para atualizar o painel.
// Salve no GitHub e o painel atualiza sozinho.
// ============================================

const data = [
  { fornecedor:"Vonder",        logo:"Vonder.png",      status:"Ativo",        lote:"-",  prod:"sim",       rk:1, resp:"Lucas",    producao:130,  prontos:0,    produzir:130,   restantes:0 },
  { fornecedor:"Tramontina",    logo:"Tramontina.png",   status:"Ativo",        lote:"1o", prod:"sim",       rk:1, resp:"Lucas",    producao:2924, prontos:0,    produzir:2924,  restantes:0 },
  { fornecedor:"Worker",        logo:"WORKER.png",       status:"Ativo",        lote:"3o", prod:"sim",       rk:1, resp:"Bruno",    producao:1324, prontos:450,  produzir:10000, restantes:8226 },
  { fornecedor:"Makita",        logo:"Makita.png",       status:"Ativo",        lote:"9o", prod:"próximo",   rk:1, resp:"Lucas",    producao:0,    prontos:0,    produzir:0,     restantes:0 },
  { fornecedor:"Bosch",         logo:"Bosch.png",        status:"Ativo",        lote:"2o", prod:"próximo",   rk:1, resp:"Bruno",    producao:1771, prontos:2780, produzir:4551,  restantes:0 },
  { fornecedor:"Tramontina 2",  logo:"Tramontina.png",   status:"Ativo",        lote:"4o", prod:"espera",    rk:1, resp:"Lucas",    producao:0,    prontos:2346, produzir:6405,  restantes:4059 },
  { fornecedor:"MTX",           logo:"MTX.png",          status:"Ativo",        lote:"5o", prod:"espera",    rk:1, resp:"Lucas",    producao:0,    prontos:2269, produzir:500,   restantes:-1769 },
  { fornecedor:"KIAN",          logo:"Kian.png",         status:"Novo",         lote:"1o", prod:"próximo",   rk:1, resp:"Bruno",    producao:0,    prontos:0,    produzir:114,   restantes:114 },
  { fornecedor:"PDR",           logo:"PDR.png",          status:"Reativando",   lote:"2o", prod:"próximo",   rk:1, resp:"Bruno",    producao:0,    prontos:0,    produzir:450,   restantes:450 },
  { fornecedor:"Britânia",      logo:"Britânia.png",     status:"Ativo",        lote:"6o", prod:"sim",       rk:2, resp:"Lucas",    producao:0,    prontos:0,    produzir:0,     restantes:0 },
  { fornecedor:"Toyama",        logo:"Toyama.png",       status:"Ativo",        lote:"5o", prod:"espera",    rk:2, resp:"s/ resp.", producao:0,    prontos:0,    produzir:0,     restantes:0 },
  { fornecedor:"Wap",           logo:"Wap.png",          status:"Ativo",        lote:"9o", prod:"espera",    rk:2, resp:"s/ resp.", producao:0,    prontos:0,    produzir:0,     restantes:0 },
  { fornecedor:"Buffalo",       logo:"Buffalo.png",      status:"Ativo",        lote:"3o", prod:"espera",    rk:2, resp:"s/ resp.", producao:0,    prontos:0,    produzir:0,     restantes:0 },
  { fornecedor:"GMEG",          logo:"GMEG.png",         status:"Ativo",        lote:"2o", prod:"espera",    rk:2, resp:"s/ resp.", producao:0,    prontos:0,    produzir:0,     restantes:0 },
  { fornecedor:"FOXLUX",        logo:"FOXLUX.png",       status:"Novo",         lote:"1o", prod:"espera",    rk:2, resp:"s/ resp.", producao:0,    prontos:0,    produzir:0,     restantes:0 },
  { fornecedor:"CSM",           logo:"CSM.png",          status:"Ativo",        lote:"4o", prod:"indefinido",rk:3, resp:"Jone",     producao:0,    prontos:75,   produzir:75,    restantes:0 },
  { fornecedor:"Beta",          logo:"Beta.png",         status:"Ativo",        lote:"2o", prod:"indefinido",rk:3, resp:"s/ resp.", producao:0,    prontos:0,    produzir:13703, restantes:13703 },
  { fornecedor:"Chiaperini",    logo:"Chiaperini.png",   status:"Ativo",        lote:"2o", prod:"indefinido",rk:3, resp:"s/ resp.", producao:0,    prontos:0,    produzir:0,     restantes:0 },
  { fornecedor:"Balmer",        logo:"Balmer.png",       status:"Ativo",        lote:"3o", prod:"indefinido",rk:3, resp:"s/ resp.", producao:0,    prontos:0,    produzir:0,     restantes:0 },
  { fornecedor:"Tekna",         logo:"Tekna.png",        status:"Ativo",        lote:"3o", prod:"indefinido",rk:3, resp:"s/ resp.", producao:0,    prontos:0,    produzir:0,     restantes:0 },
  { fornecedor:"Presto",        logo:"PRESTO.png",       status:"Ativo",        lote:"5o", prod:"indefinido",rk:3, resp:"s/ resp.", producao:0,    prontos:0,    produzir:0,     restantes:0 },
  { fornecedor:"Bel",           logo:"Bel.png",          status:"Ativo",        lote:"8o", prod:"indefinido",rk:3, resp:"s/ resp.", producao:0,    prontos:0,    produzir:0,     restantes:0 },
  { fornecedor:"CCM",           logo:"CCM.png",          status:"Ativo",        lote:"3o", prod:"indefinido",rk:3, resp:"s/ resp.", producao:0,    prontos:0,    produzir:0,     restantes:0 },
  { fornecedor:"LYNUS",         logo:"LYNUS.png",        status:"Reativando",   lote:"3o", prod:"indefinido",rk:3, resp:"s/ resp.", producao:0,    prontos:0,    produzir:0,     restantes:0 },
  { fornecedor:"BOVENAU",       logo:"BOVENAU.png",      status:"Ativo",        lote:"2o", prod:"indefinido",rk:4, resp:"s/ resp.", producao:0,    prontos:0,    produzir:0,     restantes:0 },
  { fornecedor:"Branco",        logo:"Branco.png",       status:"Ativo",        lote:"2o", prod:"indefinido",rk:4, resp:"s/ resp.", producao:0,    prontos:0,    produzir:0,     restantes:0 },
  { fornecedor:"Menegotti",     logo:"Menegotti.png",    status:"Reativando",   lote:"4o", prod:"indefinido",rk:4, resp:"s/ resp.", producao:0,    prontos:0,    produzir:0,     restantes:0 },
];

// ============================================
// CRONOGRAMA GANTT
// Cada linha corresponde ao fornecedor pelo índice (idx).
// Cells: w = "Mês-Ex: Jul-4", t = "active" (verde) ou "waiting" (laranja)
// ============================================

const months = ["Jul","Ago","Set","Out","Nov","Dez"];
const weeks = [1,2,3,4,5];

const ganttSchedule = [
  { idx:0,  cells:[{w:"Jul-4",t:"active"},{w:"Jul-5",t:"active"},{w:"Ago-2",t:"waiting"}] },
  { idx:1,  cells:[{w:"Jul-4",t:"active"},{w:"Jul-5",t:"active"},{w:"Ago-1",t:"active"},{w:"Ago-2",t:"active"},{w:"Ago-3",t:"active"},{w:"Ago-4",t:"active"},{w:"Ago-5",t:"active"}] },
  { idx:2,  cells:[{w:"Jul-4",t:"active"},{w:"Jul-5",t:"active"},{w:"Ago-1",t:"active"},{w:"Ago-2",t:"active"},{w:"Ago-3",t:"active"},{w:"Ago-4",t:"active"},{w:"Ago-5",t:"active"},{w:"Set-1",t:"active"},{w:"Set-2",t:"active"},{w:"Set-3",t:"active"},{w:"Set-4",t:"active"},{w:"Set-5",t:"active"}] },
  { idx:3,  cells:[{w:"Ago-2",t:"waiting"}] },
  { idx:4,  cells:[{w:"Ago-1",t:"waiting"}] },
  { idx:5,  cells:[{w:"Ago-2",t:"waiting"},{w:"Out-2",t:"waiting"}] },
  { idx:6,  cells:[{w:"Ago-2",t:"waiting"}] },
  { idx:7,  cells:[{w:"Jul-5",t:"waiting"}] },
  { idx:8,  cells:[{w:"Ago-1",t:"waiting"}] },
  { idx:9,  cells:[{w:"Jul-2",t:"active"},{w:"Jul-3",t:"active"},{w:"Jul-4",t:"active"},{w:"Jul-5",t:"active"}] },
  { idx:10, cells:[] }, { idx:11, cells:[] }, { idx:12, cells:[] }, { idx:13, cells:[] }, { idx:14, cells:[] },
  { idx:15, cells:[] }, { idx:16, cells:[] }, { idx:17, cells:[] }, { idx:18, cells:[] }, { idx:19, cells:[] },
  { idx:20, cells:[] }, { idx:21, cells:[] }, { idx:22, cells:[] }, { idx:23, cells:[] }, { idx:24, cells:[] },
  { idx:25, cells:[] }, { idx:26, cells:[] },
];
