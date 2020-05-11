import { useState, useEffect } from "react";

// good sample how to implement https://github.com/yosbelms/react-progressive-loader/blob/master/src/img.tsx

const PlainPic = ({
  webp,
  jpeg,
  className,
  style,
  alt = "",
  loading = "auto",
  onLoad
}) => (
  <picture>
    {webp && <source srcSet={webp} type="image/webp" />}
    {jpeg && <source srcSet={jpeg} type="image/jpeg" />}
    <img
      className={className}
      style={style}
      src={jpeg || webp}
      alt={alt}
      loading={loading}
      onLoad={onLoad}
    />
  </picture>
);

const ProgressivePic = ({
  webp,
  jpeg,
  trace,
  className,
  imgClassName,
  imgStyle,
  alt = "",
  loading = "auto"
}) => {
  let [loaded, setLoaded] = useState(false);
  let [fullImageReady, setFullImageReady] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, [loaded]);
  return (
    <div className={className}>
      <img
        className={`w-full h-full object-cover object-center pointer-events-none ${imgClassName}`}
        style={imgStyle}
        src={trace}
        alt={alt}
        loading={loading}
      />
      {loaded && (
        <PlainPic
          className={`w-full h-full object-cover object-center pointer-events-none absolute top-0 ${imgClassName} ${
            fullImageReady ? "opacity-100" : "opacity-0"
          }`}
          jpeg={jpeg}
          webp={webp}
          style={{
            transition: "opacity 1s ease-in-out",
            ...imgStyle
          }}
          alt={alt}
          loading={loading}
          onLoad={() => setFullImageReady(true)}
        />
      )}
    </div>
  );
};

const Pic = ({ trace, ...others }) =>
  trace ? (
    <ProgressivePic trace={trace} {...others} />
  ) : (
    <PlainPic {...others} />
  );

export default Pic;
