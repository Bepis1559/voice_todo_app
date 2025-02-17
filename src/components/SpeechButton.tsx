export function SpeechButton({
  speak,
  text,
  baseSpeakOptions,
  listenFunc,
  children,
  cancel,
}: speechButtonProps) {
  return (
    <button
      onClick={() => {
        speak({ text: text, ...baseSpeakOptions });
        listenFunc({ continuous: true });
        if (cancel) {
          cancel();
        }
      }}
      type="button"
      className="btn btn-primary">
      {children}
    </button>
  );
}
