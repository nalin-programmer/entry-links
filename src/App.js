import logo from './logo.svg';
import Button from '@mui/material/Button';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import CreateIcon from '@mui/icons-material/Create';
import './style.scss';

function App() {
  return (
    <div className="App">
      <h3 >R. K. Trading</h3>

      <p style={{
        color: "#ffffff"
      }}>
        Glowroad: {"   "}
        <Button variant="outlined" startIcon={<CreateIcon />} style={{
          backgroundColor: "#ffffff",
          marginRight: "10px",
          color: "#800080"
        }}
          href="https://docs.google.com/forms/d/e/1FAIpQLSdeSL-e0WkosQo2GSwFZodoN5I2hN5OUXsd4M7zZe8Y6gA9OA/viewform?pli=1"
          target="_blank"
        >
          Form
        </Button>
        <Button variant="contained" color="success" endIcon={<InsertDriveFileIcon />}>
          Excel
        </Button>
      </p>



      <p style={{
        color: "#ffffff"
      }}>
        City Mall: {"    "}
        <Button variant="outlined" startIcon={<CreateIcon />} style={{
          backgroundColor: "#ffffff",
          marginRight: "10px",
          color: "#800080",
          marginLeft: "5px"
        }}
          href="https://docs.google.com/forms/d/e/1FAIpQLSfqwTVcPrqp2OOIzwuOUeQ-GLxdUIbM1FADVoMdrJW8arGfEA/viewform"
          target="_blank">
          Form
        </Button>
        <Button variant="contained" color="success" endIcon={<InsertDriveFileIcon />}>
          Excel
        </Button>
      </p>

      <h3 >Shreeji Enterprises</h3>
      <p style={{
        color: "#ffffff"
      }}>
        Flipkart: {"   "}
        <Button variant="outlined" startIcon={<CreateIcon />} style={{
          backgroundColor: "#ffffff",
          marginRight: "10px",
          color: "#800080",
          marginLeft: "15px"
        }}
          href="https://docs.google.com/forms/d/e/1FAIpQLSfiM13GMmMEVecq8Xxlh7TOpbZbFVMOo3U12ACt_Ah5uKifWw/viewform"
          target="_blank">
          Form
        </Button>
        <Button variant="contained" color="success" endIcon={<InsertDriveFileIcon />}>
          Excel
        </Button>
      </p>

      <p style={{
        color: "#ffffff"
      }}>
        Glowroad: {"   "}
        <Button variant="outlined" startIcon={<CreateIcon />} style={{
          backgroundColor: "#ffffff",
          marginRight: "10px",
          color: "#800080"
        }}
          href="https://docs.google.com/forms/d/e/1FAIpQLSekuP_rUJpN403YQ4b58olxqQwxSb6TuzXlI83xdsB2OCj8LQ/viewform"
          target="_blank">
          Form
        </Button>
        <Button variant="contained" color="success" endIcon={<InsertDriveFileIcon />}>
          Excel
        </Button>
      </p>

      <p style={{
        color: "#ffffff"
      }}>
        Dhani: {"   "}
        <Button variant="outlined" startIcon={<CreateIcon />} style={{
          backgroundColor: "#ffffff",
          marginRight: "10px",
          color: "#800080",
          marginLeft: "25px"
        }}
          href="https://docs.google.com/forms/d/e/1FAIpQLSdUxRDoTWYFhcH-yvb2STxUp8tgg5oEiL--b4RgMr2xRtjtuA/viewform"
          target="_blank">
          Form
        </Button>
        <Button variant="contained" color="success" endIcon={<InsertDriveFileIcon />}>
          Excel
        </Button>
      </p>

      <p style={{
        color: "#ffffff"
      }}>
        City Mall: {"    "}
        <Button variant="outlined" startIcon={<CreateIcon />} style={{
          backgroundColor: "#ffffff",
          marginRight: "10px",
          color: "#800080",
          marginLeft: "5px"
        }}
          href="https://docs.google.com/forms/d/e/1FAIpQLSecBcUec53IMP-Y-DlzkzhH0nIGSzN785Ak6rDusEsSELsxEg/viewform"
          target="_blank">
          Form
        </Button>
        <Button variant="contained" color="success" endIcon={<InsertDriveFileIcon />}>
          Excel
        </Button>
      </p>

      <h3 >Swastik Corporation</h3>


      <p style={{
        color: "#ffffff"
      }}>
        Glowroad: {"   "}
        <Button variant="outlined" startIcon={<CreateIcon />} style={{
          backgroundColor: "#ffffff",
          marginRight: "10px",
          color: "#800080"
        }}
          href="https://docs.google.com/forms/d/e/1FAIpQLSdrakilzvDa4yhm9v6AzHcSpJ8taqYkOdVTP-w1TQAZx2X_4w/viewform"
          target="_blank">
          Form
        </Button>
        <Button variant="contained" color="success" endIcon={<InsertDriveFileIcon />}>
          Excel
        </Button>
      </p>




    </div>
  );
}

export default App;
