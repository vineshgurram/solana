export default function Banner({ className, children, MobileBanner, DesktopBanner, AlternateText }) {
  return (
    <section className={`bs-banner ${className}`}>
      <picture>
        <source media="(max-width: 768px)" srcSet={MobileBanner} />
        <source media="(min-width: 768px)" srcSet={DesktopBanner} />
        <img src={DesktopBanner} className="img-fluid banner-img" alt={AlternateText} />
      </picture>
      <div className="text-wrapper">
      {children}
    </div>
    </section>
  );
}
