import React, { Component, useState } from "react";
import { render } from "react-dom";
import Navbar from "./Navbar/Navbar";
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import resume from './resume.pdf';

function removeTextLayerOffset() {
    const textLayers = document.querySelectorAll(".react-pdf__Page__textContent");
      textLayers.forEach(layer => {
        const { style } = layer;
        style.top = "0";
        style.left = "0";
        style.transform = "";
    });
  }
  

class ResumePage extends Component{
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                {/* <Navbar /> */}
                {/* <p>Resume Page!</p> */}
                <Document 
                    file = {resume}
                    onLoadError={console.error}>
                    <Page pageNumber={1} onLoadSuccess={removeTextLayerOffset} />
                </Document>
            </div>
        );
    }
}

export default ResumePage;


