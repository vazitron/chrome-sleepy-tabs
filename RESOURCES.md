https://developer.chrome.com/docs/extensions/mv3/getstarted/

https://developers.google.com/web/updates/2018/07/page-lifecycle-api
https://developer.chrome.com/docs/extensions/reference/tabs/
https://developer.chrome.com/docs/extensions/mv3/devguide/
https://developer.chrome.com/docs/extensions/mv3/permission_warnings/

Tabs:
https://developer.chrome.com/docs/extensions/reference/tabs/
https://developer.chrome.com/docs/extensions/reference/tabs/#method-discard
https://developer.chrome.com/docs/extensions/reference/tabs/#method-getSelected

Timers:
https://developer.chrome.com/docs/extensions/reference/alarms/

Storage:
https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#incognito

Form inputs, scroll pos, etc.
https://developers.google.com/web/updates/2015/09/tab-discarding
- says it should be preserved


Inspirational projects:
https://github.com/deanoemcke/thegreatdiscarder/tree/master/src
https://github.com/hrj/sloth
https://www.xda-developers.com/google-chrome-the-great-suspender-malware/

Misc:
https://github.com/deanoemcke/thegreatdiscarder/issues/21
- great issue, discusses inner impl of suspender - it's actually completely custom impl
- also discusses something that I noticed too, slow perf with 700+ tabs
- a combination of suspend+discard, might be useful in the future https://github.com/deanoemcke/thegreatdiscarder/issues/21#issuecomment-415966097


Findings:
chrome.tabs.discard()
    able to discard even the current tab - it turns blank
https://developers.google.com/web/updates/2015/09/tab-discarding
    although this says it should preserve unsaved form inputs, it fails in these cases:
        twitter - they don't have <input> nor contenteditable
        inputs in popups, that are not in DOM on reload