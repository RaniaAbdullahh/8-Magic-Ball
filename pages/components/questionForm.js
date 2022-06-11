export default function QuestionForm({formHandler}) {
    return (
      <form className="flex w-1/2 bg-gray-200 mx-auto my-5 p-2" onSubmit={formHandler}>
        <input
          name="question"
          placeholder="Ask AQuestion..."
          className="flex-auto p-2"
        />
        <button className="px-4 py-1 mx-2  bg-gray-500 rounded-full">
          Ask
        </button>
      </form>
    );
    
}