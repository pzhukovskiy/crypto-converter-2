interface Chart {
    date: string;
    priceUsd: string;
    time: number
}

export interface ChartType {
    data: Chart[];
}