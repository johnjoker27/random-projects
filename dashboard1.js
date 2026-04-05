// Dashboard file upload & management
const fileInput = document.getElementById('fileInput');
const fileList = document.getElementById('fileList');

let uploadedFiles = []; // Store files in memory

fileInput.addEventListener('change', () => {
  const files = Array.from(fileInput.files);
  uploadedFiles.push(...files);
  renderFiles();
});

// Render uploaded files
function renderFiles() {
  if (uploadedFiles.length === 0) {
    fileList.innerHTML = 'No files uploaded yet.';
    return;
  }

  fileList.innerHTML = '';
  uploadedFiles.forEach((file, index) => {
    const fileItem = document.createElement('div');
    fileItem.className = 'file-item';

    const fileName = document.createElement('span');
    fileName.textContent = file.name;

    const downloadBtn = document.createElement('button');
    downloadBtn.textContent = 'Download';
    downloadBtn.addEventListener('click', () => {
      const url = URL.createObjectURL(file);
      const a = document.createElement('a');
      a.href = url;
      a.download = file.name;
      a.click();
      URL.revokeObjectURL(url);
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.style.background = '#ff4d4d';
    deleteBtn.style.marginLeft = '5px';
    deleteBtn.addEventListener('click', () => {
      uploadedFiles.splice(index, 1);
      renderFiles();
    });

    fileItem.appendChild(fileName);
    fileItem.appendChild(downloadBtn);
    fileItem.appendChild(deleteBtn);

    fileList.appendChild(fileItem);
  });
}