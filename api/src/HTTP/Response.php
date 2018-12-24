<?php

namespace App\HTTP;

/**
 * HTTP Response Class
 */
class Response
{
  // HTTP status
  protected $status = 200;

  // HTTP headers
  protected $headers = [];

  // HTTP body
  protected $body;

  /**
   * Constructor
   *
   * @param $body
   * @param integer $status
   * @param array $headers
   */
  public function __construct( $body, $status = 200, $headers = [] )
  {
    $this->body = $body;
    $this->status = $status;
    $this->headers = array_merge(
      [
        'Content-Type' => "application/json;charset=utf-8",
        'Cache-Control' => "no-cache",
        // This part to avoid preflight conficts between API and Front End JS
        'Access-Control-Allow-Origin' => "*",
        'Access-Control-Allow-Methods' => "GET,POST",
        'Access-Control-Allow-Headers' => "Origin,X-Requested-With,Content-Type,Accept,Authorization"
      ],
      $headers
    );
;
  }

  /**
   * Print JSON response
   */
  public function emit()
  {
    header( "HTTP/1.1 {$this->status}", true, $this->status );
    foreach( $this->headers as $header => $value ) {
      header( "{$header}: {$value}" );
    }

    print json_encode( $this->body );
    exit();
  }
}
