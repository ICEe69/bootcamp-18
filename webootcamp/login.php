<?php
session_start();
include('database.php'); // Koneksi ke database

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);
    
    // Query untuk cek user
    $query = "SELECT * FROM users WHERE username='$username' AND password='$password'";
    $result = mysqli_query($conn, $query);

    if (mysqli_num_rows($result) == 1) {
        // Jika login berhasil
        $_SESSION['username'] = $username;
        header('Location: index.html'); // Redirect ke halaman utama
        exit();
    } else {
        // Jika login gagal
        echo "Username atau password salah!";
    }
}
?>
