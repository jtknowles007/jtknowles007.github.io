    //Function to load random background image
    async function loadRandomBackground() {
            try {
                // Fetch image list from the PHP script
                const response = await fetch('images.php');
                const images = await response.json();

                // Select a random image
                if (images.length > 0) {
                    const randomImage = images[Math.floor(Math.random() * images.length)];
                    const imagePath = `img/backgrounds/${randomImage}`;

                    // Preload the image
                    const img = new Image();
                    img.src = imagePath;
                    img.onload = () => {
                        // Set as background once the image is fully loaded
                        document.body.style.backgroundImage = `url('${imagePath}')`;
                    };
                }
            } catch (error) {
                console.error('Failed to load background image:', error);
            }
        }


    // Function to update date and time
         function updateDateTime() {
            const now = new Date();

            // Manually format the date and time
            const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            const dayOfWeek = dayNames[now.getDay()];
            const month = monthNames[now.getMonth()];
            const day = now.getDate();

            // Get the hours and minutes
            let hours = now.getHours();
            const minutes = now.getMinutes();
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12; // Convert to 12-hour format
            hours = hours ? hours : 12; // The hour '0' should be '12'
            const formattedTime = `${hours}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;

            document.getElementById('time').innerHTML = `${formattedTime}`;   
            document.getElementById('date').innerHTML = `${dayOfWeek} ${month} ${day}`;   
         }

// Call funtion to display anew image when page loads
window.onload = loadRandomBackground;

// Call the function every second
setInterval(updateDateTime, 1000);
updateDateTime(); // Initial call to set the time immediatel
  
