import { useState } from "react";

interface Props {
  getUser: (query: string) => Promise<void>;
}

const Form = ({ getUser }: Props) => {
  const [query, setQuery] = useState("");

  return (
    <div className="flex justify-center p-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getUser(query);
        }}
      >
        <input
          className="mr-4 rounded border-2 border-gray-300 p-1"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="rounded bg-blue-700 p-1.5 px-3  text-white hover:bg-blue-600"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Form;
