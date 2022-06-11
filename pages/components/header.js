export default function  Header({counter}){
    return (
      <header className="flex justify-between bg-teal-600 py-4 items-center">
            <h1 className="text-4xl mx-1">Magic-eight-ball</h1>
            <p> {counter} question Answered</p>
      </header>
    );
}