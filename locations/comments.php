<?php
    $page = "Comments";
	include("../assets/includes/header.php");
    include("../../../dbcon.php");

if(!empty($_GET["from"]) && !empty($_GET["message"])) {
	$from = $_GET["from"];
	$message = $_GET["message"];
	$email = $_GET["email"];


	$sql = "INSERT INTO `comments` (`from`, `message`, `date`, `email`) VALUES (?, ?, now(), ?);";
	$stmt = $conn->prepare($sql);
	$stmt->bind_param("sss", $from, $message, $email);
	$stmt->execute();
}
?>
<!-- html -->
		<h1>Leave Your Feedback Here!</h1>
		<div id="comments">
			<ul>
			<?php
				//will use for output
				$sql = "SELECT * FROM `comments` ORDER BY 'date' LIMIT 50";
				$result = $conn->query($sql);

				if ($result->num_rows > 0) {
				// output data of each row
				while($row = $result->fetch_assoc()) {
					echo '<div class="comments"><p>' . $row['from'] . ' | ' . $row['message'] . ' @ ' . $row['date'] . '</p></div>';
				}
				} else {
				echo "0 results";
				}
				$conn->close();
			?>
			</ul>
		</div>
		<hr/>
		<h3>Add a comment</h3>
		<form action="comments.php" method="get">		
			Name: <input type="text" id="name" name="from" /><br>
			Email: <input type="text" id="email" name="email" /><br>
			<input type="text" id="comment" name="message" resizeable="true" placeholder="Type your comment here:"/><br>
			<input type="submit" value="Add to the List"/>
		</form>
	</body>
</html>