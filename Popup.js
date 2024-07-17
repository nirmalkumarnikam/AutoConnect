document.getElementById('sendRequests').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {action: "sendConnections"}, (response) => {
        console.log(response.status);
      });
    });
  });
  