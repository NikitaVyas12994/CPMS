import React, { memo } from "react";
import { ChartTypes } from "../../../Config/ApexChart.conf";
import { Charts } from "../../Charts/Charts";
import { ITransactionData, IWidget20ChartData } from "../../interfaces/widgetInterface";
import "./widget20.css";
import { widget20ChartConfig } from "./widget20Chart.config";

interface IWidget20 {
    title: string,
    income: (number | string),
    expenses: (number | string),
    widget20ChartData: IWidget20ChartData[],
    widget20ChartTimeStamp: (string | Date)[],
    transactionData: ITransactionData[]
}

const Widget20 = memo((props: IWidget20) => {
    const { title, income, expenses, widget20ChartData, widget20ChartTimeStamp, transactionData } = props;

    widget20ChartConfig.xaxis.categories = widget20ChartTimeStamp;

    const MonthlySummary = () => {
        return (
            <div className="column is-4">
                <div className="monthly-summary-wrap">
                    <div className="monthly-summary">
                        <div className="monthly-summary-item">
                            <span>Income</span>
                            <span className="is-income">+${income}</span>
                        </div>
                        <div className="monthly-summary-item">
                            <span>Expenses</span>
                            <span className="is-expense">-${expenses}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const Transaction = () => {
        return (
            <div className="inner-box">
                <div className="box-title">
                    <h3>Transactions</h3>
                    <a className="action-link">View All</a>
                </div>
                {/* <!--Transactions--> */}
                <div className="transactions">
                    {/* <!--Transaction--> */}
                    {
                        transactionData?.map((transactionItem, index) =>
                            <div key={index} className="media-flex-center">
                                <div className={`h-icon is-${transactionItem?.iconColor} is-rounded`}>
                                    <i className={transactionItem?.icon}></i>
                                </div>
                                <div className="flex-meta is-lighter">
                                    <span>{transactionItem?.title}</span>
                                    <span>{transactionItem?.transactionTimeData}</span>
                                </div>
                                <div className="flex-end">
                                    <span className="dark-inverted">{transactionItem?.value}</span>
                                </div>
                            </div>
                        )
                    }
                    <div className="button-wrap">
                        <button className="button h-button is-fullwidth is-primary is-elevated">New</button>
                        <button className="button h-button is-fullwidth">Settings</button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="widget-card is-card-panel is-grey">
            <div className="columns is-gapless">
                <div className="column is-8">
                    {/* <!--Box--> */}
                    <div className="inner-box">
                        <div className="box-title">
                            <h3>{title}</h3>
                        </div>

                        <div className="columns">
                            {/* <!--Monthly Summary--> */}
                            <MonthlySummary />
                            {/* <!--Chart--> */}
                            <div className="column is-8">
                                <div className="chart-wrapper">
                                    <a className="action-link">All Reports</a>
                                    <div id="timeline-chart">
                                        <Charts options={widget20ChartConfig} series={widget20ChartData} type={ChartTypes.area} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="column is-4">
                    {/* <!--Box--> */}
                    <Transaction />
                </div>
            </div>
        </div>
    )
})

export { Widget20 }