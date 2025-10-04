import { StepType } from '../types/step-type';

export interface IPaint {
  id: string;
  name: string;
  hex: string;
}

export interface IStep {
  order: number;
  name: string;
  type: StepType;
  paints: IPaint[];
}

export interface IMaterial {
  name: string;
  steps: IStep[];
}

export interface IScheme {
  id?: string;
  name: string;
  createdAt: Date;
  lastUpdatedAt: Date | null;
  primaryColour: string | null;
  materials: IMaterial[];
}
