document.addEventListener("DOMContentLoaded", () => {
    const firstNameInput = document.getElementById("first-name");
    const lastNameInput = document.getElementById("last-name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const salaryInput = document.getElementById("salary");
    const locationInput = document.getElementById("location");
    const genderInput = document.getElementById("gender");
    const linkedinInput = document.getElementById("linkedin");
    const resumeInput = document.getElementById("resume");
    const uploadedResumeInput = document.getElementById("uploaded-resume");
    const workAuthInput = document.getElementById("work-authorization");
    const saveButton = document.querySelector(".btn-save");
  
    // Convert file → base64
    function fileToBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = e => resolve(e.target.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    }
  
    // Load profile + resume from storage
    chrome.storage.local.get(["profile", "resume"], ({ profile, resume }) => {
      if (profile) {
        firstNameInput.value = profile.firstName || "";
        lastNameInput.value = profile.lastName || "";
        emailInput.value = profile.email || "";
        phoneInput.value = profile.phone || "";
        salaryInput.value = profile.salary || "";
        locationInput.value = profile.location || "";
        genderInput.value = profile.gender || "";
        linkedinInput.value = profile.linkedin || "";
        workAuthInput.value = profile.workAuth || "";
      }
      if (resume) {
        uploadedResumeInput.textContent = `Current: ${resume.name}`;
      }
    });
  
    
    resumeInput.addEventListener("change", async () => {
      const file = resumeInput.files[0];
      if (file) {
        const base64 = await fileToBase64(file);
        const resume = { name: file.name, type: file.type, content: base64 };
  
        chrome.storage.local.set({ resume }, () => {
          uploadedResumeInput.textContent = `Saved: ${file.name}`;
        });
      }
    });
  
    // Save profile data
    saveButton.addEventListener("click", () => {
      const profile = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        salary: salaryInput.value,
        location: locationInput.value,
        gender: genderInput.value,
        linkedin: linkedinInput.value,
        workAuth: workAuthInput.value
      };
  
      chrome.storage.local.set({ profile }, () => {
        alert("Profiles saved successfully!");
      });
    });
  
    document.getElementById("fill-it").addEventListener("click", () => {
      chrome.runtime.sendMessage({ message: "fill" });
    });
  });
  


document.getElementById("import-json").addEventListener("click", () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.json';
    
    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const profileData = JSON.parse(e.target.result);
                    // Map JSON data to form fields
                    document.getElementById("first-name").value = profileData.FirstName || "";
                    document.getElementById("last-name").value = profileData.LastName || "";
                    document.getElementById("email").value = profileData.Email || "";
                    document.getElementById("phone").value = profileData.Phone || "";
                    document.getElementById("salary").value = profileData.Salary || "";
                    document.getElementById("location").value = profileData.Location || "";
                    document.getElementById("gender").value = profileData.Gender || "";
                    document.getElementById("linkedin").value = profileData.Linkedin || "";
                    document.getElementById("work-authorization").value = profileData.WorkAuth || "";
                    
                    // Auto-save the imported profile
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
                    
                    chrome.storage.local.set({ profile }, () => {
                        alert("Profile imported successfully!");
                    });
                } catch (error) {
                    alert("Error parsing JSON file: " + error.message);
                }
            };
            reader.readAsText(file);
        }
    });
    
    fileInput.click();
});



