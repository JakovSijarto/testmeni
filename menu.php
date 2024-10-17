<?php
$menuItems = json_decode(file_get_contents('php://input'), true);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $price = $_POST['price'];
    $description = $_POST['description'];

    $menuItems[] = array('name' => $name, 'price' => $price, 'description' => $description);
    file_put_contents('menu.json', json_encode($menuItems));
}

echo json_encode($menuItems);
?>
