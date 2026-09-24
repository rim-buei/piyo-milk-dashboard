export interface Dashboard {
  dailyTarget: number;
  dailyTotal: number;

  feedings: FeedingRecord[];
  lastFeeding: FeedingRecord;

  elapsedMinutes: number;

  updatedAt: string;
}

export interface FeedingRecord {
  time: string;
  amount: number;
}
