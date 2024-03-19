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
      <form>
        Fromㅤ
        <input
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-elanco rounded shadow"
          type="date"
          name="start"
          min="2021-01-01"
          max="2023-12-31"
          onChange={(e) => setStart(e.target.value)}
          value={start}
        />
        ㅤToㅤ
        <input
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-elanco rounded shadow"
          type="date"
          name="end"
          min="2021-01-01"
          max="2023-12-31"
          onChange={(e) => setEnd(e.target.value)}
          value={end}
        />
        <button
          className="rounded bg-elanco py-2 px-4 ml-2 text-white"
          type="button"
          onClick={submit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
