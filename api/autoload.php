<?php

/**
 * Minimal PSR-4 autoloader
 *
 * @param $class
 */
spl_autoload_register( function( $class ) {
  // LAZYFIX
  $class = str_replace( "App\\", "", $class );
  // Build file path
  $file = sprintf(
    "%s/%s.php",
    __DIR__ . "/src",
    str_replace( "\\", "/", $class )
  );
  require $file;
} );
