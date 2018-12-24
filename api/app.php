<?php

require __DIR__ . "/config.php";
require __DIR__ . "/autoload.php";

use Exception;
use App\HTTP\Response;

try {
  $response = new Response( [
    'message' => "Hallo Welt! Wie geht's?"
  ] );
} catch( Exception $error ) {
  $response = new Response( [
    'error' => $error->getMessage()
  ] );
}

$response->emit();
