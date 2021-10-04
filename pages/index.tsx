export default function Index({ current }: { current: string }) {
  return (
    <>
      {/* <div>現在時刻を表示予定</div> */}
      <div>現在時刻は{current}です。</div>
    </>
  );
}

export async function getStaticProps() {
  const date = new Date();
  const current = date.toLocaleString();
  return {
    props: {
      current,
    },
    revalidate: 10,
  };
}
