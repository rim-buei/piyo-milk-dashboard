export interface PiyoLogResponse {
  schema_version: number;
  generated_at: string;
  range: {
    from: string;
    to: string;
  };
  records: PiyoLogRecord[];
}

export interface PiyoLogRecord {
  event_id: string;
  datetime: string;
  type: string;
  value: {
    value: number;
    unit: string;
  };
}
