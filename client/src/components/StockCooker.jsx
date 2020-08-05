import React from 'react';
import TradingViewWidget from 'react-tradingview-widget';

const StockCooker = () => {
    return (
        <div>
            <TradingViewWidget symbol='NASDAQ:AAPL' autosize />
        </div>
    );
};

export default StockCooker;
