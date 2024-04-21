import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./TuComponente.css"

const TuComponente = () => {
  const [form, setform] = useState({
    RUT: '',
    Password: '',
  });

  const navigate = useNavigate();
  function updateForm(value) {
      return setform((prev) => {
        return { ...prev, ...value };
      });
    }

  async function onSubmit(e) {
      e.preventDefault();

      const nuevoPaciente = { ...form};

      await fetch("http://localhost:5000", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(nuevoPaciente)
      })
      .catch(error => {
          window.alert(error);
          return;
      });

      setform({ RUT: "", contrasena: ""});
      navigate("/");
  }
  return (
    <div className="form-container">
      <div>
        <h3>SIGN UP</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="RUT">RUT</label>
            <input
              type="text"
              name="RUT"
              className="form-control"
              value={form.RUT}
              onChange={(e) => updateForm({ RUT: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Contraseña">Password</label>
            <input
              type="text"
              name="Contraseña"
              className="form-control"
              value={form.contrasena}
              onChange={(e) => updateForm({ contrasena: e.target.value })}
            />
          </div>
          <div className="form-group button-container">
            <input
              type="submit"
              value="sign up"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TuComponente;