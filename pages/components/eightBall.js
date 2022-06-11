export default function EightBall({ latestAnswer }) {
  return (
    <div className="w-96 h-96 mx-auto bg-neutral-900 rounded-full">
      <div className="relative flex items-center justify-center w-48 h-48 bg-neutral-100 rounded-full top-16 left-16">
        <p className="text-x1 text-center">
          {latestAnswer.length ? latestAnswer : "no Answer"}
        </p>
      </div>
    </div>
  );
}