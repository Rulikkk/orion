export default ({ webp, jpeg, className, style, alt = "" }) => (
  <picture>
    {webp && <source srcSet={webp} type="image/webp" />}
    <source srcSet={jpeg} type="image/jpeg" />
    <img className={className} style={style} src={jpeg} alt={alt} />
  </picture>
);
