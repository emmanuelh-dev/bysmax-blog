// Archivo de prueba temporal para verificar las traducciones
const { LOGICGATES, getLogicGateTranslation } = require('./data/logic-gates.tsx');
const { getUITranslation } = require('./data/logic-gates-ui.ts');

console.log('=== Prueba de Traducciones ===');

// Probar traducciones de UI
const locales = ['es', 'en', 'pt'];
locales.forEach(locale => {
  try {
    const ui = getUITranslation(locale);
    console.log(`\n${locale.toUpperCase()}:`);
    console.log(`- Título de página: ${ui.pageTitle}`);
    console.log(`- Todas las compuertas: ${ui.labels.allGates}`);
    console.log(`- Cerrar menú: ${ui.labels.closeMenu}`);
  } catch (error) {
    console.log(`Error en ${locale}:`, error.message);
  }
});

// Probar traducciones de compuertas
console.log('\n=== Compuertas Lógicas ===');
LOGICGATES.slice(0, 2).forEach(gate => {
  console.log(`\nCompuerta ${gate.url}:`);
  locales.forEach(locale => {
    try {
      const gateTranslation = getLogicGateTranslation(gate.url, locale);
      if (gateTranslation) {
        console.log(`- ${locale}: ${gateTranslation.heading}`);
      }
    } catch (error) {
      console.log(`Error en ${locale} para ${gate.url}:`, error.message);
    }
  });
});

console.log('\n=== Prueba completada ===');
