
export interface Risk {
  category: string;
  specificRisk: string;
  affectedProcess: string;
  potentialConsequence: string;
  severity: string;
}

export interface ControlMeasure {
  title: string;
  details: {
    action: string;
    justification: string;
  }[];
}
