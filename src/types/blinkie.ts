
export interface BlinkieProps {
  text: string;
  background: string;
  textColor: string;
  font: string;
  isAnimated: boolean;
  animationType?: string;
  backgroundImage?: string;
  border?: string;
  borderColor?: string;
  borderStyle?: string;
  page?: number;
}

export type BlinkieTemplates = Record<string, BlinkieProps>;

export interface AnimatedBackgroundProps {
  backgroundType: string;
  speed?: number;
}
