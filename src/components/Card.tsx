import Datetime from "./Datetime";
import type { Frontmatter } from "src/types";

export interface Props {
  href?: string;
  post: Frontmatter;
  secHeading?: boolean;
}

const styles = {
  cardContainer: "my-6",
  titleLink:
    "text-skin-accent font-medium text-lg underline-offset-4 decoration-dashed focus-visible:no-underline focus-visible:underline-offset-0 inline-block",
  titleHeading: "font-medium text-lg decoration-dashed hover:underline",
};

const isDev = process.env.NODE_ENV === "development";

export default function Card({ href, post, secHeading = true }: Props) {
  const actualHref = !href ? "#" : isDev ? href : `/garden/${href}`;

  return (
    <li className={styles.cardContainer}>
      <a href={actualHref} className={styles.titleLink}>
        {secHeading ? (
          <h2 className={styles.titleHeading}>{post.title}</h2>
        ) : (
          <h3 className={styles.titleHeading}>{post.title}</h3>
        )}
      </a>
      <Datetime datetime={post.datetime} />
      <p>{post.description}</p>
    </li>
  );
}
