/* Brand logo shown on the Payload admin login screen and nav header. */
export const Logo = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/logo/logo1.png"
        alt="Mongolian Outdoors"
        width={52}
        height={52}
        style={{ borderRadius: "50%", objectFit: "cover" }}
      />
      <span style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-0.01em" }}>
        Mongolian Outdoors
      </span>
    </div>
  );
};

export default Logo;
