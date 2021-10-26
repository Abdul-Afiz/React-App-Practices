const CloseIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="close"
    fill="none"
    viewBox="0 0 24 24"
    width="1rem"
    color="rgba(255, 0, 0, 0.5)"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export default CloseIcon;
