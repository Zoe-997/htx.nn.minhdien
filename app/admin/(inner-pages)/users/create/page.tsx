import PageTitle from "@/app/components/admins/PageTitle";
import UserForm from "@/app/components/admins/users/UserForm";

export default function UserCreate() {
  return (
    <div>
      <PageTitle title="Create a new user" />
      <UserForm />
    </div>
  );
}
