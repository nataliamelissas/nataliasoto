const FileDownloadButton = () => {
  const handleDownload = () => {
    const pdfPath = '../assets/resume.pdf';

    // Create a link element
    const downloadLink = document.createElement('a');
    downloadLink.href = pdfPath;
    console.log(pdfPath)
    downloadLink.download = 'resume.pdf';

    // Append the link to the document
    document.body.appendChild(downloadLink);

    // Trigger a click event on the link to start the download
    downloadLink.click();

    // Remove the link from the document
    document.body.removeChild(downloadLink);
  };

  return (
    <div>
      <button className="text-white bg-slate-800/0 " onClick={handleDownload}>Resume</button>
    </div>
  );
};

export default FileDownloadButton;