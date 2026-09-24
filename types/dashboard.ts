export interface Dashboard {
  dailyTarget: number;
  dailyTotal: number;

  feedings: FeedingRecord[];
  lastFeeding: FeedingRecord | null;

  elapsedMinutes: number | null;

  updatedAt: string;
}

export interface FeedingRecord {
  time: string;
  amount: number;
}
