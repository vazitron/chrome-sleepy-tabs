buttonDiscardCurrentTab.addEventListener("click", async () => {
  discardAllTabsExceptCurrentTab();
});

buttonDiscardAllTabsInAllWindows.addEventListener("click", async () => {
  discardAllTabsInAllWindows();
});

buttonDiscardAllTabsExceptCurrentTab.addEventListener("click", async () => {
  discardAllTabsExceptCurrentTab();
});

buttonDiscardAllTabsInCurrentWindow.addEventListener("click", async () => {
  discardAllTabsInCurrentWindow();
});

buttonDiscardAllTabsExceptInCurrentWindow.addEventListener(
  "click",
  async () => {
    discardAllTabsExceptInCurrentWindow();
  }
);

buttonDiscardSelectedTabs.addEventListener("click", async () => {
  discardSelectedTabs();
});

function discardCurrentTab() {
  chrome.tabs.query({ active: true, currentWindow: true }, discardTabs);
}

function discardAllTabsInAllWindows() {
  chrome.tabs.query({}, discardTabs);
}

function discardAllTabsExceptCurrentTab() {
  chrome.tabs.query({ active: false, currentWindow: true }, discardTabs);
  chrome.tabs.query({ currentWindow: false }, discardTabs);
}

function discardAllTabsInCurrentWindow() {
  chrome.tabs.query({ currentWindow: true }, discardTabs);
}

function discardAllTabsExceptInCurrentWindow() {
  chrome.tabs.query({ currentWindow: false }, discardTabs);
}

function discardSelectedTabs() {
  chrome.tabs.query({ highlighted: true }, discardTabs);
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
