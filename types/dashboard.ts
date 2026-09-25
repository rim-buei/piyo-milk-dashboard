export interface Dashboard {
  dailyTarget: number;
  dailyTotal: number;

  feedings: Feeding[];
  lastFeeding: Feeding | null;

  elapsedMinutes: number | null;

  updatedAt: string;
}

export interface Feeding {
  type: string;
  datetime: string;
  amount: number;
}
