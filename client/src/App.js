import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:8000');

export default function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [events, setEvents] = useState([]);
  const tempEvents = [];

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function handleHospitalizationCreatedEvent(value) {
      console.log('value', value)
      const patientCreatedEvent = tempEvents.find((e) => e.title === 'PatientCreated')
      if (patientCreatedEvent) {
        setEvents(previous => [...previous, patientCreatedEvent.value, value]);
        tempEvents.pop()
      } else {
        tempEvents.push({ title: 'HospitalizationCreated', value })
      }
    }

    function handlePatientCreatedEvent(value) {
      console.log('value', value)
      const hospitalizationCreatedEvent = tempEvents.find((e) => e.title === 'HospitalizationCreated')
      if (hospitalizationCreatedEvent) {
        setEvents(previous => [...previous, value, hospitalizationCreatedEvent.value]);
        tempEvents.pop()
      } else {
        tempEvents.push({ title: 'PatientCreated', value })
      }
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('HospitalizationCreated', handleHospitalizationCreatedEvent);
    socket.on('PatientCreated', handlePatientCreatedEvent);
    socket.on('DoctorCreated', handleEvent);
    socket.on('DoctorProfileCreated', handleEvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('HospitalizationCreated', handleHospitalizationCreatedEvent);
      socket.off('PatientCreated', handlePatientCreatedEvent);
      socket.off('DoctorCreated', handleEvent);
      socket.off('DoctorProfileCreated', handleEvent);
    };
  }, []);

  return (
    <div className="App">
      <div>Connected: { isConnected.toString() }</div>
      <div>Events: { events.map(e => <div>{e.name}</div>) }</div>
    </div>
  );
}
