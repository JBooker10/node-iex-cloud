export interface Volume {
    mic?: string;
    tapeId?: string;
    venueName?: string;
    volume?: number;
    tapeA?: number;
    tapeB?: number;
    tapeC?: number;
    marketPercent?: number;
    lastUpdated?: number;
  }

  export interface VolumeByVenue {
    volume?: number;
    venue?: string;
    venueName?: string;
    date?: string;
    marketPercent?: number;
  }