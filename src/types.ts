import BalanceSheet from "./types/BalanceSheet";
import Book from "./types/Book";
import CashFlow from "./types/CashFlow";
import CeoCompensation from "./types/CeoCompensation";
import Chart, { DynamicChart, ChartParams, Range } from "./types/Chart";
import Company, { Logo } from "./types/Company";
import Dividends from "./types/Dividends";
import Earnings from "./types/Earnings";
import Estimates from "./types/Estimates";
import Financials from "./types/Financials";
import Forex, { ForexParams } from "./types/Forex";
import FundOwnership from "./types/Forex";
import Income from "./types/Income";
import { InsiderRoster, InsiderSummary, InsiderTransactions } from "./types/Insider";
import InstitutionalOwnership from "./types/InstitutionalOwnership";
import IntraDay, { IntradayPrices } from "./types/IntraDay";
import News from "./types/News";
import OHLC from "./types/OHLC";
import PriceTarget from "./types/PriceTarget";
import Quote, { CryptoQuote, DelayedQuote } from "./types/Quote";
import Recent from "./types/Recent";
import Records from "./types/Records";
import Search from "./types/Search";
import DailySentiment, { MinuteSentiment  } from "./types/Sentiment"
import ShortInterest from "./types/ShortInterest";
import Splits from "./types/Splits";
import Stats, { HistoricalStats, StatType } from "./types/Stats";
import Trades, { LargestTrades } from "./types/Trades"
import TimeSeries from "./types/TimeSeries";
import RecommendationTrends from "./types/RecommendationTrends";
import  Volume, { VolumeByVenue } from "./types/Volume"


/**
     - Sandbox: set to true for devlopment data
     - Version. Example: beta
     - Publishable. All REST requests require a valid token and can be added to a url like ?token=YOUR_TOKEN_HERE

 */
export interface Configuration {
  publishable: string;
  test: string;
  sandbox?: boolean;
  version?: Version;
}

export type Version = "beta" | "stable" | "v1" | string;
export type Period = "annual" | "quarterly";
export type Last = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type OptionSide = "put" | "call";
export type CryptoCurrency = "btcusd" | "ethusd" | "ltcusd" | "bchusd"  | string
export type MarketType = "mostactive" | "gainers" | "losers" | "iexvolume" | "iexpercent" | string

  export { 
    BalanceSheet, 
    Book, 
    CashFlow, 
    CeoCompensation, 
    Chart, 
    ChartParams,
    Company,
    CryptoQuote,
    DailySentiment,
    DelayedQuote,
    Dividends,
    DynamicChart,
    Earnings,
    Estimates,
    Financials,
    Forex,
    ForexParams,
    FundOwnership,
    HistoricalStats,
    Income,
    InsiderRoster,
    InsiderSummary,
    InsiderTransactions,
    InstitutionalOwnership,
    IntraDay,
    IntradayPrices,
    LargestTrades,
    Logo,
    MinuteSentiment,
    News,
    OHLC,
    PriceTarget,
    Quote,
    Range,
    Recent,
    Records,
    RecommendationTrends,
    ShortInterest,
    Search,
    Splits,
    Stats,
    StatType,
    Trades,
    TimeSeries,
    Volume,
    VolumeByVenue,
  }
  