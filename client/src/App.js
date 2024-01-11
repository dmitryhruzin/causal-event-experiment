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

    function handleDoctorProfileCreatedEvent(value) {
      console.log('value', value)
      const doctorCreatedEvent = tempEvents.find((e) => e.title === 'DoctorCreated')
      if (doctorCreatedEvent) {
        setEvents(previous => [...previous, doctorCreatedEvent.value, value]);
        tempEvents.pop()
      } else {
        tempEvents.push({ title: 'DoctorProfileCreated', value })
      }
    }

    function handleDoctorCreatedEvent(value) {
      console.log('value', value)
      const doctorProfileCreatedEvent = tempEvents.find((e) => e.title === 'DoctorProfileCreated')
      if (doctorProfileCreatedEvent) {
        setEvents(previous => [...previous, value, doctorProfileCreatedEvent.value]);
        tempEvents.pop()
      } else {
        tempEvents.push({ title: 'DoctorCreated', value })
      }
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('HospitalizationCreated', handleHospitalizationCreatedEvent);
    socket.on('PatientCreated', handlePatientCreatedEvent);
    socket.on('DoctorCreated', handleDoctorCreatedEvent);
    socket.on('DoctorProfileCreated', handleDoctorProfileCreatedEvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('HospitalizationCreated', handleHospitalizationCreatedEvent);
      socket.off('PatientCreated', handlePatientCreatedEvent);
      socket.off('DoctorCreated', handleDoctorCreatedEvent);
      socket.off('DoctorProfileCreated', handleDoctorProfileCreatedEvent);
    };
  }, []);

  return (
    <div className="App">
      <div>Connected: { isConnected.toString() }</div>
      <div>Events: { events.map(e => <div>{e.name}</div>) }</div>
    </div>
  );
}
