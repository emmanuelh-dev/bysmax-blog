export type LocaleTypes = 'es' | 'en' | 'pt';

// Tipos base para todos los componentes electrónicos
export interface BaseComponentTranslations {
  label: string;
  heading: string;
  description: string;
  configuration: string;
  type: string;
  booleanFunction?: string;
  applications: string[];
  technicalSpecs?: {
    operatingVoltage?: string;
    maxCurrent?: string;
    propagationDelay?: string;
    temperature?: string;
    packageType?: string;
    pinSpacing?: string;
    frequency?: string;
    power?: string;
    [key: string]: string | undefined;
  };
  truthTable?: Array<{ [key: string]: string | number }>;
  pinout?: {
    description: string;
    pins: Array<{
      number: number;
      name: string;
      function: string;
    }>;
  };
}

export interface BaseComponent {
  url: string;
  category: ComponentCategory;
  subcategory?: string;
  partNumber: string;
  manufacturer?: string;
  datasheet: string;
  pdf: string;
  series?: string;
  alternatives?: string[];
  translations: Record<LocaleTypes, BaseComponentTranslations>;
}

// Categorías de componentes
export type ComponentCategory = 
  | 'logic-gates'
  | 'decoders'
  | 'multiplexers'
  | 'counters'
  | 'flip-flops'
  | 'comparators'
  | 'buffers'
  | 'displays'
  | 'leds'
  | 'relays'
  | 'shift-registers'
  | 'microcontrollers'
  | 'voltage-regulators';

// Extensiones específicas por categoría
export interface LogicGateComponent extends BaseComponent {
  category: 'logic-gates';
  gateType: 'AND' | 'OR' | 'NOT' | 'NAND' | 'NOR' | 'XOR' | 'XNOR' | 'BUFFER';
}

export interface DecoderComponent extends BaseComponent {
  category: 'decoders';
  decoderType: 'BCD-7seg' | '3-to-8' | 'binary';
  outputType?: 'open-collector' | 'totem-pole';
  displayType?: 'common-anode' | 'common-cathode';
}

export interface MultiplexerComponent extends BaseComponent {
  category: 'multiplexers';
  channels: string; // ej: '8-to-1', '4-to-1-dual'
  selectLines: number;
}

export interface CounterComponent extends BaseComponent {
  category: 'counters';
  counterType: 'binary' | 'BCD' | 'divide-by-N';
  modulus: number; // módulo del contador (10, 12, 16, etc.)
  bits: number;
}

export interface FlipFlopComponent extends BaseComponent {
  category: 'flip-flops';
  flipFlopType: 'D' | 'JK' | 'SR' | 'T';
  channels: number; // número de flip-flops en el IC
  edgeTriggered: boolean;
}

export interface ComparatorComponent extends BaseComponent {
  category: 'comparators';
  bits: number;
  outputs: string[]; // ['A>B', 'A<B', 'A=B']
  cascadable: boolean;
}

export interface BufferComponent extends BaseComponent {
  category: 'buffers';
  bufferType: 'tristate' | 'bidirectional' | 'inverting' | 'non-inverting';
  channels: number;
  direction?: 'unidirectional' | 'bidirectional';
}

export interface DisplayComponent extends BaseComponent {
  category: 'displays';
  displayType: '7-segment' | 'dot-matrix' | 'alphanumeric';
  digits: number;
  color: string;
  size: string; // ej: '0.56"'
  commonType: 'common-anode' | 'common-cathode';
}

export interface LEDComponent extends BaseComponent {
  category: 'leds';
  color: string;
  size: string; // ej: '5mm', '3mm'
  brightness: string; // en mcd
  forwardVoltage: string;
  forwardCurrent: string;
}

export interface RelayComponent extends BaseComponent {
  category: 'relays';
  coilVoltage: string;
  contactConfiguration: string; // ej: 'DPDT', 'SPST'
  contactRating: string;
  relayType: 'electromagnetic' | 'solid-state';
}

export interface ShiftRegisterComponent extends BaseComponent {
  category: 'shift-registers';
  bits: number;
  shiftType: 'serial-in-parallel-out' | 'parallel-in-serial-out' | 'universal';
  outputType: 'tristate' | 'standard';
}

export interface MicrocontrollerComponent extends BaseComponent {
  category: 'microcontrollers';
  architecture: string; // ej: 'AVR', 'ARM', 'PIC'
  flashMemory: string;
  sram: string;
  eeprom?: string;
  ioLines: number;
  clockSpeed: string;
  packages: string[];
}

export interface VoltageRegulatorComponent extends BaseComponent {
  category: 'voltage-regulators';
  outputVoltage: string;
  maxCurrent: string;
  regulatorType: 'linear' | 'switching';
  packageType: string;
  dropout?: string;
}

// Union type para todos los componentes
export type ElectronicComponent = 
  | LogicGateComponent
  | DecoderComponent
  | MultiplexerComponent
  | CounterComponent
  | FlipFlopComponent
  | ComparatorComponent
  | BufferComponent
  | DisplayComponent
  | LEDComponent
  | RelayComponent
  | ShiftRegisterComponent
  | MicrocontrollerComponent
  | VoltageRegulatorComponent;
