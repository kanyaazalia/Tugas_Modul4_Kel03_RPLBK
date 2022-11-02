import React from "react";

function NewHook() {
  const [state, setState] = React.useState({
    nama: "",
    umur: "",
    angkatan: "",
  });
  const namaRef = React.useRef();
  const umurRef = React.useRef();
  const angkatanRef = React.useRef();

  function handleCheck() {
    if (state.nama === "") {
      alert("Nama harus diisi");
      namaRef.current.focus();
    } else if (state.umur === "") {
      alert("Umur harus diisi");
      umurRef.current.focus();
    } else if (state.angkatan === "") {
      alert("Angkatan harus diisi");
      angkatanRef.current.focus();
    } else {
      setState({
        ...state,
        ["nama"]: "",
        ["umur"]: "",
        ["angkatan"]: "",
      });
      alert("Semua Telah Terisi!");
    }
  }

  return (
    <div
      style={{
        flex: 1,
        flexDirection: "row",
      }}
    >
      <h1>Use Ref</h1>
      <input
        type="text"
        style={{ width: 300 }}
        ref={namaRef}
        value={state.nama}
        placeholder="Nama"
        onChange={(value) =>
          setState({ ...state, ["nama"]: value.target.value })
        }
      />
      <br />
      <input
        type="text"
        style={{ width: 300 }}
        ref={umurRef}
        value={state.umur}
        placeholder="Umur"
        onChange={(value) =>
          setState({ ...state, ["umur"]: value.target.value })
        }
      />
      <br />
      <input
        type="text"
        style={{ width: 300 }}
        ref={angkatanRef}
        value={state.angkatan}
        placeholder="Angkatan"
        onChange={(value) =>
          setState({ ...state, ["angkatan"]: value.target.value })
        }
      />
      <br />
      <input type="button" value="Check" onClick={() => handleCheck()} />
    </div>
  );
}

export default NewHook;