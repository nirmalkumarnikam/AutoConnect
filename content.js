function sendConnectionRequests() {
   let profiles = document.querySelectorAll('.profile-class-selector');
  
    profiles.forEach(profile => {
      let connectButton = profile.querySelector('.connect-button-class');
      if (connectButton) {
        connectButton.click();
      }
    });
  }
  
 chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "sendConnections") {
      sendConnectionRequests();
      sendResponse({status: "Connection requests sent"});
    }
  });
  