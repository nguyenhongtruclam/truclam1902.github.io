<?php 
$conn = mysqli_connect('localhost','root','','music');

$sql = mysqli_query($conn, "SELECT tbl_song.id, sing.name_singer,tbl_song.id_singer,  tbl_song.name_song,tbl_song.id_playlist, tbl_song.audio, tbl_song.image FROM tbl_song
JOIN tbl_singer sing ON tbl_song.id_singer = sing.singer_id WHERE tbl_song.id_singer = 1");

$result = mysqli_fetch_all($sql, MYSQLI_ASSOC);


exit(json_encode($result));

function insert(){
    if(isset($_POST["id_singer"])){
        $form_data =array(
            ':id_singer' => $_POST["id_singer"],
            ':name_song' => $_POST["name_song"],
            ':id_playlist' => $_POST["id_playlist"],
            ':audio' => $_POST["audio"],
            ':image' => $_["image"]
        );
        $query = "
         INSERT INTO tbl_song(id_singer,name_song,id_playlist,audio) VALUES (:id_singer,:name_song,:id_playlist,:audio, :image)";
        $statement = $this->connect->prepare($query);
        if($statement->execute($form_data))
        {
            $data[] = array(
            'success' => '1'
            );
        }
        else
        {
            $data[] = array(
            'success' => '0'
            );
        }
        }
        else
        {
        $data[] = array(
            'success' => '0'
        );
        }
        return $data;
}
?>