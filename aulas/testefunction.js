// ===============================
// SIMULAÇÃO DE API PAGINADA
// ===============================
function buscarUsuarios(pagina) {
  const bancoFake = {
    1: ["Ana", "Carlos"],
    2: ["João", "Maria"],
    3: ["Pedro", "Lucas"],
    4: [] // fim dos dados
  };

  console.log(`🔎 Buscando página ${pagina}...`);
  return bancoFake[pagina] || [];
}

// ===============================
// GENERATOR (PAGINA POR PAGINA)
// ===============================
function* paginarUsuarios() {
  let pagina = 1;

  while (true) {
    const usuarios = buscarUsuarios(pagina);

    if (usuarios.length === 0) {
      console.log("✅ Fim das páginas");
      return;
    }

    yield usuarios;
    pagina++;
  }
}

// ===============================
// GENERATOR (USUÁRIO POR USUÁRIO)
// ===============================
function* usuariosIndividuais() {
  let pagina = 1;

  while (true) {
    const usuarios = buscarUsuarios(pagina);

    if (usuarios.length === 0) {
      console.log("✅ Fim dos usuários");
      return;
    }

    for (let usuario of usuarios) {
      yield usuario;
    }

    pagina++;
  }
}

// ===============================
// EXECUÇÃO
// ===============================
console.log("\n=== 📦 PAGINADO ===");

const fluxoPaginas = paginarUsuarios();
let resultado = fluxoPaginas.next();

while (!resultado.done) {
  console.log("📄 Página recebida:", resultado.value);
resultado = fluxoPaginas.next();
}

console.log("\n=== 👤 INDIVIDUAL ===");

for (let usuario of usuariosIndividuais()) {
  console.log("➡️ Processando usuário:", usuario);
}