<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather App</title>
    <link rel="stylesheet" href="SamipMaharjan_2329533.css">

</head>
<body>
    <?php include("server.php"); ?>
    
    <div class="App">
        <div class="top-section"> 

            <div class="date">
                <span id="display-date"></span>
            </div>
            <!-- date -->
            
            <div class="search-box">
                <input class="search-txt" type="text" placeholder="Search for a city." name="city-name">
                <a class ="search-btn" href="#">
                     <i class="fas fa-search"></i>
                </a>
            </div>
            <!-- Search bar -->

            <div class="nav-bar">
                <a href="" class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
            </div>
            <!-- navbar  -->

        </div>
        <!-- top section -->

        <!-- <div class="precipitation">
            <div class="rain-icon">
                <i class="fa-solid fa-droplet"></i>
            </div>

            <div class="rain-data">

            </div>
        </div> -->
        <!-- precipitation  -->

        <div class="mid-section">

            <div class="icon">
                <i id="weather-icon" class=""></i>
            </div>
            <!-- icon  -->

            <div class="weather-type">
                <?php echo $required_data["weather_description"] ?>
                <!-- Displays data fetched from API -->
            </div>
            <!-- weather-type  -->

        </div>
        <!-- mid-section -->

        <div class="bottom-section">
            <div class="city-name">
                <?php echo $required_data["cityName"] ?>
            </div>
            <!-- city name  -->
            
            <div class="for-flex">

                <div class="temperature">
                    <h3><span>
                        <?php echo $required_data["temperature"] ?>
                    </span>°C</h3>
                </div>
                <!-- temperature  -->

                <div class="feels-like">
                    <p>Feels like <span>
                    <?php echo $required_data["feels_like"] ?>
                    </span>°C </p>
                </div>
                <!-- feels like section  -->
            
            </div>
            <!-- For flex  -->
        </div>  
        <!-- bottom-section  -->    

        <div class="footer-section">
            <div class="pressure props">
                <p>Pressure: <span>
                <?php echo $required_data["pressure"] ?>
                </span> hPA</p>
            </div>
            <!-- Pressure  -->

            <div class="humidity props">
                <p>Humidity: <span>
                <?php echo $required_data["humidity"] ?>
                </span>%</p>
            </div>
            <!-- humidity  -->

            <div class="wind props">
                <p>Wind: <span>
                <?php echo $required_data["windSpeed"] ?>
                </span>km/h</p>
            </div>
            <!-- wind  -->
        </div>
        <!-- footer section  -->

    </div>
    <!-- App section  -->

    <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
    <script src="https://kit.fontawesome.com/65ed642159.js" crossorigin="anonymous"></script>
    <script src="SamipMaharjan_2329533.js"></script>
</body>
</html>