import React, { useState, useEffect } from "react";
import DataTable from "./DataTables";
import _ from "lodash";
import Button from "@mui/material/Button";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import SyncIcon from "@mui/icons-material/Sync";
import Chip from "@mui/material/Chip";
import DoneIcon from "@mui/icons-material/Done";
import Typography from "@mui/material/Typography";
import axios from "axios";
// Allowed extensions for input file
const allowedExtensions = ["csv"];

const FileUpload = () => {
  // This state will store the parsed data
  const [data, setData] = useState([]);
  const [columnData, setColumnData] = useState([]);
  const [parseComplete, setParseComplete] = useState(false);
  const [fileName, setFileName] = useState("");
  const [dataFromAPI, setDataFromAPI] = useState([]);

  // It state will contain the error when
  // correct file extension is not used
  const [error, setError] = useState("");

  // It will store the file uploaded by the user
  const [file, setFile] = useState("");

  useEffect(() => {
    console.log("this is useEffect ");
    if (!_.isEmpty(data)) {
      setParseComplete(true);
    }
  }, [data]);

  // This function will be called when
  // the file input changes
  const handleFileChange = async (e) => {
    setError("");

    // Check if user has entered the file
    if (e.target.files.length) {
      const inputFile = e.target.files[0];
      const formData = new FormData();
      formData.append("watchFile", inputFile);
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:8080/upload",
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        });
      } catch (error) {
        console.log(error);
      }

      setFileName(e.target.files[0].name);
      // Check the file extensions, if it not
      // included in the allowed extensions
      // we show the error
      const fileExtension = inputFile?.type.split("/")[1];
      if (!allowedExtensions.includes(fileExtension)) {
        setError("Please input a csv file");
        return;
      }

      // If input type is correct set the state
      setFile(inputFile);
    }
  };
  const handleParse = () => {
    console.log("Handeling parses");
    axios
      .get("http://localhost:8000/watch-dog-scan-report")
      .then((response) => {
        setDataFromAPI(response.data);
      });

    dataFromAPI.forEach(function (element) {
      element.id = Math.floor(Math.random() * 100);
    });
    setData([...dataFromAPI]);
    console.log("Data FROM API : ", dataFromAPI);
    console.log("Data : ", data);
  };

  return (
    <div className={parseComplete ? "data-table" : "file-upload"}>
      {parseComplete ? (
        <div>
          <DataTable columnData={columnData} data={data} />
        </div>
      ) : (
        <div>
          {" "}
          <label htmlFor="csvInput" style={{ display: "block" }}>
            <Typography variant="h4" gutterBottom component="div">
              Solidity file for Vulnerability-Scan
            </Typography>
          </label>
          <Button
            variant="contained"
            component="label"
            startIcon={<FileUploadIcon />}
          >
            UPLOAD SOLIDITY
            <input
              hidden
              onChange={handleFileChange}
              id="csvInput"
              type="File"
            />
          </Button>
          <br /> <br />
          {_.isEmpty(fileName) ? (
            ""
          ) : (
            <Chip
              label={fileName}
              icon={<DoneIcon />}
              variant="outlined"
              sx={{
                color: "darkblue",
                backgroundColor: "lightgray",
              }}
            />
          )}
          <br /> <br />
          <div>
            <Button
              variant="contained"
              component="label"
              startIcon={<SyncIcon />}
              onClick={handleParse}
            >
              WatchDog Scan
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
