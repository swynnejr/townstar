import { google } from "googleapis";
import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const auth = await google.auth.getClient({
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const { id }: string | string[] = query;
  const range = `Sheet4!B${id}:AJ1356`;

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range,
  });

  const [title, content] = response.data.values[0];
  console.log(title, content);

  return {
    props: {
      title,
      content,
    },
  };
};

type Props = {
  title: string;
  content: string;
};

function index({ title, content }: Props) {
  return (
    <article>
      <h1>{title}</h1>
      <div>{content}</div>
    </article>
  );
}

export default index;
