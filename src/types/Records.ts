export interface Records {
  volume: {
    recordValue?: number;
    recordDate?: Date;
    previousDayValue?: number;
    avg30Value?: number;
  };
  symbolsTraded: {
    recordValue?: number;
    recordDate?: Date;
    previousDayValue?: number;
    avg30Value?: number;
  };
  routedVolume: {
    recordValue?: number;
    recordDate?: Date;
    previousDayValue?: number;
    avg30Value?: number;
  };
  notional: {
    recordValue?: number;
    recordDate?: Date;
    previousDayValue?: number;
    avg30Value?: number;
  };
}