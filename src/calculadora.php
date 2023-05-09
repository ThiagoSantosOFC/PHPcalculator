
<?php

$host = 'localhost'; // endereço do servidor
$port = 8081; // porta para comunicação

// cria um socket TCP/IP
$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP) or die("Não foi possível criar o socket\n");

// conecta ao servidor
$result = socket_connect($socket, $host, $port) or die("Não foi possível conectar ao servidor\n");

// lê a string de cálculo do cliente
$input = socket_read($socket, 1024) or die("Não foi possível ler os dados\n");

// realiza a operação matemática
$resultado = eval("return $input;");

// envia o resultado de volta para o cliente
socket_write($socket, $resultado, strlen($resultado)) or die("Não foi possível enviar dados ao servidor\n");

// fecha a conexão
socket_close($socket);

