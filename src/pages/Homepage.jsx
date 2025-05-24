import Inbox from "../components/Inbox";
import Chat from "../components/Chat";
import Agent from "../components/Agent";
export default function Homepage() {
  return (
    <main className="bg-[#f2f2f2] xl:w-4/5 w-11/12 h-[90vh] my-14 mx-auto rounded-2xl shadow-2xl flex">
      <Inbox />
      <Chat />
      <Agent />
    </main>
  );
}
