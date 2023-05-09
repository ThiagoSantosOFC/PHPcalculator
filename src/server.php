<?php

// create socket
$socket = socket_create(AF_INET, SOCK_STREAM, 0);

// bind socket to localhost on port 8080
if (!socket_bind($socket, 'localhost', 8080)) {
    die('Unable to bind socket: ' . socket_strerror(socket_last_error()));
}

// listen for connections
if (!socket_listen($socket)) {
    die('Unable to listen on socket: ' . socket_strerror(socket_last_error()));
}

// accept a connection
$client = socket_accept($socket);

// read data from client
$data = socket_read($client, 1024);

// close socket
socket_close($client);
socket_close($socket);

// evaluate expression and send result back to client
$result = eval('return ' . $data . ';');
echo $result;
