import React from "react";
import { Widget27 } from "../../Component/widgets/widget27";
import { Widget28 } from "../../Component/widgets/widget28";
import { Widget29 } from "../../Component/widgets/widget29";
import { Widget30 } from "../../Component/widgets/widget30";
import { Widget31 } from "../../Component/widgets/widget31";
import * as widgetData from "../../Config/widgetData";
import { themeColors } from "../../Theme";

const Graphs = () => {

    return (
        <div className="columns is-multiline">
            <div className="column is-6">
                <Widget27 widget27Data={widgetData.widget27Data} yaxisData={widgetData.widget27AxisData} title="Horizontal Bar" />
            </div>
            <div className="column is-6">
                <Widget28 widget28ChartData={widgetData.widget28ChartData} />
            </div>
            <div className="column is-6">
                <Widget29 widget29ChartData={widgetData.widget29ChartData} title='Donut Chart' />
            </div>
            <div className="column is-6">
                <Widget30 widget30ChartData={widgetData.widget30ChartData} title='Radial Bar Multiple' total={249} />
            </div>
            <div className="column is-6">
                <Widget31 widget31ChartData={widgetData.widget31ChartData} title="Average High & Low Temperature"
                    xaxis={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
                    color={[themeColors.accent, themeColors.secondary, themeColors.orange]}
                />
            </div>
        </div>
    )
}

export { Graphs }
