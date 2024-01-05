import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import './App.css';

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
      setFooEvents(previous => [...previous, value]);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('foo', onFooEvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('foo', onFooEvent);
    };
  }, []);

  console.log('isConnected', isConnected)
  console.log('fooEvents', fooEvents)

  return (
    <div className="App">
      <div>Connected: { isConnected.toString() }</div>
      <div>Events: { fooEvents }</div>
    </div>
  );
}
