import React from 'react';
import { Link } from 'react-router-dom';
import './Presentation.css'

const Presentation = () => {
  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = 'https://docs.google.com/presentation/d/1TUHMXSVjGNO5IiucsAx_0gIWzh_QL0et/export/pptx';
    downloadLink.download = 'presentation.pptx';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="presentation-container">
      <iframe
        src="https://view.officeapps.live.com/op/embed.aspx?src=https://docs.google.com/presentation/d/1TUHMXSVjGNO5IiucsAx_0gIWzh_QL0et/export/pptx"
        width="100%"
        height="600px"
        frameBorder="0"
        title="Presentation"
      />
      <a href="https://docs.google.com/presentation/d/1TUHMXSVjGNO5IiucsAx_0gIWzh_QL0et/export/pdf" target="_blank" rel="noreferrer"
      className='present'>
        <Link to='/'><button className='btn btn-primary' >Go Back</button></Link>
        <button className='btn btn-primary' onClick={handleDownload}>Download</button>        
        <Link to='https://www.cellustechindia.com/led-leaflet-new.pdf'><button className='btn btn-primary'>View Brochure</button></Link>
      </a>
      
    </div>
  );
};

export default Presentation;