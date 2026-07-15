import "./if.css";

type IframeProps = {
  src: string;
};

export function GameIframe(props: IframeProps) {
  return (
    <iframe
      src={props.src}
      width="100%"
      height="1000"
      style={{ border: "none" }}
      className="ifa"
    />
  );
}
