import React from 'react'
import { TrendData } from './../../Data/TrendData';
import './TrendsCard.css'

export const TrendCard = () => {
    return (
        <div className="TrendCard">
            {TrendData.map((trend) => {
                return (

                    <div className="Trend">
                        <h3>#{trend.title}</h3>
                        <p>{trend.shares}k shares</p>
                    </div>
                )
            })}

        </div>
    )
}
