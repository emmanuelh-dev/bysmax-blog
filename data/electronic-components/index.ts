import { ElectronicComponent, ComponentCategory, LocaleTypes } from './types';
import { LOGIC_GATES } from './logic-gates';
import { DECODERS } from './decoders';
import { COUNTERS } from './counters';
import { MULTIPLEXERS } from './multiplexers';
import { DISPLAYS } from './displays';
// Importar otros módulos cuando se creen...
// import { FLIP_FLOPS } from './flip-flops';
// import { COMPARATORS } from './comparators';
// import { BUFFERS } from './buffers';
// import { LEDS } from './leds';
// import { RELAYS } from './relays';
// import { SHIFT_REGISTERS } from './shift-registers';
// import { MICROCONTROLLERS } from './microcontrollers';
// import { VOLTAGE_REGULATORS } from './voltage-regulators';

/**
 * Orquestador principal que combina todos los componentes electrónicos
 * Permite búsqueda y filtrado por categoría, fabricante, serie, etc.
 */
export class ElectronicComponentsOrchestrator {
  private components: ElectronicComponent[];

  constructor() {    this.components = [
      ...LOGIC_GATES,
      ...DECODERS,
      ...COUNTERS,
      ...MULTIPLEXERS,
      ...DISPLAYS,
      // ...FLIP_FLOPS,
      // ...COMPARATORS,
      // ...BUFFERS,
      // ...LEDS,
      // ...RELAYS,
      // ...SHIFT_REGISTERS,
      // ...MICROCONTROLLERS,
      // ...VOLTAGE_REGULATORS,
    ];
  }

  /**
   * Obtiene todos los componentes
   */
  getAllComponents(): ElectronicComponent[] {
    return this.components;
  }

  /**
   * Obtiene componentes por categoría
   */
  getComponentsByCategory(category: ComponentCategory): ElectronicComponent[] {
    return this.components.filter(component => component.category === category);
  }

  /**
   * Obtiene un componente por URL
   */
  getComponentByUrl(url: string): ElectronicComponent | undefined {
    return this.components.find(component => component.url === url);
  }

  /**
   * Obtiene componentes por fabricante
   */
  getComponentsByManufacturer(manufacturer: string): ElectronicComponent[] {
    return this.components.filter(component => 
      component.manufacturer?.toLowerCase().includes(manufacturer.toLowerCase())
    );
  }

  /**
   * Obtiene componentes por serie
   */
  getComponentsBySeries(series: string): ElectronicComponent[] {
    return this.components.filter(component => 
      component.series?.toLowerCase().includes(series.toLowerCase())
    );
  }

  /**
   * Busca componentes por término de búsqueda
   */
  searchComponents(searchTerm: string, locale: LocaleTypes = 'es'): ElectronicComponent[] {
    const term = searchTerm.toLowerCase();
    
    return this.components.filter(component => {
      const translation = component.translations[locale];
      
      return (
        component.url.toLowerCase().includes(term) ||
        component.partNumber.toLowerCase().includes(term) ||
        translation.label.toLowerCase().includes(term) ||
        translation.heading.toLowerCase().includes(term) ||
        translation.description.toLowerCase().includes(term) ||
        translation.applications.some(app => app.toLowerCase().includes(term)) ||
        component.manufacturer?.toLowerCase().includes(term) ||
        component.series?.toLowerCase().includes(term)
      );
    });
  }

  /**
   * Obtiene componentes relacionados (mismo fabricante o serie)
   */
  getRelatedComponents(component: ElectronicComponent, limit = 5): ElectronicComponent[] {
    const related = this.components.filter(comp => 
      comp.url !== component.url && (
        comp.manufacturer === component.manufacturer ||
        comp.series === component.series ||
        comp.category === component.category
      )
    );
    
    return related.slice(0, limit);
  }

  /**
   * Obtiene estadísticas de componentes
   */
  getStats() {
    const stats = {
      total: this.components.length,
      byCategory: {} as Record<ComponentCategory, number>,
      byManufacturer: {} as Record<string, number>,
      bySeries: {} as Record<string, number>
    };

    this.components.forEach(component => {
      // Por categoría
      stats.byCategory[component.category] = (stats.byCategory[component.category] || 0) + 1;
      
      // Por fabricante
      if (component.manufacturer) {
        stats.byManufacturer[component.manufacturer] = (stats.byManufacturer[component.manufacturer] || 0) + 1;
      }
      
      // Por serie
      if (component.series) {
        stats.bySeries[component.series] = (stats.bySeries[component.series] || 0) + 1;
      }
    });

    return stats;
  }

  /**
   * Obtiene todas las categorías disponibles
   */
  getAvailableCategories(): ComponentCategory[] {
    const categories = new Set<ComponentCategory>();
    this.components.forEach(component => categories.add(component.category));
    return Array.from(categories);
  }

  /**
   * Obtiene todos los fabricantes disponibles
   */
  getAvailableManufacturers(): string[] {
    const manufacturers = new Set<string>();
    this.components.forEach(component => {
      if (component.manufacturer) {
        manufacturers.add(component.manufacturer);
      }
    });
    return Array.from(manufacturers);
  }

  /**
   * Obtiene todas las series disponibles
   */
  getAvailableSeries(): string[] {
    const series = new Set<string>();
    this.components.forEach(component => {
      if (component.series) {
        series.add(component.series);
      }
    });
    return Array.from(series);
  }
}

// Instancia singleton del orquestador
export const electronicComponents = new ElectronicComponentsOrchestrator();

// Funciones de conveniencia para compatibilidad con el sistema anterior
export function getLogicGateTranslation(url: string, locale: LocaleTypes = 'es') {
  const component = electronicComponents.getComponentByUrl(url);
  if (!component || component.category !== 'logic-gates') return undefined;
  
  return {
    ...component.translations[locale],
    datasheet: component.datasheet,
    pdf: component.pdf,
    url: component.url,
    partNumber: component.partNumber,
    manufacturer: component.manufacturer,
    alternatives: component.alternatives
  };
}

export function getDecoderTranslation(url: string, locale: LocaleTypes = 'es') {
  const component = electronicComponents.getComponentByUrl(url);
  if (!component || component.category !== 'decoders') return undefined;
  
  return {
    ...component.translations[locale],
    datasheet: component.datasheet,
    pdf: component.pdf,
    url: component.url,
    partNumber: component.partNumber,
    manufacturer: component.manufacturer,
    alternatives: component.alternatives
  };
}

export function getCounterTranslation(url: string, locale: LocaleTypes = 'es') {
  const component = electronicComponents.getComponentByUrl(url);
  if (!component || component.category !== 'counters') return undefined;
  
  return {
    ...component.translations[locale],
    datasheet: component.datasheet,
    pdf: component.pdf,
    url: component.url,
    partNumber: component.partNumber,
    manufacturer: component.manufacturer,
    alternatives: component.alternatives
  };
}

// Exportar constantes para mantener compatibilidad
export const LOGICGATES = LOGIC_GATES;

export default electronicComponents;
