<?php
/**
 * Created by PhpStorm.
 * User: tdels
 * Date: 02-05-18
 * Time: 14:47
 */

include 'config\config.php';

//connexion à la base de donnée
$pdo = \App\config\Config::getPDO();

//recuperation de l'id du film et de l'action à executer
$getSearch = isset($_GET['getSearch']) ? $_GET['getSearch'] : null;
$getList = isset($_GET['getList']) ? $_GET['getList'] : null;

// recuperation des valeurs des champs du formulaire
$getId = isset($_GET['getId']) ? $_GET['getId'] : null;
$getTitle = isset($_GET['getTitle']) ? $_GET['getTitle'] : null;
$getDescription = isset($_GET['getDescription']) ? $_GET['getDescription'] : null;
$getReleaseYear = isset($_GET['getReleaseYear']) ? $_GET['getReleaseYear'] : null;
$getLanguageId = isset($_GET['getLanguageId']) ? $_GET['getLanguageId'] : null;
$getOriginalLanguageId = isset($_GET['getOriginalLanguageId']) ? $_GET['getOriginalLanguageId'] : null;
$getRentalDuration = isset($_GET['getRentalDuration']) ? $_GET['getRentalDuration'] : null;
$getRentalRate = isset($_GET['getRentalRate']) ? $_GET['getRentalRate'] : null;
$getLength = isset($_GET['getLength']) ? $_GET['getLength'] : null;
$getReplacementCost = isset($_GET['getReplacementCost']) ? $_GET['getReplacementCost'] : null;
$getRating = isset($_GET['getRating']) ? $_GET['getRating'] : null;
$getSpecialFeatures = isset($_GET['getSpecialFeatures']) ? $_GET['getSpecialFeatures'] : null;

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
        $query = "DELETE FROM film WHERE film_id = '$getId'";
        $result = $pdo->query($query);
        break;
    case 3:
        $query = "UPDATE film SET
                  title = '$getTitle',
                  description = '$getDescription',
                  release_year = '$getReleaseYear',
                  language_id = '$getLanguageId',
                  original_language_id = '$getOriginalLanguageId',
                  rental_duration = '$getRentalDuration',
                  rental_rate = '$getRentalRate',
                  length = '$getLength',
                  replacement_cost = '$getReplacementCost',
                  rating = '$getRating',
                  special_features = '$getSpecialFeatures'
                  WHERE film_id = '$getId'";
        $result = $pdo->query($query);
        break;


}
