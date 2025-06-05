export type DailyItineraryDetail = {
  time?: string;
  location?: string;
  notes?: string;
  activity?: string; // Add activity property
  imageSrc?: string; // Add optional image source property
  category: 'sightseeing' | 'eating' | 'transportation'| 'default';
};

export type transportationType = {
  type: string; // e.g., "Train", "Bus", "Walk"
  duration?: string; // e.g., "30 minutes"
  from?: string; // Starting point
  to?: string; // Add to property
  notes?: string; // Additional notes
  time?: string; // Optional time for the transportation
  category: 'transportation'; // Add category for transportation type

};

// Type guard to check if an item is of type transportationType
export function isTransportation(item: DailyItineraryDetail | transportationType): item is transportationType {
  return item.category === 'transportation';
}
