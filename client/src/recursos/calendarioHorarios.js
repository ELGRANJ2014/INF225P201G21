import React, { Component } from 'react';
import "./calendarioHorarios.css"

class CalendarioHorarios extends Component {
  constructor() {
    super();
    this.state = {
      fechaSeleccionada: "",
    };
  }

  mostrarHorarios = () => {
    this.setState({
      fechaSeleccionada: document.getElementById("fechaSeleccionada").value,
    });
  };

  render() {
    const { fechaSeleccionada } = this.state;

    return (
      <div>
        <h1>Calendario de Horarios</h1>

        <div className="calendar">
          {/* Calendario (puedes reemplazarlo con tu calendario preferido) */}
          <input
            type="date"
            id="fechaSeleccionada"
            onChange={this.mostrarHorarios}
          />
        </div>

        <div id="horarios" style={{ display: fechaSeleccionada ? 'block' : 'none' }}>
          <h2>Resonancia:</h2>
          <table border="1">
            <thead>
              <tr>
                <th>Hora de Inicio</th>
                <th>Hora de Término</th>
                <th>Hora Agendada</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>08:30 AM</td>
                <td>10:00 AM</td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td>10:00 AM</td>
                <td>11:30 AM</td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td>14:30 PM</td>
                <td>15:30 PM</td>
                <td> </td>
                <td> </td>
              </tr>
            </tbody>
          </table>

          <h3>Scanner:</h3>
          <table border="1">
            <thead>
              <tr>
                <th>Hora de Inicio</th>
                <th>Hora de Término</th>
                <th>Hora Agendada</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>08:30 AM</td>
                <td>09:30 AM</td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td>09:30 AM</td>
                <td>10:30 AM</td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td>10:30 AM</td>
                <td>11:30 AM</td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
            </tbody>
          </table>

          <h3>Radiografía:</h3>
          <table border="1">
            <thead>
              <tr>
                <th>Hora de Inicio</th>
                <th>Hora de Término</th>
                <th>Hora Agendada</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>08:30 AM</td>
                <td>09:00 AM</td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td>09:00 AM</td>
                <td>09:30 AM</td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td>09:30 AM</td>
                <td>10:00 AM</td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td>10:00 AM</td>
                <td>10:30 AM</td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td>10:30 AM</td>
                <td>11:00 AM</td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td>11:00 AM</td>
                <td>11:30 AM</td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td>11:30 AM</td>
                <td>12:00 PM</td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td>12:00 PM</td>
                <td>12:30 PM</td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default CalendarioHorarios;