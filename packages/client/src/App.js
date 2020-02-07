import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import HttpClient from './utils/HttpClient';

function useCalendars() {
  const [calendars, setCalendar] = useState([]);

  useEffect(() => {
    HttpClient
      .get('/rest/calendars')
      .then((calendars) => {
        setCalendar(calendars);
      });
  }, []);

  return [calendars, setCalendar];
}

function App() {
  const [calendars] = useCalendars();

  return (
    <div className="App">
      <header className="App-header">
        <h3>calendars list</h3>
        <table>
          <tbody>
            {
              calendars.map((calendar) => {
                return (
                  <tr key={calendar.id}>
                    <td>{calendar.id}</td>
                    <td>{calendar.name}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
