export type FontType = Array<string> & {
  primary?: string;
  secondary?: string;
}

export type FontSizes = Array<number> & {
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
}

export type FontWeights = Array<number> & {
  regular?: number;
  bold?: number;
  extraBold?: number;
}

export type Spaces = Array<number> & {
  xxs?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
}

export type BorderWidths = Array<string> & {
  sm?: string;
  md?: string;
}

export type BorderRadius = Array<number> & {
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}
  