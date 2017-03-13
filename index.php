<?php
$development_mode = true; // change this before deploying
$version_number = '1.0'; // change this before deploying
if($development_mode){
    $version = microtime(true);
}
else{
    $version = $version_number;
}
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Testing Gulp</title>
    <link rel="stylesheet" href="css/main.css?ver=<?php echo $version ?>">
</head>
<body>
<h1>Hello</h1>
<div id="root"></div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react-dom.min.js"></script>
<script src="js/all.js?ver=<?php echo $version ?>"></script>
</body>
</html>