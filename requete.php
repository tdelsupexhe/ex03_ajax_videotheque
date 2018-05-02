<?php
/**
 * Created by PhpStorm.
 * User: tdels
 * Date: 02-05-18
 * Time: 14:47
 */

include 'config\config.php';

$pdo = \App\config\Config::getPDO();

$getSearch = isset($_GET['getSearch']) ? $_GET['getSearch'] : null;
$getList = isset($_GET['getList']) ? $_GET['getList'] : null;

switch($getList){
    case 0:
        $query = "SELECT title FROM film WHERE title LIKE '%$getSearch%'";
        $result = $pdo->query($query);

        $tab = $result->fetchAll(PDO::FETCH_COLUMN);

        echo json_encode($tab);
        break;
    case 1:
        $query = "SELECT * FROM film WHERE title LIKE '$getSearch'";
        $result = $pdo->query($query);

        $tab = $result->fetch(PDO::FETCH_ASSOC);

        echo json_encode($tab);
        break;
    case 2:
        $query = "DELETE FROM film WHERE id = '$getSearch'";
        $result = $pdo->query($query);
        break;


}
