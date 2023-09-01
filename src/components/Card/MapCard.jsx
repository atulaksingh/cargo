import React from "react";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
function MapCard() {
  return (
    <>
      <div className="pt-10  ">
        <div>
          <iframe
            title="map"
            className="h-80 lg:h-[750px]"
            width="100%vw"
            height="752"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=5/2%20Dimma%20Swamy%20Dargah%20Street,%20Jawahar%20Nagar,%20Chennai+(Cosmic%20Aviation%20Private%20Limited)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
          {/* <a href="https://maps-generator.com/">Maps Generator</a> */}

          {/* <iframe
            width="520"
            height="400"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=5/2%20Dimma%20Swamy%20Dargah%20Street,%20Jawahar%20Nagar,%20Chennai+(Cosmic%20Aviation%20Private%20Limited)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe> */}
          {/* <a href="https://maps-generator.com/">Maps Generator</a> */}
        </div>
      </div>
    </>
  );
}

export default MapCard;
