export interface Dashboard {
  dailyTotal: number;
  dailyTarget: number;

  feedings: FeedingRecord[];
  lastFeeding: FeedingRecord;

  elapsedMinutes: number;

  updatedAt: string;
}

export interface FeedingRecord {
  time: string;
  amount: number;
}
