import { IMaterial, IPaint, IScheme, IStep } from '../interfaces/paint-schemes';
import { StepType } from '../types/step-type';

export class Paint implements IPaint {
  public id: string;
  public name: string;
  public hex: string;
}

export class StepPaint extends Paint {
  public ratio: number; // 0-1.
}

export class Step implements IStep {
  public order: number;
  public name: string;
  public type: StepType;
  public paints: StepPaint[];
}

export class Material implements IMaterial {
  public name: string;
  public steps: Step[];
}

export class Scheme implements IScheme {
  public id: string;
  public name: string;
  public materials: Material[];
  public userId: string;
  public createdAt: Date;
  public lastUpdatedAt: Date | null;
  public primaryColour: string | null;
}
