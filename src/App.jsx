import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { Search } from "./components/Search";
import { Infoitem } from "./components/Infoitem";

import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [city, setCity] = useState({
    main: "",
    weather: "",
    wind: "",
    sys: "",
  });
  const [serachedCity, setSearchedCity] = useState("");
  const [firstlogin, setFirstLogin] = useState("0");
  const [imageUrl, setImageUrl] = useState("");
  const SearchHandler = function (e) {
    setSearchedCity(e.target.value);
  };

  const handlerSubmit = function () {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${serachedCity}&units=metric&appid=aba6ff9d6de967d5eac6fd79114693cc`
      )
      .then((res) => {
        setCity(res.data);
      })
      .catch(() => {});
  };

  const imgUrl = `https://openweathermap.org/img/wn/${
    { ...city.weather[0] }.icon
  }.png`;
  if (firstlogin === "0") {
    setSearchedCity("Arizona");
    setFirstLogin("1");
  }
  if (firstlogin === "1") {
    handlerSubmit();
    setFirstLogin("2");
  }
  useEffect(() => {
    const fetchCityImage = async () => {
      const apiKey = "oKJkxQKjdDOuu5CH1eS26dendyEaIvAf2JpV4tqSaLNJsn1El8iJhip0";
      const url = `https://api.pexels.com/v1/search?query=${city.name}&per_page=1`;

      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: apiKey,
          },
        });
        if (response.data.photos && response.data.photos.length > 0) {
          setImageUrl(response.data.photos[0].src.medium);
        } else {
          console.log("No images found for the specified city.");
        }
      } catch (error) {
        console.error("Error fetching image from Pexels:", error);
      }
    };

    fetchCityImage();
  }, [city.name]);

  return (
    <div>
      <Container maxWidth="sm">
        <Box
          sx={{
            mt: "50px",
            background: "rgba(120,159,193,0.6)",
            borderStyle: "solid",
            borderColor: "white",
            height: "660px",
            borderRadius: "20px",
          }}
        >
          <Grid container spacing={0.5}>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center", mb: "20px" }}
            >
              <Search
                SearchHandler={SearchHandler}
                handlerSubmit={handlerSubmit}
                serachedCity={serachedCity}
              />
            </Grid>
            <Grid item xs={12}>
              <img
                src={imageUrl}
                alt="Mehrdad"
                height={"200px"}
                width={"100%"}
              />
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  width: "100%",
                  mt: "10px",

                  display: "flex",

                  justifyContent: "center",
                }}
              >
                <Typography variant="h5" component="h2">
                  {city.name}
                </Typography>
                <Divider orientation="vertical" sx={{ margin: "10px" }} />

                <Typography variant="h4" component="h1">
                  {city.main.temp + "°"}
                </Typography>
                <Divider orientation="vertical" sx={{ margin: "10px" }} />
                <Typography variant="h5" component="h2">
                  {{ ...city.weather[0] }.main}
                </Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <img src={imgUrl} alt="icon" width={"120px"} height={"120px"} />
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Infoitem title="Temp" value={city.main.temp + " °"} />
            </Grid>
            <Grid item xs={4}>
              <Infoitem
                title="feels like"
                value={city.main.feels_like + " °"}
              />
            </Grid>
            <Grid item xs={4}>
              <Infoitem title="pressure" value={city.main.pressure + " mb"} />
            </Grid>
            <Grid item xs={4}>
              <Infoitem title="humidity" value={city.main.humidity + "%"} />
            </Grid>
            <Grid item xs={4}>
              <Infoitem title="wind " value={city.wind.speed + " m/s"} />
            </Grid>
            <Grid item xs={4}>
              <Infoitem title="wind deg" value={city.wind.deg + " "} />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "center", mt: 1 }}>
              <a
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontFamily: "fantasy",
                  fontSize: "14px",
                 
                }}
                href="https://www.linkedin.com/in/mehrdad-nazari"
                target=""
              >
                To find out more about me click here!
              </a>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default App;
