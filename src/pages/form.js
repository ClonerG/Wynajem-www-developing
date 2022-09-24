import React from 'react';
import '../style/form.css';

const Form = () => {
  (function() {
    let id = 'smIframe-ebqtr8k6jibl2eso';
    let PREFIX_OUTGOING = 'SM_RESIZE_IFRAME:' + id;
    let PREFIX_INCOMING = 'SM_IFRAME_HEIGHT:' + id + ':';
    let iframe;
    let findIframe = function() {
      if (iframe) {
        return iframe;
      }
      iframe = document.getElementById(id);
      return iframe;
    };
    window.addEventListener('resize', function() {
      findIframe() && iframe.contentWindow.postMessage(PREFIX_OUTGOING, '*');
    });
    window.addEventListener('message', function(event) {
      let messageData = event.data;
      try {
        if (messageData.indexOf(PREFIX_INCOMING) !== 0) {
          return;
        }
        findIframe() && (iframe.style.height = parseInt(messageData.replace(PREFIX_INCOMING, '')) + 'px');
      } catch (e) {}
    });
  }());
  return (
    <div class="form">
      <div class="container">
        <iframe style={{width: 644,  height: 500}} id="smIframe-ebqtr8k6jibl2eso" src="https://app3.salesmanago.pl/ms/sid/butnzwiti6vdwbjx/ebqtr8k6jibl2eso.htm" />
      </div>
    </div>
  );
};

export default Form;
