const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Listens for beforeinstallprompt event 
window.addEventListener('beforeinstallprompt', (event) => {
    
    // Capture & store the `beforeinstallevent`
    window.defferedPrompt = event;

    // On fire button is displayed - hidden class removed.
    butInstall.classList.toggle('hidden', false);
});  

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {   
    const promptEvent = window.defferedPrompt;

    if (!promptEvent) {
       return;
    }
    promptEvent.prompt();

    // Reset as deferredPrompt can only be used once.
    window.defferedPrompt = null;
    butInstall.classList.toggle('hidden', true);
  });

// Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
   // Clear prompt
  window.deferredPrompt = null; 
});

