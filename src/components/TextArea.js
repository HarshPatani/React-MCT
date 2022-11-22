import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import "./TextArea.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import AbcIcon from "@mui/icons-material/Abc";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { CopyToClipboard } from "react-copy-to-clipboard";

const TextArea = ({
  setDarkMode,
  darkMode,
  toastifySuccess,
  toastifyError,
}) => {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);

  const textOnChange = (e) => {
    setText(e.target.value);
    setWordCount(() => {
      const array = text.split(" ");
      return array.filter((e) => e !== "").length;
    });
  };

  const covertUppercase = () => {
    setText((prevValue) => prevValue.toUpperCase());
    if (text === "") {
      toastifyError("ERROR: Text is Empty");
    } else {
      toastifySuccess("SUCCESS: Coverted to Uppercase");
    }
  };
  const covertLowercase = () => {
    setText((prevValue) => prevValue.toLowerCase());
    if (text === "") {
      toastifyError("ERROR: Text is Empty");
    } else {
      toastifySuccess("SUCCESS: Coverted to Lowercase");
    }
  };

  const clearText = () => {
    setText("");
    if (text === "") {
      toastifyError("ERROR: Text is Empty");
    } else {
      toastifySuccess("SUCCESS: Text Cleared");
    }
  };

  const copied = () => {
    if (text === "") {
      toastifyError("ERROR: Text is Empty");
    } else {
      toastifySuccess("SUCCESS: Copied Text");
    }
  };

  const removeExtraSpaces = (str) => {
    if (str === "") {
      toastifyError("ERROR: Text is Empty");
    } else {
      let newStr = str.replace(/\s+/g, " ").trim();
      setText(newStr);
      toastifySuccess("Extra spaces removed");
    }
  };

  return (
    <div className="main-body">
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: "22px", sm: "24px", md: "32px" },
          mt: 2,
          color: darkMode ? "white" : "black",
          textDecoration: "none",
        }}
      >
        Enter the text to analyze below
      </Typography>

      <textarea
        style={{
          border: darkMode ? "1px solid white" : "1px solid grey",
          marginTop: "0.8rem",
          marginBottom: "0.8rem",
          borderRadius: "5px",
          backgroundColor: darkMode ? "#808080" : "#fff",
          color: darkMode ? "white" : "black",
          width: "90%",
          padding: "1rem",
          fontSize: "18px",
        }}
        className="text-area"
        placeholder="Your text here..."
        value={text}
        onChange={textOnChange}
        id="text-area"
        name="text-area"
        rows="10"
      ></textarea>

      <Button
        sx={{
          m: 1,
        }}
        onClick={covertUppercase}
        variant="contained"
        color="primary"
        startIcon={<AbcIcon sx={{ fontSize: 40 }} />}
      >
        Convert to Uppercase
      </Button>

      <Button
        sx={{
          m: 1,
        }}
        onClick={covertLowercase}
        variant="contained"
        color="primary"
        startIcon={<AbcIcon sx={{ fontSize: 40 }} />}
      >
        Convert to Lowercase
      </Button>

      <Button
        sx={{
          m: 1,
        }}
        onClick={clearText}
        variant="contained"
        color="error"
        startIcon={<DeleteForeverIcon />}
      >
        Clear Text
      </Button>

      <CopyToClipboard text={text} onCopy={copied}>
        <Button
          sx={{
            m: 1,
          }}
          variant="contained"
          color="success"
          startIcon={<ContentCopyIcon />}
        >
          Copy Text
        </Button>
      </CopyToClipboard>

      <Button
        sx={{
          m: 1,
        }}
        variant="contained"
        color="success"
        startIcon={<DeleteIcon />}
        onClick={() => removeExtraSpaces(text)}
      >
        Remove Extra Spaces
      </Button>

      <Typography
        variant="h5"
        sx={{
          fontSize: { xs: "22px", sm: "24px", md: "28px" },
          mt: 2,
          color: darkMode ? "white" : "black",
        }}
      >
        Your Text summary: ⬇️
      </Typography>

      <Typography
        variant="body1"
        sx={{
          mt: 2,
          ml: 2,
          color: darkMode ? "white" : "black",
        }}
      >
        → {text.length === 0 ? 0 : wordCount} Words and {text.length}{" "}
        Characters.
      </Typography>

      <Typography
        variant="body1"
        sx={{
          mt: 2,
          ml: 2,
          color: darkMode ? "white" : "black",
        }}
      >
        → {text.length === 0 ? 0 : wordCount * 0.008} minutes to read.
      </Typography>

      <Typography
        variant="h5"
        sx={{
          fontSize: { xs: "22px", sm: "24px", md: "28px" },
          mt: 2,
          color: darkMode ? "white" : "black",
        }}
      >
        Text Preview: ⬇️
      </Typography>

      <Typography
        variant="h6"
        sx={{
          mt: 2,
          ml: 2,
          mb: 2,
          color: darkMode ? "white" : "black",
        }}
      >
        →{" "}
        {text === ""
          ? "Enter Text in the above textbox to Preview it here."
          : text}
      </Typography>
    </div>
  );
};

export default TextArea;
