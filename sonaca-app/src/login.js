// const { app, BrowserWindow } = require('electron');

// let mainWindow;
// app.on('ready', () => {
//     mainWindow = new BrowserWindow({
//         width: 800,
//         height: 600,
//         webPreferences: {
//             nodeIntegration: true,
//         },
//     });
//     mainWindow.loadFile('index.html');
// })

// app.on('window-all-closed', () => {
//     if (ProcessingInstruction.platform !== 'darwin') app.quit();
// });

// app.on('activate', () => {
//     if (BrowserWindow.getAllWindows().lenght === 0) {
//         createMainWindow();
//     }
// });


document.getElementById('nextButton').addEventListener('click', function () {
  const employeeNumber = document.getElementById('employeeNumber').value;
  const partNumber = document.getElementById('partNumber').value;
  const processNumber = document.getElementById('processNumber').value;
  // const releaseNumber = document.getElementById('releaseNumber').value;
  const loader = document.getElementById('loader');

  if (employeeNumber && partNumber && processNumber) {
    // if (employeeNumber && partNumber && processNumber && releaseNumber) {
      // Save part number to local storage
    localStorage.setItem('partNumber', partNumber);

    // Show the loader
    loader.classList.remove('hidden');
    document.body.classList.add('slide-out');
    setTimeout(() => {
      // Navigate to the second screen after 0.5 seconds
      window.location.href = 'part-process.html';
    }, 500); // Match the timeout duration with the animation duration
  } else {
    alert('Por favor, complete todos los campos.');
  }
});