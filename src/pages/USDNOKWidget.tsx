// TradingViewWidget.jsx
import { useEffect, useRef, memo } from 'react';

export const USDNOKWidget = () => {
    const container = useRef<HTMLDivElement>(null);

    useEffect(
        () => {
            if (!container.current) return;
            // Clear any previous widget
            container.current.innerHTML = "<div></div>";

            const script = document.createElement("script");
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
            script.type = "text/javascript";
            script.async = true;
            script.innerHTML = `
        {
          "allow_symbol_change": true,
          "calendar": false,
          "details": true,
          "hide_side_toolbar": false,
          "hide_top_toolbar": false,
          "hide_legend": false,
          "hide_volume": false,
          "hotlist": true,
          "interval": "D",
          "locale": "en",
          "save_image": true,
          "style": "1",
          "symbol": "OANDA:USDNOK",
          "theme": "dark",
          "timezone": "Europe/Stockholm",
          "backgroundColor": "#0F0F0F",
          "gridColor": "rgba(242, 242, 242, 0.06)",
          "watchlist": [],
          "withdateranges": true,
          "range": "YTD",
          "compareSymbols": [],
          "show_popup_button": true,
          "popup_height": "650",
          "popup_width": "1000",
          "studies": [],
          "autosize": true
        }`;
            container.current.appendChild(script);
        },
        []
    );

    return (
        <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
            <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
            <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div>
        </div>
    );
}

memo(USDNOKWidget);
