export interface TestyProps {
  title: string;
}

export const Testy = (props: TestyProps) => {
  return <div style={{ background: 'red' }}>{props.title}</div>;
};
