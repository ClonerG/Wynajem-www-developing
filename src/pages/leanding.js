import React from 'react';
import '../style/leanding.css';

const Leanding = () => {
  window.onload = function() {
    let smIframeParentElem = document.getElementById("salesmanago-Iframe_f9207001-726d-4a1e-a9dd-8b5550e852af");
    let smIframeElem = document.createElement("iframe");
    smIframeElem.src = "https://app3.salesmanago.pl/mscf/butnzwiti6vdwbjx/default/LP_dla_nowych_klientow_ADIMA.htm?" + Date.now() + '"';
    smIframeElem.style.margin = "0";
    smIframeElem.style.padding = "0";
    smIframeElem.width = "2400";
    smIframeElem.height = "1800";
    smIframeElem.style.overflowY = "hidden";
    smIframeElem.style.overflowX = "hidden";
    smIframeElem.style.background = "#ffffff";
    smIframeElem.style.maxWidth = "100%";
    smIframeElem.style.border = "none";
    smIframeParentElem.appendChild(smIframeElem);
  };
  return (
    <div class="leanding">
      {/* <div class="leanding__container"> */}
      <div id="salesmanago-Iframe_f9207001-726d-4a1e-a9dd-8b5550e852af"></div>
      {/* </div> */}
    </div>
  );
};

export default Leanding;
