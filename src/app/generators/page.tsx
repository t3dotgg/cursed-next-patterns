import { generatorComponent } from "./helpers/generator-component";

export const dynamic = "force-dynamic";

const sleep = (ms: number) => new Promise<void>((res) => setTimeout(res, ms));

const Steps = generatorComponent(async function* () {
  let i = 0;
  yield <h1>Step {++i}</h1>;
  await sleep(2000);
  yield <h1>Step {++i}</h1>;
  await sleep(2000);
  yield <h1>Step {++i}</h1>;
  await sleep(2000);
  return <h1>Step {++i}</h1>;
});

export default function GeneratorPage() {
  return (
    <div className="h-screen flex flex-col gap-4 justify-center items-center">
      <h1 className="text-xl font-bold">
        The contents below are being streamed
      </h1>
      <div className="bg-gray-800 py-8 w-64 flex justify-center items-center text-xl">
        <Steps />
      </div>
    </div>
  );
}
