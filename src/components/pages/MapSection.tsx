
const MapSection = () => {
  return (
    <div className="h-80 md:h-96 w-full rounded-lg overflow-hidden shadow-md">
      <iframe
        title="Ratų Taškas location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2239.6822823613237!2d21.1519!3d55.7133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e4dc3d6f9c4b0d%3A0x3f0e0d13c17c16d9!2sSvajon%C4%97s%20g.%2024%2C%20Klaip%C4%97da%2094101!5e0!3m2!1sen!2slt!4v1620753467654!5m2!1sen!2slt"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
      />
    </div>
  );
};

export default MapSection;
