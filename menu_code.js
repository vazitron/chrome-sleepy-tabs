buttonDiscardAllTabsInAllWindows.addEventListener("click", async () => {
  discardAllTabsInAllWindows();
});

buttonDiscardAllTabsInCurrentWindow.addEventListener("click", async () => {
  discardAllTabsInCurrentWindow();
});

buttonDiscardAllTabsExceptInCurrentWindow.addEventListener("click", async () => {
  discardAllTabsExceptInCurrentWindow();
});

function discardAllTabsInAllWindows() {
  chrome.tabs.query({}, discardTabs);
}

function discardAllTabsInCurrentWindow() {
  chrome.tabs.query({ currentWindow: true }, discardTabs);
}

function discardAllTabsExceptInCurrentWindow() {
  chrome.tabs.query({ currentWindow: false }, discardTabs);
}

function discardTabs(tabs) {
  console.log("Discarding tabs: ", tabs);

  for (const tab of tabs) {
    chrome.tabs.discard(tab.id, (discardedTab) => {
      if (chrome.runtime.lastError) {
        // console.warn("Whoops.. " + chrome.runtime.lastError.message);
      }

      if (discardedTab) {
      }
    });
  }
}
