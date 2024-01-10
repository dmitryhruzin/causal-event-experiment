import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:8000');

export default function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function handleEvent(value) {
      console.log('value', value)
      if (value.name) {
        setEvents(previous => [...previous, value]);
      } else {
        setEvents(previous => [...previous, ...Object.values(value)]);
      }
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('HospitalizationCreated', handleEvent);
    socket.on('PatientCreated', handleEvent);
    socket.on('DoctorCreated', handleEvent);
    socket.on('DoctorProfileCreated', handleEvent);
    socket.on('PatientAndHospitalizationCreated', handleEvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('HospitalizationCreated', handleEvent);
      socket.off('PatientCreated', handleEvent);
      socket.off('DoctorCreated', handleEvent);
      socket.off('DoctorProfileCreated', handleEvent);
      socket.off('PatientAndHospitalizationCreated', handleEvent);
    };
  }, []);

  return (
    <div className="App">
      <div>Connected: { isConnected.toString() }</div>
      <div>Events: { events.map(e => <div>{e.name}</div>) }</div>
    </div>
  );
}
