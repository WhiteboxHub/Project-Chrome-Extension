
// Load profiles.json into chrome storage when extension is installed

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.get("profile", ({ profile }) => {
      if (!profile) {
        fetch(chrome.runtime.getURL("profiles.json"))
          .then(response => response.json())
          .then(data => {
            chrome.storage.local.set({ profile: data.profiles }, () => {
              console.log("Profile loaded into storage");
            });
          });
      }
    });
  });
  