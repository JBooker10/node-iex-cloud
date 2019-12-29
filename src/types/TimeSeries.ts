export default interface TimeSeries {
    id: string,
    description: string,
    key: string,
    subkey: string,    
    schema: {
      type: object,
      properties: {
        formFiscalYear: {
          type: number
        },
        formFiscalQuarter: {
          type: number
        },
        version: {
          type: string
        },
        periodStart: {
          type: string
        },
        periodEnd: {
          type: string
        },
        dateFiled: {
          type: string
        },
        reportLink: {
          type: string
        },
        adsh: {
          type: string
        },
        stat: {
          type: object
        }
      }
    },
    weight: number,
    created: Date,
    lastUpdated: Date
  }