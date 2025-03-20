import { DotPattern } from "../components/magicui/dot-pattern";

const BackgroundPattern = () => (
  <div className="relative h-[500px] w-full overflow-hidden bg-background col-span-3">
    <DotPattern />
    <h2 className="absolute top-[10%] left-[50%] -translate-x-1/2 flex flex-col gap-4 bg-background border rounded-full px-4 py-2 text-center">
      Processed requests will appear here
    </h2>
  </div>
);

export default BackgroundPattern;