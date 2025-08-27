## Job Apply Helper

Job Apply Helper is a Chrome extension designed to simplify and speed up the job application process.  
It provides a popup interface, background logic, and content scripts to automatically handle repetitive application tasks.

---

##  Features

- Popup interface for quick actions (`popup.html` + `popup.js`).
- Background service worker (`background.js`) for persistent logic.
- Content script (`scripts/content.js`) injected into job application pages.
- Saves and retrieves profiles via `profiles.json` and Chrome `storage` API.
- Uses jQuery (`jquery-3.7.1.min.js`) for DOM manipulation.
- Supports multiple job sites with active tab and scripting permissions.



##  Prerequisites

Before installing, ensure you have:

- Google Chrome (latest version recommended).

- Open Google Chrome and go to:

- chrome://extensions/

- Enable Developer Mode (toggle in the top-right corner).

- Click Load unpacked and select the Extension/ folder.

- The extension will now appear in your Chrome toolbar 🎉
-

---
## Profiles Configuration

The profiles.json file stores your job application details.
Update it with your personal information so the extension can autofill forms.

- FirstName – Your first name

- LastName – Your last name

- Email – Email address used for job applications

- Location – Current city/state or country

- Phone – Contact phone number

- Salary – Expected salary (per year or as required)

- Gender – Gender information if required

- Linkedin – URL to your LinkedIn profile

- WorkAuth – Work authorization (e.g., "US Citizen", "H1B", "Green Card")


```sh

git clone 

https://github.com/WhiteboxHub/project-Chrome-Extension.git



