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
          href={process.env.REACT_APP_RK_GLOWROAD}
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
          href={process.env.REACT_APP_RK_CITYMALL}
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
          href={process.env.REACT_APP_SHREEJI_FLIPKART}
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
          href={process.env.REACT_APP_SHREEJI_GLOWROAD}
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
          href={process.env.REACT_APP_SHREEJI_DHANI}
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
          href={process.env.REACT_APP_SHREEJI_CITYMALL}
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
          href={process.env.REACT_APP_SWASTIK_GLOWROAD}
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
