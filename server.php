<?php
require('phpQuery.php');
header("Access-Control-Allow-Origin: *");

$q = $_GET['q'];

$url = 'https://school4seo.com/google-analytics-certification-answersheet/';
$query = strtolower(preg_replace("/[^A-Za-z0-9]/", '-', $q));
$html = file_get_contents($url . $query);

$doc = phpQuery::newDocument($html);
$resp = '';

foreach ($doc->find('ul li strong') as $li) {
    $li = pq($li);
    $resp = $li->text();
}

echo ($resp == '') ? '-' : preg_replace('/[^ \w]+/', '', $resp);
?>
