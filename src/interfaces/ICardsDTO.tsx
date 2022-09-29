export interface ICards {
  hp: string;
  number: string;
  name: string;
  level: string;
  images: Images;
  id: string;
  types: string[];
  weaknesses: Weaknesses[];
  attacks: Attacks[];
}

interface Images {
  small: string;
  large: string;
}

interface Weaknesses {
  type: string;
  value: string;
}

interface Attacks {
  name: string;
  text: string;
  damage: string;
}
