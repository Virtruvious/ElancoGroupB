"use client";

export default function DateSelect({
  start,
  end,
  setStart,
  setEnd,
  submit,
}: any) {
  return (
    <div className="ml-auto">
      <form className="flex flex-col lg:flex-row gap-2">
        <div>
          <span className="font-semibold p-2">From:</span>
          <input
            className="bg-white text-gray-800 font-semibold py-2 px-4 border border-elanco rounded hover:drop-shadow-lg date duration-300
            "
            type="date"
            name="start"
            min="2021-01-01"
            max="2023-12-31"
            onChange={(e) => setStart(e.target.value)}
            value={start}
          />
        </div>
        <div className="text-end">
          <span className="font-semibold p-2">To:</span>
          <input
            className="bg-white text-gray-800 font-semibold py-2 px-4 border border-elanco rounded hover:drop-shadow-lg date duration-300"
            type="date"
            name="end"
            min="2021-01-01"
            max="2023-12-31"
            onChange={(e) => setEnd(e.target.value)}
            value={end}
          />
        </div>
        <button
          className="rounded-md bg-elanco hover:bg-white hover:text-elanco border-2 border-elanco py-2 px-4 ml-2 text-white duration-300"
          type="button"
          onClick={submit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
