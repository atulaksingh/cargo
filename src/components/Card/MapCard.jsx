import React from "react";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
function MapCard() {
  return (
    <>
      <div className="pt-10">
        <div>
          <iframe
            title="map"
            width="100%vw"
            height="752"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=958&amp;height=352&amp;hl=en&amp;q=Santacruz%20East%20Mumbai%20Maharashtra+(panache%20media)&amp;t=h&amp;z=8&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
          {/* <a href="https://maps-generator.com/">Maps Generator</a> */}
        </div>
      </div>
    </>
  );
}

export default MapCard;
