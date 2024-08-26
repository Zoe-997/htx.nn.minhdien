import UserForm from "@/app/components/admins/users/UserForm";

export default async function UserPageDetail({
  params,
}: {
  params: { id: string };
}) {
  return (
    <>
      <UserForm userId={params.id} />
    </>
  );
}
