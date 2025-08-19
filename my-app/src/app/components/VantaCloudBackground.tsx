import Script from 'next/script';

function VantaCloudbackground() {
  return (
    <div className="fixed inset-0 z-0">
      <div
        id="homepage-background"
        className="w-full h-full"
      ></div>

      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.clouds.min.js"
        strategy="beforeInteractive"
      />
      <Script id="vanta-init" strategy="afterInteractive">
        {`
          if (typeof VANTA !== 'undefined') {
            VANTA.CLOUDS({
              el: "#homepage-background",
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00
            });
          }
        `}
      </Script>
    </div>
  );
}

export default VantaCloudbackground;
