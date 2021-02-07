export interface Income {
    symbol: string;
    income: [
      {
        /** The last day of the relevant fiscal period. */
        reportDate?: Date;
        /** Refers to the sum of both operating and non-operating revenues . Investopedia */
        totalRevenue?: number;
        /** Represents the cost of goods sold for the period including depletion and amortization. Investopedia */
        costOfRevenue?: number;
        /** Represents the difference between sales or revenues and cost of goods sold and depreciation. Investopedia  */
        grossProfit?: number;
        /** Represents all direct and indirect costs related to the creation and development of new processes, techniques, applications and products with commercial possibilities. Excludes customer or government sponsored research, purchase of mineral rights (for oil, gas, coal, drilling and mining companies), engineering expense, and contributions by government, customers, partnerships or other corporations to the company’s research and development expense */
        researchAndDevelopment?: number;
        /** Represents expenses not directly attributable to the production process but relating to selling, general and administrative functions. Excludes research and development. */
        sellingGeneralAndAdmin?: number;
        /** Calculated as cost of revenue minus selling, general & administrative expense. Investopedia */
        operatingExpense?: number;
        /** Represents operating income for the period calculated as (net sales or revenue) - (cost of goods sold) - (selling, general & administrative expenses) - (other operating expenses). This will only return for industrial companies. */
        operatingIncome?: number;
        /** Calculated as income before tax minus operating income.  */
        otherIncomeExpenseNet?: number;
        /** Represents operating income for the period calculated as (net sales or revenue) - (cost of goods sold) - (selling, general & administrative expenses) - (other operating expenses). This will only return for industrial companies. Investopedia */
        ebit?: number;
        /** Represents interest expense, net of interest capitalized for the period calculated as (interest expense on debt) - (interest capitalized) Investopedia  */
        interestIncome?: number;
        /** Represents all income/loss before any federal, state or local taxes. Extraordinary items reported net of taxes are excluded.  */
        pretaxIncome?: number;
        /** Represents all income taxes levied on the income of a company by federal, state and foreign governments. Excludes domestic international sales corporation taxes, ad valorem taxes, excise taxes, windfall profit taxes, taxes other than income, and general and services taxes. */
        incomeTax?: number;
        /** Represents the portion of earnings/losses of a subsidiary pertaining to common stock not owned by the controlling company or other members of the consolidated group.  */
        minorityInterest?: number;
        /** Represents income before extraordinary items and preferred and common dividends, but after operating and non-operating income and expenses, minority interest and equity in earnings. Investopedia */
        netIncome?: number;
        /** Represents net income available to common basic EPS before extraordinaries for the period calculated as (net income after preferred dividends) - (discontinued operations)  */
        netIncomeBasic?: number;
      }
    ];
  }