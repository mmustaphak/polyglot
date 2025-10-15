import { useActionState } from "react";
import action from "../actions";
import langOptions from "../languages";

export default function Main(): React.JSX.Element {
  const [formState, formAction, isPending] = useActionState(action, null);

  const renderedOptions = langOptions.map((lang) => (
    <div key={lang.id} className="flex gap-x-2">
      <input type="radio" name="language" value={lang.value} />
      <label className="flex gap-2">
        <p className="text-xl font-bold">{lang.value}</p>
        <img className="border border-gray-500" src={lang.img} alt=" " />
      </label>
    </div>
  ));

  if (!formState?.error) {
    return <h1 className="text-center text-2xl">An Error Occurred Please refresh the page..</h1>;
  }

  return (
    <form
      action={formAction}
      className="mx-auto mt-8 w-4/5 max-w-md rounded-2xl border-4 p-4"
    >
      <h1 className="my-3 text-center text-xl font-bold text-[#035A9D]">
        Text to Translate 👇
      </h1>
      <textarea
        className="min-h-24 w-full bg-[#EFF0F4] p-2.5 font-semibold placeholder:text-[#333333]"
        name="text"
        placeholder="How are you?"
        value={formState?.message}
        disabled={Boolean(formState?.message)}
      ></textarea>

      {formState === null && !isPending && (
        <>
          <h1 className="my-4 text-center text-xl font-bold text-[#035A9D]">
            Select language 👇
          </h1>
          <div className="flex flex-col gap-y-2">{renderedOptions}</div>

          <button
            className="mt-8 w-full rounded bg-[#035A9D] py-2 text-2xl font-bold text-white"
            type={formState ? "reset" : "submit"}
            onClick={() => formState && console.log("Form State")}
          >
            Translate
          </button>
        </>
      )}

      {isPending && <h1 className="mx-auto p-4">Loading.....</h1>}

      {formState != null && !isPending && (
        <>
          <h1 className="my-3 text-center text-xl font-bold text-[#035A9D]">
            Text to Translate 👇
          </h1>
          <textarea
            className="min-h-24 w-full bg-[#EFF0F4] p-2.5 font-semibold placeholder:text-[#333333]"
            name="text"
            value={formState.message}
            placeholder="How are you?"
            disabled={true}
          ></textarea>
          <button
            className="mt-8 w-full rounded bg-[#035A9D] py-2 text-2xl font-bold text-white"
            onClick={() => formAction(null)}
          >
            Reset
          </button>
        </>
      )}
    </form>
  );
}
