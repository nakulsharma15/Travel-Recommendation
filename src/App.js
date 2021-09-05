import React from "react";
import "./styles.css";
import { useState } from "react";

const travelDB = {
  Asia: [
    {
      name: "India",
      description: "Area: 3.287 million km²",
      rating: "4/5"
    },
    {
      name: "Singapore",
      description: "Area: 728.6 km²",
      rating: "4.8/5"
    },
    {
      name: "Hong Kong",
      description: "Area: 1,106 km²",
      rating: "4.7/5"
    },
    {
      name: "Thailand",
      description: "Area: 513,120 km²",
      rating: "4.5/5"
    }
  ],

  Europe: [
    {
      name: "France",
      description: "Area: 632,734 km²",
      rating: "5/5"
    },
    {
      name: "Spain",
      description: "Area: 505,990 km²",
      rating: "4.9/5"
    },
    {
      name: "Italy",
      description: "Area: 301,340 km2",
      rating: "4.8/5"
    },
    {
      name: "United Kingdom",
      description: "Area: 242,495 km²",
      rating: "4.8/5"
    },
    {
      name: "Germany",
      description: "Area: 357,386 km²",
      rating: "4.7/5"
    }
  ],
  Africa: [
    {
      name: "South Africa",
      description: "Area: 1.22 million km²",
      rating: "5/5"
    },
    {
      name: "Zimbabwe",
      description: "Area: 390,757 km²",
      rating: "4.8/5"
    },
    {
      name: "Kenya",
      description: "Area: 580,367 km²",
      rating: "4.7/5"
    },
    {
      name: "Mauritius",
      description: "Area: 2,040 km²",
      rating: "4.7/5"
    }
  ]
};

export default function App() {
  const [selectedContinent, setContinent] = useState("Asia");
  function genreClickHandler(continent) {
    setContinent(continent);
  }
  return (
    <div className="App">
      <h1>
        {" "}
        <span role="img" aria-label="map">
          {" "}
          🗺️
        </span>{" "}
        Bon Voyage{" "}
      </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Here's a list of top places to visit in Asia, Europe and Africa{" "}
      </p>

      <div>
        {Object.keys(travelDB).map((continent) => (
          <button
            onClick={() => genreClickHandler(continent)}
            style={{
              cursor: "pointer",
              background: "#FEF3C7",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {continent}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {travelDB[selectedContinent].map((travel) => (
            <li
              key={travel.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {travel.name} </div>
              <div style={{ fontSize: "smaller" }}> {travel.description} </div>
              <div style={{ fontSize: "smaller" }}> {travel.rating} </div>
        
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
