import { useRouter } from "next/router";

export const ExampleComponent = ({ href = '' }) => {
  const router = useRouter();
  return (
    <button onClick={() => router.push(href)}>
      The current route is: "{router.asPath}"
    </button>
  );
}
