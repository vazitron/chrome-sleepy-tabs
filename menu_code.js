discardAllOtherTabs.addEventListener("click", async () => {
  discardAllTabsInAllWindows();
});

function discardAllTabsInAllWindows() {
  chrome.tabs.query({}, function (tabs) {
    for (const tab of tabs) {
      chrome.tabs.discard(tab.id, (discardedTab) => {
        if (discardedTab) {
        }
      });
    }
  });
}
