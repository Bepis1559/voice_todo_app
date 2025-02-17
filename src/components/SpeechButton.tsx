export function SpeechButton({
  speak,
  text,
  baseSpeakOptions,
  children,
}: speechButtonProps) {
  return (
    <button
      onClick={() => speak({ text: text, ...baseSpeakOptions })}
      type="button"
      className="btn btn-primary">
      {children}
    </button>
  );
}
