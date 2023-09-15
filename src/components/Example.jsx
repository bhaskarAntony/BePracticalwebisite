import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import '../styles/example.css';

class PdfGenerator extends React.Component {
  pdfGenerate = () => {
    var date = document.getElementById("date").value;
    var target_t = document.getElementById("target_t").value;
    var target_m = document.getElementById("target_m").value;

    var sales_t = document.getElementById("sales_t").value;
    var sales_m = document.getElementById("sales_m").value;
    var table = document.getElementById("table");
    table.innerHTML = `
            <tr>
                <th>HEADERS</th>
                <th>TODAY</th>
                <th>MTD</th>
            </tr>

            <tr>
                <td>TARGET</td>
                <td>${target_t}</td>
                <td>${target_m}</td>
            </tr>

            <tr>
                <td>SALES</td>
                <td>${sales_t}</td>
                <td>${sales_m}</td>
            </tr>

            <tr>
                <td>%AGE</td>
                <td>${sales_t}</td>
                <td>${sales_m}</td>
            </tr>

            <tr>
                <td>BILLS</td>
                <td>${sales_t}</td>
                <td>${sales_m}</td>
            </tr>

            <tr>
                <td>PAIRS</td>
                <td>${sales_t}</td>
                <td>${sales_m}</td>
            </tr>
            <tr>
                <td>FF</td>
                <td>${sales_t}</td>
                <td>${sales_m}</td>
            </tr>

            <tr>
                <td>CON%</td>
                <td>${sales_t}</td>
                <td>${sales_m}</td>
            </tr>

            <tr>
                <td>ABV</td>
                <td>${sales_t}</td>
                <td>${sales_m}</td>
            </tr>

            <tr>
                <td>ASP</td>
                <td>${sales_t}</td>
                <td>${sales_m}</td>
            </tr>

            <tr>
                <td>UPT</td>
                <td>${sales_t}</td>
                <td>${sales_m}</td>
            </tr>
    `;
    console.log("date", date, "Today target = ", target_t, "Monthly target = ", target_m, "Today sales = ", sales_t, "Monthly sales = ", sales_m);
  };

  generatePDF = () => {
    const pdfContent = document.getElementById('pdf-content');

    html2canvas(pdfContent, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');

      const width = pdf.internal.pageSize.getWidth();
      const height = pdf.internal.pageSize.getHeight();

      pdf.addImage(imgData, 'PNG', 0, 0, width, height);
      pdf.save('my-pdf.pdf');
    });
  };

  render() {
    return (
      <div className="container p-3">
        <div className="heading text-center p-3">
          <span className="fs-2 text-center">Daily Sales Creator</span>
        </div>
        <div className="card border-0">
          <form>
            <ul className="list-group border-0">
              <li className="list-group-item header">
                <div className="row mt-3 text-center">
                  <div className="col-4">
                    <span className="fs-5">HEADERS</span>
                  </div>
                  <div className="col-4">
                    <span className="fs-5">TODAY</span>
                  </div>
                  <div className="col-4">
                    <span className="fs-5">MTD</span>
                  </div>
                </div>
              </li>
              <div className="list-group-item">
                <div className="row">
                  <div className="col-4">
                    <div className="form-group">
                      <span className="fs-4">Date</span>
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="form-group">
                      <input type="date" className="form-control" id="date" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Rest of your form code */}
            </ul>
            <div className="btns d-flex g-3">
              <button
                type="button"
                className="btn fs-2 mt-3 p-2 tex-white w-100 ok"
                onClick={this.pdfGenerate}
              >
                Create
              </button>
              <button
                type="reset"
                className="btn fs-2 mt-3 p-2 tex-white w-100 bg-danger-subtle"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>

        <div className="result" id="result">
          <div id="pdf-content">
            <table id="table" border="1" cellspacing="0"></table>
          </div>
          <button className="download" id="download-pdf" onClick={this.generatePDF}>
            Download
          </button>
        </div>
      </div>
    );
  }
}

export default PdfGenerator;
