export type DailyItineraryDetail = {
  time?: string;
  location?: string;
  notes?: string;
  category: 'sightseeing' | 'eating' | 'transportation'| 'default';
};

export type transportationType = {
  type: string; // e.g., "Train", "Bus", "Walk"
  duration?: string; // e.g., "30 minutes"
  from?: string; // Starting point

};
