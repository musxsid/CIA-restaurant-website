<?php
// server.php

// Database connection settings
$host = 'localhost';
$dbname = 'hotel website'; // Your database name
$password = 'Password'; // Your database password

// Create a connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$phoneNo = $_POST['Phone Number'];
$password = $_POST['Password'];

// Prepare a SQL statement
$stmt = $conn->prepare("SELECT * FROM login_data WHERE phoneNo = ?");
$stmt->bind_param("s", $phoneNo);
$stmt->execute();
$result = $stmt->get_result();

// Check if the phone number exists
if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();
    // Validate password
    if ($user['Password'] === $password) {
        echo json_encode(["status" => "success", "message" => "Login successful!"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Incorrect password."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Phone number not found."]);
}

// Close connection
$stmt->close();
$conn->close();
?>
