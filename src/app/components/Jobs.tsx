import JobRow from "./JobRow";

export default function Jobs() {
  return (
    <div className=" bg-slate-200 py-5 rounded-3xl ">
      <div className="container max-w-full mx-auto">
        <h2 className="font-bold mb-4 pl-5">Recent jobs</h2>

        <div className="flex flex-col gap-4 mx-5">
          <JobRow />
          <JobRow />
          <JobRow />
          <JobRow />
          <JobRow />
        </div>
      </div>
    </div>
  );
}
