import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { Link } from "@heroui/link";

import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>Discover variety of&nbsp;</span>
          <span className={title({ color: "violet", class: "uppercase" })}>
            memes&nbsp;
          </span>
          <br />
          <div className={subtitle({ class: "mt-4" })}>
            Vital, funny and upbeat memes library.
          </div>
        </div>

        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Get started by choosing memes format{" "}
              <Code color="primary">
                <Link href="/table">Table</Link>
              </Code>{" "}
              <Code color="primary">
                <Link href="/cards">Cards</Link>
              </Code>{" "}
            </span>
          </Snippet>
        </div>
      </section>
    </DefaultLayout>
  );
}
