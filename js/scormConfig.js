var isLMS = false;
var hasCompleted = false;

function initScorm() {
  try {
    isLMS = lms.SCORM.init() ? true : false;
    console.log("SCORM initialized: " + isLMS);

    if (isLMS) {
      var lessonStatus = lms.SCORM.get("cmi.core.lesson_status");
      if (lessonStatus !== "completed") {
        lms.SCORM.set("cmi.core.lesson_status", "incomplete");
        lms.SCORM.set("cmi.core.score.raw", 0);
        lms.SCORM.save();
      }
    } else {
      console.log("SCORM não encontrado, simulando no navegador...");
    }
  } catch (e) {
    console.log("SCORM Error: " + e);
    isLMS = false; // Se houver erro, simula que não há LMS
  }
}

// Chame essa função quando quiser que o SCORM seja concluído
function scormIt() {
  if (!hasCompleted) {
    // Verifica se já foi completado
    if (isLMS) {
      lms.SCORM.set("cmi.core.lesson_status", "completed");
      lms.SCORM.set("cmi.core.score.raw", 100);
      lms.SCORM.save();
      console.log("SCORM Status: completed");
    } else {
      // Simulação no navegador
      console.log("Simulação: Curso completado!");
    }

    hasCompleted = true; // Marca como completado após execução
  } else {
    console.log("O status de completado já foi registrado.");
  }
}

// Função para fechar a conexão com o SCORM ao sair da página
window.addEventListener("beforeunload", function () {
  if (isLMS) {
    lms.SCORM.quit();
  }
});

initScorm();
