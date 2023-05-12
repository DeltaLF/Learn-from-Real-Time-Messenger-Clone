import Sidebar from "../components/sidebar/Sidebar";

// async becasue in the furture we will fetch data from db
export default async function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // @ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">{children}</div>
    </Sidebar>
  );
}
