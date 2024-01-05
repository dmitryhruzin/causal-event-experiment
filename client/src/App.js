import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:8000');

export default function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState([]);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onFooEvent(value) {
      console.log('value', value)
      setFooEvents(previous => [...previous, value]);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('HospitalizationCreated', onFooEvent);
    socket.on('PatientCreated', onFooEvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('HospitalizationCreated', onFooEvent);
      socket.off('PatientCreated', onFooEvent);
    };
  }, []);

  return (
    <div className="App">
      <div>Connected: { isConnected.toString() }</div>
      <div>Events: { fooEvents.map(e => <div>{e.name}</div>) }</div>
    </div>
  );
}
