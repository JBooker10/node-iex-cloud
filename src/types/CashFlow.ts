export interface CashFlow {
  symbol: string;
  cashflow: [
    {
      /** The last day of the relevant fiscal period. */
      reportDate?: Date;
      /** Represents income before extraordinary items and preferred and common dividends, but after operating and non-operating income and expenses, minority interest and equity in earnings. */
      netIncome?: number;
      /** Depreciation represents the process of allocating the cost of a depreciable asset to the accounting periods covered during its expected useful life to a business. Depletion refers to cost allocation for natural resources such as oil and mineral deposits. Amortization relates to cost allocation for intangible assets such as patents and leasehold improvements, trademarks, book plates, tools & film costs. This item includes dry-hole expense, abandonments and oil and gas property valuation provision for extractive companies. This item excludes amortization of discounts or premiums on financial instruments owned or outstanding and depreciation on discontinued operations. */
      depreciation?: number;
      /** Represents the change in the amount of receivables from one year to the next as reported in the cash flow statement. */
      changesInReceivables?: number;
      /** Represents the change in the amount of inventories from one year to the next as reported in the cash flow statement. */
      changesInInventories?: number;
      /** Represents the change in cash and short term investments from one year to the next. This item is available only when the Statement of Changes in Financial Position is based on cash and short term investments. */
      cashChange?: number;
      /** Returns net cash from operating activities for the period calculated as the sum of funds from operations, extraordinary items, and funds from other operating activities. */
      cashFlow?: number;
      /** Returns total capital expenditures for the period calculated as the sum of capital expenditures additions to fixed assets, and additions to other assets. */
      capitalExpenditures?: number;
      /** Returns purchase/sale of investments for the period calculated as the sum of the negative of increase in investments, and decrease in investments */
      investments?: number;
      /** Represents any other funds employed in investing activities and not included in capital expenditures, net assets from acquisitions, increase in investments, decrease in investments or additions to property. */
      investingActivityOther?: null | number;
      /** Returns net cash from investing activities for the period calculated as (Cash Flow from Investing Activity) - Net. If this is not available, then it is calculated as (Other Uses/(Sources) Investing) + (Disposal of fixed assets) + (decrease in investments) - (net assets from acquisitions) - (capital expenditures other assets) - (increase in investments) - (capital expenditures additions to fixed assets) */
      totalInvestingCashFlows?: number;
      /** Represents the total common and preferred dividends paid to shareholders of the company. Excludes dividends paid to minority shareholders. */
      dividendsPaid?: null | number;
      /** Returns net issuance/reduction of debt for the period calculated as (increase/decrease in short term borrowings) + (long term borrowings - reduction in long term debt) */
      netBorrowing?: number;
      /** Returns other financing activities for the period. */
      otherFinancingCashFlows?: null | number;
      /** Returns net cash from financing activities for the period. */
      cashFlowFinancing?: number;
      /** Represents the effect of translating from one currency to another on the cash flow of the company. */
      exchangeRateEffect?: null | number;
    }
  ];
}

export interface BatchCashFlow {
  [key: string]: {
    ["cash-flow"]: CashFlow
  };
}