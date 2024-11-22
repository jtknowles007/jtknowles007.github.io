<?php
// Directory containing images
$imagesDir = 'img/backgrounds';  // Adjust 'images' to your directory name

// Read files in the directory
$files = scandir($imagesDir);

// Filter for image files (jpg, jpeg, png, gif)
$imageFiles = array_filter($files, function($file) use ($imagesDir) {
    return preg_match('/\.(jpg|jpeg|png|gif)$/i', $file) && is_file($imagesDir . '/' . $file);
});

// Output JSON-encoded array of image file names
header('Content-Type: application/json');
echo json_encode(array_values($imageFiles));
?>

