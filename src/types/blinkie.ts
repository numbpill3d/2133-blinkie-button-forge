
export interface BlinkieProps {
  text: string;
  background: string;
  textColor: string;
  font: string;
  isAnimated: boolean;
  animationType?: string;
  backgroundImage?: string;
}

export type BlinkieTemplates = Record<string, BlinkieProps>;
