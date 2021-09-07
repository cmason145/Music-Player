import React, { Component } from "react";
import { render } from "react-dom";
import Navbar from "./Navbar/Navbar";
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import resume from './resume.pdf';

export default class ResumePage extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navbar />
                <p>Resume Page!</p>
                <Document 
                    file = {resume}
                    onLoadError={console.error}>
                    <Page pageNumber={1} />
                </Document>
            </div>
        );
    }
}


