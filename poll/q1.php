<?php

$dataModel = array(
    "a1" => array() ,
    "a2" => array() ,
    "a3" => array() ,
    "a4" => array()
);
$data = json_encode($dataModel);
$fp = "votes.json";
if (!file_exists($fp) || filesize($fp) == 0) wv($data);

function rv()
{
    $fp = "votes.json";
    $file = fopen($fp, "r");
    $votes = fread($file, filesize($fp));
    fclose($file);

    //echo $data;
    return $votes;
}

function wv($data)
{
    //echo $data;
    $fp = "votes.json";
    $file = fopen($fp, "w");
    fwrite($file, $data);
    fclose($file);
}

function aaa($name, $ans)
{
    $votes = json_decode(rv() , true);
    //echo var_dump(array_keys($votes))."<br>";
    if (!in_array($ans, array_keys($votes)))
    {
        $e = json_encode(array(
            "Error" => "Option '" . $ans . "' not found !"
        ));
        echo $e;
        return;
    }


foreach($votes as $an => $us ) {
	$uns = array();
	foreach($us as $u) {
		if ( $u == $name )
			continue;
		array_push($uns, $u);
	}
	$votes[$an] = $uns;
}

    array_push($votes[$ans], $name);
    wv(json_encode($votes));

    $response = array(
        "a1" => count($votes["a1"]) ,
        "a2" => count($votes["a2"]) ,
        "a3" => count($votes["a3"]) ,
        "a4" => count($votes["a4"])
    );

    echo json_encode($response);
}

$name = $_GET["name"];
$ans = $_GET["ans"];

aaa($name, $ans);

?>
