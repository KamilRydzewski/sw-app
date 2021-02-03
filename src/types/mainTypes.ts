export type EventPropType = {
  target: HTMLInputElement;
};

export interface Map {
  [key: string]: string | undefined;
}
export interface FunctionProps {
  onChange: (e: Event) => void;
}

export interface CardType {
  cardType?: string;
  name: string;
  url: string;
  id?: number;
}

export interface ResponseType {
  count: number;
  next: string;
  previous: string;
}
