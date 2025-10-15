type FormAction =
  | {
      message: string;
      prompt: string;
      error?: undefined;
    }
  | {
      error: string;
      message?: undefined;
      prompt?: undefined;
    }
  | null;

export default async function formAction(
  _: FormAction,
  payload: FormData | null,
): Promise<FormAction> {
  if (payload === null) {
    return null;
  }

  try {
    const { text } = Object.fromEntries(payload);
    const res = await fetch(import.meta.env.VITE_WORKER_BASE_URL, {
      method: "POST",
      body: payload,
    });
    const { message } = (await res.json()) as { message: string };
    return { message, prompt: text as string };
  } catch (err) {
    if (err instanceof Error) {
      console.error("Error: ", err.message);
      return { error: err.message };
    } else {
      console.error("An Unexpected Error has occurred", err);
      return { error: "Unexpected Errors" };
    }
  }
}
