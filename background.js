chrome.runtime.onInstalled.addListener(() => {
  
  fetch(chrome.runtime.getURL('profiles.json'))
      .then(response => response.json())
      .then(profileData => {
         
          const profile = {
              firstName: profileData.FirstName,
              lastName: profileData.LastName,
              email: profileData.Email,
              phone: profileData.Phone,
              salary: profileData.Salary,
              location: profileData.Location,
              gender: profileData.Gender,
              linkedin: profileData.Linkedin,
              workAuth: profileData.WorkAuth
          };
          
         
          chrome.storage.local.set({ profile });
      })
      .catch(error => {
          console.log('No profiles.json found or error reading it:', error);
      });
});



