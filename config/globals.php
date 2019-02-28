<?php 
if (!function_exists('getMainUrl')) {
    function getMainUrl($file=true) {
        $protocol = isset($_SERVER['HTTPS']) ? "https" : "http";
        $currentPath = $_SERVER['PHP_SELF'];

        //give something like: /main_app/index.php
        $pathInfo = pathinfo($currentPath);

        $hostName = $_SERVER['HTTP_HOST'];
        //gives something like: localhost
        $appArray = explode('/', $pathInfo['dirname'], -1); //remove bl
        $appPath = implode('/', $appArray); //join
        //return $protocol."://".$hostName.$appPath."/index.php";
        $retVal = $protocol . "://" . $hostName . $appPath . "/";
        return ($file === false) ? ($retVal) : ($retVal . "index.php");
    }
}