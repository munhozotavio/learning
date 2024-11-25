import Board from "@/components/Board";

export default function Home() {
  return (
    <div className="wrapper">
      <Board columns={8} lines={8} firstColor="#fff"/>
    </div>
  );
}
