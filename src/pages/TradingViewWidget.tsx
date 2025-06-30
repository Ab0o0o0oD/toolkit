import { useEffect, useRef, memo } from 'react';

export const TradingViewWidget= ()=> {
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
          "symbol": "OANDA:XAUUSD",
          "theme": "dark",
          "timezone": "Europe/Oslo",
          "backgroundColor": "rgba(15, 15, 15, 1)",
          "gridColor": "rgba(242, 54, 69, 0.06)",
          "watchlist": [
            "OSL:HEX"
          ],
          "withdateranges": true,
          "range": "YTD",
          "compareSymbols": [],
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
memo(TradingViewWidget);

